import { ImageResponse } from "next/og"

export const size = { width: 1200, height: 630 }
export const contentType = "image/png"
export const alt = "Guide — Medical Companion Service in Dhaka. নিরাপদ যাত্রার নিশ্চয়তা"

const HEADLINE = "Guide"
const SUB = "Medical Companion Service in Dhaka"
/* Satori can't shape Bengali (Indic matra reordering), so the card stays
   English-only; the Bengali tagline lives in the alt text as real text. */
const TAGLINE = "The assurance of a safe journey"

/* Fetch a TTF subset from Google Fonts at build time (no UA header → truetype).
   If the network is unavailable, render without custom fonts rather than fail. */
async function loadGoogleFont(family: string, weight: number, text: string) {
  const url = `https://fonts.googleapis.com/css2?family=${family.replace(/ /g, "+")}:wght@${weight}&text=${encodeURIComponent(text)}`
  const css = await (await fetch(url)).text()
  const match = css.match(/src: url\((.+?)\) format\('(?:opentype|truetype)'\)/)
  if (!match) throw new Error(`No font URL for ${family}`)
  return await (await fetch(match[1])).arrayBuffer()
}

export default async function OpenGraphImage() {
  let fonts: { name: string; data: ArrayBuffer; weight: 400 | 600 | 700 }[] = []
  try {
    const anekLatin = await loadGoogleFont(
      "Anek Latin",
      700,
      HEADLINE + SUB + TAGLINE + "wa.me/8801309204120",
    )
    fonts = [{ name: "Anek Latin", data: anekLatin, weight: 700 }]
  } catch {
    fonts = []
  }

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#123a30",
          padding: 72,
          fontFamily: "Anek Latin",
        }}
      >
        <svg
          width="1200"
          height="630"
          viewBox="0 0 1200 630"
          fill="none"
          style={{ position: "absolute", top: 0, left: 0 }}
        >
          <path
            d="M-40 560 C240 560, 300 380, 560 380 S920 180, 1260 120"
            stroke="#1e5445"
            strokeWidth="3"
            fill="none"
          />
          <circle cx="560" cy="380" r="10" fill="#1e5445" />
          <circle cx="1080" cy="150" r="14" fill="#efaf3f" />
        </svg>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 132, fontWeight: 700, color: "#ffffff", lineHeight: 1 }}>
            {HEADLINE}
          </div>
          <div
            style={{
              fontSize: 44,
              fontWeight: 700,
              color: "#efaf3f",
              marginTop: 20,
            }}
          >
            {TAGLINE}
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ fontSize: 34, color: "#cfe0d8", fontWeight: 400 }}>{SUB}</div>
          <div style={{ fontSize: 30, color: "#8fb3a5" }}>wa.me/8801309204120</div>
        </div>
      </div>
    ),
    { ...size, fonts: fonts.length ? fonts : undefined },
  )
}
