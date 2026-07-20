import type React from "react"
import type { Metadata } from "next"

import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

import { WhatsAppFloat } from "@/components/whatsapp-float"
import { ADDRESS, EMAIL, PHONE_TEL, SITE_URL, WHATSAPP_NUMBER, AREAS, SERVICES } from "@/lib/site"

import { Anek_Latin, Anek_Bangla, Source_Serif_4 } from "next/font/google"

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

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-source-serif",
  axes: ["opsz"],
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Guide — Medical Companion Service in Dhaka",
    template: "%s | Guide",
  },
  description:
    "A background-checked, uniformed companion for your family's hospital visits in Dhaka — consultation notes, medicine purchase, report collection, and live WhatsApp updates to family anywhere in the world.",
  keywords: [
    "medical companion Dhaka",
    "hospital companion Bangladesh",
    "patient escort Dhaka",
    "elderly care Dhaka",
    "hospital attendant Dhaka",
    "airport pickup Dhaka",
    "Sadarghat escort",
    "companion service Bangladesh",
  ],
  openGraph: {
    title: "Guide — Medical Companion Service in Dhaka",
    description:
      "Someone trustworthy walks the whole route with your family — hospital visits, reports, medicines, terminals — with live WhatsApp updates to you, anywhere.",
    type: "website",
    locale: "en_US",
    siteName: "Guide",
  },
  twitter: {
    card: "summary_large_image",
    title: "Guide — Medical Companion Service in Dhaka",
    description:
      "Background-checked companions for hospital visits and safe journeys in Dhaka, with live WhatsApp updates to family anywhere.",
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Guide",
  slogan: "নিরাপদ যাত্রার নিশ্চয়তা",
  description:
    "Medical companion and escort service in Dhaka, Bangladesh. Hospital companions, attendants, report and medicine collection, and terminal escorts with live WhatsApp tracking.",
  url: SITE_URL,
  telephone: PHONE_TEL,
  email: EMAIL,
  areaServed: AREAS.map((name) => ({ "@type": "Place", name: `${name}, Dhaka` })),
  address: {
    "@type": "PostalAddress",
    streetAddress: "299, Free School Street, Banglamotor",
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
  makesOffer: SERVICES.map((s) => ({
    "@type": "Offer",
    itemOffered: { "@type": "Service", name: s.nameEn, description: s.description },
  })),
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${anekLatin.variable} ${anekBangla.variable} ${sourceSerif.variable} antialiased`}
      >
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        {children}
        <WhatsAppFloat />
        <Analytics />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  )
}
