import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Terms & Conditions - Guide Medical Companion Service",
  description: "Terms and conditions for Guide's medical companion and escort services in Dhaka, Bangladesh.",
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

      <main>
        {/* Hero */}
        <section className="grain relative overflow-hidden bg-[oklch(0.22_0.06_175)] text-white">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute right-[8%] lg:right-[15%] top-1/2 -translate-y-1/2 font-[family-name:var(--font-bengali)] text-[clamp(5rem,14vw,10rem)] font-bold leading-none text-white/[0.04] select-none"
          >
            শর্তাবলী
          </div>

          <div className="relative z-10 container mx-auto px-4 lg:px-8 py-20 lg:py-28">
            <div className="max-w-3xl">
              <p className="text-sm font-medium tracking-wider uppercase text-accent mb-8">Legal</p>

              <h1 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Terms & Conditions
              </h1>

              <p className="text-lg text-white/60 leading-relaxed max-w-2xl">
                Please read before booking
              </p>
            </div>
          </div>
        </section>

        {/* Clauses */}
        <section className="bg-background py-16 lg:py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mx-auto space-y-4">
              {clauses.map((clause, index) => (
                <div
                  key={index}
                  className="bg-card border border-border rounded-xl p-6"
                >
                  <p className="text-sm font-semibold text-primary mb-1">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="text-base font-semibold text-foreground mb-2">
                    {clause.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {clause.description}
                  </p>
                </div>
              ))}

              <div className="bg-primary/5 border border-primary/20 rounded-xl p-6">
                <p className="text-sm text-foreground leading-relaxed">
                  By availing the services of Guide, you confirm that you have read, understood, and fully consented to all the terms and conditions mentioned above.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
