import type React from "react"
import Link from "next/link"
import { Phone, ArrowRight, Check } from "lucide-react"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroCanvas } from "@/components/hero-canvas"
import { WhatsAppIcon } from "@/components/whatsapp-icon"
import { AREAS, PHONE_DISPLAY, PHONE_TEL, PREFILL, SERVICES, waLink } from "@/lib/site"

const ROUTE_STEPS = [
  {
    title: "We arrive at their door",
    body: "A uniformed, ID-verified Guide — whose photo you received in advance — arrives at your family member's home, on time.",
  },
  {
    title: "They travel together",
    body: "Uber, CNG, or ambulance arranged to your preference. Live location is shared on WhatsApp from the first minute.",
  },
  {
    title: "Inside the consultation",
    body: "Your Guide sits through the appointment and writes down everything the doctor says — advice, dosage, follow-ups.",
  },
  {
    title: "Pharmacy & report desk",
    body: "Prescribed medicines purchased, tests done, reports collected — or picked up later and delivered home.",
  },
  {
    title: "Safely home again",
    body: "Escorted back through the door, settled in. The journey isn't over until they're home.",
  },
  {
    title: "You get the full record",
    body: "Doctor's notes, prescriptions, and reports arrive on your WhatsApp — whether you're in Dhanmondi or Toronto.",
  },
]

const KEY_TERMS = [
  {
    term: "50% advance",
    detail: "Half the service fee is paid upfront; the balance after the visit is complete.",
  },
  {
    term: "Book 3–4 hours ahead",
    detail: "Advance notice guarantees a confirmed Guide. Emergencies are taken on availability.",
  },
  {
    term: "Transport is on you",
    detail: "Your Guide arranges the Uber, CNG, or ambulance — the fare is paid by the client.",
  },
  {
    term: "Tell us the full condition",
    detail: "The patient's exact condition and any infectious illness must be disclosed at booking.",
  },
  {
    term: "Waiting beyond 2 hours",
    detail: "Long consultations beyond two hours may carry an additional hourly charge.",
  },
  {
    term: "Cancellation",
    detail: "Cancel 2+ hours ahead for a 10% charge; later than that, the advance is forfeited.",
  },
]

const FAQS = [
  {
    question: "What exactly does the Hospital Companion service include?",
    answer:
      "Your Guide escorts the patient from home to the hospital, sits through the doctor's consultation, writes down the medical advice, purchases prescribed medicines, collects test reports, and brings the patient safely home. Digital copies of everything go to family members — including those abroad.",
  },
  {
    question: "I live abroad. How does this work for my parents in Dhaka?",
    answer:
      "Most of our bookings come from family members overseas. You book and coordinate everything over WhatsApp in English or Bengali, receive your Guide's photo and ID before the visit, watch the live location during it, and get the doctor's notes and reports as soon as the visit ends.",
  },
  {
    question: "How do I know I can trust the person you send?",
    answer:
      "Every Guide is background-checked and identity-verified before joining, wears a uniform and ID badge on every visit, and their photo is sent to you before service begins. Live WhatsApp location sharing runs for the entire route.",
  },
  {
    question: "Can I request a female Guide?",
    answer:
      "Yes. Both male and female Guides are available — many families prefer a female Guide for mothers and grandmothers. Just mention your preference when you book.",
  },
  {
    question: "How far in advance should I book?",
    answer:
      "At least 3–4 hours ahead for a confirmed Guide. For emergencies, message us anyway — we'll do our best based on availability.",
  },
  {
    question: "What are the payment terms?",
    answer:
      "50% of the service fee in advance, the rest after completion. Hospital bills, medicine costs, and transport fares are paid directly by the client. We'll confirm payment options with you on WhatsApp when you book.",
  },
  {
    question: "Does the Guide give medical advice?",
    answer:
      "No — and that's deliberate. Guides handle logistics: escorting, note-taking, queueing, collecting. Medical decisions stay with the doctor and your family.",
  },
]

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
}

