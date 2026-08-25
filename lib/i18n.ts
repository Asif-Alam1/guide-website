import { bn } from "@/lib/content/bn"
import { en } from "@/lib/content/en"
import type { Locale } from "@/lib/locale"

export * from "@/lib/locale"

const dictionaries = { bn, en }

/* Server-only by convention: importing this module pulls in both dictionaries.
   Client components take the strings they need as props, or import
   "@/lib/locale" for the primitives. */
export function getDict(locale: Locale) {
  return dictionaries[locale]
}
