import { WhatsAppIcon } from "@/components/whatsapp-icon"
import { PREFILL, waLink } from "@/lib/site"

export function WhatsAppFloat() {
  return (
    <a
      href={waLink(PREFILL.float)}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-40 w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-[box-shadow,transform] duration-200 motion-reduce:transition-none motion-reduce:hover:scale-100 flex items-center justify-center"
      style={{ marginBottom: "env(safe-area-inset-bottom, 0px)" }}
      aria-label="Chat with Guide on WhatsApp"
    >
      <WhatsAppIcon className="w-7 h-7" />
    </a>
  )
}
