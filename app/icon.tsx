import { ImageResponse } from "next/og"

export const size = { width: 64, height: 64 }
export const contentType = "image/png"

/* Brand mark: the journey line — a route drawn from home to destination,
   marigold waypoint at the end. Hex values are sRGB conversions of the
   OKLCH brand tokens in globals.css. */
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#123a30",
          borderRadius: 14,
        }}
      >
        <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
          <path
            d="M8 36 C8 22, 20 30, 24 20 S36 10, 36 10"
            stroke="#ffffff"
            strokeWidth="4"
            strokeLinecap="round"
            fill="none"
          />
          <circle cx="8" cy="36" r="4" fill="#ffffff" />
          <circle cx="36" cy="10" r="6" fill="#efaf3f" />
        </svg>
      </div>
    ),
    size,
  )
}
