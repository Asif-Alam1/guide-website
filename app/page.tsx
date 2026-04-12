import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import {
  Shield,
  Phone,
  CheckCircle2,
  MapPin,
  Hospital,
  Ship,
  Users,
  MessageCircle,
  FileText,
  Stethoscope,
  Clock,
  CreditCard,
  AlertCircle,
  ArrowRight,
  Pill,
} from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />

      <main>
        {/* Hero — Medical-first messaging */}
        <section className="grain relative overflow-hidden bg-[oklch(0.22_0.06_175)] text-white">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute right-[5%] lg:right-[10%] top-1/2 -translate-y-1/2 font-[family-name:var(--font-bengali)] text-[clamp(6rem,18vw,14rem)] font-bold leading-none text-white/[0.04] select-none"
          >
            নিরাপদ
            <br />
            সেবা
          </div>

          <div className="relative z-10 container mx-auto px-4 lg:px-8 py-20 lg:py-32">
            <div className="max-w-3xl">
              <p className="animate-fade-up text-sm font-medium tracking-wider uppercase text-accent mb-8">
                Companion Service in Dhaka
              </p>

              <h1 className="animate-fade-up delay-100 text-[clamp(2.25rem,5.5vw,4rem)] font-bold leading-[1.05] tracking-tight mb-4">
                Your trusted
                <br />
                companion for
                <span className="text-accent"> medical &amp; travel</span>
              </h1>

              <p className="animate-fade-up delay-200 font-[family-name:var(--font-bengali)] text-xl text-white/50 mb-6">
                আপনার পরিবারের নিরাপদ যাত্রা ও চিকিৎসা সেবার সঙ্গী
              </p>

              <p className="animate-fade-up delay-200 text-lg text-white/70 leading-relaxed max-w-xl mb-10">
                From hospital visits and doctor&apos;s appointments to airport
                pickups and launch ghat escorts — uniformed, background-checked
                guides with live WhatsApp tracking.
              </p>

              <div className="animate-fade-up delay-300 flex flex-wrap gap-4 mb-14">
                <Button
                  size="lg"
                  className="h-13 px-8 rounded-lg bg-accent text-accent-foreground hover:bg-accent/90 font-semibold text-base"
                  asChild
                >
                  <Link href="/contact">Book Now</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="h-13 px-8 rounded-lg border-white/20 text-white hover:bg-white/10 bg-transparent font-semibold text-base"
                  asChild
                >
                  <a href="https://wa.me/8801309204120" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    <MessageCircle className="w-4 h-4" />
                    WhatsApp
                  </a>
                </Button>
              </div>

              <div className="animate-fade-up delay-400 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-white/40">
                <span className="flex items-center gap-2"><Shield className="w-3.5 h-3.5 text-white/30" />Uniformed &amp; ID-Verified</span>
                <span className="hidden sm:inline text-white/15">|</span>
                <span className="flex items-center gap-2"><MapPin className="w-3.5 h-3.5 text-white/30" />Live WhatsApp Tracking</span>
                <span className="hidden sm:inline text-white/15">|</span>
                <span className="flex items-center gap-2"><FileText className="w-3.5 h-3.5 text-white/30" />Digital Reports to Family</span>
              </div>
            </div>
          </div>
        </section>

        {/* Services — Medical-first */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-14">
              <div>
                <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">What we offer</p>
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Our services</h2>
              </div>
              <p className="text-muted-foreground max-w-md">
                Specialized medical and travel companion services for families in Dhaka.
              </p>
            </div>

            {/* Featured: Hospital Companion */}
            <div className="grain relative overflow-hidden bg-[oklch(0.22_0.06_175)] text-white rounded-2xl p-8 lg:p-12 mb-6">
              <div className="relative z-10">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                    <Stethoscope className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-accent">Primary Service</span>
                    <h3 className="text-2xl font-bold mt-1">Hospital Companion</h3>
                  </div>
                </div>

                <p className="text-white/60 leading-relaxed max-w-2xl mb-6">
                  Complete medical visit assistance — from escorting your family member to the
                  hospital, sitting through the consultation, taking doctor&apos;s notes, purchasing
                  prescribed medicines, to collecting test reports and ensuring a safe return home.
                  Digital reports sent to family abroad.
                </p>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
                  {[
                    "Home → Hospital → Home",
                    "Doctor's notes & prescriptions",
                    "Test report collection",
                    "Digital reports to family",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-2 text-sm text-white/50">
                      <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <Button
                  className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-lg h-11 px-6"
                  asChild
                >
                  <Link href="/contact">Book this service</Link>
                </Button>
              </div>
            </div>

            {/* Medical services row */}
            <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-3 mt-2">Medical Services</p>
            <div className="grid md:grid-cols-3 gap-4 mb-10">
              <div className="bg-card border border-border border-l-4 border-l-primary rounded-xl p-6 hover:shadow-md transition-shadow">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-base font-semibold text-foreground mb-2">Hospital Attendant</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Overnight or 24-hour supervision for admitted patients. A reliable Guide stays
                  with your family member when you can&apos;t be at the hospital.
                </p>
              </div>

              <div className="bg-card border border-border border-l-4 border-l-primary rounded-xl p-6 hover:shadow-md transition-shadow">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Pill className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-base font-semibold text-foreground mb-2">Report &amp; Medicine Collection</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Pickup and delivery of test reports and prescribed medicines from hospitals and
                  pharmacies on your behalf. Digital copies sent to family abroad.
                </p>
              </div>

              <div className="bg-card border border-border border-l-4 border-l-primary rounded-xl p-6 hover:shadow-md transition-shadow">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Hospital className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-base font-semibold text-foreground mb-2">Emergency Ambulance</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Ambulance arrangement based on the patient&apos;s condition. Our Guide coordinates
                  logistics while a family member accompanies the patient.
                </p>
              </div>
            </div>

            {/* Travel & Escort services row */}
            <p className="text-xs font-semibold text-secondary uppercase tracking-wider mb-3">Travel &amp; Escort Services</p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-card border border-border border-l-4 border-l-accent rounded-xl p-6 hover:shadow-md transition-shadow">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Ship className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-base font-semibold text-foreground mb-2">Launch Ghat Escort</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Safe escort from Sadarghat Launch Terminal to home or home to terminal.
                  Luggage handling, transport arrangement, and live tracking.
                </p>
              </div>

              <div className="bg-card border border-border border-l-4 border-l-accent rounded-xl p-6 hover:shadow-md transition-shadow">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-base font-semibold text-foreground mb-2">Airport &amp; Terminal Pickup</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Assistance at airports, train stations, and bus terminals. Arrival pickup,
                  departure drop-off, luggage help, and safe transport home.
                </p>
              </div>

              <div className="bg-card border border-border border-l-4 border-l-accent rounded-xl p-6 hover:shadow-md transition-shadow">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-base font-semibold text-foreground mb-2">Intercity &amp; Village Companion</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Safe companionship for city travel or full-day village visits. Ideal for elderly
                  travelers who need a trusted companion for the journey.
                </p>
              </div>
            </div>

            {/* Locations strip */}
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
                <MapPin className="w-4 h-4 text-primary" />
                Serving:
              </div>
              {["Gulshan", "Banani", "Dhanmondi", "Uttara", "Mirpur", "Mohammadpur", "Shahbagh"].map((loc) => (
                <span key={loc} className="text-sm text-muted-foreground">{loc}</span>
              ))}
              <span className="text-sm text-primary font-medium">+ expanding</span>
            </div>
          </div>
        </section>

        {/* How It Works — Medical flow */}
        <section className="py-20 lg:py-28 bg-muted">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="mb-14">
              <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">Simple process</p>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground">How it works</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border rounded-2xl overflow-hidden">
              {[
                { number: "01", icon: Phone, title: "Book ahead", description: "Contact us via WhatsApp or phone at least 3-4 hours before your appointment" },
                { number: "02", icon: FileText, title: "Share details", description: "Tell us the patient's condition, hospital name, and appointment time" },
                { number: "03", icon: Users, title: "Guide arrives", description: "Our uniformed, ID-verified Guide arrives at your home on time" },
                { number: "04", icon: MapPin, title: "Full assistance", description: "Escort, consultation support, report collection, and safe return home" },
              ].map((step) => (
                <div key={step.number} className="bg-card p-8 relative">
                  <span className="text-6xl font-bold text-primary/10 leading-none">{step.number}</span>
                  <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center mt-4 mb-4">
                    <step.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-base font-semibold text-foreground mb-1">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Safety — Dark teal */}
        <section className="grain relative overflow-hidden bg-[oklch(0.22_0.06_175)] text-white py-20 lg:py-28">
          <div className="relative z-10 container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-[1fr_1.2fr] gap-16 items-center">
              <div>
                <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-2">Trust &amp; safety</p>
                <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                  Your family is in
                  <br />
                  <span className="text-accent">safe hands</span>
                </h2>
                <p className="text-white/60 leading-relaxed">
                  Every Guide is background-checked, uniformed, and tracked in real-time. You know exactly who is with your family member at all times.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { icon: Shield, title: "Uniformed staff", description: "Professional uniform and ID badge for immediate identification" },
                  { icon: CheckCircle2, title: "Background verified", description: "Thorough background check on every team member" },
                  { icon: Phone, title: "Photo confirmation", description: "Receive your Guide's photo before service begins" },
                  { icon: MapPin, title: "Live tracking", description: "Real-time WhatsApp location sharing throughout" },
                ].map((feature) => (
                  <div key={feature.title} className="bg-white/5 border border-white/8 rounded-xl p-5">
                    <feature.icon className="w-8 h-8 text-accent mb-3" />
                    <h3 className="text-sm font-semibold mb-1">{feature.title}</h3>
                    <p className="text-xs text-white/50 leading-relaxed">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Key Terms — Surface important T&C */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-14">
              <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">Transparency</p>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-2">Key things to know</h2>
              <p className="text-muted-foreground">Important terms before you book</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mb-8">
              {[
                { icon: CreditCard, title: "50% advance payment", description: "Half the service fee is paid upfront. Remaining balance cleared after completion." },
                { icon: Clock, title: "Book 3-4 hours ahead", description: "Advance notice ensures a confirmed Guide. Emergencies handled based on availability." },
                { icon: AlertCircle, title: "Disclose patient condition", description: "Share the patient's exact condition and any infectious diseases at booking." },
                { icon: Hospital, title: "Client pays transport", description: "Vehicle costs (Uber, CNG, ambulance) are arranged by Guide but paid by client." },
              ].map((term) => (
                <div key={term.title} className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <term.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-sm font-semibold text-foreground mb-1">{term.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{term.description}</p>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Link
                href="/terms"
                className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
              >
                Read full Terms &amp; Conditions
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ — Medical-focused */}
        <section className="py-20 lg:py-28 bg-muted">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-[1fr_1.5fr] gap-14">
              <div>
                <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">FAQ</p>
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Common questions</h2>
                <p className="text-muted-foreground">
                  Everything you need to know.{" "}
                  <Link href="/contact" className="text-primary font-medium hover:underline">
                    Contact us
                  </Link>{" "}
                  for anything else.
                </p>
              </div>

              <div className="space-y-4">
                {[
                  { question: "What does the Hospital Companion service include?", answer: "Your Guide escorts the patient from home to the hospital, sits through the doctor's consultation, takes notes of medical advice, purchases prescribed medicines, collects test reports, and ensures the patient returns home safely. Digital copies of reports are sent to family members abroad." },
                  { question: "How far in advance should I book?", answer: "We recommend booking at least 3-4 hours in advance to ensure a confirmed Guide. For emergencies, we'll do our best to accommodate based on availability." },
                  { question: "What are the payment terms?", answer: "50% of the service fee is paid in advance, with the remaining balance cleared upon completion. Hospital bills, medicine costs, and transport fees are paid directly by the client." },
                  { question: "What if I need to cancel?", answer: "Cancellations made 2+ hours before service incur a 10% charge. Cancellations within 2 hours result in forfeiture of the advance payment." },
                  { question: "Does the Guide provide medical advice?", answer: "No. Our Guides assist with logistics — escorting, note-taking, report collection, and medicine pickup. They do not provide medical advice or administer medication." },
                  { question: "What safety measures are in place?", answer: "All Guides are background-checked, uniformed, and carry verified IDs. You receive your Guide's photo before service begins, and live WhatsApp location tracking runs throughout." },
                ].map((faq) => (
                  <details key={faq.question} className="group bg-card border border-border rounded-xl">
                    <summary className="cursor-pointer p-5 text-base font-semibold text-foreground flex items-center justify-between list-none">
                      {faq.question}
                      <span className="text-muted-foreground group-open:rotate-45 transition-transform text-xl leading-none ml-4 flex-shrink-0">+</span>
                    </summary>
                    <div className="px-5 pb-5 -mt-1">
                      <p className="text-sm text-muted-foreground leading-relaxed">{faq.answer}</p>
                    </div>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="grain relative overflow-hidden bg-[oklch(0.22_0.06_175)] text-white py-20 lg:py-28">
          <div className="relative z-10 container mx-auto px-4 lg:px-8">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl lg:text-4xl font-bold mb-3">Book your companion</h2>
              <p className="font-[family-name:var(--font-bengali)] text-xl text-white/40 mb-3">এখনই যোগাযোগ করুন</p>
              <p className="text-white/60 mb-8">Contact us for a personalized quote based on your needs.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="h-13 px-8 rounded-lg bg-accent text-accent-foreground hover:bg-accent/90 font-semibold"
                  asChild
                >
                  <Link href="/contact">Book Now</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="h-13 px-8 rounded-lg border-white/20 text-white hover:bg-white/10 bg-transparent"
                  asChild
                >
                  <a href="https://wa.me/8801309204120" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    <MessageCircle className="w-5 h-5" />
                    WhatsApp
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
