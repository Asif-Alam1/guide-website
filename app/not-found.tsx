import type React from "react"
import Link from "next/link"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppIcon } from "@/components/whatsapp-icon"
import { PREFILL, waLink } from "@/lib/site"

export default function NotFound() {
  return (
    <div className="min-h-screen">
      <Header />

      <main id="main">
        <section className="relative overflow-hidden bg-background">
          <div className="container mx-auto px-4 lg:px-8 py-24 lg:py-36">
            <div className="max-w-2xl">
              <svg
                aria-hidden="true"
                viewBox="0 0 320 96"
                fill="none"
                className="enter mb-8 w-56"
                style={{ "--enter": 0 } as React.CSSProperties}
              >
                <path
                  d="M8 80 C60 80, 80 40, 130 40 S 210 70, 250 56"
                  stroke="oklch(0.87 0.035 165)"
                  strokeWidth="2.5"
                  strokeDasharray="6 10"
                />
                <circle cx="8" cy="80" r="5" fill="oklch(0.55 0.08 165)" />
                <circle cx="250" cy="56" r="8" fill="none" stroke="oklch(0.78 0.14 78)" strokeWidth="2.5" strokeDasharray="3 4" />
                <text
                  x="272"
                  y="64"
                  fill="oklch(0.52 0.115 70)"
                  fontSize="26"
                  fontFamily="var(--font-anek-latin), sans-serif"
                  fontWeight="700"
                >
                  ?
                </text>
              </svg>

              <h1
                className="enter-display text-[clamp(2.25rem,1.3rem+3.8vw,4rem)] font-bold leading-[1.05] tracking-[-0.02em] text-foreground"
                style={{ "--enter": 1 } as React.CSSProperties}
              >
                This page wandered off without a Guide
              </h1>
              <p
                className="enter mt-6 max-w-[52ch] text-[length:var(--text-lead)] leading-relaxed text-muted-foreground"
                style={{ "--enter": 2 } as React.CSSProperties}
              >
                The address you followed doesn&apos;t exist — or it moved without telling anyone.
                Let&apos;s get you home safely.
              </p>
              <div
                className="enter mt-10 flex flex-wrap gap-4"
                style={{ "--enter": 3 } as React.CSSProperties}
              >
                <Link href="/" className="btn btn-primary">
                  Back to home
                </Link>
                <a
                  href={waLink(PREFILL.float)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline"
                >
                  <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
                  Ask us anything
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
