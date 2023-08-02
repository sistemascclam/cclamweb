import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { toSoles } from '../util/Helper'

const menus = [
    {
        nombre: "GASTOS ADMINISTRATIVOS DEL CENTRO",
        con_il: false,
        costos: [
            { escala: 'A', desde: 0, hasta: 7500, tasa: null, fijo: true, monto_fijo: 600, monto_minimo: null },
            { escala: 'B', desde: 7501, hasta: 15000, tasa: null, fijo: true, monto_fijo: 1000, monto_minimo: null },
            { escala: 'C', desde: 15001, hasta: 30000, tasa: 0.03, fijo: false, monto_fijo: null, monto_minimo: 1000 },
            { escala: 'D', desde: 30001, hasta: 50000, tasa: 0.0275, fijo: false, monto_fijo: null, monto_minimo: 1450 },
            { escala: 'E', desde: 50001, hasta: 100000, tasa: 0.025, fijo: false, monto_fijo: null, monto_minimo: 2000 },
            { escala: 'F', desde: 100001, hasta: 300000, tasa: 0.0125, fijo: false, monto_fijo: null, monto_minimo: 3250 },
            { escala: 'G', desde: 300001, hasta: 500000, tasa: 0.011, fijo: false, monto_fijo: null, monto_minimo: 5750 },
            { escala: 'H', desde: 500001, hasta: 1000000, tasa: 0.0095, fijo: false, monto_fijo: null, monto_minimo: 7950 },
            { escala: 'I', desde: 1000001, hasta: 5000000, tasa: 0.0055, fijo: false, monto_fijo: null, monto_minimo: 12700 },
            { escala: 'J', desde: 5000001, hasta: 20000000, tasa: 0.003, fijo: false, monto_fijo: null, monto_minimo: 34700 },
            { escala: 'K', desde: 20000001, hasta: 50000000, tasa: 0.0025, fijo: false, monto_fijo: null, monto_minimo: 79700 },
            { escala: 'L', desde: 50000001, hasta: 100000000, tasa: 0.0015, fijo: false, monto_fijo: null, monto_minimo: 154700 },
            { escala: 'M', desde: 100000001, hasta: null, tasa: 0.001, fijo: false, monto_fijo: null, monto_minimo: 229700 },
        ]
    },
    {
        nombre: "TRIBUNAL ARBITRAL UNIPERSONAL",
        con_il: true,
        costos: [
            { escala: 'A', desde: 0, hasta: 3000, tasa: null, fijo: true, monto_fijo: 500, monto_minimo: null },
            { escala: 'B', desde: 3001, hasta: 15000, tasa: null, fijo: true, monto_fijo: 900, monto_minimo: null },
            { escala: 'C', desde: 15001, hasta: 30000, tasa: 0.0168, fijo: false, monto_fijo: null, monto_minimo: 900 },
            { escala: 'D', desde: 30001, hasta: 60000, tasa: 0.015, fijo: false, monto_fijo: null, monto_minimo: 1152 },
            { escala: 'E', desde: 60001, hasta: 150000, tasa: 0.0133, fijo: false, monto_fijo: null, monto_minimo: 1602 },
            { escala: 'F', desde: 150001, hasta: 300000, tasa: 0.0127, fijo: false, monto_fijo: null, monto_minimo: 2799 },
            { escala: 'G', desde: 300001, hasta: 500000, tasa: 0.0028, fijo: false, monto_fijo: null, monto_minimo: 4704 },
            { escala: 'H', desde: 500001, hasta: 1000000, tasa: 0.0027, fijo: false, monto_fijo: null, monto_minimo: 5264 },
            { escala: 'I', desde: 1000001, hasta: 5000000, tasa: 0.0025, fijo: false, monto_fijo: null, monto_minimo: 6614 },
            { escala: 'J', desde: 5000001, hasta: 20000000, tasa: 0.0023, fijo: false, monto_fijo: null, monto_minimo: 16614 },
            { escala: 'K', desde: 20000001, hasta: 50000000, tasa: 0.0017, fijo: false, monto_fijo: null, monto_minimo: 51114 },
            { escala: 'L', desde: 50000001, hasta: 100000000, tasa: 0.0008, fijo: false, monto_fijo: null, monto_minimo: 102114 },
            { escala: 'M', desde: 100000001, hasta: null, tasa: 0.0004, fijo: false, monto_fijo: null, monto_minimo: 166114 },
        ]
    },
    {
        nombre: "TRIBUNAL ARBITRAL COLEGIADO (3 miembros)",
        con_il: true,
        costos: [
            { escala: 'A', desde: 0, hasta: 3000, tasa: null, fijo: true, monto_fijo: 1500, monto_minimo: null },
            { escala: 'B', desde: 3001, hasta: 15000, tasa: null, fijo: true, monto_fijo: 2700, monto_minimo: null },
            { escala: 'C', desde: 15001, hasta: 30000, tasa: 0.05, fijo: false, monto_fijo: null, monto_minimo: 2700 },
            { escala: 'D', desde: 30001, hasta: 60000, tasa: 0.045, fijo: false, monto_fijo: null, monto_minimo: 3450 },
            { escala: 'E', desde: 60001, hasta: 150000, tasa: 0.04, fijo: false, monto_fijo: null, monto_minimo: 4800 },
            { escala: 'F', desde: 150001, hasta: 300000, tasa: 0.038, fijo: false, monto_fijo: null, monto_minimo: 8400 },
            { escala: 'G', desde: 300001, hasta: 500000, tasa: 0.0085, fijo: false, monto_fijo: null, monto_minimo: 14100 },
            { escala: 'H', desde: 500001, hasta: 1000000, tasa: 0.008, fijo: false, monto_fijo: null, monto_minimo: 15800 },
            { escala: 'I', desde: 1000001, hasta: 5000000, tasa: 0.0076, fijo: false, monto_fijo: null, monto_minimo: 19800 },
            { escala: 'J', desde: 5000001, hasta: 20000000, tasa: 0.007, fijo: false, monto_fijo: null, monto_minimo: 50200 },
            { escala: 'K', desde: 20000001, hasta: 50000000, tasa: 0.005, fijo: false, monto_fijo: null, monto_minimo: 155200 },
            { escala: 'L', desde: 50000001, hasta: 100000000, tasa: 0.0025, fijo: false, monto_fijo: null, monto_minimo: 305200 },
            { escala: 'M', desde: 100000001, hasta: null, tasa: 0.001, fijo: false, monto_fijo: null, monto_minimo: 505200 },
        ]
    }
]

