import React, { useState } from 'react'
import { toNombrePropio } from '../util/Helper';
import ModalImage from './ModalImage';
import moment from 'moment'
import 'moment/locale/es'
import Image from 'next/image';
moment.locale('es')

{/*
e.title
e.fechaInicio
e.coverImage
*/}

export default function Calendar({ title,events }) {
    const [currentMonth, setcurrentMonth] = useState(moment().format('MM-Y'))
    const [daySelected, setdaySelected] = useState(null)
    const prevMonth = () => {
        let monthtmp = moment(currentMonth, "MM-Y").subtract(1, 'months').format('MM-Y')
        setdaySelected(null)
        setcurrentMonth(monthtmp)
    }
    const nextMonth = () => {
        let monthtmp = moment(currentMonth, "MM-Y").add(1, 'months').format('MM-Y')
        setdaySelected(null)
        setcurrentMonth(monthtmp)
    }
    let [isOpen, setIsOpen] = useState(false)
    let [imageModal, setImageModal] = useState(<></>)

    const toogleModal = (image) => {
        if (image) setImageModal(image)
        setIsOpen(!isOpen)
    }
    return (
        <div className='bg-white shadow-xl rounded-xl text-lg grid grid-cols-1 md:grid-cols-2 h-max w-full max-w-6xl'>
        <ModalImage isOpen={isOpen} imageModal={imageModal} toogleModal={toogleModal} />
            <div className='py-6 px-4 w-fit h-max'>
                <div className='flex justify-between px-5'>
                    <p className='font-bold'>{toNombrePropio(moment(currentMonth, "MM-Y").format('MMMM YYYY'))}</p>
                    <div className='flex gap-2'>
                        <button onClick={prevMonth} className='hover:opacity-40 transition-all duration-200 ease-in-out'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                        <button onClick={nextMonth} className='hover:opacity-40 transition-all duration-200 ease-in-out'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </div>
                {
                    moment().format("YYYY-MM-D") == moment(currentMonth, "MM-Y").format(`YYYY-MM-${6}`)
                }
                <div className='font-bold mt-10 mb-4 grid grid-cols-7 text-center text-lg'>
                    <p>Lu</p>
                    <p>Ma</p>
                    <p>Mi</p>
                    <p>Ju</p>
                    <p>Vi</p>
                    <p>Sa</p>
                    <p>Do</p>
                </div>
                <div className='grid grid-cols-7 text-center'>
                    {
                        [...Array(7).keys()].map(d => {
                            let startDate = moment(moment(currentMonth, "MM-Y").startOf('month').format('YYYY-MM-DD')).day() - 1

                            if (startDate > d) {
                                return <p key={`empy_${d}`}></p>
                            }
                        })
                    }
                    {
                        [...Array(parseInt(moment(currentMonth, "MM-Y").endOf('month').format('DD'))).keys()].map(d => {
                            let hoy = moment().format("YYYY-MM-D") == moment(currentMonth, "MM-Y").format(`YYYY-MM-${d + 1}`),
                            seleccionado = daySelected ? (moment(`${currentMonth}-${daySelected}`, "MM-Y-D").format("YYYY-MM-DD") === moment(`${currentMonth}-${d + 1}`, "MM-Y-D").format(`YYYY-MM-DD`)) : false
                            return <button key={`button_calendar_${d}`} onClick={() => setdaySelected(daySelected == (d + 1) ? null : (d + 1))} title={hoy ? "Hoy" : ""} className={`text-lg rounded-full m-1 w-12 h-12 ${hoy ? 'bg-blue-600 text-white font-semibold' : (seleccionado ? 'bg-blue-200' : 'hover:bg-gray-100')} transition-all duration-200 ease-in-out`}>
                                <span>{d + 1}</span>
                                {
                                    events?.some(e => e.fechaInicio === moment(`${d + 1}-${currentMonth}`, "D-MM-Y").format("YYYY-MM-DD")) ?
                                        <div className='bg-green-400 w-2 h-2 rounded-full mx-auto'></div>
                                        : ""
                                }
                            </button>
                        })
                    }
                </div>
            </div>
            <div className='bg-gray-100 rounded-r-xl py-6 pl-6 w-full h-max'>
                <p className='font-bold mb-4'>{toNombrePropio(title)} {daySelected ? `${daySelected} de ${(moment(currentMonth, "MM-Y").format('MMMM'))?.toLocaleLowerCase()}` : (moment(currentMonth, "MM-Y").format('MMMM'))?.toLocaleLowerCase()}</p>
                <div className='divide-y divide-dashed divide-gray-600 overflow-y-auto h-96'>
                    {
                        events?.filter(e => moment(e.fechaInicio).format("MM-Y") === currentMonth && (daySelected ? e.fechaInicio === moment(`${currentMonth}-${daySelected}`, "MM-Y-D").format("YYYY-MM-DD") : true))?.length === 0 ?
                            <p className='text-center italic'>No hay eventos disponibles</p>
                            :
                            ""
                    }
                    {
                        events?.filter(e => moment(e.fechaInicio).format("MM-Y") === currentMonth && (daySelected ? e.fechaInicio === moment(`${currentMonth}-${daySelected}`, "MM-Y-D").format("YYYY-MM-DD") : true))?.sort(function (a, b) { return new Date(a.fechaInicio) - new Date(b.fechaInicio); })?.map((e, k) =>
                            <div key={k} className="mt-3 px-3 py-5 flex gap-4 "
                            >
                                <div className='relative w-24 pt-2 cursor-pointer' 
                            onClick={() => toogleModal(
                                <Image
                                    className="rounded-xl shadow-xl cursor-grab "
                                    alt={e.title}
                                    src={`${process.env.STORAGE_URL_BK}${e.coverImage}`}
                                    width="600"
                                    height="600"
                                    layout="responsive"
                                    objectFit="contain"
                                />
                                )}>
                                    <Image
                                        className="rounded-md"
                                        alt={e.title}
                                        src={`${process.env.STORAGE_URL_BK}${e.coverImage}`}
                                        width="300"
                                        height="300"
                                        layout="responsive"
                                        objectFit="cover"
                                        quality="100"
                                    />
                                </div>
                                <div>
                                    <p className='text-base font-normal text-gray-500'>{moment(e.fechaInicio).format("L")}</p>
                                    <p className='font-medium text-xl'>
                                        {toNombrePropio(e.title)}
                                    </p>
                                </div>
                            </div>
                        )
                    }
                </div>

            </div>
        </div>
    )
}
