import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'

export default function Asociados() {
    return (
        <Layout>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <section className="h-screen ">
                <div className="pt-40 text-center">
                    <h1 className="text-5xl font-black text-themeLightBlue">Comités gremiales</h1>
                </div>
                
            </section>
        </Layout>
    )
}