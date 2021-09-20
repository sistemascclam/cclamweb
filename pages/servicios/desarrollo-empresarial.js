import Head from 'next/head'
import Layout, { siteTitle } from '../../components/layout'
import Image from "next/image";
import CardContact from "../../components/Servicios/CardContact"
import { useState } from 'react';
import CarouselCourses from '../../components/CarouselCourses'

var options = [
    {
        title: 'Programas',
        subtitle: 'Conoce nuestros programas',
        items: [
            'Cursos presenciales y virtuales de corto y mediano plazo.',
            'Cursos de especialización.',
            'Talleres de corto y mediano plazo.',
            'Seminarios.',
            'Conferencias.',
            'Desayunos empresariales, y más.'
        ],
        orientation: 'normal'
    },
    {
        subtitle: 'Conoce los beneficios',
        title: 'Capacítate ahora',
        items: [
            'Capacitaciones diversas en diversas plataformas digitales.',
            'Acceder a capacitaciones de otras áreas que organiza nuestra institución.',
            'Certificados validados por la entidad organizadora del eventos.',
        ],
        orientation: 'normal'
    },
]

var especialidades = [
    {
        category: 'Administración', esp: 'Gerencia',
        image: '/images/servicios/desarrolloempresarial/especialidades/gerencia.jpg'
    },
    {
        category: 'Administración', esp: 'Banca y Finanzas',
        image: '/images/servicios/desarrolloempresarial/especialidades/finanzas.jpg'
    },
    {
        category: 'Administración', esp: 'Administración de Negocios',
        image: '/images/servicios/desarrolloempresarial/especialidades/administracion.jpg'
    },
    {
        category: 'Administración', esp: 'Administración Aduanera',
        image: '/images/servicios/desarrolloempresarial/especialidades/aduanas.jpg'
    },
    {
        category: 'Administración', esp: 'Desarrollo Económico y Contable',
        image: '/images/servicios/desarrolloempresarial/especialidades/conta.jpg'
    },
    {
        category: 'Administración', esp: 'Mercadeo',
        image: '/images/servicios/desarrolloempresarial/especialidades/mercadeo.jpg'
    },
    {
        category: 'Administración', esp: 'Asistencia',
        image: '/images/servicios/desarrolloempresarial/especialidades/asistencia.jpg'
    },
    {
        category: 'Informática y Comunicaciones', esp: 'Administración en redes',
        image: '/images/servicios/desarrolloempresarial/especialidades/redes.jpg'
    },
    {
        category: 'Informática y Comunicaciones', esp: 'Especialización básico de la línea de Microsoft Office',
        image: '/images/servicios/desarrolloempresarial/especialidades/office.jpg'
    },
    {
        category: 'Informática y Comunicaciones', esp: 'Especialización intermedio de la línea de Microsoft Office',
        image: '/images/servicios/desarrolloempresarial/especialidades/office.jpg'
    },
    {
        category: 'Informática y Comunicaciones', esp: 'Especialización intensivo de la línea de Microsoft Office',
        image: '/images/servicios/desarrolloempresarial/especialidades/office.jpg'
    },
    {
        category: 'Informática y Comunicaciones', esp: 'Manejo de multimedia',
        image: '/images/servicios/desarrolloempresarial/especialidades/multimedia.jpg'
    },
    {
        category: 'Informática y Comunicaciones', esp: 'Community Manager',
        image: '/images/servicios/desarrolloempresarial/especialidades/comunitymanager.jpg'
    },
    {
        category: 'Informática y Comunicaciones', esp: 'Marketing',
        image: '/images/servicios/desarrolloempresarial/especialidades/marketing.jpg'
    },
    {
        category: 'Informática y Comunicaciones', esp: 'Publicidad',
        image: '/images/servicios/desarrolloempresarial/especialidades/publicidad.jpg'
    },
    {
        category: 'Psicología', esp: 'Recursos Humanos y/o Talento Humano',
        image: '/images/servicios/desarrolloempresarial/especialidades/rrhh.jpg'
    },
    {
        category: 'Entre otras especialidades', esp: 'Educación laboral e institucional.',
        image: '/images/servicios/desarrolloempresarial/especialidades/gerencia.jpg'
    },
]

