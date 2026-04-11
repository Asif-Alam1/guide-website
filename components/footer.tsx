import Link from "next/link"
import Image from "next/image"
import { Phone, MessageCircle, MapPin } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[oklch(0.18_0.01_50)] text-white">
      <div className="container mx-auto px-4 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-16">
          <div className="space-y-6">
            <Link href="/" className="flex items-center">
              <Image
                src="/guide-logo.png"
                alt="Guide - নিরাপদ যাত্রার নিশ্চয়তা"
                width={200}
                height={67}
                className="h-14 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-lg text-white/60 leading-relaxed max-w-md">
              Your trusted companion service in Dhaka. Safety is our guarantee.
            </p>
            <p className="text-lg font-semibold text-primary">নিরাপত্তাই আমাদের প্রতিশ্রুতি</p>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-6">Navigation</h3>
              <ul className="space-y-4">
                {[
                  { name: "Home", href: "/" },
                  { name: "About", href: "/about" },
                  { name: "Contact", href: "/contact" },
                ].map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-white/60 hover:text-white transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-6">Contact</h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-white/60">
                  <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                  <a href="tel:+8801309204120" className="hover:text-white transition-colors">
                    +880 1309 204120
                  </a>
                </li>
                <li className="flex items-center gap-3 text-white/60">
                  <MessageCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <a
                    href="https://wa.me/8801309204120"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    WhatsApp
                  </a>
                </li>
                <li className="flex items-start gap-3 text-white/60">
                  <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Serving Dhaka, Bangladesh</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10">
          <p className="text-white/60">© {currentYear} Guide. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
