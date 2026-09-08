---
name: run-app
description: Launch and drive the Sharp Legal & Co. Next.js site locally - install deps, start the dev server, smoke-test routes, and screenshot pages past the legal-disclaimer gate. Use when asked to run, start, preview, or screenshot this site, or to confirm a change works in the real app.
---

# Running the Sharp Legal & Co. site

Next.js 16.3.0 (App Router, Turbopack) + React 19 + Tailwind v4 + shadcn.
Package manager is **pnpm** (`pnpm-lock.yaml` is committed - do not use `npm install`,
it will produce a competing `package-lock.json`).

## Install and start

`pnpm` is **not** on PATH on this machine, and `corepack enable pnpm` fails with
`EPERM: operation not permitted, open 'C:\Program Files\nodejs\pnpx'` because it
writes into `C:\Program Files`. Do not retry corepack from a normal shell.

Use `npx`, which honors the committed lockfile:

```bash
npx --yes pnpm@10 install
npx --yes pnpm@10 dev        # run in background; serves http://localhost:3000
```

Ready line to wait for: `✓ Ready in <n>s`. Node v22.14.0 is known good.

To fix pnpm permanently (optional, needs an elevated PowerShell):
`corepack enable pnpm` or `npm i -g pnpm`. After that, plain `pnpm dev` works.

### Expected install warning

`Ignored build scripts: msw@2.14.6` is normal - pnpm blocks postinstall scripts by
default. Harmless unless you need MSW's service worker; then run `pnpm approve-builds`.

## Smoke-test the routes

Nine static routes plus one dynamic segment. All should return 200:

```bash
for p in / /about /services /clients /careers /contact \
         /disclaimer /privacy-policy /terms; do
  echo "$(curl -s -o /dev/null -w "%{http_code}" --max-time 45 http://localhost:3000$p)  $p"
done
```

Service pages are statically generated from `services` in `lib/practices.ts`. Valid slugs:
`electricity-matters`, `corporate-and-commercial`, `dispute-resolution`, `employment-and-labour`,
`civil-service-matters`, `arbitration`, `real-estate`, `nbfc-services`, `industrial-subsidies`,
`insurance-matters`. Old slugs (`energy-electricity-law`, `rera`, ...) are aliases and also render.
A bogus slug must return **404** - that is the check that `generateStaticParams` + `notFound()` still wire up:

```bash
curl -s -o /dev/null -w "%{http_code}\n" http://localhost:3000/services/does-not-exist  # 404
```

Retired URLs redirect (configured in `next.config.mjs`): `/practice-areas*` -> `/services*`,
`/expertise` -> `/services`, `/insights*` -> `/`. Check with `curl -s -o /dev/null -w "%{redirect_url}"`.

First hit on a service page costs ~1.5s (`generate-params`); subsequent hits ~100ms.

## Screenshots: the disclaimer gate

**A naive screenshot of any page captures a full-screen "LEGAL DISCLAIMER" modal, not
the page.** `components/legal/LegalDisclaimer.tsx` blocks the site until the visitor
accepts, persisting to `sessionStorage` under the key `sharp_legal_disclaimer_accepted`.
Because it is *session* storage, it resets on every fresh browser launch - a
`--user-data-dir` profile will not carry the acceptance over.

Seeing the modal is the correct default for a first-visit screenshot. To capture the
actual page, use the bundled CDP script, which seeds the key via
`Page.addScriptToEvaluateOnNewDocument` so it lands before the app boots:

```bash
# 1. Chrome with the debugging port open (background)
"C:/Program Files/Google/Chrome/Application/chrome.exe" --headless --disable-gpu \
  --hide-scrollbars --window-size=1440,1200 --remote-debugging-port=9222 \
  --user-data-dir=/tmp/chrome-profile about:blank &

# 2. Capture full-page, past the gate
node .claude/skills/run-app/scripts/screenshot.mjs http://localhost:3000/ out.png
```

The script is dependency-free (Node 22 global `fetch` + `WebSocket`, no Puppeteer).
It waits 5s after navigation before capturing and uses `captureBeyondViewport` for a
full-page image - the homepage is ~9200px tall.

**Look at the screenshot.** A page that is all modal means the seed did not apply; a
blank frame means the server was not up.

## Images

All photos are self-hosted under `public/images/` (sources in `public/images/CREDITS.md`). Nothing is
hotlinked from Unsplash any more, so image checks are just `ls public/images`. If a page references a
`/images/*.jpg` that is missing, the build still succeeds - grep for references and diff against the folder.

## Verified working state

Restructured 2026-09-08: 6 main pages (Home, About, Services, Clients, Careers, Contact) plus 10 service
detail pages and 3 legal pages. `/expertise`, `/insights`, `/practice-areas` were removed and redirect.
Deployed at `sharp-legal-amber.vercel.app`. All routes, aliases, redirects, and 404 handling confirmed green.
