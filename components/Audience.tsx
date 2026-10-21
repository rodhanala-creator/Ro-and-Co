import { Container } from "@/components/Container";

const audiences = [
  { title: "Startup founders", description: "Shape an early idea, test the experience, and build a focused first version." },
  { title: "Small and growing businesses", description: "Improve your digital presence or make everyday work easier with useful software." },
  { title: "Independent brands", description: "Create a distinctive online experience that reflects the care behind your business." },
  { title: "Entrepreneurs with product ideas", description: "Work through the possibilities and find a practical route from concept to launch." },
];

export function Audience() {
  return (
    <section id="audience" tabIndex={-1} aria-labelledby="audience-heading" className="section-shell audience-section">
      <Container className="section-grid">
        <div><p className="eyebrow">05 / WHO WE HELP</p><p className="audience-aside">Different starting points.<br />A shared desire to make something useful.</p></div>
        <div><h2 id="audience-heading" className="section-title">For people building what&apos;s next.</h2><ul className="audience-list">{audiences.map((audience, index) => <li key={audience.title}><span className="audience-number" aria-hidden="true">0{index + 1}</span><div><h3>{audience.title}</h3><p>{audience.description}</p></div></li>)}</ul></div>
      </Container>
    </section>
  );
}
