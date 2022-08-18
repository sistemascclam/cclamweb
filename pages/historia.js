import Head from 'next/head'
import Layout from '../components/layout'
import { Transition } from '@headlessui/react'

export default function Historia() {
    return (
        <Layout>
            <Head>
                <title>CCLAM | Historia</title>
            </Head>
            <section className="pb-4 mx-auto">
                <div className="mb-8 bg-empresarios bg-center h-96 bg-cover relative">
                    <div className='absolute bg-black bg-opacity-70 inset-0'>
                        <div className='relative flex items-end h-full p-10'>
                            <h1 className="text-3xl lg:text-5xl md:text-5xl sm:text-6xl font-black text-white">
                                Gremio empresarial de Lambayeque
                                <span className="block mt-2 text-xl font-normal">Conoce la historia de nuestra centenaria Cámara de Comercio de Lambayeque</span>
                            </h1>
                        </div>
                    </div>
                </div>
                <div className='px-10'>
                    <div className='w-full flex mt-6 lg:mt-12 p-6 lg:pl-10 flex-col lg:flex-row'>
                        <h3 className="font-extrabold text-themeBlue text-4xl w-full lg:w-4/12">Nuestra historia</h3>
                        <div className="max-w-4xl mx-auto flex flex-col gap-y-5 w-full lg:w-7/12">
                            <p className="text-themeBlue  text-2xl font-semibold">
                                Génesis de una cámara impulsadora del desarrollo de Lambayeque
                            </p>
                            <p className="text-gray-900 text-lg font-medium">
                                A finales del siglo XX Lambayeque se encontraba en pleno proceso de recuperación de la crisis económica, producto de la post guerra con Chile. La resquebrajada economía de la gran hacienda se reactiva con nuevas perspectivas de gestión que buscaban extender con eficiencia la producción de arroz y azúcar por nuestros valles.
                            </p>
                            <p className="text-gray-900 text-lg font-medium">
                                La estructura económica de Lambayeque descansaba en la gran hacienda azucarera y compartía su mercantil con los productores de arroz, medianos y pequeños propietarios agrícolas, comerciantes importadores y exportadores, artesanos, peones campesinos sin tierras y otras capas sociales. Por aquel entonces Lambayeque carecía de una institución que lidere el quehacer económico de nuestras organizaciones y la dirección de nuestro desarrollo.
                            </p>
                            <p className="text-gray-900 text-lg font-medium">
                                La necesidad de reglamentar, orientar, arbitrar, defender, sancionar, solicitar, acreditar, garantizar, etc., las relaciones mercantiles entre los agentes de la producción, la comercialización y los consumidores obligó a los empresarios de aquel tiempo a organizarse en torno a una institución defensora de sus intereses y con una alta investidura para que actúe como árbitro.
                            </p>
                            <p className="text-gray-900 text-lg font-medium">
                                La iniciativa nace a inicios de 1900 que acogía a empresarios como Narciso Salazar, Mariano Salazar Nicanor Carmona, Genaro Barragán Juan Aurich, Francisco Muro Agustín Torres, entre otros, quienes se reunían constantemente para dar forma a esta necesidad empresarial de organización, como es una Cámara de Comercio que una a todos los empresarios del departamento.
                            </p>
                            <p className="text-gray-900 text-lg font-medium">
                                Esta tarea fue desarrollada por Daniel C. Urrea, empresario activo y de gran convocatoria que además se desempeñaba como administrador de un banco local, hecho que le permitió convocar a la mayoría de los empresarios chiclayanos en el local del Banco del Perú y Londres con la finalidad de darle forma a una organización empresarial.
                            </p>
                            <p className="text-gray-900 text-lg font-medium">
                                Producto de dichas reuniones fueron nominados Don Nicanor Carmona Vílchez por Ferreñafe y Daniel C. Urrea por Chiclayo para que convoquen en un breve plazo a todos los empresarios a una reunión general para el día 27 de enero de 1901, para discutir la problemática económica del departamento, la situación actual de los empresarios y su dependencia del comercio exterior, etc.
                            </p>
                            <p className="text-gray-900 text-lg font-medium">
                                Finalmente acuerdan fundar la Cámara de Comercio y Agricultura de Lambayeque, el 21 de abril de 1945 se acuerda cambiar el nombre por Cámara de Comercio, Agricultura e Industrias del departamento de Lambayeque. Actualmente lleva la denominación de Cámara de Comercio y Producción de Lambayeque.
                            </p>
                        </div>
                    </div>
                    <div className='w-full flex mt-8 lg:mt-12 p-6 lg:pl-10 flex-col lg:flex-row'>
                        <h3 className="font-extrabold text-themeBlue text-4xl w-full lg:w-4/12">Misión, Visión y Valores</h3>
                        <div className="max-w-4xl gap-y-5 w-full lg:w-7/12 gap-10 flex flex-col">
                            <div className='flex p-5 rounded-xl '>
                                <div className=''>
                                    <svg className="text-themeBlue drop-shadow-2xl shadow-blue-500 w-14 h-14" viewBox="0 0 24 24" focusable="false" role="img" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
                                </div>
                                <div className='flex flex-col py-2 px-6'>
                                    <p className='font-bold text-lg'>Misión</p>
                                    <p className="mt-1">“Ejercer la representación de la actividad comercial, productiva y de servicios, promoviendo la competitividad con equidad y confianza, brindando servicios de calidad eficientes y oportunos a sus asociados, contribuyendo con el desarrollo económico, social y ambiental de la Región Lambayeque”.</p>
                                </div>
                            </div>
                            <div className='flex p-5 rounded-xl  mr-14'>
                                <div className=''>
                                    <svg className="text-themeBlue drop-shadow-2xl shadow-blue-500 w-14 h-14" viewBox="0 0 24 24" focusable="false" role="img" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                                </div>
                                <div className='flex flex-col py-2 px-6'>
                                    <p className='font-bold text-lg'>Visión</p>
                                    <p className="mt-1">“Ser la institución representativa de la actividad comercial, productiva y de servicios de la Macro Región Norte, ofreciendo servicios oportunos y de alta calidad a sus asociados orientando a la globalización de los negocios, contribuyendo con el desarrollo del país”.</p>
                                </div>
                            </div>
                            <div className='flex p-5 rounded-xl  mr-28'>
                                <div className=''>
                                    <svg className="text-themeBlue drop-shadow-2xl shadow-blue-500 w-14 h-14" viewBox="0 0 24 24" focusable="false" role="img" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                                </div>
                                <div className='flex flex-col py-2 px-6'>
                                    <p className='font-bold text-lg'>Valores</p>
                                    <p className="mt-1">Integridad y Respeto, Responsabilidad, Eficiencia, Sencillez y actitud de servicio, Crecimiento, Transparencia, Confianza, Transformación.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}
