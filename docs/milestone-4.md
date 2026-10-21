# Milestone 4 — Product Vision, Contact & Footer

Implementation completed 16 October 2026; awaiting milestone review.

## Changes and files

- Added `components/Products.tsx`: honest product ambition and intentional Products & Experiments empty state.
- Added `lib/products.ts`: typed, empty product collection for future confirmed studio-owned work.
- Added `components/Audience.tsx`: four customer groups, framed as the audience rather than claimed clients.
- Added `components/Contact.tsx`: full-width dark invitation.
- Added `components/Footer.tsx`: brand, navigation, location, programmatic year, conditional LinkedIn and legal disclosure slots.
- Updated `app/page.tsx`, `app/globals.css`, `lib/site-config.ts`, and `README.md`.
- Removed obsolete `lib/sections.ts` and `components/Section.tsx` foundation scaffolding.

All new components render on the server. No dependencies or forms were introduced.

## Owner's contact change

The owner clarified that the contact section should display an “Email us” button linked to the supplied Gmail address. The address is not displayed as page text. The centrally configured mailto destination remains in link markup as required for email functionality. No temporary enquiries-closed message remains. There is no form submission flow or success claim.

## Verification

- Inspected current files, AGENTS instructions, and bundled Next.js server component guidance.
- Initial `npm run lint`, `npm run typecheck`, and `npm run build` passed before the owner's contact change.
- HTTP GET to local homepage returned 200.
- Rendered HTML: all internal anchors resolve; one H1; all six named sections present; products empty state present; unset LinkedIn link omitted.
- The initial removal check was superseded by the owner's clarification to retain mailto functionality behind an “Email us” label.
- Final rendered HTML check: “Email us” present; confirmed mailto destination present; email address absent from visible text; temporary enquiries-closed message absent.
- Targeted ESLint and the repeat production build passed before the final button-label/mailto clarification; final TypeScript check was run afterwards.
- Browser inspection timed out twice. New milestone 4 visuals, responsive layouts, and interactions are therefore not yet browser-verified. Earlier milestone screenshots are not evidence for these new sections. This check remains for milestone 5 or when browser access recovers.

## Remaining work

Complete milestone 5 quality assurance, SEO assets/metadata, performance checks, and Vercel deployment instructions. Search indexing remains disabled. Dependency audit limitations from milestone 1 remain unchanged. No deployment, email, Git push, or DNS modification occurred.
