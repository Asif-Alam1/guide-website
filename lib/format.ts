import type { Locale } from "@/lib/locale"

const BENGALI_DIGITS = "০১২৩৪৫৬৭৮৯"

/* Step numbers, clause numbers and the year read as Bengali numerals in Bangla. */
export function localeNumber(value: number | string, locale: Locale) {
  const text = String(value)
  if (locale !== "bn") return text
  return text.replace(/\d/g, (d) => BENGALI_DIGITS[Number(d)])
}

/* The booking message is read by a person, not a parser: turn the date input's
   ISO value into the date they would write themselves. */
export function localeDate(value: string, locale: Locale) {
  const [y, m, d] = value.split("-").map(Number)
  if (!y || !m || !d) return value
  try {
    return new Intl.DateTimeFormat(locale === "bn" ? "bn-BD" : "en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(new Date(y, m - 1, d))
  } catch {
    return value
  }
}