export default function CalculadoraArbitraje() {
    const [cuantia, setcuantia] = useState("")
    const [errorCuantia, seterrorCuantia] = useState(false)
    const [showResults, setshowResults] = useState(false)

    const formatMoney = (e) => {
        seterrorCuantia(false)
        if (e == "") {
            setshowResults(false)
        }
        if (!isNaN(e)) {
            setcuantia(e)
        }
    }

    const submitShowResults = () => {
        if (cuantia != "") {
            setshowResults(true)
        } else {
            seterrorCuantia(true)
        }
    }

    const calcTotal = (costos) => {
        let itemFound = costos.find(co => cuantia >= (co.desde-1) && (co.hasta == null ? true : (cuantia <= co.hasta)))
        return (itemFound && itemFound.monto_fijo ?
            itemFound.monto_fijo :
            (

                itemFound.monto_minimo+((cuantia - itemFound.desde)
                *
                (itemFound.tasa))
                
            )/2).toFixed(2)*2
    }

    let [isOpen, setIsOpen] = useState(false)

    function closeModal() {
        setIsOpen(false)
        setshowResults(false)
        setcuantia("")
        seterrorCuantia(false)
    }

    function openModal() {
        setIsOpen(true)
    }

    function resetCalc() {
        setshowResults(false)
        setcuantia("")
        seterrorCuantia(false)
    }

    return (
        <>
            <div className="inset-0 flex items-center justify-center">
                <div className="text-center pt-2 pb-4">
                    <button
                        onClick={openModal} className="shadow-xl bg-pink-600 hover:bg-pink-700 text-white py-2 px-4 rounded-full flex mx-auto">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2H6zm1 2a1 1 0 000 2h6a1 1 0 100-2H7zm6 7a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm-3 3a1 1 0 100 2h.01a1 1 0 100-2H10zm-4 1a1 1 0 011-1h.01a1 1 0 110 2H7a1 1 0 01-1-1zm1-4a1 1 0 100 2h.01a1 1 0 100-2H7zm2 1a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1zm4-4a1 1 0 100 2h.01a1 1 0 100-2H13zM9 9a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1zM7 8a1 1 0 000 2h.01a1 1 0 000-2H7z" clipRule="evenodd" />
                        </svg>
                        Calculadora de Gastos Arbitrales</button>
                </div>
            </div>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog
                    as="div"
                    className="fixed inset-0 z-10 overflow-y-auto"
                    onClose={closeModal}
                >
                    <div className="min-h-screen px-4 text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-75 transition-opacity" />
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
                            <div className="relative inline-block w-full max-w-4xl px-10 py-14  overflow-hidden align-middle transition-all transform bg-gray-100 shadow-xl rounded-2xl">
                                <Dialog.Title
                                    as="h3"
                                    className="text-2xl leading-6 font-bold text-gray-800 text-center"
                                >
                                    Calculadora de Gastos Arbitrales
                                    <button onClick={closeModal} className="absolute top-2 right-2 hover:bg-gray-200 p-1 rounded-full transition-all duration-300">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                        </svg>
                                    </button>
                                </Dialog.Title>
                                <Transition
                                    show={!showResults}
                                    appear={!showResults}
                                    enter="transform transition duration-1000"
                                    enterFrom="opacity-0 -translate-y-3"
                                    enterTo="opacity-100 translate-y-0"
                                >
                                    <div className="mt-4">
                                        <p className="leading-snug text-gray-600 text-center">
                                            Ingrese el monto de la cuantía en soles.
                                        </p>
                                        <div className="flex content-center justify-center mt-8">
                                            <div className="relative flex w-72 flex-wrap items-stretch">
                                                <span className="z-10 h-full leading-snug font-normal text-center text-blueGray-300 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3 text-gray-400">
                                                    S/.
                                                </span>
                                                <input
                                                    type="text"
                                                    placeholder="0.00"
                                                    value={cuantia}
                                                    onChange={(e) => formatMoney(e.target.value)}
                                                    className="pr-5 py-3 relative text-right w-full pl-10 focus:ring-indigo-500 focus:border-indigo-500 shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                />
                                            </div>
                                            <button
                                                type="button"
                                                onClick={submitShowResults}
                                                className="ml-4 flex justify-center content-center items-center py-2 px-4 border border-transparent text-sm rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                                            >
                                                Calcular
                                            </button>
                                        </div>
                                        {errorCuantia && <p className="text-center font-semibold text-sm text-red-500">*Debe especificar un monto</p>}
                                    </div>
                                </Transition>
                                <Transition
                                    show={showResults}
                                    appear={showResults}
                                    enter="transform transition duration-1000"
                                    enterFrom="opacity-0 -translate-y-3"
                                    enterTo="opacity-100 translate-y-0"
                                >
                                    <div className="flex flex-col mt-8">
                                        <div className="flex justify-between mb-3">
                                            <p className="text-left font-semibold text-gray-800">
                                                <strong>Monto de la cuantía:</strong> S/. {toSoles(cuantia)}
                                            </p>
                                            <button
                                                onClick={resetCalc}
                                                className="bg-blue-600 hover:bg-blue-700 w-max text-white py-2 px-4 rounded-md text-xs ml-auto flex shadow-md">
                                                Nuevo cálculo
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 my-auto" viewBox="0 0 20 20" fill="currentColor">
                                                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                                </svg>
                                            </button>
                                        </div>
                                        <div className="flex flex-col">
                                            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                                                <div className="inline-block py-2 min-w-full sm:px-6 lg:px-8">
                                                    <div className="overflow-hidden shadow-md sm:rounded-lg">
                                                        <table className="min-w-full">
                                                            <thead className="bg-blue-600 dark:bg-gray-700">
                                                                <tr>
                                                                    <th scope="col" className="py-3 px-6 text-xs font-bold tracking-wider text-left text-white uppercase">
                                                                        Concepto
                                                                    </th>
                                                                    <th scope="col" className="py-3 px-6 text-xs font-bold tracking-wider text-right text-white uppercase">
                                                                        Valor del Servicio
                                                                    </th>
                                                                    <th scope="col" className="py-3 px-6 text-xs font-bold tracking-wider text-right text-white uppercase">
                                                                        IGV
                                                                    </th>
                                                                    <th scope="col" className="py-3 px-6 text-xs font-bold tracking-wider text-right text-white uppercase">
                                                                        Total (S/.)
                                                                    </th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                {
                                                                    menus.map((m, k) =>
                                                                        <tr key={k} className="bg-gray-50 border-b dark:bg-gray-800 dark:border-gray-700">
                                                                            <td className="py-4 px-6 text-left text-sm font-medium text-gray-800 whitespace-nowrap dark:text-white">
                                                                                {m.nombre}
                                                                            </td>
                                                                            <td className="py-4 px-6 text-right text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                                                                S/. {toSoles(calcTotal(m.costos))}
                                                                            </td>
                                                                            <td className="py-4 px-6 text-right text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                                                                {
                                                                                    m.con_il ?
                                                                                        "IL"
                                                                                        :
                                                                                        <>
                                                                                            S/. {toSoles((calcTotal(m.costos) * 0.18))}
                                                                                        </>
                                                                                }
                                                                            </td>
                                                                            <td className={`${m.con_il ? "pr-3" : "pr-10"} pl-3 py-4 text-right text-sm text-gray-500 whitespace-nowrap dark:text-gray-400`}>
                                                                            S/. {
                                                                                    m.con_il ?
                                                                                            toSoles(calcTotal(m.costos))
                                                                                        :
                                                                                        <>
                                                                                            {toSoles(calcTotal(m.costos)+(calcTotal(m.costos) * 0.18))}
                                                                                        </>
                                                                                }
                                                                                {
                                                                                    m.con_il ?
                                                                                        " + IL"
                                                                                        :
                                                                                        ""
                                                                                }
                                                                            </td>
                                                                        </tr>
                                                                    )
                                                                }
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <p className="text-left font-semibold text-gray-800 mt-2">
                                            IL = Impuestos de Ley
                                        </p>
                                    </div>
                                </Transition>
                            </div>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}
