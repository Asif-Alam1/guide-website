# Guide — Design System

The visual system for guide-website. Register: **brand** (marketing surface; design carries the first
impression of trustworthiness).

## Language

**Bangla is the default language.** The site serves `/bn` and `/en`; `/` and any legacy path redirect
to `/bn` unless the visitor has previously switched (cookie `guide_locale`). All copy lives in
`lib/content/bn.ts` (the source of the `Dict` type) and `lib/content/en.ts` (typed as `Dict`, so a
missing key is a build error). Never hard-code a user-visible string in a component.

Bangla carries the emotional and informational load; English exists for the diaspora. The Bengali
waymarks (see below) stay Bengali on the English site — tagged `lang="bn"` there.

## Concept: The Journey Line

Guide's service is walking a route with someone (home → hospital → home). The visual spine of the site
is a drawn route — a line with waypoints — that appears as: the dashed rule above the hero's proof
list, the scroll-drawn timeline in "How it works" with its travelling marigold dot, and the marigold
tick that opens every photo caption. Numbered waypoints are allowed **only** where a real sequence
exists (the visit route, "after you press send", the service ledger, the terms).

## Color

Pure white ground; one committed deep green carrying brand surfaces; marigold as the single accent.
OKLCH everywhere. Defined in `app/globals.css`.

| Token | Value | Role |
|---|---|---|
| `--background` | `oklch(1 0 0)` | Page ground (pure white, never tinted cream) |
| `--foreground` | `oklch(0.24 0.03 170)` | Ink (green-black) |
| `--primary` | `oklch(0.4 0.09 165)` | Deep green — links, primary buttons, emphasis |
| `--brand-deep` | `oklch(0.27 0.05 168)` | Drenched brand sections (featured service, safety, contact aside) |
| `--brand-deeper` | `oklch(0.22 0.045 168)` | Footer, chat-mock header |
| `--accent` | `oklch(0.78 0.14 78)` | Marigold — CTAs, waypoints, highlights. Dark text on it (`--accent-foreground`), never white |
| `--muted` | `oklch(0.966 0.007 170)` | Alternating section wash (green-tinted, chroma 0.007) |
| `--muted-foreground` | `oklch(0.44 0.03 170)` | Secondary text (7.6:1 on white, 6.9:1 on muted) |

Measured contrast floors (all AA at 4.5:1): waymark 5.65:1 on white · `white/55` 5.9:1 on
`--brand-deeper` · `white/65` 7.0:1 on `--brand-deep` · placeholders `muted-foreground/85` 5.2:1.
Do not lighten text alphas below these without re-measuring. The site is light-only and declares
`color-scheme: light`.

On deep green surfaces: body text `white/65`–`white/75`, headings white, kickers `--accent`. WhatsApp
actions may use brand `#25D366` for the glyph only. Grain texture (`.grain`) belongs to deep-green
sections only.

## Typography

Two scripts, one voice — and one family per script:

- **Anek Bangla** (`--font-bengali`, variable, `subsets: ["bengali"]`) — everything on the Bangla site:
  display, body, UI, buttons. Hierarchy comes from weight and size, not from a second family. That is
  also one less font on a patchy connection.
- **Anek Latin** (`--font-display`, variable) — headings, buttons, labels, nav and form controls on the
  English site, plus Latin runs (Uber, CNG, WhatsApp, phone numbers) inside Bangla text.
- **Source Serif 4** (`--font-body`, variable, opsz) — body prose on the **English** site only. Loaded
  with `preload: false` so Bangla pages never fetch it.

Rules:
- Bengali is always real text. The whole-page treatment is set once on `html[lang^="bn"]`; Bengali
  *fragments* inside an English page use the `[lang="bn"]` attribute selector — never `:lang(bn)`,
  which compounds `font-size` down a subtree.
- The type scale is per-locale. `html[lang^="bn"]` overrides `--text-hero/-h1/-h2/-h3`,
  `--tracking-display` (to `0`, Bengali never takes negative tracking) and `--leading-display`
  (to `1.3`, so matra and conjuncts never clip).
- Use the `.heading-hero` / `.heading-1` / `.heading-2` / `.heading-3` classes rather than inline size
  utilities, so the per-locale overrides apply everywhere.
- `text-wrap: balance` on headings, `pretty` on paragraphs. Body copy max ~54–62ch.
- Numerals are localised through `localeNumber()` (`lib/format.ts`): Bengali digits on the Bangla site
  for step, clause and service numbers and the copyright year. Phone numbers stay Latin, always
  wrapped in `dir="ltr"`, so they remain dialable and recognisable.

