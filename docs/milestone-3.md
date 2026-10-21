# Milestone 3 — Services & Studio Content

Completed 16 October 2026. Awaiting review before milestone 4.

## Changes

Implemented the studio introduction with three capability statements; five numbered service cards with four deliverable examples each; and a four-stage process on a dark surface. Brand/creative support is explicitly labelled supporting expertise and uses a quieter full-width card. The services section includes a working email enquiry link.

Copy describes the studio's offer without claims about past clients, results, products, team size, or operating history. All three sections are server components. No dependencies or client-side JavaScript were added. Existing understated link interactions apply to the new CTA; informational cards do not pretend to be clickable.

## Files

Created `components/Introduction.tsx`, `components/Services.tsx`, `components/Process.tsx`, and `lib/studio-content.ts`. Updated `app/page.tsx`, `app/globals.css`, `lib/sections.ts`, and `README.md`. Saved studio, services, process, and mobile screenshots as `docs/milestone-3-*.png`.

## Commands and checks

- Read `AGENTS.md`, existing page/components/styles, and bundled Next.js layout documentation before editing.
- `npm run lint`: completed with no warnings or errors.
- `npm run typecheck`: passed.
- `npm run build`: passed, including TypeScript and static prerendering.
- Browser checks at 360, 390, 768, 1024, 1440, and 1920px actual viewport widths: no horizontal overflow; five services, four deliverables per service, four process stages, and no missing anchor destinations.
- Visually reviewed studio, services, and process on desktop; services and process on mobile.
- Mobile services navigation closed the menu and focused the section. Its top was approximately 112px below the viewport top, clear of the approximately 77px sticky header. Approach navigation also focused its destination.
- Browser error log returned no errors.
- `git diff --check`: completed. Files remain untracked because this new repository has not yet had a first commit; this check therefore does not inspect untracked source content.

## Limits and next step

Product vision, audience, contact treatment, and footer remain preliminary and are scheduled for milestone 4. Full accessibility, screen-reader, cross-browser, SEO, and performance audits remain scheduled for milestone 5. Dependency audit limitations from milestone 1 remain unchanged. No deployment, Git push, DNS modification, or email sending occurred.

Review this milestone, then approve milestone 4: Product Vision, Contact & Footer.
