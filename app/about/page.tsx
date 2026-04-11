import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Shield, Heart, Users, Award, CheckCircle2, MapPin, Phone } from "lucide-react"

export const metadata = {
  title: "About Guide - Our Mission & Values | Trusted Companion Service",
  description: "Learn about Guide's mission to provide safe, reliable companion services in Dhaka.",
}

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Header />

      <main>
        {/* Hero */}
        <section className="py-16 lg:py-20 bg-muted">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl">
              <div className="inline-block mb-6">
                <div className="text-sm font-semibold tracking-wider uppercase text-muted-foreground font-[family-name:var(--font-bengali)] mb-2">
                  নিরাপত্তাই আমাদের প্রতিশ্রুতি
                </div>
                <div className="h-1 w-16 bg-primary" />
              </div>

              <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                About Guide
              </h1>

              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                Your trusted companion service, committed to ensuring safety and peace of mind for every journey across
                Dhaka.
              </p>
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className="py-16 lg:py-20 bg-card">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl">
              <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-6">
                Providing safe, reliable companionship
              </h2>

              <div className="space-y-4 text-base text-muted-foreground leading-relaxed">
                <p>
                  Guide was founded with a simple yet powerful mission: to ensure that everyone in Dhaka can travel
                  safely and confidently, knowing they have a trusted companion by their side.
                </p>
                <p>
                  We understand the concerns families face when their loved ones need to travel. That&apos;s why we&apos;ve
                  built a service based on trust, transparency, and unwavering commitment to safety.
                </p>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
                {[
                  { icon: Shield, label: "Uniformed Staff" },
                  { icon: CheckCircle2, label: "Background Checks" },
                  { icon: MapPin, label: "Live Tracking" },
                  { icon: Phone, label: "Photo Confirmation" },
                ].map((item, index) => {
                  const Icon = item.icon
                  return (
                    <div key={index} className="bg-muted p-4 rounded-xl text-center">
                      <Icon className="w-6 h-6 text-primary mb-2 mx-auto" />
                      <div className="text-sm font-medium">{item.label}</div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-16 lg:py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mb-12">
              <h2 className="text-2xl lg:text-3xl font-bold mb-4">Our core values</h2>
              <p className="text-base text-primary-foreground/70">The principles that guide every service we provide</p>
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
                    className="bg-white/10 border border-white/15 rounded-xl p-8"
                  >
                    <Icon className="w-10 h-10 mb-4 text-primary-foreground" />
                    <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                    <p className="text-sm text-primary-foreground/70 leading-relaxed">{value.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Why Families Trust Guide */}
        <section className="py-16 lg:py-20 bg-card">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mb-12">
              <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">Why families trust Guide</h2>
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
                  title: "Comprehensive service coverage",
                  description:
                    "From airport pickups to medical assistance, intercity travel to village visits, we offer six specialized packages.",
                },
                {
                  number: "04",
                  title: "Strategic service locations",
                  description:
                    "With pickup points across Dhaka including Gulshan, Banani, Dhanmondi, Uttara, we're always nearby.",
                },
                {
                  number: "05",
                  title: "Family-centered approach",
                  description:
                    "We understand you're entrusting us with your loved ones. Our team treats every client with the care they deserve.",
                },
              ].map((item, index) => (
                <div key={index} className="flex gap-6 items-start border-b border-border pb-8 last:border-0">
                  <div className="text-4xl font-bold text-primary/20 flex-shrink-0">{item.number}</div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Locations */}
        <section className="py-16 lg:py-20 bg-muted">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl">
              <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-8">Serving Dhaka with pride</h2>

              <div className="flex flex-wrap gap-3 mb-8">
                {["Gulshan", "Banani", "Dhanmondi", "Uttara", "Mirpur", "Mohammadpur", "Shahbagh", "Expanding..."].map(
                  (location, index) => (
                    <div
                      key={index}
                      className="px-4 py-2 border border-primary/30 rounded-full text-sm text-primary"
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
