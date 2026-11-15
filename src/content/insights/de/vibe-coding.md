---
title: "Vibe Coding. Braucht man keine Programmierer mehr?"
description: "Jeder bekommt heute lauffähigen Code von einer KI. Was er nicht sieht: was auf dem Server kaputtgeht – und wie schnell ein Agent das Budget leerläuft. Warum Entwickler bleiben, nur schneller werden."
date: 2026-11-12
lang: de
slug: "vibe-coding"
tags: [ki, technik]
cover: ../../../assets/insights/vibe-coding/vibe-coding-cover.webp
coverAlt: "Vibe Coding. Braucht man keine Programmierer mehr? – dieneue.social"
draft: false
---

Letztes Jahr hat ein bekannter KI-Forscher einen Begriff für etwas geprägt, das viele längst gemacht haben: Du beschreibst, was du willst, die KI schreibt den Code, du führst ihn aus, du beschreibst, was nicht geht, die KI repariert es. Den Code selbst liest du nie wirklich. Du gehst nach Gefühl.

Vibe Coding.

Es funktioniert. Das ist nicht der umstrittene Teil. Der umstrittene Teil ist, was danach passiert.

## Was man damit wirklich machen kann

Mehr, als die meisten denken. Eine Landingpage. Ein Tool, das deine Verkaufszahlen aus drei Excel-Dateien zieht und ein Diagramm daraus macht. Ein Skript, das 4.000 Fotos umbenennt. Ein Prototyp der App, über die du seit zwei Jahren redest. Ein internes Dashboard. Ein WhatsApp-Bot für deine Reservierungen.

Alles an einem Nachmittag, ohne Entwickler. Ich mache das selbst, fast täglich. Für einen Prototyp oder ein Einmal-Tool ist das das Beste, was kleinen Firmen seit der Tabellenkalkulation passiert ist.

## Kann also jeder „normale“ Mensch jetzt Software schreiben?

Ja. Und genau da wird es interessant.

Ein normaler Mensch bekommt lauffähigen Code. Was er nicht kann: den Unterschied erkennen zwischen Code, der funktioniert, und Code, der *heute, auf diesem Laptop, mit diesem einen Nutzer* funktioniert. Auf dem Bildschirm sehen beide gleich aus. Der Unterschied zeigt sich später, auf dem Server, mit echten Daten und echten Fremden, die draufklicken.

## Wo es schiefgeht: auf dem Server

Hauptsächlich an zwei Stellen.

**Sicherheit.** Die KI baut dir ohne Murren ein Login, das Passwörter im Klartext speichert, ein Upload-Feld, das alles annimmt, eine Datenbankabfrage, die sich über die Adresszeile umschreiben lässt, und einen API-Schlüssel, der im Code liegt, wo ihn jeder lesen kann. Nicht, weil das Modell schlecht ist. Sondern weil du nicht danach gefragt hast – und es nicht weiß, dass du nicht wusstest, dass man danach fragen muss.

**Performance.** Mit zehn Einträgen läuft der Code prima. Mit 50.000 lädt er bei jedem Seitenaufruf die ganze Datenbank in den Speicher, macht eine Abfrage in einer Schleife in einer weiteren Schleife und cached nichts. Dein Server kippt am ersten Tag um, an dem es zählt – meistens an dem Tag, an dem du den Newsletter verschickt hast.

Keins der beiden Probleme taucht beim Vibing auf. Beide tauchen im Betrieb auf.

## Warum ein Entwickler mit KI den Laien mit KI schlägt

Das ist der Punkt, den die „Programmierer braucht keiner mehr“-Fraktion falsch versteht.

Ein erfahrener Entwickler benutzt dieselben Tools. Der Unterschied ist, was in den Prompt wandert. Dreißig Jahre Wissen darüber, wo Dinge brechen, wandern in den Prompt. „Nutze parametrisierte Abfragen. Prüfe den Upload. Keine Schlüssel ins Repository. Paginiere die Liste. Schreib einen Test für den Grenzfall.“ Der Laie schreibt „bau mir ein Login“. Der Entwickler schreibt zwei Absätze, von denen der Laie nicht weiß, dass es sie gibt.

Der Entwickler weiß außerdem, wie das Ding aufgebaut sein muss, bevor die erste Zeile steht – welche Teile miteinander reden, was passiert, wenn einer ausfällt, wo es später wachsen muss. Das entscheidet nicht die KI. Das entscheidest du. Wenn du es nicht kannst, entscheidet die KI für dich – und zwar jedes Mal anders.

Ergebnis: gleiches Tool, gleiches Modell, und der Entwickler bekommt etwas, das jahrelang läuft. Der Laie bekommt etwas, das man vorführen kann.

## Die Rechnung, vor der dich keiner warnt

Diese Tools rechnen nach Tokens ab – grob gesagt nach der Textmenge, die ins Modell rein- und rausgeht. Eine Frage, ein paar Cent. In Ordnung.

Aber moderne Coding-Tools sind nicht eine Frage. Sie sind Agenten. Der Agent liest deine Dateien, schreibt Code, führt ihn aus, liest den Fehler, schreibt um, führt wieder aus. Jede Runde liest die gesamte bisherige Unterhaltung noch einmal mit. Nach zehn Runden kostet jeder Schritt das Zehnfache des ersten. Jetzt lass ihn an einem Problem hängen, das er nicht lösen kann – und das tut er, gern, eine Stunde lang – und du hast vor dem Mittagessen das Budget einer Woche verbrannt.

Ich habe Leuten dabei zugesehen. Keine dummen Leute. Leute, die nicht wussten, dass „nochmal versuchen“ ein Preisschild hat – und dass der Preis steigt, je länger man versucht.

Ein Entwickler merkt die Schleife nach der zweiten Runde, stoppt sie und korrigiert den Prompt. Ein Anfänger schaut auf den Fortschrittsbalken.

## Die Tools, kurz

Claude Code, OpenAI Codex und Gemini CLI sind die ernsthaften Agenten: Sie sitzen im Terminal oder Editor, lesen dein ganzes Projekt und arbeiten stundenlang. Cursor und GitHub Copilot packen dasselbe in einen Editor. Perplexity Computer und ähnliche „Mach-alles“-Agenten setzen obendrauf und steuern mehrere Modelle gleichzeitig. Alle gut. Keins ersetzt das Wissen, wonach man eigentlich fragt.

## Was heißt das für dich

Du brauchst weiterhin Programmierer. Nur weniger Stunden davon – und die Stunden sind mehr wert.

Ein guter Entwickler schafft mit diesen Tools in zwei Tagen, was früher zwei Wochen gedauert hat. Das ist die eigentliche Geschichte. Nicht „jeder kann jetzt programmieren“, sondern: Die, die es schon konnten, sind plötzlich fünfmal so schnell – und der Abstand zu allen anderen ist größer geworden, nicht kleiner.

Wenn irgendwo in deiner Firma ein vibe-gecodetes Tool läuft und du nicht genau weißt, was drinsteckt: Lass jemanden draufschauen, bevor der Newsletter rausgeht. Und wenn du etwas bauen willst und dich fragst, ob du überhaupt einen Entwickler brauchst: Das ist das Gespräch, das ich fast jede Woche führe. Gern auch mit dir.

*Chris Helmbrecht führt Die Neue, eine Beratung für Marketing und KI in München. Er baut seit 1997 digitale Produkte und nutzt KI-Coding-Agenten täglich – mit Vorsicht.*
