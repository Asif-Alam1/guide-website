import { ImageResponse } from "next/og"

export const size = { width: 180, height: 180 }
export const contentType = "image/png"

export default function AppleIcon() {
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
        }}
      >
        <svg width="124" height="124" viewBox="0 0 44 44" fill="none">
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
