import Link from 'next/link';
import React, { useEffect, useState } from 'react'

const ListMenu = (menusParam, cod,tooglemodal) => {
    const [show, setShow] = useState([]);

    const clickedShow = (cod, key) => {
        if (!show.includes(cod + "" + key)) {
            setShow([...show, cod + "" + key])
        } else {
            setShow(show.filter(s => s != cod + "" + key))
        }
    }

    return (
        <nav className="w-full px-4 mt-2 mb-8 mx-auto">
            {
                menusParam.map((menu, key) =>
                    <div key={`${cod}${key}`}>
                        {
                            menu.to ?
                                <Link href={menu.to} >
                                    <a >
                                        <div className="mt-5 mb-2 w-full" >
                                            <div className="flex justify-between text-lg text-left font-normal text-gray-900 hover:text-themeLightBlue">
                                                <p>{menu.title}</p>
                                                {menu.menus && <span >{!show.includes(cod + "" + key) ? "+" : '-'}</span>}
                                            </div>

                                        </div>
                                    </a>
                                </Link>
                                :
                                <button className="mt-5 mb-2 w-full" onClick={() => clickedShow(cod, key)}>
                                    <div className="flex justify-between text-lg text-left font-normal text-gray-900 hover:text-themeLightBlue">
                                        <p>{menu.title}</p>
                                        {menu.menus && <span >{!show.includes(cod + "" + key) ? "+" : '-'}</span>}
                                    </div>
                                </button>
                        }

                        <div className={`${!show.includes(cod + "" + key) ? "hidden" : 'block'}`}>{menu.menus && ListMenu(menu.menus, `${cod}${key}`)}</div>
                        {key < menusParam.length - 1 && <hr className="text-gray-200" />}
                    </div>)
            }
        </nav>
    );
}

export default function Menucontainer({ tooglemodal, menus }) {
    return (
        <div className="z-20 fixed inset-0 overflow-hidden" aria-labelledby="slide-over-title" role="dialog" aria-modal="true">
            <div className="absolute inset-0 overflow-hidden" >
                <div className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true" onClick={tooglemodal}></div>
                <div className="fixed inset-y-0 right-0 p-2 w-full flex">
                    <div className="relative w-full mx-auto ">
                        <div className="h-full flex flex-col py-6 bg-white shadow-xl rounded-xl overflow-y-auto">
                            <div className="flex justify-between px-4 sm:px-6 ">
                                <button onClick={tooglemodal} className="ml-auto flex-shrink-0 flex items-center justify-center h-8 w-8 rounded-full text-white bg-themeLightBlue">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                            <div className="px-4 sm:px-6 ">
                                {
                                    ListMenu(menus, 1,tooglemodal)
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
