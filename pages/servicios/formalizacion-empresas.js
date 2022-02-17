import Head from 'next/head'
import Layout from '../../components/layout'
import { Transition } from '@headlessui/react'
import Image from "next/image";
import CardContact from "../../components/Servicios/CardContact"

var options = [
    {
        title: 'Servicios del área',
        subtitle: 'Todo lo que necesitas',
        items: [
            'Constitución de empresas en las formas societarias más reconocidas (SA; SAC; SRL; SCRL; EIRL).',
            'Búsqueda del nombre de la empresa en SUNARP.',
            'Elaboración de minuta – escritura.',
            'Inscripción en SUNARP.',
            'Gestión para la obtención del RUC.',
            'Inscripción como microempresa.',
            'Asesoramiento de regímenes tributarios favorables para su empresa.',
            'Gastos de notario, contador, abogado, entre otros trámites y asesoramientos extras. ',
        ],
        orientation: 'normal'
    },
    {
        subtitle: '¡Formaliza ahora!',
        title: 'Requisitos para formalizar',
        items: [
            'Nombre de la empresa.',
            'Giro del negocio.',
            'Copia del DNI de los socios.',
            'Copia del DNI de los cónyuges (En caso de ser casados).',
            'Dirección de la empresa.',
            'Nombre del representante legal.',
            'Detalles de los muebles, bienes o inmuebles a apostar a la empresa por cada uno de los participantes.',
        ],
        orientation: 'normal'
    },
]

export default function FormalizacionEmpresas() {
    return (
        <Layout>
            <Head>
                <title>CCLAM | Formalización de empresas</title>
            </Head>
            <div className="pt-32 lg:pt-28 lg:pb-28">
                <div className="flex flex-wrap flex-col lg:flex-row justify-between ">
                    <div className="my-auto mx-auto text-center">
                        <p className="font-extrabold text-3xl lg:text-5xl md:text-5xl sm:text-6xl "> Formalización de <span className="text-themeBlue">empresas</span> </p>
                        <p className="font-medium text-themeLightBlue mt-3 text-lg lg:text-2xl md:text-2xl sm:text-3xl ">¡Formaliza a menor costo y tiempo!</p>
                    </div>
                </div>
            </div>
            <section className="min-h-screen">
                <div className="relative px-0 lg:px-10 py-5 -mt-10 lg:-mt-28">
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
                                                src={`${process.env.STORAGE_URL_FT}/images/servicios/formalizacionempresas/encargado.png`}
                                                width="600"
                                                height="600"
                                            />
                                        }
                                        area="Formalización de empresas"
                                        encargado="Jorge Luis Chozo Cajusol"
                                        phone="984785915"
                                        mail="jchozo@cclam.org.pe"
                                    />
                                </div>
                                <div className="col-span-4 pl-5 text-gray-800">
                                    <p className="text-justify mt-5">
                                        El área de Formalización de Empresas: Ventanilla Única de la Centenaria Cámara de Comercio y Producción de Lambayeque brinda orientación gratuita y personalizada ayudando a la formalización de manera fácil, a bajo costo y en el menor tiempo.
                                    </p>
                                    <p className="text-justify mt-5">
                                        El asesoramiento es de manera continua identificando el tipo de empresa que más te convenga, brindando información precisa para iniciar tu negocio.
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