## The Bengali waymark (`.waymark`)

The one named kicker system: each page section opens with a single Bengali word (যাত্রা / সেবা /
নিরাপত্তা / শর্ত / প্রশ্ন / যোগাযোগ / মূল্যবোধ / এলাকা) set in Anek Bangla semibold, marigold-dark
(`oklch(0.52 0.115 70)` on light, `--accent` on deep). This replaces the generic uppercase-tracked
English eyebrow — do not add English eyebrows.

## Photography

Three photographs, all supplied by the client, all shot-in-Dhaka scenes: the hero (`hero-dhaka-alley`,
4:5, upscaled 2× for retina), the consultation band (`hospital-consult`) anchored to route step 3, and
the street band (`street-walker`) anchored to route step 5. A fourth crop (`og-base`) backs the social
card.

Rules:
- Photographs are rendered through `components/figure.tsx` only: a static import (so Next knows the
  dimensions and can emit a blur placeholder), the `.photo-frame` shell, and a caption that opens with
  a marigold tick. Every photo needs a real `sizes` value matching its rendered width.
- Captions are wayfinding, not decoration: they name a moment on the route
  ("সকাল ৯:১২ — গাইড দরজায় পৌঁছে গেছেন"). Never a sales line.
- The source frames were generated, and they carried unreadable text artifacts on the uniform badge
  and on signage. Those patches are feather-blurred out at build time by the script kept in the
  session scratchpad (`sharp`, radial-gradient alpha masks). **Any new photograph must be checked for
  broken lettering before it ships** — garbled type is the single loudest "this is fake" signal.
- No photograph may imply a claim the business cannot support: no hospital branding, no named
  partners, no crowds of staff.

## Motion

Budget: hero entrance + scroll reveals + scroll-drawn journey line + micro-interactions. Nothing
ambient, nothing looping, no WebGL (the shader hero was removed — a real photograph does that job
better and costs less).

- `.enter` / `.enter-display` — page-load rise-in (display adds blur), staggered via `--enter: n`
  (90ms steps). Gated behind `prefers-reduced-motion: no-preference`.
- `.reveal` — scroll-driven rise (CSS `animation-timeline: view()`), double-gated behind `@supports` +
  reduced-motion. Content is fully visible in non-supporting browsers, print, and reduced motion.
- `.path-draw` — SVG stroke drawn by scroll (path needs `pathLength="1"`). Default state fully drawn.
- `.route-dot` — marigold dot riding the timeline; `.chat-msg` / `.chat-final` — WhatsApp messages
  arriving as the artifact scrolls.
- Buttons: `.btn` scale on press, `.btn-arrow` nudge on hover. Ease: expo-out
  `cubic-bezier(0.19, 1, 0.22, 1)`.

## Components & patterns

- `components/logo.tsx` — the original raster mark; links to the locale home. Sized via `sizes` so a
  112px logo never downloads a 640px file.
- `components/header.tsx` — sticky, translucent, with the language switch. Client component; it
  receives an explicit strings object, never the whole dictionary.
- `components/contact-bar.tsx` — a fixed two-button bar (WhatsApp + call) under `md`, the familiar
  floating bubble above it. Ships a flow spacer so it never covers the end of the page, and
  `print:hidden` on both.
- `.btn` variants: `btn-accent` (marigold, primary action = WhatsApp), `btn-primary` (green),
  `btn-outline`, `btn-outline-dark` (on deep).
- WhatsApp is the conversion path: every service links `waLink(prefill)` with an honest,
  service-specific, **localised** pre-fill from `lib/content/{bn,en}.ts`, and CTAs state the reply
  window. Per-placement pre-fills double as attribution.
- Trust artifact: the WhatsApp chat mock (home, safety section) shows what families actually receive,
  captioned as an illustration. Extend it rather than adding more photography.
- Section grammar varies: photo-and-type hero, sticky-intro + timeline, drenched featured panel,
  editorial ledger rows with hairlines, typographic `dl` grids, native `details` FAQ. **Never**
  identical icon-card grids, side-stripe borders, glassmorphism, or gradient text.

## Honesty constraints (from PRODUCT.md — binding on design)

No fake testimonials, metrics, client counts, or fabricated partnerships. Credibility comes from
specifics: published terms, the vetting process, the visit protocol, response-time promises.

## Assets

Favicon and apple icon are the raster mark (`app/icon.png`, `app/apple-icon.png`). The social card is
generated per locale by `app/[lang]/opengraph-image.tsx`: a photograph, a scrim, and the logo artwork —
because Satori cannot shape Bengali, the Bengali half of the card is carried by the logo image, and
only Latin text is typeset.
