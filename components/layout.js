import Head from 'next/head'
import NavBar from './Global/Nav/index'
import FloatingGroup from './Global/FloatingButtons/index'
import Footer from './Global/Footer/index'
export const siteTitle = 'CCLAM | Cámara de Comercio y Producción de Lambayeque'

export default function Layout({ children, home }) {
  return (
    <>
      <Head>
        <link rel="icon" href={`https://www.cclam.org.pe/favicon.ico`} />
        <meta name="description" content="Cámara de Comercio y Producción de Lambayeque" />
        <meta property="og:title" content="CCLAM | Página Web" />
        <meta property="og:description" content="Cámara de Comercio y Producción de Lambayeque" />
        <meta property="og:url" content={process.env.inipath} />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
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