"use client"

import type React from "react"
import Link from "next/link"
import { useState } from "react"

import { WhatsAppIcon } from "@/components/whatsapp-icon"
import type { Dict } from "@/lib/content/bn"
import { waLink } from "@/lib/site"

const inputClass =
  "w-full h-12 rounded-lg border border-input bg-card px-3.5 font-display text-[0.98rem] text-foreground placeholder:text-muted-foreground/85 focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring/30"

export function BookingForm({
  t,
  services,
  termsHref,
}: {
  t: Dict["form"]
  services: { id: string; name: string }[]
  termsHref: string
}) {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: "",
    area: "",
    date: "",
    notes: "",
  })
  const [sent, setSent] = useState(false)

  const set =
    (field: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
      setForm({ ...form, [field]: e.target.value })

  const composeMessage = () => {
    const service = services.find((s) => s.id === form.service)
    return [
      t.messageIntro,
      ``,
      `${t.labels.name}: ${form.name || "…"}`,
      `${t.labels.phone}: ${form.phone || "…"}`,
      `${t.labels.service}: ${service?.name ?? "…"}`,
      `${t.labels.area}: ${form.area || "…"}`,
      `${t.labels.date}: ${form.date || "…"}`,
      form.notes ? `${t.labels.notes}: ${form.notes}` : null,
    ]
      .filter((line): line is string => line !== null)
      .join("\n")
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    window.open(waLink(composeMessage()), "_blank", "noopener,noreferrer")
    setSent(true)
    window.setTimeout(() => setSent(false), 2500)
  }

  const touched = Object.values(form).some(Boolean)
  const required = (
    <span aria-hidden="true" className="text-destructive">
      *
    </span>
  )

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <label htmlFor="name" className="form-label">
            {t.name} {required}
          </label>
          <input
            id="name"
            required
            autoComplete="name"
            placeholder={t.namePlaceholder}
            value={form.name}
            onChange={set("name")}
            className={inputClass}
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="phone" className="form-label">
            {t.phone} {required}
          </label>
          <input
            id="phone"
            type="tel"
            required
            autoComplete="tel"
            dir="ltr"
            placeholder={t.phonePlaceholder}
            value={form.phone}
            onChange={set("phone")}
            className={inputClass}
          />
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="service" className="form-label">
          {t.service} {required}
        </label>
        <select
          id="service"
          required
          value={form.service}
          onChange={set("service")}
          className={`${inputClass} select-chevron ${form.service === "" ? "text-muted-foreground/85" : ""}`}
        >
          <option value="" disabled>
            {t.servicePlaceholder}
          </option>
          {services.map((s) => (
            <option key={s.id} value={s.id}>
              {s.name}
            </option>
          ))}
        </select>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <label htmlFor="area" className="form-label">
            {t.area} {required}
          </label>
          <input
            id="area"
            required
            placeholder={t.areaPlaceholder}
            value={form.area}
            onChange={set("area")}
            className={inputClass}
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="date" className="form-label">
            {t.date} {required}
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
        <label htmlFor="notes" className="form-label">
          {t.notes}
        </label>
        <textarea
          id="notes"
          rows={5}
          placeholder={t.notesPlaceholder}
          value={form.notes}
          onChange={set("notes")}
          className={`${inputClass} h-auto py-3 leading-relaxed`}
        />
        <p className="text-sm leading-relaxed text-muted-foreground">
          {t.notesHelpBefore}{" "}
          <Link href={termsHref} className="text-primary underline-offset-4 hover:underline">
            {t.notesHelpLink}
          </Link>{" "}
          {t.notesHelpAfter}
        </p>
      </div>

      {touched ? (
        <div aria-hidden="true">
          <p className="mb-2 font-display text-[0.95rem] font-semibold text-foreground">
            {t.previewLabel}
          </p>
          <div className="wa-preview">{composeMessage()}</div>
        </div>
      ) : null}

      <label className="flex cursor-pointer items-start gap-3">
        <input
          type="checkbox"
          required
          className="mt-1 h-4 w-4 rounded border-input accent-[oklch(0.4_0.09_165)]"
        />
        <span className="font-display text-sm leading-relaxed text-muted-foreground">
          {t.consentBefore}{" "}
          <Link
            href={termsHref}
            className="font-medium text-primary underline-offset-4 hover:underline"
          >
            {t.consentLink}
          </Link>{" "}
          {t.consentAfter}
        </span>
      </label>

      <button
        type="submit"
        className={`btn w-full !min-h-[3.5rem] text-[1.05rem] ${sent ? "btn-primary" : "btn-accent"}`}
      >
        <WhatsAppIcon className="h-5 w-5" />
        {sent ? t.submitting : t.submit}
      </button>
      <p className="text-center font-display text-sm text-muted-foreground">{t.submitNote}</p>
    </form>
  )
}
