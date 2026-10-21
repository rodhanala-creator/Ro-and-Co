"use client";

import { useEffect, useRef } from "react";
import { ArrowUpRight, Plus } from "lucide-react";
import { contactHref, siteConfig } from "@/lib/site-config";

export function MobileMenu() {
  const menu = useRef<HTMLDetailsElement>(null);

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 1024px)");
    const closeOnDesktop = () => {
      if (desktop.matches && menu.current?.open) {
        const hadFocus = menu.current.contains(document.activeElement);
        menu.current.open = false;
        if (hadFocus) document.querySelector<HTMLAnchorElement>(".wordmark")?.focus();
      }
    };
    desktop.addEventListener("change", closeOnDesktop);
    return () => desktop.removeEventListener("change", closeOnDesktop);
  }, []);

  function closeMenu() {
    if (menu.current) menu.current.open = false;
  }

  return (
    <details ref={menu} className="mobile-menu" onKeyDown={(event) => {
      if (event.key === "Escape" && menu.current?.open) {
        event.preventDefault();
        closeMenu();
        menu.current?.querySelector("summary")?.focus();
      }
    }} onBlur={(event) => {
      if (!event.currentTarget.contains(event.relatedTarget)) closeMenu();
    }}>
      <summary className="menu-toggle">Menu <Plus size={18} aria-hidden="true" /></summary>
      <nav className="mobile-panel" aria-label="Mobile navigation">
        <p className="eyebrow">Inside the studio</p>
        {siteConfig.navigation.map((item, index) => (
          <a key={item.href} href={item.href} onClick={closeMenu}>
            <span className="menu-number" aria-hidden="true">0{index + 1}</span>
            {item.label}<ArrowUpRight size={20} aria-hidden="true" />
          </a>
        ))}
        <a className="mobile-contact" href={contactHref} onClick={closeMenu}>Let&apos;s talk <ArrowUpRight size={20} aria-hidden="true" /></a>
      </nav>
    </details>
  );
}
