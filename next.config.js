/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'place-hold.it',
      },
      {
        protocol: 'https',
        hostname: 'images.ctfassets.net'
      }
    ]
  }
}

module.exports = nextConfig