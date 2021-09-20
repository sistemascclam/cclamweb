import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import Image from "next/image";
import CardContact from "../components/Servicios/CardContact";
import data from "../content/home/convenios.json";

export default function Convenios() {
    return (
        <Layout>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <div className="pt-36 lg:pt-28 lg:pb-28">
                <div className="flex flex-wrap flex-col lg:flex-row justify-between ">
                    <div className="my-auto mx-auto text-center">
                        <p className="font-extrabold text-3xl lg:text-5xl md:text-5xl sm:text-6xl ">
                            {" "}
                            Convenios{" "}
                            <span className="text-themeBlue">
                                de asociado
                            </span>{" "}
                        </p>
                        <p className="font-medium text-themeLightBlue mt-3 text-lg lg:text-2xl md:text-2xl sm:text-3xl ">
                            ¡Conoce tus beneficios!
                        </p>
                    </div>
                </div>
            </div>
            <section className="min-h-screen">
                <div className="relative px-0 lg:px-10 py-5 -mt-10 lg:-mt-28">
                    <div className="flex flex-row flex-wrap gap-4 justify-center mt-10 mb-14">
                        {data?.map((convenio, i) => (
                            <ConvenioCard key={i} {...convenio} />
                        ))}
                    </div>
                    <div className="w-56 mx-auto">
                        <p className="text-center text-themeLightBlue font-semibold">
                            ¿Quieres saber más?
                        </p>
                        <p className="text-center text-sm font-semibold mb-3 text-gray-700">
                            Comunícate con nosotros
                        </p>
                        <CardContact
                            image={
                                <Image
                                    className="rounded-full filter brightness-95 "
                                    src="/images/convenios/encargado.png"
                                    width="600"
                                    height="600"
                                />
                            }
                            area="Sectorista"
                            encargado="Rosa Margarita Bances Mimbela"
                            phone="984713266"
                            mail="rosabances@cclam.org.pe"
                        />
                    </div>
                </div>
            </section>
        </Layout>
    );
}

const ConvenioCard = ({ empresa, beneficio, imageSrc }) => (
    <div className="bg-white w-64 p-5 rounded-3xl flex flex-col shadow-close">
        <div className="w-7/12	mx-auto">
            <Image
                src={imageSrc}
                width="50"
                height="50"
                layout="responsive"
                objectFit="contain"
            />
        </div>
        <div className="text-center mt-5">
            <p className="text-gray-500 font-medium mb-3">Beneficio</p>
            <p className="text-sm mb-6">{beneficio}</p>
            <a href={`https://wa.me/51984632346?text=Hola!%20Quiero%20saber%20más%20sobre%20el%20convenio%20con%20${empresa.replace(/ /g,"%20")}`} target="_blank" className="bg-themeLightBlue bg-opacity-20 rounded-full px-3 py-1 text-sm text-themeLightBlue shadow-sm hover:bg-opacity-70 hover:text-white">Saber más</a>
        </div>
    </div>
);
