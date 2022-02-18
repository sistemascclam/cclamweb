import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import Image from 'next/image'

export default function ModalComunicado({ isOpen, toogleModal }) {
    return (
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
                        <div className={`relative inline-block w-full bg-white p-5 shadow-xl ${false ? 'max-w-screen max-h-screen' : 'max-w-7xl'}	align-middle transition-all transform  shadow-xl rounded-2xl`}>
                            <button onClick={toogleModal} className="absolute top-1 right-1 rounded-full hover:bg-gray-100 p-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </button>
                            <div className="flex">
                                <div className={`relative w-7/12 `}>
                                    <a href='https://cclam.org.pe/pdfs/COMUNICADO_N001_DEL_COMITE_ELECTORAL_DE_LA_CCLAM' target='_blank' rel="noreferrer" >
                                        <Image
                                            className="rounded-xl shadow-xl"
                                            alt={"Comunicado"}
                                            src={`${process.env.STORAGE_URL_FT}/images/comunicado_urgente/comunicado.jpeg`}
                                            width="600"
                                            height="800"
                                            layout="responsive"
                                            objectFit="cover"
                                        />
                                    </a>
                                </div>
                                <div className={`relative w-5/12 flex flex-col content-center px-10`}>
                                    <a className="flex text-blue-600 hover:text-blue-700 hover:underline font-bold mb-2" href='https://cclam.org.pe/pdfs/ELECCIONES_ESTATUTOS.pdf' target='_blank' rel="noreferrer" >
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 my-auto" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
                                        </svg>
                                        ESTATUTOS CCLAM.PDF
                                    </a>
                                    <a className="relative shadow-md hover:scale-101 transition-all ease-in-out duration-300" href='https://cclam.org.pe/pdfs/ELECCIONES_ESTATUTOS.pdf' target='_blank' rel="noreferrer" >
                                        <Image
                                            className="rounded-xl shadow-xl"
                                            alt={"Estatutos"}
                                            src={`${process.env.STORAGE_URL_FT}/images/comunicado_urgente/estatutos.jpeg`}
                                            width="600"
                                            height="600"
                                            layout="responsive"
                                            objectFit="cover"
                                        />
                                    </a>
                                    <a className="flex text-blue-600 hover:text-blue-700 hover:underline font-bold mb-2 mt-6" href='https://cclam.org.pe/pdfs/REGLAMENTO_DE_ELECCIONES_CCLAM_23_NOV_2022.pdf' target='_blank' rel="noreferrer" >
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 my-auto" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
                                        </svg>
                                        REGLAMENTO DE ELECCIONES.PDF
                                    </a>
                                    <a className="mt-4 relative shadow-md hover:scale-101 transition-all ease-in-out duration-300" href='https://cclam.org.pe/pdfs/REGLAMENTO_DE_ELECCIONES_CCLAM_23_NOV_2022.pdf' target='_blank' rel="noreferrer" >
                                        <Image
                                            className="rounded-xl shadow-xl"
                                            alt={"Reglamento"}
                                            src={`${process.env.STORAGE_URL_FT}/images/comunicado_urgente/reglamento.jpeg`}
                                            width="600"
                                            height="600"
                                            layout="responsive"
                                            objectFit="cover"
                                        />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </Transition.Child>
                </div>
            </Dialog>
        </Transition>
    )
}
