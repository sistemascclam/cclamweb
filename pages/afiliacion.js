import { Transition } from '@headlessui/react';
import React, { useEffect, useState } from 'react'
import AfiliacionStep from '../components/Afiliacion/index'
import { useForm, Controller } from "react-hook-form";
import Link from "next/link"
import { newAfiliation, resetSaveAfiliation } from '../redux/actions/asociado';
import { useDispatch, useSelector } from 'react-redux';
import { hideMessage } from '../redux/actions/common';

var stepNames = [['Empresa', 'Representante', 'Contacto adicional'], ['Persona']]

export default function Afiliacion() {
    const dispatch = useDispatch();
    const { loadingSendAfiliation, afiliationSaved } = useSelector(({ asociado }) => asociado)
    const [step, setstep] = useState(0);
    const [maxStep, setmaxStep] = useState(1)
    const [visited, setvisited] = useState([])

    const next = () => {
        let newStep = (step + 1) > (maxStep) ? (maxStep) : (step + 1)
        let visited_tmp = visited.filter(v => v != (newStep - 2))
        setstep(newStep)
        if (newStep > 1) {
            setvisited(visited_tmp.concat(newStep - 2))
        }
    }
    const prev = () => {
        setstep((step - 1) < 0 ? 0 : (step - 1))
    }
    const setStep = (s) => {
        setstep(s + 2)
    }

    //Data para registro
    const [typeAfiliation, setTypeAfiliation] = useState(null)
    const [stepsForFill, setstepsForFill] = useState(0)
    const [errors, seterrors] = useState({})
    const { register, handleSubmit, control, setValue } = useForm({
        mode: "onBlur"
    });

    const onSubmit = (data) => {
        data.idPromotor = data.idPromotor ? data.idPromotor : null
        data.tipoasociado = typeAfiliation
        if (step > 0 && (step + 1) == (maxStep)) {
            dispatch(newAfiliation(data))
        } else {
            next()
        }
    }

    useEffect(() => {
        if (afiliationSaved && (step > 0 && (step + 1) == (maxStep))) {
            next()
            dispatch(resetSaveAfiliation())
        }
    }, [afiliationSaved])

    const handleError = (errors) => {
        seterrors(errors)
    };

    const clearErrors = () => { seterrors({}) }

    return (
        <div className="h-screen flex">
            <div className="lg:flex w-4/12 hidden bg-gray-500 bg-no-repeat bg-cover bg-center bg-fachada-gradiente relative justify-around items-center ">
                <div className={`absolute bg-gradient-to-tr from-bgblue via-withGradient to-themeLightBlue ${step > 1 ? 'opacity-90' : 'opacity-70'} inset-0 z-0`}></div>
                <div className={`${step > 1 ? 'hidden' : ''} z-10`}>
                    <h1 className="text-white font-bold text-4xl font-sans">Afíliate ahora</h1>
                    <p className="text-white mt-1">Únete a la red empresarial más grande del norte del Perú</p>
                    <a target="_blank" href="https://cclam.org.pe/pdfs/2022/ENERO/BENEFICIOS_ASOCIADOS_2022.pdf" className="w-28 bg-white text-bgblue mt-4 py-2 rounded-2xl font-semibold hover:bg-gray-200 mb-2 flex justify-center">Saber más</a>
                </div>
                <div className={`${step > 1 ? '' : 'hidden'} z-10 w-full py-5 px-10`}>
                    <h1 className="text-white font-bold text-3xl font-sans">Proceso de afiliación</h1>
                    <p className="text-white mt-1">Completa los pasos para procesar tu afiliación. Te tomará solo unos minutos.</p>
                    <div className="mt-10 flex flex-col">
                        {
                            Array(stepsForFill).fill(1).map((n, i) => <Step key={i} num={i} current={step - 2} last={stepsForFill - 1 == i} setStep={setStep} name={stepNames[typeAfiliation - 1][i]} visited={visited} />)
                        }
                    </div>
                    <div className="text-white text-sm leading-tight mt-10 ">
                        <p>Al afiliarse confirma que está de acuerdo con nuestros <a href="https://cclam.org.pe/pdfs/2022/ENERO/Terminos_y_condiciones_CCLAM.pdf" target="_blank" className="text-indigo-300 hover:text-indigo-500">Términos de servicio, políticas de privacidad y uso de Cookies</a>.</p>
                    </div>
                </div>
            </div>
            <form onSubmit={handleSubmit(onSubmit, handleError)} onChange={clearErrors} className="lg:w-8/12 w-full bg-white relative py-6 h-full flex flex-col content-center">
                <Link href={`/`}>
                    <a>
                        <img
                            alt="Logo CCLAM"
                            src={`${process.env.BASE_URL}images/logocclam.png`}
                            className={`w-36 mb-2 mx-auto ${step === maxStep ? 'hidden' : 'hidden lg:flex absolute z-20 mx-auto inset-x-0'}`}
                        />
                    </a>
                </Link>
                <div className="fixed lg:hidden inset-0 bg-gray-500 bg-no-repeat bg-cover bg-fachada-gradiente items-center">
                    <div className="fixed bg-gradient-to-tr from-bgblue via-withGradient to-themeLightBlue opacity-70 inset-0"></div>
                </div>
                <div className="bg-white w-11/12 rounded-2xl relative pt-6 px-6 pb-10 mx-auto my-auto ">
                    <Link href={`/`}>
                        <a>
                            <img
                                alt="Logo CCLAM"
                                src={`${process.env.BASE_URL}images/logocclam.png`}
                                className={`w-36 mb-2 mx-auto ${step === maxStep ? 'hidden' : 'flex lg:hidden'}`}
                            />
                        </a>
                    </Link>
                    <AfiliacionStep
                        next={next} prev={prev}
                        step={step}
                        setmaxStep={setmaxStep}
                        setTypeAfiliation={setTypeAfiliation}
                        typeAfiliation={typeAfiliation}
                        setstepsForFill={setstepsForFill}
                        stepsForFill={stepsForFill}
                        register={register}
                        errors={errors}
                        clearErrors={clearErrors}
                        control={control}
                        Controller={Controller}
                        setValue={setValue}
                    />
                    <div className="flex lg:hidden flex-col w-full relative lg:absolute bottom-0 lg:bottom-6 inset-x-0 mt-10">
                        <FormButtons step={step} maxStep={maxStep} prev={prev} loadingSendAfiliation={loadingSendAfiliation} />
                    <div className="text-sm leading-none mt-6 text-center">
                        <p>Al afiliarse confirma que está de acuerdo con nuestros <a href="https://cclam.org.pe/pdfs/2022/ENERO/Terminos_y_condiciones_CCLAM.pdf" target="_blank" className="text-blue-600 hover:text-blue-700">Términos de servicio, políticas de privacidad y uso de Cookies</a>.</p>
                    </div>
                    </div>
                </div>
                <div className="hidden lg:flex flex-col w-full relative lg:absolute bottom-0 lg:bottom-6 inset-x-0 mt-10">
                    <FormButtons step={step} maxStep={maxStep} prev={prev} loadingSendAfiliation={loadingSendAfiliation} />
                </div>
            </form>
            <ErrorMessage />
        </div>
    )
}

