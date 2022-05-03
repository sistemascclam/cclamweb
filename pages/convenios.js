import Head from "next/head";
import Layout from "../components/layout";
import Image from "next/image";
import CardContact from "../components/Servicios/CardContact";
import { Transition } from '@headlessui/react'
import data from "../public/dynamic/convenios.json";
import sectoristas from "../public/dynamic/sectoristas.json";

export default function Convenios() {
    return (
        <Layout>
            <Head>
                <title>CCLAM | Convenios</title>
            </Head>
            <section className="min-h-screen pt-28">
                <Transition
                    show={true}
                    appear={true}
                    enter="transform transition duration-1000"
                    enterFrom="opacity-0 -translate-y-3"
                    enterTo="opacity-100 translate-y-0"
                    leave="transform duration-200 transition ease-in-out"
                    leaveFrom="opacity-100 translate-y-0 "
                    leaveTo="opacity-0 "
                >
                    <div className="flex flex-wrap flex-col lg:flex-row justify-between ">
                        <div className="my-auto mx-auto text-center">
                            <p className="font-extrabold text-3xl lg:text-5xl md:text-5xl sm:text-6xl ">
                                {" "}
                                Convenios{" "}
                                <span className="text-themeBlue">
                                    de asociado
                                </span>{" "}
                            </p>
                            <p className="font-medium text-themeLightBlue mt-1 text-lg lg:text-2xl md:text-2xl sm:text-3xl ">
                                ¡Conoce tus beneficios!
                            </p>
                        </div>
                    </div>
                </Transition>
                <Transition
                    show={true}
                    appear={true}
                    enter="transform transition duration-1000"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="transform duration-200 transition ease-in-out"
                    leaveFrom="opacity-100 "
                    leaveTo="opacity-0 "
                >
                    <div className="relative">
                        <div className="flex flex-row flex-wrap gap-6 justify-center mt-10 mb-14">
                            {data?.map((convenio, i) => (
                                <ConvenioCard key={i} {...convenio} />
                            ))}
                        </div>
                        <p className="block text-center text-lg italic mt-2 mb-10">Y muchos convenios más...</p>
                        <div className="mx-auto">
                            <p className="text-center text-themeLightBlue font-semibold">
                                ¿Quieres saber más?
                            </p>
                            <p className="text-center text-sm font-semibold mb-3 text-gray-700">
                                Comunícate con nustros sectoristas
                            </p>
                            <div className="flex flex-wrap gap-x-10 gap-y-16 justify-center">
                                {
                                    sectoristas.map((s,sk)=>
                                    <CardContact
                                        key={sk}
                                        image={
                                            <Image
                                                className="rounded-full filter brightness-95 "
                                                src={`${process.env.STORAGE_URL_FT}${s.src}`}
                                                width="600"
                                                height="600"
                                                alt="Encargado de convenios"
                                            />
                                        }
                                        area="Sectorista"
                                        encargado={s.name}
                                        phone={s.telf}
                                        mail={s.correo}
                                    />
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </Transition>
            </section>
        </Layout>
    );
}

const ConvenioCard = ({ empresa, beneficio, imageSrc }) => (
    <a className="group bg-white w-64 p-5 rounded-xl flex flex-col shadow-xl hover:-translate-y-2 transition-all duration-500 ease-in-out" href={`https://wa.me/51984713266?text=Hola!%20Quisiera%20saber%20más%20sobre%20el%20convenio%20con%20${empresa.replace(/ /g, "%20")}`} target="_blank" rel="noreferrer">
        <div className="w-7/12	mx-auto bg-white p-2 rounded-xl">
            <Image
                src={`${process.env.STORAGE_URL_FT}${imageSrc}`}
                width="50"
                height="50"
                layout="responsive"
                objectFit="contain"
                alt={`${empresa.replace(/ /g, "%20")}`}
            />
        </div>
        <div className="text-center mt-5 ">
            <p className="text-gray-500 font-medium mb-3">Beneficio</p>
            <p className="text-xs mb-6">{beneficio}</p>
            <span className="text-themeLightBlue text-sm">Saber más...</span>
        </div>
    </a>
);
