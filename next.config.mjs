/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // The photographs are the heaviest thing on the page and the audience is on
    // mid-range Android over patchy data — let Next serve AVIF where it can.
    formats: ["image/avif", "image/webp"],
  },
}

export default nextConfig
