import Link from "next/link"

import { WhatsAppIcon } from "@/components/whatsapp-icon"
import { bn } from "@/lib/content/bn"
import { en } from "@/lib/content/en"
import { waLink } from "@/lib/site"

/* not-found.tsx never receives params, so this page speaks both languages
   and lets the visitor pick the door they wanted. */
export default function NotFound() {
  return (
    <main id="main" className="bg-background">
      <div className="container-page py-24 lg:py-32">
        <div className="max-w-2xl">
          <svg aria-hidden="true" viewBox="0 0 320 96" fill="none" className="mb-8 w-56">
            <path
              d="M8 80 C60 80, 80 40, 130 40 S 210 70, 250 56"
              stroke="oklch(0.87 0.035 165)"
              strokeWidth="2.5"
              strokeDasharray="6 10"
            />
            <circle cx="8" cy="80" r="5" fill="oklch(0.55 0.08 165)" />
            <circle
              cx="250"
              cy="56"
              r="8"
              fill="none"
              stroke="oklch(0.78 0.14 78)"
              strokeWidth="2.5"
              strokeDasharray="3 4"
            />
          </svg>

          <h1 className="heading-1">{bn.notFound.heading}</h1>
          <p className="mt-5 max-w-[52ch] text-[length:var(--text-lead)] leading-relaxed text-muted-foreground">
            {bn.notFound.body}
          </p>

          <p lang="en" className="mt-8 max-w-[52ch] leading-relaxed text-muted-foreground">
            <strong className="font-display font-semibold text-foreground">
              {en.notFound.heading}.
            </strong>{" "}
            {en.notFound.body}
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="/bn" className="btn btn-primary">
              {bn.notFound.home}
            </Link>
            <Link href="/en" lang="en" className="btn btn-outline">
              {en.notFound.home}
            </Link>
            <a
              href={waLink(bn.prefill.float)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              <WhatsAppIcon className="h-4 w-4 text-[#25D366]" />
              {bn.notFound.ask}
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}
