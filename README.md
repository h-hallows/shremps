# Shremps Studios — site

> A studio for original worlds.

The parent-studio site for Shremps Studios — sits above the consumer-facing brand worlds (Shremps, Shrempies, and whatever's next). Single-page v0 with stub routes wired so each section can graduate to its own page later.

## Stack

- Next.js 16 (App Router, Turbopack)
- React 19.2 + TypeScript
- Tailwind CSS v4 (theme tokens live in [`app/globals.css`](app/globals.css))
- Geist Sans / Geist Mono via `next/font/google`
- framer-motion (light usage — fade-up on enter)
- lucide-react (icons)

## Run it

```bash
npm install
npm run dev          # http://localhost:3000
npm run build && npm start
```

Node 20.9+ required (Next 16).

## Deploying

### Vercel (recommended)
1. Push this folder to a GitHub repo.
2. Import on Vercel → zero-config detects Next.js.
3. Point `shremps.com` at the project (Vercel → Domains).

### Pure GitHub Pages
GitHub Pages serves static HTML; this app uses dynamic features (App Router with future API route, Next/Image). The cleanest path is **Vercel + custom domain on shremps.com**. If you really want GitHub-hosted static export, add `output: "export"` to `next.config.ts`, drop the `/api/contact` route, and run `npm run build` to produce a static site — but Vercel is the path of least resistance here.

## Where to edit content

Everything human-readable is one of:

| What | Where |
| --- | --- |
| Brands (Shremps, Shrempies, future) | [`lib/brands.ts`](lib/brands.ts) |
| Team & Partners (renders fallback line until populated) | [`lib/team.ts`](lib/team.ts) |
| Hero tagline + subhead | [`components/sections/Hero.tsx`](components/sections/Hero.tsx) |
| About copy | [`components/sections/About.tsx`](components/sections/About.tsx) |
| Work with us blurbs | [`components/sections/WorkWithUs.tsx`](components/sections/WorkWithUs.tsx) |
| Studio email | [`components/sections/Contact.tsx`](components/sections/Contact.tsx) (`STUDIO_EMAIL`) |
| Footer studio social URLs | [`components/sections/Footer.tsx`](components/sections/Footer.tsx) (`STUDIO_SOCIALS`) |
| Theme colors (orange, blue, ink, paper) | [`app/globals.css`](app/globals.css) (`@theme` block) |

Adding a new brand world = one entry in `lib/brands.ts`. The card grid picks it up automatically.

## Contact form — mailto vs API

The contact form ships with **two submit paths in the same file**, mailto active by default. To switch to a real API send:

1. `npm install resend`
2. Add `RESEND_API_KEY` to your env (Vercel → Settings → Env Vars)
3. Uncomment the Resend block in [`app/api/contact/route.ts`](app/api/contact/route.ts)
4. In [`components/sections/Contact.tsx`](components/sections/Contact.tsx), comment out `handleSubmitMailto(fields);` and uncomment the `handleSubmitApi(...)` block — one-line swap.

## Status of v0 decisions

Resolved:

- **Studio email** — `contact@shremps.com` ([`components/sections/Contact.tsx`](components/sections/Contact.tsx)).
- **Studio palette** — `#FF5A1F` (shremp orange) and `#1A5BFF` (shremp blue). One-line swap in [`app/globals.css`](app/globals.css) when refined values land.
- **Studio-level socials** — none for now. Footer has the wordmark + nav links + copyright only. Brand socials live on the brand cards.
- **Press / news** — not in v0 and not planned.

Still to come (deferred — Hunter will add):

- **Brand social URLs** — placeholders (`PLACEHOLDER_*`) in [`lib/brands.ts`](lib/brands.ts). 6 URLs total: YouTube + Twitter + Instagram for both Shremps and Shrempies.
- **Team & Partners list** — empty array in [`lib/team.ts`](lib/team.ts) renders the fallback *"Team and partners listed soon."* until populated.
- **Brand graphics** — `public/brands/` is reserved. Brand-card hero illustrations slot in when ready.
- **Logo asset** — typeset wordmark in nav and footer for now. Drop a real logo in `public/` and swap when ready.

## File map

```
app/
  layout.tsx            Root layout — Geist fonts, metadata, color tokens
  page.tsx              Single-page home (six sections in order)
  globals.css           Tailwind v4 theme tokens — color swap lives here
  brands/
    shremps/page.tsx    Stub (links back to home brands grid)
    shrempies/page.tsx  Stub (CTA out to shrempies.com)
  contact/page.tsx      Mirrors home contact section
  api/contact/route.ts  Stubbed API path for production swap
components/
  Nav.tsx               Sticky header + mobile menu
  BrandCard.tsx         "World preview" card (used by brands grid)
  TeamGrid.tsx          Team & Partners (renders fallback if empty)
  SocialIcon.tsx        Lucide icon mapper for the 5 platforms
  sections/
    Hero.tsx
    Brands.tsx
    About.tsx
    WorkWithUs.tsx
    Contact.tsx
    Footer.tsx
    _shared.tsx         SectionLabel + SectionHeading primitives
lib/
  brands.ts             Add a new brand = one entry here
  team.ts               Populate to swap fallback line for the grid
public/
  brands/               Drop brand card illustrations here
```

## Out of scope (for v0)

CMS, blog, newsletter, analytics beyond Vercel built-in, e-commerce, NFT/wallet, full Shremps + Shrempies sub-sites, cookie banner.
