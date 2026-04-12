"use client"

import type React from "react"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Phone, MessageCircle, MapPin, Clock } from "lucide-react"
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
        <section className="grain relative overflow-hidden bg-[oklch(0.22_0.06_175)] text-white py-16 lg:py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center">
                <p className="text-sm font-medium tracking-wider uppercase text-accent mb-6">Get in touch</p>
                <h1 className="text-3xl lg:text-4xl font-bold leading-tight mb-6 text-white">
                  Book your companion service
                </h1>
                <p className="text-xl text-white/60 max-w-2xl mx-auto">
                  Fill out the form below and our team will contact you via WhatsApp to confirm your booking.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-20 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-5 gap-12">
                {/* Contact Form */}
                <div className="lg:col-span-3">
                  <form
                    onSubmit={handleSubmit}
                    className="space-y-8 bg-card p-8 lg:p-10 rounded-xl border border-border shadow-sm"
                  >
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-base font-semibold text-foreground">
                          Full Name *
                        </Label>
                        <Input
                          id="name"
                          placeholder="Enter your name"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="h-12 rounded-xl border-input focus:border-primary"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-base font-semibold text-foreground">
                          Phone Number *
                        </Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="+880 1XXX XXXXXX"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="h-12 rounded-xl border-input focus:border-primary"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-base font-semibold text-foreground">
                        Email Address
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your.email@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="h-12 rounded-xl border-input focus:border-primary"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="package" className="text-base font-semibold text-foreground">
                        Select Package *
                      </Label>
                      <Select
                        required
                        value={formData.package}
                        onValueChange={(value) => setFormData({ ...formData, package: value })}
                      >
                        <SelectTrigger className="h-12 rounded-xl border-input focus:border-primary">
                          <SelectValue placeholder="Choose a service package" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="launch-ghat">Launch Ghat Service</SelectItem>
                          <SelectItem value="terminal-pickup">Terminal Pickup & Drop-off</SelectItem>
                          <SelectItem value="transport-transfer">Transport Transfers</SelectItem>
                          <SelectItem value="intercity">Intercity Travel</SelectItem>
                          <SelectItem value="village-companion">Village Companion (24-hour)</SelectItem>
                          <SelectItem value="medical-assistance">Medical Assistance</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="location" className="text-base font-semibold text-foreground">
                          Pickup Location *
                        </Label>
                        <Input
                          id="location"
                          placeholder="e.g., Gulshan, Dhanmondi"
                          required
                          value={formData.location}
                          onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                          className="h-12 rounded-xl border-input focus:border-primary"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="date" className="text-base font-semibold text-foreground">
                          Service Date *
                        </Label>
                        <Input
                          id="date"
                          type="date"
                          required
                          value={formData.date}
                          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                          className="h-12 rounded-xl border-input focus:border-primary"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-base font-semibold text-foreground">
                        Additional Details
                      </Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us more about your requirements, special needs, or any questions you have..."
                        rows={6}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="rounded-xl border-input focus:border-primary"
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      disabled={isSubmitting}
                      className="w-full h-14 text-base rounded-xl bg-accent text-accent-foreground hover:bg-accent/90"
                    >
                      {isSubmitting ? "Processing..." : "Send via WhatsApp"}
                    </Button>

                    <p className="text-sm text-muted-foreground text-center">
                      By submitting, you agree to be contacted via WhatsApp for booking confirmation
                    </p>
                  </form>
                </div>

                {/* Contact Information */}
                <div className="lg:col-span-2 space-y-8">
                  <div className="grain relative overflow-hidden bg-[oklch(0.22_0.06_175)] text-white p-10 rounded-xl">
                    <h3 className="text-2xl font-bold mb-8">Contact Information</h3>
                    <div className="space-y-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-white/15 rounded-xl flex items-center justify-center flex-shrink-0">
                          <Phone className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="font-semibold mb-1">Phone</div>
                          <a href="tel:+8801309204120" className="text-primary-foreground/70 hover:text-white transition-colors">
                            +880 1309 204120
                          </a>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-white/15 rounded-xl flex items-center justify-center flex-shrink-0">
                          <MessageCircle className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="font-semibold mb-1">WhatsApp</div>
                          <a href="https://wa.me/8801309204120" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/70 hover:text-white transition-colors">
                            Message us
                          </a>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-white/15 rounded-xl flex items-center justify-center flex-shrink-0">
                          <Clock className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="font-semibold mb-1">Availability</div>
                          <p className="text-primary-foreground/70">24/7 Service</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-muted p-10 rounded-xl border border-border">
                    <h3 className="text-xl font-bold mb-6 text-foreground">Service Locations</h3>
                    <div className="flex items-start gap-4 mb-6">
                      <MapPin className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-1" />
                      <div className="flex flex-wrap gap-2">
                        {["Gulshan", "Banani", "Dhanmondi", "Uttara", "Mirpur", "Mohammadpur", "Shahbagh"].map(
                          (location) => (
                            <span
                              key={location}
                              className="px-3 py-1 bg-card border border-border rounded-full text-sm font-medium text-foreground"
                            >
                              {location}
                            </span>
                          ),
                        )}
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">Serving Dhaka, Bangladesh with expansion to more areas</p>
                  </div>

                  <div className="bg-muted p-8 rounded-xl border border-border">
                    <h3 className="text-lg font-bold mb-4 text-foreground">Quick Response Time</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
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
