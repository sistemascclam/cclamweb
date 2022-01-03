import ListMenu from "./ListMenu"
import React, { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'

export default function Menucontainer({ show, tooglemodal, menus }) {
    return (
        <Transition.Root show={show} as={Fragment}>
            <Dialog as="div" className="fixed inset-0 overflow-hidden z-50" onClose={tooglemodal}>
                <div className="absolute inset-0 overflow-hidden">
                    <Transition.Child
                        as={Fragment}
                        enter="ease-in-out duration-500"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in-out duration-500"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Dialog.Overlay className="absolute inset-0 bg-black bg-opacity-75 transition-opacity" />
                    </Transition.Child>
                    <div className="fixed inset-y-0 right-0 pl-10 max-w-full flex">
                        <Transition.Child
                            as={Fragment}
                            enter="transform transition ease-in-out duration-500 sm:duration-700"
                            enterFrom="translate-x-full"
                            enterTo="translate-x-0"
                            leave="transform transition ease-in-out duration-500 sm:duration-700"
                            leaveFrom="translate-x-0"
                            leaveTo="translate-x-full"
                        >
                            <div className="relative w-screen max-w-xs lg:max-w-sm">
                                <Transition.Child
                                    as={Fragment}
                                    enter="ease-in-out duration-500"
                                    enterFrom="opacity-0"
                                    enterTo="opacity-100"
                                    leave="ease-in-out duration-500"
                                    leaveFrom="opacity-100"
                                    leaveTo="opacity-0"
                                >
                                    <div className="absolute top-0 left-0 -ml-8 pt-4 pr-2 flex sm:-ml-10 sm:pr-4">
                                        <button
                                            type="button"
                                            className="rounded-md text-gray-300 hover:text-white focus:outline-none"
                                            onClick={tooglemodal}
                                        >
                                            <span className="sr-only">Close panel</span>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        </button>
                                    </div>
                                </Transition.Child>
                                <div className="h-full flex flex-col py-6 bg-white bg-opacity-90 shadow-xl">
                                    <div className="px-4 sm:px-6 mb-2">
                                        <Dialog.Title className="font-medium text-gray-800">Menú</Dialog.Title>
                                    </div>
                                    <div className="relative ">
                                        <ListMenu
                                            menusParam={menus}
                                            cod={1}
                                            tooglemodal={tooglemodal} />
                                    </div>
                                </div>
                            </div>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    )
}