const featured = SERVICES[0]
const otherServices = SERVICES.slice(1)

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />

      <main id="main">
        {/* ---------- Hero: typography-led, light ground ---------- */}
        <section className="relative overflow-hidden bg-background" aria-label="Introduction">
          <HeroCanvas />
          {/* Journey line arcing across the hero */}
          <svg
            aria-hidden="true"
            viewBox="0 0 1440 720"
            fill="none"
            preserveAspectRatio="xMidYMax slice"
            className="pointer-events-none absolute inset-0 h-full w-full"
          >
            <path
              d="M-60 660 C 320 640, 420 430, 760 420 S 1240 250, 1500 130"
              pathLength="1"
              stroke="oklch(0.87 0.035 165)"
              strokeWidth="2.5"
              strokeDasharray="6 10"
              className="hero-fade"
            />
            <circle cx="760" cy="420" r="7" fill="oklch(0.87 0.035 165)" className="enter" style={{ "--enter": 8 } as React.CSSProperties} />
            <circle cx="1236" cy="253" r="10" fill="oklch(0.78 0.14 78)" className="enter" style={{ "--enter": 10 } as React.CSSProperties} />
          </svg>

          <div className="relative container mx-auto px-4 lg:px-8 pt-16 pb-24 lg:pt-28 lg:pb-36">
            <div className="max-w-4xl">
              <p
                lang="bn"
                className="enter font-bengali text-lg font-semibold text-primary mb-6"
                style={{ "--enter": 0 } as React.CSSProperties}
              >
                আপনার হয়ে, আপনার প্রিয়জনের পাশে
              </p>

              <h1
                className="enter-display text-[length:var(--text-hero)] font-bold leading-[1.02] tracking-[-0.025em] text-foreground"
                style={{ "--enter": 1 } as React.CSSProperties}
              >
                When you can&apos;t be there,
                <br />
                <span className="text-primary">a Guide is.</span>
              </h1>

              <p
                className="enter mt-8 max-w-[58ch] text-[length:var(--text-lead)] leading-relaxed text-muted-foreground"
                style={{ "--enter": 3 } as React.CSSProperties}
              >
                Guide sends a background-checked, uniformed companion with your family member in
                Dhaka — to the hospital and back, through consultations, pharmacies, and report
                desks — with live updates on WhatsApp to you, anywhere in the world.
              </p>

              <div
                className="enter mt-10 flex flex-wrap items-center gap-4"
                style={{ "--enter": 4 } as React.CSSProperties}
              >
                <div className="flex flex-col gap-1.5">
                  <a
                    href={waLink(PREFILL.hero)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-accent text-[1.05rem] !px-8 !min-h-[3.25rem]"
                  >
                    <WhatsAppIcon className="w-5 h-5" />
                    Message us on WhatsApp
                  </a>
                  <span className="font-display text-sm text-muted-foreground pl-1">
                    Replies within ~30 min, 9am–9pm Dhaka time
                  </span>
                </div>
                <a href={`tel:${PHONE_TEL}`} className="btn btn-outline !min-h-[3.25rem] mb-6">
                  <Phone className="w-4 h-4" aria-hidden="true" />
                  {PHONE_DISPLAY}
                </a>
              </div>

              <ul
                className="enter mt-12 flex flex-wrap items-center gap-x-7 gap-y-3 font-display text-[0.95rem] text-muted-foreground"
                style={{ "--enter": 5 } as React.CSSProperties}
              >
                {[
                  "Uniformed & ID-verified",
                  "Live location on WhatsApp",
                  "Reports sent to family abroad",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-primary" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ---------- The route: how one visit works ---------- */}
        <section
          id="how-it-works"
          className="py-20 lg:py-28 bg-muted"
          aria-labelledby="how-heading"
        >
          <div className="container mx-auto px-4 lg:px-8 grid gap-14 lg:grid-cols-[1fr_1.5fr] lg:gap-20">
            <div className="lg:sticky lg:top-28 lg:self-start max-w-xl">
              <p lang="bn" className="waymark mb-3">
                যাত্রা
              </p>
              <h2 id="how-heading" className="text-[length:var(--text-h2)] font-bold leading-[1.08] tracking-tight text-foreground">
                One hospital visit, door to door
              </h2>
              <p className="mt-5 text-[1.05rem] leading-relaxed text-muted-foreground">
                This is the route every Hospital Companion booking follows. No steps skipped, no
                surprises — and you can watch it happen live.
              </p>
              <div className="mt-8 hidden lg:flex flex-col items-start gap-3">
                <a
                  href={waLink(PREFILL.hospitalCompanion)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                  Book a hospital companion
                </a>
                <p className="font-display text-sm text-muted-foreground">
                  Book at least 3–4 hours ahead ·{" "}
                  <Link href="/terms" className="underline underline-offset-4 hover:text-foreground">
                    see all terms
                  </Link>
                </p>
              </div>
            </div>

            <div className="route-scope relative max-w-3xl">
              {/* The Guide dot travels the route as you scroll */}
              <div className="route-dot" aria-hidden="true" />
              {/* The journey line, drawn by scroll */}
              <svg
                aria-hidden="true"
                viewBox="0 0 2 100"
                preserveAspectRatio="none"
                fill="none"
                className="absolute left-[1.19rem] top-3 h-[calc(100%-2.5rem)] w-[2px]"
              >
                <path
                  d="M1 0 V100"
                  pathLength="1"
                  stroke="oklch(0.55 0.08 165)"
                  strokeWidth="2"
                  className="path-draw"
                />
              </svg>

              <ol className="space-y-12 lg:space-y-14">
                {ROUTE_STEPS.map((step, index) => (
                  <li key={step.title} className="reveal relative flex gap-6 lg:gap-8">
                    <span
                      className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent font-display text-[1.05rem] font-bold text-accent-foreground ring-4 ring-muted"
                      aria-hidden="true"
                    >
                      {index + 1}
                    </span>
                    <div className="pt-1">
                      <h3 className="font-display text-[length:var(--text-h3)] font-semibold leading-snug text-foreground">
                        {step.title}
                      </h3>
                      <p className="mt-2 max-w-[52ch] leading-relaxed text-muted-foreground">
                        {step.body}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>

              <div className="reveal mt-14 flex flex-wrap items-center gap-4 lg:hidden">
                <a
                  href={waLink(PREFILL.hospitalCompanion)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                  Book a hospital companion
                </a>
                <p className="font-display text-sm text-muted-foreground">
                  Book at least 3–4 hours ahead ·{" "}
                  <Link href="/terms" className="underline underline-offset-4 hover:text-foreground">
                    see all terms
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ---------- Services: featured block + editorial ledger ---------- */}
        <section id="services" className="py-20 lg:py-28 bg-background" aria-labelledby="services-heading">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-2xl mb-14">
              <p lang="bn" className="waymark mb-3">
                সেবা
              </p>
              <h2 id="services-heading" className="text-[length:var(--text-h2)] font-bold leading-[1.08] tracking-tight text-foreground">
                What we can take off your plate
              </h2>
            </div>

            {/* Featured: Hospital Companion */}
            <div className="reveal grain on-deep relative overflow-hidden rounded-xl bg-brand-deep text-white">
              <div className="relative z-10 grid gap-10 p-8 lg:grid-cols-[1.3fr_1fr] lg:p-14">
                <div>
                  <p lang="bn" className="waymark mb-2">
                    {featured.nameBn}
                  </p>
                  <h3 className="font-display text-[clamp(1.75rem,1.2rem+2.2vw,2.6rem)] font-bold leading-tight">
                    {featured.nameEn}
                  </h3>
                  <p className="mt-5 max-w-[56ch] text-[1.05rem] leading-relaxed text-white/70">
                    {featured.description}
                  </p>
                  <div className="mt-8 flex flex-wrap gap-4">
                    <a
                      href={waLink(featured.prefill)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-accent"
                    >
                      <WhatsAppIcon className="w-4 h-4" />
                      Book this service
                    </a>
                    <a href="#how-it-works" className="btn btn-outline-dark">
                      See how a visit works
                      <ArrowRight className="btn-arrow w-4 h-4" aria-hidden="true" />
                    </a>
                  </div>
                </div>
                <ul className="flex flex-col justify-center gap-4 lg:border-l lg:border-white/15 lg:pl-10">
                  {featured.includes.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <Check className="mt-1 w-4 h-4 shrink-0 text-accent" aria-hidden="true" />
                      <span className="font-display text-[1.02rem] text-white/85">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Ledger of remaining services */}
            <ul className="mt-4">
              {otherServices.map((service) => (
                <li
                  key={service.id}
                  className="reveal grid gap-4 border-b border-border py-8 lg:grid-cols-[minmax(220px,1fr)_2fr_auto] lg:gap-10 lg:py-10"
                >
                  <div>
                    <p lang="bn" className="waymark !text-[1rem] mb-1">
                      {service.nameBn}
                    </p>
                    <h3 className="font-display text-[1.35rem] font-semibold leading-snug text-foreground">
                      {service.nameEn}
                    </h3>
                  </div>
                  <p className="max-w-[58ch] leading-relaxed text-muted-foreground self-center">
                    {service.description}
                  </p>
                  <div className="self-center">
                    <a
                      href={waLink(service.prefill)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline whitespace-nowrap !min-h-[2.75rem]"
                    >
                      <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
                      Ask about this
                    </a>
                  </div>
                </li>
              ))}
            </ul>

            <p className="mt-8 font-display text-[0.95rem] text-muted-foreground">
              Serving {AREAS.join(" · ")} <span className="text-primary font-medium">+ expanding across Dhaka</span>
            </p>
          </div>
        </section>

        {/* ---------- Safety: the artifact your family receives ---------- */}
        <section
          className="grain on-deep relative bg-brand-deep py-20 text-white lg:py-28"
          aria-labelledby="safety-heading"
        >
          <div className="relative z-10 container mx-auto px-4 lg:px-8">
            <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
              <div>
                <p lang="bn" className="waymark mb-3">
                  নিরাপত্তা
                </p>
                <h2 id="safety-heading" className="text-[length:var(--text-h2)] font-bold leading-[1.08] tracking-tight">
                  Know exactly who is with them
                </h2>
                <p className="mt-5 max-w-[54ch] text-[1.05rem] leading-relaxed text-white/70">
                  Trust shouldn&apos;t be asked for — it should be shown, message by message. Before
                  and during every visit, this is what arrives on your WhatsApp.
                </p>

                <dl className="mt-10 space-y-6">
                  {[
                    {
                      term: "Verified before they join",
                      detail: "Every Guide passes a background check and identity verification before their first assignment.",
                    },
                    {
                      term: "Recognizable at the door",
                      detail: "Uniform and ID badge on every visit — your family knows who they're opening the door to.",
                    },
                    {
                      term: "Photo before, location during",
                      detail: "Your Guide's photo arrives before service begins, live WhatsApp location runs for the whole route, and you get a confirmation call before and after every visit.",
                    },
                    {
                      term: "Your choice of Guide",
                      detail: "Male and female Guides are available — tell us your preference when you book.",
                    },
                  ].map((item) => (
                    <div key={item.term} className="reveal">
                      <dt className="font-display text-[1.1rem] font-semibold text-accent">
                        {item.term}
                      </dt>
                      <dd className="mt-1 max-w-[52ch] leading-relaxed text-white/65">
                        {item.detail}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>

              {/* WhatsApp conversation artifact — messages arrive as you scroll */}
              <figure className="mx-auto w-full max-w-sm">
                <div className="chat-scroll overflow-hidden rounded-xl bg-white shadow-2xl">
                  <div className="flex items-center gap-3 bg-brand-deeper px-4 py-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-accent font-display text-sm font-bold text-accent-foreground">
                      G
                    </div>
                    <div className="leading-tight">
                      <p className="font-display text-sm font-semibold text-white">Guide</p>
                      <p className="font-display text-xs text-white/55">online · live location active</p>
                    </div>
                  </div>
                  <div className="space-y-2.5 bg-[oklch(0.95_0.01_120)] p-4 font-display text-[0.85rem]">
                    <div className="chat-msg max-w-[85%] rounded-lg rounded-tl-sm bg-white p-3 shadow-sm">
                      <p className="text-foreground">
                        Your Guide for today&apos;s visit — photo &amp; ID badge attached ✓
                      </p>
                      <div className="mt-2 flex items-center gap-2.5 rounded-md bg-muted p-2.5">
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-deep text-xs font-bold text-white" aria-hidden="true">
                          ID
                        </div>
                        <p className="text-xs leading-snug text-muted-foreground">
                          Photo · Name · Badge number
                          <br />
                          <span className="text-primary font-semibold">Identity verified</span>
                        </p>
                      </div>
                      <p className="mt-1.5 text-right text-[0.7rem] text-muted-foreground">9:12 AM</p>
                    </div>
                    <div className="chat-msg max-w-[85%] rounded-lg rounded-tl-sm bg-white p-3 shadow-sm">
                      <p className="text-foreground">
                        <span className="chat-live-dot" aria-hidden="true" />
                        Live location shared — on the way to the hospital
                      </p>
                      <p className="mt-1.5 text-right text-[0.7rem] text-muted-foreground">10:02 AM</p>
                    </div>
                    <div className="chat-msg max-w-[85%] rounded-lg rounded-tl-sm bg-white p-3 shadow-sm">
                      <p className="text-foreground">
                        Consultation done. Doctor&apos;s notes &amp; prescription 📄
                      </p>
                      <p className="mt-1.5 text-right text-[0.7rem] text-muted-foreground">12:15 PM</p>
                    </div>
                    <div className="chat-msg relative">
                      <div className="chat-typing" aria-hidden="true">
                        <i />
                        <i />
                        <i />
                      </div>
                      <div className="chat-final max-w-[85%] rounded-lg rounded-tl-sm bg-white p-3 shadow-sm">
                        <p lang="bn" className="text-foreground">
                          রিপোর্ট সংগ্রহ শেষ — উনি নিরাপদে বাসায় পৌঁছেছেন 🏠
                        </p>
                        <p className="mt-1.5 text-right text-[0.7rem] text-muted-foreground">1:40 PM</p>
                      </div>
                    </div>
                  </div>
                </div>
                <figcaption className="mt-3 text-center font-display text-xs text-white/60">
                  An illustration of the updates a family receives during one visit.
                </figcaption>
              </figure>
            </div>
          </div>
        </section>

        {/* ---------- The fine print, in plain sight ---------- */}
        <section className="py-20 lg:py-28 bg-background" aria-labelledby="terms-heading">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-[1fr_2fr] lg:gap-20">
              <div>
                <p lang="bn" className="waymark mb-3">
                  শর্ত
                </p>
                <h2 id="terms-heading" className="text-[length:var(--text-h2)] font-bold leading-[1.08] tracking-tight text-foreground">
                  The fine print, in plain sight
                </h2>
                <p className="mt-5 leading-relaxed text-muted-foreground">
                  A service you trust with your family shouldn&apos;t bury its conditions. Here are
                  the ones that matter most, before you book.
                </p>
                <Link
                  href="/terms"
                  className="mt-6 inline-flex items-center gap-2 font-display font-medium text-primary hover:underline underline-offset-4"
                >
                  Read the full terms &amp; conditions
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
              </div>

              <dl className="grid gap-x-10 sm:grid-cols-2">
                {KEY_TERMS.map((item) => (
                  <div key={item.term} className="reveal border-t border-border py-5">
                    <dt className="font-display text-[1.05rem] font-semibold text-foreground">
                      {item.term}
                    </dt>
                    <dd className="mt-1 text-[0.95rem] leading-relaxed text-muted-foreground">
                      {item.detail}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        {/* ---------- FAQ ---------- */}
        <section className="py-20 lg:py-28 bg-muted" aria-labelledby="faq-heading">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-[1fr_1.6fr] lg:gap-20">
              <div>
                <p lang="bn" className="waymark mb-3">
                  প্রশ্ন
                </p>
                <h2 id="faq-heading" className="text-[length:var(--text-h2)] font-bold leading-[1.08] tracking-tight text-foreground">
                  Families usually ask
                </h2>
                <p className="mt-5 leading-relaxed text-muted-foreground">
                  Anything else on your mind?{" "}
                  <a
                    href={waLink(PREFILL.float)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-display font-medium text-primary hover:underline underline-offset-4"
                  >
                    Ask us directly on WhatsApp
                  </a>{" "}
                  — no question is too small when it&apos;s about family.
                </p>
              </div>

              <div className="divide-y divide-border border-y border-border">
                {FAQS.map((faq) => (
                  <details key={faq.question} className="group">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 font-display text-[1.08rem] font-semibold text-foreground [&::-webkit-details-marker]:hidden">
                      {faq.question}
                      <span
                        className="shrink-0 text-2xl font-normal leading-none text-primary transition-transform duration-200 group-open:rotate-45 motion-reduce:transition-none"
                        aria-hidden="true"
                      >
                        +
                      </span>
                    </summary>
                    <p className="max-w-[62ch] pb-6 leading-relaxed text-muted-foreground">
                      {faq.answer}
                    </p>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    </div>
  )
}
