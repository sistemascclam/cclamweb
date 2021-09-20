import Image from 'next/image'
import { Transition } from '@headlessui/react'
import Link from 'next/link'
import { useState, useEffect } from 'react';
import Menucontainer from './menucontainer'
import nav from "../../../content/navegacion.json"

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
    return (
        <nav className={`mt-0 absolute  w-full z-10 top-0 p-5`}>
            {
                showmenuModal ? <Menucontainer tooglemodal={toogleModal}
                    menus={nav}
                /> : ""
            }
            <div className="fixed left-5">
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
                            <Image
                                priority
                                alt="Logo CCLAM"
                                src="/images/logotipo.png"
                                height={45}
                                width={60}
                                quality="100"
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
                        <Image
                            priority
                            alt="Logo CCLAM"
                            src="/images/logocclam.png"
                            height={90}
                            width={120}
                            quality="100"
                        />
                    </Transition>
                </a>
            </Link>
            </div>
            <div className="fixed right-5">
                <button onClick={toogleModal} className="inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 whitespace-no-wrap text-white bg-gradient-to-r from-green-400 to-blue-500 lg:bg-gradient-to-r lg:from-white lg:to-white lg:text-themeBlue rounded-full focus:outline-none focus:shadow-outline-indigo active:bg-blue-100 shadow-lg transition duration-500 ease-in-out transform hover:scale-105">
                    <span className="hidden lg:block select-none">Menú</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 lg:ml-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                    </svg>
                </button>
            </div>
        </nav>
    )
}
