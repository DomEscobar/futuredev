# Future Dev

Eine verständliche, interaktive Reise durch die Zukunft der Softwareentwicklung von 2027 bis 2032.

Die Website erklärt Coding Agents, Harness Engineering und rekursive Verbesserung ohne Vorwissen. Sie trennt beobachtbare Signale, logische Ableitungen und subjektive Szenario-Wahrscheinlichkeiten.

## Was enthalten ist

- ELI5-Erklärung des rekursiven Entwicklungsloops
- interaktiver Engpass-Simulator
- öffentliche und geleakte Signale aus Google, Meta, Microsoft, Amazon, OpenAI und Anthropic
- praktische Harness-Werkstatt mit fünf echten Use Cases
- interaktive Stufen von Prompt-driven bis zu selbstverbessernden Entwicklungssystemen
- Zeitreise von 2027 bis 2032
- fünf alternative Zukunftsszenarien
- Rollen- und Verantwortungslandkarte für Agentic Engineers
- verlinkte Primärquellen und vollständiger Forschungsbericht

## Der rote Faden

```text
Code wird billig
  -> Big Tech baut interne Agentenplattformen
  -> Harnesses machen Agenten produktionsfähig
  -> Specs werden zum Zwischenformat
  -> Intent, Evidenz und Policies werden zum menschlichen Fokus
  -> selbstverbessernde Loops erzeugen neue Chancen und Kontrollprobleme
```

Die Website unterscheidet bewusst zwischen:

- **Evidenz:** öffentlich dokumentierte Systeme, Studien und Unternehmensangaben
- **Inferenz:** logische Ableitungen wie die Einordnung von Agent Smith als Oberfläche auf Googles DevAI-Plattform
- **Prognose:** subjektive Szenario-Wahrscheinlichkeiten für 2027-2032

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
