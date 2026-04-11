"use client"

import type React from "react"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Phone, Mail, Globe, MapPin, Clock } from "lucide-react"
import { useState } from "react"

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    package: "",
    location: "",
    date: "",
    message: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // Create WhatsApp message
    const message = `*New Booking Inquiry*
    
*Name:* ${formData.name}
*Email:* ${formData.email}
*Phone:* ${formData.phone}
*Package:* ${formData.package}
*Pickup Location:* ${formData.location}
*Date:* ${formData.date}
*Additional Details:* ${formData.message}

Please contact me to discuss this booking.`

    const whatsappNumber = "8801309204120"
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`

    window.open(whatsappUrl, "_blank")

    setIsSubmitting(false)
    setFormData({
      name: "",
      email: "",
      phone: "",
      package: "",
      location: "",
      date: "",
      message: "",
    })
  }

  return (
    <div className="min-h-screen">
      <Header />

      <main>
        <section className="py-32 bg-gradient-to-b from-slate-50 to-white">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-20">
                <div className="inline-block mb-8">
                  <div className="text-sm font-semibold tracking-wider uppercase text-slate-700 mb-3">Get in touch</div>
                  <div className="h-1 w-16 bg-slate-900 mx-auto" />
                </div>
                <h1 className="text-[clamp(2.5rem,8vw,5rem)] font-bold leading-tight mb-6 text-slate-900">
                  Book your companion service
                </h1>
                <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                  Fill out the form below and our team will contact you via WhatsApp to confirm your booking.
                </p>
              </div>

              <div className="grid lg:grid-cols-5 gap-12">
                {/* Contact Form */}
                <div className="lg:col-span-3">
                  <form
                    onSubmit={handleSubmit}
                    className="space-y-8 bg-white p-10 rounded-2xl border border-slate-200 shadow-sm"
                  >
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-base font-semibold text-slate-900">
                          Full Name *
                        </Label>
                        <Input
                          id="name"
                          placeholder="Enter your name"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="h-12 rounded-xl border-slate-300 focus:border-slate-900"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-base font-semibold text-slate-900">
                          Phone Number *
                        </Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="+880 1XXX XXXXXX"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="h-12 rounded-xl border-slate-300 focus:border-slate-900"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-base font-semibold text-slate-900">
                        Email Address
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your.email@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="h-12 rounded-xl border-slate-300 focus:border-slate-900"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="package" className="text-base font-semibold text-slate-900">
                        Select Package *
                      </Label>
                      <Select
                        required
                        value={formData.package}
                        onValueChange={(value) => setFormData({ ...formData, package: value })}
                      >
                        <SelectTrigger className="h-12 rounded-xl border-slate-300 focus:border-slate-900">
                          <SelectValue placeholder="Choose a service package" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="arrival-to-home">Package 1: Arrival to Home</SelectItem>
                          <SelectItem value="departure-services">Package 2: Departure Services</SelectItem>
                          <SelectItem value="intercity">Package 3: Intercity Travel</SelectItem>
                          <SelectItem value="exclusive-village">Package 4: Exclusive Village Companion</SelectItem>
                          <SelectItem value="medical-all-day">Package 5: Medical All-Day Assistance</SelectItem>
                          <SelectItem value="medical-wait-report">
                            Package 6: Medical Wait & Report Collection
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="location" className="text-base font-semibold text-slate-900">
                          Pickup Location *
                        </Label>
                        <Input
                          id="location"
                          placeholder="e.g., Gulshan, Dhanmondi"
                          required
                          value={formData.location}
                          onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                          className="h-12 rounded-xl border-slate-300 focus:border-slate-900"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="date" className="text-base font-semibold text-slate-900">
                          Service Date *
                        </Label>
                        <Input
                          id="date"
                          type="date"
                          required
                          value={formData.date}
                          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                          className="h-12 rounded-xl border-slate-300 focus:border-slate-900"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-base font-semibold text-slate-900">
                        Additional Details
                      </Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us more about your requirements, special needs, or any questions you have..."
                        rows={6}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="rounded-xl border-slate-300 focus:border-slate-900"
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      disabled={isSubmitting}
                      className="w-full h-14 text-base rounded-xl bg-slate-900 hover:bg-slate-800"
                    >
                      {isSubmitting ? "Processing..." : "Submit Booking Request"}
                    </Button>

                    <p className="text-sm text-slate-500 text-center">
                      By submitting, you agree to be contacted via WhatsApp for booking confirmation
                    </p>
                  </form>
                </div>

                {/* Contact Information */}
                <div className="lg:col-span-2 space-y-8">
                  <div className="bg-slate-900 text-white p-10 rounded-2xl">
                    <h3 className="text-2xl font-bold mb-8">Contact Information</h3>
                    <div className="space-y-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                          <Phone className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="font-semibold mb-1">Phone</div>
                          <a href="tel:+8801309204120" className="text-slate-300 hover:text-white transition-colors">
                            +880 1309 204120
                          </a>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                          <Mail className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="font-semibold mb-1">Email</div>
                          <a
                            href="mailto:guide@gmail.com"
                            className="text-slate-300 hover:text-white transition-colors break-all"
                          >
                            guide@gmail.com
                          </a>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                          <Globe className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="font-semibold mb-1">Website</div>
                          <a
                            href="https://www.guide.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-slate-300 hover:text-white transition-colors"
                          >
                            www.guide.com
                          </a>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                          <Clock className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="font-semibold mb-1">Availability</div>
                          <p className="text-slate-300">24/7 Service</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-slate-50 p-10 rounded-2xl border border-slate-200">
                    <h3 className="text-xl font-bold mb-6 text-slate-900">Service Locations</h3>
                    <div className="flex items-start gap-4 mb-6">
                      <MapPin className="w-5 h-5 text-slate-600 flex-shrink-0 mt-1" />
                      <div className="flex flex-wrap gap-2">
                        {["Gulshan", "Banani", "Dhanmondi", "Uttara", "Mirpur", "Mohammadpur", "Shahbagh"].map(
                          (location) => (
                            <span
                              key={location}
                              className="px-3 py-1 bg-white border border-slate-200 rounded-full text-sm font-medium text-slate-700"
                            >
                              {location}
                            </span>
                          ),
                        )}
                      </div>
                    </div>
                    <p className="text-sm text-slate-600">Serving Dhaka, Bangladesh with expansion to more areas</p>
                  </div>

                  <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200">
                    <h3 className="text-lg font-bold mb-4 text-slate-900">Quick Response Time</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      We typically respond within 30 minutes during business hours and within 2 hours for overnight
                      inquiries.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
