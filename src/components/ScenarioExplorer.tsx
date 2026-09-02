import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowUpRight } from "@phosphor-icons/react";
import { scenarios } from "../data";

export function ScenarioExplorer() {
  const [activeId, setActiveId] = useState(scenarios[0].id);
  const reduce = useReducedMotion();
  const active = scenarios.find((scenario) => scenario.id === activeId)!;

  return (
    <div className="scenario-explorer">
      <div className="scenario-rail" role="tablist" aria-label="Zukunftsszenarien">
        {scenarios.map((scenario) => (
          <button
            key={scenario.id}
            role="tab"
            aria-selected={activeId === scenario.id}
            onClick={() => setActiveId(scenario.id)}
          >
            <span>{scenario.probability}%</span>
            {scenario.title}
          </button>
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.article
          key={active.id}
          className="scenario-detail"
          initial={reduce ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduce ? undefined : { opacity: 0, y: -12 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="scenario-label">{active.accent}</span>
          <strong className="scenario-number">{active.probability}%</strong>
          <h3>{active.title}</h3>
          <p>{active.plain}</p>
          <div className="scenario-answer">
            <ArrowUpRight size={24} />
            <div><span>Dein Fokus</span><strong>{active.developer}</strong></div>
          </div>
          <small>Frühes Signal: {active.signal}</small>
        </motion.article>
      </AnimatePresence>
    </div>
  );
}
