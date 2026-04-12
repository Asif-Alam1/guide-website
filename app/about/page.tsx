import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Shield, Heart, Users, Award, CheckCircle2, MapPin, Phone, Stethoscope } from "lucide-react"

export const metadata = {
  title: "About Guide - Our Mission & Values | Trusted Companion Service",
  description: "Learn about Guide's mission to provide safe, reliable medical companion services in Dhaka.",
}

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Header />

      <main>
        {/* Hero — Bold dark teal with grain */}
        <section className="grain relative overflow-hidden bg-[oklch(0.22_0.06_175)] text-white">
          {/* Large decorative Bengali text */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute right-[8%] lg:right-[15%] top-1/2 -translate-y-1/2 font-[family-name:var(--font-bengali)] text-[clamp(5rem,14vw,10rem)] font-bold leading-none text-white/[0.04] select-none"
          >
            বিশ্বাস
            <br />
            সেবা
          </div>

          <div className="relative z-10 container mx-auto px-4 lg:px-8 py-20 lg:py-28">
            <div className="max-w-3xl">
              <p className="text-sm font-medium tracking-wider uppercase text-accent mb-8">About us</p>

              <h1 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                About Guide
              </h1>

              <p className="text-lg text-white/60 leading-relaxed max-w-2xl">
                Dhaka&apos;s dedicated medical companion service — ensuring your family receives safe, reliable assistance for every hospital visit.
              </p>
            </div>
          </div>
        </section>

        {/* Mission — Light section */}
        <section className="py-20 lg:py-28 bg-card">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">Our mission</p>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                Providing safe, reliable medical companionship
              </h2>

              <div className="space-y-4 text-base text-muted-foreground leading-relaxed">
                <p>
                  Guide was founded with a simple yet powerful mission: to ensure that families in Dhaka never have to worry when a loved one needs to visit the hospital. We provide a trusted companion who handles the entire medical visit — from escort to consultation notes to report collection.
                </p>
                <p>
                  Whether it&apos;s an elderly parent needing a hospital checkup or collecting test reports on behalf of family abroad, we handle the logistics so you don&apos;t have to worry.
                </p>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
                {[
                  { icon: Stethoscope, label: "Medical Visit Support", accent: "border-l-primary" },
                  { icon: CheckCircle2, label: "Background Checks", accent: "border-l-secondary" },
                  { icon: MapPin, label: "Live Tracking", accent: "border-l-accent" },
                  { icon: Phone, label: "Photo Confirmation", accent: "border-l-primary" },
                ].map((item, index) => {
                  const Icon = item.icon
                  return (
                    <div key={index} className={`bg-card border border-border border-l-4 ${item.accent} rounded-xl p-4`}>
                      <Icon className="w-6 h-6 text-primary mb-2" />
                      <div className="text-sm font-medium">{item.label}</div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Core Values — Dark teal with grain */}
        <section className="grain relative overflow-hidden bg-[oklch(0.22_0.06_175)] text-white">
          <div className="relative z-10 container mx-auto px-4 lg:px-8 py-20 lg:py-28">
            <div className="max-w-3xl mb-12">
              <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-2">What drives us</p>
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">Our core values</h2>
              <p className="text-base text-white/60">The principles that guide every service we provide</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  icon: Shield,
                  title: "Safety first",
                  description:
                    "Every decision we make prioritizes the safety and security of our clients. From background checks to real-time tracking, safety is non-negotiable.",
                },
                {
                  icon: Heart,
                  title: "Compassionate care",
                  description:
                    "We treat every client with the respect and care we would show our own family members. Your loved ones are our priority.",
                },
                {
                  icon: Users,
                  title: "Professional excellence",
                  description:
                    "Our team is trained to provide the highest standard of service with uniformed staff and consistent quality.",
                },
                {
                  icon: Award,
                  title: "Trust & transparency",
                  description:
                    "Complete transparency in our processes, from verification to service delivery. You always know who, what, when, and where.",
                },
              ].map((value, index) => {
                const Icon = value.icon
                return (
                  <div
                    key={index}
                    className="bg-white/5 border border-white/8 rounded-xl p-8"
                  >
                    <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-accent" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                    <p className="text-sm text-white/60 leading-relaxed">{value.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Why Families Trust Guide — Light */}
        <section className="py-20 lg:py-28 bg-card">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mb-12">
              <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">Our difference</p>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Why families trust Guide</h2>
              <p className="text-base text-muted-foreground">What sets us apart from other companion services</p>
            </div>

            <div className="space-y-8 max-w-3xl">
              {[
                {
                  number: "01",
                  title: "Verified & uniformed staff",
                  description:
                    "Every Guide staff member undergoes thorough background checks and ID verification. Our distinctive uniforms ensure easy identification.",
                },
                {
                  number: "02",
                  title: "Live tracking & communication",
                  description:
                    "Stay connected throughout the journey with real-time WhatsApp location sharing. Receive confirmation calls with complete details.",
                },
                {
                  number: "03",
                  title: "Complete medical visit support",
                  description:
                    "From escorting to the hospital, sitting through consultations, taking doctor's notes, purchasing medicines, to collecting reports — we handle every step.",
                },
                {
                  number: "04",
                  title: "Digital reports for family abroad",
                  description:
                    "Test results, prescriptions, and doctor's notes digitized and sent to family members overseas so they stay informed.",
                },
                {
                  number: "05",
                  title: "Family-centered approach",
                  description:
                    "We understand you're entrusting us with your loved ones. Our team treats every client with the care they deserve.",
                },
              ].map((item, index) => (
                <div key={index} className="flex gap-6 items-start border-l-2 border-l-primary/20 pl-6">
                  <div className="text-5xl font-bold text-primary/15 flex-shrink-0">{item.number}</div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Locations — Muted bg */}
        <section className="py-20 lg:py-28 bg-muted">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">Coverage</p>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-8">Serving Dhaka with pride</h2>

              <div className="flex flex-wrap gap-3 mb-8">
                {["Gulshan", "Banani", "Dhanmondi", "Uttara", "Mirpur", "Mohammadpur", "Shahbagh", "Expanding..."].map(
                  (location, index) => (
                    <div
                      key={index}
                      className="px-4 py-2 bg-card border border-border hover:border-primary/30 transition-colors rounded-full text-sm text-foreground"
                    >
                      {location}
                    </div>
                  ),
                )}
              </div>

              <p className="text-base text-muted-foreground">Expanding to more areas across Dhaka to serve you better</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
