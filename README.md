# Die Neue – Website

Statische Seite mit [Astro](https://astro.build), zweisprachig (Deutsch ohne Präfix, Englisch unter `/en`).

## Entwickeln
```
npm install
npm run dev      # http://localhost:4321
npm run build    # prüft Typen und baut nach dist/
```

## Struktur
- `src/pages/` – Seiten (DE) und `src/pages/en/` (EN)
- `src/lib/copy.ts` – Texte der Startseite, beide Sprachen
- `src/content/insights/{de,en}/` – Artikel als Markdown; gleiche `slug` = gleiche Artikel in beiden Sprachen
- `src/content/cases/{de,en}/` – Cases
- `src/styles/global.css` – Design-Tokens (Farben, Typo, Abstände)
- `assets-raw/` – Rohmaterial (Fotos, Logos) von der alten Seite, wird nicht ausgeliefert
- `public/` – wird 1:1 ausgeliefert (Logo, Favicon, robots.txt)

## Deploy (Plesk)
Jeder Push auf `main` baut die Seite in GitHub Actions und schreibt das fertige HTML in den Branch **`deploy`** (nur `dist/`-Inhalt, keine Quellen).
In Plesk: Git-Repository `https://github.com/ChrisHelmbrecht/dieneue.git`, Branch `deploy`, Deploy-Modus „Automatisch“, Zielverzeichnis = Document Root der (Sub-)Domain. Node.js wird auf dem Server nicht benötigt.

## Video zu einem Artikel
Im Frontmatter eines Insights (DE und EN jeweils):
```yaml
video:
  youtube: "VXGDHZIGf40"        # nur die ID aus der YouTube-URL
  duration: "PT6M30S"           # optional, Länge
  uploadDate: 2026-11-20        # optional, sonst Artikeldatum
  transcript: |                 # optional, Absätze mit Leerzeile trennen
    Erster Absatz …

    Zweiter Absatz …
```
Das Video ersetzt dann das Coverbild (Cover dient als Vorschaubild, YouTube lädt erst nach Klick). Zusätzlich werden strukturierte Daten (VideoObject) ausgegeben, damit Google und KI-Suchen Video, Artikel und Autor verknüpfen.
