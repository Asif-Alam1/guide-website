import Link from "next/link"
import { Phone } from "lucide-react"

import { Logo } from "@/components/logo"
import { WhatsAppIcon } from "@/components/whatsapp-icon"
import { ADDRESS, AREAS, EMAIL, PHONE_DISPLAY, PHONE_TEL, PREFILL, waLink } from "@/lib/site"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="grain relative overflow-hidden bg-brand-deeper text-white">
      <div className="relative z-10 container mx-auto px-4 lg:px-8">
        {/* Bengali sign-off — the brand promise, given the largest type on the page */}
        <div className="py-14 lg:py-20 border-b border-white/10">
          <p
            lang="bn"
            className="font-bengali text-[clamp(1.75rem,1rem+3.5vw,3.5rem)] font-semibold leading-snug max-w-3xl"
          >
            নিরাপদ যাত্রার <span className="text-accent">নিশ্চয়তা</span>
          </p>
          <p className="mt-3 text-white/60 max-w-xl text-[1.05rem] leading-relaxed">
            The assurance of a safe journey — for every hospital visit, every homecoming, every
            family member you can&apos;t be there for in person.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={waLink(PREFILL.cta)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-accent"
            >
              <WhatsAppIcon className="w-4 h-4" />
              Message us on WhatsApp
            </a>
            <a href={`tel:${PHONE_TEL}`} className="btn btn-outline-dark">
              <Phone className="w-4 h-4" aria-hidden="true" />
              {PHONE_DISPLAY}
            </a>
          </div>
        </div>

        <div className="py-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div className="space-y-4">
            <Logo onDark />
            <p className="text-[0.95rem] text-white/55 leading-relaxed max-w-sm">
              A medical companion and escort service in Dhaka. Background-checked, uniformed
              Guides for hospital visits, report collection, and safe journeys — with live
              WhatsApp updates to family anywhere in the world.
            </p>
          </div>

          <nav aria-label="Footer">
            <h3 className="font-display text-sm font-semibold uppercase tracking-wide text-white/40 mb-4">
              Pages
            </h3>
            <ul className="space-y-3 font-display">
              {[
                { name: "Home", href: "/" },
                { name: "Services", href: "/#services" },
                { name: "About", href: "/about" },
                { name: "Contact", href: "/contact" },
                { name: "Terms & Conditions", href: "/terms" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wide text-white/40 mb-4">
              Contact
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={`tel:${PHONE_TEL}`}
                  className="font-display text-white/70 hover:text-white transition-colors"
                >
                  {PHONE_DISPLAY}
                </a>
              </li>
              <li>
                <a
                  href={waLink(PREFILL.float)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-display text-white/70 hover:text-white transition-colors"
                >
                  WhatsApp — replies within ~30 min, 9am–9pm
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${EMAIL}`}
                  className="font-display text-white/70 hover:text-white transition-colors break-all"
                >
                  {EMAIL}
                </a>
              </li>
              <li className="text-white/55 text-[0.95rem] leading-relaxed pt-1">{ADDRESS}</li>
              <li className="text-white/55 text-[0.95rem] leading-relaxed">
                Serving {AREAS.slice(0, 4).join(", ")} &amp; more across Dhaka
              </li>
            </ul>
          </div>
        </div>

        <div className="py-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-sm text-white/60">
          <p>© {currentYear} Guide. All rights reserved.</p>
          <p className="font-display">Available 24/7 · Dhaka, Bangladesh</p>
        </div>
      </div>
    </footer>
  )
}
