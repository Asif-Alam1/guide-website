"use client"

import { MessageCircle } from "lucide-react"

export function WhatsAppFloat() {
  const whatsappNumber = "8801309204120"
  const message = "Hi, I would like to inquire about Guide services."

  return (
    <a
      href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50 w-12 h-12 bg-[#25D366] text-white rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-all duration-200 flex items-center justify-center"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-5 h-5" />
    </a>
  )
}
