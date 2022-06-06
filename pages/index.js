import Head from "next/head";
import Image from "next/image";
import Layout, { siteTitle } from "../components/layout";
import Link from 'next/link'
import Typing from "../components/Typing";
import ConveniosSection from "../components/Home/ConveniosSection";
import Carrousel from "../components/Home/AreasCarousel/index";
import ConsejoCarousel from "../components/Home/ConsejoCarousel.js/index";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { list as listcurso } from "../redux/actions/curso"
import { list as listactividad } from "../redux/actions/actividad"
import ContenidoExtra from "../components/ContenidoExtra";
import moment from 'moment'
import 'moment/locale/es'
import Calendar from "../components/Calendar";
// import GoogleAdd from "../components/GoogleAdd";
moment.locale('es')

export default function Home() {
    const router = useRouter();
    let [isOpen, setIsOpen] = useState(false);
    const [listExtra, setListExtra] = useState([])


    const dispatch = useDispatch();
    const { cursoList } = useSelector(({ curso }) => curso);
    const { actividadList } = useSelector(({ actividad }) => actividad);

    const toogleModal = () => {
        setIsOpen(!isOpen)
    }

    const openContenidoExtra = (selected, tipo) => {
        if (tipo === "curso") {
            setListExtra(cursoList?.filter((c, i) => i < 3).slice(selected, cursoList?.filter((c, i) => i < 3).length).concat(cursoList?.filter((c, i) => i < 3).slice(0, selected)))
        } else {
            setListExtra(
                actividadList?.filter((c, i) => new Date(c.fechaFin).getTime() >= Date.now())?.filter((c, i) => i < 3).slice(selected, actividadList?.filter((c, i) => i < 3).length).concat(actividadList?.filter((c, i) => i < 3).slice(0, selected))
                    .sort((a, b) => {
                        if (a.name > b.name) {
                            return 1;
                        }
                        if (a.name < b.name) {
                            return -1;
                        }
                        return 0;
                    })
            )
        }
        toogleModal()
    }

    useEffect(() => {
        dispatch(listcurso())
        dispatch(listactividad())
    }, [])

    const [showComunicado, setshowComunicado] = useState(true)

    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <header className="relative bg-themeBlue">
                <div className="relative min-h-screen bg-landing bg-cover bg-left flex flex-wrap content-center">
                    <div className="relative align-middle mt-10">
                        <div className="text-left p-6 mx-6 my-auto">
                            <p className="text-sm lg:text-base md:text-base sm:text-base block text-yellow-400  font-semibold mb-3 tracking-widest">
                                CÁMARA DE COMERCIO Y PRODUCCIÓN DE LAMBAYEQUE
                            </p>
                            <h1 className="text-3xl lg:text-7xl md:text-7xl sm:text-6xl tracking-tight font-black text-white">
                                <span className="block mb-2">Seguimos</span>
                                <Typing
                                    phrases={[
                                        "Cambiando",
                                        "Mejorando",
                                        "Transformando",
                                    ]}
                                />
                            </h1>
                            <p className="mt-3 text-white max-w-xl text-base lg:text-xl md:text-xl sm:text-xl mb-6">
                                Nos seguimos transformando para continuar siendo el motor de nuestra región, tenemos nuevos servicios digitales para potenciar tu negocio.
                            </p>
                            <iframe src="https://www.facebook.com/plugins/like.php?href=https%3A%2F%2Fwww.facebook.com%2Fcclambayeque%2F&width=130&layout=button_count&action=like&size=small&share=false&height=21&appId" width="220" height="46" style={{ border: "none", overflow: "hidden" }} scrolling="no" frameBorder="0" allowFullScreen={true} allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
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
                </div>
            </header>
            <section id="areas" className="relative min-h-screen">
                <Carrousel />
            </section>
            <ConveniosSection />
            <section id="servicios-asociados" className="text-center mt-4 mb-24">
                <h2 className="text-3xl lg:text-5xl md:text-5xl sm:text-6xl font-extrabold text-themeBlue ">
                    Servicios de asociados
                </h2>
                <h3 className="text-base lg:text-xl md:text-xl sm:text-xl font-normal mt-2 text-themeBlue">
                    Encuentra productos y/o servicios de nuestros asociados
                </h3>
                <div className="flex justify-center flex-wrap mt-10 gap-10">
                    <div className="w-80 shadow-md rounded-md bg-white ">
                        <a href="https://bit.ly/3COTjc9" target="_blank" rel="noreferrer">
                            <video className="rounded-md" height="240" autoPlay={true} muted={true} loop={true}>
                                <source src="/videos/serviciosasociados/auna.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </a>
                        <div className="text-gray-600 text-sm p-4">
                            <p>
                                Conoce los Paquetes de Gastroenterología a tarifas preferenciales👨‍⚕️ en #ClínicasAuna sede Chiclayo. T&C: <a href="https://bit.ly/3COTjc9" target="_blank" rel="noreferrer" className="text-blue-600">https://bit.ly/3COTjc9</a>
                            </p>
                            <br />
                            <p>
                                Agenda tu cita llamando al (074) 749 333
                            </p>
                        </div>
                    </div>
                    <div className="w-96 my-auto rounded-md shadow-md ">
                        <Image
                            className="rounded-md"
                            src="/images/serviciosasociados/convocatoria-mindef.jpeg"
                            width={579}
                            height={254}
                            layout="responsive"
                        />
                    </div>
                    <div className="w-80 h-fit my-auto rounded-md shadow-md">
                        <Image
                            className="rounded-md"
                            src="/images/serviciosasociados/convocatoria-mindef2.jpeg"
                            width={380}
                            height={491.797}
                            layout="responsive"
                        />
                    </div>
                </div>
            </section>
            <section id="video" className="hidden md:block relative">
                <div className="static">
                    <div className="min-w-full overflow-hidden">
                        <div className="embed-container">
                            <iframe src='https://www.youtube.com/embed/-hJtGc8vMOQ?autoplay=1&mute=1&controls=0&modestbranding&Version=3&loop=1&playlist=-hJtGc8vMOQ'
                                frameBorder='0'
                                allow='autoplay; encrypted-media'
                                allowFullScreen
                                title="Video promocional de áreas"
                            />
                        </div>
                    </div>
                    <div className="absolute h-full min-w-full top-0 bg-themeBlue bg-opacity-70 z-0 select-none"></div>
                </div>
            </section>
            <section
                id="conciliacion"
                className="relative bg-themeWhite flex flex-wrap content-center overflow-hidden lg:min-h-screen"
            >
                <div className="mx-10 lg:ml-20 w-full lg:w-6/12 text-center lg:text-left">
                    <TitleHeading>
                        <p className="font-black leading-tight">Centro de </p>
                        <p className="font-black text-themeBlue leading-tight">
                            Solución de disputas
                        </p>
                    </TitleHeading>
                    <p className="font-semibold text-themeLightBlue text-2xl mt-3 leading-none">
                        ¡Procesos rápidos y correctos!
                    </p>
                    <div className="flex flex-col flex-wrap mt-10">
                        <Link href={`/solucion-de-disputas/centro-de-arbitraje`}>
                            <a>
                                <div className="mb-4 w-full lg:w-96 bg-blue-500 bg-opacity-0 px-5 py-2 rounded-full text-gray-600 flex transition duration-500 ease-in-out transform hover:scale-105 cursor-pointer">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-blue-500 mr-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                                    </svg>
                                    <p className="my-auto text-base">Centro de Arbitraje</p>
                                </div>
                            </a>
                        </Link>
                        <Link href={`/solucion-de-disputas/centro-de-conciliacion`}>
                            <a>
                                <div className="mb-4 w-full lg:w-96 bg-blue-500 bg-opacity-0 px-5 py-2 rounded-full text-gray-600 flex transition duration-500 ease-in-out transform hover:scale-105 cursor-pointer">
                                    <svg viewBox="0 0 640 512" className="h-7 w-7 text-blue-500 mr-5" focusable="false" role="img" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M434.7 64h-85.9c-8 0-15.7 3-21.6 8.4l-98.3 90c-.1.1-.2.3-.3.4-16.6 15.6-16.3 40.5-2.1 56 12.7 13.9 39.4 17.6 56.1 2.7.1-.1.3-.1.4-.2l79.9-73.2c6.5-5.9 16.7-5.5 22.6 1 6 6.5 5.5 16.6-1 22.6l-26.1 23.9L504 313.8c2.9 2.4 5.5 5 7.9 7.7V128l-54.6-54.6c-5.9-6-14.1-9.4-22.6-9.4zM544 128.2v223.9c0 17.7 14.3 32 32 32h64V128.2h-96zm48 223.9c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16zM0 384h64c17.7 0 32-14.3 32-32V128.2H0V384zm48-63.9c8.8 0 16 7.2 16 16s-7.2 16-16 16-16-7.2-16-16c0-8.9 7.2-16 16-16zm435.9 18.6L334.6 217.5l-30 27.5c-29.7 27.1-75.2 24.5-101.7-4.4-26.9-29.4-24.8-74.9 4.4-101.7L289.1 64h-83.8c-8.5 0-16.6 3.4-22.6 9.4L128 128v223.9h18.3l90.5 81.9c27.4 22.3 67.7 18.1 90-9.3l.2-.2 17.9 15.5c15.9 13 39.4 10.5 52.3-5.4l31.4-38.6 5.4 4.4c13.7 11.1 33.9 9.1 45-4.7l9.5-11.7c11.2-13.8 9.1-33.9-4.6-45.1z"></path></svg>
                                    <p className="my-auto text-base">Centro de Conciliación Extrajudicial</p>
                                </div>
                            </a>
                        </Link>
                        {/* <Link href={`/solucion-de-disputas/junta-resolucion-disputas`}>
                            <a>
                                <div className="w-full lg:w-96 bg-blue-500 bg-opacity-0 px-5 py-2 rounded-full text-gray-600 flex transition duration-500 ease-in-out transform hover:scale-105 cursor-pointer">
                                    <svg viewBox="0 0 448 512" className="h-7 w-7 text-blue-500 mr-5" focusable="false" role="img" fill="currentColor" xmlns="http://www.w3.org/2000/svg" ><path fill="currentColor" d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm95.8 32.6L272 480l-32-136 32-56h-96l32 56-32 136-47.8-191.4C56.9 292 0 350.3 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-72.1-56.9-130.4-128.2-133.8z"></path></svg>
                                    <p className="my-auto text-base">Junta de resolución de disputas</p>
                                </div>
                            </a>
                        </Link> */}
                    </div>
                </div>
                <div className="w-52 mt-10 lg:mt-0 lg:w-96 mx-auto">
                    <Image
                        className="rounded-full shadow-close"
                        src={`${process.env.STORAGE_URL_FT}/images/soluciondisputas/encargados.png`}
                        width="600"
                        height="600"
                        objectFit="cover"
                        alt="Encargados de solución de disputas"
                    />
                </div>
            </section>
            {/* <section id="googleads" className="flex justify-center relative overflow-y h-32 w-full">
                <GoogleAdd slot_id="5806654043" />
            </section> */}
            <section
                id="contigoempresa"
                className="relative bg-themeWhite overflow-hidden lg:min-h-screen flex flex-col flex-wrap content-center"
            >
                <div className="w-full text-center">
                    <TitleHeading>
                        <p className="font-black leading-tight">Contigo{' '}
                            <span className="font-black text-themeBlue leading-tight">
                                empresa
                            </span></p>
                    </TitleHeading>
                    <p className="font-semibold text-themeLightBlue text-xl mt-3 mx-3">
                        ¡Entrevistas, noticias, historias de éxito y más!
                    </p>
                </div>
                <div className="flex flex-wrap justify-center lg:gap-5 px-5 mt-10">
                    <div className="text-center rounded-3xl hover:scale-105 transition duration-500 ease-in-out">
                        <Image
                            className="rounded-3xl shadow-xl "
                            src={`${process.env.STORAGE_URL_FT}/images/ceentrevistas.jpg`}
                            width="411"
                            height="231"
                            alt="Entrevistas thumbnail"
                        />
                    </div>
                    <div className="text-center rounded-3xl hover:scale-105 transition duration-500 ease-in-out">
                        <Image
                            className="rounded-3xl shadow-xl "
                            src={`${process.env.STORAGE_URL_FT}/images/cenoticias.jpg`}
                            width="411"
                            height="231"
                            alt="Noticias thumbnail"
                        />
                    </div>
                    <div className="text-center rounded-3xl hover:scale-105 transition duration-500 ease-in-out">
                        <Image
                            className="rounded-3xl shadow-xl "
                            src={`${process.env.STORAGE_URL_FT}/images/cehistoriasexito.jpg`}
                            width="411"
                            height="231"
                            alt="Historias de éxito thumbnail"
                        />
                    </div>
                </div>
                <Button
                    className="w-max mx-auto mt-10 transition-all duration-500 ease-in-out hover:-translate-x-3"
                    execfunc={() =>
                        router.push("/contigo-empresa")
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
            </section>
            {/* <section id="googleads2" className="flex justify-center relative overflow-y h-32 w-full">
                <GoogleAdd slot_id="7303568544" />
            </section> */}
            <section
                id="eventos"
                className="relative bg-themeWhite overflow-hidden min-h-screen h-full py-20 lg:py-6"
            >
                <div className="w-full text-center">
                    <TitleHeading>
                        <p className="font-black">Agenda de {" "}
                            <span className="font-black text-themeBlue">
                                eventos y actividades
                            </span>
                        </p>
                    </TitleHeading>
                    <Button className="mt-5 mx-auto"
                        execfunc={() =>
                            router.push("/galeria/actividades")
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
                <div className="relative w-full flex justify-center mt-12 p-3">
                    <Calendar
                        title={"Eventos"}
                        events={actividadList}
                    />
                </div>
            </section>
            <section
                id="cursos"
                className="relative bg-themeWhite overflow-hidden min-h-screen h-full py-20 lg:py-20 my-20"
            >
                <div className="w-full text-center">
                    <TitleHeading>
                        <p className="font-black leading-tight">Centro de
                            <span className="font-black text-themeBlue leading-tight">
                                Formación y Desarrollo Empresarial
                            </span>
                        </p>
                    </TitleHeading>
                    <Paragraph className="mt-5 ">
                        <span className="font-semibold">
                            Programas de capacitación
                        </span>{" "}
                        empresarial para mejorar la competitividad personal y
                        laboral.
                    </Paragraph>
                    <Button className="mt-5 mx-auto"
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
                <div className="relative w-full flex justify-center mt-12 p-3">
                    <Calendar
                        title={"Cursos"}
                        events={cursoList}
                    />
                </div>
            </section>
            <section
                id="consejo-directivo"
                className="relative min-h-screen h-600px mx-auto pb-10 bg-themeWhite"
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
                            2022 - 2025
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
            <ContenidoExtra isOpen={isOpen} lista={listExtra} toogleModal={toogleModal} />
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
        className={`${className} text-sm lg:text-base md:text-base  flex bg-themeLightBlue text-white font-semibold rounded-full shadow-md py-2 px-5`}
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
