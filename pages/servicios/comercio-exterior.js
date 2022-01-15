import Head from 'next/head'
import Layout from '../../components/layout'
import Image from "next/image";
import { Transition } from '@headlessui/react'
import CardContact from "../../components/Servicios/CardContact"

var options = [
    {
        title: 'Servicios del área',
        subtitle: 'Todo lo que necesitas',
        items: [
            'Asesoría para el registro de tu empresa en la Ventanilla Única de Comercio Exterior – VUCE.',
            'Asesoría para el llenado de la Declaración Jurada de Origen (D.J), en la VUCE.',
            'Emisión y Visación de Certificado de Origen: EUR. 1-A; SGP; ICO; ALADI; SGPC; otros.',
            'Asesoría para la anulación, duplicado y/o reemplazo de Certificados de Origen en la VUCE.',
            'Certificado de Cámara de Comercio y Producción de Lambayeque: Acredita el origen nacional de la mercadería a cualquier país.',
            'Certificado Libre Venta: Avala que un producto peruano es comercializado sin restricciones en el Perú.',
            'Envío de documentos al país de destino vía DHL.'
        ],
        orientation: 'normal'
    },
    {
        title: 'Exporta con nosotros',
        subtitle: 'Conoce los beneficios',
        items: [
            'Forma parte de la red empresarial más grande de la Macro Región Norte.',
            'Conoce a los empresarios de éxito que exportan con nosotros.',
            'Participa de nuestros múltiples eventos exclusivos para exportar e importar.'
        ],
        orientation: 'normal'
    },
    {
        subtitle: 'Exporta o importa',
        title: 'Requisitos',
        items: [
            'Declaración jurada del producto y exportador vigente.',
            'Factura comercial.',
            'Sello y firma del representante legal de la empresa.',
            'Pago por derecho de visación.'
        ],
        orientation: 'normal'
    },
]

export default function ComercioExterior() {
    return (
        <Layout>
            <Head>
                <title>CCLAM | Comercio exterior</title>
            </Head>
            <section className="min-h-screen">
                <div className="relative w-full">
                    <Image
                        src={`${process.env.STORAGE_URL_FT}/images/servicios/comercioexterior/header.png`}
                        width="1366"
                        height="505"
                        layout="responsive"
                    />
                </div>
                <div className="relative px-0 lg:px-10 py-5 -mt-16 lg:-mt-28">
                    <Transition
                        show={true}
                        appear={true}
                        enter="transform transition duration-500"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="transform duration-200 transition ease-in-out"
                        leaveFrom="opacity-100 "
                    >
                    <div className="bg-white w-full shadow-close px-5 lg:px-24 py-12 rounded-3xl mt-10">
                        <div className="flex flex-wrap lg:flex-nowrap">
                            <div className="w-56 mx-auto">
                                <CardContact
                                    image={
                                        <Image
                                            className="rounded-full filter brightness-95 "
                                            src={`${process.env.STORAGE_URL_FT}/images/servicios/comercioexterior/encargado.png`}
                                            width="600"
                                            height="600"
                                        />
                                    }
                                    area="Comercio exterior"
                                    encargado="Verónica Vanessa Piscoya Lazo"
                                    phone="944680348"
                                    mail="comex@cclam.org.pe"
                                />
                            </div>
                            <div className="col-span-4 lg:pl-5">
                                <p className="text-justify mt-5 text-base">
                                    El área de Comercio Exterior de la Centenaria Cámara de Comercio y Producción de Lambayeque ofrece asesorías de manera personalizada para exportar y/o importar oportunidades comerciales, precios, información de impuestos arancelarios y tratados internacionales; también verificar información actualizada en estadísticas de comercio exterior para atender las necesidades de su empresa y conocer el mercado internacional.
                                </p>
                                <p className="text-justify mt-5 text-base">
                                    Además conocer las normas técnicas, mercados estratégicos, generar nuevos contactos, participar en ruedas de negocio, ferias y eventos locales, nacionales e internacionales.
                                </p>
                            </div>
                        </div>
                        <div className="mt-5">
                            {
                                options.map((op, j) =>
                                    <Option key={j} {...op} />
                                )
                            }
                        </div>
                        <div className="flex justify-between flex-wrap my-20">
                            <div className="relative w-full lg:w-7/12 ml-5 rounded-xl shadow-close">
                                <Image
                                    className="rounded-xl shadow-close"
                                    src={`${process.env.STORAGE_URL_FT}/images/servicios/comercioexterior/big.png`}
                                    width="480"
                                    height="480"
                                    layout="responsive"
                                />
                            </div>
                            <div className="relative w-full lg:w-96 mt-5 lg:mt-0">
                                <Image
                                    className="shadow-xl rounded-xl"
                                    src={`${process.env.STORAGE_URL_FT}/images/servicios/afiliate.png`}
                                    width="480"
                                    height="480"
                                />
                            </div>
                        </div>
                    </div>
                    </Transition>
                </div>
            </section>
        </Layout>
    )
}


const Option = ({ title, subtitle, items, orientation }) =>
    <div className="py-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className={`${orientation === 'reverse' ? 'order-last text-right' : ''}`}>
            <p className="text-base text-themeLightBlue mb-1">{subtitle}</p>
            <p className="font-bold text-3xl">{title}</p>
        </div>
        <div className="col-span-2 grid grid-cols-2 gap-4 text-base font-light">
            {
                items.map((it, ii) =>
                    <div className="flex mb-4" key={ii}>
                        <div className="mt-1 bg-blue-100 rounded-full h-4 w-4 flex justify-center flex-wrap content-center mr-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                        <div className="w-auto">
                            <p>{it}</p>
                        </div>
                    </div>
                )
            }
        </div>
    </div>