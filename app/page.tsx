import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import {
  Shield,
  Phone,
  CheckCircle2,
  MapPin,
  Plane,
  ArrowLeftRight,
  HomeIcon,
  Hospital,
  Ship,
  Car,
  Users,
  MessageCircle,
} from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />

      <main>
        {/* Hero — Bold dark teal with grain texture */}
        <section className="grain relative overflow-hidden bg-[oklch(0.22_0.06_175)] text-white">
          {/* Large decorative Bengali text */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute right-[5%] lg:right-[10%] top-1/2 -translate-y-1/2 font-[family-name:var(--font-bengali)] text-[clamp(6rem,18vw,14rem)] font-bold leading-none text-white/[0.04] select-none"
          >
            নিরাপদ
            <br />
            যাত্রা
          </div>

          <div className="relative z-10 container mx-auto px-4 lg:px-8 py-20 lg:py-32">
            <div className="max-w-3xl">
              <p className="animate-fade-up text-sm font-medium tracking-wider uppercase text-accent mb-8 font-[family-name:var(--font-bengali)]">
                নিরাপত্তাই আমাদের প্রতিশ্রুতি
              </p>

              <h1 className="animate-fade-up delay-100 text-[clamp(2.25rem,5.5vw,4rem)] font-bold leading-[1.05] tracking-tight mb-4">
                Safe travel
                <br />
                companions
                <span className="text-accent"> across Dhaka</span>
              </h1>

              <p className="animate-fade-up delay-200 font-[family-name:var(--font-bengali)] text-xl text-white/50 mb-6">
                আপনার পরিবারের নিরাপদ যাত্রার সঙ্গী
              </p>

              <p className="animate-fade-up delay-200 text-lg text-white/70 leading-relaxed max-w-xl mb-10">
                Background-checked, uniformed guides who escort your family from
                terminals, share live location via WhatsApp, and ensure they
                reach home safely.
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
                  <a href="tel:+8801309204120" className="flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    +880 1309 204120
                  </a>
                </Button>
              </div>

              {/* Process highlights — simple inline text */}
              <div className="animate-fade-up delay-400 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-white/40">
                <span className="flex items-center gap-2"><Shield className="w-3.5 h-3.5 text-white/30" />Uniformed Staff</span>
                <span className="hidden sm:inline text-white/15">|</span>
                <span className="flex items-center gap-2"><MapPin className="w-3.5 h-3.5 text-white/30" />Live WhatsApp Tracking</span>
                <span className="hidden sm:inline text-white/15">|</span>
                <span className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-white/30" />Background Verified</span>
              </div>
            </div>
          </div>
        </section>

        {/* Services — Light section with visual variety */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-14">
              <div>
                <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">What we offer</p>
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Our services</h2>
              </div>
              <p className="text-muted-foreground max-w-md">
                Six specialized packages for every travel and assistance need in Dhaka.
              </p>
            </div>

            {/* Featured: Launch Ghat — visually distinct dark card */}
            <div className="grain relative overflow-hidden bg-[oklch(0.22_0.06_175)] text-white rounded-2xl p-8 lg:p-12 mb-6">
              <div className="relative z-10 grid lg:grid-cols-[1fr_auto] gap-8 items-start">
                <div>
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                      <Ship className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <span className="text-xs font-semibold uppercase tracking-wider text-accent">Featured</span>
                      <h3 className="text-2xl font-bold">Launch Ghat Service</h3>
                    </div>
                  </div>
                  <p className="text-white/60 leading-relaxed max-w-2xl mb-6">
                    Safe escort from Sadarghat Launch Terminal. Our guide meets your family,
                    assists with luggage, arranges transportation, and ensures they reach home safely.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {["Ghat to Home", "Home to Ghat", "Luggage Handling", "Live Tracking"].map((tag) => (
                      <span key={tag} className="text-xs bg-white/8 border border-white/10 px-3 py-1.5 rounded-full text-white/50">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <Button
                  className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-lg h-11 px-6"
                  asChild
                >
                  <Link href="/contact">Book this service</Link>
                </Button>
              </div>
            </div>

            {/* Other services — 3-column grid with distinct styling */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                {
                  icon: Plane,
                  title: "Terminal Pickup & Drop-off",
                  description: "Airport, train station, and bus terminal assistance. Arrival, departure, luggage, and safe transport home.",
                  tags: ["Airport", "Kamalapur", "Gabtoli"],
                  accent: "border-l-primary",
                },
                {
                  icon: ArrowLeftRight,
                  title: "Transport Transfers",
                  description: "Quick transfers from terminals to local transport — CNG, rideshare, or bus services within Dhaka.",
                  tags: [],
                  accent: "border-l-secondary",
                },
                {
                  icon: Car,
                  title: "Intercity Travel",
                  description: "Safe companionship within Dhaka city. Ideal for elderly travelers who need assistance during journeys.",
                  tags: [],
                  accent: "border-l-accent",
                },
                {
                  icon: HomeIcon,
                  title: "Village Companion",
                  description: "24-hour full-day companionship for village visits. Safe support from Dhaka to village and back.",
                  tags: ["24-hour service"],
                  accent: "border-l-primary",
                },
                {
                  icon: Hospital,
                  title: "Medical Assistance",
                  description: "Hospital companionship, report collection, prescription notes, and digital reports sent to family abroad.",
                  tags: ["Full-day", "Digital reports"],
                  accent: "border-l-secondary",
                },
              ].map((service) => (
                <div
                  key={service.title}
                  className={`bg-card border border-border border-l-4 ${service.accent} rounded-xl p-6 hover:shadow-md transition-shadow`}
                >
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-base font-semibold text-foreground mb-2">{service.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3">{service.description}</p>
                  {service.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1.5">
                      {service.tags.map((tag) => (
                        <span key={tag} className="text-xs bg-muted px-2 py-0.5 rounded text-muted-foreground">{tag}</span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
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

        {/* How It Works — Clean with dramatic step numbers */}
        <section className="py-20 lg:py-28 bg-muted">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="mb-14">
              <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">Simple process</p>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground">How it works</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border rounded-2xl overflow-hidden">
              {[
                { number: "01", icon: Phone, title: "Contact us", description: "Reach out via phone or WhatsApp with your travel requirements" },
                { number: "02", icon: CheckCircle2, title: "Verification", description: "Receive confirmation call with guide details and uniform photo" },
                { number: "03", icon: Users, title: "Meet your guide", description: "Our uniformed, ID-verified staff meets you at the designated location" },
                { number: "04", icon: MapPin, title: "Safe journey", description: "Live WhatsApp tracking ensures complete peace of mind" },
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

        {/* Safety — Dark teal section for contrast rhythm */}
        <section className="grain relative overflow-hidden bg-[oklch(0.22_0.06_175)] text-white py-20 lg:py-28">
          <div className="relative z-10 container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-[1fr_1.2fr] gap-16 items-center">
              <div>
                <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-2">Trust & safety</p>
                <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                  Safety built into
                  <br />
                  <span className="text-accent">every step</span>
                </h2>
                <p className="text-white/60 leading-relaxed">
                  Multiple layers of verification and real-time tracking ensure complete peace of mind for you and your family.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { icon: Shield, title: "Professional uniforms", description: "Standardized uniform for immediate identification and trust" },
                  { icon: CheckCircle2, title: "Background checks", description: "Thorough verification for every team member" },
                  { icon: Phone, title: "Photo confirmation", description: "Receive your guide's photo before service begins" },
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

        {/* Our Promise — Light with strong visual accent */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-2">Our promise</h2>
              <p className="font-[family-name:var(--font-bengali)] text-lg text-muted-foreground">আমাদের প্রতিশ্রুতি</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {[
                { icon: Shield, title: "Verified & uniformed", description: "Every guide wears a uniform and carries a verified ID badge", number: "01" },
                { icon: Phone, title: "Photo before service", description: "You receive your guide's photo and details before the journey begins", number: "02" },
                { icon: MapPin, title: "Live location sharing", description: "Real-time WhatsApp tracking throughout the entire trip", number: "03" },
              ].map((promise) => (
                <div key={promise.title} className="relative bg-card border border-border rounded-xl p-8 text-center">
                  <span className="absolute top-4 right-5 text-4xl font-bold text-primary/8">{promise.number}</span>
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-5">
                    <promise.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-base font-semibold text-foreground mb-2">{promise.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{promise.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ — Clean two-column */}
        <section className="py-20 lg:py-28 bg-muted">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-[1fr_1.5fr] gap-14">
              <div>
                <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">FAQ</p>
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Common questions</h2>
                <p className="text-muted-foreground">
                  Everything you need to know about our services. Can&apos;t find your answer?{" "}
                  <Link href="/contact" className="text-primary font-medium hover:underline">
                    Contact us
                  </Link>
                </p>
              </div>

              <div className="space-y-4">
                {[
                  { question: "How is pricing determined?", answer: "Pricing varies based on service type, duration, and distance. Contact us for a personalized quote tailored to your specific needs." },
                  { question: "What safety measures do you have?", answer: "All staff undergo thorough background checks, wear standardized uniforms, and carry verified IDs. We provide live WhatsApp tracking and pre-service photo confirmation." },
                  { question: "What payment methods do you accept?", answer: "We accept cash payments, mobile banking (bKash, Nagad), and bank transfers. Payment terms will be discussed during booking confirmation." },
                  { question: "Which areas do you serve?", answer: "We serve locations across Dhaka including Gulshan, Banani, Dhanmondi, Uttara, Mirpur, Mohammadpur, and Shahbagh. We're continuously expanding." },
                  { question: "How do I book a service?", answer: "Simply contact us via phone or WhatsApp. Our team will discuss your requirements and arrange everything for you." },
                  { question: "Can I track my companion in real-time?", answer: "Yes! We provide live location sharing via WhatsApp throughout the entire journey for complete transparency." },
                ].map((faq) => (
                  <details key={faq.question} className="group bg-card border border-border rounded-xl">
                    <summary className="cursor-pointer p-5 text-base font-semibold text-foreground flex items-center justify-between list-none">
                      {faq.question}
                      <span className="text-muted-foreground group-open:rotate-45 transition-transform text-xl leading-none">+</span>
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

        {/* CTA — Bold teal with grain */}
        <section className="grain relative overflow-hidden bg-[oklch(0.22_0.06_175)] text-white py-20 lg:py-28">
          <div className="relative z-10 container mx-auto px-4 lg:px-8">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl lg:text-4xl font-bold mb-3">Ready to book?</h2>
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
