import Head from 'next/head'
import NavBar from './Global/Nav/index'
import FloatingGroup from './Global/FloatingButtons/index'
import Footer from './Global/Footer/index'
export const siteTitle = 'CCLAM | Cámara de Comercio y Producción de Lambayeque'

export default function Layout({ children, home }) {
  return (
    <>
      <Head>
        <title>{siteTitle}</title>
        <meta name="title" content={siteTitle} />
        <meta name="description" content="Cámara de Comercio y Producción de Lambayeque" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://cclam.org.pe/" />
        <meta property="og:title" content={siteTitle} />
        <meta property="og:description" content="Cámara de Comercio y Producción de Lambayeque" />
        <meta property="og:image" content="https://www.cclam.org.pe/images/logocclam.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://cclam.org.pe/" />
        <meta property="twitter:title" content={siteTitle} />
        <meta property="twitter:description" content="Cámara de Comercio y Producción de Lambayeque" />
        <meta property="twitter:image" content="https://www.cclam.org.pe/images/logocclam.png" />

        <link rel="icon" href={`https://www.cclam.org.pe/favicon.ico`} />
        <meta name="theme-color" media="(prefers-color-scheme: light)" content="white" />
        <link rel="apple-touch-icon" href="https://www.cclam.org.pe/favicon.ico" />
      </Head>
      <FloatingGroup />
      <NavBar />
      <main className="bg-themeWhite font-poppins">{children}</main>
      <Footer />
    </>
  )
}