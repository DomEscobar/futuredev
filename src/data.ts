export type Scenario = {
  id: string;
  probability: number;
  title: string;
  plain: string;
  developer: string;
  signal: string;
  accent: string;
};

export type CompanyPattern = {
  id: string;
  name: string;
  mode: string;
  proof: string;
  lesson: string;
  confidence: "hoch" | "mittel";
  url: string;
};

export type HarnessUseCase = {
  id: string;
  label: string;
  brief: string;
  loop: string[];
  evidence: string;
  boundary: string;
};

export type DevelopmentStage = {
  id: string;
  label: string;
  human: string;
  machine: string;
  bottleneck: string;
};

export const scenarios: Scenario[] = [
  {
    id: "managed",
    probability: 45,
    title: "Die gesteuerte Agentenwelt",
    plain: "KI wird schnell besser, aber Tests, Regeln und Organisation halten Schritt.",
    developer: "Du baust Specs, Evals, Harnesses und sichere Grenzen.",
    signal: "Private Evals werden wichtiger als öffentliche Benchmarks.",
    accent: "Basis-Szenario",
  },
  {
    id: "takeoff",
    probability: 20,
    title: "Die Software-Explosion",
    plain: "KI verbessert die Werkzeuge, mit denen die nächste KI gebaut wird. Der Kreislauf beschleunigt sich selbst.",
    developer: "Dein Job schrumpft auf Ziele, Kontrolle, Besitz und Notbremsen.",
    signal: "Die Zeit zwischen Modellgenerationen fällt schneller als die Trainingskosten steigen.",
    accent: "Schneller Takeoff",
  },
  {
    id: "plateau",
    probability: 20,
    title: "Das zackige Plateau",
    plain: "KI ist brillant bei klaren Aufgaben, stolpert aber über Kontext, Haftung und widersprüchliche Ziele.",
    developer: "Du bleibst tief im System und nutzt Agenten als parallele Arbeitskraft.",
    signal: "Benchmarks steigen, reale Durchlaufzeit stagniert.",
    accent: "Mensch plus Maschine",
  },
  {
    id: "regulated",
    probability: 10,
    title: "Die geteilte Welt",
    plain: "Websites laufen autonom. Medizin, Energie und Finanzen bleiben streng kontrolliert.",
    developer: "Audit, Formal Methods und Domänenwissen werden Premium-Fähigkeiten.",
    signal: "Haftungsregeln unterscheiden klar zwischen niedrigen und hohen Risiken.",
    accent: "Regulierte Zonen",
  },
  {
    id: "rollback",
    probability: 5,
    title: "Der harte Rückschlag",
    plain: "Ein schwerer Agenten-Vorfall führt zu eingeschränkten Rechten und Pflichtfreigaben.",
    developer: "Incident Response, Herkunftsnachweise und Wiederaufbau dominieren.",
    signal: "Ein Vorfall erzeugt Regulierung schneller als ein neues Modell neue Fähigkeiten.",
    accent: "Krise und Neustart",
  },
];

export const years = [
  { year: "2027", title: "Agenten werden Kollegen", body: "Routine-Code, Tests und Migrationen wandern zuerst. Specs werden zur gemeinsamen Zwischensprache." },
  { year: "2028", title: "Der Review-Stau", body: "Code entsteht schneller als Menschen ihn prüfen können. Risiko-Routing und automatische Reviewer werden Pflicht." },
  { year: "2029", title: "Harness baut Harness", body: "Agenten verbessern Tests, Repo-Struktur und ihre eigene Arbeitsumgebung. Die Produktionsmaschine wird reflexiv." },
  { year: "2030", title: "Der Arbeitstag kippt", body: "Zuverlässige Langzeit-Agenten bearbeiten ganze Arbeitsblöcke. Menschen steuern Portfolios statt Tickets." },
  { year: "2031", title: "Urteil wird knapp", body: "Ausführen ist billig. Problemwahl, Vertrauen, Haftung und Compute-Allokation bestimmen den Wert." },
  { year: "2032", title: "Grenzen sind der Code", body: "Menschen definieren Absicht, Wahrheitsbedingungen und Risiko. Systeme erzeugen Specs und Umsetzung zunehmend selbst." },
];

