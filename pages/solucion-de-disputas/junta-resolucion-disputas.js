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
    title: "Estatutos del Centro",
    items: [
      {
        name: "Estatuto de JRD 2022",
        link: "ESTATUTO CCLAM - JRD 2022.pdf",
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
    title: "Reglamentos del Centro",
    items: [
      {
        name: "Reglamento de JRD 2022",
        link: "REGLAMENTO CCLAM - JRD 2022.pdf",
      },
    ],
  },
  {
    title: "Código de Ética para JRD",
    items: [
      {
        name: "Código de ética para JRD 2022",
        link: "CODIGO_DE_ETICA_CCLAM-2022.pdf",
      },
    ],
    icon: (
      <svg
        viewBox="0 0 640 512"
        className="my-auto h-7 w-7 text-blue-600"
        focusable="false"
        role="img"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="currentColor"
          d="M256 336h-.02c0-16.18 1.34-8.73-85.05-181.51-17.65-35.29-68.19-35.36-85.87 0C-2.06 328.75.02 320.33.02 336H0c0 44.18 57.31 80 128 80s128-35.82 128-80zM128 176l72 144H56l72-144zm511.98 160c0-16.18 1.34-8.73-85.05-181.51-17.65-35.29-68.19-35.36-85.87 0-87.12 174.26-85.04 165.84-85.04 181.51H384c0 44.18 57.31 80 128 80s128-35.82 128-80h-.02zM440 320l72-144 72 144H440zm88 128H352V153.25c23.51-10.29 41.16-31.48 46.39-57.25H528c8.84 0 16-7.16 16-16V48c0-8.84-7.16-16-16-16H383.64C369.04 12.68 346.09 0 320 0s-49.04 12.68-63.64 32H112c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h129.61c5.23 25.76 22.87 46.96 46.39 57.25V448H112c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h416c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16z"
        ></path>
      </svg>
    ),
  },
  {
    title: "Registro de Adjudicadores",
    dynamic: true,
    items: [
      {
        name: "Registro de Adjudicadores – Junio 2023",
        link: "",
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
    title: "Tarifarios",
    items: [
      {
        name: "Tarifario de JRD",
        link: "ANEXO_1_TARIFARIO_DE_JRD.pdf",
      },
      {
        name: "Tarifario de servicios adicionales del Centro de JRD ",
        link: "ANEXO_2_TARIFARIO_DE_SERVICIOS_ADICIONALES_DEL_CENTRO.pdf",
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
];

const floatingButtonConfig = {
  mesaVirtual: "Mesa de partes",
  linkMesaVirtual: "mailto:arbitraje@cclam.org.pe",
  numWsp: "51984701376",
};

export default function JuntaResolucionDisputas() {
  const [dynamicInfo, setdynamicInfo] = useState(null);
  useEffect(async () => {
    const { data } = await axios.get(`/dynamiclink/jrd`);
    setdynamicInfo(data);
  }, []);

  return (
    <Layout floatingButtonInfo={floatingButtonConfig}>
      <Head>
        <title>CCLAM | Centro de Junta de Resolución de Disputas [JRD]</title>
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
                Centro de{" "}
                <span className="text-themeBlue">
                Junta de Resolución de Disputas
                </span>
                <span className="text-themeBlue opacity-70 text-5xl">
                  {" "}
                  [JRD]
                </span>{" "}
              </p>
              <p className="font-medium text-themeLightBlue text-xl">
                ¡Prevención y solución de controversias!
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
            <div className="col-span-4 lg:pl-5 text-gray-800">
              <p className="text-justify mt-5">
                El Centro de Junta de Resolución de Disputas [JRD] pertenece al
                Centro de Solución de Disputas de la Centenaria Cámara de
                Comercio y Producción de Lambayeque, que se encarga de impulsar
                la JRD como un mecanismo alternativo de solución de conflictos,
                cuya finalidad es que las partes logren prevenir o, en su caso,
                resolver de forma eficiente las controversias que surjan entorno
                a un contrato de obra o proyecto.
              </p>
              <p className="text-justify mt-5">
                Para mayor información llamar al 984 701 376 – 984 793 698 o
                escribir a los siguientes correos electrónicos:{" "}
                <span>secretariogeneral@cclam.org.pe</span> |{" "}
                <span>secretariaarbitral@cclam.org.pe</span>.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-4 gap-x-6 mt-20">
            {options.map((option, i) => (
              <Item key={i} {...option} dynamicInfo={dynamicInfo} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}

const Item = ({ title, items, icon, dynamic, dynamicInfo }) => (
  <div className="flex flex-col flex-wrap content-start mb-14 w-full ">
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
        {dynamic ? (
          <a
            href={`https://cclam.org.pe/recursos.base/public/storage/${dynamicInfo?.link}`}
            target="_blank"
            rel="noreferrer"
            className="text-sm mb-2 block hover:text-blue-600"
          >
            {dynamicInfo?.titulo}
          </a>
        ) : (
          <>
            {items.map((item, k) => (
              <a
                key={k}
                href={`https://cclam.org.pe/pdfs/jrd/${item.link}`}
                target="_blank"
                rel="noreferrer"
                className="text-sm mb-2 block hover:text-blue-600"
              >
                {item.name}
              </a>
            ))}
          </>
        )}
      </div>
    </div>
  </div>
);
