# Ro & Co

Renamed on 19 October 2026. All active website branding uses Ro & Co. The confirmed production domain is https://theroandco.com. Historical milestone notes and screenshots describe earlier versions.

Independent Software & Digital Product Studio. Next.js App Router, React, strict TypeScript, Tailwind CSS, and Lucide React.

## Local development

Use Node.js 22 or later (Node 24 LTS recommended).

```sh
npm ci
npm run dev
```

Open the URL printed by Next.js. Google font files are downloaded at build time by `next/font` and served locally to visitors. The first build needs network access.

```sh
npm run lint
npm run typecheck
npm run build
npm start
```

## Configuration

`lib/site-config.ts` is the source of truth for the brand, domain, contact destination, navigation, and publication state. The domain is `https://theroandco.com`. At the owner's request, the contact section shows an “Email us” button rather than the email address. Its mailto destination opens the visitor's email app. The address remains in link markup, but not visible page text. No form or submission backend is present.

LinkedIn is unset and not rendered. No credentials or environment variables are required for this milestone. Domain ownership, DNS, and inbox delivery have not been independently tested.

## Milestone status

1. Foundation: configured application, self-hosted fonts, global tokens, container, semantic section primitive, central brand settings, and working section anchors.
2. Approved: editorial hero, architectural SVG detail, sticky header, keyboard-accessible mobile disclosure, and responsive visual identity.
3. Approved: full studio introduction, five service cards, and four-stage process.
4. Implemented: full product vision, audience, Email us contact treatment, and footer.
5. Implemented: technical SEO, social preview, text-only wordmark/favicon, production checks, responsive/keyboard/contrast review, and deployment instructions. Lighthouse, full assistive-technology testing, and hosted verification remain explicit pre-launch checks; see `docs/milestone-5.md`.

The complete one-page site and deployment handoff are implemented. Search indexing is disabled through metadata; change `readyForIndexing` only after launch review. See `docs/deployment.md` for GitHub, Vercel, domain configuration, and remaining launch checks. Run `node scripts/verify-site.mjs http://127.0.0.1:3001` against a running production preview to verify routes, metadata, assets, anchors, and email presentation.

## Structure

- `app/`: root layout, foundational page, and global styles
- `components/`: header, mobile menu, hero, introduction, services, process, products, audience, contact, footer, and reusable container
- `lib/studio-content.ts`: capability statements, services/deliverables, and process stages
- `lib/site-config.ts`: confirmed identity and contact configuration
- `lib/products.ts`: typed collection for confirmed studio-owned products; intentionally empty

Future business disclosures and privacy/legal links are configured through `businessDisclosure` and `legalLinks` in `lib/site-config.ts` and rendered in the footer only when supplied. Add real policy pages before enabling their links. LinkedIn is likewise conditional on a confirmed URL. No corporate registration, product launches, client relationships, or results are claimed.
