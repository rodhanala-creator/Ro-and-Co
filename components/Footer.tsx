import { ArrowUp, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/Container";
import { Brand } from "@/components/Brand";
import { siteConfig } from "@/lib/site-config";

export function Footer() {
  return (
    <footer className="site-footer">
      <Container>
        <div className="footer-main"><div><a href="#main-content" className="footer-brand" aria-label={`${siteConfig.name} home`}><Brand /></a><p className="footer-positioning">{siteConfig.positioning}.</p></div><nav aria-label="Footer navigation">{siteConfig.navigation.filter((link) => link.href !== "#about").map((link) => <a key={link.href} href={link.href}>{link.label}</a>)}{siteConfig.linkedinUrl && <a href={siteConfig.linkedinUrl}>LinkedIn <ArrowUpRight size={14} aria-hidden="true" /></a>}</nav></div>
        <div className="footer-bottom"><p>© {new Date().getFullYear()} {siteConfig.name}</p><p>{siteConfig.location}</p><a href="#main-content">Back to top <ArrowUp size={14} aria-hidden="true" /></a></div>
        {(siteConfig.businessDisclosure || siteConfig.legalLinks.length > 0) && <div className="footer-legal">{siteConfig.businessDisclosure && <p>{siteConfig.businessDisclosure}</p>}{siteConfig.legalLinks.length > 0 && <nav aria-label="Legal information">{siteConfig.legalLinks.map((link) => <a key={link.href} href={link.href}>{link.label}</a>)}</nav>}</div>}
      </Container>
    </footer>
  );
}
