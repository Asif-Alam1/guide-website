import { readFile } from "node:fs/promises"
import { join } from "node:path"
import { ImageResponse } from "next/og"

import { LOCALES } from "@/lib/locale"

export function generateStaticParams() {
  return LOCALES.map((lang) => ({ lang }))
}

export const size = { width: 1200, height: 630 }
export const contentType = "image/png"
export const alt = "Guide — নিরাপদ যাত্রার নিশ্চয়তা. Medical companion service in Dhaka."

const WA = "wa.me/8801815558785"
const SUB = "Medical companion service in Dhaka"

/* Fetch a TTF subset from Google Fonts at build time (no UA header → truetype).
   If the network is unavailable, render with the built-in font rather than fail. */
async function loadGoogleFont(family: string, weight: number, text: string) {
  const url = `https://fonts.googleapis.com/css2?family=${family.replace(/ /g, "+")}:wght@${weight}&text=${encodeURIComponent(text)}`
  const css = await (await fetch(url)).text()
  const match = css.match(/src: url\((.+?)\) format\('(?:opentype|truetype)'\)/)
  if (!match) throw new Error(`No font URL for ${family}`)
  return await (await fetch(match[1])).arrayBuffer()
}

async function dataUri(relativePath: string, mime: string) {
  const bytes = await readFile(join(process.cwd(), "public", relativePath))
  return `data:${mime};base64,${bytes.toString("base64")}`
}

/* Satori cannot shape Bengali (matra reordering), so the Bengali half of the
   card is carried by the logo artwork, which is already an image. */
export default async function OpenGraphImage({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  const [photo, logo] = await Promise.all([
    dataUri("photos/og-base.jpg", "image/jpeg"),
    dataUri("guide-logo-web.png", "image/png"),
  ])

  let fonts: { name: string; data: ArrayBuffer; weight: 600 }[] = []
  try {
    const data = await loadGoogleFont("Anek Latin", 600, SUB + WA)
    fonts = [{ name: "Anek Latin", data, weight: 600 }]
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
          position: "relative",
          background: "#12332b",
          fontFamily: "Anek Latin",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={photo}
          alt=""
          width={1200}
          height={630}
          style={{ position: "absolute", inset: 0, objectFit: "cover" }}
        />
        <div
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 0,
            height: 250,
            background: "linear-gradient(to top, #0d2620 0%, rgba(13,38,32,0.85) 55%, rgba(13,38,32,0) 100%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            left: 56,
            right: 56,
            bottom: 48,
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={logo}
              alt=""
              height={104}
              width={191}
              style={{ background: "#ffffff", borderRadius: 12, padding: 10 }}
            />
            {lang === "en" ? (
              <div style={{ marginTop: 20, fontSize: 34, color: "#e4efe9" }}>{SUB}</div>
            ) : null}
          </div>
          <div style={{ fontSize: 28, color: "#efaf3f" }}>{WA}</div>
        </div>
      </div>
    ),
    { ...size, fonts: fonts.length ? fonts : undefined },
  )
}
