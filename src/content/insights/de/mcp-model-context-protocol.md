---
title: "MCP: Warum deine Software bald kein Frontend mehr braucht"
description: "Was ein MCP ist, wie du deine KI damit an Mail, Kalender, CRM und Werbekonto anschließt – und warum die Oberfläche, wie wir sie kennen, gerade ausstirbt."
date: 2026-11-04
lang: de
slug: mcp-model-context-protocol
tags: [ki, technik]
draft: true
---

Heute Morgen habe ich drei Programme nicht geöffnet. Nicht Gmail, nicht den Kalender, nicht den Werbeanzeigenmanager von Meta. Trotzdem waren die Mails sortiert, der Termin verschoben und der Bericht über die Kampagne lag auf dem Tisch.

Gemacht hat das meine KI. Nicht, weil sie besonders schlau ist, sondern weil sie Zugriff hat. Über MCP.

Wenn du das Kürzel noch nicht kennst: Kein Problem. Die meisten, mit denen ich spreche, kennen es nicht. In einem Jahr wirst du es nicht mehr hören, weil es so selbstverständlich ist wie WLAN.

## Was ist ein MCP?

MCP steht für Model Context Protocol. Klingt nach IT-Abteilung, ist aber ganz einfach.

Eine KI wie Claude, ChatGPT oder Gemini weiß viel über die Welt. Über deine Firma weiß sie nichts. Sie sieht deine Mails nicht, deine Kunden nicht, deine Zahlen nicht. Bisher hast du ihr das alles per Copy & Paste hingeschoben. Text rein, Antwort raus, Antwort wieder zurück ins Programm kopieren. Das ist KI auf dem Niveau eines Praktikanten ohne Passwort.

Ein MCP ist der Stecker dazwischen. Ein Programm – sagen wir dein CRM – stellt einen MCP-Server bereit. Der sagt der KI: Das hier kannst du bei mir tun. Kunden suchen. Einen Kontakt anlegen. Ein Angebot öffnen. Die KI verbindet sich damit und kann es dann tun. Mit deinen Rechten, in deinem Konto.

Das beste Bild dafür ist USB-C. Früher hatte jedes Gerät seinen eigenen Stecker. Heute steckst du alles in dieselbe Buchse. MCP ist die Buchse für KI.

Erfunden hat das Ganze Anthropic, die Firma hinter Claude, Ende 2024. Inzwischen haben OpenAI, Google und Microsoft es übernommen, und seit Dezember 2025 gehört der Standard keiner Firma mehr, sondern einer Stiftung unter dem Dach der Linux Foundation. Das ist wichtig. Es heißt: Das ist kein Hype eines einzelnen Anbieters, auf den du setzt. Das ist die Steckdose, auf die sich alle geeinigt haben.

## Wie verbinde ich meine KI damit?

Kürzeste Antwort: in den Einstellungen.

In Claude heißen die Dinger Konnektoren, in ChatGPT Apps oder Connectors. Du gehst in die Einstellungen, suchst den Dienst, den du anbinden willst – Gmail, Google Drive, Notion, Slack, HubSpot, Canva, was auch immer –, klickst auf Verbinden und meldest dich einmal bei diesem Dienst an. Fertig. Ab dann kannst du im Chat sagen: „Such mir alle Mails von Kunde X aus dem letzten Monat raus und fass zusammen, was offen ist.“ Und es passiert.

Bei Programmen, die noch nicht in der Liste stehen, braucht es einen Schritt mehr: Du trägst die Adresse ihres MCP-Servers selbst ein. Das ist eine URL, die der Anbieter in seiner Hilfe angibt. Zwei Minuten, wenn man weiß, wo man klicken muss. Zwei Stunden, wenn nicht.

Bei mir hängen inzwischen Gmail, Kalender, Google Drive, das Meta-Werbekonto, Mailchimp, Planable für Social Media und Adobe dran. Die Website, die du gerade liest, habe ich übrigens mit KI gebaut, die direkt in GitHub schreibt und auf meinen Server ausliefert. Kein einziges Mal habe ich dafür ein Entwicklerprogramm geöffnet.

## Was kann man damit machen?

Ein paar Beispiele aus dem echten Leben, nicht aus der Werbung:

