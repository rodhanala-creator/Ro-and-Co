# Milestone 1 — Foundation

Completed 15 October 2026. Awaiting owner review before milestone 2.

## Changes

- Next.js 16.4.1 App Router with React 19.3.1, strict TypeScript, Tailwind 4.3.3, and Lucide React.
- Newsreader and Manrope via Next.js font loading; warm colour tokens, fluid typography, responsive spacing, visible focus, and reduced-motion support.
- Reusable Container and Section components, semantic page landmarks, skip link, one H1, ordered sections, and working anchor targets.
- Central configuration with owner-confirmed domain and email; mailto links include a project enquiry subject.
- Basic title/description metadata with noindex/nofollow during development.
- Abbreviated section content to verify the page architecture. Full visual identity and content remain in their approved later milestones.

## Files created

`package.json`, `package-lock.json`, `.gitignore`, `tsconfig.json`, `next.config.ts`, `postcss.config.mjs`, `eslint.config.mjs`, `app/layout.tsx`, `app/page.tsx`, `app/globals.css`, `components/Container.tsx`, `components/Section.tsx`, `lib/site-config.ts`, `lib/sections.ts`, `README.md`, this report, and `milestone-1-preview.png`.

Next.js generated `AGENTS.md` with framework-specific development instructions. Generated `next-env.d.ts` and build outputs are ignored.

## Commands and checks

- Repository inspection: `git status --short`, `git log -1 --oneline` (no commits existed), file listing, and AGENTS search.
- Runtime inspection: `node --version` (24.18.0), `npm --version` (11.16.0).
- Registry checks: `npm view` for Next.js, React, Tailwind, Lucide, ESLint, and lint plugin compatibility.
- `npm install`: completed and produced lockfile.
- ESLint 10.12.0 was trialled; `npm ls eslint --depth=2` identified unsupported plugin peer ranges. Restored and pinned compatible ESLint 9.39.5.
- `npm install --save-exact lucide-react@1.57.0`: completed.
- `npm run lint`: final run passed without warnings or errors.
- `npm run typecheck`: passed.
- `npm run build`: final run passed; homepage prerendered as static content, with TypeScript compilation successful.
- `npm ls --depth=0`: passed with resolved dependencies.
- `npm audit --omit=dev`: zero reported vulnerabilities.
- `npm audit --json`: five high-severity development dependency findings, described below.
- `npm run dev -- --hostname 127.0.0.1`: local preview served successfully.
- HTTP GET to local homepage: 200.
- Browser checks: rendered desktop and narrow layouts; zero missing internal anchor targets; clicked services CTA and confirmed `#services`; mailto destination inspected; no console errors captured.
- Narrow viewport request was 360 × 800; browser reported an actual inner width of 327 CSS pixels, with document width 314. No horizontal overflow there. This does not constitute the full specified breakpoint audit.

## Limitations and follow-up

The preview is a foundation, not launch-ready. Sticky navigation, the mobile menu, refined hero, service cards, complete content, social assets, full technical SEO, Lighthouse measurements, and the full accessibility/responsive audit remain scheduled for milestones 2–5.

ESLint 9 is deprecated upstream but required by the peer ranges of the current Next.js lint plugins. The audit's five development-only findings share one chain: eslint-config-next → @next/eslint-plugin-next → fast-glob → micromatch → braces. The braces advisory is GHSA-vfj7-8cjw-p6xm; registry latest was still 3.0.3, with no patched compatible version available. The suggested automatic fix downgrades Next.js lint configuration to 14.2.35, so it was not applied. Recheck upstream tooling before launch. Production dependencies had no reported findings at this check.

npm also reported an unapproved optional install script for unrs-resolver; lint and builds worked without enabling it.

Email delivery and domain/DNS ownership were not tested. No deployment, Git commit, remote push, or DNS change was performed. LinkedIn remains omitted until supplied. Search indexing remains disabled.

## Next action

Review the local foundation and approve milestone 2: Hero & Visual Identity.
