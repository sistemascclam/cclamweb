import React, { useEffect, useState } from 'react'
import Layout from '@components/layout'
import Head from 'next/head'
import { useRouter } from "next/router";
import { show } from "../../../redux/actions/actividad"
import { useDispatch, useSelector } from 'react-redux';
import { toNombrePropio } from '@util/Helper';
import moment from 'moment'
import 'moment/locale/es'
import Image from 'next/image';
moment.locale('es')

const actividadObjecttmp = {
    "id": 12,
    "titulo": "Juramentación del nuevo Consejo Directivo periodo 2022 - 2025",
    "imagen": "actividads/2022/06/Yh3O4aoh1hdt5tUTwhbdayS91sFKUrJ9o0AkPVSx.jpg",
    "link": null,
    "ubicacion": "Sta. María 185, La Victoria 14007",
    "cronograma": "Apertura de Evento || Evento 1 || Parde del evento 2 || Parte del evento 3",


    "fechaInicio": "2022-06-17",
    "fechaFin": "2022-06-17",
    "created_at": "2022-06-03 18:39:12",
    "updated_at": "2022-06-03 18:39:12"
}
export default function Evento() {
    const { query, isReady } = useRouter()
    const { id } = query
    const dispatch = useDispatch();
    const { actividadObject } = useSelector(({ actividad }) => actividad)
    const [loading, setloading] = useState(false)

    useEffect(() => {
        if (isReady) {
            if (id) {
                dispatch(show(id))
            } else {
                setloading(false)
            }
        }
    }, [isReady, id])
    useEffect(() => {
        if (actividadObject && actividadObject?.ubicacion) {
            let iframeubicacion = `<iframe style="border-radius:1rem;box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" src="https://maps.google.com/maps?q=${actividadObject?.ubicacion}&amp;t=m&amp;z=17&amp;output=embed&amp;iwloc=near" title="${actividadObject?.ubicacion}" aria-label="${actividadObject?.ubicacion}"></iframe>`
            document.getElementById("iframegooglehere").innerHTML = iframeubicacion
        }
    }, [actividadObject])

    return (
        <Layout complete={false}>
            <Head>
                <title>CCLAM | Eventos</title>
            </Head>
            <div className="min-h-screen p-6 flex justify-center">
                <div>
                    {
                        actividadObject ?
                            <div className='bg-white shadow-xl rounded-xl text-lg grid w-96'>
                                <div className='w-full h-80'>
                                    <Image
                                        className="rounded-xl "
                                        alt={actividadObject.titulo}
                                        src={`${process.env.STORAGE_URL_BK}${actividadObject.imagen}`}
                                        width="300"
                                        height="300"
                                        layout="responsive"
                                        objectFit="cover"
                                        quality="100"
                                    />
                                </div>
                                <div className="relative rounded-b-xl bg-white">
                                    <div className="p-6">

                                        <div className="absolute -top-10 bg-gray-100 right-6 rounded-xl w-20 shadow-md">
                                            <div className="bg-blue-600 rounded-t-xl text-base px-2 font-normal text-center text-white">{moment(actividadObject?.fechaInicio).format("MMM")?.toLocaleUpperCase()}</div>
                                            <p className="text-center text-4xl py-1">{moment(actividadObject?.fechaInicio).format("D")?.toLocaleUpperCase()}</p>
                                        </div>
                                        <p className="text-sm">{toNombrePropio(moment(actividadObject?.fechaInicio).format("MMMM dddd D [del] YYYY"))}</p>
                                        {
                                            actividadObject?.link ?
                                                <a href={link} target={'_blank'} rel="noreferrer" className="font-bold mt-1 text-xl hover:text-blue-600">{toNombrePropio(actividadObject?.titulo)}</a>
                                                :
                                                <p className="font-bold mt-1 text-xl">{toNombrePropio(actividadObject?.titulo)}</p>
                                        }
                                    </div>
                                    {
                                        actividadObject?.ubicacion ?
                                            <div className="bg-gray-100 p-6">
                                                <p className="font-bold mt-1 text-base flex gap-1 items-center content-center w-max">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                                                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                                    </svg>
                                                    Ubicación:
                                                </p>
                                                <a target="_blank" re="noreferrer" href={`https://maps.google.com/maps?q=${actividadObject?.ubicacion}&amp;t=m&amp;z=17&amp;output=embed&amp;iwloc=near`} className="text-sm text-blue-500 hover:underline flex justify-center mt-3">{actividadObject?.ubicacion}</a>
                                                <div className="mt-3 flex justify-center" id="iframegooglehere">
                                                </div>
                                            </div> : ""
                                    }
                                    {
                                        actividadObject?.cronograma ?
                                            <div className="bg-white p-6">
                                                <p className="font-bold mt-1 text-base flex gap-1 items-center content-center w-max">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                                                        <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                                                    </svg>
                                                    Cronograma:
                                                </p>
                                                <ul className="list-inside list-disc text-base mt-3 ml-3">
                                                    {
                                                        actividadObject?.cronograma?.split("||")?.map((a, ai) =>
                                                            <li key={`cronograma_${ai}`}>{a?.trim()}.</li>
                                                        )
                                                    }
                                                </ul>
                                            </div>
                                            : ""
                                    }
                                    <a className="bg-blue-600 w-full flex justify-center py-3 rounded-lg text-white text-base mt-3 hover:bg-blue-700" href={`https://api.whatsapp.com/send/?phone=51942418670&text=${`Confirmo mi asistencia al evento del ${moment(actividadObject?.fechaInicio).format("D [de] MMMM")}`}&app_absent=0`} target="_blank" rel="noreferrer">Confirmar asistencia</a>
                                </div>
                            </div>
                            : ""
                    }
                </div>
            </div>
        </Layout>
    )
}
