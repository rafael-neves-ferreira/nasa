/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  reactStrictMode: true,
  images: {
    domains: ['dev-rafael-ferreira.com'],
  },
  experimental: {
    outputStandalone: true
  }
}

module.exports = nextConfig
