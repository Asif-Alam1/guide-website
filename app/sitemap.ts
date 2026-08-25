import type { MetadataRoute } from "next"

import { HTML_LANG, LOCALES } from "@/lib/locale"
import { SITE_URL } from "@/lib/site"
import type { PagePath } from "@/lib/seo"

const PAGES: { path: PagePath; priority: number; changeFrequency: "monthly" | "yearly" }[] = [
  { path: "", priority: 1, changeFrequency: "monthly" },
  { path: "/contact", priority: 0.9, changeFrequency: "monthly" },
  { path: "/about", priority: 0.7, changeFrequency: "monthly" },
  { path: "/terms", priority: 0.4, changeFrequency: "yearly" },
]

export default function sitemap(): MetadataRoute.Sitemap {
  return PAGES.flatMap(({ path, priority, changeFrequency }) =>
    LOCALES.map((locale) => ({
      url: `${SITE_URL}/${locale}${path}`,
      priority,
      changeFrequency,
      alternates: {
        languages: Object.fromEntries(
          LOCALES.map((l) => [HTML_LANG[l], `${SITE_URL}/${l}${path}`]),
        ),
      },
    })),
  )
}
