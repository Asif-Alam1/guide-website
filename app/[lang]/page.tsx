import type React from "react"
import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowRight, Check, Phone } from "lucide-react"

import { Figure } from "@/components/figure"
import { JsonLd } from "@/components/json-ld"
import { WhatsAppIcon } from "@/components/whatsapp-icon"
import { localeNumber } from "@/lib/format"
import { getDict, isLocale, type Locale } from "@/lib/i18n"
import { buildMetadata } from "@/lib/seo"
import { PHONE_TEL, SERVICE_IDS, waLink } from "@/lib/site"

import heroPhoto from "@/public/photos/hero-dhaka-alley.jpg"
import hospitalPhoto from "@/public/photos/hospital-consult.jpg"
import streetPhoto from "@/public/photos/street-walker.jpg"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>
}): Promise<Metadata> {
  const { lang } = await params
  return isLocale(lang) ? buildMetadata(lang, "") : {}
}

export default async function HomePage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  if (!isLocale(lang)) notFound()
  const locale = lang as Locale
  const d = getDict(locale)
  const t = d.home
  const home = `/${locale}`

  /* Bengali waymarks stay Bengali on the English site, so they need tagging there. */
  const bnAttr = locale === "en" ? { lang: "bn" as const } : {}

  const featuredId = SERVICE_IDS[0]
  const featured = d.services[featuredId]

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: t.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  }

  const stepPhotos: Record<number, React.ReactNode> = {
    2: (
      <Figure
        image={hospitalPhoto}
        alt={t.routePhotoAlt}
        caption={t.routePhotoCaption}
        sizes="(min-width: 1024px) 42rem, 100vw"
        className="mt-6 max-w-2xl"
      />
    ),
    4: (
      <Figure
        image={streetPhoto}
        alt={t.routePhoto2Alt}
        caption={t.routePhoto2Caption}
        sizes="(min-width: 1024px) 42rem, 100vw"
        className="mt-6 max-w-2xl"
      />
    ),
  }

  return (
    <main id="main">
      {/* ---------- Hero: type, a photograph, one action ---------- */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="hero-glow" aria-hidden="true" />
        <div className="container-page relative grid gap-12 pb-16 pt-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16 lg:pb-24 lg:pt-16">
          <div>
            <p
              {...bnAttr}
              className="enter waymark mb-5"
              style={{ "--enter": 0 } as React.CSSProperties}
            >
              {t.heroKicker}
            </p>

            <h1
              className="enter-display heading-hero text-foreground"
              style={{ "--enter": 1 } as React.CSSProperties}
            >
              {t.heroTitleLead}
              <br />
              <span className="text-primary">{t.heroTitleHighlight}</span>
            </h1>

            <p
              className="enter mt-7 max-w-[54ch] text-[length:var(--text-lead)] leading-relaxed text-muted-foreground"
              style={{ "--enter": 3 } as React.CSSProperties}
            >
              {t.heroLead}
            </p>

            <div
              className="enter mt-9 flex flex-col gap-4 sm:flex-row sm:items-start"
              style={{ "--enter": 4 } as React.CSSProperties}
            >
              <div className="flex flex-col gap-2">
                <a
                  href={waLink(d.prefill.hero)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-accent !min-h-[3.25rem] !px-7 text-[1.05rem]"
                >
                  <WhatsAppIcon className="h-5 w-5" />
                  {d.common.whatsapp}
                </a>
                <span className="pl-1 font-display text-sm text-muted-foreground">
                  {d.common.replyWindow}
                </span>
              </div>
              <a href={`tel:${PHONE_TEL}`} className="btn btn-outline !min-h-[3.25rem]">
                <Phone className="h-4 w-4" aria-hidden="true" />
                <span dir="ltr">{d.common.phone}</span>
              </a>
            </div>

            <ul
              className="enter journey-list mt-10 grid gap-x-8 gap-y-3 font-display text-[0.95rem] text-muted-foreground sm:grid-cols-2"
              style={{ "--enter": 5 } as React.CSSProperties}
            >
              {t.heroChips.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <Check className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <Figure
            image={heroPhoto}
            alt={t.heroPhotoAlt}
            caption={t.heroPhotoCaption}
            sizes="(min-width: 1600px) 620px, (min-width: 1024px) 43vw, 100vw"
            priority
            className="enter mx-auto w-full max-w-md lg:max-w-none"
          />
        </div>
      </section>

      {/* ---------- The route: how one visit works ---------- */}
      <section id="how-it-works" className="bg-muted py-20 lg:py-28" aria-labelledby="how-heading">
        <div className="container-page grid gap-14 lg:grid-cols-[1fr_1.5fr] lg:gap-20">
          <div className="max-w-xl lg:sticky lg:top-28 lg:self-start">
            <p {...bnAttr} className="waymark mb-3">
              {t.routeWaymark}
            </p>
            <h2 id="how-heading" className="heading-2">
              {t.routeTitle}
            </h2>
            <p className="mt-5 text-[1.05rem] leading-relaxed text-muted-foreground">
              {t.routeLead}
            </p>
            <div className="mt-8 hidden flex-col items-start gap-3 lg:flex">
              <a
                href={waLink(d.prefill.services[featuredId])}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                <WhatsAppIcon className="h-4 w-4" />
                {t.routeCta}
              </a>
              <p className="font-display text-sm text-muted-foreground">
                {d.common.bookAhead} ·{" "}
                <Link
                  href={`${home}/terms`}
                  className="underline underline-offset-4 hover:text-foreground"
                >
                  {d.common.seeTerms}
                </Link>
              </p>
            </div>
          </div>

          <div className="route-scope relative max-w-3xl">
            <div className="route-dot" aria-hidden="true" />
            <svg
              aria-hidden="true"
              viewBox="0 0 2 100"
              preserveAspectRatio="none"
              fill="none"
              className="absolute left-[1.19rem] top-3 h-[calc(100%-2.5rem)] w-[2px]"
            >
              <path
                d="M1 0 V100"
                pathLength="1"
                stroke="oklch(0.55 0.08 165)"
                strokeWidth="2"
                className="path-draw"
              />
            </svg>

            <ol className="space-y-12 lg:space-y-14">
              {t.routeSteps.map((step, index) => (
                <li key={step.title} className="reveal relative flex gap-6 lg:gap-8">
                  <span
                    className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent font-display text-[1.05rem] font-bold text-accent-foreground ring-4 ring-muted"
                    aria-hidden="true"
                  >
                    {localeNumber(index + 1, locale)}
                  </span>
                  <div className="min-w-0 pt-1">
                    <h3 className="heading-3">{step.title}</h3>
                    <p className="mt-2 max-w-[52ch] leading-relaxed text-muted-foreground">
                      {step.body}
                    </p>
                    {stepPhotos[index] ?? null}
                  </div>
                </li>
              ))}
            </ol>

            <div className="reveal mt-14 flex flex-col items-start gap-3 lg:hidden">
              <a
                href={waLink(d.prefill.services[featuredId])}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                <WhatsAppIcon className="h-4 w-4" />
                {t.routeCta}
              </a>
              <p className="font-display text-sm text-muted-foreground">
                {d.common.bookAhead} ·{" "}
                <Link
                  href={`${home}/terms`}
                  className="underline underline-offset-4 hover:text-foreground"
                >
                  {d.common.seeTerms}
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Services: featured panel + editorial ledger ---------- */}
      <section id="services" className="bg-background py-20 lg:py-28" aria-labelledby="services-heading">
        <div className="container-page">
          <div className="mb-14 max-w-2xl">
            <p {...bnAttr} className="waymark mb-3">
              {t.servicesWaymark}
            </p>
            <h2 id="services-heading" className="heading-2">
              {t.servicesTitle}
            </h2>
            <p className="mt-5 text-[1.05rem] leading-relaxed text-muted-foreground">
              {t.servicesLead}
            </p>
          </div>

          <div className="reveal grain on-deep relative overflow-hidden rounded-xl bg-brand-deep text-white">
            <div className="relative z-10 grid gap-10 p-8 lg:grid-cols-[1.3fr_1fr] lg:p-14">
              <div>
                <p className="mb-2 font-display text-sm font-semibold tracking-wide text-accent">
                  {localeNumber(1, locale)} / {localeNumber(SERVICE_IDS.length, locale)}
                </p>
                <h3 className="font-display text-[clamp(1.75rem,1.2rem+2.2vw,2.6rem)] font-bold leading-tight">
                  {featured.name}
                </h3>
                <p className="mt-5 max-w-[56ch] text-[1.05rem] leading-relaxed text-white/70">
                  {featured.description}
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <a
                    href={waLink(d.prefill.services[featuredId])}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-accent"
                  >
                    <WhatsAppIcon className="h-4 w-4" />
                    {d.common.bookService}
                  </a>
                  <a href="#how-it-works" className="btn btn-outline-dark">
                    {d.common.seeHow}
                    <ArrowRight className="btn-arrow h-4 w-4" aria-hidden="true" />
                  </a>
                </div>
              </div>
              <ul className="flex flex-col justify-center gap-4 lg:border-l lg:border-white/15 lg:pl-10">
                {featured.includes.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check className="mt-1 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                    <span className="font-display text-[1.02rem] text-white/85">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <ul className="mt-4">
            {SERVICE_IDS.slice(1).map((id, index) => (
              <li
                key={id}
                className="reveal grid gap-4 border-b border-border py-8 lg:grid-cols-[minmax(240px,1fr)_2fr_auto] lg:gap-10 lg:py-10"
              >
                <div>
                  <p className="font-display text-sm font-semibold text-muted-foreground">
                    {localeNumber(index + 2, locale)} / {localeNumber(SERVICE_IDS.length, locale)}
                  </p>
                  <h3 className="mt-1 font-display text-[1.35rem] font-semibold leading-snug text-foreground">
                    {d.services[id].name}
                  </h3>
                </div>
                <p className="max-w-[58ch] self-center leading-relaxed text-muted-foreground">
                  {d.services[id].description}
                </p>
                <div className="self-center">
                  <a
                    href={waLink(d.prefill.services[id])}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline whitespace-nowrap !min-h-[2.75rem]"
                  >
                    <WhatsAppIcon className="h-4 w-4 text-[#25D366]" />
                    {d.common.askAbout}
                  </a>
                </div>
              </li>
            ))}
          </ul>

          <p className="mt-8 font-display text-[0.95rem] text-muted-foreground">
            {t.areasLine} {d.areas.join(" · ")}{" "}
            <span className="font-medium text-primary">{t.areasExpanding}</span>
          </p>
        </div>
      </section>

      {/* ---------- Safety: the artifact your family receives ---------- */}
      <section
        className="grain on-deep relative bg-brand-deep py-20 text-white lg:py-28"
        aria-labelledby="safety-heading"
      >
        <div className="container-page relative z-10">
          <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
            <div>
              <p {...bnAttr} className="waymark mb-3">
                {t.safetyWaymark}
              </p>
              <h2 id="safety-heading" className="heading-2">
                {t.safetyTitle}
              </h2>
              <p className="mt-5 max-w-[54ch] text-[1.05rem] leading-relaxed text-white/70">
                {t.safetyLead}
              </p>

              <dl className="mt-10 space-y-6">
                {t.safetyItems.map((item) => (
                  <div key={item.term} className="reveal">
                    <dt className="font-display text-[1.1rem] font-semibold text-accent">
                      {item.term}
                    </dt>
                    <dd className="mt-1 max-w-[52ch] leading-relaxed text-white/65">
                      {item.detail}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            <figure className="mx-auto w-full max-w-sm">
              <div className="chat-scroll overflow-hidden rounded-xl bg-white shadow-2xl">
                <div className="flex items-center gap-3 bg-brand-deeper px-4 py-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-accent font-display text-sm font-bold text-accent-foreground">
                    G
                  </div>
                  <div className="leading-tight">
                    <p className="font-display text-sm font-semibold text-white">{t.chat.name}</p>
                    <p className="font-display text-xs text-white/55">{t.chat.status}</p>
                  </div>
                </div>
                <div className="space-y-2.5 bg-[oklch(0.95_0.01_120)] p-4 font-display text-[0.85rem]">
                  <div className="chat-msg max-w-[88%] rounded-lg rounded-tl-sm bg-white p-3 shadow-sm">
                    <p className="text-foreground">{t.chat.m1}</p>
                    <div className="mt-2 flex items-center gap-2.5 rounded-md bg-muted p-2.5">
                      <div
                        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-deep text-xs font-bold text-white"
                        aria-hidden="true"
                      >
                        ID
                      </div>
                      <p className="text-xs leading-snug text-muted-foreground">
                        {t.chat.m1Card}
                        <br />
                        <span className="font-semibold text-primary">{t.chat.m1Verified}</span>
                      </p>
                    </div>
                    <p className="mt-1.5 text-right text-[0.7rem] text-muted-foreground">
                      {t.chat.m1Time}
                    </p>
                  </div>
                  <div className="chat-msg max-w-[88%] rounded-lg rounded-tl-sm bg-white p-3 shadow-sm">
                    <p className="text-foreground">
                      <span className="chat-live-dot" aria-hidden="true" />
                      {t.chat.m2}
                    </p>
                    <p className="mt-1.5 text-right text-[0.7rem] text-muted-foreground">
                      {t.chat.m2Time}
                    </p>
                  </div>
                  <div className="chat-msg max-w-[88%] rounded-lg rounded-tl-sm bg-white p-3 shadow-sm">
                    <p className="text-foreground">{t.chat.m3}</p>
                    <p className="mt-1.5 text-right text-[0.7rem] text-muted-foreground">
                      {t.chat.m3Time}
                    </p>
                  </div>
                  <div className="chat-msg relative">
                    <div className="chat-typing" aria-hidden="true">
                      <i />
                      <i />
                      <i />
                    </div>
                    <div className="chat-final max-w-[88%] rounded-lg rounded-tl-sm bg-white p-3 shadow-sm">
                      <p className="text-foreground">{t.chat.m4}</p>
                      <p className="mt-1.5 text-right text-[0.7rem] text-muted-foreground">
                        {t.chat.m4Time}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <figcaption className="mt-3 text-center font-display text-xs text-white/60">
                {t.chat.caption}
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* ---------- The fine print, in plain sight ---------- */}
      <section className="bg-background py-20 lg:py-28" aria-labelledby="terms-heading">
        <div className="container-page">
          <div className="grid gap-12 lg:grid-cols-[1fr_2fr] lg:gap-20">
            <div>
              <p {...bnAttr} className="waymark mb-3">
                {t.termsWaymark}
              </p>
              <h2 id="terms-heading" className="heading-2">
                {t.termsTitle}
              </h2>
              <p className="mt-5 leading-relaxed text-muted-foreground">{t.termsLead}</p>
              <Link
                href={`${home}/terms`}
                className="mt-6 inline-flex items-center gap-2 font-display font-medium text-primary underline-offset-4 hover:underline"
              >
                {t.termsCta}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>

            <dl className="grid gap-x-10 sm:grid-cols-2">
              {t.keyTerms.map((item) => (
                <div key={item.term} className="reveal border-t border-border py-5">
                  <dt className="font-display text-[1.05rem] font-semibold text-foreground">
                    {item.term}
                  </dt>
                  <dd className="mt-1 text-[0.95rem] leading-relaxed text-muted-foreground">
                    {item.detail}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* ---------- FAQ ---------- */}
      <section className="bg-muted py-20 lg:py-28" aria-labelledby="faq-heading">
        <div className="container-page">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.6fr] lg:gap-20">
            <div>
              <p {...bnAttr} className="waymark mb-3">
                {t.faqWaymark}
              </p>
              <h2 id="faq-heading" className="heading-2">
                {t.faqTitle}
              </h2>
              <p className="mt-5 leading-relaxed text-muted-foreground">
                {t.faqLeadBefore}{" "}
                <a
                  href={waLink(d.prefill.float)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-display font-medium text-primary underline-offset-4 hover:underline"
                >
                  {t.faqLeadLink}
                </a>{" "}
                {t.faqLeadAfter}
              </p>
            </div>

            <div className="divide-y divide-border border-y border-border">
              {t.faqs.map((faq) => (
                <details key={faq.question} className="group">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 font-display text-[1.08rem] font-semibold text-foreground [&::-webkit-details-marker]:hidden">
                    {faq.question}
                    <span
                      className="shrink-0 text-2xl font-normal leading-none text-primary transition-transform duration-200 group-open:rotate-45 motion-reduce:transition-none"
                      aria-hidden="true"
                    >
                      +
                    </span>
                  </summary>
                  <p className="max-w-[62ch] pb-6 leading-relaxed text-muted-foreground">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      <JsonLd data={faqJsonLd} />
    </main>
  )
}
