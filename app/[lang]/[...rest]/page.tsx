import { notFound } from "next/navigation"

/* Unmatched URLs only reach the root not-found boundary, which sits outside the
   [lang] layout and so renders unstyled. This catch-all pulls them back inside
   the locale segment, where app/[lang]/not-found.tsx can answer with a real
   404 status and the site's own chrome. */
export default function CatchAll(): never {
  notFound()
}
