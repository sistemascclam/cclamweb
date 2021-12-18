import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import CardStyled from '../components/CardStyled'
import Image from "next/image"
import { Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'

export default function MisionVisionValores() {
    return (
        <Layout>
            <Head>
                <title>CCLAM | Misión Visión y Valores</title>
            </Head>
            <section className="py-24 flex flex-wrap">
                <div className="w-full lg:w-1/2 px-10">
                    <Transition
                        show={true}
                        appear={true}
                        enter="transform transition duration-[1000ms]"
                        enterFrom="opacity-0 -tranlate-y-6"
                        enterTo="opacity-100 translate-y-0"
                        leave="transform duration-200 transition ease-in-out"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 "
                    >
                    <Image
                        alt={"Vision"}
                        src={`${process.env.STORAGE_URL_FT}/svgs/vision.svg`}
                        width="200"
                        height="200"
                        layout="responsive"
                        objectFit="cover"
                    />
                    </Transition>
                </div>
                <div className="w-full px-10 lg:w-1/2 lg:pr-10">
                    <Transition
                        show={true}
                        appear={true}
                        enter="transform transition duration-[1000ms]"
                        enterFrom="opacity-0 translate-x-10"
                        enterTo="opacity-100 translate-x-0"
                        leave="transform duration-200 transition ease-in-out"
                        leaveFrom="opacity-100 translate-x-0 "
                        leaveTo="opacity-0 "
                    >
                        <div className="bg-white rounded-xl p-5 shadow-sm mb-4">
                            <div className="flex content-center">
                                <svg className="text-themeLightBlue" viewBox="0 0 24 24" height="40" width="40" focusable="false" role="img" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M21.78 6.78a.75.75 0 0 0-.53-1.28H18.5V2.75a.75.75 0 0 0-1.28-.53l-2.5 2.5a.75.75 0 0 0-.22.53v2.84l-1.98 1.98A2 2 0 0 0 10 12a2 2 0 1 0 3.93-.52l1.98-1.98h2.84c.2 0 .39-.08.53-.22l2.5-2.5zM12 2c1.2 0 2.36.21 3.42.6l-1.4 1.41-.18.2A8.02 8.02 0 0 0 4 12a8 8 0 1 0 15.79-1.84l.2-.17 1.4-1.41A10 10 0 1 1 12 2zm0 4c.52 0 1.02.07 1.5.19v1.48l-.41.42-.05.05a4 4 0 1 0 2.82 2.82l.05-.05.42-.41h1.48A6.01 6.01 0 1 1 12 6z"></path>
                                </svg>
                                <p className="my-auto text-xl font-bold ml-4">MISIÓN</p>
                            </div>
                            <p className="text-gray-500 mt-4 text-sm">“Ejercer la representación de la actividad comercial, productiva y de servicios, promoviendo la competitividad con equidad y confianza, brindando servicios de calidad eficientes y oportunos a sus asociados, contribuyendo con el desarrollo económico, social y ambiental de la Región Lambayeque”.</p>
                        </div>
                    </Transition>
                    <Transition
                        show={true}
                        appear={true}
                        enter="transform transition duration-[2000ms]"
                        enterFrom="opacity-0 translate-x-10"
                        enterTo="opacity-100 translate-x-0"
                        leave="transform duration-200 transition ease-in-out"
                        leaveFrom="opacity-100 translate-x-0 "
                        leaveTo="opacity-0 "
                    >
                        <div className="bg-white rounded-xl p-5 shadow-sm mb-4">
                            <div className="flex content-center">
                                <svg className="text-themeLightBlue" viewBox="0 0 16 16" height="40" width="40" focusable="false" role="img" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"></path><path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"></path>
                                </svg>
                                <p className="my-auto text-xl font-bold ml-4">VISIÓN</p>
                            </div>
                            <p className="text-gray-500 mt-4 text-sm">“Ser la institución representativa de la actividad comercial, productiva y de servicios de la Macro Región Norte, ofreciendo servicios oportunos y de alta calidad a sus asociados orientando a la globalización de los negocios, contribuyendo con el desarrollo del país”.</p>
                        </div>
                    </Transition>
                    <Transition
                        show={true}
                        appear={true}
                        enter="transform transition duration-[2500ms]"
                        enterFrom="opacity-0 translate-x-10"
                        enterTo="opacity-100 translate-x-0"
                        leave="transform duration-200 transition ease-in-out"
                        leaveFrom="opacity-100 translate-x-0 "
                        leaveTo="opacity-0 "
                    >
                        <div className="bg-white rounded-xl p-5 shadow-sm mb-4">
                            <div className="flex content-center">
                                <svg className="text-themeLightBlue" viewBox="0 0 512 512" height="40" width="40" focusable="false" role="img" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M396.31 32H264l84.19 112.26L396.31 32zm-280.62 0l48.12 112.26L248 32H115.69zM256 74.67L192 160h128l-64-85.33zm166.95-23.61L376.26 160H488L422.95 51.06zm-333.9 0L23 160h112.74L89.05 51.06zM146.68 192H24l222.8 288h.53L146.68 192zm218.64 0L264.67 480h.53L488 192H365.32zm-35.93 0H182.61L256 400l73.39-208z"></path>
                                </svg>
                                <p className="my-auto text-xl font-bold ml-4">VALORES</p>
                            </div>
                            <p className="text-gray-500 mt-4 text-sm">.</p>
                        </div>
                    </Transition>
                </div>
            </section>
        </Layout>
    )
}
