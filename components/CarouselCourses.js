import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import { useEffect, useRef, useState } from "react"
import Image from "next/image"

export default function CarouselCourses({ slidesLg = 3, slidesSM = 1}) {
    const [pause, setPause] = useState(false)
    const timer = useRef()
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
            setPause(false)
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
        }, 3000)
        return () => {
            clearInterval(timer.current)
        }
    }, [pause, slider])

    return (
        <div ref={sliderRef} className="keen-slider mx-auto h-full w-full">
            <div className="keen-slider__slide content-center flex items-stretch justify-center h-full w-full">
                <div className={`relative my-auto h-full w-full`}>
                    <Image
                        className="rounded-3xl shadow-close"
                        src={"/images/servicios/desarrolloempresarial/cursos/curso1.png"}
                        width="400"
                        height="400"
                    />
                </div>
            </div>
            <div className="keen-slider__slide content-center flex items-stretch justify-center h-full w-full">
                <div className={`relative my-auto h-full w-full`}>
                    <Image
                        className="rounded-3xl shadow-close"
                        src={"/images/servicios/desarrolloempresarial/cursos/curso2.png"}
                        width="400"
                        height="400"
                    />
                </div>
            </div>
            <div className="keen-slider__slide content-center flex items-stretch justify-center h-full w-full">
                <div className={`relative my-auto h-full w-full`}>
                    <Image
                        className="rounded-3xl shadow-close"
                        src={"/images/servicios/desarrolloempresarial/cursos/curso3.png"}
                        width="400"
                        height="400"
                    />
                </div>
            </div>
            <div className="keen-slider__slide content-center flex items-stretch justify-center h-full w-full">
                <div className={`relative my-auto h-full w-full`}>
                    <Image
                        className="rounded-3xl shadow-close"
                        src={"/images/servicios/desarrolloempresarial/cursos/curso4.png"}
                        width="400"
                        height="400"
                    />
                </div>
            </div>
        </div>
    )
}