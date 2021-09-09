import Head from 'next/head'
import Layout, { siteTitle } from '../../components/layout'
import { getPronunciamientosData } from '../../lib/contigoempresa'
import PronunciamientosContainer from '../../components/ContigoEmpresa/PronunciamientosContainer'

export default function Noticias({ pronunciamientosData }) {
    return (
        <Layout>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <div className="min-h-screen bg-themeWhite">
                <div className="pt-36 lg:pt-20 text-center">
                    <h1 className="text-xl font-black text-themeLightBlue ">GALERÍA<span className="block text-black text-5xl">Pronunciamientos</span></h1>
                </div>
                <div className="w-full lg:px-14 px-6 py-6 lg:py-20 ">
                    <PronunciamientosContainer pronunciamientosData={pronunciamientosData} />
                </div>
            </div>
        </Layout>
    )
}

export async function getStaticProps() {
    const pronunciamientosData = await getPronunciamientosData(20)
    return {
        props: {
            pronunciamientosData
        }
    }
}