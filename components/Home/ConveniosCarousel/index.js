import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import { useEffect, useRef, useState } from "react"

export default function ConveniosCarousel() {
    const [pause, setPause] = useState(false)
    const timer = useRef()

    const [sliderRef, slider] = useKeenSlider({
        loop: true,
        rtl: true,
        breakpoints: {
          '(max-width: 640px)': {
            slidesPerView: 2,
          },
          '(min-width: 1024px)': {
            slidesPerView: 7,
          },
        },
        duration: 1000,
        dragStart: () => {
            setPause(true)
        },
        dragEnd: () => {
            setPause(false)
        },
    })

    useEffect(() => {
        sliderRef.current.addEventListener("mouseover", () => {
            setPause(true)
        })
        sliderRef.current.addEventListener("mouseout", () => {
            setPause(false)
        })
    }, [sliderRef])

    useEffect(() => {
        timer.current = setInterval(() => {
            if (!pause && slider) {
                slider.prev()
            }
        }, 2000)
        return () => {
            clearInterval(timer.current)
        }
    }, [pause, slider])

    return (
        <div ref={sliderRef} className="keen-slider mt-20 w-11/12 mx-auto">
            <div className="keen-slider__slide content-center flex items-stretch justify-center">
                <img
                    src={`${process.env.imgIniPath}convenios/sunat.png`}
                    alt="Logo SUNAT"
                    className="responsive my-auto max-h-20"
                />
            </div>
            <div className="keen-slider__slide content-center flex items-stretch justify-center">
                <img
                    src={`${process.env.imgIniPath}convenios/zegel.png`}
                    alt="Zegel ZEGEL"
                    className="responsive my-auto max-h-20"
                />
            </div>
            <div className="keen-slider__slide content-center flex items-stretch justify-center">
                <img
                    src={`${process.env.imgIniPath}convenios/uss.png`}
                    alt="Logo SIPAN"
                    className="responsive my-auto max-h-20"
                />
            </div>
            <div className="keen-slider__slide content-center flex items-stretch justify-center">
                <img
                    src={`${process.env.imgIniPath}convenios/ucv.png`}
                    alt="Logo UCV"
                    className="responsive my-auto max-h-20"
                />
            </div>
            <div className="keen-slider__slide content-center flex items-stretch justify-center">
                <img
                    src={`${process.env.imgIniPath}convenios/reniec.png`}
                    alt="Logo RENIEC"
                    className="responsive my-auto max-h-20"
                />
            </div>
            <div className="keen-slider__slide content-center flex items-stretch justify-center">
                <img
                    src={`${process.env.imgIniPath}convenios/induamerica.png`}
                    alt="Logo Induamerica"
                    className="responsive my-auto max-h-20"
                />
            </div>
            <div className="keen-slider__slide content-center flex items-stretch justify-center">
                <img
                    src={`${process.env.imgIniPath}convenios/claro.png`}
                    alt="Logo Claro"
                    className="responsive my-auto max-h-20"
                />
            </div>
            <div className="keen-slider__slide content-center flex items-stretch justify-center">
                <img
                    src={`${process.env.imgIniPath}convenios/certus.png`}
                    alt="Logo CERTUS"
                    className="responsive my-auto max-h-20"
                />
            </div>
            <div className="keen-slider__slide content-center flex items-stretch justify-center">
                <img
                    src={`${process.env.imgIniPath}convenios/cil.png`}
                    alt="Logo Colegio de Ingenieros de Lambayeque"
                    className="responsive my-auto max-h-20"
                />
            </div>
            <div className="keen-slider__slide content-center flex items-stretch justify-center">
                <img
                    src={`${process.env.imgIniPath}convenios/usat.png`}
                    alt="Logo USAT"
                    className="responsive my-auto max-h-20"
                />
            </div><div className="keen-slider__slide content-center flex items-stretch justify-center">
                <img
                    src={`${process.env.imgIniPath}convenios/sanroque.png`}
                    alt="Logo SAN ROQUE"
                    className="responsive my-auto max-h-20"
                />
            </div>
        </div>
    )
}