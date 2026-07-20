import type React from "react"
import type { Metadata } from "next"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppIcon } from "@/components/whatsapp-icon"
import { PREFILL, waLink } from "@/lib/site"

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "The full terms and conditions for Guide's medical companion and escort services in Dhaka, Bangladesh — published in plain sight.",
}

const clauses = [
  {
    title: "Scope of Service",
    description:
      "Our primary responsibility is to escort the patient from their residence to the hospital, diagnostic center, doctor's chamber, or therapy center, assist with the consultation or tests, and ensure their safe return home.",
  },
  {
    title: "Transportation",
    description:
      "Vehicles (Uber, CNG, or others) will be arranged according to the client's preference. While the Guide will assist in booking/arranging the transport, all transportation costs must be fully borne by the client.",
  },
  {
    title: "Emergency Ambulance",
    description:
      "Based on the patient's condition, an ambulance service will be arranged if necessary.",
  },
  {
    title: "Companion in Ambulance",
    description:
      "At least one family member or legal representative must accompany the patient inside the ambulance.",
  },
  {
    title: "Liability (Accidents)",
    description:
      "The Guide or the organization shall not be held liable for any road accidents or unforeseen circumstances occurring during transit.",
  },
  {
    title: "Liability (Physical Condition)",
    description:
      "The Guide shall not accept any responsibility or liability if the patient's physical condition deteriorates or if a fatality occurs during transit or while at the hospital.",
  },
  {
    title: "Valuable Items",
    description:
      "Clients are specifically requested not to send expensive jewelry, excessive cash, or valuable items with the patient. The Guide will not be responsible for any loss of such items.",
  },
  {
    title: "Booking Deadline",
    description:
      "To ensure confirmed service, bookings must be made at least 3-4 hours in advance. For emergencies, service will be provided subject to the availability of a Guide.",
  },
  {
    title: "Waiting Charge",
    description:
      "If the consultation or testing requires a long duration (exceeding 2 hours), additional hourly charges may apply for the extended waiting time.",
  },
  {
    title: "Provision of Information",
    description:
      "At the time of booking, the patient's exact physical condition and the presence of any infectious diseases must be clearly disclosed. The authority will not be responsible for any issues arising from the concealment of information.",
  },
  {
    title: "Payment and Other Expenses",
    description:
      "50% of the service fee must be paid in advance, and the remaining balance must be cleared upon completion of the task. Additionally, hospital bills, medicine costs, or diagnostic fees must be paid directly by the client.",
  },
  {
    title: "Medication Caution",
    description:
      "The Guide will only assist in collecting medicines as per the doctor's prescription. The Guide is not responsible for any side effects or incorrect administration of medication.",
  },
  {
    title: "Cancellation Policy",
    description:
      "To cancel a service, notification must be given at least 2 hours in advance, in which case a 10% charge will be deducted. Cancellations made less than 2 hours before the service will result in the forfeiture of the advance payment.",
  },
  {
    title: "Patient Behavior",
    description:
      "If the patient is mentally unstable or aggressive, the Guide reserves the right to suspend the service at any time for safety reasons.",
  },
]

export default function TermsPage() {
  return (
    <div className="min-h-screen">
      <Header />

      <main id="main">
        <section className="bg-background" aria-labelledby="terms-heading">
          <div className="container mx-auto px-4 lg:px-8 pt-16 pb-12 lg:pt-24 lg:pb-16">
            <div className="max-w-3xl">
              <p lang="bn" className="waymark mb-4 enter" style={{ "--enter": 0 } as React.CSSProperties}>
                শর্তাবলী
              </p>
              <h1
                id="terms-heading"
                className="enter-display text-[clamp(2.25rem,1.3rem+3.8vw,4rem)] font-bold leading-[1.05] tracking-[-0.02em] text-foreground"
                style={{ "--enter": 1 } as React.CSSProperties}
              >
                Terms &amp; Conditions
              </h1>
              <p
                className="enter mt-6 max-w-[58ch] text-[length:var(--text-lead)] leading-relaxed text-muted-foreground"
                style={{ "--enter": 2 } as React.CSSProperties}
              >
                Fourteen clauses, published in full. Please read them before booking — they define
                exactly what we do, what we don&apos;t, and what we ask of you.
              </p>
            </div>
          </div>
        </section>

        <section className="pb-20 lg:pb-28 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <ol className="max-w-3xl">
              {clauses.map((clause, index) => (
                <li
                  key={clause.title}
                  className="grid gap-2 border-t border-border py-7 sm:grid-cols-[64px_1fr] sm:gap-6"
                >
                  <span
                    className="font-display text-[1.5rem] font-bold leading-none text-primary/50"
                    aria-hidden="true"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h2 className="font-display text-[1.15rem] font-semibold text-foreground">
                      {clause.title}
                    </h2>
                    <p className="mt-2 max-w-[62ch] leading-relaxed text-muted-foreground">
                      {clause.description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>

            <div className="mt-10 max-w-3xl rounded-xl bg-muted p-7">
              <p className="leading-relaxed text-foreground/85 max-w-[62ch]">
                By availing the services of Guide, you confirm that you have read, understood, and
                fully consented to all the terms and conditions mentioned above.
              </p>
              <a
                href={waLink("Hi Guide, I have a question about your terms and conditions.")}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 font-display font-medium text-primary hover:underline underline-offset-4"
              >
                <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
                Question about a clause? Ask us
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
