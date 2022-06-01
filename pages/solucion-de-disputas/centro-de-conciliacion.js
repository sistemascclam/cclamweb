import Head from 'next/head'
import Layout from '../../components/layout'
import Image from "next/image";
import CardContact from "../../components/Servicios/CardContact"
import { Transition } from '@headlessui/react'

var options = [
    {
        icon: <svg viewBox="0 0 448 512" className="my-auto h-7 w-7 text-blue-600" focusable="false" role="img" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fill="currentColor" d="M448 360V24c0-13.3-10.7-24-24-24H96C43 0 0 43 0 96v320c0 53 43 96 96 96h328c13.3 0 24-10.7 24-24v-16c0-7.5-3.5-14.3-8.9-18.7-4.2-15.4-4.2-59.3 0-74.7 5.4-4.3 8.9-11.1 8.9-18.6zM128 134c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm0 64c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm253.4 250H96c-17.7 0-32-14.3-32-32 0-17.6 14.4-32 32-32h285.4c-1.9 17.1-1.9 46.9 0 64z"></path>
        </svg>,
        title: 'Reglamentos del centro',
        items: []
    },
    {
        title: 'Registro de conciliadores',
        items: [],
        icon: <svg viewBox="0 0 448 512" className="my-auto h-7 w-7 text-blue-600" focusable="false" role="img" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm95.8 32.6L272 480l-32-136 32-56h-96l32 56-32 136-47.8-191.4C56.9 292 0 350.3 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-72.1-56.9-130.4-128.2-133.8z"></path></svg>
    },
    {
        title: 'Tarifarios',
        items: [],
        icon: <svg xmlns="http://www.w3.org/2000/svg" className="my-auto h-7 w-7 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2H6zm1 2a1 1 0 000 2h6a1 1 0 100-2H7zm6 7a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm-3 3a1 1 0 100 2h.01a1 1 0 100-2H10zm-4 1a1 1 0 011-1h.01a1 1 0 110 2H7a1 1 0 01-1-1zm1-4a1 1 0 100 2h.01a1 1 0 100-2H7zm2 1a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1zm4-4a1 1 0 100 2h.01a1 1 0 100-2H13zM9 9a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1zM7 8a1 1 0 000 2h.01a1 1 0 000-2H7z" clipRule="evenodd" />
        </svg>
    },
    {
        title: 'Materias conciliables',
        items: ['Materias conciliables.pdf'],
        icon: <svg xmlns="http://www.w3.org/2000/svg" className="my-auto h-7 w-7 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
    },
    {
        title: 'Formato de solicitud para conciliar',
        items: ['Formato de solicitud para conciliar.pdf'],
        icon: <svg xmlns="http://www.w3.org/2000/svg" className="my-auto h-7 w-7 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
    }
]

var listConsejo = [
    'Presidente: Rafael Iván Pantoja Barboza.',
    'Vicepresidenta: María Astrid Reynoso de Vargas.',
    'Miembro titular: José Antonio Cárdenas Reynaga.',
    'Miembro titular: Jorge Segundo Cumpa Reyes.',
    'Miembro titular: Kattya Karyna Hoyos Quiroz.',
    'Miembro titular: Yván Pavel Pérez Solf.',
    'Miembro suplente: Jorge Luis Calmet Velasco.',
    'Miembro suplente: Pablo Fernández Díaz.',
    'Miembro suplente: Rosa María del Pilar Forti Reaño.'
]

