# Deploy Ro & Co to Vercel

## Prepare the repository

Use Node.js 24 and npm. The lockfile is committed with source when you create the first commit. No environment variables, database, CMS, or API keys are required. Keep `.env*`, `.next`, and `node_modules` ignored. This workspace currently has no Git remote; none has been created or pushed automatically.

Run `npm ci`, `npm run lint`, `npm run typecheck`, and `npm run build`. For a local production preview, run `npm start -- --port 3001`, then `node scripts/verify-site.mjs http://127.0.0.1:3001` in another terminal.

Create a GitHub repository in the intended account and commit the reviewed source. Add that repository as `origin` and push your chosen production branch. Use a branch for later changes and review its preview deployment before merging.

## Vercel setup

Import the GitHub repository into Vercel. Select Next.js, repository root, Node.js 24, install command `npm ci`, and build command `npm run build`. Leave the output directory at the Next.js default. Select the branch that should publish production changes. Vercel's Git integration creates preview deployments for branches and production deployments for the configured production branch. See [Vercel Git integration](https://vercel.com/docs/git/vercel-for-github).

Review the first deployment before changing DNS. Confirm the logo, mobile menu, all sections, and the Email us destination. Email uses the visitor's configured mail application; no message is sent by the website itself.

## Domain configuration

The confirmed domain is `theroandco.com` and `siteConfig.url` uses `https://theroandco.com`. In Vercel, add `theroandco.com` and `www.theroandco.com`. Use the exact DNS records Vercel displays at setup time; do not substitute a remembered IP or target. Configure the www address to redirect to the canonical apex domain. Preserve unrelated email/MX records. Wait for DNS verification and HTTPS provisioning, then verify both addresses. See [Vercel custom-domain setup](https://vercel.com/docs/domains/set-up-custom-domain).

## Indexing and final launch checks

`readyForIndexing` in `lib/site-config.ts` is deliberately false while the site is reviewed. After confirming the new domain and final approval, set it to true and redeploy. The robots file allows crawling so crawlers can read the current noindex metadata; it does not override that metadata. Confirm the production page then has index/follow, a canonical matching the confirmed domain, and that `/sitemap.xml`, `/robots.txt`, `/icon.svg`, and `/opengraph-image` respond successfully.

Run Lighthouse on the production deployment using mobile and desktop presets. Record actual scores rather than assuming the brief's targets are achieved. Check keyboard navigation, reduced motion, screen-reader behaviour, and real mobile devices before launch. Test the email button on a device with a mail application configured. Review whether any business disclosures or privacy information need to be supplied; the footer has central configuration slots but no invented legal information.

Copyright uses the build year's date because this site is statically rendered. Rebuild around the new year or when making routine content changes. Future confirmed product entries go in `lib/products.ts`. Wordmark text uses the display name in `lib/site-config.ts`; update the small text favicon in `app/icon.svg` if the name changes.

## Rollback

If a production change fails, restore the previous successful deployment through Vercel or revert the change in Git and redeploy. Keep domain configuration pointed at the project.
