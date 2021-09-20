import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import CardStyled from '../components/CardStyled'
import ConsejoCarousel from '../components/Home/ConsejoCarousel.js/index'
import Image from "next/image";

export default function ConsejoDirectivo() {
    return (
        <Layout>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <section className="py-14">
                <div className="pt-32 text-center">
                    <h1 className="text-3xl lg:text-5xl md:text-5xl sm:text-6xl font-black">Consejo Directivo - Gerencia General <span className="block text-themeLightBlue mt-2">2019 - 2022</span></h1>
                </div>
                <div className="bg-white w-full my-14 shadow-close lg:px-28 px-6 py-6 lg:py-20 rounded-4xl">
                    <h3 className="font-extrabold text-themeLightBlue text-xl">GÉNESIS DE UNA CÁMARA IMPULSADORA DEL DESARROLLO DE LAMBAYEQUE</h3>
                    <p className="text-justify mt-5 text-gray-900 font-normal">
                        La Centenaria Cámara de Comercio y Producción de Lambayeque es una institución privada sin fines de lucro, con sólido prestigio ganado desde 1901. Integrada por personas naturales y jurídicas de los múltiples sectores como Agro y Agroindustria; Comercio; Comercio Exterior; Turismo; Educación; Construcción, Inmobiliaria y Afines; Profesionales en Proyectos, Tecnología de la Informática y Comunicación; Gestión del Talento Humano; Transportes y Proveedores; Asuntos Tributarios; Minería, Energía e Hidrocarburos; Metalmecánica e Industrias; Banca, Seguros, AFP’s y Microfinancieras; Mujer Empresaria Lambayecana; Salud y; Pesca Industrial.
                    </p>
                    <p className="text-justify mt-5 text-gray-900 font-normal">
                        Está dirigida por empresarios de éxito con amplia experiencia en el manejo institucional y con profundo conocimiento de la nueva dinámica de los negocios. Asimismo el Consejo Directivo y la Gerencia General no sólo se encargan de la comunidad empresarial, sino también participa en tareas que promuevan el desarrollo de nuestra región Lambayeque.
                    </p>
                    <CardStyled
                        title="PRESIDENTE DEL CONSEJO DIRECTIVO 2019 – 2022"
                        right={<Image
                            src="/images/consejo/presidente.png"
                            alt="Presidente de la CCLAM"
                            layout="fill"
                            objectFit="cover"
                            quality="100"
                        />}
                        left={<>
                            <p>Reciban el saludo fraterno del Consejo Directivo de la Centenaria Cámara de Comercio y Producción de Lambayeque, el gremio empresarial más grande del departamento que sigue en el constante trabajo por llevar en alto a nuestra Patria. La Centenaria Cámara de Comercio es la representación del sentir empresarial, del emprendimiento y de la búsqueda constante de alcanzar el éxito de las pequeñas, medianas y grandes empresas. Es por ello, que nuestra institución se ha convertido en el ente mediador de las diversas organizaciones públicas como privadas, con el objetivo de desaparecer las brechas burocráticas existentes.</p>
                            <p className="mt-5">Al empresariado nos corresponde cumplir con responsabilidad, ética y eficiencia nuestro rol, respetando el marco normativo nacional y los derechos de los trabajadores, cuidando el patrimonio arqueológico, histórico y el medioambiente, pero también aportando al conocimiento de la situación real en la que nos encontramos. Sobre esto último, la Cámara de Comercio y Producción de Lambayeque trabaja en un ambicioso plan que nos permita aplicar estrategias de investigación a fin de sincerar los indicadores económicos y sociales, insumos que no solo nos ayudarán a tomar decisiones mucho más inteligentes, sino también a formular una agenda de permanente actualización respecto a las necesidades departamentales.</p>
                        </>}
                    />
                    <div className="my-28">
                        <div className="relative mx-8 mb-3"><h3 className="text-themeLightBlue font-black text-lg">CONSEJO DIRECTIVO 2019 – 2022</h3></div>
                        <ConsejoCarousel />
                    </div>
                    <CardStyled
                        title="GERENCIA GENERAL"
                        right={<Image
                            src="/images/consejo/gerente.png"
                            alt="Gerente de la CCLAM"
                            layout="fill"
                            objectFit="cover"
                            quality="100"
                        />}
                        left={<>
                            <p>Como Gerente General de la Centenaria Cámara de Comercio y Producción de Lambayeque, gremio empresarial desde 1901, hago un extensivo agradecimiento especial a nuestros agremiados de los diferentes sectores, pues gracias a ellos nuestra institución camina firme, siendo ejemplo para otras organizaciones a paso seguro en el desarrollo empresarial de la Región.</p>
                            <p className="mt-5">De igual manera realizar un reconocimiento a los colaboradores de ésta Centenaria Institución por su entrega, sacrificio, esfuerzo por estar a la vanguardia de la tecnología y obtener el bienestar de nuestros asociados. Por este motivo, a nuestros asociados y a la población en general queremos expresarles que nuestras áreas siempre estarán a la disposición para resolver sus inquietudes y generar progreso. Contamos con el área de Formalización de Empresas: Ventanilla Única; Protestos y Moras; Centro de Formación y Desarrollo Empresarial; Ambientes Empresariales; Comercio Exterior; Centro de Solución de Disputas; Plataforma Tecnológica; entre otros. Así como otorgar grandes beneficios a nuestros asociados a través de convenios institucionales. Cabe señalar que nosotros seguimos trabajando para brindar nuevos servicios y beneficios en Pro de la competitividad para el desarrollo empresarial de nuestra región Lambayeque.</p>
                        </>}
                    />
                </div>
            </section>
        </Layout>
    )
}
