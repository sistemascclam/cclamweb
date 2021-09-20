import Head from "next/head";
import Image from "next/image";
import Layout, { siteTitle } from "../components/layout";
import Typing from "../components/Typing";
import ConveniosSection from "../components/Home/ConveniosSection";
import Carrousel from "../components/Home/AreasCarousel/index";
import ConsejoCarousel from "../components/Home/ConsejoCarousel.js/index";
import { useRouter } from "next/router";
import cursos from "../content/static/cursospromo.json";
import eventos from "../content/static/eventospromo.json";
import ModalImage from "../components/ModalImage";
import { useState } from "react";

export default function Home() {
    const router = useRouter();
    let [isOpen, setIsOpen] = useState(false);
    let [imageModal, setImageModal] = useState(<></>);

    const toogleModal = (image) => {
        if (image) setImageModal(image);
        setIsOpen(!isOpen);
    };
    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <header className="relative h-screen bg-hero-pattern bg-cover  shadow-card flex flex-wrap content-center">
                <Image
                    src={"/images/landing.png"}
                    alt="Logo CCLAM"
                    layout="fill"
                    objectFit="cover"
                    quality="100"
                />
                <div className="relative bottom-0 left-0 ">
                    <div className="text-left p-6 mx-6 my-auto">
                        <p className="text-sm lg:text-base md:text-base sm:text-base block text-yellow-400  font-semibold mb-3 tracking-widest">
                            CÁMARA DE COMERCIO Y PRODUCCIÓN DE LAMBAYEQUE
                        </p>
                        <h1 className="text-3xl lg:text-7xl md:text-7xl sm:text-6xl tracking-tight font-extrabold text-white">
                            <span className="block mb-2">Seguimos</span>
                            <Typing
                                phrases={[
                                    "cambiando",
                                    "mejorando",
                                    "transformando",
                                ]}
                            />
                        </h1>
                        <p className="mt-3 text-white max-w-xl text-base lg:text-xl md:text-xl sm:text-xl">
                            Nos seguimos transformando para continuar siendo el motor de nuestra región, tenemos nuevos servicios digitales para potenciar tu negocio.
                        </p>
                    </div>
                </div>
                <div className="absolute bottom-0 my-6 py-6 inset-x-0">
                    <a
                        href="#areas"
                        className="rounded-full h-12 w-12 bg-white flex items-center justify-center text-themeBlue mx-auto"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </a>
                </div>
            </header>
            <section id="areas" className="relative h-screen">
                <Carrousel />
            </section>
            <ConveniosSection />
            <section id="video" className="relative">
                <div className="static">
                    <div className="min-w-full overflow-hidden">
                        <video
                            width="1800"
                            height="759"
                            muted
                            autoPlay
                            loop
                            playsInline
                        >
                            <source src={"videos/video.mp4"} type="video/mp4" />
                            Tu buscador no soporta este tipo de video.
                        </video>
                    </div>
                    <div className="absolute h-full min-w-full top-0 bg-themeBlue bg-opacity-70 z-0 select-none"></div>
                </div>
            </section>
            <section
                id="cursos"
                className="relative bg-themeWhite my-20 flex overflow-hidden lg:min-h-screen"
            >
                <div className="mx-10 lg:ml-20 my-auto w-6/12">
                    <TitleHeading>
                        <p className="font-black leading-tight">Centro de </p>
                        <p className="font-black text-themeBlue leading-tight">
                            Formación y Desarrollo Empresarial
                        </p>
                    </TitleHeading>
                    <Paragraph className="mt-5 ">
                        <span className="font-semibold">
                            Programas de capacitación
                        </span>{" "}
                        empresarial para mejorar la competitividad personal y
                        laboral.
                    </Paragraph>
                    <Button
                        className="mt-5"
                        execfunc={() =>
                            router.push("/servicios/desarrollo-empresarial")
                        }
                    >
                        Saber más
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 my-auto ml-2"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 5l7 7-7 7"
                            />
                        </svg>
                    </Button>
                </div>
                <div className="relative lg:w-5/12 lg:translate-x-28 ">
                    {cursos
                        ?.filter((c, i) => i < 3)
                        .map((c, i) => (
                            <div
                                key={`cursos_${i}`}
                                className={`absolute w-96 lg:w-full shadow-card rounded-xl  ${i === 0
                                        ? "translate-x-10 lg:translate-x-60"
                                        : i === 1
                                            ? "translate-x-12 lg:translate-x-64"
                                            : "translate-x-14 lg:translate-x-72"
                                    }  transition duration-700 ease-in-out transform ${i === 2
                                        ? "hover:-translate-x-0"
                                        : "hover:-translate-x-5"
                                    }`}
                                onClick={() =>
                                    toogleModal(
                                        <Image
                                            className="rounded-xl"
                                            src={`/images/servicios/desarrolloempresarial/cursos/${c.curso}`}
                                            width="663"
                                            height="663"
                                            layout="responsive"
                                        />
                                    )
                                }
                            >
                                <Image
                                    className="rounded-xl cursor-pointer"
                                    src={`/images/servicios/desarrolloempresarial/cursos/${c.curso}`}
                                    width="663"
                                    height="663"
                                    layout="responsive"
                                />
                            </div>
                        ))}
                </div>
            </section>
            <section
                id="eventos"
                className="relative bg-themeWhite overflow-hidden min-h-screen h-full flex py-20 lg:py-0"
            >
                <div className="relative lg:w-5/12">
                    {eventos
                        ?.filter((c, i) => i < 3)
                        .map((c, i) => (
                            <div
                                key={`event_${i}`}
                                className={`absolute w-96 lg:w-full shadow-card rounded-xl ${i === 0
                                        ? "-translate-x-60"
                                        : i === 1
                                            ? "-translate-x-64"
                                            : "-translate-x-72"
                                    } transition duration-700 ease-in-out transform ${i === 2
                                        ? "lg:hover:-translate-x-0 hover:-translate-x-48"
                                        : "lg:hover:-translate-x-2 hover:-translate-x-52"
                                    } `}
                                onClick={() => toogleModal(
                                    <Image
                                        className="rounded-xl"
                                        src={`/images/eventos/${c.evento}`}
                                        width="663"
                                        height="663"
                                        layout="responsive"
                                    />)}
                            >
                                <Image
                                    className="rounded-xl cursor-pointer"
                                    src={`/images/eventos/${c.evento}`}
                                    width="663"
                                    height="663"
                                    layout="responsive"
                                />
                            </div>
                        ))}
                </div>
                <div className="w-5/12 text-right ml-auto mx-10 lg:mr-20 h-full">
                    <TitleHeading>
                        <p className="font-black">Agenda de</p>
                        <p className="font-black text-themeBlue mt-4">
                            eventos y actividades
                        </p>
                    </TitleHeading>
                    <Button className="mt-5 ml-auto"
                        execfunc={() =>
                            router.push("/galeria/eventos")
                        }>
                        Saber más
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 my-auto ml-2"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 5l7 7-7 7"
                            />
                        </svg>
                    </Button>
                </div>
            </section>
            <section
                id="consejo-directivo"
                className="relative h-screen mx-auto pb-10 bg-themeWhite"
            >
                <div className="h-full w-full absolute rounded-2xl shadow-close bg-fachadacclam bg-cover">
                    <div className="absolute bg-themeBlue bg-opacity-70 w-full h-full rounded-2xl "></div>
                </div>
                <div className="absolute w-full text-center h-full flex flex-col content-center">
                    <div className="my-auto">
                        <TitleHeading>
                            <p className="text-white font-extrabold ">
                                Consejo directivo
                            </p>
                        </TitleHeading>
                        <p className="text-themeLightBlue font-bold text-3xl mt-4">
                            2019 - 2022
                        </p>
                        <div className="my-10">
                            <ConsejoCarousel
                                className="shadow-close rounded-3xl"
                                slidesLg={5}
                                animation="transform lg:scale-75"
                            />
                        </div>
                    </div>
                </div>
            </section>
            <ModalImage
                isOpen={isOpen}
                imageModal={imageModal}
                toogleModal={toogleModal}
            />
        </Layout>
    );
}

