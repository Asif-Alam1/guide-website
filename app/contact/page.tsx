import type React from "react"
import type { Metadata } from "next"
import { Phone } from "lucide-react"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BookingForm } from "@/components/booking-form"
import { WhatsAppIcon } from "@/components/whatsapp-icon"
import { AREAS, PHONE_DISPLAY, PHONE_TEL, PREFILL, waLink } from "@/lib/site"

export const metadata: Metadata = {
  title: "Book a Companion",
  description:
    "Book a medical companion in Dhaka — the form composes a WhatsApp message with your details. Or message and call us directly. Replies within ~30 minutes, 9am–9pm Dhaka time.",
}

const AFTER_STEPS = [
  {
    title: "We reply on WhatsApp",
    body: "Usually within 30 minutes (9am–9pm Dhaka time; within ~2 hours overnight).",
  },
  {
    title: "We confirm the details & price",
    body: "Patient's condition, hospital, timing — then a clear quote. 50% advance confirms the booking.",
  },
  {
    title: "You meet your Guide before we do anything",
    body: "Photo and ID arrive on your WhatsApp before the visit. Live location runs throughout.",
  },
]

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <Header />

      <main id="main">
        <section className="bg-background" aria-labelledby="contact-heading">
          <div className="container mx-auto px-4 lg:px-8 pt-16 pb-16 lg:pt-24 lg:pb-20">
            <div className="max-w-3xl">
              <p lang="bn" className="waymark mb-4 enter" style={{ "--enter": 0 } as React.CSSProperties}>
                যোগাযোগ
              </p>
              <h1
                id="contact-heading"
                className="enter-display text-[clamp(2.25rem,1.3rem+3.8vw,4rem)] font-bold leading-[1.05] tracking-[-0.02em] text-foreground"
                style={{ "--enter": 1 } as React.CSSProperties}
              >
                Book a companion
              </h1>
              <p
                className="enter mt-6 max-w-[58ch] text-[length:var(--text-lead)] leading-relaxed text-muted-foreground"
                style={{ "--enter": 2 } as React.CSSProperties}
              >
                The form below composes a WhatsApp message with your booking details — nothing is
                stored on this website. Prefer to talk first?{" "}
                <a
                  href={waLink(PREFILL.cta)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-display font-medium text-primary hover:underline underline-offset-4"
                >
                  Message us directly
                </a>{" "}
                or call{" "}
                <a
                  href={`tel:${PHONE_TEL}`}
                  className="font-display font-medium text-primary hover:underline underline-offset-4"
                >
                  {PHONE_DISPLAY}
                </a>
                .
              </p>
            </div>
          </div>
        </section>

        <section className="pb-20 lg:pb-28 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr] lg:gap-16 max-w-6xl">
              <div className="enter" style={{ "--enter": 3 } as React.CSSProperties}>
                <BookingForm />
              </div>

              <aside className="enter space-y-8" style={{ "--enter": 4 } as React.CSSProperties}>
                <div className="grain on-deep relative overflow-hidden rounded-xl bg-brand-deep p-8 text-white">
                  <div className="relative z-10">
                    <h2 className="font-display text-[1.35rem] font-bold">After you press send</h2>
                    <ol className="mt-6 space-y-5">
                      {AFTER_STEPS.map((step, index) => (
                        <li key={step.title} className="flex gap-4">
                          <span
                            className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent font-display text-sm font-bold text-accent-foreground"
                            aria-hidden="true"
                          >
                            {index + 1}
                          </span>
                          <div>
                            <h3 className="font-display text-[1.02rem] font-semibold leading-snug">
                              {step.title}
                            </h3>
                            <p className="mt-1 text-sm leading-relaxed text-white/65">{step.body}</p>
                          </div>
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>

                <div className="rounded-xl border border-border p-8">
                  <h2 className="font-display text-[1.2rem] font-bold text-foreground">
                    Direct lines
                  </h2>
                  <ul className="mt-5 space-y-4 font-display">
                    <li>
                      <a
                        href={waLink(PREFILL.cta)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 text-foreground hover:text-primary transition-colors"
                      >
                        <WhatsAppIcon className="w-5 h-5 text-[#25D366]" />
                        WhatsApp — fastest
                      </a>
                    </li>
                    <li>
                      <a
                        href={`tel:${PHONE_TEL}`}
                        className="flex items-center gap-3 text-foreground hover:text-primary transition-colors"
                      >
                        <Phone className="w-5 h-5 text-primary" aria-hidden="true" />
                        {PHONE_DISPLAY}
                      </a>
                    </li>
                  </ul>
                  <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                    Available 24/7 for booked services. New inquiries answered 9am–9pm Dhaka time.
                  </p>
                </div>

                <div className="rounded-xl bg-muted p-8">
                  <h2 className="font-display text-[1.2rem] font-bold text-foreground">
                    Service areas
                  </h2>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {AREAS.map((area) => (
                      <li
                        key={area}
                        className="rounded-full border border-border bg-card px-3.5 py-1.5 font-display text-sm text-foreground"
                      >
                        {area}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-4 text-sm text-muted-foreground">
                    Not on the list? Ask — we&apos;re expanding across Dhaka.
                  </p>
                </div>
              </aside>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
