import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react';
import Menucontainer from './menucontainer'

export default function NavBar() {
    const [showmenuModal, setshowmenuModal] = useState(false);
    const toogleModal = () => {
        setshowmenuModal(!showmenuModal)
    }
    return (
        <nav className="p-2 mt-0 fixed w-full z-10 top-0">
            {
                showmenuModal ? <Menucontainer tooglemodal={toogleModal} /> : ""
            }
            <div className="flex justify-between p-5">
                <Link href="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <a>
                        <Image
                            priority
                            alt="Logo CCLAM"
                            src="/images/logocclam.png"
                            height={90}
                            width={120}
                            quality="100"
                        />
                    </a>
                </Link>
                <div className="ml-auto">
                    <button onClick={toogleModal} className="inline-flex items-center justify-center px-4 py-2 mr-1 text-base font-medium leading-6 text-blue-900 whitespace-no-wrap transition duration-150 ease-in-out bg-white border border-transparent rounded-full hover:bg-white focus:outline-none focus:shadow-outline-indigo active:bg-blue-100 shadow-md">
                        <span className="hidden lg:block">Menú</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 lg:ml-2" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                        </svg>
                    </button>
                </div>
            </div>
        </nav>
    )
}
