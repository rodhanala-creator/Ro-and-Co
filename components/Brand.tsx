import { siteConfig } from "@/lib/site-config";

/** One shared identity for the header and footer; the accessible name lives on the link. */
export function Brand() {
  return (
    <span className="brand-lockup" aria-hidden="true">
      {siteConfig.name}
    </span>
  );
}
