import Image from 'next/image'
import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import ScrollContainer from "react-indiana-drag-scroll";
import moment from 'moment'
import 'moment/locale/es'
moment.locale('es')

export default function PronunciamientosContainer({ pronunciamientosData }) {
    let [isOpen, setIsOpen] = useState(false)
    let [imageModal, setImageModal] = useState(<></>)
    const [isFullscreen, setIsFullscreen] = useState(false)
    const [isZoomed, setIsZoomed] = useState(false)

    const toogleModal = (image) => {
        if (isFullscreen) document.exitFullscreen();
        if (image) setImageModal(image)
        setIsOpen(!isOpen)
        setIsFullscreen(false)
        setIsZoomed(false)
    }

    return (
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {
                pronunciamientosData.map((pronunciamiento, key) =>
                    <div key={key}
                        onClick={() => toogleModal(
                            <Image
                                className="rounded-xl shadow-xl cursor-grab "
                                alt={pronunciamiento.date}
                                src={pronunciamiento.featuredImage.node.mediaItemUrl}
                                width={pronunciamiento.featuredImage.node.mediaDetails.width}
                                height={pronunciamiento.featuredImage.node.mediaDetails.height}
                                layout="responsive"
                                quality="100"
                            />)}>
                        <div className="text-right text-gray-500 mb-2">
                            <p className="text-xs">{moment(pronunciamiento.date).calendar()}</p>
                        </div>
                        <div className="relative hover:scale-105 transition duration-500 ease-in-out shadow-xl">
                            <Image
                                className="rounded-xl shadow-xl cursor-pointer "
                                alt={pronunciamiento.date}
                                src={pronunciamiento.featuredImage.node.mediaItemUrl}
                                width={pronunciamiento.featuredImage.node.mediaDetails.width}
                                height={pronunciamiento.featuredImage.node.mediaDetails.height}
                                layout="responsive"
                                quality="100"
                            />
                        </div>
                    </div>
                )
            }
            {
                /*DUPLICADO PARA PRUEBAS, QUITAR*/
                pronunciamientosData.map((pronunciamiento, key) =>
                    <div key={key}
                        onClick={() => toogleModal(
                            <Image
                                className="rounded-xl shadow-xl cursor-grab "
                                alt={pronunciamiento.date}
                                src={pronunciamiento.featuredImage.node.mediaItemUrl}
                                width={pronunciamiento.featuredImage.node.mediaDetails.width}
                                height={pronunciamiento.featuredImage.node.mediaDetails.height}
                                layout="responsive"
                                quality="100"
                            />)}>
                        <div className="text-right text-gray-500 mb-2">
                            <p className="text-xs">{moment(pronunciamiento.date).calendar()}</p>
                        </div>
                        <div className="relative hover:scale-105 transition duration-500 ease-in-out shadow-xl">
                            <Image
                                className="rounded-xl shadow-xl cursor-pointer "
                                alt={pronunciamiento.date}
                                src={pronunciamiento.featuredImage.node.mediaItemUrl}
                                width={pronunciamiento.featuredImage.node.mediaDetails.width}
                                height={pronunciamiento.featuredImage.node.mediaDetails.height}
                                layout="responsive"
                                quality="100"
                            />
                        </div>
                    </div>
                )
                /*DUPLICADO PARA PRUEBAS, QUITAR*/
            }
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog
                    as="div"
                    className="fixed inset-0 z-10 overflow-y-auto"
                    onClose={toogleModal}
                >
                    <Dialog.Overlay className="fixed inset-0 bg-black opacity-80" />
                    <div className="min-h-screen text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Dialog.Overlay className="fixed inset-0" />
                        </Transition.Child>

                        {/* This element is to trick the browser into centering the modal contents. */}
                        <span
                            className="inline-block h-screen align-middle"
                            aria-hidden="true"
                        >
                            &#8203;
                        </span>
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <div className={`inline-block w-full ${isZoomed ? 'max-w-screen max-h-screen' : 'max-w-xl'}	align-middle transition-all transform  shadow-xl rounded-2xl`}>
                                <ScrollContainer className={`${isZoomed ? 'max-w-screen max-h-screen' : ''}`}>
                                    <div className={`relative `}>
                                        {imageModal}
                                    </div>
                                </ScrollContainer>
                            </div>
                        </Transition.Child>
                        <div className="absolute flex justify-end top-0 bg-black w-full bg-opacity-50 p-4 shadow-xl ">
                            {
                                isFullscreen ?
                                    <button className="text-gray-300 hover:text-white mr-5" onClick={() => { setIsFullscreen(false); document.exitFullscreen(); }}>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </button>
                                    :
                                    <button className="text-gray-300 hover:text-white mr-5" onClick={() => { setIsFullscreen(true); document.documentElement.webkitRequestFullscreen(); }}>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                                        </svg>
                                    </button>
                            }
                            {
                                isZoomed ?
                                    <button className="text-gray-300 hover:text-white mr-5" onClick={() => setIsZoomed(false)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM13 10H7" />
                                        </svg>
                                    </button>
                                    :
                                    <button className="text-gray-300 hover:text-white mr-5" onClick={() => setIsZoomed(true)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                                        </svg>
                                    </button>
                            }
                            <button className="text-gray-300 hover:text-white" onClick={() => toogleModal(null)}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </div>
    )
}
