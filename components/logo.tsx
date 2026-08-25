import Image from "next/image"
import Link from "next/link"

import type { Locale } from "@/lib/locale"
import { cn } from "@/lib/utils"

export function Logo({
  locale,
  onDark = false,
  className,
}: {
  locale: Locale
  onDark?: boolean
  className?: string
}) {
  return (
    <Link
      href={`/${locale}`}
      className={cn("inline-flex items-center", className)}
      aria-label="Guide — নিরাপদ যাত্রার নিশ্চয়তা"
    >
      <Image
        src="/guide-logo-web.png"
        alt="Guide — নিরাপদ যাত্রার নিশ্চয়তা"
        width={480}
        height={262}
        sizes={onDark ? "160px" : "(min-width: 1024px) 128px, 112px"}
        priority
        className={cn("w-auto", onDark ? "h-20 rounded-lg bg-white px-3 py-2" : "h-14 lg:h-16")}
      />
    </Link>
  )
}
