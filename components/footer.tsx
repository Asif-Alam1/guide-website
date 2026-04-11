import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, Globe, MapPin } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16 mb-16">
          <div className="lg:col-span-5 space-y-6">
            <Link href="/" className="flex items-center">
              <Image
                src="/guide-logo.png"
                alt="Guide - নিরাপদ যাত্রার নিশ্চয়তা"
                width={200}
                height={67}
                className="h-14 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-lg text-gray-400 leading-relaxed max-w-md">
              Your trusted companion service in Dhaka. Safety is our guarantee.
            </p>
            <p className="text-lg font-semibold text-blue-400">নিরাপত্তাই আমাদের প্রতিশ্রুতি</p>
          </div>

          <div className="lg:col-span-3">
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              {[
                { name: "About Us", href: "/about" },
                { name: "Services", href: "/services" },
                { name: "Trust & Safety", href: "/trust-safety" },
                { name: "Testimonials", href: "/testimonials" },
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4">
            <h3 className="text-lg font-bold mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-gray-400">
                <Phone className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <a href="tel:+8801309204120" className="hover:text-white transition-colors">
                  +880 1309 204120
                </a>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Mail className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <a href="mailto:guide@gmail.com" className="hover:text-white transition-colors">
                  guide@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Globe className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <a
                  href="https://www.guide.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  www.guide.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <span>Serving Dhaka, Bangladesh</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-gray-400">© {currentYear} Guide. All rights reserved.</p>
            <div className="flex items-center gap-8">
              <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                Privacy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
                Terms
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
