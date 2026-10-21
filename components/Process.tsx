import { ArrowRight } from "lucide-react";
import { Container } from "@/components/Container";
import { processSteps } from "@/lib/studio-content";

export function Process() {
  return (
    <section id="approach" tabIndex={-1} aria-labelledby="approach-heading" className="section-shell process-section">
      <Container>
        <div className="section-grid">
          <p className="eyebrow">03 / HOW WE WORK</p>
          <div><h2 id="approach-heading" className="section-title">Clear thinking.<br />Better outcomes.</h2><p className="section-description">A straightforward process, with room for conversation. Clear priorities at the start, considered decisions along the way.</p></div>
        </div>
        <ol className="process-grid">
          {processSteps.map((step, index) => <li key={step.number} className="process-step"><div className="process-marker"><span>{step.number}</span>{index < processSteps.length - 1 && <ArrowRight size={18} strokeWidth={1} aria-hidden="true" />}</div><h3>{step.title}</h3><p>{step.description}</p><p className="process-output"><span className="eyebrow">Working towards</span>{step.output}</p></li>)}
        </ol>
      </Container>
    </section>
  );
}
