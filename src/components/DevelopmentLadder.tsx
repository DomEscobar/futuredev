import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowRight, PersonSimpleRun, Robot } from "@phosphor-icons/react";
import { developmentStages } from "../data";

export function DevelopmentLadder() {
  const [activeId, setActiveId] = useState("eval");
  const reduce = useReducedMotion();
  const active = developmentStages.find((stage) => stage.id === activeId)!;
  const activeIndex = developmentStages.findIndex((stage) => stage.id === activeId);

  return (
    <div className="ladder-shell">
      <div className="ladder-track" role="tablist" aria-label="Entwicklungsstufen nach Spec-driven Development">
        {developmentStages.map((stage, index) => (
          <button
            key={stage.id}
            role="tab"
            aria-selected={stage.id === activeId}
            onClick={() => setActiveId(stage.id)}
            style={{ "--step": index } as React.CSSProperties}
          >
            <span>{index + 1}</span>
            {stage.label}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.article
          key={active.id}
          className="ladder-detail"
          initial={reduce ? false : { opacity: 0, x: 16 }}
          animate={{ opacity: 1, x: 0 }}
          exit={reduce ? undefined : { opacity: 0, x: -10 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <small>Stufe {activeIndex + 1} von {developmentStages.length}</small>
          <h3>{active.label}</h3>
          <div className="ladder-responsibility">
            <p><PersonSimpleRun size={25} weight="duotone" /><span><small>Mensch</small>{active.human}</span></p>
            <ArrowRight size={21} />
            <p><Robot size={25} weight="duotone" /><span><small>Maschine</small>{active.machine}</span></p>
          </div>
          <div className="ladder-bottleneck"><span>Neuer Engpass</span><strong>{active.bottleneck}</strong></div>
        </motion.article>
      </AnimatePresence>
    </div>
  );
}
