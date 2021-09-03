import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import { useEffect, useRef, useState } from "react"
import Image from "next/image"

export default function ConsejoCarousel() {
    const [pause, setPause] = useState(false)
    const timer = useRef()

    const [sliderRef, slider] = useKeenSlider({
        loop: true,
        rtl: true,
        spacing:25,
        breakpoints: {
            '(max-width: 640px)': {
                slidesPerView: 2,
            },
            '(min-width: 1024px)': {
                slidesPerView: 4,
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
        <div ref={sliderRef} className="keen-slider mx-auto h-80">
            <div className="keen-slider__slide content-center flex items-stretch justify-center">
                <div className="responsive my-auto">

                    <Image
                        src={"/images/consejo/directivos/carlos-burgos.jpg"}
                        alt="Logo SUNAT"
                        layout="fill"
                        quality="100"
                        
                        objectFit="cover"
                    />
                </div>
            </div>
            <div className="keen-slider__slide content-center flex items-stretch justify-center">
                <div className="responsive my-auto">

                    <Image
                        src={"/images/consejo/directivos/olivio-huancaruna.jpg"}
                        alt="Zegel ZEGEL"
                        layout="fill"
                        quality="100"
                        
                        objectFit="cover"
                    />
                </div>
            </div>
            <div className="keen-slider__slide content-center flex items-stretch justify-center">
                <div className="responsive my-auto">

                    <Image
                        src={"/images/consejo/directivos/elkin-vanegas.jpg"}
                        alt="Logo SIPAN"
                        layout="fill"
                        quality="100"
                        
                        objectFit="cover"
                    />
                </div>
            </div>
            <div className="keen-slider__slide content-center flex items-stretch justify-center">
                <div className="responsive my-auto">

                    <Image
                        src={"/images/consejo/directivos/astrid-reynoso.jpg"}
                        alt="Logo UCV"
                        layout="fill"
                        quality="100"
                        
                        objectFit="cover"
                    />
                </div>
            </div>
            <div className="keen-slider__slide content-center flex items-stretch justify-center">
                <div className="responsive my-auto">

                    <Image
                        src={"/images/consejo/directivos/franco-chiappe.jpg"}
                        alt="Logo RENIEC"
                        layout="fill"
                        quality="100"
                        
                        objectFit="cover"
                    />
                </div>
            </div>
            <div className="keen-slider__slide content-center flex items-stretch justify-center">
                <div className="responsive my-auto">

                    <Image
                        src={"/images/consejo/directivos/mitchel-gamboa.jpg"}
                        alt="Logo Induamerica"
                        layout="fill"
                        quality="100"
                        
                        objectFit="cover"
                    />
                </div>
            </div>
            <div className="keen-slider__slide content-center flex items-stretch justify-center">
                <div className="responsive my-auto">

                    <Image
                        src={"/images/consejo/directivos/vanesa-ramos.jpg"}
                        alt="Logo Claro"
                        layout="fill"
                        quality="100"
                        
                        objectFit="cover"
                    />
                </div>
            </div>
            <div className="keen-slider__slide content-center flex items-stretch justify-center">
                <div className="responsive my-auto">

                    <Image
                        src={"/images/consejo/directivos/carlos-iberico.png"}
                        alt="Logo CERTUS"
                        layout="fill"
                        quality="100"
                        
                        objectFit="cover"
                    />
                </div>
            </div>
            <div className="keen-slider__slide content-center flex items-stretch justify-center">
                <div className="responsive my-auto">

                    <Image
                        src={"/images/consejo/directivos/patricia-diaz.jpg"}
                        alt="Logo Colegio de Ingenieros de Lambayeque"
                        layout="fill"
                        quality="100"
                        
                        objectFit="cover"
                    />
                </div>
            </div>
        </div>
    )
}