const ErrorMessage = () => {
    const dispatch = useDispatch();
    const { error, message } = useSelector(({ common }) => common)
    return (
        <>
            {
                error ?
                    <div className="fixed top-3 inset-x-0 z-50 flex content-center justify-center">
                        <div className="p-2 bg-red-500 items-center text-red-100 leading-none rounded-full flex lg:inline-flex" role="alert">
                            <div className="flex rounded-full bg-red-400 uppercase w-6 h-6 text-xs font-bold mr-3 justify-center items-center">!</div>
                            <span className="font-semibold mr-2 text-left flex-auto">{message?.data?.message ? message?.data?.message : (message?.message ? message?.message : (JSON.stringify(message)))}</span>
                            <button className="ml-3  hover:bg-white hover:bg-opacity-30 rounded-full p-1" onClick={() => dispatch(hideMessage())} >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    :
                    ''
            }
        </>
    );
}

const Step = ({ num, current, last, setStep, name, visited }) =>
    <button type="button" className="w-full flex relative mt-1" onClick={() => { if (visited.includes(num)) { setStep(num) } }}>
        <div className="w-10 flex flex-col justify-center">
            <div className={`rounded-full mx-auto text-2xl text-white ring-white ${current == num ? 'w-8 h-8' : (current > num ? 'w-2 h-2' : 'opacity-60 w-6 h-6')} ring-2 flex items-center`}>
                <div className="bg-white w-2 h-2 rounded-full mx-auto"></div>
            </div>
            {
                !last ?
                    <div className={`h-14 w-0 ring-1 ring-white mt-[0.15rem] mx-auto opacity-60`}></div>
                    :
                    ''
            }
        </div>
        <p className={`text-white ml-4 font-normal  ${current == num ? 'text-lg' : (current > num ? '-mt-2' : 'opacity-60 text-base')}`}>{name}</p>
    </button>

const FormButtons = ({ step, maxStep, prev, loadingSendAfiliation }) =>
    <Transition
        show={!(step === maxStep || step == 0)}
        appear={!(step === maxStep || step == 0)}
        enter="transform transition duration-500"
        enterFrom="opacity-0"
        enterTo="opacity-100"
    >
        <button className={` bg-blue-500 text-white px-3 py-2 rounded-full w-11/12 text-center font-semibold flex justify-center shadow-md mx-auto`} type="submit">
            {
                loadingSendAfiliation ?
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    :
                    (
                        step > 0 && (step + 1) == (maxStep) ?
                            'Finalizar' :
                            'Siguiente'
                    )
            }
        </button>
        <button className={` text-blue-500 font-semibold mx-auto flex mt-4`} type="button" onClick={prev}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 17l-5-5m0 0l5-5m-5 5h12" />
            </svg>
            Regresar
        </button>
    </Transition>