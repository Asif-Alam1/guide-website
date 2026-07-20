"use client"

import type React from "react"
import Link from "next/link"
import { useState } from "react"

import { WhatsAppIcon } from "@/components/whatsapp-icon"
import { SERVICES, waLink } from "@/lib/site"

const inputClass =
  "w-full h-12 rounded-lg border border-input bg-card px-3.5 font-display text-[0.98rem] text-foreground placeholder:text-muted-foreground/70 focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring/30"

export function BookingForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: "",
    area: "",
    date: "",
    notes: "",
  })

  const set =
    (field: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
      setForm({ ...form, [field]: e.target.value })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const service = SERVICES.find((s) => s.id === form.service)
    const lines = [
      `Hi Guide, I'd like to book a companion.`,
      ``,
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Service: ${service?.nameEn ?? form.service}`,
      `Pickup area: ${form.area}`,
      `Date: ${form.date}`,
      form.notes ? `Details: ${form.notes}` : null,
    ].filter((line): line is string => line !== null)

    window.open(waLink(lines.join("\n")), "_blank", "noopener,noreferrer")
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <label htmlFor="name" className="font-display text-[0.95rem] font-semibold text-foreground">
            Your name <span aria-hidden="true" className="text-destructive">*</span>
          </label>
          <input
            id="name"
            required
            autoComplete="name"
            placeholder="Who should we ask for?"
            value={form.name}
            onChange={set("name")}
            className={inputClass}
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="phone" className="font-display text-[0.95rem] font-semibold text-foreground">
            Phone / WhatsApp <span aria-hidden="true" className="text-destructive">*</span>
          </label>
          <input
            id="phone"
            type="tel"
            required
            autoComplete="tel"
            placeholder="+880 1XXX XXXXXX"
            value={form.phone}
            onChange={set("phone")}
            className={inputClass}
          />
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="service" className="font-display text-[0.95rem] font-semibold text-foreground">
          Service <span aria-hidden="true" className="text-destructive">*</span>
        </label>
        <select
          id="service"
          required
          value={form.service}
          onChange={set("service")}
          className={`${inputClass} appearance-none bg-[url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23617871' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E")] bg-no-repeat bg-[right_0.9rem_center] pr-10 ${form.service === "" ? "text-muted-foreground/70" : ""}`}
        >
          <option value="" disabled>
            What does your family need?
          </option>
          {SERVICES.map((s) => (
            <option key={s.id} value={s.id}>
              {s.nameEn}
            </option>
          ))}
        </select>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <label htmlFor="area" className="font-display text-[0.95rem] font-semibold text-foreground">
            Pickup area <span aria-hidden="true" className="text-destructive">*</span>
          </label>
          <input
            id="area"
            required
            placeholder="e.g. Dhanmondi, Uttara"
            value={form.area}
            onChange={set("area")}
            className={inputClass}
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="date" className="font-display text-[0.95rem] font-semibold text-foreground">
            Service date <span aria-hidden="true" className="text-destructive">*</span>
          </label>
          <input
            id="date"
            type="date"
            required
            value={form.date}
            onChange={set("date")}
            className={inputClass}
          />
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="notes" className="font-display text-[0.95rem] font-semibold text-foreground">
          Anything we should know?
        </label>
        <textarea
          id="notes"
          rows={5}
          placeholder="The patient's condition, hospital name, appointment time, special needs…"
          value={form.notes}
          onChange={set("notes")}
          className={`${inputClass} h-auto py-3 leading-relaxed`}
        />
        <p className="text-sm text-muted-foreground">
          Please mention the patient&apos;s exact condition — including any infectious illness.
          It&apos;s required by our{" "}
          <Link href="/terms" className="text-primary hover:underline underline-offset-4">
            terms
          </Link>{" "}
          and it keeps everyone safe.
        </p>
      </div>

      <label className="flex items-start gap-3 cursor-pointer">
        <input
          type="checkbox"
          required
          className="mt-1 h-4 w-4 rounded border-input accent-[oklch(0.4_0.09_165)]"
        />
        <span className="text-sm leading-relaxed text-muted-foreground font-display">
          I have read and agree to the{" "}
          <Link href="/terms" className="text-primary font-medium hover:underline underline-offset-4">
            Terms &amp; Conditions
          </Link>
        </span>
      </label>

      <button type="submit" className="btn btn-accent w-full !min-h-[3.5rem] text-[1.05rem]">
        <WhatsAppIcon className="w-5 h-5" />
        Send booking request on WhatsApp
      </button>
      <p className="text-center font-display text-sm text-muted-foreground">
        Opens WhatsApp with your details pre-filled — you press send.
      </p>
    </form>
  )
}