export const companyPatterns: CompanyPattern[] = [
  {
    id: "google",
    name: "Google",
    mode: "Eine interne Agentenplattform",
    proof: "Googles DevAI-Stellenanzeige nennt Antigravity, Jetski, Marina, Cider, CLI, Hub, Skills, Sub-Agenten, MCP-Server und Guardrails.",
    lesson: "Der Vorteil ist die Plattform aus Kontext, Werkzeugen und Kontrolle. Agent Smith ist wahrscheinlich eine Oberfläche darauf, nicht das ganze System.",
    confidence: "hoch",
    url: "https://www.google.com/about/careers/applications/jobs/results/110538186614022854-staff-software-engineer-applied-ai",
  },
  {
    id: "meta",
    name: "Meta",
    mode: "Kontext als Infrastruktur",
    proof: "Mehr als 50 spezialisierte Agenten kartierten 4.100 proprietäre Dateien und erzeugten kurze, laufend aktualisierte Kontextdateien.",
    lesson: "Nicht mehr Kontext ist automatisch besser. Kurzer, geprüfter und pfadspezifischer Kontext spart Agentenarbeit.",
    confidence: "hoch",
    url: "https://engineering.fb.com/2026/04/06/developer-tools/how-meta-used-ai-to-map-tribal-knowledge-in-large-scale-data-pipelines/",
  },
  {
    id: "microsoft",
    name: "Microsoft",
    mode: "Multi-Modell plus Feldmessung",
    proof: "Microsoft rollte Copilot CLI und Claude Code breit aus und untersuchte Produktivität in Feldexperimenten statt nur auf Benchmarks.",
    lesson: "Adoption und echte Durchlaufzeit müssen gemessen werden. Offline-Qualität allein sagt wenig über den Teamgewinn.",
    confidence: "hoch",
    url: "https://www.microsoft.com/en-us/research/publication/the-effects-of-generative-ai-on-high-skilled-work-evidence-from-three-field-experiments-with-software-developers/",
  },
  {
    id: "amazon",
    name: "Amazon",
    mode: "Migration und Wissensarbeit",
    proof: "Amazon setzt Agenten auf interne Wissenssuche, Dependency-Updates und große Transformationen mit Steering Files und Produktionsfeedback an.",
    lesson: "Die stärksten frühen Use Cases sind große, wiederholbare und automatisch prüfbare Arbeiten.",
    confidence: "mittel",
    url: "https://aws.amazon.com/blogs/devops/how-generative-ai-is-transforming-developer-workflows-at-amazon/",
  },
  {
    id: "openai",
    name: "OpenAI",
    mode: "Harness zuerst",
    proof: "Bei einem internen Experiment strukturierten Menschen Repo, Regeln, Tests und Feedback-Loops. Codex erzeugte den Anwendungscode.",
    lesson: "Die menschliche Arbeit wandert von einzelnen Zeilen zur Produktionsumgebung des Agenten.",
    confidence: "mittel",
    url: "https://openai.com/index/harness-engineering/",
  },
  {
    id: "anthropic",
    name: "Anthropic",
    mode: "Dogfooding bis in AI-R&D",
    proof: "Anthropic meldet breite interne Claude-Code-Nutzung und AI-Unterstützung in der eigenen Forschung. Review und Research Judgment bleiben Bremsen.",
    lesson: "RSI beginnt als schnellere Forschungsoperation, lange bevor ein System allein seinen Nachfolger erfindet.",
    confidence: "hoch",
    url: "https://www.anthropic.com/news/how-ai-is-transforming-work-at-anthropic",
  },
];