const TitleHeading = ({ children, className }) => (
    <span
        className={`${className} text-3xl lg:text-5xl md:text-5xl sm:text-6xl `}
    >
        {children}
    </span>
);
const Paragraph = ({ children, className }) => (
    <span
        className={`${className} text-base lg:text-lg md:text-lg sm:text-lg leading-tight`}
    >
        {children}
    </span>
);
const Button = ({ children, className, execfunc }) => (
    <button
        onClick={execfunc}
        className={`${className} text-sm lg:text-base md:text-base  flex bg-themeLightBlue text-white font-semibold rounded-full shadow-md py-2 px-5 hover:opacity-80`}
    >
        {children}
    </button>
);

const DividerTop = ({ className }) => (
    <div className="relative h-20 -mt-20 ">
        <div className={`${className} w-full absolute overflow-hidden`}>
            <svg
                viewBox="0 0 500 150"
                preserveAspectRatio="none"
                height="100%"
                width="1800"
            >
                <path
                    d="M0.00,49.98 S 70.67,182.98 139.20,85.50 225.00,49.98 326.93,113.50 441.51,27.25 500.78,19.87 L500.00,150.00 L0.00,150.00 Z"
                    stroke="none"
                    fill="#F8F8F8"
                ></path>
            </svg>
        </div>
    </div>
);
