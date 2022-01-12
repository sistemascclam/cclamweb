import React, { useState } from 'react'
import AfiliacionStep from '../components/Afiliacion/index'

export default function Afiliacion() {
    const [step, setstep] = useState(0);
    const [maxStep, setmaxStep] = useState(1)

    const next = () => {
        setstep((step + 1) > (maxStep) ? (maxStep) : (step + 1))
    }
    const prev = () => {
        setstep((step - 1) < 0 ? 0 : (step - 1))
    }

    //Data para registro
    const [typeAfiliation, setTypeAfiliation] = useState(null)
    //Data para registro


    return (
        <div className="h-screen flex">
            <div className="lg:flex w-4/12 hidden bg-gray-500 bg-no-repeat bg-cover bg-center bg-fachada-gradiente relative justify-around items-center ">
                <div className={`absolute bg-gradient-to-tr from-bgblue via-withGradient to-themeLightBlue ${step > 1 ? 'opacity-90' : 'opacity-70'} inset-0 z-0`}></div>
                <div className={`${step > 1 ? 'hidden' : ''} z-10`}>
                    <h1 className="text-white font-bold text-4xl font-sans">Afíliate ahora</h1>
                    <p className="text-white mt-1">Únete a la red empresarial más grande del norte del Perú</p>
                    <button type="submit" className="block w-28 bg-white text-bgblue mt-4 py-2 rounded-2xl font-semibold hover:bg-gray-200 mb-2">Saber más</button>
                </div>
                <div className={`${step > 1 ? '' : 'hidden'} z-10 w-full py-5 px-10`}>
                    <h1 className="text-white font-bold text-3xl font-sans">Proceso de afiliación</h1>
                    <p className="text-white mt-1">Completa los pasos para procesar tu afiliación. Te tomará solo unos minutos.</p>
                    <div className="mt-10 flex flex-col">
                        <Step num={0} current />
                        <Step num={1} />
                        <Step num={2} />
                    </div>
                </div>
            </div>
            <div className="flex lg:w-8/12 w-full justify-center items-center lg:items-end bg-white relative pb-6   ">
                <img
                    alt="Logo CCLAM"
                    src={`${process.env.BASE_URL}images/logocclam.png`}
                    className={`w-36 mb-2 mx-auto absolute top-6 z-30 ${step === maxStep ? 'hidden' : ''}`}
                />
                <div className="absolute lg:hidden z-10 inset-0 bg-gray-500 bg-no-repeat bg-cover bg-fachada-gradiente items-center">
                    <div className="absolute bg-gradient-to-tr from-bgblue via-withGradient to-themeLightBlue opacity-70 inset-0 z-0"></div>
                </div>
                <div className="z-20 bg-white w-11/12 rounded-2xl relative p-6 h-max lg:h-full flex flex-col justify-center items-center">
                    <AfiliacionStep next={next} prev={prev} step={step} setmaxStep={setmaxStep} setTypeAfiliation={setTypeAfiliation} typeAfiliation={typeAfiliation} />
                    <div className="flex flex-col w-full relative lg:absolute bottom-0 lg:bottom-3 inset-x-0 mt-10">
                        <button className={`${step === maxStep || step == 0 ? 'hidden' : ''} bg-blue-500 text-white px-3 py-2 rounded-full w-11/12 text-center font-semibold flex justify-center shadow-md mx-auto`} type="button" onClick={next}>
                            Siguiente
                        </button>
                        <button className={`${step === maxStep || step == 0 ? 'hidden' : ''} text-blue-500 font-semibold mx-auto flex mt-4`} type="button" onClick={prev}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 17l-5-5m0 0l5-5m-5 5h12" />
                            </svg>
                            Regresar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

const Step = ({ num, current }) =>
    <button type="button" className="w-full flex relative mt-1">
        <div className="w-10 flex flex-col justify-center">
            <div className={`rounded-full mx-auto text-2xl text-white ring-white ${!current ? 'opacity-60 w-6 h-6' : 'w-8 h-8'} ring-2 flex items-center`}>
                <div className="bg-white w-2 h-2 rounded-full mx-auto"></div>
            </div>
            <div className={`h-14 w-0 ring-1 ring-white mt-[0.15rem] mx-auto opacity-60`}></div>
        </div>
        <p className={`text-white ml-4 font-normal  ${!current ? 'opacity-60 text-base' : 'text-lg'}`}>Información de la empresa</p>
    </button>