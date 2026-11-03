<?php
/*
 * Kontaktformular – Versand per PHP mail() über den Plesk-Mailserver.
 * Erwartet POST (multipart/form-data) mit name, email, company, topic, message, _gotcha (Honeypot).
 * Antwortet mit JSON {ok:true} oder {ok:false, error:"…"}.
 */
declare(strict_types=1);
header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store');

$TO       = 'info@dieneue.social';
$FROM     = 'info@dieneue.social';   // muss zur Domain passen (SPF/DKIM), Absender des Kunden kommt als Reply-To
$SUBJECT  = 'Anfrage über dieneue.social';
$MAX_LEN  = 5000;

function fail(string $msg, int $code = 400): never {
  http_response_code($code);
  echo json_encode(['ok' => false, 'error' => $msg]);
  exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') fail('method', 405);
if (!empty($_POST['_gotcha'])) { echo json_encode(['ok' => true]); exit; } // Bot: still "ok" zurückgeben

$clean = fn(string $k, int $max = 200): string => trim(mb_substr(strip_tags((string)($_POST[$k] ?? '')), 0, $max));
$name    = $clean('name');
$email   = $clean('email');
$company = $clean('company');
$topic   = $clean('topic');
$message = $clean('message', $MAX_LEN);

if ($name === '' || $message === '') fail('missing');
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) fail('email');
if (preg_match('/[\r\n]/', $name . $email . $topic)) fail('header'); // Header-Injection

// Rate-Limit: max. 5 Anfragen pro Stunde. Gespeichert wird nur ein Hash der IP, Dateien älter als 1 h werden gelöscht.
$dir = sys_get_temp_dir();
foreach (glob($dir . '/dieneue-contact-*.txt') ?: [] as $old) { if (filemtime($old) < time() - 3600) @unlink($old); }
$bucket = $dir . '/dieneue-contact-' . hash('sha256', ($_SERVER['REMOTE_ADDR'] ?? '') . date('Y-m-d')) . '.txt';
$hits = is_file($bucket) ? array_filter(array_map('intval', file($bucket)), fn($t) => $t > time() - 3600) : [];
if (count($hits) >= 5) fail('rate', 429);
$hits[] = time();
@file_put_contents($bucket, implode("\n", $hits));

$body = implode("\n", [
  "Name:    $name",
  "Firma:   $company",
  "E-Mail:  $email",
  "Thema:   $topic",
  "",
  $message,
  "",
  "— gesendet " . date('d.m.Y H:i') . " über das Kontaktformular auf dieneue.social",
]);

$headers = [
  "From: Die Neue Website <$FROM>",
  "Reply-To: $name <$email>",
  "MIME-Version: 1.0",
  "Content-Type: text/plain; charset=UTF-8",
  "Content-Transfer-Encoding: 8bit",
  "X-Mailer: dieneue-contact",
];
$subject = '=?UTF-8?B?' . base64_encode("$SUBJECT: $topic") . '?=';

$sent = mail($TO, $subject, $body, implode("\r\n", $headers), "-f$FROM");
if (!$sent) fail('send', 500);
echo json_encode(['ok' => true]);
