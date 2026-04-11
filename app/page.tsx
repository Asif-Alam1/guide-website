"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import {
  Shield,
  Phone,
  CheckCircle2,
  MapPin,
  Users,
  Plane,
  ArrowLeftRight,
  HomeIcon,
  Hospital,
  FileText,
  Ship,
  Train,
  Bus,
  Car,
  Ambulance,
  Clock,
  Home,
} from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-slate-100 -z-10" />

          <div className="container mx-auto px-4 lg:px-8 py-20">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div className="space-y-10 max-w-2xl">
                <div className="inline-block">
                  <div className="text-sm font-semibold tracking-wider uppercase text-slate-700 mb-3">
                    নিরাপত্তাই আমাদের প্রতিশ্রুতি
                  </div>
                  <div className="h-1 w-16 bg-slate-900" />
                </div>

                <h1 className="text-[clamp(2.5rem,8vw,5.5rem)] font-bold leading-[0.95] tracking-tight text-slate-900">
                  Your trusted
                  <br />
                  companion in
                  <br />
                  <span className="text-slate-600">every journey</span>
                </h1>

                <p className="text-xl text-slate-600 max-w-lg leading-relaxed">
                  Professional companion services across Dhaka with uniformed staff, complete verification, and live
                  tracking.
                </p>

                <div className="flex flex-wrap gap-4">
                  <Button
                    size="lg"
                    className="h-14 px-8 text-base rounded-full bg-slate-900 hover:bg-slate-800"
                    asChild
                  >
                    <Link href="/contact">Get started</Link>
                  </Button>
                  <Button
                    size="lg"
                    variant="ghost"
                    className="h-14 px-8 text-base rounded-full border-2 border-slate-900 hover:bg-slate-900 hover:text-white"
                    asChild
                  >
                    <a href="tel:+8801309204120">+880 1309 204120</a>
                  </Button>
                </div>

                <div className="grid grid-cols-3 gap-8 pt-8">
                  <div>
                    <div className="text-5xl font-bold tracking-tight text-slate-900">500+</div>
                    <div className="text-sm text-slate-600 mt-1">Trusted clients</div>
                  </div>
                  <div>
                    <div className="text-5xl font-bold tracking-tight text-slate-900">24/7</div>
                    <div className="text-sm text-slate-600 mt-1">Available</div>
                  </div>
                  <div>
                    <div className="text-5xl font-bold tracking-tight text-slate-900">100%</div>
                    <div className="text-sm text-slate-600 mt-1">Verified</div>
                  </div>
                </div>
              </div>

              <div className="relative lg:h-[600px]">
                <div className="absolute inset-0 bg-slate-200 rounded-3xl -rotate-6" />
                <img
                  src="/professional-uniformed-guide-helping-elderly-perso.jpg"
                  alt="Professional Guide staff"
                  className="relative w-full h-full object-cover rounded-3xl shadow-2xl"
                />

                <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl max-w-xs border border-slate-200">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-slate-900 rounded-full flex items-center justify-center flex-shrink-0">
                      <Shield className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-lg mb-1 text-slate-900">100% Verified</div>
                      <div className="text-sm text-slate-600">All staff ID-checked</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-32 bg-white">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mb-20">
              <h2 className="text-[clamp(2rem,6vw,4rem)] font-bold leading-tight mb-6 text-slate-900">Our services</h2>
              <p className="text-xl text-slate-600">
                Six specialized packages designed for every travel and assistance need in Dhaka.
              </p>
            </div>

            <div className="space-y-8">
              <div className="group relative bg-gradient-to-br from-blue-900 via-slate-900 to-slate-800 text-white p-12 lg:p-20 rounded-3xl overflow-hidden hover:scale-[1.01] transition-transform">
                <div className="absolute inset-0 bg-[url('/water-waves-pattern.png')] opacity-5 bg-cover bg-center"></div>
                <div className="relative z-10">
                  <div className="flex items-start gap-6 mb-8">
                    <div className="w-24 h-24 bg-white/10 backdrop-blur-xl rounded-3xl flex items-center justify-center flex-shrink-0 border border-white/20">
                      <Ship className="w-12 h-12" />
                    </div>
                    <div>
                      <div className="inline-block px-4 py-1.5 bg-blue-500/20 backdrop-blur border border-blue-400/30 rounded-full text-sm font-semibold uppercase tracking-wider text-blue-200 mb-4">
                        Featured Service
                      </div>
                      <h3 className="text-5xl lg:text-6xl font-bold mb-2">Launch Ghat Service</h3>
                      <p className="text-xl text-slate-300">Safe escort from Sadarghat to your home destination</p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 mt-10">
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-2xl">
                      <div className="flex items-center gap-3 mb-3">
                        <Ship className="w-6 h-6 text-blue-300" />
                        <h4 className="text-lg font-bold">From Launch Ghat to Home</h4>
                      </div>
                      <p className="text-slate-300 leading-relaxed">
                        Our professional guide meets your family at Sadarghat Launch Terminal, assists with luggage,
                        arranges safe transportation, and ensures they reach home safely.
                      </p>
                    </div>

                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-2xl">
                      <div className="flex items-center gap-3 mb-3">
                        <Home className="w-6 h-6 text-blue-300" />
                        <h4 className="text-lg font-bold">From Home to Launch Ghat</h4>
                      </div>
                      <p className="text-slate-300 leading-relaxed">
                        Pick up from home, escort to Sadarghat Launch Terminal, help with ticketing and boarding
                        procedures, and ensure safe departure.
                      </p>
                    </div>
                  </div>

                  <div className="mt-8 flex flex-wrap gap-4">
                    <div className="flex items-center gap-2 text-sm text-slate-300">
                      <CheckCircle2 className="w-5 h-5 text-green-400" />
                      <span>Luggage Handling</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-300">
                      <CheckCircle2 className="w-5 h-5 text-green-400" />
                      <span>Transport Arrangement</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-300">
                      <CheckCircle2 className="w-5 h-5 text-green-400" />
                      <span>Live Location Tracking</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-300">
                      <CheckCircle2 className="w-5 h-5 text-green-400" />
                      <span>24/7 Support</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Package 1 - Airport Services */}
              <div className="group bg-slate-900 text-white p-10 lg:p-16 rounded-3xl hover:scale-[1.01] transition-transform">
                <div className="grid lg:grid-cols-[auto_1fr] gap-8 items-center">
                  <div className="w-20 h-20 bg-white/10 backdrop-blur rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Plane className="w-10 h-10" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold uppercase tracking-wider text-slate-400 mb-3">Package 1</div>
                    <h3 className="text-4xl lg:text-5xl font-bold mb-4">Airport Arrival & Departure</h3>
                    <p className="text-xl text-slate-300 leading-relaxed max-w-3xl mb-6">
                      Complete airport assistance from arrival to home delivery, or from home to boarding gate. Our
                      professional guide handles all aspects of airport travel with care and efficiency.
                    </p>
                    <div className="flex flex-wrap gap-3">
                      <span className="px-3 py-1.5 bg-white/10 rounded-full text-sm">Airport to Home</span>
                      <span className="px-3 py-1.5 bg-white/10 rounded-full text-sm">Home to Airport</span>
                      <span className="px-3 py-1.5 bg-white/10 rounded-full text-sm">Check-in Assistance</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Package 1 - Train & Bus Stations - Side by side */}
              <div className="grid lg:grid-cols-2 gap-8">
                <div className="bg-slate-700 text-white p-10 rounded-3xl hover:scale-[1.02] transition-transform">
                  <div className="w-16 h-16 bg-white/10 backdrop-blur rounded-2xl flex items-center justify-center mb-6">
                    <Train className="w-8 h-8" />
                  </div>
                  <div className="text-sm font-semibold uppercase tracking-wider text-slate-400 mb-3">Package 1</div>
                  <h3 className="text-3xl font-bold mb-4">Train Station Services</h3>
                  <p className="text-lg text-slate-300 leading-relaxed mb-4">
                    Escort services from Kamalapur Station to home or from home to station. Complete assistance with
                    ticketing, luggage, and safe travel.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-slate-300">
                      <MapPin className="w-4 h-4" />
                      <span>Kamalapur Station</span>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-600 text-white p-10 rounded-3xl hover:scale-[1.02] transition-transform">
                  <div className="w-16 h-16 bg-white/10 backdrop-blur rounded-2xl flex items-center justify-center mb-6">
                    <Bus className="w-8 h-8" />
                  </div>
                  <div className="text-sm font-semibold uppercase tracking-wider text-slate-400 mb-3">Package 1</div>
                  <h3 className="text-3xl font-bold mb-4">Bus Terminal Services</h3>
                  <p className="text-lg text-slate-300 leading-relaxed mb-4">
                    Comprehensive assistance at major bus terminals including Gabtoli, Saydabad, and Abdullahpur. Safe
                    escort from terminal to home and vice versa.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-slate-300">
                      <MapPin className="w-4 h-4" />
                      <span>Gabtoli, Saydabad, Abdullahpur</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Package 2 - Transport Transfers */}
              <div className="bg-gradient-to-br from-slate-800 to-slate-700 text-white p-10 lg:p-14 rounded-3xl hover:scale-[1.01] transition-transform">
                <div className="flex items-start gap-8">
                  <div className="w-20 h-20 bg-white/10 backdrop-blur rounded-2xl flex items-center justify-center flex-shrink-0">
                    <ArrowLeftRight className="w-10 h-10" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold uppercase tracking-wider text-slate-400 mb-3">Package 2</div>
                    <h3 className="text-4xl font-bold mb-4">Transport Transfers</h3>
                    <p className="text-xl text-slate-300 leading-relaxed max-w-3xl mb-6">
                      Quick transfer services from launch terminals, train stations, and bus stands to local transport
                      options like CNG, Uber, or bus services within Dhaka.
                    </p>
                    <div className="flex flex-wrap gap-3">
                      <span className="px-4 py-2 bg-white/10 rounded-full text-sm">Launch to Transport</span>
                      <span className="px-4 py-2 bg-white/10 rounded-full text-sm">Kamalapur to Transport</span>
                      <span className="px-4 py-2 bg-white/10 rounded-full text-sm">Bus Stand to Transport</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Package 3 & 4 - Intercity and Village */}
              <div className="grid lg:grid-cols-2 gap-8">
                <div className="bg-slate-800 text-white p-10 rounded-3xl hover:scale-[1.02] transition-transform">
                  <div className="w-16 h-16 bg-white/10 backdrop-blur rounded-2xl flex items-center justify-center mb-6">
                    <Car className="w-8 h-8" />
                  </div>
                  <div className="text-sm font-semibold uppercase tracking-wider text-slate-400 mb-3">Package 3</div>
                  <h3 className="text-3xl font-bold mb-4">Intercity Travel</h3>
                  <p className="text-lg text-slate-300 leading-relaxed">
                    Safe companionship for travel within Dhaka city from one home to another. Perfect for elderly
                    travelers or those who need assistance during city journeys.
                  </p>
                </div>

                <div className="bg-slate-100 text-slate-900 p-10 rounded-3xl border-2 border-slate-200 hover:border-slate-900 transition-colors">
                  <div className="w-16 h-16 bg-slate-900 rounded-2xl flex items-center justify-center mb-6">
                    <HomeIcon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-sm font-semibold uppercase tracking-wider text-slate-600 mb-3">Package 4</div>
                  <h3 className="text-3xl font-bold mb-4">Exclusive Village Companion</h3>
                  <p className="text-lg text-slate-600 leading-relaxed">
                    24-hour comprehensive assistance for village visits. Full-day companionship ensuring safety and
                    support from Dhaka to village and back.
                  </p>
                </div>
              </div>

              {/* Package 5 & 6 - Medical services */}
              <div className="grid lg:grid-cols-2 gap-8">
                <div className="bg-slate-800 text-white p-10 rounded-3xl hover:scale-[1.02] transition-transform">
                  <div className="w-16 h-16 bg-white/10 backdrop-blur rounded-2xl flex items-center justify-center mb-6">
                    <Hospital className="w-8 h-8" />
                  </div>
                  <div className="text-sm font-semibold uppercase tracking-wider text-slate-400 mb-3">Package 5</div>
                  <h3 className="text-3xl font-bold mb-4">Medical All-Day Assistance</h3>
                  <p className="text-lg text-slate-300 leading-relaxed mb-4">
                    Full-day hospital companionship from launch/train/bus terminal. Our guide accompanies through entire
                    medical consultation, takes notes, and provides digital reports to family members abroad.
                  </p>
                  <div className="flex items-center gap-2 text-sm text-slate-400">
                    <Ambulance className="w-4 h-4" />
                    <span>Ambulance arrangement available</span>
                  </div>
                </div>

                <div className="bg-slate-700 text-white p-10 rounded-3xl hover:scale-[1.02] transition-transform">
                  <div className="w-16 h-16 bg-white/10 backdrop-blur rounded-2xl flex items-center justify-center mb-6">
                    <FileText className="w-8 h-8" />
                  </div>
                  <div className="text-sm font-semibold uppercase tracking-wider text-slate-400 mb-3">Package 6</div>
                  <h3 className="text-3xl font-bold mb-4">Medical Wait & Report Collection</h3>
                  <p className="text-lg text-slate-300 leading-relaxed mb-4">
                    From home to hospital assistance with wait service. Our guide stays throughout the doctor's visit,
                    takes prescription notes, and sends digital reports to family members.
                  </p>
                  <div className="flex items-center gap-2 text-sm text-slate-400">
                    <Clock className="w-4 h-4" />
                    <span>Perfect for working families</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Service Locations */}
            <div className="mt-20 bg-slate-50 p-12 rounded-3xl border border-slate-200">
              <div className="flex items-start gap-6 mb-8">
                <div className="w-16 h-16 bg-slate-900 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold mb-3 text-slate-900">7+ Service Locations</h3>
                  <p className="text-lg text-slate-600">We serve major areas across Dhaka</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-3">
                {["Gulshan", "Banani", "Dhanmondi", "Uttara", "Mirpur", "Mohammadpur", "Shahbagh"].map((location) => (
                  <span
                    key={location}
                    className="px-6 py-3 bg-white border-2 border-slate-900 rounded-full text-base font-semibold text-slate-900 hover:bg-slate-900 hover:text-white transition-colors cursor-default"
                  >
                    {location}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-32 bg-slate-50">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-2xl mb-20">
              <h2 className="text-[clamp(2rem,6vw,4rem)] font-bold leading-tight mb-6 text-slate-900">How it works</h2>
              <p className="text-xl text-slate-600">Simple, transparent, and secure from booking to completion.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  number: "01",
                  icon: Phone,
                  title: "Contact us",
                  description: "Reach out via phone, email, or WhatsApp with your requirements",
                },
                {
                  number: "02",
                  icon: CheckCircle2,
                  title: "Verification call",
                  description: "Receive confirmation call with guide details and uniform photo",
                },
                {
                  number: "03",
                  icon: Users,
                  title: "Meet your guide",
                  description: "Our uniformed, ID-verified staff meets you at the designated location",
                },
                {
                  number: "04",
                  icon: MapPin,
                  title: "Safe journey",
                  description: "Live tracking via WhatsApp ensures complete peace of mind",
                },
              ].map((step, index) => (
                <div key={index} className="relative">
                  <div className="bg-white p-8 rounded-2xl border border-slate-200 h-full">
                    <div className="text-6xl font-bold text-slate-200 mb-4">{step.number}</div>
                    <div className="w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center mb-6">
                      <step.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3 text-slate-900">{step.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{step.description}</p>
                  </div>
                  {index < 3 && <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-slate-300" />}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Safety Section */}
        <section className="py-32 bg-slate-900 text-white">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-20 items-center mb-32">
              <div>
                <h2 className="text-[clamp(2rem,6vw,4rem)] font-bold leading-tight mb-8">
                  Safety built into every interaction
                </h2>
                <p className="text-xl text-slate-400 mb-12">
                  Multiple layers of verification and real-time tracking ensure complete peace of mind.
                </p>
              </div>
              <div className="relative">
                <img
                  src="/uniformed-professional-staff-with-id-badge-showing.jpg"
                  alt="Verified staff"
                  className="w-full aspect-[4/3] object-cover rounded-2xl"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Shield,
                  title: "Professional uniforms",
                  description: "Standardized uniform for immediate identification",
                },
                {
                  icon: CheckCircle2,
                  title: "Complete verification",
                  description: "Thorough background checks for every team member",
                },
                {
                  icon: Phone,
                  title: "Pre-service confirmation",
                  description: "Receive guide photo before service begins",
                },
                {
                  icon: MapPin,
                  title: "Live tracking",
                  description: "Real-time WhatsApp location sharing",
                },
              ].map((feature, index) => (
                <div key={index} className="bg-white/5 backdrop-blur p-8 rounded-xl border border-white/10">
                  <feature.icon className="w-12 h-12 mb-6 text-slate-300" />
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-32 bg-white overflow-hidden">
          <div className="container mx-auto px-4 lg:px-8 mb-16">
            <div className="max-w-3xl">
              <h2 className="text-[clamp(2rem,6vw,4rem)] font-bold leading-tight mb-6 text-slate-900">
                Trusted by families across Dhaka
              </h2>
              <p className="text-xl text-slate-600">Real experiences from people who rely on Guide.</p>
            </div>
          </div>

          <div className="flex gap-8 px-4 lg:px-8 overflow-x-auto pb-8 snap-x snap-mandatory no-scrollbar">
            {[
              {
                name: "Farhan Ahmed",
                role: "Business Executive",
                content:
                  "Guide made my mother's airport pickup seamless. The uniformed staff was professional and the live tracking gave us complete peace of mind.",
              },
              {
                name: "Tasneem Rahman",
                role: "Healthcare Professional",
                content:
                  "Excellent medical assistance service. The guide waited patiently throughout the day and helped collect all reports.",
              },
              {
                name: "Imran Hossain",
                role: "Engineer",
                content:
                  "Used their intercity service for my elderly father's village visit. The verification process and safety measures are outstanding.",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[90vw] md:w-[500px] bg-slate-50 p-12 rounded-2xl snap-start border border-slate-200"
              >
                <div className="flex gap-2 mb-8">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <div key={i} className="w-2 h-2 bg-slate-900 rounded-full" />
                  ))}
                </div>
                <p className="text-2xl leading-relaxed mb-12 font-medium text-slate-900">{testimonial.content}</p>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-slate-900 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold text-lg text-slate-900">{testimonial.name}</div>
                    <div className="text-slate-600">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-32 bg-slate-50">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mb-20">
              <h2 className="text-[clamp(2rem,6vw,4rem)] font-bold leading-tight mb-6 text-slate-900">
                Frequently asked questions
              </h2>
              <p className="text-xl text-slate-600">Everything you need to know about our services.</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 max-w-6xl">
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
                    "We serve 7+ locations across Dhaka including Gulshan, Banani, Dhanmondi, Uttara, Mirpur, Mohammadpur, and Shahbagh. We're continuously expanding to more areas.",
                },
                {
                  question: "How do I book a service?",
                  answer:
                    "Simply contact us via phone, WhatsApp, or our contact form. Our team will discuss your requirements and arrange everything for you.",
                },
                {
                  question: "Can I track my companion in real-time?",
                  answer:
                    "Yes! We provide live location sharing via WhatsApp throughout the entire journey for complete transparency and peace of mind.",
                },
              ].map((faq, index) => (
                <div key={index} className="bg-white p-8 rounded-2xl border border-slate-200">
                  <h3 className="text-xl font-bold mb-4 text-slate-900">{faq.question}</h3>
                  <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-40 bg-slate-900 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
          </div>

          <div className="container mx-auto px-4 lg:px-8 relative">
            <div className="max-w-5xl mx-auto text-center space-y-12">
              <h2 className="text-[clamp(2.5rem,8vw,6rem)] font-bold leading-[0.95]">
                Ready to experience trusted companionship?
              </h2>
              <p className="text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                Contact us today for a personalized quote based on your specific needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
                <Button
                  size="lg"
                  className="h-16 px-12 text-lg rounded-full bg-white text-slate-900 hover:bg-slate-100 shadow-2xl"
                  asChild
                >
                  <Link href="/contact">Get in touch</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="h-16 px-12 text-lg rounded-full border-2 border-white text-white hover:bg-white hover:text-slate-900 bg-transparent"
                  asChild
                >
                  <a href="tel:+8801309204120" className="flex items-center gap-3">
                    <Phone className="w-6 h-6" />
                    Call now
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  )
}
