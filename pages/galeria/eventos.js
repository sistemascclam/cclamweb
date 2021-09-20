import Head from 'next/head'
import Layout, { siteTitle } from '../../components/layout'
import { getAllPronunciamientos } from '../../lib/pronunciamientos'
import PronunciamientosContainer from '../../components/ContigoEmpresa/PronunciamientosContainer'

export default function Eventos({ pronunciamientosData }) {
    return (
        <Layout>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <div className="min-h-screen bg-themeWhite">
                <div className="pt-36 lg:pt-20 text-center">
                    <h1 className="text-sm lg:text-xl md:text-xl font-black text-themeLightBlue ">GALERÍA<span className="block text-black text-2xl lg:text-5xl md:text-5xl">Eventos</span></h1>
                </div>
                <div className="w-full lg:px-14 px-6 py-6 lg:py-20 ">
                    <PronunciamientosContainer pronunciamientosData={pronunciamientosData} />
                </div>
            </div>
        </Layout>
    )
}

export async function getStaticProps() {
    const pronunciamientosData = getAllPronunciamientos([
      'title',
      'date',
      'slug',
      'coverImage',
      'description',
    ])
    return {
        props: {
            pronunciamientosData
        }
    }
}