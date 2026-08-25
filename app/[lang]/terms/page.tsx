import type React from "react"
import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { WhatsAppIcon } from "@/components/whatsapp-icon"
import { localeNumber } from "@/lib/format"
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
  return buildMetadata(lang, "/terms", {
    title: d.terms.title,
    description: d.terms.metaDescription,
  })
}

export default async function TermsPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  if (!isLocale(lang)) notFound()
  const locale = lang as Locale
  const d = getDict(locale)
  const t = d.terms
  const bnAttr = locale === "en" ? { lang: "bn" as const } : {}

  return (
    <main id="main">
      <section className="bg-background" aria-labelledby="terms-heading">
        <div className="container-page pb-12 pt-14 lg:pb-16 lg:pt-20">
          <div className="max-w-3xl">
            <p
              {...bnAttr}
              className="enter waymark mb-4"
              style={{ "--enter": 0 } as React.CSSProperties}
            >
              {t.waymark}
            </p>
            <h1
              id="terms-heading"
              className="enter-display heading-1"
              style={{ "--enter": 1 } as React.CSSProperties}
            >
              {t.heading}
            </h1>
            <p
              className="enter mt-6 max-w-[58ch] text-[length:var(--text-lead)] leading-relaxed text-muted-foreground"
              style={{ "--enter": 2 } as React.CSSProperties}
            >
              {t.lead}
            </p>
            <p
              className="enter mt-4 max-w-[58ch] font-display text-sm leading-relaxed text-muted-foreground"
              style={{ "--enter": 3 } as React.CSSProperties}
            >
              {t.note}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-background pb-20 lg:pb-28">
        <div className="container-page">
          <ol className="max-w-3xl">
            {t.clauses.map((clause, index) => (
              <li
                key={clause.title}
                className="grid gap-2 border-t border-border py-7 sm:grid-cols-[64px_1fr] sm:gap-6"
              >
                <span
                  className="font-display text-[1.5rem] font-bold leading-none text-primary/50"
                  aria-hidden="true"
                >
                  {localeNumber(String(index + 1).padStart(2, "0"), locale)}
                </span>
                <div>
                  <h2 className="font-display text-[1.15rem] font-semibold text-foreground">
                    {clause.title}
                  </h2>
                  <p className="mt-2 max-w-[62ch] leading-relaxed text-muted-foreground">
                    {clause.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>

          <div className="mt-10 max-w-3xl rounded-xl bg-muted p-7">
            <p className="max-w-[62ch] leading-relaxed text-foreground/85">{t.consent}</p>
            <a
              href={waLink(d.prefill.terms)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 font-display font-medium text-primary underline-offset-4 hover:underline"
            >
              <WhatsAppIcon className="h-4 w-4 text-[#25D366]" />
              {t.askCta}
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
