import React, { useState } from 'react'
import ListMenu from "./ListMenu"

export default function Menucontainer({ tooglemodal, menus }) {
    return (
        <div className="z-20 fixed inset-0 overflow-hidden" aria-labelledby="slide-over-title" role="dialog" aria-modal="true">
            <div className="absolute inset-0 overflow-hidden" >
                <div className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true" onClick={tooglemodal}></div>
                <div className="fixed inset-y-0 right-0 w-full flex">
                    <div className="relative w-full mx-auto ">
                        <div className="h-full flex flex-col py-6 bg-gray-900 bg-opacity-95 shadow-xl  overflow-y-auto">
                            <div className="flex justify-between px-4 sm:px-6 ">
                                <button onClick={tooglemodal} className="ml-auto flex-shrink-0 flex items-center justify-center h-8 w-8 rounded-full text-white bg-themeLightBlue">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                            <div className="px-4 sm:px-6 ">
                                <ListMenu
                                    menusParam={menus}
                                    cod={1}
                                    tooglemodal={tooglemodal} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
