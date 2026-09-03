import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowRight, LockKey, SealCheck } from "@phosphor-icons/react";
import { harnessUseCases } from "../data";

export function HarnessWorkshop() {
  const [activeId, setActiveId] = useState(harnessUseCases[0].id);
  const reduce = useReducedMotion();
  const active = harnessUseCases.find((item) => item.id === activeId)!;

  return (
    <div className="workshop-shell">
      <div className="workshop-tabs" role="tablist" aria-label="Harness Use Cases">
        {harnessUseCases.map((item) => (
          <button
            key={item.id}
            role="tab"
            aria-selected={item.id === activeId}
            onClick={() => setActiveId(item.id)}
          >
            {item.label}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={active.id}
          className="workshop-detail"
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduce ? undefined : { opacity: 0, y: -10 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="workshop-brief">
            <span>{active.label}</span>
            <h3>{active.brief}</h3>
          </div>
          <div className="workshop-loop" aria-label={`Arbeitsloop für ${active.label}`}>
            {active.loop.map((step, index) => (
              <div key={step}>
                <strong>{step}</strong>
                {index < active.loop.length - 1 && <ArrowRight size={18} />}
              </div>
            ))}
          </div>
          <div className="workshop-rules">
            <p><SealCheck size={23} weight="duotone" /><span><small>Beweis</small>{active.evidence}</span></p>
            <p><LockKey size={23} weight="duotone" /><span><small>Grenze</small>{active.boundary}</span></p>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
