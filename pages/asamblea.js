import React from 'react'
import Head from "next/head";
import Image from "next/image";

export default function Asamblea() {
    return (
        <div>
            <Head>
                <title>Asamblea General de Asociados | 18 DE ENERO 2022</title>
                <meta name="title" content={"Asamblea General de Asociados | 18 DE ENERO 2022"} />
                <meta name="description" content="Estimados Asociados, los invitamos a participar de nuestra Asamblea Extraordinaria de Asociados. Martes 18 de enero. 6:30 p.m." />

                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://cclam.org.pe/asamblea" />
                <meta property="og:title" content={"Asamblea General de Asociados | 18 DE ENERO 2022"} />
                <meta property="og:description" content="Estimados Asociados, los invitamos a participar de nuestra Asamblea Extraordinaria de Asociados. Martes 18 de enero. 6:30 p.m." />
                <meta property="og:image" content="https://cclam.org.pe//images/asamblea.jpeg" />

                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://cclam.org.pe/" />
                <meta property="twitter:title" content={"Asamblea General de Asociados | 18 DE ENERO 2022"} />
                <meta property="twitter:description" content="Estimados Asociados, los invitamos a participar de nuestra Asamblea Extraordinaria de Asociados. Martes 18 de enero. 6:30 p.m." />
                <meta property="twitter:image" content="https://cclam.org.pe//images/asamblea.jpeg" />

                <link rel="icon" href={`https://www.cclam.org.pe/favicon.ico`} />
                <link rel="apple-touch-icon" href="https://www.cclam.org.pe/favicon.ico" />
            </Head>
            <section className="min-h-screen text-center flex flex-col justify-center">
                <div className="mb-1 mt-0 lg:mt-6 w-full lg:w-6/12 mx-auto text-sm">
                    <p>
                        <strong>Estimados Asociados</strong>, los invitamos a participar de nuestra <a href="https://us02web.zoom.us/j/81593575307?pwd=VEV1SDZuNm8wU1N4SkkwSEd1ckJMZz09" target="_blank" rel="noreferrer">Asamblea Extraordinaria de Asociados</a>
                        el dia Martes 18 de Enero 6:30pm 🇵🇪Link de convocatoria👇
                    </p>
                    <a href="https://us02web.zoom.us/j/81593575307?pwd=VEV1SDZuNm8wU1N4SkkwSEd1ckJMZz09" target="_blank" rel="noreferrer" className="text-blue-500">https://us02web.zoom.us/j/81593575307?pwd=VEV1SDZuNm8wU1N4SkkwSEd1ckJMZz09</a>
                    <p>
                        ID de reunión: 815 9357 5307
                        Código de acceso: 473189
                    </p>
                </div>
                <div className="mx-auto mb-4 w-full lg:w-6/12 relative">
                    <a href="https://us02web.zoom.us/j/81593575307?pwd=VEV1SDZuNm8wU1N4SkkwSEd1ckJMZz09" target="_blank" rel="noreferrer">
                        <Image
                            className="rounded-xl cursor-pointer "
                            alt={"Asamblea"}
                            src={`${process.env.STORAGE_URL_FT}/images/asamblea.jpeg`}
                            width="200"
                            height="200"
                            layout="responsive"
                            objectFit="cover"
                        />
                    </a>
                </div>
            </section>
        </div>
    )
}
