import type React from "react"
import type { Metadata, Viewport } from "next"
import { notFound } from "next/navigation"
import { Anek_Latin, Anek_Bangla, Source_Serif_4 } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"

import "../globals.css"

import { ContactBar } from "@/components/contact-bar"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { JsonLd } from "@/components/json-ld"
import { getDict, HTML_LANG, LOCALES, isLocale, type Locale } from "@/lib/i18n"
import { buildMetadata, metadataBase } from "@/lib/seo"
import {
  ADDRESS_EN,
  EMAIL,
  PHONE_TEL,
  SERVICE_IDS,
  SITE_URL,
  WHATSAPP_NUMBER,
  waLink,
} from "@/lib/site"

const anekLatin = Anek_Latin({
  subsets: ["latin"],
  variable: "--font-anek-latin",
  display: "swap",
})

const anekBangla = Anek_Bangla({
  subsets: ["bengali"],
  variable: "--font-anek-bangla",
  display: "swap",
})

/* Body serif for English prose only — not preloaded, so Bangla pages
   (the majority) never pay for a font they don't render. */
const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-source-serif",
  axes: ["opsz"],
  display: "swap",
  preload: false,
})

export const viewport: Viewport = {
  themeColor: "#ffffff",
  colorScheme: "light",
}

export function generateStaticParams() {
  return LOCALES.map((lang) => ({ lang }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>
}): Promise<Metadata> {
  const { lang } = await params
  if (!isLocale(lang)) return {}
  const d = getDict(lang)
  return {
    metadataBase,
    keywords: d.meta.keywords,
    ...buildMetadata(lang, ""),
  }
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode
  params: Promise<{ lang: string }>
}>) {
  const { lang } = await params
  if (!isLocale(lang)) notFound()
  const locale = lang as Locale
  const d = getDict(locale)

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE_URL}/#business`,
    name: "Guide",
    alternateName: "গাইড",
    slogan: "নিরাপদ যাত্রার নিশ্চয়তা",
    description: d.meta.description,
    inLanguage: HTML_LANG[locale],
    url: `${SITE_URL}/${locale}`,
    telephone: PHONE_TEL,
    email: EMAIL,
    image: `${SITE_URL}/photos/og-base.jpg`,
    areaServed: d.areas.map((name) => ({ "@type": "Place", name: `${name}, Dhaka` })),
    address: {
      "@type": "PostalAddress",
      streetAddress: ADDRESS_EN.replace(", Dhaka", ""),
      addressLocality: "Dhaka",
      addressCountry: "BD",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "00:00",
      closes: "23:59",
    },
    sameAs: [`https://wa.me/${WHATSAPP_NUMBER}`],
    makesOffer: SERVICE_IDS.map((id) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: d.services[id].name,
        description: d.services[id].description,
      },
    })),
  }

  return (
    <html lang={HTML_LANG[locale]}>
      <body
        className={`${anekLatin.variable} ${anekBangla.variable} ${sourceSerif.variable} antialiased`}
      >
        <a href="#main" className="skip-link">
          {d.nav.skip}
        </a>
        <Header
          locale={locale}
          waHref={waLink(d.prefill.hero)}
          t={{
            services: d.nav.services,
            how: d.nav.how,
            about: d.nav.about,
            contact: d.nav.contact,
            mainNav: d.nav.mainNav,
            openMenu: d.nav.openMenu,
            closeMenu: d.nav.closeMenu,
            whatsappShort: d.common.whatsappShort,
            whatsapp: d.common.whatsapp,
            phone: d.common.phone,
            switchTo: d.meta.switchTo,
            switchAria: d.meta.switchAria,
          }}
        />
        {children}
        <Footer locale={locale} />
        <ContactBar locale={locale} />
        <Analytics />
        <JsonLd data={jsonLd} />
      </body>
    </html>
  )
}
