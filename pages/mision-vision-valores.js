import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import CardStyled from '../components/CardStyled'

export default function MisionVisionValores() {
    return (
        <Layout>
            <Head>
                <title>CCLAM | Misión Visión y Valores</title>
            </Head>
            <section className="py-24">
                <div className="w-full flex justify-around flex-wrap ">
                    <div className="max-w-sm">
                        <CardStyled
                            col
                            right={<h2 className="text-themeLightBlue font-bold text-5xl text-center uppercase">Misión</h2>}
                            left={<p className="text-center mt-5">“Ejercer la representación de la actividad comercial, productiva y de servicios, promoviendo la competitividad con equidad y confianza, brindando servicios de calidad eficientes y oportunos a sus asociados, contribuyendo con el desarrollo económico, social y ambiental de la Región Lambayeque”.</p>}
                        />
                    </div>
                    <div className="max-w-sm">
                        <CardStyled
                            col
                            right={<h2 className="text-themeLightBlue font-bold text-5xl text-center uppercase">Visión</h2>}
                            left={<p className="text-center mt-5">“Ejercer la representación de la actividad comercial, productiva y de servicios, promoviendo la competitividad con equidad y confianza, brindando servicios de calidad eficientes y oportunos a sus asociados, contribuyendo con el desarrollo económico, social y ambiental de la Región Lambayeque”.</p>}
                        />
                    </div>
                    <div className="max-w-sm">
                        <CardStyled
                            col
                            right={<h2 className="text-themeLightBlue font-bold text-5xl text-center uppercase">Valores</h2>}
                            left={<p className="text-center mt-5">“Ejercer la representación de la actividad comercial, productiva y de servicios, promoviendo la competitividad con equidad y confianza, brindando servicios de calidad eficientes y oportunos a sus asociados, contribuyendo con el desarrollo económico, social y ambiental de la Región Lambayeque”.</p>}
                        />
                    </div>
                </div>
            </section>
        </Layout>
    )
}
