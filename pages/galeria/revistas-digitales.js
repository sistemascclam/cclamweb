import Head from 'next/head'
import Layout from '../../components/layout'
import RevistasDigitalesContainer from '../../components/ContigoEmpresa/RevistasDigitalesContainer'

export default function RevistasDigitales() {
    return (
        <Layout>
            <Head>
                <title>CCLAM | Revistas Digitales</title>
            </Head>
            <div className="min-h-screen bg-themeWhite">
                <div className="pt-36 lg:pt-20 text-center">
                    <h1 className="text-sm lg:text-xl md:text-xl font-black text-themeLightBlue ">GALERÍA<span className="block text-black text-2xl lg:text-5xl md:text-5xl">REVISTAS DIGITALES</span></h1>
                </div>
                <div className="w-full lg:px-14 px-6 py-6 lg:py-20 ">
                    <RevistasDigitalesContainer />
                </div>
            </div>
        </Layout>
    )
}