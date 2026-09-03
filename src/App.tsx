import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { ArrowDown, ArrowRight, ArrowUpRight, GithubLogo, Moon, Sun, BookOpenText, CheckCircle, Warning } from "@phosphor-icons/react";
import { BottleneckLab } from "./components/BottleneckLab";
import { CompanyEvidence } from "./components/CompanyEvidence";
import { DevelopmentLadder } from "./components/DevelopmentLadder";
import { HarnessWorkshop } from "./components/HarnessWorkshop";
import { ScenarioExplorer } from "./components/ScenarioExplorer";
import { sources, years } from "./data";

const chapters = [
  ["shift", "Der Wechsel"],
  ["proof", "Heute"],
  ["harness", "Harness"],
  ["beyond", "Nach Specs"],
  ["scenarios", "Szenarien"],
  ["roles", "Deine Rolle"],
];

function App() {
  const reduce = useReducedMotion();
  const [theme, setTheme] = useState<"light" | "dark">(() =>
    window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark",
  );
  const [activeChapter, setActiveChapter] = useState("shift");
  const [activeYear, setActiveYear] = useState(0);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && setActiveChapter(entry.target.id)),
      { rootMargin: "-38% 0px -52%" },
    );
    chapters.forEach(([id]) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Future Dev Startseite">future<span>dev</span></a>
        <nav aria-label="Kapitel">
          {chapters.map(([id, label]) => <a key={id} className={activeChapter === id ? "active" : ""} href={`#${id}`}>{label}</a>)}
        </nav>
        <button className="icon-button" onClick={() => setTheme(theme === "dark" ? "light" : "dark")} aria-label="Farbschema wechseln">
          {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </header>

      <main id="top">
        <section className="hero">
          <img src="/images/recursive-machine.webp" width="1586" height="992" alt="Eine technische Entwicklungsmaschine mit sichtbaren Rückkopplungen" fetchPriority="high" />
          <div className="hero-scrim" />
          <motion.div className="hero-copy" initial={reduce ? false : { opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="eyebrow">Softwareentwicklung 2027-2032</span>
            <h1>Wer baut, wenn Software selbst baut?</h1>
            <p>Eine verständliche Reise durch Agenten, Harnesses, RSI und die neuen Aufgaben der Entwickler.</p>
            <a className="primary-action" href="#shift">Loslesen <ArrowDown size={18} /></a>
          </motion.div>
        </section>

        <section className="thesis-band" id="shift">
          <div className="section-wrap thesis-grid">
            <div>
              <span className="chapter-mark">Die einfache Erklärung</span>
              <h2>Code wird billig.<br />Urteil wird teuer.</h2>
            </div>
            <div className="eli5-copy">
              <p>Stell dir eine Fabrik vor. Früher haben Entwickler jedes Teil selbst gebaut. Jetzt bauen sie Maschinen, die Teile bauen.</p>
              <p>Das Problem verschwindet nicht. Es wandert: Wer sagt der Maschine, was richtig ist? Wer stoppt sie? Wer haftet?</p>
            </div>
          </div>
        </section>

        <section className="proof-section" id="proof">
          <div className="section-wrap">
            <h2>Die Zukunft läuft intern schon an</h2>
            <p className="section-intro">Die Namen unterscheiden sich. Das Betriebssystem dahinter konvergiert auf Kontext, Werkzeuge, Verifikation und Rechte.</p>
            <CompanyEvidence />
            <p className="smith-note"><strong>Agent Smith, nüchtern betrachtet:</strong> Mit mittlerer Sicherheit ein realer interner Google-Agent. Nicht belegt ist, dass Smith allein einen bestimmten Anteil von Googles Code schreibt.</p>
          </div>
        </section>

        <section className="loop-section" id="loop">
          <div className="section-wrap">
            <h2>Der Kreislauf hinter der Kurve</h2>
            <p className="section-intro">Ein kleiner Fortschritt kann mehrere Ebenen gleichzeitig beschleunigen.</p>
            <div className="loop-track" aria-label="Rekursiver Entwicklungszyklus">
              {["Besseres Modell", "Besserer Agent", "Besseres Harness", "Mehr Experimente", "Nächstes Modell"].map((item, index) => (
                <motion.div key={item} className="loop-node" initial={reduce ? false : { opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.6 }} transition={{ delay: index * 0.09 }}>
                  <span>{index + 1}</span><strong>{item}</strong>{index < 4 && <ArrowRight size={19} />}
                </motion.div>
              ))}
            </div>
            <div className="loop-conclusion"><Warning size={28} weight="duotone" /><p>Singularität beginnt praktisch dort, wo dieser Loop schneller lernt, als Menschen ihn prüfen und organisieren können.</p></div>
          </div>
        </section>

        <section className="lab-section" id="lab">
          <div className="section-wrap">
            <span className="chapter-mark">Selbst ausprobieren</span>
            <h2>Wo springt der Engpass hin?</h2>
            <p className="section-intro">Verändere die vier Faktoren. Das schwächste Glied bestimmt die nächste Entwicklerrolle.</p>
            <BottleneckLab />
          </div>
        </section>

        <section className="workshop-section" id="harness">
          <div className="section-wrap">
            <h2>Der Agent ist nur der Handwerker</h2>
            <p className="section-intro">Das Harness ist Werkstatt, Auftrag, Werkzeugschrank, Qualitätskontrolle und Sicherheitszaun. Wähle einen echten Use Case.</p>
            <HarnessWorkshop />
          </div>
        </section>

        <section className="beyond-section" id="beyond">
          <div className="section-wrap beyond-layout">
            <div className="beyond-copy">
              <h2>Specs sind nicht das Ende</h2>
              <p>Sie werden zum generierten Zwischenformat. Der Mensch wandert von der Lösung zur Absicht, zu Beweisen und schließlich zur Kontrolle des gesamten Loops.</p>
              <div className="compiler-line"><span>Absicht</span><ArrowRight size={18} /><span>Spec</span><ArrowRight size={18} /><span>Evidenz</span><ArrowRight size={18} /><span>Entscheidung</span></div>
            </div>
            <DevelopmentLadder />
          </div>
        </section>

        <section className="timeline-section">
          <div className="section-wrap timeline-layout">
            <div className="timeline-copy">
              <h2>Keine gerade Linie</h2>
              <p>Jede gelöste Bremse enthüllt die nächste. Die Jahreszahlen sind Orientierung, keine Fahrpläne.</p>
              <div className="year-buttons" role="tablist" aria-label="Jahre 2027 bis 2032">
                {years.map((item, index) => <button role="tab" aria-selected={activeYear === index} key={item.year} onClick={() => setActiveYear(index)}>{item.year}</button>)}
              </div>
              <motion.div className="year-detail" key={years[activeYear].year} initial={reduce ? false : { opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}>
                <strong>{years[activeYear].title}</strong>
                <p>{years[activeYear].body}</p>
              </motion.div>
            </div>
            <img src="/images/developer-2032.webp" width="1536" height="1024" loading="lazy" alt="Ein Entwickler bewertet mehrere automatisierte Arbeitsabläufe" />
          </div>
        </section>

        <section className="scenario-section" id="scenarios">
          <div className="section-wrap">
            <h2>Fünf Welten sind plausibel</h2>
            <p className="section-intro">Die Prozentwerte sind eine begründete Synthese, keine Messwerte. Klicke dich durch die Konsequenzen.</p>
            <ScenarioExplorer />
          </div>
        </section>

        <section className="roles-section" id="roles">
          <div className="section-wrap">
            <span className="chapter-mark">Was jetzt zählt</span>
            <h2>Der Entwickler steigt eine Ebene höher</h2>
            <div className="role-grid">
              {[
                ["Intent", "Macht Ziele, Nicht-Ziele und Konflikte explizit."],
                ["Evidence", "Definiert, wann ein Ergebnis wirklich stimmt."],
                ["Harness", "Baut Kontext, Tools, Rechte und Feedback-Loops."],
                ["Reliability", "Begrenzt Schäden und macht Systeme rückholbar."],
                ["Domain", "Bringt echtes Fach- und Kausalwissen ein."],
                ["Governance", "Verteilt Compute, Risiko und Entscheidungsrechte."],
              ].map(([title, body], index) => (
                <motion.article key={title} initial={reduce ? false : { opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{ delay: (index % 3) * 0.08 }}>
                  <CheckCircle size={24} weight="duotone" /><h3>{title}</h3><p>{body}</p>
                </motion.article>
              ))}
            </div>
            <div className="responsibility-map">
              <div><strong>Definieren</strong><p>Intent besitzen, Aufgaben schneiden und implizites Wissen maschinenlesbar machen.</p></div>
              <div><strong>Kontrollieren</strong><p>Fähigkeiten, Rechte, Evals, Agenten und Freigabeschwellen als System entwerfen.</p></div>
              <div><strong>Verantworten</strong><p>Observability, Kosten, Durchsatz, technische Entropie und reale Konsequenzen tragen.</p></div>
            </div>
            <blockquote>Der Agent führt die Arbeit aus. Du besitzt weiterhin die Konsequenzen.</blockquote>
          </div>
        </section>

        <section className="evidence-section">
          <div className="section-wrap evidence-layout">
            <div><BookOpenText size={34} weight="duotone" /><h2>Was davon ist Evidenz?</h2><p>Primärquellen stützen die Richtung. Die genaue Geschwindigkeit bleibt offen.</p></div>
            <div className="source-list">
              {sources.map((source) => <a key={source.name} href={source.url} target="_blank" rel="noreferrer"><span><strong>{source.name}</strong><small>{source.note}</small></span><ArrowUpRight size={20} /></a>)}
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="section-wrap footer-inner">
          <div><strong>futuredev.huecki.com</strong><p>Ein offenes, aktualisierbares Denkmodell. Stand: September 2026.</p></div>
          <a href="https://github.com/DomEscobar/futuredev" target="_blank" rel="noreferrer"><GithubLogo size={20} />GitHub</a>
        </div>
      </footer>
    </>
  );
}

export default App;
