import Head from 'next/head'
import Layout, { siteTitle } from '../../components/layout'
import { getNoticiasData } from '../../lib/contigoempresa'
import NoticiasContainer from '../../components/ContigoEmpresa/NoticiasContainer'

export default function Noticias({ noticiasData }) {
    return (
        <Layout>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <div className="min-h-screen bg-themeWhite">
                <div className="pt-36 lg:pt-20 text-center">
                    <h1 className="text-xl font-black text-themeLightBlue ">GALERÍA<span className="block text-black text-5xl">Noticias</span></h1>
                </div>
                <div className="w-full lg:px-14 px-6 py-6 lg:py-20">
                    <NoticiasContainer noticiasData={noticiasData} />
                </div>
            </div>
        </Layout>
    )
}

export async function getStaticProps() {
    const noticiasData = await getNoticiasData(20)
    return {
        props: {
            noticiasData
        }
    }
}