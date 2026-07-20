import Link from "next/link"
import { cn } from "@/lib/utils"

function JourneyMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 44 44" fill="none" aria-hidden="true" className={className}>
      <rect width="44" height="44" rx="10" className="fill-brand-deep" />
      <path
        d="M8 36 C8 22, 20 30, 24 20 S36 10, 36 10"
        stroke="white"
        strokeWidth="4"
        strokeLinecap="round"
        fill="none"
      />
      <circle cx="8" cy="36" r="4" fill="white" />
      <circle cx="36" cy="10" r="6" className="fill-accent" />
    </svg>
  )
}

export function Logo({
  onDark = false,
  withTagline = false,
  className,
}: {
  onDark?: boolean
  withTagline?: boolean
  className?: string
}) {
  return (
    <Link
      href="/"
      className={cn("inline-flex items-center gap-2.5 group", className)}
      aria-label="Guide — home"
    >
      <JourneyMark className="w-9 h-9 shrink-0" />
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-display text-[1.55rem] font-bold tracking-tight leading-none",
            onDark ? "text-white" : "text-brand-deep",
          )}
        >
          Guide
        </span>
        {withTagline && (
          <span
            lang="bn"
            className={cn(
              "font-bengali !text-[0.72rem] font-medium mt-1 leading-tight",
              onDark ? "text-white/60" : "text-muted-foreground",
            )}
          >
            নিরাপদ যাত্রার নিশ্চয়তা
          </span>
        )}
      </span>
    </Link>
  )
}