export default function DesarrolloEmpresarial() {
    return (
        <Layout>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <section className="min-h-screen">
                <div className="relative w-full">
                    <Image
                        src="/images/servicios/desarrolloempresarial/header.png"
                        width="1366"
                        height="505"
                        layout="responsive"
                    />
                </div>
                <div className="relative px-0 lg:px-10 py-5 -mt-20 lg:-mt-28">
                    <div className="bg-white w-full shadow-close px-5 lg:px-24 py-12 rounded-3xl mt-10">
                        <div className="flex flex-wrap lg:flex-nowrap">
                            <div className="w-56 mx-auto">
                                <CardContact
                                    image={
                                        <Image
                                            className="rounded-full filter brightness-95 "
                                            src="/images/servicios/desarrolloempresarial/encargado.png"
                                            width="600"
                                            height="600"
                                        />
                                    }
                                    area="Centro de Formación y Desarrollo Empresarial"
                                    encargado="Carmen Julia Sime Nieto"
                                    phone="944675625"
                                    mail="capacitacion@cclam.org.pe"
                                />
                            </div>
                            <div className="col-span-4 pl-5">
                                <p className="text-justify mt-5 text-base">
                                    El Centro de Formación y Desarrollo Empresarial de la Centenaria Cámara de Comercio y Producción de Lambayeque promueve permanentemente programas de capacitación empresarial para mejorar la competitividad personal y laboral. Cuenta con tarifas especiales participando de conferencias, talleres, seminarios, cursos de especialización, desayunos empresariales, diplomados y más.
                                </p>
                                <p className="text-justify mt-5 text-base">
                                    Además estamos en alianzas con diversas instituciones privadas y estatales para desarrollar una serie de eventos de formación y diseñar nuevas capacidades que estén a la vanguardia de la tecnología.
                                </p>
                            </div>
                        </div>
                        <Especialidades />
                        <div>
                            {
                                options.map((op, j) =>
                                    <Option key={j} {...op} />
                                )
                            }
                        </div>
                        <ProximasCapacitaciones />
                    </div>
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

const Especialidades = () => {
    const [categoryselected, setcategoryselected] = useState("");
    const [maxviewed, setmaxviewed] = useState(6);
    return (
        <div className="text-center my-14">
            <p className="font-bold text-3xl">Especialidades</p>
            <p className="text-base text-themeLightBlue mt-1">¿Qué tipo de cursos te interesan?</p>
            <div className="flex justify-between my-10 overflow-x-auto">
                <button className={`font-bold px-3 text-lg ${categoryselected === "" ? 'text-themeLightBlue border-solid border-b-4 border-themeLightBlue ' : ''} `} onClick={() => setcategoryselected("")} >Todo</button>
                {
                    [...new Set(especialidades.map(e => e.category))].map((e, i) => <button key={i} className={`font-bold px-3 text-lg ${categoryselected === e ? 'text-themeLightBlue border-solid border-b-4 border-themeLightBlue ' : ''} `} onClick={() => setcategoryselected(e)}>{e}</button>)
                }
            </div>
            <div className="flex flex-wrap justify-center gap-4">
                {
                    especialidades.filter(e => categoryselected === "" ? e : e.category === categoryselected).filter((e, i) => i < maxviewed).map((e, i) =>
                        <div className="w-80" key={`${i}`}>
                            <div className="relative w-80 h-56" >
                                <Image
                                    className="rounded-3xl"
                                    src={e.image}
                                    layout="fill"
                                    objectFit="cover"
                                />
                                <div className="absolute bg-themeBlue bg-opacity-30 inset-0 rounded-3xl"></div>
                                <div className="absolute inset-0 rounded-3xl flex flex-wrap content-center ">
                                    <div className="flex flex-col mx-auto">
                                        <p className="text-white text-sm font-light">{e.category}</p>
                                        <p className="text-white text-2xl font-bold">{e.esp}</p>
                                    </div>
                                </div>
                            </div>
                            <p className="text-xs mt-1">Infórmate llamando a 944789544 o enviando un correo a campus@cclam.org.pe</p>
                        </div>
                    )
                }
            </div>
            {
                maxviewed < especialidades.length &&
                <button className="mt-5 text-themeLightBlue" onClick={() => setmaxviewed(maxviewed + 3)}>Ver más</button>
            }
        </div>
    );
}

const ProximasCapacitaciones = () => {
    return (
        <div className="text-center my-14">
            <p className="text-base text-themeLightBlue mb-1">Aprende con nosotros</p>
            <p className="font-bold text-3xl">Próximas capacitaciones</p>
            <div className="my-10 flex flex-wrap justify-center gap-4">
                <CarouselCourses />
            </div>
            <p className="italic text-lg text-gray-500">"Tu mejor inversión para mejorar la competitividad profesional y laboral"</p>
        </div>
    );
}
