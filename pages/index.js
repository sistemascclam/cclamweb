import Head from 'next/head'
import Image from 'next/image'
import Layout, { siteTitle } from '../components/layout'
import Typing from '../components/Typing'
import Carrousel from '../components/Carrousel/index'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <header className="relative h-screen bg-hero-pattern">
        <Image
          src={"/images/landing.png"}
          alt="Logo CCLAM"
          layout="fill"
          objectFit="cover"
          quality="100"
        />
        <div className="relative bottom-0 left-0 lg:pt-40 md:pt-40 sm:pt-40 pt-36 mb-3">
          <div className="text-left p-6 mx-6 mt-auto">
            <p className="text-sm lg:text-base md:text-base sm:text-base block text-yellow-400  font-semibold mb-3 tracking-widest">CÁMARA DE COMERCIO Y PRODUCCIÓN DE LAMBAYEQUE</p>
            <h1 className="text-3xl lg:text-7xl md:text-7xl sm:text-6xl tracking-tight font-extrabold text-white">
              <span className="block">SOMOS</span>
              <Typing phrases={["UNA PALABRA", "OTRA FRASE", "ULTIMA FRASE"]} />

            </h1>
            <p className="mt-3 text-white max-w-xl text-base lg:text-xl md:text-xl sm:text-xl">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.
            </p>
          </div>
          <div className="w-full my-6 py-6 flex justify-center">
            <a href="#areas" className="rounded-full h-12 w-12 bg-white flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </header>
      <section id="areas" className="relative h-screen">
        <Carrousel />
      </section>
      <section id="video" className="relative h-screen hidden lg:block md:block sm:block">
        <div className="static">
          <div className="h-screen min-w-full z--10 overflow-hidden">
            <iframe src="https://www.youtube.com/embed/-hJtGc8vMOQ?autoplay=1&mute=1&loop=1&playlist=-hJtGc8vMOQ&modestbranding=1&autohide=1&showinfo=0&controls=0"
              title="Video" frameBorder="0" width="1800" height="759" className="-translate-x-56" allowFullScreen></iframe>
          </div>
          <div className="absolute h-screen min-w-full top-0 bg-blue-900 bg-opacity-60 z-0 select-none">
          </div>
        </div>
      </section>
      <section id="convenios">
        asdsad
      </section>
    </Layout>
  )
}
