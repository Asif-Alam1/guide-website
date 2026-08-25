import type React from "react"
import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowRight } from "lucide-react"

import { WhatsAppIcon } from "@/components/whatsapp-icon"
import { getDict, isLocale, type Locale } from "@/lib/i18n"
import { buildMetadata } from "@/lib/seo"
import { waLink } from "@/lib/site"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>
}): Promise<Metadata> {
  const { lang } = await params
  if (!isLocale(lang)) return {}
  const d = getDict(lang)
  return buildMetadata(lang, "/about", {
    title: d.about.title,
    description: d.about.metaDescription,
  })
}

export default async function AboutPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  if (!isLocale(lang)) notFound()
  const locale = lang as Locale
  const d = getDict(locale)
  const t = d.about
  const bnAttr = locale === "en" ? { lang: "bn" as const } : {}

  return (
    <main id="main">
      <section className="bg-background" aria-labelledby="about-heading">
        <div className="container-page pb-20 pt-14 lg:pb-28 lg:pt-20">
          <div className="max-w-3xl">
            <p
              {...bnAttr}
              className="enter waymark mb-4"
              style={{ "--enter": 0 } as React.CSSProperties}
            >
              {t.waymark}
            </p>
            <h1
              id="about-heading"
              className="enter-display heading-1"
              style={{ "--enter": 1 } as React.CSSProperties}
            >
              {t.heading}
            </h1>

            <div
              className="enter mt-10 max-w-[62ch] space-y-6 text-[1.1rem] leading-[1.8] text-foreground/85"
              style={{ "--enter": 3 } as React.CSSProperties}
            >
              {t.story.map((paragraph) => (
                <p key={paragraph.slice(0, 24)}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-muted py-20 lg:py-28" aria-labelledby="values-heading">
        <div className="container-page">
          <div className="mb-12 max-w-2xl">
            <p {...bnAttr} className="waymark mb-3">
              {t.valuesWaymark}
            </p>
            <h2 id="values-heading" className="heading-2">
              {t.valuesHeading}
            </h2>
          </div>

          <dl className="max-w-3xl">
            {t.values.map((value) => (
              <div
                key={value.name}
                className="reveal grid gap-2 border-t border-border py-8 sm:grid-cols-[210px_1fr] sm:gap-10"
              >
                <dt>
                  <span {...bnAttr} className="waymark block !text-[1.3rem]">
                    {value.word}
                  </span>
                  <span className="font-display text-[1.1rem] font-semibold text-foreground">
                    {value.name}
                  </span>
                </dt>
                <dd className="max-w-[56ch] leading-relaxed text-muted-foreground">{value.body}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section
        className="grain on-deep relative bg-brand-deep py-20 text-white lg:py-28"
        aria-labelledby="not-heading"
      >
        <div className="container-page relative z-10">
          <div className="mb-12 max-w-2xl">
            <h2 id="not-heading" className="heading-2">
              {t.notHeadingBefore} <span className="text-accent">{t.notHeadingHighlight}</span>
            </h2>
            <p className="mt-5 text-[1.05rem] leading-relaxed text-white/70">{t.notLead}</p>
          </div>

          <div className="grid gap-10 lg:grid-cols-3 lg:gap-12">
            {t.notList.map((item) => (
              <div key={item.title} className="reveal border-t border-white/15 pt-6">
                <h3 className="font-display text-[1.2rem] font-semibold">{item.title}</h3>
                <p className="mt-3 leading-relaxed text-white/65">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background py-20 lg:py-28" aria-labelledby="coverage-heading">
        <div className="container-page">
          <div className="max-w-2xl">
            <p {...bnAttr} className="waymark mb-3">
              {t.coverageWaymark}
            </p>
            <h2 id="coverage-heading" className="heading-2">
              {t.coverageHeading}
            </h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">{t.coverageLead}</p>

            <ul className="mt-8 flex flex-wrap gap-2.5">
              {d.areas.map((area) => (
                <li
                  key={area}
                  className="rounded-full border border-border bg-card px-4 py-2 font-display text-[0.95rem] text-foreground"
                >
                  {area}
                </li>
              ))}
              <li className="rounded-full border border-dashed border-primary/40 px-4 py-2 font-display text-[0.95rem] text-primary">
                {t.expanding}
              </li>
            </ul>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href={waLink(d.prefill.hero)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-accent"
              >
                <WhatsAppIcon className="h-4 w-4" />
                {t.coverageCta}
              </a>
              <Link
                href={`/${locale}/contact`}
                className="inline-flex items-center gap-2 font-display font-medium text-primary underline-offset-4 hover:underline"
              >
                {t.coverageAlt}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
