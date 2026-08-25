"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { Menu, Phone, X } from "lucide-react"

import { LangSwitch } from "@/components/lang-switch"
import { Logo } from "@/components/logo"
import { WhatsAppIcon } from "@/components/whatsapp-icon"
import type { Locale } from "@/lib/locale"
import { PHONE_TEL } from "@/lib/site"
import { cn } from "@/lib/utils"

export type HeaderStrings = {
  services: string
  how: string
  about: string
  contact: string
  mainNav: string
  openMenu: string
  closeMenu: string
  whatsappShort: string
  whatsapp: string
  phone: string
  switchTo: string
  switchAria: string
}

export function Header({
  locale,
  t,
  waHref,
}: {
  locale: Locale
  t: HeaderStrings
  waHref: string
}) {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const home = `/${locale}`

  const navigation = [
    { name: t.services, href: `${home}#services` },
    { name: t.how, href: `${home}#how-it-works` },
    { name: t.about, href: `${home}/about` },
    { name: t.contact, href: `${home}/contact` },
  ]

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <nav className="container-page" aria-label={t.mainNav}>
        <div className="flex h-16 items-center justify-between gap-4 lg:h-20">
          <Logo locale={locale} />

          <div className="hidden items-center gap-x-7 lg:flex">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "whitespace-nowrap font-display text-[0.95rem] font-medium transition-colors",
                  pathname === item.href
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="hidden items-center gap-2.5 lg:flex">
            <LangSwitch locale={locale} label={t.switchTo} ariaLabel={t.switchAria} />
            <a
              href={`tel:${PHONE_TEL}`}
              className="hidden items-center gap-2 whitespace-nowrap font-display text-[0.95rem] font-medium text-muted-foreground transition-colors hover:text-foreground xl:inline-flex"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              <span dir="ltr">{t.phone}</span>
            </a>
            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-accent !min-h-[2.5rem] !px-5 text-[0.95rem]"
            >
              <WhatsAppIcon className="h-4 w-4" />
              {t.whatsappShort}
            </a>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <LangSwitch
              locale={locale}
              label={t.switchTo}
              ariaLabel={t.switchAria}
              className="!min-h-[2.75rem] !px-3 text-[0.85rem]"
            />
            <button
              type="button"
              className="-mr-2 rounded-lg p-2.5 text-foreground hover:bg-muted"
              onClick={() => setOpen(!open)}
              aria-expanded={open}
              aria-controls="mobile-nav"
            >
              <span className="sr-only">{open ? t.closeMenu : t.openMenu}</span>
              {open ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {open && (
          <div id="mobile-nav" className="border-t border-border py-5 lg:hidden">
            <div className="flex flex-col gap-1">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-1 py-2.5 font-display text-lg font-medium text-foreground"
                  onClick={() => setOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="mt-2 flex flex-col gap-3 border-t border-border pt-5">
                <a
                  href={waHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-accent w-full"
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  {t.whatsapp}
                </a>
                <a href={`tel:${PHONE_TEL}`} className="btn btn-outline w-full">
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  <span dir="ltr">{t.phone}</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
