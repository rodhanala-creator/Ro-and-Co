# Milestone 5 — Quality Assurance & Deployment Preparation

16 October 2026. Source and deployment handoff prepared; not deployed.

## Final changes

- Final owner-selected direction: HOUSE OF ROAN on one line in modern Manrope lettering, with balanced spacing and no symbol. `components/Brand.tsx` is shared by header and footer. The social preview uses the same one-line wording; the small favicon uses ROAN in sans-serif text. Previous stacked and symbol versions are superseded.
- Added `app/icon.svg`, `app/opengraph-image.tsx`, `app/robots.ts`, and `app/sitemap.ts`.
- Expanded `app/layout.tsx` with canonical, Open Graph, Twitter metadata, and minimal Organization structured data without unsupported claims or email disclosure.
- Updated `components/Header.tsx`, `components/Footer.tsx`, `app/globals.css`, and central brand configuration.
- Added `scripts/verify-site.mjs` for repeatable production checks and `docs/deployment.md` with GitHub/Vercel/domain instructions.
- Updated README and saved review images in docs.

## Verification

- `npm run lint`: passed, no warnings/errors.
- `npm run typecheck`: passed.
- `npm run build`: production compilation, static generation, and TypeScript passed for the SEO implementation; final wordmark revision also checked before handoff.
- Production preview launched with `npm run start -- --hostname 127.0.0.1 --port 3001`.
- `node scripts/verify-site.mjs http://127.0.0.1:3001`: passed. Checks HTTP 200, 404 behaviour, unique IDs, all anchor destinations, one H1, email hidden from page text but present as the Email us destination, canonical/social metadata, valid Organization JSON, sitemap/favicon/robots/image routes, PNG dimensions, and referenced static assets.
- Browser: no horizontal overflow at 360, 390, 768, 1024, 1440, and 1920px; all anchors present; email absent from visible text. New logo inspected at desktop and mobile sizes. The later text-only change reduces its width.
- Mobile Enter opens the disclosure, Escape closes it and returns focus, navigation closes it and focuses the section. Contact email href verified without sending email.
- Read-only computed-style contrast check inspected 123 text elements; none fell below the applicable 4.5:1 normal-text or 3:1 large-text threshold. This is a targeted check, not a WCAG certification.
- Browser error log: none captured.
- Social preview rendered at 1200 × 630 and visually inspected. Robots/canonical/Open Graph/Twitter tags inspected from production HTML.
- `npm audit --omit=dev`: zero vulnerabilities reported. Full audit retains five high development-tool findings from the same braces dependency chain documented in milestone 1; no compatible patched version was applied.

## Performance and accessibility limits

Homepage and SEO assets are statically prerendered. Fonts are self-hosted, artwork is inline SVG/CSS, and the mobile menu is the only explicit client component. The initial production asset inventory was 10 resources / 680,597 uncompressed bytes (not transfer size or a performance score).

Lighthouse scores and field Core Web Vitals have not been measured. The browser tools available here did not expose a Lighthouse audit. Do not claim the brief's score targets are achieved. Run the checks in the deployment guide on the hosted production site. Full screen-reader, multiple browser-engine, real-device, and OS reduced-motion tests are still recommended before launch. Reduced-motion disabling is implemented in CSS but not emulated here.

Browser access recovered after milestone 4's timeouts: contact/mobile/footer and product content could be inspected during this milestone. Final screenshots replace earlier logo iterations; historical milestone screenshots show earlier work and are not the current identity.

## Launch state

`readyForIndexing` remains false pending launch approval. Crawling is allowed so crawlers can see noindex; set indexing true and redeploy when ready. No Git remote exists, and no hosting deployment, Git push, DNS change, or email sending was performed. Inbox delivery and domain ownership were not independently tested. The site's visible contact is only “Email us”; its destination contains the email as explicitly requested.

Next: review the wordmark and complete the hosted launch checks using `docs/deployment.md`.

## Approved wordmark and final handoff

The owner approved the single-line modern wordmark. After that approval, `npm run lint`, `npm run typecheck`, and `npm run build` all passed on the final source. The fresh production preview passed `scripts/verify-site.mjs`: 20 unique anchor targets, 10 referenced static assets, 680,199 uncompressed asset bytes, and the intended pre-launch noindex/nofollow. Browser console reported no errors on the production homepage. Refreshed `docs/final-desktop.png` and `docs/social-preview.png` show the approved version. The temporary production test server was stopped; the development preview remains available on port 3000.

Implementation and local verification are complete within the documented limits. Hosting, domain connection, Lighthouse measurement, and real-device/assistive-technology launch checks remain pending. No Git remote is configured.
