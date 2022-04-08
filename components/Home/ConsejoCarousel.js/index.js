import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import { useEffect, useRef, useState } from "react"
import Image from "next/image"

export default function ConsejoCarousel({ className, slidesLg = 4, slidesSM = 2, animation = '' }) {
    const [pause, setPause] = useState(false)
    const timer = useRef()
    const [currentSlide, setcurrentSlide] = useState(0);
    const [sliderRef, slider] = useKeenSlider({
        loop: true,
        rtl: true,
        spacing: 25,
        breakpoints: {
            '(max-width: 639px) ': {
                slidesPerView: slidesSM,
            },
            '(min-width: 640px)': {
                slidesPerView: slidesLg,
            },
        },
        duration: 1000,
        dragStart: () => {
            setPause(true)
        },
        dragEnd: () => {
            setPause(false)
        },
        slideChanged(s) {
            setcurrentSlide(s.details().relativeSlide)
        },
    })

    useEffect(() => {
        timer.current = setInterval(() => {
            if (!pause && slider) {
                slider.prev()
            }
        }, 5000)
        return () => {
            clearInterval(timer.current)
        }
    }, [pause, slider])

    return (
        <div ref={sliderRef} className="keen-slider mx-auto h-full w-full">
            <div className="keen-slider__slide content-center flex items-stretch justify-center h-full w-full">
                <div className={`relative my-auto h-full w-full ${currentSlide === 7 ? '' : animation}`}>
                        <Image
                        className={className}
                        src={`${process.env.STORAGE_URL_FT}/images/logotipo.png`}
                        alt="Elkin Vanegas"
                        
                        quality="100"
                        width="200"
                        height="160"
                    />
                    <p className="mt-2 text-white font-bold">OLIVIO HUANCARUNA PERALES</p>
                    <p className="text-light text-gray-300 text-sm font-normal">PRESIDENTE</p>
                </div>
            </div>
            <div className="keen-slider__slide content-center flex items-stretch justify-center">
                <div className={`relative my-auto h-full w-full ${currentSlide === 8 ? '' : animation}`}>
                    <Image
                        className={className}
                        src={`${process.env.STORAGE_URL_FT}/images/logotipo.png`}
                        alt="Olivio Huancaruna"
                        
                        quality="100"
                        width="200"
                        height="160"
                    />
                    <p className="mt-2 text-white font-bold">FRANCO CHIAPPE POLAR</p>
                    <p className="text-light text-gray-300 text-sm font-normal">1ER VICEPRESIDENTE</p>
                </div>
            </div>
            <div className="keen-slider__slide content-center flex items-stretch justify-center">
                <div className={`relative my-auto h-full w-full ${currentSlide + 2 === 2 ? '' : animation}`}>
                    <Image
                        className={className}
                        src={`${process.env.STORAGE_URL_FT}/images/logotipo.png`}
                        alt="Ing. Carlos Burgos"
                        
                        quality="100"
                        width="200"
                        height="160"
                    />
                    <p className="mt-2 text-white font-bold">CAROLINA MEDRANO VARGAS</p>
                    <p className="text-light text-gray-300 text-sm font-normal">2DO VICEPRESIDENTE</p>
                </div>
            </div>
            <div className="keen-slider__slide content-center flex items-stretch justify-center">
                <div className={`relative my-auto h-full w-full ${currentSlide + 2 === 3 ? '' : animation}`}>
                    <Image
                        className={className}
                        src={`${process.env.STORAGE_URL_FT}/images/logotipo.png`}
                        alt="Patricia Diaz"
                        
                        quality="100"
                        width="200"
                        height="160"
                    />
                    <p className="mt-2 text-white font-bold">LINDON VELA MELENDEZ</p>
                    <p className="text-light text-gray-300 text-sm font-normal">DIRECTOR TESORERO</p>
                </div>
            </div>
            <div className="keen-slider__slide content-center flex items-stretch justify-center">
                <div className={`relative my-auto h-full w-full ${currentSlide + 2 === 4 ? '' : animation}`}>
                    <Image
                        className={className}
                        src={`${process.env.STORAGE_URL_FT}/images/logotipo.png`}
                        alt="Carlos Iberico"
                        
                        quality="100"
                        width="200"
                        height="160"
                    />
                    <p className="mt-2 text-white font-bold">MARIA ISABEL ESPINAL TAPIA</p>
                    <p className="text-light text-gray-300 text-sm font-normal">DIRECTOR PRO TESORERO</p>
                </div>
            </div>
            <div className="keen-slider__slide content-center flex items-stretch justify-center">
                <div className={`relative my-auto h-full w-full ${currentSlide + 2 === 5 ? '' : animation}`}>
                    <Image
                        className={className}
                        src={`${process.env.STORAGE_URL_FT}/images/logotipo.png`}
                        alt="Vanesa Ramos"
                        
                        quality="100"
                        width="200"
                        height="160"
                    />
                    <p className="mt-2 text-white font-bold">MITCHELL GAMBOA DELGADO</p>
                    <p className="text-light text-gray-300 text-sm font-normal">VOCAL</p>
                </div>
            </div>
            <div className="keen-slider__slide content-center flex items-stretch justify-center">
                <div className={`relative my-auto h-full w-full ${currentSlide + 2 === 6 ? '' : animation}`}>
                    <Image
                        className={className}
                        src={`${process.env.STORAGE_URL_FT}/images/logotipo.png`}
                        alt="Mitchel Gamboa"
                        
                        quality="100"
                        width="200"
                        height="160"
                    />
                    <p className="mt-2 text-white font-bold">VICTOR OROSCO NUNTON</p>
                    <p className="text-light text-gray-300 text-sm font-normal">VOCAL</p>
                </div>
            </div>
            <div className="keen-slider__slide content-center flex items-stretch justify-center">
                <div className={`relative my-auto h-full w-full ${currentSlide + 2 === 7 ? '' : animation}`}>
                    <Image
                        className={className}
                        src={`${process.env.STORAGE_URL_FT}/images/logotipo.png`}
                        alt="Franco Chiappe"
                        
                        quality="100"
                        width="200"
                        height="160"
                    />
                    <p className="mt-2 text-white font-bold">ELKIN VANEGAS MURILLO</p>
                    <p className="text-light text-gray-300 text-sm font-normal">VOCAL</p>
                </div>
            </div>
            <div className="keen-slider__slide content-center flex items-stretch justify-center">
                <div className={`relative my-auto h-full w-full ${currentSlide + 2 === 8 ? '' : animation}`}>
                    <Image
                        className={className}
                        src={`${process.env.STORAGE_URL_FT}/images/logotipo.png`}
                        alt="Atrid Reynoso"
                        
                        quality="100"
                        width="200"
                        height="160"
                    />
                    <p className="mt-2 text-white font-bold">JOSE LECAROS DE MARZI</p>
                    <p className="text-light text-gray-300 text-sm font-normal">VOCAL</p>
                </div>
            </div>
        </div>
    )
}