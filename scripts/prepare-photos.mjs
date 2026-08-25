/* Prepares the site's photographs from the client's original frames.
 *
 *   node scripts/prepare-photos.mjs /path/to/originals
 *
 * The originals are named 1.png (hospital), 2.png (street, walking frame) and
 * 3.png (alley, handhold). They arrive with unreadable text artifacts on the
 * uniform badge and on signage; each `patch` region below feather-blurs one of
 * those back into the surface. Re-check any NEW frame for broken lettering
 * before adding it here — see the Photography section of DESIGN.md.
 *
 * The originals are NOT in this repo (they are large and the client owns them);
 * point the argument at wherever they are kept. public/photos/ holds the
 * finished output, which is what the site actually ships.
 */
import sharp from 'sharp'
const SRC = process.argv[2] ?? new URL('./source-photos', import.meta.url).pathname
const OUT = new URL('../public/photos', import.meta.url).pathname

/* The generated source frames carry unreadable text artifacts (a garbled sub-line
   on the blazer badge, mangled signage). Feather-blur those patches back into the
   surface so nothing on the page reads as broken lettering. */
const mask = (w, h) => Buffer.from(
  `<svg width="${w}" height="${h}"><defs><radialGradient id="g">` +
  `<stop offset="50%" stop-color="#fff" stop-opacity="1"/>` +
  `<stop offset="100%" stop-color="#fff" stop-opacity="0"/></radialGradient></defs>` +
  `<rect width="100%" height="100%" fill="url(#g)"/></svg>`
)

async function patch(file, regions) {
  const patches = []
  for (const r of regions) {
    patches.push({
      input: await sharp(`${SRC}/${file}`).extract(r).blur(9)
        .composite([{ input: mask(r.width, r.height), blend: 'dest-in' }]).png().toBuffer(),
      left: r.left,
      top: r.top,
    })
  }
  return sharp(`${SRC}/${file}`).composite(patches).toBuffer()
}

const grade = (p) => p.modulate({ saturation: 0.94, brightness: 1.015 }).sharpen({ sigma: 0.6 })

const b3 = await patch('3.png', [{ left: 330, top: 300, width: 54, height: 66 }])
const b2 = await patch('2.png', [
  { left: 1078, top: 272, width: 120, height: 80 },
  { left: 62, top: 244, width: 96, height: 92 },
])
const b1 = await patch('1.png', [
  { left: 950, top: 228, width: 116, height: 74 },
  { left: 1140, top: 92, width: 156, height: 62 },
  { left: 1310, top: 122, width: 98, height: 56 },
])

// Hero — 4:5, upscaled 2x for retina
await grade(sharp(b3).extract({ left: 380, top: 0, width: 614, height: 768 }).resize({ width: 1228, kernel: 'lanczos3' }))
  .jpeg({ quality: 80, mozjpeg: true, chromaSubsampling: '4:4:4' }).toFile(`${OUT}/hero-dhaka-alley.jpg`)

await grade(sharp(b2).extract({ left: 0, top: 0, width: 1408, height: 590 }))
  .jpeg({ quality: 80, mozjpeg: true }).toFile(`${OUT}/street-walker.jpg`)

await grade(sharp(b1).extract({ left: 0, top: 0, width: 1408, height: 440 }))
  .jpeg({ quality: 80, mozjpeg: true }).toFile(`${OUT}/hospital-consult.jpg`)

await grade(sharp(b2).extract({ left: 140, top: 0, width: 1124, height: 590 }).resize(1200, 630, { fit: 'cover', kernel: 'lanczos3' }))
  .jpeg({ quality: 82, mozjpeg: true }).toFile(`${OUT}/og-base.jpg`)
console.log('ok')
