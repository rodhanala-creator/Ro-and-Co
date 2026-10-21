import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site-config";

export const alt = `${siteConfig.name} — Thoughtfully designed. Built to matter.`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    <div style={{ background: "#f4f1ea", color: "#202420", width: "100%", height: "100%", display: "flex", flexDirection: "column", padding: "62px 72px", justifyContent: "space-between" }}>
      <div style={{ display: "flex", fontSize: 28, fontWeight: 700, letterSpacing: 2 }}>{siteConfig.name.toUpperCase()}</div>
      <div style={{ display: "flex", flexDirection: "column", fontSize: 76, letterSpacing: -3, lineHeight: 1.12 }}><span>Thoughtfully designed.</span><span style={{ color: "#59634e" }}>Built to matter.</span></div>
      <div style={{ display: "flex", justifyContent: "space-between", borderTop: "1px solid #d8d4cb", paddingTop: 24, fontSize: 19 }}><span>{siteConfig.positioning}</span><span>{siteConfig.location}</span></div>
    </div>, size,
  );
}