- **Posteingang:** „Welche Anfragen der letzten Woche habe ich noch nicht beantwortet? Schreib mir zu jeder einen Antwortentwurf.“ Die Entwürfe landen in Gmail. Lesen, anpassen, abschicken musst du immer noch selbst. Gut so.
- **Werbung:** „Wie liefen die Meta-Kampagnen im Oktober im Vergleich zum September? Wo verbrennen wir Geld?“ Statt durch zwölf Reiter im Werbeanzeigenmanager zu klicken, bekommst du eine Antwort in Klartext.
- **Termine:** „Finde nächste Woche zwei Stunden für den Workshop mit Team X, die beiden passen.“ Die KI schaut in die Kalender und schlägt vor.
- **Dokumente:** „Such im Drive das Angebot für Kunde Y von letztem Jahr und mach daraus eine neue Version mit den Preisen von heute.“
- **Social Media:** „Plan mir fünf LinkedIn-Posts zu diesem Artikel und leg sie als Entwurf in Planable ab.“

Das Muster ist immer gleich: Du sagst, was du willst. Die KI holt sich, was sie braucht, aus den Programmen, in denen es liegt. Und legt das Ergebnis dort ab, wo es hingehört.

## Die meisten Anbieter sind schon da. Der Rest kommt.

Schau mal in die Liste deiner Software. Notion, Slack, HubSpot, Salesforce, Atlassian, Stripe, Shopify, Canva, Figma, Asana, monday – fast alle großen Namen bieten inzwischen einen offiziellen MCP-Server an. Bei den kleineren, gerade bei deutschen Branchenlösungen, fehlt er oft noch.

Ich sage voraus: nicht mehr lange. Wer 2027 keinen MCP-Server anbietet, ist für jeden Kunden, der mit KI arbeitet, einfach unsichtbar. Seine Daten liegen in einem Silo, an das die KI nicht rankommt. Und dann wechselt der Kunde zu dem Anbieter, bei dem es geht.

## Software ohne Oberfläche

Und jetzt die eigentliche Pointe.

Seit dreißig Jahren bauen Softwarefirmen vor allem eins: Oberflächen. Menüs, Buttons, Dashboards, Einstellungsseiten. Ganze Abteilungen machen nichts anderes. Und wir alle verbringen einen erstaunlichen Teil unserer Arbeitszeit damit, uns durch diese Oberflächen zu klicken. Wo war noch mal der Export? Unter „Berichte“ oder unter „Einstellungen“?

Wenn die KI direkt mit dem Programm spricht, braucht es diese Oberfläche nicht mehr. Nicht für dich jedenfalls. Die KI braucht keine Buttons. Sie braucht eine Liste von Dingen, die sie tun darf. Genau das ist ein MCP-Server.

Ich bin ziemlich sicher: Viele Programme, die wir heute täglich öffnen, werden wir in ein paar Jahren nie mehr sehen. Sie laufen weiter, im Hintergrund, als Datenbank mit einem MCP davor. Die Oberfläche ist dann der Chat. Oder eine Stimme. Oder gar nichts mehr, weil die KI ohnehin weiß, was als Nächstes zu tun ist.

Für Softwareanbieter ist das ein Erdbeben. Für dich als Nutzer ist es eine gute Nachricht. Weniger klicken, mehr erledigen.

## Und wo ist der Haken?

Den gibt es natürlich. Ein MCP gibt der KI echte Rechte in echten Programmen. Das ist der Sinn der Sache – und das Risiko.

Anfang 2026 sind die ersten ernsthaften Sicherheitslücken aufgetaucht, unter anderem eine Masche namens „Tool Poisoning“: Ein manipulierter MCP-Server versteckt Anweisungen, die der Nutzer nicht sieht, die KI aber befolgt. Klingt nach Science-Fiction, ist aber dokumentiert.

Drei einfache Regeln:

1. **Nur offizielle MCP-Server** vom Anbieter selbst verbinden, nicht irgendwas aus einem Forum.
2. **„Immer erlauben“ ausschalten**, wo es um Senden, Löschen oder Geld geht. Lass dir zeigen, was die KI tun will, bevor sie es tut.
3. **Datenschutz klären**, bevor Kundendaten durch die KI laufen. Welches Tool, welcher Vertrag, welche Server. Das ist keine Raketenwissenschaft, aber es muss einmal sauber gemacht werden.

## Und du?

Nutzt du schon MCPs? Wenn ja, welche – und was erledigst du damit? Mich interessiert wirklich, was bei anderen funktioniert und was nicht.

Und wenn du noch gar nicht angefangen hast: Buch dir eine Session mit mir. Wir verbinden deine KI mit den Programmen, die du wirklich nutzt, richten die Rechte so ein, dass nichts schiefgeht, und ich zeige dir, wie du damit arbeitest. Danach fragst du dich, wie du es vorher ausgehalten hast.

[Schreib mir.](/kontakt)
