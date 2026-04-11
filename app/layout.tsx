import type React from "react"
import type { Metadata } from "next"

import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

import { WhatsAppFloat } from "@/components/whatsapp-float"

import { DM_Sans, Hind_Siliguri } from 'next/font/google'

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ["400", "500", "600", "700"],
  variable: '--font-sans',
  display: 'swap',
})

const hindSiliguri = Hind_Siliguri({
  subsets: ['latin', 'bengali'],
  weight: ["400", "500", "600", "700"],
  variable: '--font-bengali',
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Guide - Safe Travel Companion Service in Dhaka",
  description:
    "Professional companion services in Dhaka, Bangladesh. Background-checked, uniformed guides for airport pickups, medical assistance, intercity travel, and terminal escorts. Live WhatsApp tracking.",
  keywords: [
    "companion service Dhaka",
    "airport pickup Dhaka",
    "medical assistance Bangladesh",
    "travel companion",
    "safe travel Dhaka",
    "elderly care transport",
    "Sadarghat escort",
  ],
  openGraph: {
    title: "Guide - Safe Travel Companion Service in Dhaka",
    description:
      "Background-checked, uniformed guides for safe travel across Dhaka. Airport pickups, medical assistance, terminal escorts with live WhatsApp tracking.",
    type: "website",
    locale: "en_US",
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} ${hindSiliguri.variable} font-sans antialiased`}>
        {children}
        <WhatsAppFloat />
        <Analytics />
      </body>
    </html>
  )
}
