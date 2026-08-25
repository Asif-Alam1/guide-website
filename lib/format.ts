import type { Locale } from "@/lib/locale"

const BENGALI_DIGITS = "০১২৩৪৫৬৭৮৯"

/* Step numbers, clause numbers and the year read as Bengali numerals in Bangla. */
export function localeNumber(value: number | string, locale: Locale) {
  const text = String(value)
  if (locale !== "bn") return text
  return text.replace(/\d/g, (d) => BENGALI_DIGITS[Number(d)])
}
