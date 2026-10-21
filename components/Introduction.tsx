import { ArrowDownRight } from "lucide-react";
import { Container } from "@/components/Container";
import { capabilities } from "@/lib/studio-content";
import { siteConfig } from "@/lib/site-config";

export function Introduction() {
  return (
    <section id="about" tabIndex={-1} aria-labelledby="about-heading" className="section-shell studio-section">
      <Container>
        <div className="section-grid">
          <div className="section-aside"><p className="eyebrow">01 / THE STUDIO</p><ArrowDownRight size={42} strokeWidth={1} aria-hidden="true" /></div>
          <div>
            <h2 id="about-heading" className="section-title">Good ideas deserve<br />great execution.</h2>
            <div className="studio-copy">
              <p>{siteConfig.name} brings thoughtful product design and practical software engineering together. We help you make sense of an early idea, shape the right experience, and turn it into something people can use.</p>
              <p>From the first conversation through development and launch, the focus stays on your business, your users, and the work that makes a difference.</p>
            </div>
          </div>
        </div>
        <div className="capability-grid">
          {capabilities.map((item, index) => <div key={item.title} className="capability"><span className="capability-number" aria-hidden="true">0{index + 1}</span><h3 className="eyebrow">{item.title}</h3><p>{item.description}</p></div>)}
        </div>
      </Container>
    </section>
  );
}
