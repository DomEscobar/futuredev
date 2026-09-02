import { useMemo, useState } from "react";
import { Gauge, ShieldCheck, Factory, UsersThree } from "@phosphor-icons/react";

type Factor = "capability" | "verification" | "harness" | "organization";

const factorMeta: Record<Factor, { label: string; icon: typeof Gauge; hint: string }> = {
  capability: { label: "Modellfähigkeit", icon: Gauge, hint: "Kann die KI die Aufgabe überhaupt lösen?" },
  verification: { label: "Verifikation", icon: ShieldCheck, hint: "Erkennen Tests und Evals falsche Lösungen?" },
  harness: { label: "Harness", icon: Factory, hint: "Hat der Agent Kontext, Tools und klare Grenzen?" },
  organization: { label: "Organisation", icon: UsersThree, hint: "Kann das Team Output entscheiden und verantworten?" },
};

export function BottleneckLab() {
  const [values, setValues] = useState<Record<Factor, number>>({
    capability: 78,
    verification: 46,
    harness: 58,
    organization: 34,
  });

  const result = useMemo(() => {
    const entries = Object.entries(values) as [Factor, number][];
    const [weakest, score] = entries.sort((a, b) => a[1] - b[1])[0];
    const map: Record<Factor, { title: string; role: string; copy: string }> = {
      capability: { title: "Die KI ist noch der Engpass", role: "Systementwickler", copy: "Menschen implementieren die schwierigen Teile. Agenten helfen punktuell." },
      verification: { title: "Wahrheit ist der Engpass", role: "Eval Engineer", copy: "Mehr Output hilft nicht. Du musst beweisen können, welcher Output stimmt." },
      harness: { title: "Die Umgebung ist der Engpass", role: "Harness Engineer", copy: "Das Modell kann mehr, als Repo, Tools und Rechte sicher zulassen." },
      organization: { title: "Entscheidungen sind der Engpass", role: "Technical Governor", copy: "Die Maschine produziert. Menschen kommen mit Auswahl und Verantwortung nicht hinterher." },
    };
    return { ...map[weakest], score };
  }, [values]);

  return (
    <div className="lab-shell">
      <div className="lab-controls">
        {(Object.keys(factorMeta) as Factor[]).map((factor) => {
          const meta = factorMeta[factor];
          const Icon = meta.icon;
          return (
            <label className="factor" key={factor}>
              <span className="factor-title"><Icon size={21} weight="duotone" />{meta.label}<strong>{values[factor]}</strong></span>
              <span className="factor-hint">{meta.hint}</span>
              <input
                aria-label={meta.label}
                type="range"
                min="10"
                max="100"
                value={values[factor]}
                style={{ "--value": `${values[factor]}%` } as React.CSSProperties}
                onChange={(event) => setValues((current) => ({ ...current, [factor]: Number(event.target.value) }))}
              />
            </label>
          );
        })}
      </div>
      <output className="lab-result" aria-live="polite">
        <span>Nächster Fokus</span>
        <h3>{result.title}</h3>
        <p>{result.copy}</p>
        <div><strong>{result.role}</strong><small>Schwächster Faktor: {result.score}/100</small></div>
      </output>
    </div>
  );
}
