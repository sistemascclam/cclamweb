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
                        src={`${process.env.STORAGE_URL_FT}/images/consejo/directivos/elkin-vanegas.jpg`}
                        alt="Elkin Vanegas"
                        layout="responsive"
                        quality="100"
                        width="490"
                        height="612"
                    />
                </div>
            </div>
            <div className="keen-slider__slide content-center flex items-stretch justify-center">
                <div className={`relative my-auto h-full w-full ${currentSlide === 8 ? '' : animation}`}>
                    <Image
                        className={className}
                        src={`${process.env.STORAGE_URL_FT}/images/consejo/directivos/olivio-huancaruna.jpg`}
                        alt="Olivio Huancaruna"
                        layout="responsive"
                        quality="100"
                        width="490"
                        height="612"
                    />
                </div>
            </div>
            <div className="keen-slider__slide content-center flex items-stretch justify-center">
                <div className={`relative my-auto h-full w-full ${currentSlide + 2 === 2 ? '' : animation}`}>
                    <Image
                        className={className}
                        src={`${process.env.STORAGE_URL_FT}/images/consejo/directivos/carlos-burgos.jpg`}
                        alt="Ing. Carlos Burgos"
                        layout="responsive"
                        quality="100"
                        width="490"
                        height="612"
                    />
                </div>
            </div>
            <div className="keen-slider__slide content-center flex items-stretch justify-center">
                <div className={`relative my-auto h-full w-full ${currentSlide + 2 === 3 ? '' : animation}`}>
                    <Image
                        className={className}
                        src={`${process.env.STORAGE_URL_FT}/images/consejo/directivos/patricia-diaz.jpg`}
                        alt="Patricia Diaz"
                        layout="responsive"
                        quality="100"
                        width="490"
                        height="612"
                    />
                </div>
            </div>
            <div className="keen-slider__slide content-center flex items-stretch justify-center">
                <div className={`relative my-auto h-full w-full ${currentSlide + 2 === 4 ? '' : animation}`}>
                    <Image
                        className={className}
                        src={`${process.env.STORAGE_URL_FT}/images/consejo/directivos/carlos-iberico.png`}
                        alt="Carlos Iberico"
                        layout="responsive"
                        quality="100"
                        width="490"
                        height="612"
                    />
                </div>
            </div>
            <div className="keen-slider__slide content-center flex items-stretch justify-center">
                <div className={`relative my-auto h-full w-full ${currentSlide + 2 === 5 ? '' : animation}`}>
                    <Image
                        className={className}
                        src={`${process.env.STORAGE_URL_FT}/images/consejo/directivos/vanesa-ramos.jpg`}
                        alt="Vanesa Ramos"
                        layout="responsive"
                        quality="100"
                        width="490"
                        height="612"
                    />
                </div>
            </div>
            <div className="keen-slider__slide content-center flex items-stretch justify-center">
                <div className={`relative my-auto h-full w-full ${currentSlide + 2 === 6 ? '' : animation}`}>
                    <Image
                        className={className}
                        src={`${process.env.STORAGE_URL_FT}/images/consejo/directivos/mitchel-gamboa.jpg`}
                        alt="Mitchel Gamboa"
                        layout="responsive"
                        quality="100"
                        width="490"
                        height="612"
                    />
                </div>
            </div>
            <div className="keen-slider__slide content-center flex items-stretch justify-center">
                <div className={`relative my-auto h-full w-full ${currentSlide + 2 === 7 ? '' : animation}`}>
                    <Image
                        className={className}
                        src={`${process.env.STORAGE_URL_FT}/images/consejo/directivos/franco-chiappe.jpg`}
                        alt="Franco Chiappe"
                        layout="responsive"
                        quality="100"
                        width="490"
                        height="612"
                    />
                </div>
            </div>
            <div className="keen-slider__slide content-center flex items-stretch justify-center">
                <div className={`relative my-auto h-full w-full ${currentSlide + 2 === 8 ? '' : animation}`}>
                    <Image
                        className={className}
                        src={`${process.env.STORAGE_URL_FT}/images/consejo/directivos/astrid-reynoso.jpg`}
                        alt="Atrid Reynoso"
                        layout="responsive"
                        quality="100"
                        width="490"
                        height="612"
                    />
                </div>
            </div>
        </div>
    )
}