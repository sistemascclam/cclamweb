/**
 * @type {import('next').NextConfig}
 */
 const nextConfig = {
  images: {
    domains: ['www.cclam.org.pe', 'localhost'],
  },
  env: {
    imgIniPath: '/images/',
  },
}

module.exports = nextConfig