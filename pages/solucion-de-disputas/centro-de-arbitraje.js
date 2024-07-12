import Head from "next/head";
import Layout from "../../components/layout";
import Image from "next/image";
import CardContact from "../../components/Servicios/CardContact";
import { Transition } from "@headlessui/react";
import CalculadoraArbitraje from "../../components/calculadoraArbitraje";
import axios from "@util//Api";
import { useEffect, useState } from "react";

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
    items: [
      {
        name: "Estatutos arbitraje 2020",
        link: "ESTATUTO_CENTRO_DE_ARBITRAJE_CCLAM_MAYO2020.pdf",
      },
    ],
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
      {
        name: "Reglamento: Antes de marzo de 2019",
        link: "REGLAMENTO_ANTES_DE_MARZO_DE_2019.pdf",
      },
      {
        name: "Reglamento: Desde marzo de 2019",
        link: "REGLAMENTO_CENTRO_DE_ARBITRAJE_CCLAM_MARZO_2019.pdf",
      },
      {
        name: "Reglamento vigente: Julio de 2020",
        link: "REGLAMENTO_CENTRO_DE_ARBITRAJE_CCLAM_JULIO_2020.pdf",
      },
    ],
  },
  {
    title: "Tarifarios",
    items: [
      {
        name: "Tarifario de arbitraje",
        link: "ANEXO1_TARIFARIO_DE_ARBITRAJE.pdf",
      },
      {
        name: "Tarifario de servicios adicionales de arbitraje",
        link: "ANEXO2_TARIFARIO_DE_SERVICIOS_ADICIONALES_DE_ARBITRAJE.pdf",
      },
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
    items: [
      {
        name: "Registro de Árbitros - Junio 2022.pdf",
        link: "2022/JUNIO/REGISTRO_DE_ARBITROS_ACTUALIZADO_JUN2022.pdf",
        dynamic: true,
        type: "ARBITRAJE"
      },
    ],
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
    items: [
      {
        name: "Requisitos de incorporación de árbitros 2020",
        link: "REQUISITOS_INCORPORACION_AL_REGISTRO_DE_ARBITROS_JULIO2020.pdf",
      },
    ],
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
    items: [
      {
        name: "Directiva N°01 - CA -CSA CPPL Renovación",
        link: "DIRECTIVA_N_01_CA_CSA_CCPL_RENOVACION.pdf",
      },
    ],
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
  {
    title: "Protocolos",
    items: [
      {
        name: "Protocolo: 05 de agosto de 2020.",
        link: "PROTOCOLO_CENTRO_DE_ARBITRAJE_CCLAM_AGOSTO_2020.pdf",
      },
      {
        name: "Protocolo vigente: 01 de agosto de 2023.",
        link: "PROTOCOLO_CENTRO_DE_ARBITRAJE_CCLAM_AGOSTO2023.pdf",
      },
    ],
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
  {
    title: "Código de Ética",
    items: [
      {
        name: "Código de Ética",
        link: "CODIGO_DE_ETICA_2007.pdf",
      },
    ],
    icon: (
      <svg 
      className="my-auto h-7 w-7 text-blue-600"
      viewBox="0 0 640 512" height="48" width="48" focusable="false" role="img" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M256 336h-.02c0-16.18 1.34-8.73-85.05-181.51-17.65-35.29-68.19-35.36-85.87 0C-2.06 328.75.02 320.33.02 336H0c0 44.18 57.31 80 128 80s128-35.82 128-80zM128 176l72 144H56l72-144zm511.98 160c0-16.18 1.34-8.73-85.05-181.51-17.65-35.29-68.19-35.36-85.87 0-87.12 174.26-85.04 165.84-85.04 181.51H384c0 44.18 57.31 80 128 80s128-35.82 128-80h-.02zM440 320l72-144 72 144H440zm88 128H352V153.25c23.51-10.29 41.16-31.48 46.39-57.25H528c8.84 0 16-7.16 16-16V48c0-8.84-7.16-16-16-16H383.64C369.04 12.68 346.09 0 320 0s-49.04 12.68-63.64 32H112c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h129.61c5.23 25.76 22.87 46.96 46.39 57.25V448H112c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h416c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16z"></path></svg>
    ),
  },
  {
    title: "Recusaciones y Sanciones",
    items: [
      {
        name: "Recusaciones y Sanciones 2024",
        link: "RECUSACIONES-SANCIONES-2024.pdf",
        dynamic: true,
        type: "RECUSACIONES"
      },
    ],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" 
      className="my-auto h-7 w-7 text-blue-600">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 0 0 5.636 5.636m12.728 12.728A9 9 0 0 1 5.636 5.636m12.728 12.728L5.636 5.636" />
      </svg>
    ),
  },
  {
    title: "Canal de denuncias",
    items: [
      {
        name: "Presencial: Presenta tu denuncia en nuestra oficina ubicada en la Calle Manuel María Ízaga N° 035, Urbanización Patazca, Chiclayo - Lambayeque.",
        link: "https://maps.app.goo.gl/AnA3mDomABcYT4d76",
        fullLink: true
      },
      {
        name: "Virtual: Envía tu denuncia al correo arbitraje@cclam.org.pe.",
        link: "mailto:arbitraje@cclam.org.pe",
        fullLink: true
      },
    ],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="my-auto h-7 w-7 text-blue-600">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 1 1 0-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 0 1-1.44-4.282m3.102.069a18.03 18.03 0 0 1-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 0 1 8.835 2.535M10.34 6.66a23.847 23.847 0 0 0 8.835-2.535m0 0A23.74 23.74 0 0 0 18.795 3m.38 1.125a23.91 23.91 0 0 1 1.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 0 0 1.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 0 1 0 3.46" />
      </svg>
    ),
  },
];

