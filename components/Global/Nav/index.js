import Image from 'next/image'
import { Transition } from '@headlessui/react'
import Link from 'next/link'
import { useState, useEffect } from 'react';
import Menucontainer from './menucontainer'
import nav from "../../../content/navegacion.json"
import ModalComunicado from '../../ModalComunicado';

export default function NavBar() {
    const [hidden, setHidden] = useState(false);
    const handleScroll = () => {
        const top = window.pageYOffset || document.documentElement.scrollTop;
        setHidden(top !== 0);
    };
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);


    const [showmenuModal, setshowmenuModal] = useState(false);
    const toogleModal = () => {
        setshowmenuModal(!showmenuModal)
    }

    const [showComunicado, setshowComunicado] = useState(false)

    return (
        <nav className={`mt-0 absolute  w-full z-10 top-0 p-5`}>
            <ModalComunicado isOpen={showComunicado} toogleModal={()=>setshowComunicado(!showComunicado)} />
            <div className="bg-themeBlue rounded-b-xl text-white hover:text-gray-200 text-center fixed top-0 inset-x-0 px-5 pt-1 pb-2">
                <button onClick={()=>setshowComunicado(true)} className="relative flex w-max mx-auto font-semibold">
                    <span className="relative h-4 w-4 flex my-auto mr-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 m-auto bg-white"></span>
                    </span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 my-auto mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                    Comunicado N° 001 del Comité Electoral de la CCLAM
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 my-auto ml-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
                    </svg>
                    <span className="relative h-4 w-4 flex my-auto ml-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 m-auto bg-white"></span>
                    </span>
                </button>
            </div>
            <Menucontainer show={showmenuModal} tooglemodal={toogleModal}
                menus={nav}
            />
            <div className="top-10 fixed left-5">
                <Link href="/" className="flex title-font font-medium items-center text-gray-900">
                    <a className="select-none">
                        <Transition
                            show={hidden}
                            enter="transition-opacity duration-300 delay-200"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="transition-opacity duration-0"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <div className="w-14 h-14 lg:w-16 lg:h-16 p-2 lg:shadow-lg bg-white rounded-full flex justify-center flex-wrap content-center">
                                <img
                                    alt="Logo CCLAM"
                                    src={`${process.env.BASE_URL}images/logotipo.png`}
                                    className="w-16"
                                />
                            </div>
                        </Transition>
                        <Transition
                            show={!hidden}
                            enter="transition-opacity duration-300 delay-200"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="transition-opacity duration-0"
                            leaveFrom="opacity-0"
                            leaveTo="opacity-0"
                        >
                            <img
                                alt="Logo CCLAM"
                                src={`${process.env.BASE_URL}images/logocclam.png`}
                                className="h-20 lg:h-24"
                            />
                        </Transition>
                    </a>
                </Link>
            </div>
            <div className="top-10 fixed right-5 flex items-center">
                <a href='https://cclam.org.pe/gs/public/afiliacion' target="_blank" rel="noreferrer" className="animate-lookatme inline-flex items-center justify-center px-4 py-1 mr-2 font-medium leading-6 whitespace-no-wrap text-white rounded-full focus:outline-none focus:shadow-outline-indigo active:bg-blue-100 shadow-lg transition duration-500 ease-in-out transform hover:scale-105 bg-gradient-to-r from-pink-500 to-yellow-500">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 hidden lg:block mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                    </svg>
                    <span className="select-none">Asóciate</span>
                </a>
                <button onClick={toogleModal} name="menu" aria-label="menu" className="inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 whitespace-no-wrap text-white bg-gradient-to-r from-green-400 to-blue-500 lg:bg-gradient-to-r lg:from-white lg:to-white lg:text-themeBlue rounded-full focus:outline-none focus:shadow-outline-indigo active:bg-blue-100 shadow-lg transition duration-500 ease-in-out transform hover:scale-105">
                    <span className="hidden lg:block select-none">Menú</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 lg:ml-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                    </svg>
                </button>
            </div>
        </nav>
    )
}
