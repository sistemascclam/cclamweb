import React, { useEffect, useState } from 'react'
import SearchPromotor from '../Selects/SearchPromotor'
import lottieJson from '../../public/animations/71551-confetti.json'
import lottieJson2 from '../../public/animations/lf30_editor_friends.json'
import lottieJson3 from '../../public/animations/lf20_30iie6_confetti.json'
import Lottie from 'react-lottie'


export default function index(props) {
    const stepsPersona = [<ChooseType {...props} />, <ChoosePromotor {...props} />, <StepInfoEmpresa {...props} />, <AfiliationCompleted {...props} />]
    const stepsEmpresa = [<ChooseType {...props} />, <ChoosePromotor {...props} />, <StepInfoEmpresa {...props} />, <AfiliationCompleted {...props} />]
    const formsStep = [stepsPersona, stepsEmpresa]
    const { step, setmaxStep, typeAfiliation } = props
    useEffect(() => {
        let t = typeAfiliation ? typeAfiliation : 0
        setmaxStep(formsStep[t].length - 1)
    }, [typeAfiliation])
    return (
        <form>
            {
                typeAfiliation ?
                    formsStep[typeAfiliation][step]
                    : formsStep[0][step]
            }
        </form>
    )
}

const ChooseType = ({ next, setTypeAfiliation }) => <div className="text-center">
    <h2 className="font-extrabold text-2xl mb-6">¿Cómo te quieres afiliar?</h2>
    <button type="button" onClick={() => { setTypeAfiliation(0); next(); }} className="mx-auto w-full lg:w-96 shadow-close py-6 px-5 rounded-xl font-medium text-left flex justify-between mb-4 cursor-pointer hover:scale-101">
        <p className="flex">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 my-auto text-blue-600 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
            </svg>
            Persona jurídica</p>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 my-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
    </button>
    <button type="button" onClick={() => { setTypeAfiliation(1); next(); }} className="mx-auto w-full lg:w-96 shadow-close py-6 px-5 rounded-xl font-medium text-left flex justify-between cursor-pointer hover:scale-101">
        <p className="flex">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 my-auto text-blue-600 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clipRule="evenodd" />
            </svg>
            Empresa</p>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 my-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
    </button>
</div>

const ChoosePromotor = ({ next }) => {
    const [promotorSearched, setPromotorSearched] = useState(null);
    return (
        <div className="text-center">
            <h2 className="font-extrabold text-2xl mb-6 text-center">Antes de empezar...</h2>
            <SearchPromotor setVal={setPromotorSearched} curVal={promotorSearched} />
            <button className="text-gray-800 mt-2 text-sm hover:underline hvoer:text-blue-500" type="button" onClick={next}>Omitir</button>
        </div>
    )
}

const StepInfoEmpresa = () => {
    return (<>info</>)
}

import moment from "moment";
import 'moment/locale/es';
moment.locale('es')

