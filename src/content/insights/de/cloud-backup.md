---
title: "Die Cloud ist auch nur ein Keller voller Server"
description: "Liegen deine Firmendaten nur in der Cloud? Dann hast du kein Backup. Dieses Wochenende brannte nach einem Drohnenangriff ein Yandex-Rechenzentrum aus, meine 5 TB alte Daten inklusive.…"
date: 2026-10-12
lang: de
slug: "cloud-backup"
tags: [technik, recht]
cover: ../../../assets/insights/cloud-backup/76f95fbd-6dc2-45da-adbe-a8612c6df00c.webp
coverAlt: "Daten & Backup"
draft: false
---

**Liegen deine Firmendaten in der Cloud? Das heisst nicht, dass Deine Daten dort sicher vor Verlust sind. Selbst mit Backup in der Cloud.**

Viele von uns denken so – Mittelständler, kleine Firmen, Freiberufler: Wozu noch eine Festplatte im Büro? Ich schieb alles in die Cloud. Liegt dann bei Amazon, bei DigitalOcean, bei irgendeinem großen Anbieter. Die haben Backups, die haben Sicherheitsleute, die haben Notstrom. Da kann nichts passieren.

Doch. Kann es.

## Meine 5 Terabyte bei Yandex

Ich hatte aus meiner Moskauer Zeit noch einen Cloud-Speicher bei Yandex. 5 Terabyte. Alte Sachen: Webseiten aus den 90ern, frühe Projekte, Kram, den man aus Nostalgie aufhebt. Yandex war damals deutlich billiger als die Konkurrenz, also bin ich auch nach dem Umzug nach München dabeigeblieben.

Als ich das Abo mit westlicher Kreditkarte verlängert habe, hieß es: Ihre Daten liegen ab jetzt auf einem Server in Finnland. Lagen sie nicht. Sie lagen in Russland.

In der Nacht auf den 8. Oktober haben Drohnen das Yandex-Rechenzentrum in Sassowo getroffen, Region Rjasan. Großbrand. Yandex hat inzwischen selbst bestätigt: Der Brand nach dem Angriff hat einen Teil der Cloud-Infrastruktur erwischt, der Betrieb dort ist komplett eingestellt. Einen Tag später hat es einen zweiten Yandex-Standort in der Region Kaluga getroffen. Und Yandex kann bis heute nicht sagen, ob die Technik in Sassowo überhaupt noch zu retten ist.

Meine Daten? Ich rechne nicht damit, sie wiederzusehen. Ist mir egal – ich habe eine zweite Kopie. Aber stell dir vor, das wären deine Rechnungen gewesen. Deine Kundendaten. Deine Verträge.

## Nicht nur Russland. Auch Amazon.

Wer jetzt denkt „Russland, Krieg, selber schuld“: Anfang März 2026 wurden zwei Rechenzentren von Amazon Web Services in den Emiraten direkt von Drohnen getroffen, eines in Bahrain beschädigt.

Mitte September kam dann die Ansage von Amazon: Daten, die *nur* in der getroffenen Zone in den Emiraten lagen, sind nicht wiederherstellbar. In Bahrain hat AWS nach eigener Aussage alle Möglichkeiten ausgeschöpft. Weitergearbeitet haben die Kunden, die irgendwo anders noch eine Kopie hatten. Die anderen nicht.

Das ist Amazon. Der größte Cloud-Anbieter der Welt.

## Und in Europa? Da reicht ein Feuer.

Es braucht keinen Krieg. März 2021, Straßburg: Beim französischen Hoster OVH, damals Europas größter Anbieter, brennt ein Rechenzentrum komplett aus, ein zweites zum Teil. Millionen Webseiten sind offline. Viele Kunden verlieren alles, weil das Backup extra gekostet hätte und sie es sich gespart haben. Und manche mit Backup auch – weil die Sicherung in der Halle nebenan stand. Am selben Standort.

Oder 2024: Google Cloud löscht durch einen internen Konfigurationsfehler das komplette Konto eines australischen Pensionsfonds. Inklusive Backups. Zwei Wochen Ausfall. Gerettet hat die Firma eine Kopie bei einem anderen Anbieter.

Dazu kommen Hackerangriffe, Erpressungstrojaner, Sabotage, hybride Kriegsführung, Bedienfehler. Meine aktuellen Daten liegen übrigens in Frankfurt. Ich schlafe deswegen nicht völlig ruhig.

## Cloud klingt nach Wolke. Ist aber eine Halle.

Die Cloud ist kein magischer Ort. Es sind Computer in einem Gebäude, irgendwo. Und Gebäude können brennen, absaufen oder vom Strom abgeschnitten werden.

