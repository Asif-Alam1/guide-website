/* Locale-independent facts about the business. Everything a human reads
   lives in lib/content/{bn,en}.ts instead. */

export const PHONE_DISPLAY = "+880 1815 558785"
export const PHONE_TEL = "+8801815558785"
export const WHATSAPP_NUMBER = "8801815558785"
export const EMAIL = "info.bdguide@gmail.com"
export const ADDRESS_EN = "299, Free School Street, Banglamotor, Dhaka"
export const ADDRESS_BN = "২৯৯, ফ্রি স্কুল স্ট্রিট, বাংলামোটর, ঢাকা"

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.guide-bd.com"

export function waLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}

/* Order is the order they appear on the page; the first one is the featured service. */
export const SERVICE_IDS = [
  "hospital-companion",
  "hospital-attendant",
  "therapy-dialysis",
  "report-medicine",
  "terminal-escort",
  "intercity-companion",
] as const

export type ServiceId = (typeof SERVICE_IDS)[number]
