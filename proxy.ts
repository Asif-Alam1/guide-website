import { NextResponse, type NextRequest } from "next/server"

import { DEFAULT_LOCALE, LOCALES, LOCALE_COOKIE, isLocale } from "@/lib/locale"

/* Next 16 renamed the middleware convention to proxy.
   Every page lives under /bn or /en. Anything else — "/", an old flyer link
   like "/contact", a mistyped path — gets sent to the visitor's language,
   which is Bangla unless they have switched to English before. */
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl
  if (LOCALES.some((l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`))) return

  const saved = request.cookies.get(LOCALE_COOKIE)?.value
  const locale = saved && isLocale(saved) ? saved : DEFAULT_LOCALE

  const url = request.nextUrl.clone()
  url.pathname = `/${locale}${pathname === "/" ? "" : pathname}`
  return NextResponse.redirect(url)
}

export const config = {
  matcher: ["/((?!_next|api|.*\\..*).*)"],
}
