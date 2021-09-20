import Head from "next/head";
import Layout, { siteTitle } from "../../components/layout";
import Image from "next/image";

var options = [
    {
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="my-auto h-7 w-7 text-blue-600"
                viewBox="0 0 20 20"
                fill="currentColor"
            >
                <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
            </svg>
        ),
        title: "Estatutos del centro",
        items: ["Estatutos arbitraje 2020.pdf"],
    },
    {
        icon: (
            <svg
                viewBox="0 0 448 512"
                className="my-auto h-7 w-7 text-blue-600"
                focusable="false"
                role="img"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    fill="currentColor"
                    d="M448 360V24c0-13.3-10.7-24-24-24H96C43 0 0 43 0 96v320c0 53 43 96 96 96h328c13.3 0 24-10.7 24-24v-16c0-7.5-3.5-14.3-8.9-18.7-4.2-15.4-4.2-59.3 0-74.7 5.4-4.3 8.9-11.1 8.9-18.6zM128 134c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm0 64c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm253.4 250H96c-17.7 0-32-14.3-32-32 0-17.6 14.4-32 32-32h285.4c-1.9 17.1-1.9 46.9 0 64z"
                ></path>
            </svg>
        ),
        title: "Reglamentos del centro",
        items: [
            "Reglamento: Antes de marzo de 2019.pdf",
            "Reglamento: Desde marzo de 2019.pdf",
            "Reglamento vigente: Julio de 2020.pdf",
        ],
    },
    {
        title: "Tarifarios",
        items: [
            "Tarifario de arbitraje.pdf",
            "Tarifario de servicios adicionales de arbitraje.pdf",
        ],
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="my-auto h-7 w-7 text-blue-600"
                viewBox="0 0 20 20"
                fill="currentColor"
            >
                <path
                    fillRule="evenodd"
                    d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2H6zm1 2a1 1 0 000 2h6a1 1 0 100-2H7zm6 7a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm-3 3a1 1 0 100 2h.01a1 1 0 100-2H10zm-4 1a1 1 0 011-1h.01a1 1 0 110 2H7a1 1 0 01-1-1zm1-4a1 1 0 100 2h.01a1 1 0 100-2H7zm2 1a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1zm4-4a1 1 0 100 2h.01a1 1 0 100-2H13zM9 9a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1zM7 8a1 1 0 000 2h.01a1 1 0 000-2H7z"
                    clipRule="evenodd"
                />
            </svg>
        ),
    },
    {
        title: "Registro de árbitros",
        items: ["Registro de árbitros 2021.pdf"],
        icon: (
            <svg
                viewBox="0 0 448 512"
                className="my-auto h-7 w-7 text-blue-600"
                focusable="false"
                role="img"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    fill="currentColor"
                    d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm95.8 32.6L272 480l-32-136 32-56h-96l32 56-32 136-47.8-191.4C56.9 292 0 350.3 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-72.1-56.9-130.4-128.2-133.8z"
                ></path>
            </svg>
        ),
    },
    {
        title: "Requisitos para la incorporación de árbitros al centro",
        items: ["Requisitos de incorporación de árbitros 2020.pdf"],
        icon: (
            <svg
                viewBox="0 0 576 512"
                className="my-auto h-7 w-7 text-blue-600"
                focusable="false"
                role="img"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    fill="currentColor"
                    d="M528 64H384v96H192V64H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h480c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zM288 224c35.3 0 64 28.7 64 64s-28.7 64-64 64-64-28.7-64-64 28.7-64 64-64zm93.3 224H194.7c-10.4 0-18.8-10-15.6-19.8 8.3-25.6 32.4-44.2 60.9-44.2h8.2c12.3 5.1 25.7 8 39.8 8s27.6-2.9 39.8-8h8.2c28.4 0 52.5 18.5 60.9 44.2 3.2 9.8-5.2 19.8-15.6 19.8zM352 32c0-17.7-14.3-32-32-32h-64c-17.7 0-32 14.3-32 32v96h128V32z"
                ></path>
            </svg>
        ),
    },
    {
        title: "Directivas",
        items: ["Directiva N°01 - CA -CSA CPPL Renovación.pdf"],
        icon: (
            <svg
                viewBox="0 0 24 24"
                className="my-auto h-7 w-7 text-blue-600"
                focusable="false"
                role="img"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M19 2H6c-1.206 0-3 .799-3 3v14c0 2.201 1.794 3 3 3h15v-2H6.012C5.55 19.988 5 19.806 5 19c0-.101.009-.191.024-.273.112-.576.584-.717.988-.727H21V4a2 2 0 0 0-2-2zm0 9-2-1-2 1V4h4v7z"></path>
            </svg>
        ),
    },
];

