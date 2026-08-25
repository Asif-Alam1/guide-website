import type React from "react"
import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { Mail, Phone } from "lucide-react"

import { BookingForm } from "@/components/booking-form"
import { WhatsAppIcon } from "@/components/whatsapp-icon"
import { localeNumber } from "@/lib/format"
import { getDict, isLocale, type Locale } from "@/lib/i18n"
import { buildMetadata } from "@/lib/seo"
import { EMAIL, PHONE_TEL, SERVICE_IDS, waLink } from "@/lib/site"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>
}): Promise<Metadata> {
  const { lang } = await params
  if (!isLocale(lang)) return {}
  const d = getDict(lang)
  return buildMetadata(lang, "/contact", {
    title: d.contact.title,
    description: d.contact.metaDescription,
  })
}

export default async function ContactPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  if (!isLocale(lang)) notFound()
  const locale = lang as Locale
  const d = getDict(locale)
  const t = d.contact
  const bnAttr = locale === "en" ? { lang: "bn" as const } : {}

  return (
    <main id="main">
      <section className="bg-background" aria-labelledby="contact-heading">
        <div className="container-page pb-14 pt-14 lg:pb-16 lg:pt-20">
          <div className="max-w-3xl">
            <p
              {...bnAttr}
              className="enter waymark mb-4"
              style={{ "--enter": 0 } as React.CSSProperties}
            >
              {t.waymark}
            </p>
            <h1
              id="contact-heading"
              className="enter-display heading-1"
              style={{ "--enter": 1 } as React.CSSProperties}
            >
              {t.heading}
            </h1>
            <p
              className="enter mt-6 max-w-[58ch] text-[length:var(--text-lead)] leading-relaxed text-muted-foreground"
              style={{ "--enter": 2 } as React.CSSProperties}
            >
              {t.leadBefore}{" "}
              <a
                href={waLink(d.prefill.cta)}
                target="_blank"
                rel="noopener noreferrer"
                className="font-display font-medium text-primary underline-offset-4 hover:underline"
              >
                {t.leadLink}
              </a>{" "}
              {t.leadOr}{" "}
              <a
                href={`tel:${PHONE_TEL}`}
                dir="ltr"
                className="font-display font-medium text-primary underline-offset-4 hover:underline"
              >
                {d.common.phone}
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      <section className="bg-background pb-20 lg:pb-28">
        <div className="container-page">
          <div className="grid max-w-6xl gap-12 lg:grid-cols-[1.5fr_1fr] lg:gap-16">
            <div className="enter" style={{ "--enter": 3 } as React.CSSProperties}>
              <BookingForm
                t={d.form}
                termsHref={`/${locale}/terms`}
                services={SERVICE_IDS.map((id) => ({ id, name: d.services[id].name }))}
              />
            </div>

            <aside className="enter space-y-8" style={{ "--enter": 4 } as React.CSSProperties}>
              <div className="grain on-deep relative overflow-hidden rounded-xl bg-brand-deep p-8 text-white">
                <div className="relative z-10">
                  <h2 className="font-display text-[1.35rem] font-bold">{t.afterHeading}</h2>
                  <ol className="mt-6 space-y-5">
                    {t.afterSteps.map((step, index) => (
                      <li key={step.title} className="flex gap-4">
                        <span
                          className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent font-display text-sm font-bold text-accent-foreground"
                          aria-hidden="true"
                        >
                          {localeNumber(index + 1, locale)}
                        </span>
                        <div>
                          <h3 className="font-display text-[1.02rem] font-semibold leading-snug">
                            {step.title}
                          </h3>
                          <p className="mt-1 text-sm leading-relaxed text-white/65">{step.body}</p>
                        </div>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>

              <div className="rounded-xl border border-border p-8">
                <h2 className="font-display text-[1.2rem] font-bold text-foreground">
                  {t.directHeading}
                </h2>
                <ul className="mt-5 space-y-4 font-display">
                  <li>
                    <a
                      href={waLink(d.prefill.cta)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-foreground transition-colors hover:text-primary"
                    >
                      <WhatsAppIcon className="h-5 w-5 text-[#25D366]" />
                      {t.directWhatsApp}
                    </a>
                  </li>
                  <li>
                    <a
                      href={`tel:${PHONE_TEL}`}
                      className="flex items-center gap-3 text-foreground transition-colors hover:text-primary"
                    >
                      <Phone className="h-5 w-5 text-primary" aria-hidden="true" />
                      <span dir="ltr">{d.common.phone}</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href={`mailto:${EMAIL}`}
                      className="flex items-center gap-3 text-foreground transition-colors hover:text-primary"
                    >
                      <Mail className="h-5 w-5 text-primary" aria-hidden="true" />
                      <span className="break-all">{EMAIL}</span>
                    </a>
                  </li>
                </ul>
                <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{t.hours}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{t.address}</p>
              </div>

              <div className="rounded-xl bg-muted p-8">
                <h2 className="font-display text-[1.2rem] font-bold text-foreground">
                  {t.areasHeading}
                </h2>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {d.areas.map((area) => (
                    <li
                      key={area}
                      className="rounded-full border border-border bg-card px-3.5 py-1.5 font-display text-sm text-foreground"
                    >
                      {area}
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-sm text-muted-foreground">{t.areasNote}</p>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  )
}
