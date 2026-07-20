"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { Menu, X, Phone } from "lucide-react"

import { Logo } from "@/components/logo"
import { WhatsAppIcon } from "@/components/whatsapp-icon"
import { PHONE_DISPLAY, PHONE_TEL, PREFILL, waLink } from "@/lib/site"
import { cn } from "@/lib/utils"

const navigation = [
  { name: "Services", href: "/#services" },
  { name: "How it works", href: "/#how-it-works" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
]

export function Header() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border">
      <nav className="container mx-auto px-4 lg:px-8" aria-label="Main">
        <div className="flex items-center justify-between h-16 lg:h-[4.5rem]">
          <Logo />

          <div className="hidden md:flex items-center gap-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "font-display text-[0.95rem] font-medium transition-colors",
                  pathname === item.href
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <a
              href={`tel:${PHONE_TEL}`}
              className="font-display text-[0.95rem] font-medium text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-2"
            >
              <Phone className="w-4 h-4" aria-hidden="true" />
              {PHONE_DISPLAY}
            </a>
            <a
              href={waLink(PREFILL.hero)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-accent !min-h-[2.5rem] !px-5 text-[0.95rem]"
            >
              <WhatsAppIcon className="w-4 h-4" />
              WhatsApp
            </a>
          </div>

          <button
            type="button"
            className="md:hidden p-2.5 -mr-2 rounded-lg text-foreground hover:bg-muted"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-controls="mobile-nav"
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            {open ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>

        {open && (
          <div id="mobile-nav" className="md:hidden border-t border-border py-5">
            <div className="flex flex-col gap-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="font-display text-lg font-medium text-foreground py-2.5 px-1"
                  onClick={() => setOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex flex-col gap-3 pt-5 mt-2 border-t border-border">
                <a
                  href={waLink(PREFILL.hero)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-accent w-full"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                  Message on WhatsApp
                </a>
                <a href={`tel:${PHONE_TEL}`} className="btn btn-outline w-full">
                  <Phone className="w-4 h-4" aria-hidden="true" />
                  {PHONE_DISPLAY}
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
