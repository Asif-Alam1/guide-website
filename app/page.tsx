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
} from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl text-center lg:text-left">
            <div className="inline-block mb-6">
              <div className="text-sm font-semibold tracking-wider text-muted-foreground font-[family-name:var(--font-bengali)]">
                নিরাপত্তাই আমাদের প্রতিশ্রুতি
              </div>
              <div className="h-1 w-12 bg-primary mt-2 mx-auto lg:mx-0" />
            </div>

            <h1 className="text-[clamp(1.75rem,4vw,2.75rem)] font-bold leading-tight tracking-tight text-foreground mb-3">
              Safe travel companions across Dhaka
            </h1>

            <p className="font-[family-name:var(--font-bengali)] text-lg text-muted-foreground mb-4">
              আপনার পরিবারের নিরাপদ যাত্রার সঙ্গী
            </p>

            <p className="text-base text-muted-foreground leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-8">
              Background-checked, uniformed guides who escort your family from terminals, share live
              location via WhatsApp, and ensure they reach home safely.
            </p>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-10">
              <Button
                size="lg"
                className="h-12 px-8 rounded-lg bg-primary hover:bg-primary/90"
                asChild
              >
                <Link href="/contact">Book Now</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-12 px-8 rounded-lg border border-border"
                asChild
              >
                <a href="tel:+8801309204120">+880 1309 204120</a>
              </Button>
            </div>

            <div className="flex flex-wrap gap-6 justify-center lg:justify-start text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-primary" />
                <span>Uniformed Staff</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" />
                <span>Live WhatsApp Tracking</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                <span>Background Verified</span>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 lg:py-20 bg-card">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="mb-10">
              <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-2">Our services</h2>
              <p className="text-muted-foreground">
                Specialized companion packages for every travel and assistance need in Dhaka.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Launch Ghat Service — Featured */}
              <div className="md:col-span-2 bg-primary/5 border-2 border-primary/20 rounded-xl p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Ship className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded font-medium">
                      Featured
                    </span>
                    <h3 className="text-xl font-bold text-foreground mt-2">Launch Ghat Service</h3>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                  Safe escort from Sadarghat Launch Terminal. Our professional guide meets your
                  family, assists with luggage, arranges safe transportation, and ensures they reach
                  home safely.
                </p>

                <div className="grid sm:grid-cols-2 gap-4 mb-5">
                  <div className="flex items-center gap-2 text-sm text-foreground">
                    <Ship className="w-4 h-4 text-primary" />
                    <span>Ghat to Home</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-foreground">
                    <HomeIcon className="w-4 h-4 text-primary" />
                    <span>Home to Ghat</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {["Luggage Handling", "Transport Arrangement", "Live Tracking"].map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-muted px-2 py-1 rounded text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Terminal Pickup & Drop-off */}
              <div className="bg-card border border-border rounded-xl p-6 hover:border-primary/30 transition-colors">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Plane className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Terminal Pickup & Drop-off
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  Complete assistance at airports, train stations, and bus terminals. Our guide
                  handles arrival, departure, luggage, and safe transport home.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Airport", "Kamalapur Station", "Gabtoli", "Saydabad"].map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-muted px-2 py-1 rounded text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Transport Transfers */}
              <div className="bg-card border border-border rounded-xl p-6 hover:border-primary/30 transition-colors">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <ArrowLeftRight className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Transport Transfers</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Quick transfers from launch terminals, train stations, and bus stands to local
                  transport options like CNG, rideshare, or bus services within Dhaka.
                </p>
              </div>

              {/* Intercity Travel */}
              <div className="bg-card border border-border rounded-xl p-6 hover:border-primary/30 transition-colors">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Car className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Intercity Travel</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Safe companionship for travel within Dhaka city. Perfect for elderly travelers or
                  those who need assistance during city journeys.
                </p>
              </div>

              {/* Village Companion */}
              <div className="bg-card border border-border rounded-xl p-6 hover:border-primary/30 transition-colors">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <HomeIcon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Village Companion</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  24-hour comprehensive assistance for village visits. Full-day companionship
                  ensuring safety and support from Dhaka to village and back.
                </p>
              </div>

              {/* Medical Assistance */}
              <div className="md:col-span-2 bg-card border border-border rounded-xl p-6 hover:border-primary/30 transition-colors">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Hospital className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Medical Assistance</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Full-day hospital companionship from terminal or home. Our guide accompanies
                  through the entire medical visit, collects reports, takes prescription notes, and
                  sends digital reports to family members abroad.
                </p>
              </div>
            </div>

            {/* Service Locations */}
            <div className="bg-muted p-8 rounded-xl border border-border mt-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">Service Locations</h3>
                  <p className="text-sm text-muted-foreground">
                    We serve major areas across Dhaka
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {[
                  "Gulshan",
                  "Banani",
                  "Dhanmondi",
                  "Uttara",
                  "Mirpur",
                  "Mohammadpur",
                  "Shahbagh",
                ].map((location) => (
                  <span
                    key={location}
                    className="px-3 py-1.5 border border-primary/30 rounded-full text-sm text-primary"
                  >
                    {location}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-16 lg:py-20 bg-muted">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="mb-10">
              <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-2">How it works</h2>
              <p className="text-muted-foreground">
                Simple, transparent, and secure from booking to completion.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  number: "01",
                  icon: Phone,
                  title: "Contact us",
                  description:
                    "Reach out via phone or WhatsApp with your travel requirements",
                },
                {
                  number: "02",
                  icon: CheckCircle2,
                  title: "Verification call",
                  description:
                    "Receive confirmation call with guide details and uniform photo",
                },
                {
                  number: "03",
                  icon: Users,
                  title: "Meet your guide",
                  description:
                    "Our uniformed, ID-verified staff meets you at the designated location",
                },
                {
                  number: "04",
                  icon: MapPin,
                  title: "Safe journey",
                  description:
                    "Live tracking via WhatsApp ensures complete peace of mind",
                },
              ].map((step, index) => (
                <div key={index} className="relative">
                  <div className="bg-card p-6 rounded-xl border border-border h-full">
                    <div className="text-3xl font-bold text-primary/20 mb-3">{step.number}</div>
                    <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center mb-4">
                      <step.icon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                  {index < 3 && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-px bg-border" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Safety Section */}
        <section className="py-16 lg:py-20 bg-card border-t border-border">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="mb-10">
              <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-2">
                Safety built into every step
              </h2>
              <p className="text-muted-foreground">
                Multiple layers of verification and real-time tracking ensure complete peace of mind.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: Shield,
                  title: "Professional uniforms",
                  description:
                    "Standardized uniform for immediate identification and trust",
                },
                {
                  icon: CheckCircle2,
                  title: "Background verification",
                  description:
                    "Thorough background checks for every team member",
                },
                {
                  icon: Phone,
                  title: "Pre-service photo confirmation",
                  description:
                    "Receive your guide's photo before service begins",
                },
                {
                  icon: MapPin,
                  title: "Live WhatsApp tracking",
                  description:
                    "Real-time location sharing throughout the entire journey",
                },
              ].map((feature, index) => (
                <div key={index} className="bg-muted p-6 rounded-xl border border-border">
                  <feature.icon className="w-10 h-10 text-primary mb-4" />
                  <h3 className="text-base font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Promise Section */}
        <section className="py-16 lg:py-20 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="mb-10">
              <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-1">Our promise</h2>
              <p className="font-[family-name:var(--font-bengali)] text-muted-foreground">
                আমাদের প্রতিশ্রুতি
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: Shield,
                  title: "Verified & uniformed",
                  description:
                    "Every guide wears a uniform and carries a verified ID badge",
                },
                {
                  icon: Phone,
                  title: "Photo before service",
                  description:
                    "You receive your guide's photo and details before the journey begins",
                },
                {
                  icon: MapPin,
                  title: "Live location sharing",
                  description:
                    "Real-time WhatsApp location tracking throughout the entire trip",
                },
              ].map((promise, index) => (
                <div
                  key={index}
                  className="bg-card p-6 rounded-xl border-l-4 border-l-primary border border-border"
                >
                  <promise.icon className="w-8 h-8 text-primary mb-3" />
                  <h3 className="text-base font-semibold text-foreground mb-2">{promise.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {promise.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 lg:py-20 bg-muted">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="mb-10">
              <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-2">
                Common questions
              </h2>
              <p className="text-muted-foreground">
                Everything you need to know about our services.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-6">
              {[
                {
                  question: "How is pricing determined?",
                  answer:
                    "Pricing varies based on service type, duration, and distance. Contact us for a personalized quote tailored to your specific needs.",
                },
                {
                  question: "What safety measures do you have?",
                  answer:
                    "All staff undergo thorough background checks, wear standardized uniforms, and carry verified IDs. We provide live WhatsApp tracking and pre-service photo confirmation.",
                },
                {
                  question: "What payment methods do you accept?",
                  answer:
                    "We accept cash payments, mobile banking (bKash, Nagad), and bank transfers. Payment terms will be discussed during booking confirmation.",
                },
                {
                  question: "Which areas do you serve?",
                  answer:
                    "We serve locations across Dhaka including Gulshan, Banani, Dhanmondi, Uttara, Mirpur, Mohammadpur, and Shahbagh. We're continuously expanding to more areas.",
                },
                {
                  question: "How do I book a service?",
                  answer:
                    "Simply contact us via phone or WhatsApp. Our team will discuss your requirements and arrange everything for you.",
                },
                {
                  question: "Can I track my companion in real-time?",
                  answer:
                    "Yes! We provide live location sharing via WhatsApp throughout the entire journey for complete transparency and peace of mind.",
                },
              ].map((faq, index) => (
                <div key={index} className="bg-card p-6 rounded-xl border border-border">
                  <h3 className="text-base font-semibold text-foreground mb-2">{faq.question}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-24 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-2xl mx-auto text-center space-y-6">
              <h2 className="text-2xl lg:text-3xl font-bold">Ready to book?</h2>
              <p className="font-[family-name:var(--font-bengali)] text-primary-foreground/80">
                এখনই যোগাযোগ করুন
              </p>
              <p className="text-primary-foreground/80">
                Contact us for a personalized quote based on your needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button
                  size="lg"
                  className="h-12 px-8 rounded-lg bg-white text-primary hover:bg-white/90"
                  asChild
                >
                  <Link href="/contact">Book Now</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="h-12 px-8 rounded-lg border border-white/30 text-white hover:bg-white/10 bg-transparent"
                  asChild
                >
                  <a href="tel:+8801309204120" className="flex items-center gap-2">
                    <Phone className="w-5 h-5" />
                    Call Now
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
