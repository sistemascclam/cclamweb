/**
 * @type {import('next').NextConfig}
 */
 const nextConfig = {
    images: {
        domains: ['www.cclam.org.pe','localhost'],
    },
    env: {
      graphuri: 'http://localhost/wordpress/graphql',
    },
  }
  
  module.exports = nextConfig