var listConsejo = [
  "Presidente: Sr. Pantoja Barboza, Rafael Iván.",
  "Vicepresidente: Sr. Pérez Solf, Yván Pavel.",
  "Miembro consejero titular: Sr. Barturén Llanos, Tony Daniel.",
  "Miembro consejero titular: Sr. Fernández Díaz, Pablo.",
  "Miembro consejero titular: Sr. Porro Rivadeneira, Manuel Francisco.",
  "Miembro consejero titular: Sra. Reynoso de Vargas, María Astrid.",
  "Miembro consejero suplente: Sr. Cárdenas Reynaga, José Antonio.",
  "Miembro consejero suplente: Sr. Cumpa Reyes, Jorge Segundo.",
  "Miembro consejero suplente: Sra. Hoyos Quiroz, Kattya Karyna.",
];

var listSecretariasArbitrales = [
  "Secretaria General y Secretaria Arbitral: Abg. María Alejandra Pasco Herrera.",
  "Secretaria Arbitral: Abg. Cynthia Chavesta Rodriguez.",
  "Secretaria Arbitral: Abg. Sofia Alejandra Kcomt Fernandez."
];

export default function CentroArbitraje() {
  const [dynamicInfo, setdynamicInfo] = useState(null);
  useEffect(async () => {
    const { data } = await axios.get(`/dynamiclink/all`);
    setdynamicInfo(data);
  }, []);

  return (
    <Layout hideMesaPartes={true}>
      <Head>
        <title>CCLAM | Centro de arbitraje</title>
      </Head>
      <div className="pt-28 pb-4">
        <Transition
          show={true}
          appear={true}
          enter="transform transition duration-1000"
          enterFrom="opacity-0 "
          enterTo="opacity-100 "
          leave="transform duration-200 transition ease-in-out"
          leaveFrom="opacity-100  "
          leaveTo="opacity-0 "
        >
          <div className="flex flex-wrap flex-col lg:flex-row justify-between ">
            <div className="my-auto mx-auto text-center">
              <p className="font-extrabold text-3xl lg:text-6xl">
                {" "}
                Centro de <span className="text-themeBlue">Arbitraje</span>{" "}
              </p>
              <p className="font-medium text-themeLightBlue text-xl">
                ¡Procesos rápidos y correctos!
              </p>
            </div>
          </div>
        </Transition>
        <div className="bg-white w-full shadow-sm px-5 lg:px-24 py-12 rounded-t-4xl mt-10">
          <div className="flex flex-wrap lg:flex-nowrap">
            <div className="w-56 mx-auto">
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
            <div className="flex flex-col gap-5 lg:pl-8 text-gray-800 text-sm">
              <p>
                El Centro de Arbitraje pertenece al Centro de Solución de
                Disputas de la Centenaria Cámara de Comercio y Producción de
                Lambayeque, el mismo que se encarga de impulsar el arbitraje
                como un mecanismo eficiente de resolución de conflictos.
                Asimismo, sus procesos arbitrales se caracterizan por ser
                resueltos de manera rápida, con imparcialidad, ética y
                veracidad; siempre acorde a la normatividad vigente y a su
                Reglamento Arbitraje.
              </p>
              <p>
                Se caracteriza por contar tanto con la infraestructura y
                ambientes apropiados para el desarrollo de audiencias
                presenciales, como por contar con una plataforma digital apta
                durante todo el proceso e idónea para audiencias virtuales. De
                esa manera otorgan las condiciones más favorables para el
                correcto desarrollo de los procesos arbitrales.
              </p>
              <p>
                Para mayor información llamar al 984 701 376 - 984 793 698 o
                escribir a los siguientes correos electrónicos:{" "}
                <span>secretariogeneral@cclam.org.pe</span> | 
                <span>secretariaarbitral@cclam.org.pe</span> | 
                <span>secretariaarbitraje@cclam.org.pe</span>.
              </p>
            </div>
          </div>
          <CalculadoraArbitraje />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-3 gap-x-4 mt-14">
            {options.map((option, i) => (
              <Item
                key={i}
                {...option}
                dynamicInfo={dynamicInfo}
                center={i === options.length - 1 && options.length % 3 === 1}
              />
            ))}
          </div>
          <div className="flex flex-wrap justify-center mb-16">
            <div className="relative w-full lg:w-6/12 lg:pl-8 rounded-xl">
              <div className="shadow-close rounded-xl">
                <Image
                  className="rounded-xl shadow-close"
                  src={`${process.env.STORAGE_URL_FT}/images/soluciondisputas/mesa-partes-virtual-CA.jpeg`}
                  width="480"
                  height="480"
                  layout="responsive"
                />
              </div>
            </div>
          </div>
          <p className="font-bold text-themeBlue text-xl mb-6">
            CONSEJO SUPERIOR DE ARBITRAJE 2022 - 2025
          </p>
          <p className="text-gray-800 leading-relaxed mb-3">
            El 29 de diciembre de 2022, mediante la Sesión Ordinaria del Consejo
            Directivo de la Cámara de Comercio y Producción de Lambayeque, se
            acordó en forma unánime designar a los miembros titulares y
            suplentes del Consejo Superior de Arbitraje durante el período 2022
            – 2025. Estando a ello, actualmente el mencionado Consejo se
            encuentra conformado por:
          </p>
          <ul className="list-none list-inside mb-14 text-gray-800">
            {listConsejo.map((it, i) => (
              <li className="flex mb-2" key={i}>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 mt-1 text-blue-500 mr-3"
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
          <p className="font-bold text-themeBlue text-xl mb-6">
            SECRETARÍAS ARBITRALES:
          </p>
          <ul className="list-none list-inside mb-14 text-gray-800">
            {listSecretariasArbitrales.map((it, i) => (
              <li className="flex mb-2" key={`sa_${i}`}>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 mt-1 text-blue-500 mr-3"
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
            “Las partes acuerdan que todo litigio o controversia, derivado o
            relacionado con este acto jurídico, se resolverá mediante el
            arbitraje organizado y administrado por el Centro de Arbitraje de la
            Cámara de Comercio y Producción de Lambayeque, de conformidad con
            sus Reglamentos y directivas vigentes, a los cuales las partes se
            someten libremente, señalando que el laudo que se emita en el
            proceso arbitral será inapelable y definitivo”.
          </p>
        </div>
      </div>
    </Layout>
  );
}

const Item = ({ title, items, icon, dynamic, dynamicInfo, center }) => (
  <div
    className={`flex flex-col flex-wrap content-start mb-14 w-full ${
      center ? "col-start-2" : ""
    }`}
  >
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
        <p className="text-lg font-medium mb-3 text-blue-600 select-none">
          {title}
        </p>
          <>
            {items.map((item, k) => {
              const currentInfo = dynamicInfo?.find(d=>d.tipo===item?.type)
              return (
              item.dynamic ?
              <a
                key={k}
                href={`https://cclam.org.pe/recursos.base/public/storage/${currentInfo?.link}`}
                target="_blank"
                rel="noreferrer"
                className="text-sm mb-2 block hover:text-blue-600"
              >
                {currentInfo?.titulo}
              </a>
              :
              <a
                key={k}
                href={`${item?.fullLink ? "" : "https://cclam.org.pe/pdfs/"}${item.link}`}
                target="_blank"
                rel="noreferrer"
                className="text-sm mb-2 block hover:text-blue-600"
              >
                {item.name}
              </a>
              )
            })}
          </>
        
      </div>
    </div>
  </div>
);
