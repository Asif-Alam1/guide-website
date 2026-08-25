"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { LOCALE_COOKIE, localizedPath, otherLocale, type Locale } from "@/lib/locale"
import { cn } from "@/lib/utils"

/* Keeps you on the same page in the other language, and remembers the choice
   so "/" and old links land in it next time. Works without JS — the cookie is
   the only part that needs it. */
export function LangSwitch({
  locale,
  label,
  ariaLabel,
  className,
}: {
  locale: Locale
  label: string
  ariaLabel: string
  className?: string
}) {
  const pathname = usePathname()
  const target = otherLocale(locale)

  return (
    <Link
      href={localizedPath(pathname ?? `/${locale}`, target)}
      hrefLang={target}
      lang={target}
      aria-label={ariaLabel}
      onClick={() => {
        document.cookie = `${LOCALE_COOKIE}=${target}; path=/; max-age=31536000; samesite=lax`
      }}
      className={cn(
        "inline-flex min-h-[2.5rem] shrink-0 items-center gap-1.5 whitespace-nowrap rounded-full border border-border px-3.5 font-display text-[0.9rem] font-semibold text-foreground transition-colors hover:border-primary hover:text-primary",
        className,
      )}
    >
      <span aria-hidden="true" className="text-[0.8rem] text-muted-foreground">
        অ / A
      </span>
      {label}
    </Link>
  )
}
