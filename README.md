# Guide — guide-bd.com

Marketing site for **Guide**, a medical companion service in Dhaka: a background-checked, uniformed
companion who takes a family member to the hospital, sits through the consultation, buys the medicines,
collects the reports, brings them home — and sends the whole record to the family on WhatsApp.

Bangla is the default language; English is one switch away. Booking happens on WhatsApp: the site
stores nothing and has no backend.

## Stack

Next.js 16 (App Router, Turbopack) · React 19 · Tailwind CSS v4 (CSS-first, no JS config) · TypeScript ·
deployed on Vercel. Seven runtime dependencies, no UI kit.

```bash
npm install
npm run dev     # http://localhost:3000 → redirects to /bn
npm run build   # every page prerendered for both locales
npx tsc --noEmit
```

## Routes

| URL | What |
|---|---|
| `/` | 307 → `/bn`, or the visitor's saved language (`guide_locale` cookie) |
| `/bn`, `/en` | home |
| `/bn/about`, `/bn/contact`, `/bn/terms` | and the `/en` equivalents |
| `/about`, `/contact`, `/terms` | legacy paths from printed flyers → redirect into a locale |
| `/bn/opengraph-image` | social card, prerendered per locale |
| `/sitemap.xml`, `/robots.txt` | both locales, with hreflang alternates |

Routing lives in `proxy.ts` (Next 16's rename of `middleware.ts`). Everything under `app/[lang]/` is
statically generated for `bn` and `en` via `generateStaticParams`. `app/[lang]/[...rest]/page.tsx`
exists so an unknown URL gets a real 404 *inside* the locale layout instead of Next's unstyled
fallback.

## Editing copy

All user-visible text lives in two files:

- `lib/content/bn.ts` — Bangla. This is the source of truth and it defines the `Dict` type.
- `lib/content/en.ts` — English, typed as `Dict`, so **a key you add to one file and forget in the other
  is a build error.**

`lib/site.ts` holds only locale-independent facts (phone, WhatsApp number, email, address, service ids).
Never hard-code a visible string in a component.

Service copy is keyed by the ids in `SERVICE_IDS`; the first id is the featured service on the home
page. Each service also carries its own WhatsApp pre-fill under `prefill.services`, which is how we
tell from an incoming message which button was pressed.

## Photography

`public/photos/` holds three photographs plus a social-card base. They are client-supplied Dhaka
scenes, cropped to remove artifacts, feather-blurred where the source had unreadable lettering on a
badge or a sign, and graded to one look. `scripts/prepare-photos.mjs` is that pipeline — point it at the original frames
(kept by the client, not in this repo) to regenerate. Before adding another photograph, read the
Photography section of `DESIGN.md` — broken type in an image is the loudest "this is fake" signal a trust-first site can
send. Render photographs only through `components/figure.tsx`.

## Docs

- `PRODUCT.md` — who this is for, what the brand sounds like, what we will not fake.
- `DESIGN.md` — the design system: colour tokens with measured contrast, the per-locale type scale, the
  journey-line motif, the motion budget, and the component rules.

Read both before changing anything visual.
