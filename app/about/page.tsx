import type React from "react"
import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppIcon } from "@/components/whatsapp-icon"
import { AREAS, PREFILL, waLink } from "@/lib/site"

export const metadata: Metadata = {
  title: "About",
  description:
    "Why Guide exists: a medical companion service built for families who can't always be there — in Dhaka or abroad. How we vet, train, and hold ourselves accountable.",
}

const VALUES = [
  {
    bn: "নিরাপত্তা",
    en: "Safety before schedule",
    body: "A visit that runs late but ends safely is a success. A rushed one that cuts corners is not. Every protocol — verification, uniforms, live tracking — exists so that the safest option is also the default one.",
  },
  {
    bn: "মমতা",
    en: "Care like family",
    body: "The people we accompany are somebody's mother, father, grandmother. Our Guides are trained to slow down, hold a hand at the stairs, and wait without checking the clock.",
  },
  {
    bn: "স্বচ্ছতা",
    en: "Nothing to hide",
    body: "Our terms are published in full, our prices are quoted before you commit, and the doctor's words reach you exactly as they were said — in writing.",
  },
  {
    bn: "পেশাদারিত্ব",
    en: "Professional, every visit",
    body: "Uniform, ID badge, punctuality, and a written record. The same standard whether it's a routine checkup in Dhanmondi or a 3am emergency.",
  },
]

const NOT_LIST = [
  {
    title: "We are not doctors",
    body: "Guides take notes, ask the questions you send, and collect prescriptions — but they never give medical advice or administer medication. Medical decisions stay with the doctor and your family.",
  },
  {
    title: "We are not a transport company",
    body: "Your Guide arranges the Uber, CNG, or ambulance and rides along — but the transport itself, and its cost, stays in your name and under your choice.",
  },
  {
    title: "We are not a marketplace",
    body: "No gig workers, no strangers from an app pool. Every Guide is vetted, trained, and accountable to us — and we are accountable to you.",
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Header />

      <main id="main">
        {/* Story-led opening */}
        <section className="bg-background" aria-labelledby="about-heading">
          <div className="container mx-auto px-4 lg:px-8 pt-16 pb-20 lg:pt-24 lg:pb-28">
            <div className="max-w-3xl">
              <p lang="bn" className="waymark mb-4 enter" style={{ "--enter": 0 } as React.CSSProperties}>
                আমাদের কথা
              </p>
              <h1
                id="about-heading"
                className="enter-display text-[clamp(2.25rem,1.3rem+3.8vw,4rem)] font-bold leading-[1.05] tracking-[-0.02em] text-foreground"
                style={{ "--enter": 1 } as React.CSSProperties}
              >
                Built for the family member who can&apos;t be there
              </h1>

              <div
                className="enter mt-10 space-y-6 text-[1.1rem] leading-[1.8] text-foreground/85 max-w-[62ch]"
                style={{ "--enter": 3 } as React.CSSProperties}
              >
                <p>
                  Every family in Dhaka knows the phone call. Ma has a doctor&apos;s appointment on
                  Thursday. Someone has to take the day off work, brave the traffic, sit in the
                  waiting room, remember what the doctor said, find the pharmacy, queue for the
                  reports. And if the family is abroad — as millions of Bangladeshi families now
                  are — the call ends with the hardest sentence:{" "}
                  <em>&ldquo;we&apos;ll manage somehow.&rdquo;</em>
                </p>
                <p>
                  Guide exists so that nobody has to manage <em>somehow</em>. We send a
                  background-checked, uniformed companion who walks the entire route with your
                  family member — door to door — and writes everything down, so that being far away
                  no longer means being in the dark.
                </p>
                <p>
                  We are a new, small team in Dhaka, and we&apos;d rather be honest about that than
                  invent a track record: no fake testimonials, no inflated numbers. What we offer
                  instead is published terms, verified people, and a live window into every visit —
                  so trust can be earned one journey at a time.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values — bilingual ledger */}
        <section className="py-20 lg:py-28 bg-muted" aria-labelledby="values-heading">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-2xl mb-12">
              <p lang="bn" className="waymark mb-3">
                মূল্যবোধ
              </p>
              <h2 id="values-heading" className="text-[length:var(--text-h2)] font-bold leading-[1.08] tracking-tight text-foreground">
                What we hold ourselves to
              </h2>
            </div>

            <dl className="max-w-3xl">
              {VALUES.map((value) => (
                <div
                  key={value.en}
                  className="reveal grid gap-2 border-t border-border py-8 sm:grid-cols-[200px_1fr] sm:gap-10"
                >
                  <dt>
                    <span lang="bn" className="waymark block !text-[1.3rem]">
                      {value.bn}
                    </span>
                    <span className="font-display text-[1.1rem] font-semibold text-foreground">
                      {value.en}
                    </span>
                  </dt>
                  <dd className="leading-relaxed text-muted-foreground max-w-[56ch]">{value.body}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* Honesty: what we are not */}
        <section
          className="grain on-deep relative bg-brand-deep py-20 text-white lg:py-28"
          aria-labelledby="not-heading"
        >
          <div className="relative z-10 container mx-auto px-4 lg:px-8">
            <div className="max-w-2xl mb-12">
              <h2 id="not-heading" className="text-[length:var(--text-h2)] font-bold leading-[1.08] tracking-tight">
                Just as important: what we are <span className="text-accent">not</span>
              </h2>
              <p className="mt-5 text-[1.05rem] leading-relaxed text-white/70">
                Clear boundaries are part of a safe service. Knowing where our role ends tells you
                exactly what you&apos;re booking.
              </p>
            </div>

            <div className="grid gap-10 lg:grid-cols-3 lg:gap-12">
              {NOT_LIST.map((item) => (
                <div key={item.title} className="reveal border-t border-white/15 pt-6">
                  <h3 className="font-display text-[1.2rem] font-semibold">{item.title}</h3>
                  <p className="mt-3 leading-relaxed text-white/65">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Coverage */}
        <section className="py-20 lg:py-28 bg-background" aria-labelledby="coverage-heading">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-2xl">
              <p lang="bn" className="waymark mb-3">
                এলাকা
              </p>
              <h2 id="coverage-heading" className="text-[length:var(--text-h2)] font-bold leading-[1.08] tracking-tight text-foreground">
                Where we serve
              </h2>
              <p className="mt-5 leading-relaxed text-muted-foreground">
                We currently serve families across Dhaka and are expanding area by area — carefully,
                so the standard never slips.
              </p>

              <ul className="mt-8 flex flex-wrap gap-2.5">
                {AREAS.map((area) => (
                  <li
                    key={area}
                    className="rounded-full border border-border bg-card px-4 py-2 font-display text-[0.95rem] text-foreground"
                  >
                    {area}
                  </li>
                ))}
                <li className="rounded-full border border-dashed border-primary/40 px-4 py-2 font-display text-[0.95rem] text-primary">
                  + expanding
                </li>
              </ul>

              <div className="mt-10 flex flex-wrap items-center gap-4">
                <a
                  href={waLink(PREFILL.hero)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-accent"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                  Talk to us on WhatsApp
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 font-display font-medium text-primary hover:underline underline-offset-4"
                >
                  Or use the booking form
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
