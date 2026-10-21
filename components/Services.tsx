import { ArrowUpRight, Blocks, Braces, PanelsTopLeft, PenTool, Workflow } from "lucide-react";
import { Container } from "@/components/Container";
import { services } from "@/lib/studio-content";
import { contactHref } from "@/lib/site-config";

const icons = [PanelsTopLeft, Braces, Blocks, Workflow, PenTool];

export function Services() {
  return (
    <section id="services" tabIndex={-1} aria-labelledby="services-heading" className="section-shell services-section">
      <Container>
        <div className="section-grid">
          <p className="eyebrow">02 / WHAT WE DO</p>
          <div><h2 id="services-heading" className="section-title">From idea to<br />working product.</h2><p className="section-description">A focused set of capabilities, brought together around what your business needs.</p></div>
        </div>
        <div className="services-grid">
          {services.map((service, index) => {
            const Icon = icons[index];
            return (
              <article key={service.number} className={`service-card${index === 4 ? " service-support" : ""}`} aria-labelledby={`service-${service.number}`}>
                <div className="service-topline"><span className="eyebrow">{service.number}{index === 4 && " / SUPPORTING EXPERTISE"}</span><Icon size={26} strokeWidth={1.25} aria-hidden="true" /></div>
                <div className="service-body"><h3 id={`service-${service.number}`}>{service.title}</h3><p>{service.description}</p></div>
                <ul className="deliverables" aria-label={`${service.title} deliverables`}>{service.deliverables.map((item) => <li key={item}>{item}</li>)}</ul>
              </article>
            );
          })}
        </div>
        <div className="services-note"><p>Not sure where to start? Tell us what you have in mind.</p><a className="hero-secondary" href={contactHref}>Let&apos;s find the right starting point <ArrowUpRight size={16} aria-hidden="true" /></a></div>
      </Container>
    </section>
  );
}
