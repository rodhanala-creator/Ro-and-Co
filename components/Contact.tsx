import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/Container";
import { contactHref } from "@/lib/site-config";

export function Contact() {
  return (
    <section id="contact" tabIndex={-1} aria-labelledby="contact-heading" className="section-shell contact-section">
      <Container>
        <div className="contact-topline"><p className="eyebrow">06 / START A CONVERSATION</p><ArrowUpRight size={64} strokeWidth={.8} aria-hidden="true" /></div>
        <h2 id="contact-heading" className="contact-title">Have something in mind?<br /><span>Let&apos;s build it.</span></h2>
        <div className="contact-bottom"><p>Whether you&apos;re launching a new business, improving a digital experience, or exploring a product idea, we&apos;d love to hear what you&apos;re working on.</p><div className="contact-actions"><a className="button-primary button-light" href={contactHref}>Email us <ArrowUpRight size={18} aria-hidden="true" /></a><p className="contact-hint">Share a little about your idea and what you need.</p></div></div>
      </Container>
    </section>
  );
}