export const harnessUseCases: HarnessUseCase[] = [
  {
    id: "bug",
    label: "Bugfix",
    brief: "Fehler reproduzieren und als Regression festhalten.",
    loop: ["Reproduzieren", "Test schreiben", "Beheben", "Gesamtsuite prüfen"],
    evidence: "Fehlender Test ist vorher rot und nach dem Fix grün.",
    boundary: "Kein Verhalten außerhalb des betroffenen Flows ändern.",
  },
  {
    id: "feature",
    label: "Feature",
    brief: "Ein Produktziel in kleine, prüfbare Verträge zerlegen.",
    loop: ["Intent klären", "Spec erzeugen", "Implementieren", "Flow testen"],
    evidence: "API-, Browser- und Akzeptanztests plus offene Risiken.",
    boundary: "Schema, Payment oder Produktion nur nach Freigabe.",
  },
  {
    id: "migration",
    label: "Migration",
    brief: "Eine große Änderung in sichere Batches schneiden.",
    loop: ["Vorkommen finden", "Batch ändern", "Build prüfen", "Canary ausrollen"],
    evidence: "Jede Charge ist reproduzierbar, messbar und rückrollbar.",
    boundary: "Batchgröße und Fehlerrate haben harte Stoppschwellen.",
  },
  {
    id: "incident",
    label: "Incident",
    brief: "Logs und Änderungen untersuchen, ohne den Schaden zu vergrößern.",
    loop: ["Signale sammeln", "Hypothesen bilden", "Sandbox prüfen", "Runbook ergänzen"],
    evidence: "Zeitlinie, getestete Ursache und neuer Regressionstest.",
    boundary: "Produktionsänderungen benötigen menschliche Freigabe.",
  },
  {
    id: "ui",
    label: "UI",
    brief: "Nicht nur bauen, sondern im echten Browser bedienen.",
    loop: ["Implementieren", "App starten", "Flows bedienen", "Screens prüfen"],
    evidence: "Desktop, Mobile, Konsole, Overflow und Interaktion sind geprüft.",
    boundary: "Ein grüner Build allein gilt nicht als Abnahme.",
  },
];

export const developmentStages: DevelopmentStage[] = [
  { id: "prompt", label: "Prompt-driven", human: "Wunsch formulieren", machine: "Eine Lösung erzeugen", bottleneck: "Mehrdeutigkeit" },
  { id: "spec", label: "Spec-driven", human: "Vertrag schreiben", machine: "Gegen Kriterien bauen", bottleneck: "Falsche Spezifikation" },
  { id: "eval", label: "Evidence-driven", human: "Wahrheit definieren", machine: "Beweise liefern", bottleneck: "Messbarkeit" },
  { id: "intent", label: "Intent-driven", human: "Wirkung und Grenzen setzen", machine: "Specs und Varianten erzeugen", bottleneck: "Zielfunktion" },
  { id: "policy", label: "Policy-driven", human: "Rechte und Risiko verteilen", machine: "Innerhalb der Policy handeln", bottleneck: "Governance" },
  { id: "reflexive", label: "Self-improving", human: "Loop und Notbremse besitzen", machine: "Harness und Evals verbessern", bottleneck: "Kontrolle" },
];

export const sources = [
  { name: "OpenAI Harness Engineering", note: "Wie ein Team mit agentenlesbaren Repos und Feedback-Loops arbeitet.", url: "https://openai.com/index/harness-engineering/" },
  { name: "Anthropic: When AI builds itself", note: "Interne Daten zu AI-R&D, Review-Engpässen und rekursiver Verbesserung.", url: "https://www.anthropic.com/institute/recursive-self-improvement" },
  { name: "METR Time Horizons", note: "Misst, wie lange Aufgaben sein dürfen, die Agenten noch zuverlässig lösen.", url: "https://metr.org/time-horizons/" },
  { name: "Epoch AI GATE", note: "Ein Wirtschaftsmodell für Compute, Automatisierung und Rückkopplung.", url: "https://epoch.ai/gate/docs" },
  { name: "DORA 2025", note: "AI verstärkt gute und schlechte Organisationssysteme.", url: "https://dora.dev/research/2025/dora-report/" },
  { name: "AI 2027 Takeoff Forecast", note: "Ein extremer, explizit bedingter Stresstest mit sehr breiter Unsicherheit.", url: "https://ai-2027.com/research/takeoff-forecast" },
  { name: "Google DevAI", note: "Öffentliche Stellenanzeige mit internem Agenten-Stack, Skills, MCP und Guardrails.", url: "https://www.google.com/about/careers/applications/jobs/results/110538186614022854-staff-software-engineer-applied-ai" },
  { name: "Meta Context Agents", note: "Spezialisierte Agenten machen proprietäres Wissen kompakt und maschinenlesbar.", url: "https://engineering.fb.com/2026/04/06/developer-tools/how-meta-used-ai-to-map-tribal-knowledge-in-large-scale-data-pipelines/" },
  { name: "Anthropic Work Study", note: "Interne Nutzung, PR-Durchsatz und die Verschiebung menschlicher Arbeit.", url: "https://www.anthropic.com/news/how-ai-is-transforming-work-at-anthropic" },
];
