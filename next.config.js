/**
 * @type {import('next').NextConfig}
 */
 const nextConfig = {
  // basePath: '/webcclam',
  images: {

      domains: ['www.cclam.org.pe', 'localhost'],
    
    // domains: ['www.cclam.org.pe', 'localhost'],
    // loader: 'imgix',
    // path: 'https://cclam.org.pe/webcclam',
  },
  env: {
    imgIniPath: '/images/',
    // imgIniPath: '/webcclam/images/',
  },
}

module.exports = nextConfig