Dazu kommt etwas, das die wenigsten wissen: Der Anbieter verspricht dir in der Regel, dass sein Dienst läuft. Nicht, dass er deine Daten zusätzlich sichert. Das ist oft ein Extrapaket. Schau in deinen Vertrag.

## Was du tun kannst – in drei Stufen

## Stufe 1: Eine Kopie bei dir

Die einfachste Lösung: eine große externe Festplatte ins Büro oder nach Hause stellen und die Daten regelmäßig runterziehen. Kann natürlich auch kaputtgehen. Aber dass das Rechenzentrum und deine Festplatte gleichzeitig verschwinden, ist sehr unwahrscheinlich.

## Stufe 2: Ein kleiner Datenspeicher mit zwei Platten

Besser: ein sogenanntes NAS. Ein Kasten, etwa so groß wie ein Schuhkarton, mit zwei Festplatten drin. Alles wird auf beiden Platten gleichzeitig gespeichert (das nennt man RAID). Geht eine Platte nach ein paar Jahren kaputt, steckst du eine neue rein – nichts ist verloren. Das Gerät kann sich automatisch mit deiner Cloud abgleichen, du musst also nicht dran denken.

Kosten: Ein Markengerät ohne Platten liegt bei knapp 500 Euro. Mit Platten bist du je nach Größe bei 700 bis 1.000 Euro. Für die meisten kleinen Firmen reichen ein paar Terabyte locker.

**Wichtig, und das übersehen viele:** RAID ist kein Backup. Wenn du aus Versehen einen Ordner löschst oder ein Trojaner alles verschlüsselt, passiert das auf beiden Platten gleichzeitig. Und der automatische Abgleich mit der Cloud spiegelt den Schaden brav mit. Deshalb die Funktion für „Snapshots“ oder „Versionen“ einschalten – die hat jedes gängige NAS. Dann kannst du auf den Stand von gestern oder letzter Woche zurück.

## Stufe 3: Die Cloud ein zweites Mal

Die Profi-Variante: einen zweiten Cloud-Speicher an einem anderen Standort anlegen und die Daten dorthin spiegeln. Geht beim gleichen Anbieter in einer anderen Region – noch besser bei einem anderen Anbieter. Der Google-Fall zeigt, warum.

Achtung Datenschutz: Sobald personenbezogene Daten im Spiel sind – Mitarbeiter, Kunden, schon E-Mails reichen –, wird ein Server in den USA oder Asien schnell zum Problem. Die einfache Lösung: zweiten Standort innerhalb der EU wählen, also zum Beispiel Frankfurt plus Amsterdam. Für reine Webseiten-Dateien oder technische Datenbanken ohne Personenbezug ist das entspannter. Bei allem anderen: Hol dir einen Datenschutz-Profi.

**Die sicherste Lösung ist alles zusammen:** NAS im Büro plus zwei Cloud-Standorte. Dann dürfte praktisch nichts mehr passieren. Kostet natürlich mehr – muss jeder für sich abwägen, was ein Totalverlust kosten würde.

## Die Faustregel der Profis: 3-2-1

IT-Leute haben dafür eine simple Regel, die auch das Bundesamt für Sicherheit in der Informationstechnik (BSI) empfiehlt:

- **3** Kopien deiner Daten
- auf **2** verschiedenen Arten von Speicher (z. B. Cloud und NAS)
- davon **1** an einem anderen Ort

Und noch eins: Ein Backup, das nie ausprobiert wurde, ist eine Hoffnung, kein Backup. Einmal im Jahr testweise etwas zurückholen.

## Fünf Fragen an deine IT oder deine Agentur

Du musst kein Techniker sein. Du musst nur die richtigen Fragen stellen:

1. Wo genau liegen unsere Daten – Anbieter, Land, Stadt?
2. Gibt es eine Kopie außerhalb dieses Rechenzentrums? Und außerhalb dieses Anbieters?
3. Ist die Datensicherung im Vertrag enthalten oder ein Extra?
4. Wann haben wir zuletzt getestet, ob wir Daten wirklich zurückholen können?
5. Wie lange könnten wir ohne unsere Daten arbeiten?

Wenn bei einer dieser Fragen Schweigen herrscht, weißt du, was zu tun ist.

## Mein Fazit

Ich bin heilfroh, dass ich von meinen 5 Terabyte noch eine Kopie habe. Waren eh nur alte Sachen, ich heul dem nicht hinterher. Aber wären das Geschäftsdaten gewesen – die hätte ich natürlich nie bei Yandex liegen gehabt. Und genau da liegt der Punkt: Man denkt immer, es trifft die anderen.
