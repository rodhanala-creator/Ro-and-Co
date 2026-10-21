import { ArrowDown, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/Container";
import { contactHref, siteConfig } from "@/lib/site-config";

export function Hero() {
  return (
    <section aria-labelledby="hero-heading" className="hero">
      <Container>
        <div className="hero-kicker"><p className="eyebrow">Independent digital product studio</p><span className="eyebrow hero-discipline">Design & Engineering</span></div>
        <div className="hero-composition">
          <div className="hero-copy">
            <h1 id="hero-heading" className="hero-title">Thoughtfully<br />designed.<br /><span>Built to matter.</span></h1>
            <div className="hero-intro">
              <span className="intro-rule" aria-hidden="true" />
              <div>
                <p>We design and develop websites, applications, and digital products for ambitious startups and growing businesses.</p>
                <div className="hero-actions">
                  <a className="button-primary" href={contactHref}>Start a project <ArrowUpRight size={18} aria-hidden="true" /></a>
                  <a className="hero-secondary" href="#services">Explore our services <ArrowDown size={16} aria-hidden="true" /></a>
                </div>
              </div>
            </div>
          </div>
          <div className="hero-art" aria-hidden="true">
            <svg viewBox="0 0 360 460" fill="none" focusable="false">
              <path d="M30 430V182C30 98 98 30 182 30s152 68 152 152v248H30Z" fill="#e6e5db" />
              <path d="M67 430V190c0-63 51-114 114-114s114 51 114 114v240H67Z" stroke="#9a9e8f" />
              <path d="M104 430V199c0-43 35-78 78-78s78 35 78 78v231H104Z" stroke="#9a9e8f" />
              <path d="M140 430V208c0-23 19-42 42-42s42 19 42 42v222h-84Z" fill="#202923" />
              <path d="M0 430h360M30 0v460M334 0v460M0 30h360" stroke="#b9bcae" strokeWidth=".6" />
              <circle cx="295" cy="76" r="34" fill="#7a826d" />
              <path d="M285 76h20m-10-10v20" stroke="#f4f1ea" strokeWidth="1" />
            </svg>
            <div className="art-caption"><span>Form follows thought.</span><span>STUDY / 01</span></div>
          </div>
        </div>
        <div className="hero-footnote">
          <p><span className="location-dot" aria-hidden="true" />Based in the {siteConfig.location}</p>
          <p>Available for suitable remote projects</p>
          <a href="#about">Meet the studio <ArrowDown size={14} aria-hidden="true" /></a>
        </div>
      </Container>
    </section>
  );
}
