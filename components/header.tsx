"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone } from "lucide-react"
import { useState } from "react"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <nav className="container mx-auto px-4 lg:px-8" aria-label="Global">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center group">
            <Image
              src="/guide-logo.png"
              alt="Guide - নিরাপদ যাত্রার নিশ্চয়তা"
              width={180}
              height={60}
              className="h-12 w-auto group-hover:scale-105 transition-transform"
              priority
            />
          </Link>

          <div className="hidden md:flex md:gap-x-10">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-base font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost" size="sm" className="rounded-full text-muted-foreground" asChild>
              <a href="tel:+8801309204120" className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                Call Now
              </a>
            </Button>
            <Button className="rounded-full bg-primary hover:bg-primary/90 text-white" asChild>
              <Link href="/contact">Book Now</Link>
            </Button>
          </div>

          <button
            type="button"
            className="md:hidden p-2 rounded-xl text-foreground hover:bg-muted"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Toggle menu</span>
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden border-t border-border py-6">
            <div className="flex flex-col gap-6">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-lg font-medium text-muted-foreground hover:text-foreground"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex flex-col gap-3 pt-6 border-t border-border">
                <Button variant="outline" className="w-full rounded-full" asChild>
                  <a href="tel:+8801309204120" className="flex items-center justify-center gap-2">
                    <Phone className="w-4 h-4" />
                    Call Now
                  </a>
                </Button>
                <Button className="w-full rounded-full bg-primary hover:bg-primary/90" asChild>
                  <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                    Book Now
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
