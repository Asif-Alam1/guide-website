import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"

export function Logo({
  onDark = false,
  className,
}: {
  onDark?: boolean
  className?: string
}) {
  return (
    <Link
      href="/"
      className={cn("inline-flex items-center", className)}
      aria-label="Guide — home"
    >
      <Image
        src="/guide-logo-web.png"
        alt="Guide — নিরাপদ যাত্রার নিশ্চয়তা"
        width={480}
        height={262}
        priority
        className={cn(
          "w-auto",
          onDark ? "h-20 rounded-lg bg-white px-3 py-2" : "h-14 lg:h-16",
        )}
      />
    </Link>
  )
}