var listConsejo = [
    "Presidente: Rafael Iván Pantoja Barboza.",
    "Vicepresidenta: María Astrid Reynoso de Vargas.",
    "Miembro titular: José Antonio Cárdenas Reynaga.",
    "Miembro titular: Jorge Segundo Cumpa Reyes.",
    "Miembro titular: Kattya Karyna Hoyos Quiroz.",
    "Miembro titular: Yván Pavel Pérez Solf.",
    "Miembro suplente: Jorge Luis Calmet Velasco.",
    "Miembro suplente: Pablo Fernández Díaz.",
    "Miembro suplente: Rosa María del Pilar Forti Reaño.",
];

export default function CentroArbitraje() {
    return (
        <Layout>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <div className="py-20">
                <div className="flex flex-wrap flex-col lg:flex-row justify-between ">
                    <div className="my-auto mx-auto text-center">
                        <p className="font-extrabold text-6xl">
                            {" "}
                            Centro de{" "}
                            <span className="text-themeBlue">
                                Arbitraje
                            </span>{" "}
                        </p>
                        <p className="font-medium text-themeLightBlue text-2xl mt-3">
                            ¡Procesos rápidos y correctos!
                        </p>
                    </div>
                </div>
                <div className="bg-white w-full shadow-close px-5 lg:px-24 py-12 rounded-t-4xl mt-10">
                    <p className="text-justify mt-5 text-base font-normal">
                        El Centro de Arbitraje pertenece al Centro de Solución
                        de Disputas de la Centenaria Cámara de Comercio y
                        Producción de Lambayeque, el mismo que se encarga de
                        impulsar el arbitraje como un mecanismo eficiente de
                        resolución de conflictos. Asimismo, sus procesos
                        arbitrales se caracterizan por ser resueltos de manera
                        rápida, con imparcialidad, ética y veracidad; siempre
                        acorde a la normatividad vigente y a su Reglamento
                        Arbitraje.
                    </p>
                    <p className="text-justify mt-5 text-base font-normal">
                        Se caracteriza por contar tanto con la infraestructura y
                        ambientes apropiados para el desarrollo de audiencias
                        presenciales, como por contar con una plataforma digital
                        apta durante todo el proceso e idónea para audiencias
                        virtuales. De esa manera otorgan las condiciones más
                        favorables para el correcto desarrollo de los procesos
                        arbitrales.
                    </p>
                    <p className="text-justify mt-5 text-base font-normal">
                        Para mayor información llamar al 984 701 376 – 984 793
                        698 o escribir a los siguientes correos electrónicos:
                        secretariogeneral@cclam.org.pe o
                        secretariaarbitral@cclam.org.pe
                    </p>

                    <div className="flex flex-wrap justify-between content-center mt-20">
                        {options.map((option, i) => (
                            <Item key={i} {...option} />
                        ))}
                    </div>
                    <div className="flex justify-between my-20">
                        <div className="relative">
                            <Image
                                className="shadow-xl rounded-xl"
                                src="/images/soluciondisputas/protocoloarbitraje.png"
                                width="468"
                                height="663"
                            />
                        </div>
                        <div className="relative w-7/12 ml-5 rounded-xl shadow-close">
                            <Image
                                className="rounded-xl shadow-close"
                                src="/images/soluciondisputas/post-mesa-conciliacion.png"
                                width="480"
                                height="480"
                                layout="responsive"
                            />
                        </div>
                    </div>
                </div>
                <div className="relative rounded-2xl -mt-5">
                    <Image
                        className="filter brightness-75 rounded-2xl"
                        src="/images/soluciondisputas/consejo-arbitraje.jpg"
                        width="1366"
                        height="458"
                        layout="responsive"
                    />
                </div>
                <div className="px-8">
                    <div className="relative bg-white shadow-close px-5 lg:px-14 py-10 rounded-3xl -mt-14 mx-auto">
                        <p className="font-bold text-themeBlue text-xl mb-8">
                            CONSEJO SUPERIOR DE ARBITRAJE 2019 - 2022
                        </p>
                        <p className="text-gray-800 leading-relaxed mb-5">
                            El 27 de diciembre del 2019 en el directorio de la
                            Cámara de Comercio y Producción de Lambayeque se
                            llevó a cabo la ceremonia de Juramentación del nuevo
                            Consejo Superior de Arbitraje de la Centenaria
                            Institución para el período 2019 – 2022.
                        </p>
                        <p className="text-gray-800 leading-relaxed mb-5">
                            El nuevo Consejo Superior de Arbitraje está
                            conformado por el Sr. Rafael Iván Pantoja Barboza
                            como Presidente del nuevo Consejo Superior de
                            Arbitraje y la Sra. María Astrid Reynoso de Vargas
                            como Vicepresidenta. Asimismo, desempeñarán como
                            miembros titulares los señores Jose Antonio Cárdenas
                            Reynaga, Jorge Segundo Cumpa Reyes, Kattya Karyna
                            Hoyos Quiroz e Yván Pavel Pérez Solf, mientras que
                            los miembros suplentes serán los señores Jorge Luis
                            Calmet Velasco, Pablo Fernández Díaz y Rosa María
                            del Pilar Forti Reaño.
                        </p>
                        <p className="text-gray-800 leading-relaxed mb-14">
                            La ceremonia de juramentación fue presidida por el
                            Presidente de la CCLAM, Ing. Carlos Manuel Burgos
                            Montenegro, y tuvo como invitados al Primer
                            Vicepresidente de la Cámara de Comercio, Mg. Olivio
                            Huancaruna Perales; Gerente General, Lic. Miguel
                            Ángel Camacho Urbina y; a la Secretaria General del
                            Centro de Arbitraje, Abog. María Alejandra Pasco
                            Herrera.
                        </p>
                        <p className="font-bold text-themeBlue text-xl mb-4">
                            CONSEJO SUPERIOR DE ARBITRAJE 2019 - 2022
                        </p>
                        <ul class="list-none list-inside mb-14">
                            {listConsejo.map((it, i) => (
                                <li className="flex mb-2" key={i}>
                                    <span>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5 my-auto text-blue-500 mr-3"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={3}
                                                d="M5 13l4 4L19 7"
                                            />
                                        </svg>
                                    </span>{" "}
                                    {it}
                                </li>
                            ))}
                        </ul>
                        <p className="italic text-center text-gray-700">
                            “Todo litigio o controversia, derivados o
                            relacionados con este acto jurídico, será resuelto
                            mediante Arbitraje Institucional de Derecho, de
                            conformidad con los Reglamentos Arbitrales del
                            Centro de Arbitraje de la Cámara de Comercio y
                            Producción de Lambayeque, a cuyas normas,
                            administración y decisión se someten las partes en
                            forma incondicional, declarando conocerlas y
                            aceptarlas en su integridad, precisando que el laudo
                            emitido en este proceso arbitral será inapelable y
                            definitivo”.
                        </p>
                        <div className=" grid grid-cols-1 lg:grid-cols-3 gap-4 text-2xl text-center text-themeLightBlue font-bold mt-5 mb-20">
                            <p>IMPARCIALIDAD</p>
                            <p>INDEPENDENCIA</p>
                            <p>ÉTICA</p>
                        </div>
                        <div className="w-full lg:w-1/2 relative mt-20">
                            <p className="font-bold text-3xl text-themeBlue  mb-5">
                                Contáctanos
                            </p>
                            <Image
                                className="shadow-close rounded-xl"
                                src="/images/soluciondisputas/maria-alejandra.png"
                                width="300"
                                height="300"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

const Item = ({ title, items, icon }) => (
    <div className="flex flex-col flex-wrap content-center mb-14 ">
        <div className="text-gray-700 flex">
            <span className="bg-themeBlue bg-opacity-5 h-14 w-14 flex justify-center rounded-full">
                {
                    (icon ??= (
                        <svg
                            viewBox="0 0 640 512"
                            className="my-auto h-8 w-8 text-blue-600"
                            focusable="false"
                            role="img"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fill="currentColor"
                                d="M434.7 64h-85.9c-8 0-15.7 3-21.6 8.4l-98.3 90c-.1.1-.2.3-.3.4-16.6 15.6-16.3 40.5-2.1 56 12.7 13.9 39.4 17.6 56.1 2.7.1-.1.3-.1.4-.2l79.9-73.2c6.5-5.9 16.7-5.5 22.6 1 6 6.5 5.5 16.6-1 22.6l-26.1 23.9L504 313.8c2.9 2.4 5.5 5 7.9 7.7V128l-54.6-54.6c-5.9-6-14.1-9.4-22.6-9.4zM544 128.2v223.9c0 17.7 14.3 32 32 32h64V128.2h-96zm48 223.9c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16zM0 384h64c17.7 0 32-14.3 32-32V128.2H0V384zm48-63.9c8.8 0 16 7.2 16 16s-7.2 16-16 16-16-7.2-16-16c0-8.9 7.2-16 16-16zm435.9 18.6L334.6 217.5l-30 27.5c-29.7 27.1-75.2 24.5-101.7-4.4-26.9-29.4-24.8-74.9 4.4-101.7L289.1 64h-83.8c-8.5 0-16.6 3.4-22.6 9.4L128 128v223.9h18.3l90.5 81.9c27.4 22.3 67.7 18.1 90-9.3l.2-.2 17.9 15.5c15.9 13 39.4 10.5 52.3-5.4l31.4-38.6 5.4 4.4c13.7 11.1 33.9 9.1 45-4.7l9.5-11.7c11.2-13.8 9.1-33.9-4.6-45.1z"
                            ></path>
                        </svg>
                    ))
                }
            </span>
            <div className="max-w-xs mt-1 pl-5">
                <p className="text-lg font-medium mb-3 text-blue-600">
                    {title}
                </p>
                {items.map((item, k) => (
                    <a key={k} className="text-sm mb-2 block">
                        {item}
                    </a>
                ))}
            </div>
        </div>
    </div>
);