const AfiliationCompleted = () => {

    const defaultOptions = {
        loop: false,
        autoplay: true,
        animationData: lottieJson,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    const defaultOptions2 = {
        loop: false,
        autoplay: true,
        animationData: lottieJson2,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    const defaultOptions3 = {
        loop: true,
        autoplay: true,
        animationData: lottieJson3,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    return (
        <>
            <div
                className="absolute inset-0">
                <Lottie
                    options={defaultOptions}
                />
            </div>
            <div className="text-center w-full relative">
                <div
                    className="absolute inset-0 -z-10">
                    <Lottie
                        options={defaultOptions3}
                    />
                </div>
                <p className="font-black text-2xl text-blue-600 z-20">¡Afiliación registrada!</p>
                <div
                    className="animate-afiliation w-10/12 h-40 lg:h-72 mx-auto overflow-hidden flex justify-center mt-8">
                    <Lottie
                        options={defaultOptions2}
                    />
                </div>
                <div className="mx-auto text-blue-600 mt-10 z-20">
                    <p className="text-lg font-medium text-gray-600 leading-tight mb-3 mt-4">Bienvenido a la red empresarial más grande del norte del pais.</p>
                    <p className="text-lg font-medium text-gray-600 leading-tight mb-3">En breve estaremos comunicándonos contigo para hablarte de tus nuevos beneficios.</p>
                </div>
                <div className="w-full text-center mt-12">
                    <p className="font-bold text-sm">Compártelo</p>
                    <div className="flex justify-center mt-2">
                        <a
                            className="font-light text-white transition-all ease-in-out hover:scale-110"
                            href={`https://wa.me/?text=Me%20acabo%20de%20afiliar%20a%20la%20Camara%20de%20Comercio%20de%20Lambayeque`}
                            data-action="share/whatsapp/share"
                            target="_blank"
                        >
                            <div className="rounded-full bg-blue-600 p-2 mr-2 flex items-center justify-center shadow-3xl">
                                <svg viewBox="-23 -21 682 682.66669" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><path fill="white" d="m544.386719 93.007812c-59.875-59.945312-139.503907-92.9726558-224.335938-93.007812-174.804687 0-317.070312 142.261719-317.140625 317.113281-.023437 55.894531 14.578125 110.457031 42.332032 158.550781l-44.992188 164.335938 168.121094-44.101562c46.324218 25.269531 98.476562 38.585937 151.550781 38.601562h.132813c174.785156 0 317.066406-142.273438 317.132812-317.132812.035156-84.742188-32.921875-164.417969-92.800781-224.359376zm-224.335938 487.933594h-.109375c-47.296875-.019531-93.683594-12.730468-134.160156-36.742187l-9.621094-5.714844-99.765625 26.171875 26.628907-97.269531-6.269532-9.972657c-26.386718-41.96875-40.320312-90.476562-40.296875-140.28125.054688-145.332031 118.304688-263.570312 263.699219-263.570312 70.40625.023438 136.589844 27.476562 186.355469 77.300781s77.15625 116.050781 77.132812 186.484375c-.0625 145.34375-118.304687 263.59375-263.59375 263.59375zm144.585938-197.417968c-7.921875-3.96875-46.882813-23.132813-54.148438-25.78125-7.257812-2.644532-12.546875-3.960938-17.824219 3.96875-5.285156 7.929687-20.46875 25.78125-25.09375 31.066406-4.625 5.289062-9.242187 5.953125-17.167968 1.984375-7.925782-3.964844-33.457032-12.335938-63.726563-39.332031-23.554687-21.011719-39.457031-46.960938-44.082031-54.890626-4.617188-7.9375-.039062-11.8125 3.476562-16.171874 8.578126-10.652344 17.167969-21.820313 19.808594-27.105469 2.644532-5.289063 1.320313-9.917969-.664062-13.882813-1.976563-3.964844-17.824219-42.96875-24.425782-58.839844-6.4375-15.445312-12.964843-13.359374-17.832031-13.601562-4.617187-.230469-9.902343-.277344-15.1875-.277344-5.28125 0-13.867187 1.980469-21.132812 9.917969-7.261719 7.933594-27.730469 27.101563-27.730469 66.105469s28.394531 76.683594 32.355469 81.972656c3.960937 5.289062 55.878906 85.328125 135.367187 119.648438 18.90625 8.171874 33.664063 13.042968 45.175782 16.695312 18.984374 6.03125 36.253906 5.179688 49.910156 3.140625 15.226562-2.277344 46.878906-19.171875 53.488281-37.679687 6.601563-18.511719 6.601563-34.375 4.617187-37.683594-1.976562-3.304688-7.261718-5.285156-15.183593-9.253906zm0 0" /></svg>
                            </div>
                        </a>
                        <a
                            className="font-light text-white transition-all ease-in-out hover:scale-110"
                            href={`https://telegram.me/share/url?url=Me%20acabo%20de%20afiliar%20a%20la%20Camara%20de%20Comercio%20de%20Lambayeque`}
                            target="_blank"
                        >
                            <div className="rounded-full bg-blue-600 p-2 mr-2 flex items-center justify-center shadow-3xl">
                                <svg viewBox="0 0 24 24" focusable="false" role="img" fill="currentColor" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><title>Telegram icon</title><path d="m20.665 3.717-17.73 6.837c-1.21.486-1.203 1.161-.222 1.462l4.552 1.42 10.532-6.645c.498-.303.953-.14.579.192l-8.533 7.701h-.002l.002.001-.314 4.692c.46 0 .663-.211.921-.46l2.211-2.15 4.599 3.397c.848.467 1.457.227 1.668-.785l3.019-14.228c.309-1.239-.473-1.8-1.282-1.434z"></path></svg>
                            </div>
                        </a>
                        <a
                            className="font-light text-white transition-all ease-in-out hover:scale-110"
                            href={`http://www.facebook.com/sharer.php?s=100&p[url]=http://cclam.org.pe/&p[title]=CCLAM&p[summary]=Me acabo de afiliar a la Camara de Comercio y Produccion de Lambayeque&p[images][0]=http://cclam.org.pe/images/logocclam.png`}
                            target="_blank"
                        >
                            <div className="rounded-full bg-blue-600 p-2 mr-2 flex items-center justify-center shadow-3xl">
                                <svg viewBox="0 0 24 24" focusable="false" role="img" fill="currentColor" height="20" width="20" xmlns="http://www.w3.org/2000/svg" ><title>Facebook icon</title><path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"></path></svg>                                                </div>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}