/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    domains: ['raw.githubusercontent.com'],
  },
  swcMinify: true,
}

module.exports = nextConfig
