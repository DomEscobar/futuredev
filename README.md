# Future Dev

Eine verständliche, interaktive Reise durch die Zukunft der Softwareentwicklung von 2027 bis 2032.

Die Website erklärt Coding Agents, Harness Engineering und rekursive Verbesserung ohne Vorwissen. Sie trennt beobachtbare Signale, logische Ableitungen und subjektive Szenario-Wahrscheinlichkeiten.

## Was enthalten ist

- ELI5-Erklärung des rekursiven Entwicklungsloops
- interaktiver Engpass-Simulator
- Zeitreise von 2027 bis 2032
- fünf alternative Zukunftsszenarien
- Rollenkarte für Entwickler
- verlinkte Primärquellen und vollständiger Forschungsbericht

## Lokal starten

```bash
npm install
npm run dev
```

Die Entwicklungsseite läuft standardmäßig auf `http://localhost:5173`.

## Produktionsbuild

```bash
npm run build
npm run preview
```

## Docker

```bash
docker compose up --build -d
```

Der Container ist lokal über Port `4178` erreichbar. Ein Reverse Proxy übernimmt Domain und TLS.

## Forschungsgrundlage

- [Vollständiger Bericht](docs/full-report.md)
- [Evidenzpunkte](docs/evidence.jsonl)
- [Quellenkatalog](docs/sources.jsonl)

## Aktualisieren

1. Neue Primärquelle in `docs/sources.jsonl` ergänzen.
2. Konkrete Behauptung mit URL in `docs/evidence.jsonl` eintragen.
3. Szenario oder Text in `src/data.ts` aktualisieren.
4. Mit `npm run build` und Browser-Screenshots prüfen.

## Lizenz

Inhalte und Code stehen unter der MIT-Lizenz. Die zwei Bildmotive wurden für dieses Projekt generiert.
