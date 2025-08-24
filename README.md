<<<<<<< HEAD
# PACE — AI Rebrand (Next.js + Tailwind + Firebase)

An educational rebrand of a famous sports brand's website. All assets are original, AI‑generated (procedural) — no trademarks used.

## Stack

- **Frontend**: Next.js 14 (App Router), Tailwind CSS
- **Backend / CMS**: Firebase Firestore (optional). Falls back to local JSON for instant dev.
- **AI Branding**: Procedural SVG logo & OKLCH color palette (`/public/brand/logo.svg`, `/app/globals.css`)

## Features

- Modern UI (rounded 2xl, soft shadows, motion with Framer Motion)
- AI-generated logo & palette
- SEO: OG image (`/public/og.svg`), sitemap, robots.txt, clean metadata
- Mobile-first responsive layout
- Content via Firebase or local JSON (`/data/*.json`)

## Getting Started

```bash
npm install
npm run dev
```

Visit http://localhost:3000.

## Use with Firebase (optional)

1. Create a Firebase project.
2. Enable Firestore.
3. Add a Web App to obtain config.
4. Set env vars in `.env.local`:
```
NEXT_PUBLIC_FIREBASE_API_KEY=...
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=...
NEXT_PUBLIC_FIREBASE_PROJECT_ID=...
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=...
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=...
NEXT_PUBLIC_FIREBASE_APP_ID=...
```
5. Create collections `products` and `posts` to mirror `/data/products.json` and `/data/posts.json` fields.

The app auto-falls back to `/data/*.json` when envs are not set.

## Strapi Alternative

Prefer Strapi? Create types **Product** (name, price, image, badge, desc) and **Post** (slug, title, excerpt, cover, date). Replace `getCollectionOrLocal` in `lib/firebase.js` with fetch calls to your Strapi REST endpoints, or add a `/lib/strapi.js` and swap imports.

## Branding

- Config at `/config/brand.json`
- Logo: `/public/brand/logo.svg` (procedurally generated)
- Colors: defined as OKLCH in `globals.css` and `tailwind.config.mjs`

## SEO

- Metadata in `app/layout.jsx`
- Open Graph: `/public/og.svg`
- `app/sitemap.js` and `app/robots.txt/route.js` included

## Notes

- This is an original educational redesign ("rebranding of Nike"). No official affiliation.
- Replace placeholder images in `/public/images` with your own or a generator like Adobe Firefly/Durable.
=======
# FUTURE_FS_03
>>>>>>> 52bcbdeb8a2b01060abfed49c96be96ae95e2c00
