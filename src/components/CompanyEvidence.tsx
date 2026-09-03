import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowUpRight, Buildings, CheckCircle } from "@phosphor-icons/react";
import { companyPatterns } from "../data";

export function CompanyEvidence() {
  const [activeId, setActiveId] = useState(companyPatterns[0].id);
  const reduce = useReducedMotion();
  const active = companyPatterns.find((company) => company.id === activeId)!;

  return (
    <div className="company-evidence">
      <div className="company-tabs" role="tablist" aria-label="Interne Agentenpraxis nach Unternehmen">
        {companyPatterns.map((company) => (
          <button
            key={company.id}
            role="tab"
            aria-selected={company.id === activeId}
            onClick={() => setActiveId(company.id)}
          >
            {company.name}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.article
          key={active.id}
          className="company-detail"
          initial={reduce ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduce ? undefined : { opacity: 0, y: -10 }}
          transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="company-heading">
            <Buildings size={30} weight="duotone" />
            <div>
              <span>{active.name}</span>
              <h3>{active.mode}</h3>
            </div>
          </div>
          <div className="company-proof">
            <div>
              <small>Öffentlich belegt</small>
              <p>{active.proof}</p>
            </div>
            <div>
              <small>Was Entwickler daraus lernen</small>
              <p>{active.lesson}</p>
            </div>
          </div>
          <a href={active.url} target="_blank" rel="noreferrer">
            <CheckCircle size={19} weight="duotone" />
            Konfidenz: {active.confidence}
            <ArrowUpRight size={18} />
          </a>
        </motion.article>
      </AnimatePresence>
    </div>
  );
}
