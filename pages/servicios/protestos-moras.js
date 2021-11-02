import Head from 'next/head'
import Layout, { siteTitle } from '../../components/layout'
import Image from "next/image";
import CardContact from "../../components/Servicios/CardContact"

var options = [
    {
        title: 'Regularizamos',
        items: [
            'Títulos protestados.',
            'Letra de Cambio.',
            'Pagaré.',
            'Warrant.',
            'Cheques'
        ]
    },
    {
        title: 'Extendemos',
        items: [
            'Reporte detallado de Protestos Pendientes.',
            'Certíficado de Títulos regularizados.',
            'Certificado negativo de Protestos.'
        ]
    },
    {
        title: 'Realizamos',
        items: [
            'Anotaciones de Títulos Valores en Mora.',
            'Exclusiones de Protestos.',
            'Búsquedas nacionales de Protestos.'
        ]
    },
    {
        title: 'Reportes crediticios nacionales',
        items: [
            'INFOCORP.',
            'EXPERIAN.'
        ]
    },
]

export default function ProtestosYMoras() {
    return (
        <Layout>
            <Head>
                <title>CCLAM | Protestos y moras</title>
            </Head>
            <section className="min-h-screen">
                <div className="relative w-full">
                    <Image
                        src="/images/servicios/protestos/header.png"
                        width="1366"
                        height="505"
                        layout="responsive"
                    />
                </div>
                <div className="relative px-0 lg:px-10 py-5 -mt-16 lg:-mt-28">
                    <div className="bg-white w-full shadow-close px-5 lg:px-24 py-12 rounded-3xl mt-10">
                        <div className="flex flex-wrap lg:flex-nowrap">
                            <div className="w-56 mx-auto">
                                <CardContact
                                    image={
                                        <Image
                                            className="rounded-full filter brightness-95 "
                                            src="/images/servicios/protestos/encargado.png"
                                            width="600"
                                            height="600"
                                        />
                                    }
                                    area="Protestos y Moras"
                                    encargado="Vanessa Claudia Ñiquen Bazán"
                                    phone="944674614"
                                    mail="protestos@cclam.org.pe"
                                />
                            </div>
                            <div className="col-span-4 lg:pl-5">
                                <p className="text-justify mt-5 text-base font-normal">
                                    El área de Protestos y Moras de la Centenaria Cámara de Comercio y Producción de Lambayeque brinda la orientación de forma gratuita y personalizada para cuidar su imagen crediticia, regularizar protestos de manera confiable mejorando su condición de riesgo crediticio y obtener nuevos financiamientos.
                                </p>
                                <p className="text-justify mt-5 text-base font-normal">
                                    Al regularizar tu sistema crediticio, la consulta en central de riesgo es a nivel nacional con la orientación e interpretación. <span className="font-semibold">¡NO PIERDA TIEMPO Y ACCEDA AL CRÉDITO!</span>
                                </p>
                            </div>
                        </div>
                        <div className="my-14 flex flex-wrap gap-4 ">
                            {
                                options.map((op, i) =>
                                    <div key={i} className="w-64 mx-auto">
                                        <p className="text-lg font-medium mb-5">{op.title}</p>
                                        {

                                            op.items.map((it, ii) =>
                                                <div className="text-base font-light mb-2 flex" key={ii}>
                                                    <div className="mt-1 bg-blue-100 rounded-full h-4 w-4 flex justify-center flex-wrap content-center mr-2">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                        </svg>
                                                    </div>
                                                    <div className="w-auto">
                                                        {it}
                                                    </div>
                                                </div>
                                            )
                                        }
                                    </div>
                                )
                            }
                        </div>
                        <div className="flex flex-wrap justify-between my-20">
                            <div className="relative w-full lg:w-96 mb-5 lg:mb-0">
                                <Image
                                    className="shadow-xl rounded-xl"
                                    src="/images/servicios/protestos/portalweb.jpg"
                                    width="1024"
                                    height="495"
                                />
                            </div>
                            <div className="relative w-full lg:w-7/12 lg:ml-5 rounded-xl shadow-close">
                                <Image
                                    className="rounded-xl shadow-close"
                                    src="/images/servicios/protestos/campaign.png"
                                    width="480"
                                    height="480"
                                    layout="responsive"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}