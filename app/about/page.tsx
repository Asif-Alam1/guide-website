import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Shield, Heart, Users, Award } from "lucide-react"

export const metadata = {
  title: "About Guide - Our Mission & Values | Trusted Companion Service",
  description: "Learn about Guide's mission to provide safe, reliable companion services in Dhaka.",
}

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Header />

      <main>
        <section className="py-32 lg:py-40 bg-gradient-to-b from-slate-50 to-white">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-6xl">
              <div className="inline-block mb-8">
                <div className="text-sm font-semibold tracking-wider uppercase text-slate-700 mb-3">
                  নিরাপত্তাই আমাদের প্রতিশ্রুতি
                </div>
                <div className="h-1 w-16 bg-slate-900" />
              </div>

              <h1 className="text-[clamp(3rem,10vw,8rem)] font-bold leading-[0.9] tracking-tight mb-12 text-slate-900">
                About
                <br />
                Guide
              </h1>

              <p className="text-3xl text-slate-600 leading-relaxed max-w-4xl">
                Your trusted companion service, committed to ensuring safety and peace of mind for every journey across
                Dhaka.
              </p>
            </div>
          </div>
        </section>

        <section className="py-32">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div className="relative">
                <div className="absolute inset-0 bg-slate-200 rounded-2xl rotate-3" />
                <img
                  src="/professional-team-of-uniformed-guide-staff-members.jpg"
                  alt="Guide team"
                  className="relative w-full aspect-[3/4] object-cover rounded-2xl shadow-2xl"
                />
              </div>

              <div className="space-y-10">
                <h2 className="text-6xl font-bold leading-tight text-slate-900">
                  Providing safe, reliable companionship
                </h2>

                <div className="space-y-6 text-xl text-slate-600 leading-relaxed">
                  <p>
                    Guide was founded with a simple yet powerful mission: to ensure that everyone in Dhaka can travel
                    safely and confidently, knowing they have a trusted companion by their side.
                  </p>
                  <p>
                    We understand the concerns families face when their loved ones need to travel. That's why we've
                    built a service based on trust, transparency, and unwavering commitment to safety.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-8 pt-8">
                  {[
                    { number: "100%", label: "ID-verified staff" },
                    { number: "24/7", label: "Availability" },
                    { number: "7+", label: "Service locations" },
                    { number: "500+", label: "Trusted clients" },
                  ].map((stat, index) => (
                    <div key={index}>
                      <div className="text-6xl font-bold mb-2 text-slate-900">{stat.number}</div>
                      <div className="text-slate-600 font-medium">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-32 bg-slate-900 text-white">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mb-20">
              <h2 className="text-6xl font-bold leading-tight mb-8">Our core values</h2>
              <p className="text-2xl text-slate-400">The principles that guide every service we provide</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
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
                    className="bg-white/5 backdrop-blur p-12 rounded-2xl border border-white/10 hover:bg-white/10 transition-all"
                  >
                    <Icon className="w-16 h-16 mb-8 text-white" />
                    <h3 className="text-3xl font-bold mb-4">{value.title}</h3>
                    <p className="text-slate-400 text-lg leading-relaxed">{value.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        <section className="py-32 bg-white">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mb-24">
              <h2 className="text-6xl font-bold leading-tight mb-8 text-slate-900">Why families trust Guide</h2>
              <p className="text-2xl text-slate-600">What sets us apart from other companion services</p>
            </div>

            <div className="space-y-24 max-w-5xl">
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
                    "With 7+ pickup points across Dhaka including Gulshan, Banani, Dhanmondi, Uttara, we're always nearby.",
                },
                {
                  number: "05",
                  title: "Family-centered approach",
                  description:
                    "We understand you're entrusting us with your loved ones. Our team treats every client with the care they deserve.",
                },
              ].map((item, index) => (
                <div key={index} className="flex gap-12 items-start border-b border-slate-200 pb-16 last:border-0">
                  <div className="text-[8rem] font-bold leading-none text-slate-200 flex-shrink-0">{item.number}</div>
                  <div className="pt-8">
                    <h3 className="text-4xl font-bold mb-6 text-slate-900">{item.title}</h3>
                    <p className="text-2xl text-slate-600 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-32 bg-gradient-to-b from-slate-50 to-white">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl">
              <h2 className="text-6xl font-bold mb-16 leading-tight text-slate-900">Serving Dhaka with pride</h2>

              <div className="flex flex-wrap gap-4 mb-12">
                {["Gulshan", "Banani", "Dhanmondi", "Uttara", "Mirpur", "Mohammadpur", "Shahbagh", "Expanding..."].map(
                  (location, index) => (
                    <div
                      key={index}
                      className="px-8 py-4 bg-white border-2 border-slate-900 rounded-full text-lg font-semibold hover:bg-slate-900 hover:text-white transition-all cursor-default"
                    >
                      {location}
                    </div>
                  ),
                )}
              </div>

              <p className="text-2xl text-slate-600">Expanding to more areas across Dhaka to serve you better</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
