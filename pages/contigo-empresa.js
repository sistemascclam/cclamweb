import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import { getNoticiasData, getPronunciamientosData } from '../lib/contigoempresa'
import Link from 'next/link'
import Typing from '../components/Typing'
import Image from 'next/image'
import moment from 'moment'
import 'moment/locale/es'
moment.locale('es')
import NoticiasContainer from '../components/ContigoEmpresa/NoticiasContainer'
import PronunciamientosContainer from '../components/ContigoEmpresa/PronunciamientosContainer'

export default function ContigoEmpresa({ noticiasData, pronunciamientosData }) {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div className="min-h-screen w-full">
        <section id="contigo-empresa" className="relative w-full min-h-screen mx-auto bg-black">
          <div className="static">
            <div className="min-w-full z--10 overflow-hidden">
              <video width="1800" height="759" muted autoPlay loop playsInline>
                <source src={"videos/contigoempresa.mp4"} type="video/mp4" />
                Tu buscador no soporta este tipo de video.
              </video>
            </div>
            <div className="absolute h-full min-w-full top-0 bg-themeBlue bg-opacity-70 z-0 select-none">
            </div>
          </div>
          <div className="absolute top-10 font-bold text-5xl text-white w-full text-center">
            <Typing phrases={["CONTIGO EMPRESA"]} />
          </div>
        </section>
        <section id="noticias" className="relative w-11/12 mx-auto -mt-32 rounded-xl lg:bg-white lg:shadow-xl lg:-mt-60	lg:p-6">
          <TitleSection
            title={"Noticias"}
          />
          <NoticiasContainer noticiasData={noticiasData} />
          <div className="w-full text-center mt-8 "><Link href="/galeria/noticias"><a className="hover:text-themeLightBlue">Ver más...</a></Link></div>
        </section>
        <section id="revista-digital" className="relative w-11/12 mx-auto lg:p-6 mt-10">
          <div className="grid grid-cols-2">
            <div className="w-auto flex flex-wrap content-center">
              <p className="font-extrabold text-5xl text-left">
                Imagen empresarial
              </p>
              <p className="font-extrabold text-3xl text-left text-themeLightBlue mt-3">
                Nuestra revista institucional
              </p>
            </div>
            <div className="relative w-10/12 ml-auto rounded-2xl shadow-card transition duration-500 ease-in-out transform hover:-translate-x-5">
              <a className="" href="https://issuu.com/cclam2021/docs/imagen_empresarial_digital_-_edici_n_bicentenario_" target="_blank">
                <Image
                  className="rounded-2xl "
                  src="/images/contigoempresa/revistadigital.jpeg"
                  layout="responsive"
                  width="390"
                  height="390"
                />
              </a>
            </div>
          </div>
        </section>
        <section id="pronunciamientos" className="relative w-11/12 mx-auto lg:p-6 mt-10">
          <TitleSection
            title={"Pronunciamientos"}
            description={`La Centenaria Cámara de Comercio y Producción de Lambayeque respalda proyectos que van acorde al desarrollo y prestigio de la región Lambayeque, a través de: Comunicados a la opinión pública; Convocatorias institucionales; Conferencias de Prensa; Entrevistas de interés público; Proyección Social; entre otros.`}
          />
          <PronunciamientosContainer pronunciamientosData={pronunciamientosData} />
          <div className="w-full text-center mt-6"><Link href="/galeria/pronunciamientos"><a className="hover:text-themeLightBlue">Ver más...</a></Link></div>
        </section>
      </div>
    </Layout >
  )
}

const TitleSection = ({ title, description }) =>
  <div className="mb-6">
    <p className="font-extrabold text-4xl lg:text-4xl mb-6 flex">
      {title}
      <svg xmlns="http://www.w3.org/2000/svg" className="block h-6 w-6 my-auto ml-4 text-themeBlue animate-bounce-right" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
      </svg>
    </p>
    {
      description ?
        <p className="text-sm lg:text-lg leading-relaxed text-gray-500 font-medium mb-20 max-w-2xl">{description}</p>
        :
        ""
    }

  </div>

export async function getStaticProps() {
  const noticiasData = await getNoticiasData(6)
  const pronunciamientosData = await getPronunciamientosData(2) //POR PUEBA 2, PONER 4 DESPUÉS 
  return {
    props: {
      noticiasData,
      pronunciamientosData
    }
  }
}