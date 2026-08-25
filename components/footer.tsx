import Link from "next/link"
import { Phone } from "lucide-react"

import { Logo } from "@/components/logo"
import { WhatsAppIcon } from "@/components/whatsapp-icon"
import { localeNumber } from "@/lib/format"
import { getDict, type Locale } from "@/lib/i18n"
import { EMAIL, PHONE_TEL, waLink } from "@/lib/site"

export function Footer({ locale }: { locale: Locale }) {
  const d = getDict(locale)
  const home = `/${locale}`
  const year = localeNumber(new Date().getFullYear(), locale)

  const links = [
    { name: d.nav.home, href: home },
    { name: d.nav.services, href: `${home}#services` },
    { name: d.nav.about, href: `${home}/about` },
    { name: d.nav.contact, href: `${home}/contact` },
    { name: d.nav.terms, href: `${home}/terms` },
  ]

  return (
    <footer className="grain relative overflow-hidden bg-brand-deeper text-white">
      <div className="container-page relative z-10">
        {/* The brand promise, always in Bengali, given the largest type on the page */}
        <div className="border-b border-white/10 py-14 lg:py-20">
          <p
            lang="bn"
            className="max-w-3xl font-bengali text-[clamp(1.75rem,1rem+3.5vw,3.5rem)] font-semibold leading-snug"
          >
            {d.footer.signOffLead} <span className="text-accent">{d.footer.signOffHighlight}</span>
          </p>
          <p className="mt-3 max-w-xl text-[1.05rem] leading-relaxed text-white/60">
            {d.footer.signOffBody}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={waLink(d.prefill.cta)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-accent"
            >
              <WhatsAppIcon className="h-4 w-4" />
              {d.common.whatsapp}
            </a>
            <a href={`tel:${PHONE_TEL}`} className="btn btn-outline-dark">
              <Phone className="h-4 w-4" aria-hidden="true" />
              <span dir="ltr">{d.common.phone}</span>
            </a>
          </div>
        </div>

        <div className="grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div className="space-y-4">
            <Logo locale={locale} onDark />
            <p className="max-w-sm text-[0.95rem] leading-relaxed text-white/55">
              {d.footer.about}
            </p>
          </div>

          <nav aria-label={d.footer.pages}>
            <h2 className="mb-4 font-display text-sm font-semibold uppercase tracking-wide text-white/55">
              {d.footer.pages}
            </h2>
            <ul className="space-y-3 font-display">
              {links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/70 transition-colors hover:text-white">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="mb-4 font-display text-sm font-semibold uppercase tracking-wide text-white/55">
              {d.footer.contact}
            </h2>
            <ul className="space-y-3">
              <li>
                <a
                  href={`tel:${PHONE_TEL}`}
                  dir="ltr"
                  className="font-display text-white/70 transition-colors hover:text-white"
                >
                  {d.common.phone}
                </a>
              </li>
              <li>
                <a
                  href={waLink(d.prefill.float)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-display text-white/70 transition-colors hover:text-white"
                >
                  {d.footer.whatsappLine}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${EMAIL}`}
                  className="break-all font-display text-white/70 transition-colors hover:text-white"
                >
                  {EMAIL}
                </a>
              </li>
              <li className="pt-1 text-[0.95rem] leading-relaxed text-white/55">
                {d.footer.address}
              </li>
              <li className="text-[0.95rem] leading-relaxed text-white/55">
                {d.footer.servingPrefix} {d.areas.slice(0, 4).join(", ")} {d.footer.servingSuffix}
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-white/10 py-6 text-sm text-white/60">
          <p>© {year} Guide. {d.footer.rights}</p>
          <p className="font-display">{d.common.available}</p>
        </div>
      </div>
    </footer>
  )
}
