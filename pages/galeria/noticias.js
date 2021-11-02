import Head from 'next/head'
import Layout, { siteTitle } from '../../components/layout'
import { getAllNews } from '../../lib/noticias'
import NoticiasContainer from '../../components/ContigoEmpresa/NoticiasContainer'

export default function Noticias({ noticiasData }) {
    return (
        <Layout>
            <Head>
                <title>CCLAM | Noticias</title>
            </Head>
            <div className="min-h-screen bg-themeWhite">
                <div className="pt-36 lg:pt-20 text-center">
                    <h1 className="text-sm lg:text-xl md:text-xl font-black text-themeLightBlue ">GALERÍA<span className="block text-black text-2xl lg:text-5xl md:text-5xl">Noticias</span></h1>
                </div>
                <div className="w-full lg:px-14 px-6 py-6 lg:py-20">
                    <NoticiasContainer noticiasData={noticiasData} />
                </div>
            </div>
        </Layout>
    )
}

export async function getStaticProps() {
  const noticiasData = getAllNews([
    'title',
    'date',
    'slug',
    'coverImage',
    'description',
  ])

  return {
    props: { noticiasData },
  }
}