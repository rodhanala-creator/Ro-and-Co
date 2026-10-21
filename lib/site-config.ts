export const siteConfig = {
  name: "Ro & Co",
  // Confirmed production domain.
  url: "https://theroandco.com",
  // Link destination only: do not render the address as visible text.
  contactUrl: "mailto:rohianudec14@gmail.com",
  location: "United Kingdom",
  positioning: "Independent Software & Digital Product Studio",
  description:
    "An independent UK digital product studio designing and developing websites, software, and digital experiences for startups and growing businesses.",
  // Set true only after the complete site has passed launch review.
  readyForIndexing: false,
  linkedinUrl: null as string | null,
  // Add confirmed disclosures and real policy pages before enabling these links.
  businessDisclosure: null as string | null,
  legalLinks: [] as { label: string; href: string }[],
  navigation: [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Approach", href: "#approach" },
    { label: "Products", href: "#products" },
    { label: "Contact", href: "#contact" },
  ],
} as const;

export const contactHref = siteConfig.contactUrl ?? "#contact";
