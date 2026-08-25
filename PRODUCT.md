# Product

## Register

brand

## Users

Two audiences, one anxiety:

1. **Middle-class families in Dhaka** — the primary audience, and the reason the site is Bangla by
   default. Busy adults who can't leave work to escort an elderly parent to the hospital, collect
   reports, or receive a relative at the airport or Sadarghat launch terminal. Often browsing on
   mid-range Android over patchy data, often forwarding the page to a parent who reads only Bangla.
2. **Bangladeshi diaspora (NRBs)** — sons and daughters in Toronto, London, Dubai, New York deciding at
   11pm who will take their mother to her cardiologist in Dhaka tomorrow. They find the site on a
   phone, judge trustworthiness in seconds, and convert via WhatsApp. Comfortable in English, which is
   one switch away at `/en`.

The job to be done: *"Let me hand over the care of someone I love, to a stranger, without fear."*
Every design decision serves that hand-over of trust.

## Product Purpose

Guide is a pre-launch medical companion service in Dhaka. Primary service: Hospital Companion (home →
hospital → consultation notes → medicines → reports → safe return, with digital reports sent to family
abroad). Secondary: overnight hospital attendant, therapy & dialysis escort, report/medicine
collection, airport & launch terminal escorts, intercity/village companion. Booking is WhatsApp/phone
only — no online payment, nothing stored on the website. The website's success = a worried family
member messages on WhatsApp.

## Brand Personality

**Steadfast · Warm · Precise.** The voice of a trusted family aide: calm, direct, never salesy. Bangla
is the brand's first voice — the client's own words, kept close to verbatim wherever they were
supplied. English is a faithful second version, not a different pitch. Emotional goal: the relief of
"someone reliable is handling it."

## Anti-references

- **The 2024 v0/AI-template look** (the founder's explicit complaint, twice): generic gradient heroes,
  glassmorphism, identical icon-card grids, uppercase tracked eyebrows over every section, fake
  metrics, ambient shader backgrounds.
- **Fake social proof.** The business is pre-launch: no testimonials, no "500+ clients", no invented
  numbers. Honesty is a design feature.
- **Western eldercare gloss** (Honor/Papa-style soft-focus stock photography) — reads false here. The
  three photographs on the site are client-supplied Dhaka scenes, cropped and retouched so no broken
  lettering survives, and captioned as moments on the route rather than as sales imagery. Photography
  from anywhere else, or of anyone who is not plausibly in Dhaka, is out.
- **NGO/charity aesthetics** — Guide is a paid professional service, not aid.

## Design Principles

1. **Trust is built with specifics.** Real terms (50% advance, 3–4h booking window, live tracking)
   shown plainly beat vague promises. Transparency sections are first-class content, not fine print.
2. **The journey is the brand.** Guide's entire service is accompanying someone along a route (home →
   hospital → home). The visual system draws that route rather than describing it.
3. **Honest by construction.** Nothing on the page claims what the business can't prove. Process over
   testimonials; a caption over a slogan.
4. **Bangla first, two scripts one voice.** The default experience is Bangla, typeset with the same
   craft as the English one — its own type scale, its own tracking and leading, its own numerals.
   English is a switch away and never the assumed default.
5. **Works on a worried phone.** Fast on mid-range Android, readable in Dhaka daylight, one thumb to
   WhatsApp from anywhere on the page (the fixed bar under `md`).

## Accessibility & Inclusion

- WCAG 2.2 AA minimum: body text ≥4.5:1, focus-visible styles everywhere, skip link.
- Measured contrast, not eyeballed: every text/background pair is checked against AA before shipping
  (the floors are recorded in DESIGN.md).
- Full `prefers-reduced-motion` alternatives for all animation.
- Audience includes elderly users and stressed users: generous tap targets (≥44px), no time-limited UI,
  plain language.
- Bengali text is real text (never images). The page declares `lang="bn-BD"`; Bengali fragments inside
  the English site are tagged `lang="bn"` individually.
