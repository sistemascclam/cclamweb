import Head from 'next/head'
import Layout from '../../components/layout'
import Image from "next/image";
import Link from 'next/link'
import CardContact from "../../components/Servicios/CardContact"
import { Transition } from '@headlessui/react'

const floatingButtonConfig = { mesaVirtual: "Mesa de partes", linkMesaVirtual: "mailto:arbitraje@cclam.org.pe", numWsp: "51984701376" }

export default function Index() {
    return (
        <Layout floatingButtonInfo={floatingButtonConfig}>
            <Head>
                <title>CCLAM | Solución de disputas</title>
            </Head>
            <section className="min-h-screen">
                <div className="relative w-full">
                    <Image
                        className="filter brightness-75"
                        src={`${process.env.STORAGE_URL_FT}/images/soluciondisputas/centro-de-soluciones.png`}
                        width="1366"
                        height="505"
                        layout="responsive"
                    />
                </div>
                <Transition
                    show={true}
                    appear={true}
                    enter="transform transition duration-1000"
                    enterFrom=" translate-y-8"
                    enterTo=" translate-y-0"
                    leave="transform duration-200 transition ease-in-out"
                    leaveFrom=" translate-y-0 "
                >
                    <div className="relative px-0 lg:px-10 py-5 -mt-10 lg:-mt-16">
                        <div className="bg-white rounded-3xl shadow-close px-5 py-10">
                            <div className="flex flex-wrap lg:flex-nowrap">
                                <div className="">
                                    <Image
                                        className="filter brightness-90"
                                        src={`${process.env.STORAGE_URL_FT}/images/soluciondisputas/logo-centro-disputas.png`}
                                        width="628"
                                        height="275"
                                    />
                                    <iframe src="https://www.facebook.com/plugins/like.php?href=https%3A%2F%2Fwww.facebook.com%2Fsoluciondedisputas.cclam&width=220&layout=button_count&action=like&size=small&share=true&height=46&appId" width="220" height="46" style={{ border: "none", overflow: "hidden", margin: '0 auto 0 auto' }} scrolling="no" frameBorder="0" allowFullScreen={true} allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                                </div>
                                <div className="my-auto mr-5 w-full lg:w-11/12 text-gray-800">
                                    <p className="text-medium">
                                        El Centro de Solución de Disputas de la Centenaria Cámara de Comercio y Producción de Lambayeque está comprometido con sus usuarios para brindarles un servicio eficaz, económico e imparcial; con la finalidad de buscar la solución más idónea a sus conflictos, desarrollando de esa manera una cultura de paz en nuestro país.
                                    </p>
                                    <p className="font-bold text-sm mt-4 ">Para mayor información llamar al 984 701 376 – 984 793 698 o escribir a los siguientes correos electrónicos:
                                        {" "}
                                        <span>
                                            secretariogeneral@cclam.org.pe
                                        </span>
                                        |
                                        <span>
                                            secretariaarbitral@cclam.org.pe
                                        </span>
                                    </p>
                                </div>
                            </div>
                            <div className="flex flex-col md:flex-row">
                                <div className="w-full md:w-1/2 mt-20">
                                    <p className="font-bold text-3xl text-center text-themeLightBlue">Servicios</p>
                                    <div className="mt-6 flex flex-col justify-center">
                                        <Link href={`/solucion-de-disputas/centro-de-arbitraje`}>
                                            <a>
                                                <div className="mb-4 mx-auto w-full lg:w-96 bg-opacity-0 px-5 py-4 rounded-full text-gray-600 flex transition duration-500 ease-in-out transform hover:-translate-y-2 cursor-pointer justify-center md:justify-start gap-4">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-themeLightBlue" viewBox="0 0 20 20" fill="currentColor">
                                                        <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                                                    </svg>
                                                    <p className="my-auto text-base">Centro de Arbitraje</p>
                                                </div>
                                            </a>
                                        </Link>
                                        <Link href={`/solucion-de-disputas/centro-de-conciliacion`}>
                                            <a className='flex justify-center w-max md:w-full'>
                                                <div className="mb-4 mx-auto w-full lg:w-96 bg-opacity-0 px-5 py-4 rounded-full text-gray-600 flex transition duration-500 ease-in-out transform hover:-translate-y-2 cursor-pointer justify-center md:justify-start gap-4">
                                                    <svg viewBox="0 0 640 512" className="h-8 w-8 text-themeLightBlue" focusable="false" role="img" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M434.7 64h-85.9c-8 0-15.7 3-21.6 8.4l-98.3 90c-.1.1-.2.3-.3.4-16.6 15.6-16.3 40.5-2.1 56 12.7 13.9 39.4 17.6 56.1 2.7.1-.1.3-.1.4-.2l79.9-73.2c6.5-5.9 16.7-5.5 22.6 1 6 6.5 5.5 16.6-1 22.6l-26.1 23.9L504 313.8c2.9 2.4 5.5 5 7.9 7.7V128l-54.6-54.6c-5.9-6-14.1-9.4-22.6-9.4zM544 128.2v223.9c0 17.7 14.3 32 32 32h64V128.2h-96zm48 223.9c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16zM0 384h64c17.7 0 32-14.3 32-32V128.2H0V384zm48-63.9c8.8 0 16 7.2 16 16s-7.2 16-16 16-16-7.2-16-16c0-8.9 7.2-16 16-16zm435.9 18.6L334.6 217.5l-30 27.5c-29.7 27.1-75.2 24.5-101.7-4.4-26.9-29.4-24.8-74.9 4.4-101.7L289.1 64h-83.8c-8.5 0-16.6 3.4-22.6 9.4L128 128v223.9h18.3l90.5 81.9c27.4 22.3 67.7 18.1 90-9.3l.2-.2 17.9 15.5c15.9 13 39.4 10.5 52.3-5.4l31.4-38.6 5.4 4.4c13.7 11.1 33.9 9.1 45-4.7l9.5-11.7c11.2-13.8 9.1-33.9-4.6-45.1z"></path></svg>
                                                    <p className="my-auto text-base">Centro de Conciliación Extrajudicial</p>
                                                </div>
                                            </a>
                                        </Link>
                                        <Link href={`/solucion-de-disputas/junta-resolucion-disputas`}>
                                            <a>
                                                <div className="mx-auto w-full lg:w-96 bg-opacity-0 px-5 py-4 rounded-full text-gray-600 flex transition duration-500 ease-in-out transform hover:-translate-y-2 cursor-pointer">
                                                    <svg viewBox="0 0 448 512" className="h-8 w-8 text-themeLightBlue mr-5" focusable="false" role="img" fill="currentColor" xmlns="http://www.w3.org/2000/svg" ><path fill="currentColor" d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm95.8 32.6L272 480l-32-136 32-56h-96l32 56-32 136-47.8-191.4C56.9 292 0 350.3 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-72.1-56.9-130.4-128.2-133.8z"></path></svg>
                                                    <p className="my-auto text-base">Centro de Junta de Resolución de Disputas [JRD]</p>
                                                </div>
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                                <div className="w-full md:w-1/2 text-center relative mt-20 flex flex-col justify-center">
                                    <p className="text-center text-themeLightBlue font-semibold">
                                        ¿Quieres saber más?
                                    </p>
                                    <p className="text-center text-sm font-semibold mb-3 text-gray-700">
                                        Comunícate con nosotros
                                    </p>
                                    <div className="max-w-max mx-auto">
                                        <CardContact
                                            image={
                                                <Image
                                                    className="rounded-full filter brightness-95 "
                                                    src={`${process.env.STORAGE_URL_FT}/images/soluciondisputas/encargada.png`}
                                                    width="600"
                                                    height="600"
                                                />
                                            }
                                            area="Centro de Solución de Disputas"
                                            encargado="María Alejandra Pasco Herrera"
                                            phone="984701376"
                                            mail="secretariogeneral@cclam.org.pe"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Transition>
            </section>
        </Layout>
    )
}