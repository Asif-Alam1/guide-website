export const PHONE_DISPLAY = "+880 1815 558785"
export const PHONE_TEL = "+8801815558785"
export const WHATSAPP_NUMBER = "8801815558785"
export const EMAIL = "info.bdguide@gmail.com"
export const ADDRESS = "299, Free School Street, Banglamotor, Dhaka"

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.guide-bd.com"

export function waLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}

export const AREAS = [
  "Gulshan",
  "Banani",
  "Dhanmondi",
  "Uttara",
  "Mirpur",
  "Mohammadpur",
  "Shahbagh",
]

/* Honest, human pre-fills — one per service and per placement, so replies
   arrive with context and Asif knows which button was pressed without analytics. */
export const PREFILL = {
  hero: "Hi Guide, I need a companion for a family member in Dhaka. Can you tell me how it works?",
  float: "Hi Guide, I have a question about your companion service.",
  cta: "Hi Guide, I'd like to book a companion. Can we discuss the details?",
  hospitalCompanion:
    "Hi Guide, I need a hospital companion for a family member's doctor visit. Can you share availability and pricing?",
  hospitalAttendant:
    "Hi Guide, I need an attendant to stay with an admitted patient. Can you share how overnight care works?",
  therapy:
    "Hi Guide, I need a companion for regular therapy or dialysis visits. Can you share how recurring bookings work?",
  reports:
    "Hi Guide, I need someone to collect medical reports/medicines on my family's behalf. Can you help?",
  terminal:
    "Hi Guide, I need a pickup escort at the airport / launch terminal for a family member. Can you share details?",
  intercity:
    "Hi Guide, I need a travel companion for an intercity or village trip. Can you share how it works?",
} as const

export type ServiceDef = {
  id: string
  nameEn: string
  nameBn: string
  description: string
  includes: string[]
  prefill: string
}

export const SERVICES: ServiceDef[] = [
  {
    id: "hospital-companion",
    nameEn: "Hospital Companion",
    nameBn: "হাসপাতাল সঙ্গী",
    description:
      "Our core service. A Guide escorts your family member from home to the hospital, sits through the consultation, writes down the doctor's advice, buys the prescribed medicines, collects test reports, and brings them safely home — then sends the full record to you on WhatsApp, wherever you are.",
    includes: [
      "Door-to-door escort, both ways",
      "Doctor's notes taken during consultation",
      "Prescribed medicines purchased",
      "Test reports collected & sent digitally",
      "Help arranging the appointment itself",
    ],
    prefill: PREFILL.hospitalCompanion,
  },
  {
    id: "hospital-attendant",
    nameEn: "Hospital Attendant",
    nameBn: "হাসপাতাল সেবক",
    description:
      "Overnight or 24-hour supervision for admitted patients. When you can't stay at the hospital, a Guide stays — keeping you informed the whole time.",
    includes: ["Overnight or 24-hour shifts", "Regular WhatsApp updates to family"],
    prefill: PREFILL.hospitalAttendant,
  },
  {
    id: "therapy-dialysis",
    nameEn: "Therapy & Dialysis Escort",
    nameBn: "থেরাপি ও ডায়ালাইসিস",
    description:
      "Escort to recurring treatments — physiotherapy or rehabilitation sessions at CRP, dialysis appointments, and other regular hospital visits — with the same door-to-door care, every single time.",
    includes: ["Recurring visits, same standard", "CRP, dialysis & rehabilitation centers"],
    prefill: PREFILL.therapy,
  },
  {
    id: "report-medicine",
    nameEn: "Report & Medicine Collection",
    nameBn: "রিপোর্ট ও ওষুধ সংগ্রহ",
    description:
      "Test reports and prescribed medicines picked up from hospitals and pharmacies on your behalf, delivered to the patient's home, with digital copies sent to family abroad.",
    includes: ["Pharmacy & diagnostic pickup", "Digital copies to family abroad"],
    prefill: PREFILL.reports,
  },
  {
    id: "terminal-escort",
    nameEn: "Airport & Terminal Escort",
    nameBn: "টার্মিনাল এসকর্ট",
    description:
      "Safe pickup and drop-off at the airport, Sadarghat launch terminal, train stations, and bus terminals — luggage handled, transport arranged, live location shared until they're home. We also escort family members from one home to another within the city.",
    includes: ["Arrival pickup & departure drop-off", "Luggage help & transport arrangement"],
    prefill: PREFILL.terminal,
  },
  {
    id: "intercity-companion",
    nameEn: "Intercity & Village Companion",
    nameBn: "দূরযাত্রার সঙ্গী",
    description:
      "A trusted companion for journeys beyond Dhaka — intercity trips or full-day village visits — and for the reverse: bringing a family member from outside Dhaka into the city to see a doctor.",
    includes: ["Full-day accompaniment", "Ideal for elderly travelers"],
    prefill: PREFILL.intercity,
  },
]
