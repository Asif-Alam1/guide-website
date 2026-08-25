import Image, { type StaticImageData } from "next/image"

import { cn } from "@/lib/utils"

/* One framed photograph with a wayfinding caption. Static import gives Next the
   dimensions and a blur placeholder, so nothing shifts while it loads. */
export function Figure({
  image,
  alt,
  caption,
  sizes,
  priority = false,
  className,
  onDark = false,
}: {
  image: StaticImageData
  alt: string
  caption?: string
  sizes: string
  priority?: boolean
  className?: string
  onDark?: boolean
}) {
  return (
    <figure className={className}>
      <div className="photo-frame">
        <Image
          src={image}
          alt={alt}
          sizes={sizes}
          priority={priority}
          placeholder="blur"
          className="h-auto w-full"
        />
      </div>
      {caption ? (
        <figcaption
          className={cn("photo-caption", onDark ? "text-white/60" : "text-muted-foreground")}
        >
          {caption}
        </figcaption>
      ) : null}
    </figure>
  )
}
