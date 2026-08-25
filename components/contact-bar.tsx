import { Phone } from "lucide-react"

import { WhatsAppIcon } from "@/components/whatsapp-icon"
import { getDict, type Locale } from "@/lib/i18n"
import { PHONE_TEL, waLink } from "@/lib/site"

/* On a phone the two things a worried family wants are always within thumb
   reach; on a desktop the same actions collapse into the usual bubble. */
export function ContactBar({ locale }: { locale: Locale }) {
  const d = getDict(locale)
  const href = waLink(d.prefill.float)

  return (
    <>
      <div className="h-[5.5rem] md:hidden print:hidden" aria-hidden="true" />

      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 px-4 pt-3 backdrop-blur md:hidden print:hidden">
        <div
          className="flex items-center gap-3"
          style={{ paddingBottom: "calc(0.75rem + env(safe-area-inset-bottom, 0px))" }}
        >
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-accent flex-1 !px-4"
          >
            <WhatsAppIcon className="h-5 w-5" />
            {d.common.whatsappShort}
          </a>
          <a
            href={`tel:${PHONE_TEL}`}
            className="btn btn-outline !px-5"
            aria-label={`${d.common.call} ${d.common.phone}`}
          >
            <Phone className="h-5 w-5" aria-hidden="true" />
            {d.common.call}
          </a>
        </div>
      </div>

      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 hidden h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-[box-shadow,transform] duration-200 hover:scale-105 hover:shadow-xl motion-reduce:transition-none motion-reduce:hover:scale-100 md:flex print:hidden"
        aria-label={d.common.floatAria}
      >
        <WhatsAppIcon className="h-7 w-7" />
      </a>
    </>
  )
}