export default function CentroDeConciliacion() {
    return (
        <Layout>
            <Head>
                <title>CCLAM | Centro de Conciliación</title>
            </Head>
            <div className="pt-28 pb-4">
                <Transition
                    show={true}
                    appear={true}
                    enter="transform transition duration-1000"
                    enterFrom="opacity-0 "
                    enterTo="opacity-100"
                    leave="transform duration-200 transition ease-in-out"
                    leaveFrom="opacity-100 "
                    leaveTo="opacity-0 "
                >
                    <div className="flex flex-wrap flex-col lg:flex-row justify-between ">
                        <div className="my-auto mx-auto text-center">
                            <p className="font-extrabold text-3xl lg:text-6xl"> Centro de <span className="text-themeBlue">Conciliación</span> </p>
                            <p className="font-medium text-themeLightBlue text-2xl mt-1">¡La solución en tus manos!</p>
                        </div>
                    </div>
                </Transition>
                <div className="bg-white w-full shadow-sm px-5 lg:px-24 py-12 rounded-4xl mt-10">
                    <div className="flex flex-wrap lg:flex-nowrap">
                        <div className="w-56 mx-auto">
                            <CardContact
                                image={
                                    <Image
                                        className="rounded-full filter brightness-95 "
                                        src={`${process.env.STORAGE_URL_FT}/images/soluciondisputas/encargado.png`}
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
                        <div className="col-span-4 lg:pl-5">
                            <p className="text-justify mt-5 text-base text-gray-800">
                                El Centro de Conciliación pertenece al Centro de Solución de Disputas de la Centenaria Cámara de Comercio y Producción de Lambayeque, el mismo que se encarga de impulsar los procesos conciliatorios como un mecanismo alternativo de resolución de conflictos en aras de brindar soluciones óptimas, oportunas y eficientes para las partes que deciden someter sus controversias en esta vía.
                            </p>
                            <p className="text-justify mt-5 text-base text-gray-800">
                                La conciliación extrajudicial es un proceso avalado por el Ministerio de Justicia y Derechos Humanos, mediante el cual las partes podrán optar por llegar a un acuerdo conciliatorio de manera rápida y económica para resolver sus controversias.
                            </p>
                            <p className="text-justify mt-5 text-base text-gray-800">
                                Durante este procedimiento, las partes asistirán a las audiencias de conciliación con la intervención activa e imparcial del denominado conciliador a través del diálogo. Este procedimiento concluye con la emisión del Acta de Conciliación, documento que constituye título ejecutivo, el cual contendrá el acuerdo al que llegaron las partes, debiendo estar firmada por las partes intervinientes y el conciliador.
                            </p>
                            <p className="text-justify mt-5 text-base text-gray-800">
                                Para mayor información llamar al 984 701 376 – 984 793 698 o escribir a los siguientes correos electrónicos:
                                {" "}
                                <span>
                                    secretariogeneral@cclam.org.pe
                                </span>,  {" "}
                                <span>
                                    secretariaarbitral@cclam.org.pe
                                </span> o {" "}
                                <span>
                                    secretariaarbitraje@cclam.org.pe
                                </span>
                                .
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-wrap justify-between content-center mt-20">
                        {
                            options.map((option, i) => <Item key={i} {...option} />)
                        }

                    </div>
                    <div className="flex flex-wrap justify-between my-20">
                        <a href='https://cclam.org.pe/pdfs/PROTOCOLO_CENTRO_DE_CONCILIACION_CCLAM_2021.pdf' target="_blank" className="relative w-full lg:w-96 mb-5 lg:mb-0">
                            <Image
                                className="shadow-xl rounded-xl"
                                src={`${process.env.STORAGE_URL_FT}/images/soluciondisputas/protocoloconciliacion.jpg`}
                                width="468"
                                height="663"
                            />
                        </a>
                        <div className="relative w-full lg:w-7/12 lg:ml-5 rounded-xl shadow-close">
                            <Image
                                className="rounded-xl shadow-close"
                                src={`${process.env.STORAGE_URL_FT}/images/soluciondisputas/proyectos-conciliacion.jpeg`}
                                width="480"
                                height="480"
                                layout="responsive"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

const Item = ({ title, items, icon }) =>
    <div className="flex flex-col flex-wrap content-center mb-14">
        <div className="text-gray-700 flex">
            <span className="bg-themeBlue bg-opacity-5 h-14 w-14 flex justify-center rounded-full">
                {
                    icon ??=
                    <svg viewBox="0 0 640 512" className="my-auto h-8 w-8 text-blue-600" focusable="false" role="img" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M434.7 64h-85.9c-8 0-15.7 3-21.6 8.4l-98.3 90c-.1.1-.2.3-.3.4-16.6 15.6-16.3 40.5-2.1 56 12.7 13.9 39.4 17.6 56.1 2.7.1-.1.3-.1.4-.2l79.9-73.2c6.5-5.9 16.7-5.5 22.6 1 6 6.5 5.5 16.6-1 22.6l-26.1 23.9L504 313.8c2.9 2.4 5.5 5 7.9 7.7V128l-54.6-54.6c-5.9-6-14.1-9.4-22.6-9.4zM544 128.2v223.9c0 17.7 14.3 32 32 32h64V128.2h-96zm48 223.9c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16zM0 384h64c17.7 0 32-14.3 32-32V128.2H0V384zm48-63.9c8.8 0 16 7.2 16 16s-7.2 16-16 16-16-7.2-16-16c0-8.9 7.2-16 16-16zm435.9 18.6L334.6 217.5l-30 27.5c-29.7 27.1-75.2 24.5-101.7-4.4-26.9-29.4-24.8-74.9 4.4-101.7L289.1 64h-83.8c-8.5 0-16.6 3.4-22.6 9.4L128 128v223.9h18.3l90.5 81.9c27.4 22.3 67.7 18.1 90-9.3l.2-.2 17.9 15.5c15.9 13 39.4 10.5 52.3-5.4l31.4-38.6 5.4 4.4c13.7 11.1 33.9 9.1 45-4.7l9.5-11.7c11.2-13.8 9.1-33.9-4.6-45.1z"></path></svg>
                }
            </span>
            <div className="w-80 mt-1 pl-5">
                <p className="text-lg font-medium mb-3 text-blue-600 select-none">{title}</p>
                {
                    items.map((item, k) => <a key={k} className="text-sm mb-2 block text-wrap" >{item}</a>)
                }
            </div>
        </div>
    </div>