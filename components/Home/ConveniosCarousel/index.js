import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import { useEffect, useRef, useState } from "react"
import Image from 'next/image'
import convenios from "../../../public/dynamic/convenios.json"

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
            {
                convenios.map((c, i) =>
                    <div key={i} className="keen-slider__slide content-center flex items-stretch justify-center">
                        <div
                            className="my-auto h-20 w-full"
                        >
                            <Image
                                alt={`${c.empresa}`}
                                src={`${c.imageSrc}`}
                                width={100}
                                height={40}
                                layout="responsive"
                                objectFit="scale-down"
                            />
                        </div>
                    </div>
                )
            }
        </div>
    )
}