import { ADDRESS_EN, PHONE_DISPLAY } from "@/lib/site"
import type { Dict } from "@/lib/content/bn"

/* English — the secondary language, written for the diaspora audience.
   Typed against the Bangla dictionary, so a missing key is a build error. */
export const en: Dict = {
  meta: {
    localeName: "English",
    switchTo: "বাংলা",
    switchAria: "বাংলায় দেখুন",
    title: "Guide — Medical Companion Service in Dhaka",
    titleTemplate: "%s | Guide",
    description:
      "A background-checked, uniformed companion for your family's hospital visits in Dhaka — consultation notes, medicine purchase, report collection, and live WhatsApp updates to family anywhere in the world.",
    keywords: [
      "medical companion Dhaka",
      "hospital companion Bangladesh",
      "patient escort Dhaka",
      "elderly care Dhaka",
      "hospital attendant Dhaka",
      "dialysis escort Dhaka",
      "airport pickup Dhaka",
      "Sadarghat escort",
    ],
    ogTitle: "Guide — When you can't be there",
    ogDescription:
      "Someone trustworthy walks the whole route with your family — hospital visits, reports, medicines, terminals — with live WhatsApp updates to you, anywhere.",
    ogAlt: "A uniformed Guide accompanying an elderly man on a street in Dhaka",
  },

  nav: {
    services: "Services",
    how: "How it works",
    about: "About",
    contact: "Contact",
    terms: "Terms",
    home: "Home",
    mainNav: "Main",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    skip: "Skip to content",
  },

  common: {
    whatsapp: "Message us on WhatsApp",
    whatsappShort: "WhatsApp",
    whatsappAsk: "Ask us on WhatsApp",
    call: "Call",
    phone: PHONE_DISPLAY,
    replyWindow: "Replies within ~30 min, 9am–11pm Dhaka time",
    bookAhead: "Book at least 3–4 hours ahead",
    seeTerms: "see all terms",
    bookService: "Book this service",
    askAbout: "Ask about this",
    seeHow: "See how a visit works",
    available: "Available 24/7 · Dhaka, Bangladesh",
    floatAria: "Chat with Guide on WhatsApp",
  },

  home: {
    heroKicker: "On your behalf, beside the people you love",
    heroTitleLead: "When you can't be there,",
    heroTitleHighlight: "a Guide is.",
    heroLead:
      "Guide sends a background-checked, uniformed companion with your family member in Dhaka — to the hospital and back, through consultations, pharmacies, and report desks — with live updates on WhatsApp to you, anywhere in the world.",
    heroChips: [
      "Uniformed & ID-verified",
      "Live location on WhatsApp",
      "Reports sent to family abroad",
    ],
    heroPhotoAlt:
      "A uniformed Guide holding the hand of an elderly woman with a walking frame in a Dhaka lane",
    heroPhotoCaption: "9:12 AM — the Guide is at the door",

    routeWaymark: "Hospital Visit",
    routeTitle: "Home to Hospital and return to Home",
    routeLead:
      "Every Hospital Companion booking follows these six steps. You can watch it happen live.",
    routeSteps: [
      {
        title: "Our guide arrives at your door",
        body:
          "A uniformed, ID-verified Guide — whose photo you received in advance — arrives at your family member's home, on time.",
      },
      {
        title: "Start travelling with patient",
        body:
          "Uber, CNG, or ambulance arranged to your preference. Live location is shared on WhatsApp from the first minute.",
      },
      {
        title: "Inside the consultation",
        body:
          "Your Guide sits through the whole appointment and writes down everything the doctor says — advice, dosage, follow-up dates.",
      },
      {
        title: "Pharmacy & report desk",
        body:
          "Prescribed medicines purchased, tests done, reports collected — or picked up later and delivered home.",
      },
      {
        title: "Safely home again",
        body:
          "Escorted back through the door, settled in. The service isn't finished until they're home.",
      },
      {
        title: "You get the full record",
        body:
          "Doctor's notes, prescriptions, and reports arrive on your WhatsApp — whether you're in Dhanmondi or Toronto.",
      },
    ],
    routePhotoAlt:
      "A Guide taking notes beside an elderly patient seated in a hospital waiting area",
    routePhotoCaption: "Inside the chamber — what the doctor says is written down",
    routePhoto2Alt:
      "A Guide walking an elderly man with a walking frame home along a Dhaka lane",
    routePhoto2Caption: "To the door — the service ends when they are home",
    routeCta: "Book a hospital companion",

    servicesWaymark: "Services",
    servicesTitle: "Our Services",
    servicesLead:
      "Hospital Companion is the core service. Beyond it, we take on the errands that are hardest to do from far away.",
    areasLine: "Serving",
    areasExpanding: "+ expanding across Dhaka",

    safetyWaymark: "Security",
    safetyTitle: "Know exactly who is with them",
    safetyLead:
      "Trust shouldn't be asked for — it should be shown, message by message. Before and during every visit, this is what arrives on your WhatsApp.",
    safetyItems: [
      {
        term: "Verified before they join",
        detail:
          "Every Guide passes a background check and identity verification before their first assignment.",
      },
      {
        term: "Recognizable at the door",
        detail:
          "Uniform and ID badge on every visit — your family knows who they're opening the door to.",
      },
      {
        term: "Photo before, location during",
        detail:
          "Your Guide's photo arrives before service begins, live WhatsApp location runs for the whole route, and you get a confirmation call before and after every visit.",
      },
      {
        term: "Your choice of Guide",
        detail:
          "Male and female Guides are available — tell us your preference when you book.",
      },
    ],
    chat: {
      name: "Guide",
      status: "online · live location active",
      m1: "Your Guide for today's visit — photo & ID badge attached ✓",
      m1Card: "Photo · Name · Badge number",
      m1Verified: "Identity verified",
      m1Time: "9:12 AM",
      m2: "Live location shared — on the way to the hospital",
      m2Time: "10:02 AM",
      m3: "Consultation done. Sending notes & prescription 📄",
      m3Time: "12:15 PM",
      m4: "Reports collected — she is safely home 🏠",
      m4Time: "1:40 PM",
      caption: "An illustration of the updates a family receives during one visit.",
    },

    termsWaymark: "Conditions",
    termsTitle: "Be Clear about the Terms and Conditions",
    termsLead:
      "A service you trust with your family shouldn't bury its conditions. Here are the ones that matter most, before you book.",
    termsCta: "Read the full terms & conditions",
    keyTerms: [
      {
        term: "50% advance",
        detail: "Half the service fee is paid upfront; the balance is paid after the visit is complete.",
      },
      {
        term: "Book 3–4 hours ahead",
        detail:
          "Advance notice guarantees a confirmed Guide. Emergencies are taken on availability.",
      },
      {
        term: "Transport is on you",
        detail: "Your Guide arranges the Uber, CNG, or ambulance — the fare is paid by the client.",
      },
      {
        term: "Tell us the full condition",
        detail:
          "The patient's exact condition and any infectious illness must be disclosed at booking.",
      },
      {
        term: "Waiting beyond 2 hours",
        detail: "Long consultations beyond two hours may carry an additional hourly charge.",
      },
      {
        term: "Cancellation",
        detail: "Cancel 2+ hours ahead for a 10% charge; later than that, the advance is forfeited.",
      },
    ],

    faqWaymark: "FAQ",
    faqTitle: "Clients usually ask",
    faqLeadBefore: "Anything else on your mind?",
    faqLeadLink: "Ask us directly on WhatsApp",
    faqLeadAfter: "— no question is too small when it's about family.",
    faqs: [
      {
        question: "What exactly does the Hospital Companion service include?",
        answer:
          "Your Guide escorts the patient from home to the hospital, sits through the doctor's consultation, writes down the medical advice, purchases prescribed medicines, collects test reports, and brings the patient safely home. Digital copies of everything go to family members — including those abroad.",
      },
      {
        question: "I live abroad. How does this work for my parents in Dhaka?",
        answer:
          "Most of our bookings come from family members overseas. You book and coordinate everything over WhatsApp in English or Bengali, receive your Guide's photo and ID before the visit, watch the live location during it, and get the doctor's notes and reports as soon as the visit ends.",
      },
      {
        question: "How do I know I can trust the person you send?",
        answer:
          "Every Guide is background-checked and identity-verified before joining, wears a uniform and ID badge on every visit, and their photo is sent to you before service begins. Live WhatsApp location sharing runs for the entire route.",
      },
      {
        question: "Can I request a female Guide?",
        answer:
          "Yes. Both male and female Guides are available — many families prefer a female Guide for mothers and grandmothers. Just mention your preference when you book.",
      },
      {
        question: "How far in advance should I book?",
        answer:
          "At least 3–4 hours ahead for a confirmed Guide. For emergencies, message us anyway — we'll do our best based on availability.",
      },
      {
        question: "What are the payment terms?",
        answer:
          "50% of the service fee in advance, the rest after completion. Hospital bills, medicine costs, and transport fares are paid directly by the client. We'll confirm payment options with you on WhatsApp when you book.",
      },
      {
        question: "Does the Guide give medical advice?",
        answer:
          "No — and that's deliberate. Guides handle logistics: escorting, note-taking, queueing, collecting. Medical decisions stay with the doctor and your family.",
      },
    ],
  },

  services: {
    "hospital-companion": {
      name: "Hospital Companion",
      description:
        "Our core service. A Guide escorts your family member from home to the hospital, sits through the consultation, writes down the doctor's advice, buys the prescribed medicines, collects test reports, and brings them safely home — then sends the full record to you on WhatsApp, wherever you are.",
      includes: [
        "Door-to-door escort, both ways",
        "Doctor's notes taken during consultation",
        "Prescribed medicines purchased",
        "Test reports collected & sent digitally",
        "Help arranging the appointment itself",
      ],
    },
    "hospital-attendant": {
      name: "Overnight Hospital Attendant",
      description:
        "Overnight or 24-hour supervision for admitted patients. When you can't stay at the hospital, a Guide stays — keeping you informed the whole time.",
      includes: ["Overnight or 24-hour shifts", "Regular WhatsApp updates to family"],
    },
    "therapy-dialysis": {
      name: "Therapy & Dialysis Escort",
      description:
        "Escort to recurring treatments — physiotherapy or rehabilitation sessions at CRP, dialysis appointments, and other regular hospital visits — with the same door-to-door care, every single time.",
      includes: ["Recurring visits, same standard", "CRP, dialysis & rehabilitation centers"],
    },
    "report-medicine": {
      name: "Report & Medicine Collection",
      description:
        "Test reports and prescribed medicines picked up from hospitals and pharmacies on your behalf, delivered to the patient's home, with digital copies sent to family abroad.",
      includes: ["Pharmacy & diagnostic pickup", "Digital copies to family abroad"],
    },
    "terminal-escort": {
      name: "Airport & Terminal Escort",
      description:
        "Safe pickup and drop-off at the airport, Sadarghat launch terminal, train stations, and bus terminals — luggage handled, transport arranged, live location shared until they're home. We also escort family members from one home to another within the city.",
      includes: ["Arrival pickup & departure drop-off", "Luggage help & transport arrangement"],
    },
    "intercity-companion": {
      name: "Intercity & Village Companion",
      description:
        "A trusted companion for journeys beyond Dhaka — intercity trips or full-day village visits — and for the reverse: bringing a family member from outside Dhaka into the city to see a doctor.",
      includes: ["Full-day accompaniment", "Ideal for elderly travelers"],
    },
     "School or College Pickup": {
      name: "School or College pickup",
      description:
        "A trusted companion for your child when you're stuck at work and can't pick them up from school or college.",
      includes: ["Ideal for Students"],
    },
  },

  about: {
    title: "About",
    metaDescription:
      "Why Guide exists: a medical companion service built for families who can't always be there — in Dhaka or abroad. How we vet, train, and hold ourselves accountable.",
    waymark: "Why Guide!",
    heading: "Built for the family member who can't be there",
    story: [
      "Every family in Dhaka knows the phone call. Ma has a doctor's appointment on Thursday. Someone has to take the day off work, brave the traffic, sit in the waiting room, remember what the doctor said, find the pharmacy, queue for the reports. And if the family is abroad — as millions of Bangladeshi families now are — the call ends with the hardest sentence: “we'll manage somehow.”",
      "Guide exists so that nobody has to manage somehow. We send a background-checked, uniformed companion who walks the entire route with your family member — door to door — and writes everything down, so that being far away no longer means being in the dark.",
      "We are a new, small team in Dhaka, and we'd rather be honest about that than invent a track record: no fake testimonials, no inflated numbers. What we offer instead is published terms, verified people, and a live window into every visit — so trust can be earned one journey at a time.",
    ],
    valuesWaymark: "Our Values",
    valuesHeading: "What we hold ourselves to",
    values: [
      {
        word: "Full Security",
        name: "Safety before schedule",
        body:
          "A visit that runs late but ends safely is a success. A rushed one that cuts corners is not. Every protocol — verification, uniforms, live tracking — exists so that the safest option is also the default one.",
      },
      {
        word: "Care",
        name: "Care like family",
        body:
          "The people we accompany are somebody's mother, father, grandmother. Our Guides are trained to slow down, hold a hand at the stairs, and wait without checking the clock.",
      },
      {
        word: "Transparency",
        name: "Nothing to hide",
        body:
          "Our terms are published in full, our prices are quoted before you commit, and the doctor's words reach you exactly as they were said — in writing.",
      },
      {
        word: "Professionalism",
        name: "Professional, every visit",
        body:
          "Uniform, ID badge, punctuality, and a written record. The same standard whether it's a routine checkup in Dhanmondi or a 3am emergency.",
      },
    ],
    notHeadingBefore: "Just as important: what we are",
    notHeadingHighlight: "not",
    notLead:
      "Clear boundaries are part of a safe service. Knowing where our role ends tells you exactly what you're booking.",
    notList: [
      {
        title: "We are not doctors",
        body:
          "Guides take notes, ask the questions you send, and collect prescriptions — but they never give medical advice or administer medication. Medical decisions stay with the doctor and your family.",
      },
      {
        title: "We are not a transport company",
        body:
          "Your Guide arranges the Uber, CNG, or ambulance and rides along — but the transport itself, and its cost, stays in your name and under your choice.",
      },
      {
        title: "We are not a marketplace",
        body:
          "No gig workers, no strangers from an app pool. Every Guide is vetted, trained, and accountable to us — and we are accountable to you.",
      },
    ],
    coverageWaymark: "Areas",
    coverageHeading: "Where we serve",
    coverageLead:
      "We currently serve families across Dhaka and are expanding area by area — carefully, so the standard never slips.",
    expanding: "+ expanding",
    coverageCta: "Talk to us on WhatsApp",
    coverageAlt: "Or use the booking form",
  },

  contact: {
    title: "Book a Companion",
    metaDescription:
      "Book a medical companion in Dhaka — the form composes a WhatsApp message with your details. Or message and call us directly. Replies within ~30 minutes, 9am–9pm Dhaka time.",
    waymark: "Contacts",
    heading: "Book a companion",
    leadBefore:
      "The form below composes a WhatsApp message with your booking details — nothing is stored on this website. Prefer to talk first?",
    leadLink: "Message us directly",
    leadOr: "or call",
    afterHeading: "After you press send",
    afterSteps: [
      {
        title: "We reply on WhatsApp",
        body: "Usually within 30 minutes (9am–12am Dhaka time; within ~2 hours overnight).",
      },
      {
        title: "We confirm the details & price",
        body:
          "Patient's condition, hospital, timing — then a clear quote. 50% advance confirms the booking.",
      },
      {
        title: "You meet your Guide before we do anything",
        body: "Photo and ID arrive on your WhatsApp before the visit. Live location runs throughout.",
      },
    ],
    directHeading: "Direct lines",
    directWhatsApp: "WhatsApp — fastest",
    hours: "Available 24/7 for booked services. New inquiries answered 9am–12am Dhaka time.",
    address: ADDRESS_EN,
    areasHeading: "Service areas",
    areasNote: "Not on the list? Ask — we're expanding across Dhaka.",
  },

  form: {
    name: "Your name",
    namePlaceholder: "Who should we ask for?",
    phone: "Phone / WhatsApp",
    phonePlaceholder: "+880 1XXX XXXXXX",
    service: "Service",
    servicePlaceholder: "What does your family need?",
    area: "Pickup area",
    areaPlaceholder: "e.g. Dhanmondi, Uttara",
    date: "Service date",
    notes: "Anything we should know?",
    notesPlaceholder:
      "The patient's condition, hospital name, appointment time, special needs…",
    notesHelpBefore:
      "Please mention the patient's exact condition — including any infectious illness. It's required by our",
    notesHelpLink: "terms",
    notesHelpAfter: "and it keeps everyone safe.",
    previewLabel: "Your WhatsApp message, as we'll receive it",
    consentBefore: "I have read and agree to the",
    consentLink: "Terms & Conditions",
    consentAfter: "",
    submit: "Send booking request on WhatsApp",
    submitting: "Opening WhatsApp — press send there ✓",
    submitNote: "Opens WhatsApp with your details pre-filled — you press send.",
    required: "required",
    messageIntro: "Hi Guide, I'd like to book a companion.",
    labels: {
      name: "Name",
      phone: "Phone",
      service: "Service",
      area: "Pickup area",
      date: "Date",
      notes: "Details",
    },
  },

  terms: {
    title: "Terms & Conditions",
    metaDescription:
      "The full terms and conditions for Guide's medical companion and escort services in Dhaka, Bangladesh — published in plain sight.",
    waymark: "Conditions",
    heading: "Terms & Conditions",
    lead:
      "Fourteen clauses, published in full. Please read them before booking — they define exactly what we do, what we don't, and what we ask of you.",
    note: "This English text is the original version of our terms. A Bangla translation is also published.",
    clauses: [
      {
        title: "Scope of Service",
        description:
          "Our primary responsibility is to escort the patient from their residence to the hospital, diagnostic center, doctor's chamber, or therapy center, assist with the consultation or tests, and ensure their safe return home.",
      },
      {
        title: "Transportation",
        description:
          "Vehicles (Uber, CNG, or others) will be arranged according to the client's preference. While the Guide will assist in booking/arranging the transport, all transportation costs must be fully borne by the client.",
      },
      {
        title: "Emergency Ambulance",
        description:
          "Based on the patient's condition, an ambulance service will be arranged if necessary.",
      },
      {
        title: "Companion in Ambulance",
        description:
          "At least one family member or legal representative must accompany the patient inside the ambulance.",
      },
      {
        title: "Liability (Accidents)",
        description:
          "The Guide or the organization shall not be held liable for any road accidents or unforeseen circumstances occurring during transit.",
      },
      {
        title: "Liability (Physical Condition)",
        description:
          "The Guide shall not accept any responsibility or liability if the patient's physical condition deteriorates or if a fatality occurs during transit or while at the hospital.",
      },
      {
        title: "Valuable Items",
        description:
          "Clients are specifically requested not to send expensive jewelry, excessive cash, or valuable items with the patient. The Guide will not be responsible for any loss of such items.",
      },
      {
        title: "Booking Deadline",
        description:
          "To ensure confirmed service, bookings must be made at least 3-4 hours in advance. For emergencies, service will be provided subject to the availability of a Guide.",
      },
      {
        title: "Waiting Charge",
        description:
          "If the consultation or testing requires a long duration (exceeding 2 hours), additional hourly charges may apply for the extended waiting time.",
      },
      {
        title: "Provision of Information",
        description:
          "At the time of booking, the patient's exact physical condition and the presence of any infectious diseases must be clearly disclosed. The authority will not be responsible for any issues arising from the concealment of information.",
      },
      {
        title: "Payment and Other Expenses",
        description:
          "50% of the service fee must be paid in advance, and the remaining balance must be cleared upon completion of the task. Additionally, hospital bills, medicine costs, or diagnostic fees must be paid directly by the client.",
      },
      {
        title: "Medication Caution",
        description:
          "The Guide will only assist in collecting medicines as per the doctor's prescription. The Guide is not responsible for any side effects or incorrect administration of medication.",
      },
      {
        title: "Cancellation Policy",
        description:
          "To cancel a service, notification must be given at least 2 hours in advance, in which case a 10% charge will be deducted. Cancellations made less than 2 hours before the service will result in the forfeiture of the advance payment.",
      },
      {
        title: "Patient Behavior",
        description:
          "If the patient is mentally unstable or aggressive, the Guide reserves the right to suspend the service at any time for safety reasons.",
      },
    ],
    consent:
      "By availing the services of Guide, you confirm that you have read, understood, and fully consented to all the terms and conditions mentioned above.",
    askCta: "Question about a clause? Ask us",
  },

  notFound: {
    title: "Page not found",
    heading: "This page wandered off without a Guide",
    body:
      "The address you followed doesn't exist — or it moved without telling anyone. Let's get you home safely.",
    home: "Back to home",
    ask: "Ask us anything",
  },

  footer: {
    signOffLead: "নিরাপদ যাত্রার",
    signOffHighlight: "নিশ্চয়তা",
    signOffBody:
      "The assurance of a safe journey — for every hospital visit, every homecoming, every family member you can't be there for in person.",
    about:
      "A medical companion and escort service in Dhaka. Background-checked, uniformed Guides for hospital visits, report collection, and safe journeys — with live WhatsApp updates to family anywhere in the world.",
    pages: "Pages",
    contact: "Contact",
    whatsappLine: "WhatsApp — replies within ~30 min, 9am–12am",
    address: ADDRESS_EN,
    servingPrefix: "Serving",
    servingSuffix: "& more across Dhaka",
    rights: "All rights reserved.",
  },

  areas: ["Gulshan", "Banani", "Dhanmondi", "Uttara", "Mirpur", "Mohammadpur", "Jatrabari", "Tongi", "Banasree"],

  prefill: {
    hero: "Hi Guide, I need a companion for a family member in Dhaka. Can you tell me how it works?",
    float: "Hi Guide, I have a question about your companion service.",
    cta: "Hi Guide, I'd like to book a companion. Can we discuss the details?",
    terms: "Hi Guide, I have a question about your terms and conditions.",
    services: {
      "hospital-companion":
        "Hi Guide, I need a hospital companion for a family member's doctor visit. Can you share availability and pricing?",
      "hospital-attendant":
        "Hi Guide, I need an attendant to stay with an admitted patient. Can you share how overnight care works?",
      "therapy-dialysis":
        "Hi Guide, I need a companion for regular therapy or dialysis visits. Can you share how recurring bookings work?",
      "report-medicine":
        "Hi Guide, I need someone to collect medical reports/medicines on my family's behalf. Can you help?",
      "terminal-escort":
        "Hi Guide, I need a pickup escort at the airport / launch terminal for a family member. Can you share details?",
      "intercity-companion":
        "Hi Guide, I need a travel companion for an intercity or village trip. Can you share how it works?",
    },
  },
}
