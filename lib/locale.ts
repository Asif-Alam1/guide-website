/* Locale primitives with no dictionary imports, so the proxy and the client
   components that need them never pull the whole content of the site along. */

export const LOCALES = ["bn", "en"] as const
export type Locale = (typeof LOCALES)[number]

/* Bangla is the default: the people who need this service most read Bangla first. */
export const DEFAULT_LOCALE: Locale = "bn"
export const LOCALE_COOKIE = "guide_locale"

export function isLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value)
}

export function otherLocale(locale: Locale): Locale {
  return locale === "bn" ? "en" : "bn"
}

/* "/bn/about" -> "/en/about". Used by the language switch so it keeps you on the page. */
export function localizedPath(pathname: string, locale: Locale) {
  const rest = pathname.replace(/^\/(bn|en)(?=\/|$)/, "")
  return `/${locale}${rest}`
}

export const HTML_LANG: Record<Locale, string> = { bn: "bn-BD", en: "en" }
export const OG_LOCALE: Record<Locale, string> = { bn: "bn_BD", en: "en_US" }
