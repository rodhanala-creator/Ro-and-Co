import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/Container";
import { MobileMenu } from "@/components/MobileMenu";
import { Brand } from "@/components/Brand";
import { contactHref, siteConfig } from "@/lib/site-config";

export function Header() {
  return (
    <header className="site-header">
      <Container className="header-inner">
        <a href="#main-content" className="wordmark" aria-label={`${siteConfig.name} home`}><Brand /></a>
        <nav aria-label="Main navigation" className="desktop-nav">
          {siteConfig.navigation.map((item) => <a className="nav-link" key={item.href} href={item.href}>{item.label}</a>)}
        </nav>
        <a href={contactHref} className="header-contact">Let&apos;s talk <ArrowUpRight size={16} aria-hidden="true" /></a>
        <MobileMenu />
      </Container>
    </header>
  );
}
