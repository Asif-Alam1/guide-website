import type { Metadata } from "next"

import { getDict, HTML_LANG, LOCALES, OG_LOCALE, otherLocale, type Locale } from "@/lib/i18n"
import { SITE_URL } from "@/lib/site"

export type PagePath = "" | "/about" | "/contact" | "/terms"

/* One canonical + one hreflang pair per page, plus a photo social card.
   x-default points at Bangla, which is where "/" sends people. */
export function buildMetadata(
  lang: Locale,
  path: PagePath,
  over?: { title?: string; description?: string },
): Metadata {
  const d = getDict(lang)
  const languages: Record<string, string> = { "x-default": `/bn${path}` }
  for (const l of LOCALES) languages[HTML_LANG[l]] = `/${l}${path}`

  const title = over?.title ?? d.meta.title
  const description = over?.description ?? d.meta.description

  return {
    title: over?.title ?? { default: d.meta.title, template: d.meta.titleTemplate },
    description,
    alternates: { canonical: `/${lang}${path}`, languages },
    openGraph: {
      title: over?.title ? `${title} | Guide` : d.meta.ogTitle,
      description: over?.description ?? d.meta.ogDescription,
      url: `/${lang}${path}`,
      siteName: "Guide",
      type: "website",
      locale: OG_LOCALE[lang],
      alternateLocale: OG_LOCALE[otherLocale(lang)],
    },
    twitter: {
      card: "summary_large_image",
      title: over?.title ? `${title} | Guide` : d.meta.ogTitle,
      description: over?.description ?? d.meta.ogDescription,
    },
  }
}

export const metadataBase = new URL(SITE_URL)
