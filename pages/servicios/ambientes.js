import Head from 'next/head'
import Layout, { siteTitle } from '../../components/layout'
import Image from "next/image";
import CardContact from "../../components/Servicios/CardContact"

var options = [

    {
        title: 'Auditorio y directorio',
        subtitle: 'Realiza tus reuniones con nosotros',
        items: [
            'Internet.',
            'Proyector.',
            'Equipo de sonido.',
            'Aire acondicionado.',
            'Ecran.',
            'Pizarra acrílica.',
            'Micrófonos alámbricos.',
            'Micrófonos inalámbricos.',
            'Ambientes cómodos.',
        ],
        orientation: 'normal',
        image: <Image
            className="rounded-3xl"
            src='/images/servicios/ambientes/leftimage.jpg'
            width="763"
            height="368"
        />
    },
    {
        subtitle: 'Para lo que necesites',
        title: 'Exclusividad',
        items: [
            'Reuniones de trabajo.',
            'Encuentros de negocio.',
            'Conferencias de prensa.',
            'Capacitaciones diversas (Seminarios, talleres, otros).',
            'Lanzamientos de productos y servicios.',
            'Celebraciones protocolares.',
            'Mesas de trabajo.',
            'Visitas empresariales.',
            'Y más.',
        ],
        orientation: 'reverse',
        image: <Image
            className="rounded-3xl"
            src='/images/servicios/ambientes/section2.jpg'
            width="626"
            height="417"
        />
    },
    {
        subtitle: 'Para lo que necesites',
        title: 'Comodidad empresarial',
        items: [
            'Descuentos especiales.',
            'Disponibilidad inmediata.',
            'Bajos costos.',
        ],
        orientation: 'normal',
        image: <Image
            className="rounded-3xl"
            src='/images/servicios/ambientes/section3.jpg'
            width="624"
            height="417"
        />
    },
]

export default function AlquilerAmbientes() {
    return (
        <Layout>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <div className="pt-32 pb-10 lg:pt-28 lg:pb-28">
                <div className="flex flex-wrap flex-col lg:flex-row justify-between ">
                    <div className="my-auto mx-auto text-center">
                        <p className="font-extrabold text-3xl lg:text-5xl md:text-5xl sm:text-6xl "> Ambientes <span className="text-themeBlue">empresariales</span> </p>
                        <p className="font-medium text-themeLightBlue text-2xl mt-3">¡Auditorio y directorio a tu servicio!</p>
                    </div>
                </div>
            </div>
            <section className="min-h-screen">
                <div className="relative px-0 -mt-10 lg:-mt-28">
                    <div className="bg-white w-full shadow-close px-5 lg:px-24 py-12 rounded-3xl mt-10">
                        <div className="flex flex-wrap lg:flex-nowrap">
                            <div className="w-56 mx-auto">
                                <CardContact
                                    image={
                                        <Image
                                            className="rounded-full filter brightness-95 "
                                            src="/images/servicios/ambientes/encargado.png"
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
                            <div className="col-span-4 lg:pl-5">
                                <p className="text-justify mt-5 text-base">
                                    El área de Ambientes Empresariales de la Centenaria Cámara de Comercio y Producción de Lambayeque invita a realizar reuniones de trabajo, encuentros de negocio, conferencias de prensa, capacitaciones, lanzamiento de productos, entre otros eventos en nuestros cómodos espacios de auditorio y directorio.
                                </p>
                            </div>
                        </div>
                        <div>
                            {
                                options.map((op, j) =>
                                    <Option key={j} {...op} />
                                )
                            }
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}


const Option = ({ title, subtitle, items, orientation, image }) =>
    <div className={`py-5 lg:pb-20 flex justify-between`}>
        <div className={`hidden lg:flex w-1/2 flex-wrap content-center ${orientation === 'normal' ? 'mr-10' : 'order-last ml-10'}`}>
            {image}
        </div>
        <div className={`w-full lg:w-1/2`}>
            <div className="py-10 flex flex-col">
                <div>
                    <p className="text-base text-themeLightBlue mb-1">{subtitle}</p>
                    <p className="font-bold text-3xl">{title}</p>
                </div>
                <div className="col-span-2 grid grid-cols-2 gap-4 text-base font-light mt-5">
                    {
                        items.map((it, ii) =>
                            <div className="flex mb-1" key={ii}>
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
        </div>
    </div>