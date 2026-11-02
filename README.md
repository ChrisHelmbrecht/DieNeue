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
