/**
 * @type {import('next').NextConfig}
 */

//SORCIER temporal
// const nextConfig = {
//   basePath: '/webcclam',
//   images: {
//     domains: ['www.cclam.org.pe', 'localhost'],
//     loader: 'imgix',
//     path: 'https://cclam.org.pe',
//   },
//   env: {
//     BASE_URL: '/webcclam/',
//     API_LINK: 'https://www.cclam.org.pe/recursos.base/public/api/',
//     STORAGE_URL_FT: '/webcclam',
//     STORAGE_URL_BK: '/recursos.base/public/storage/',
//     REACT_APP_IZI_PUBLIC_KEY: '63084599:publickey_rBMYJiwriH3xOZZJq6W1rKH3jtTU1paQHgcu8bCMnySvO'
//   },
// }

//SORCIER 
// const nextConfig = {
//   images: {
//     domains: ['www.cclam.org.pe', 'localhost'],
//     loader: 'imgix',
//     path: 'https://cclam.org.pe',
//   },
//   env: {
//     BASE_URL: '/',
//     API_LINK: 'https://www.cclam.org.pe/recursos.base/public/api/',
//     STORAGE_URL_FT: '/',
//     STORAGE_URL_BK: '/recursos.base/public/storage/',
//     REACT_APP_IZI_PUBLIC_KEY: '63084599:publickey_rBMYJiwriH3xOZZJq6W1rKH3jtTU1paQHgcu8bCMnySvO'
//   },
// }

//LOCAL
// const nextConfig = {
//   images: {
//     domains: ['localhost:3000', 'localhost:8000', 'localhost','www.cclam.org.pe'],
//   },
//   env: {
//     BASE_URL: '/',
//     API_LINK: 'https://www.cclam.org.pe/recursos.base/public/api/',
//     STORAGE_URL_FT: '',
//     STORAGE_URL_BK: 'https://www.cclam.org.pe/recursos.base/public/storage/',
//     REACT_APP_IZI_PUBLIC_KEY: '63084599:testpublickey_eCcXWmaq8rKcrCiKv3kf6IkdC3H51weSJCBZo93YXupSk',
//   },
// }

//VERCEL
const nextConfig = {
  images: {
    domains: ['www.cclam.org.pe', 'localhost'],
  },
  env: {
    BASE_URL: '/',
    API_LINK: 'https://www.cclam.org.pe/recursos.base/public/api/',
    STORAGE_URL_FT: '',
    STORAGE_URL_BK: 'https://www.cclam.org.pe/recursos.base/public/storage/',
    REACT_APP_IZI_PUBLIC_KEY: '63084599:testpublickey_eCcXWmaq8rKcrCiKv3kf6IkdC3H51weSJCBZo93YXupSk'
  },
}

module.exports = nextConfig