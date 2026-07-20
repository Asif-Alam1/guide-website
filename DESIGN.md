# Guide — Design System

The visual system for guide-website. Register: **brand** (marketing surface; design carries the first impression of trustworthiness).

## Concept: The Journey Line

Guide's service is walking a route with someone (home → hospital → home). The visual spine of the site is a drawn route — a line with waypoints — that appears as: the dashed arc in the hero, the scroll-drawn timeline in "How it works", the brand mark (rounded square + path + marigold endpoint), and the OG image. Numbered waypoints are allowed **only** where a real sequence exists (the visit route, "after you press send").

## Color

Pure white ground; one committed deep green carrying brand surfaces; marigold as the single accent. OKLCH everywhere. Defined in `app/globals.css`.

| Token | Value | Role |
|---|---|---|
| `--background` | `oklch(1 0 0)` | Page ground (pure white, never tinted cream) |
| `--foreground` | `oklch(0.24 0.03 170)` | Ink (green-black) |
| `--primary` | `oklch(0.4 0.09 165)` | Deep green — links, primary buttons, emphasis |
| `--brand-deep` | `oklch(0.27 0.05 168)` | Drenched brand sections (featured service, safety, contact aside) |
| `--brand-deeper` | `oklch(0.22 0.045 168)` | Footer, chat-mock header |
| `--accent` | `oklch(0.78 0.14 78)` | Marigold — CTAs, waypoints, highlights. Dark text on it (`--accent-foreground`), never white |
| `--muted` | `oklch(0.966 0.007 170)` | Alternating section wash (green-tinted, chroma 0.007) |
| `--muted-foreground` | `oklch(0.44 0.03 170)` | Secondary text (≥4.5:1 on white and muted) |

On deep green surfaces: body text `white/65`–`white/75`, headings white, kickers `--accent`. WhatsApp actions may use brand `#25D366` for the glyph only. Grain texture (`.grain`) belongs to deep-green sections only.

## Typography

One superfamily across two scripts — "two scripts, one voice":

- **Anek Latin** (`--font-display`, variable) — headings, buttons, labels, nav, form controls.
- **Anek Bangla** (`--font-bengali`, variable) — all Bengali text. Loaded with `subsets: ["bengali"]`.
- **Source Serif 4** (`--font-body`, variable, opsz) — body prose. The serif carries warmth; the sans carries structure.

Rules:
- Bengali is always real text with `lang="bn"`. Base CSS bumps `:lang(bn)` to `1.06em` and `line-height: 1.65` (matra + conjuncts render smaller/taller than Latin).
- Fluid scale tokens: `--text-hero` (≤5.25rem), `--text-h2`, `--text-h3`, `--text-lead`. Display tracking never tighter than `-0.025em`.
- `text-wrap: balance` on headings, `pretty` on paragraphs (in base layer).
- Body copy max ~58–62ch.

## The Bengali waymark (`.waymark`)

The one named kicker system: each page section opens with a single Bengali word (যাত্রা / সেবা / নিরাপত্তা / শর্ত / প্রশ্ন / যোগাযোগ…) set in Anek Bangla semibold, marigold-dark (`oklch(0.52 0.115 70)` on light, `--accent` on deep). This replaces the generic uppercase-tracked English eyebrow — do not add English eyebrows.

## Motion

Budget: hero entrance + scroll reveals + scroll-drawn journey line + micro-interactions. Nothing ambient, nothing looping.

- `.enter` / `.enter-display` — page-load rise-in (display adds blur), staggered via `--enter: n` (90ms steps). Gated behind `prefers-reduced-motion: no-preference`.
- `.reveal` — scroll-driven rise (CSS `animation-timeline: view()`), double-gated behind `@supports` + reduced-motion. Content is fully visible in non-supporting browsers, print, and reduced motion.
- `.path-draw` — SVG stroke drawn by scroll (path needs `pathLength="1"`). Default state fully drawn.
- Buttons: `.btn` scale on press, `.btn-arrow` nudge on hover. Ease: expo-out `cubic-bezier(0.19, 1, 0.22, 1)`.

## Components & patterns

- `components/logo.tsx` — wordmark lockup (mark + "Guide" + optional Bengali tagline). Never use raster logos.
- `.btn` variants: `btn-accent` (marigold, primary action = WhatsApp), `btn-primary` (green), `btn-outline`, `btn-outline-dark` (on deep).
- WhatsApp is the conversion path: every service links `waLink(prefill)` with an honest, service-specific pre-fill from `lib/site.ts` (`PREFILL`), and CTAs state the reply window ("~30 min, 9am–9pm Dhaka time"). Per-placement pre-fills double as attribution.
- Trust artifact: the WhatsApp chat mock (home, safety section) shows what families actually receive; captioned as an illustration. Extend it rather than adding stock photos.
- Section grammar varies: sticky-intro + timeline, drenched featured panel, editorial ledger rows with hairlines, typographic dl grids, native `details` FAQ. **Never** identical icon-card grids, side-stripe borders, glassmorphism, or gradient text.

## Honesty constraints (from PRODUCT.md — binding on design)

No fake testimonials, metrics, client counts, stock photos of fake staff, or fabricated partnerships. Credibility comes from specifics: published terms, the vetting process, the visit protocol, response-time promises.

## Assets

Favicon/apple icon/OG image are all code-generated (`app/icon.tsx`, `app/apple-icon.tsx`, `app/opengraph-image.tsx`). Satori cannot shape Bengali — keep OG card text English; Bengali belongs in `alt`.
