# Portfolio — Next.js

Next.js (App Router) rebuild of the portfolio, migrated from the Vite/React SPA in `../react`.
Server-rendered for SEO: per-page metadata, `sitemap.xml`, `robots.txt`, and JSON-LD.

## Stack
- Next.js 14 (App Router) + React 18 + TypeScript
- Tailwind CSS 3 + shadcn/ui (subset)
- React Three Fiber / drei (3D cube), framer-motion, EmailJS
- Deployed on Vercel

## Develop
```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve the production build
```

## Environment
Copy `.env.example` → `.env.local` and fill in EmailJS keys:
```
NEXT_PUBLIC_EMAILJS_SERVICE_ID=
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=
```

## SEO
- Production URL is set in `src/lib/site.ts` (`SITE_URL`). Update it before deploying.
- `src/app/sitemap.ts` and `src/app/robots.ts` generate `/sitemap.xml` and `/robots.txt`.
- After deploy, submit `https://<domain>/sitemap.xml` in Google Search Console.

## Structure
- `src/app/` — routes. Each page is a server `page.tsx` (exports `metadata`) that renders a
  co-located `'use client'` component (`*-client.tsx`) holding the interactive UI.
- `src/components/` — shared components (3D, cursor, sections, form) + `ui/` (shadcn subset).
- `public/assets/` — images, referenced by path.

## Routes
- `/` — home/portfolio
- `/blog` — case study index
- `/blog/acro-refrigeration` — Acro Refrigeration case study
