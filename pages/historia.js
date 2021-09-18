import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'

export default function Historia() {
    return (
        <Layout>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <section className="py-14">
                <div className="pt-20 lg:pt-30 text-center mb-14">
                    <h1 className="text-3xl lg:text-5xl md:text-5xl sm:text-6xl font-black">Nuestra historia <span className="block text-themeLightBlue mt-2">Gremio empresarial de Lambayeque</span></h1>
                </div>
                <div className="bg-white w-full shadow-close px-5 lg:px-28 py-12 lg:py-20 rounded-4xl">
                    <h3 className="font-extrabold text-themeLightBlue text-xl">GÉNESIS DE UNA CÁMARA IMPULSADORA DEL DESARROLLO DE LAMBAYEQUE</h3>
                    <p className="text-justify mt-5 text-gray-900 text-lg font-normal">
                        A finales del siglo XX Lambayeque se encontraba en pleno proceso de recuperación de la crisis económica, producto de la post guerra con Chile. La resquebrajada economía de la gran hacienda se reactiva con nuevas perspectivas de gestión que buscaban extender con eficiencia la producción de arroz y azúcar por nuestros valles.
                    </p>
                    <p className="text-justify mt-5 text-gray-900 text-lg font-normal">
                        La estructura económica de Lambayeque descansaba en la gran hacienda azucarera y compartía su mercantil con los productores de arroz, medianos y pequeños propietarios agrícolas, comerciantes importadores y exportadores, artesanos, peones campesinos sin tierras y otras capas sociales. Por aquel entonces Lambayeque carecía de una institución que lidere el quehacer económico de nuestras organizaciones y la dirección de nuestro desarrollo.
                    </p>
                    <p className="text-justify mt-5 text-gray-900 text-lg font-normal">
                        La necesidad de reglamentar, orientar, arbitrar, defender, sancionar, solicitar, acreditar, garantizar, etc., las relaciones mercantiles entre los agentes de la producción, la comercialización y los consumidores obligó a los empresarios de aquel tiempo a organizarse en torno a una institución defensora de sus intereses y con una alta investidura para que actúe como árbitro.
                    </p>
                    <p className="text-justify mt-5 text-gray-900 text-lg font-normal">
                        La iniciativa nace a inicios de 1900 que acogía a empresarios como Narciso Salazar, Mariano Salazar Nicanor Carmona, Genaro Barragán Juan Aurich, Francisco Muro Agustín Torres, entre otros, quienes se reunían constantemente para dar forma a esta necesidad empresarial de organización, como es una Cámara de Comercio que una a todos los empresarios del departamento.
                    </p>
                    <p className="text-justify mt-5 text-gray-900 text-lg font-normal">
                        Esta tarea fue desarrollada por Daniel C. Urrea, empresario activo y de gran convocatoria que además se desempeñaba como administrador de un banco local, hecho que le permitió convocar a la mayoría de los empresarios chiclayanos en el local del Banco del Perú y Londres con la finalidad de darle forma a una organización empresarial.
                    </p>
                    <p className="text-justify mt-5 text-gray-900 text-lg font-normal">
                        Producto de dichas reuniones fueron nominados Don Nicanor Carmona Vílchez por Ferreñafe y Daniel C. Urrea por Chiclayo para que convoquen en un breve plazo a todos los empresarios a una reunión general para el día 27 de enero de 1901, para discutir la problemática económica del departamento, la situación actual de los empresarios y su dependencia del comercio exterior, etc.
                    </p>
                    <p className="text-justify mt-5 text-gray-900 text-lg font-normal">
                        Finalmente acuerdan fundar la Cámara de Comercio y Agricultura de Lambayeque, el 21 de abril de 1945 se acuerda cambiar el nombre por Cámara de Comercio, Agricultura e Industrias del departamento de Lambayeque. Actualmente lleva la denominación de Cámara de Comercio y Producción de Lambayeque.
                    </p>
                    <h3 className="font-extrabold text-themeLightBlue text-xl mt-20">RECONOCIMIENTO DE LAS GESTIONES DE LA CÁMARA</h3>
                    <p className="text-justify mt-5 text-gray-900 text-lg font-normal">
                        A dos años de instalada la Cámara de Comercio y Agricultura de Lambayeque, asume la Presidencia Don Aurelio Montenegro, quien reemplazaba a Daniel Urrea, que viajaba por razones de trabajo a Arequipa, donde va a impulsar la organización del empresario sureño.
                    </p>
                    <p className="text-justify mt-5 text-gray-900 text-lg font-normal">
                        La Cámara de Comercio siempre tuvo una posición deliberante, polémica, clara, apartidaria y siguiendo la ideología de la gestión empresarial. Es reconocida como una institución tutelar, básica para impulsar el desarrollo económico en nuestro país. De ahí su buen posicionamiento en la vida política nacional, por su reconocida defensa de los intereses lambayecanos, donde destacan:
                    </p>
                </div>
            </section>
        </Layout>
    )
}
