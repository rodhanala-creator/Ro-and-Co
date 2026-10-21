# Milestone 2 — Hero & Visual Identity

Completed 15 October 2026. Awaiting review before milestone 3.

## Changes and files

- Added `components/Header.tsx`: sticky navigation, configurable wordmark and links, direct email CTA.
- Added `components/MobileMenu.tsx`: native disclosure, numbered mobile navigation, keyboard opening, Escape closing with focus restoration, closure on navigation/focus departure, desktop breakpoint reset. This is a non-modal disclosure, so it does not trap focus or lock page scrolling.
- Added `components/Hero.tsx`: editorial headline, muted green emphasis, original inline architectural SVG, clear email/services CTAs, location and remote-work note.
- Updated `app/page.tsx` to compose header and hero components.
- Updated `app/globals.css` with responsive composition, sticky-header anchor offsets, button/link interactions, mobile panel transition, and existing reduced-motion support.
- Updated `components/Section.tsx` to make anchor destinations programmatically focusable.
- Updated `README.md` with milestone status and component structure.
- Saved desktop, mobile hero, and mobile menu screenshots in `docs/milestone-2-*.png`.

The hero and header remain server components; only the menu behaviour needs a client component. No dependencies were added. The decorative artwork is hidden from assistive technology and omitted below tablet width to prioritise the message and actions.

## Commands and verification

- Inspected repository, current files, generated AGENTS instructions, and bundled Next.js component/font documentation.
- `npm run lint`: passed without warnings/errors.
- After the final decorative caption edit, a broad lint rerun was stopped when slow; targeted `npx eslint app components lib next.config.ts eslint.config.mjs postcss.config.mjs` completed successfully with no output or errors.
- `npm run typecheck`: passed.
- `npm run build`: passed; homepage remains statically prerendered.
- Browser overflow checks at actual inner widths 360, 390, 768, 1024, 1440, and 1920 CSS pixels: no horizontal overflow at any width.
- Visually reviewed desktop hero, mobile hero, and opened mobile menu.
- Keyboard Enter opened menu; Tab reached the first link; Escape from within the menu closed it and restored focus to summary.
- Services navigation closed menu and focused the destination section. Measured destination top at approximately 112px, clear of the approximately 77px sticky mobile header.
- Switching from mobile to desktop closed the disclosure.
- All internal anchor targets exist; exactly one H1; all four email links point to the confirmed Gmail inbox with the project enquiry subject.
- Browser error log: no errors captured.

## Limits

Full screen-reader testing, cross-browser testing, reduced-motion emulation, automated accessibility auditing, and Lighthouse scoring remain in milestone 5. Reduced-motion CSS disables the new animation and transitions, but OS preference switching was not exercised in this milestone.

The development-tool audit findings from milestone 1 remain; dependencies were not changed. No email was sent, and no deployment or DNS change occurred. The content below the hero is still the abbreviated foundation pending milestones 3 and 4.

## Next action

Review the hero and navigation, then approve milestone 3: Services & Studio Content.
