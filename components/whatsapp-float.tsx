"use client"

import { MessageCircle } from "lucide-react"
import { useState } from "react"

export function WhatsAppFloat() {
  const [isHovered, setIsHovered] = useState(false)
  const whatsappNumber = "8801309204120"
  const message = "Hi, I would like to inquire about Guide services."

  return (
    <a
      href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-[#25D366] text-white rounded-full shadow-2xl hover:shadow-[0_10px_40px_rgba(37,211,102,0.4)] transition-all duration-300 group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-label="Chat on WhatsApp"
    >
      <div className="flex items-center gap-3 px-5 py-4">
        <MessageCircle className="w-6 h-6" />
        <span
          className={`font-semibold whitespace-nowrap overflow-hidden transition-all duration-300 ${
            isHovered ? "max-w-[200px] opacity-100" : "max-w-0 opacity-0"
          }`}
        >
          Chat with us
        </span>
      </div>
    </a>
  )
}
