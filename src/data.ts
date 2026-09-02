export type Scenario = {
  id: string;
  probability: number;
  title: string;
  plain: string;
  developer: string;
  signal: string;
  accent: string;
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
  { year: "2027", title: "Agenten werden Kollegen", body: "Routine-Code, Tests und Migrationen wandern zuerst. Gute Specs werden zur neuen Programmiersprache." },
  { year: "2028", title: "Der Review-Stau", body: "Code entsteht schneller als Menschen ihn prüfen können. Risiko-Routing und automatische Reviewer werden Pflicht." },
  { year: "2029", title: "Harness baut Harness", body: "Agenten verbessern Tests, Repo-Struktur und ihre eigene Arbeitsumgebung. Die Produktionsmaschine wird reflexiv." },
  { year: "2030", title: "Der Arbeitstag kippt", body: "Zuverlässige Langzeit-Agenten bearbeiten ganze Arbeitsblöcke. Menschen steuern Portfolios statt Tickets." },
  { year: "2031", title: "Urteil wird knapp", body: "Ausführen ist billig. Problemwahl, Vertrauen, Haftung und Compute-Allokation bestimmen den Wert." },
  { year: "2032", title: "Ziele sind der Code", body: "Die wichtigste technische Fähigkeit ist, Absicht in überprüfbare, begrenzte Systeme zu übersetzen." },
];

export const sources = [
  { name: "OpenAI Harness Engineering", note: "Wie ein Team mit agentenlesbaren Repos und Feedback-Loops arbeitet.", url: "https://openai.com/index/harness-engineering/" },
  { name: "Anthropic: When AI builds itself", note: "Interne Daten zu AI-R&D, Review-Engpässen und rekursiver Verbesserung.", url: "https://www.anthropic.com/institute/recursive-self-improvement" },
  { name: "METR Time Horizons", note: "Misst, wie lange Aufgaben sein dürfen, die Agenten noch zuverlässig lösen.", url: "https://metr.org/time-horizons/" },
  { name: "Epoch AI GATE", note: "Ein Wirtschaftsmodell für Compute, Automatisierung und Rückkopplung.", url: "https://epoch.ai/gate/docs" },
  { name: "DORA 2025", note: "AI verstärkt gute und schlechte Organisationssysteme.", url: "https://dora.dev/research/2025/dora-report/" },
  { name: "AI 2027 Takeoff Forecast", note: "Ein extremer, explizit bedingter Stresstest mit sehr breiter Unsicherheit.", url: "https://ai-2027.com/research/takeoff-forecast" },
];
