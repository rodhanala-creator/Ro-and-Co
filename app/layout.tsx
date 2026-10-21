import type { Metadata } from "next";
import { Manrope, Newsreader } from "next/font/google";
import { siteConfig } from "@/lib/site-config";
import "./globals.css";

const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope", display: "swap" });
const newsreader = Newsreader({ subsets: ["latin"], variable: "--font-newsreader", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: `${siteConfig.name} | Software & Digital Product Studio`,
  description: `${siteConfig.name} is ${siteConfig.description.charAt(0).toLowerCase()}${siteConfig.description.slice(1)}`,
  robots: { index: siteConfig.readyForIndexing, follow: siteConfig.readyForIndexing },
  alternates: { canonical: siteConfig.url },
  openGraph: {
    type: "website", locale: "en_GB", url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} | Software & Digital Product Studio`,
    description: siteConfig.description,
  },
  twitter: { card: "summary_large_image", title: siteConfig.name, description: siteConfig.description, images: [`${siteConfig.url}/opengraph-image`] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-GB" className={`${manrope.variable} ${newsreader.variable}`}>
      <body>
        <a href="#main-content" className="skip-link">Skip to content</a>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org", "@type": "Organization",
          name: siteConfig.name, url: siteConfig.url, description: siteConfig.description,
          ...(siteConfig.linkedinUrl ? { sameAs: [siteConfig.linkedinUrl] } : {}),
        }).replace(/</g, "\\u003c") }} />
        {children}
      </body>
    </html>
  );
}
