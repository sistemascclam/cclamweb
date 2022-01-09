import Head from 'next/head'
import Layout from '../../components/layout'
import Link from 'next/link'
import Typing from '../../components/Typing'
import Image from 'next/image'
import moment from 'moment'
import 'moment/locale/es'
moment.locale('es')
import NoticiasContainer from '../../components/ContigoEmpresa/NoticiasContainer'
import PronunciamientosContainer from '../../components/ContigoEmpresa/PronunciamientosContainer'
import { getOne } from "../../redux/actions/revistadigital"
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'

export default function ContigoEmpresa() {
  const dispatch = useDispatch();
  const { revistaDigitalObject } = useSelector(({ revistadigital }) => revistadigital)
  useEffect(() => {
    dispatch(getOne())
  }, [])
  return (
    <Layout>
      <Head>
        <title>CCLAM | Contigo empresa</title>
      </Head>
      <div className="min-h-screen w-full">
        <section id="contigo-empresa" className="relative w-full mx-auto bg-black">
          <div className="static">
            <div className="min-w-full overflow-hidden">
              <video width="100%" muted autoPlay loop playsInline>
                <source src={"videos/contigoempresa.mp4"} type="video/mp4" />
                Tu buscador no soporta este tipo de video.
              </video>
            </div>
            <div className="absolute min-w-full top-0 h-full bg-themeBlue bg-opacity-70 z-0 select-none">
            </div>
          </div>
          <div className="hidden lg:block absolute top-10 font-bold text-5xl text-white w-full text-center">
            <Typing phrases={["CONTIGO EMPRESA"]} />
          </div>
        </section>
        <section id="noticias" className="relative lg:w-11/12 mx-auto -mt-2 rounded-xl bg-white shadow-close lg:-mt-60	p-6">
          <TitleSection
            title={"Noticias"}
          />
          <NoticiasContainer limit={6} />
          <div className="w-full text-center mt-8 "><Link href="/galeria/noticias"><a className="hover:text-themeLightBlue">Ver más...</a></Link></div>
        </section>
        <section id="revista-digital" className="relative min-h-screen flex flex-wrap content-center w-full py-6 px-10 lg:px-20 mt-10">
          <div className="w-full flex flex-wrap justify-between ">
            <div className="w-full lg:w-5/12 flex flex-wrap content-center ">
              <p className="font-extrabold mx-auto lg:mx-0 text-center lg:text-left text-3xl lg:text-5xl md:text-5xl sm:text-6xl">
                Imagen empresarial
              </p>
              <p className="font-extrabold text-center lg:text-left text-3xl text-themeLightBlue mt-0 mb-5 lg:mt-3">
                Nuestra revista institucional
              </p>
              <Link href="/galeria/revistas-digitales"><a className="hover:text-themeLightBlue">Ver más...</a></Link>
            </div>
            <div className="relative w-full lg:w-5/12 ml-auto rounded-2xl shadow-close transition duration-500 ease-in-out transform hover:-translate-x-5">
              {
                revistaDigitalObject ?
                  <a className="" href={revistaDigitalObject.revista ? (`${process.env.STORAGE_URL_BK}${revistaDigitalObject.revista}`) : revistaDigitalObject.url} target="_blank" rel="noreferrer">
                    <Image
                      className="rounded-2xl "
                      alt="Revista empresarial"
                      src={`${process.env.STORAGE_URL_BK}${revistaDigitalObject.coverImage}`}
                      layout="responsive"
                      width="390"
                      height="390"
                    />
                  </a>
                  :
                  ""
              }
            </div>
          </div>
        </section>
        <section id="pronunciamientos" className="relative w-11/12 mx-auto lg:p-6 mt-10">
          <TitleSection
            title={"Pronunciamientos"}
            description={`La Centenaria Cámara de Comercio y Producción de Lambayeque respalda proyectos que van acorde al desarrollo y prestigio de la región Lambayeque, a través de: Comunicados a la opinión pública; Convocatorias institucionales; Conferencias de Prensa; Entrevistas de interés público; Proyección Social; entre otros.`}
          />
          <PronunciamientosContainer limit={4} />
          <div className="w-full text-center mt-6"><Link href="/galeria/pronunciamientos"><a className="hover:text-themeLightBlue">Ver más...</a></Link></div>
        </section>
        <section>
          <amp-ad width="100vw" height="320"
            type="adsense"
            data-ad-client="ca-pub-9881670143684490"
            data-ad-slot="2203285107"
            data-auto-format="rspv"
            data-full-width="">
            <div overflow=""></div>
          </amp-ad>
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
        <p className="text-sm lg:text-lg leading-relaxed text-gray-500 font-medium mb-10 max-w-2xl">{description}</p>
        :
        ""
    }

  </div>
