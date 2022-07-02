import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { toNombrePropio } from "@util/Helper"

var directivosList = [
    {
        img: `${process.env.STORAGE_URL_FT}/images/consejo/directivos/olivio_huancaruna.png`,
        name: "OLIVIO HUANCARUNA PERALES",
        cargo: "PRESIDENTE",
        validation: 7,
        add: 0
    },
    {
        img: `${process.env.STORAGE_URL_FT}/images/consejo/directivos/franco_chiappe.png`,
        name: "FRANCO CHIAPPE POLAR",
        cargo: "1ER VICEPRESIDENTE",
        validation: 8,
        add: 0
    },
    {
        img: `${process.env.STORAGE_URL_FT}/images/consejo/directivos/carolina_medrano.png`,
        name: "CAROLINA MEDRANO VARGAS",
        cargo: "2DO VICEPRESIDENTE",
        validation: 2,
        add: 2
    },
    {
        img: `${process.env.STORAGE_URL_FT}/images/consejo/directivos/lindon_vela.png`,
        name: "LINDON VELA MELENDEZ",
        cargo: "DIRECTOR TESORERO",
        validation: 3,
        add: 2
    },
    {
        img: `${process.env.STORAGE_URL_FT}/images/consejo/directivos/maria_isabel_espinal.png`,
        name: "MARIA ISABEL ESPINAL TAPIA",
        cargo: "DIRECTOR PRO TESORERO",
        validation: 4,
        add: 2
    },
    {
        img: `${process.env.STORAGE_URL_FT}/images/consejo/directivos/mitchell_gamboa.png`,
        name: "MITCHELL GAMBOA DELGADO",
        cargo: "VOCAL",
        validation: 5,
        add: 2
    },
    {
        img: `${process.env.STORAGE_URL_FT}/images/consejo/directivos/victor_orosco.png`,
        name: "VICTOR OROSCO NUNTO",
        cargo: "VOCAL",
        validation: 6,
        add: 2
    },
    {
        img: `${process.env.STORAGE_URL_FT}/images/consejo/directivos/elkin_vanegas.png`,
        name: "ELKIN VANEGAS MURILLO",
        cargo: "VOCAL",
        validation: 7,
        add: 2
    },
    {
        img: `${process.env.STORAGE_URL_FT}/images/consejo/directivos/jose_lecaros.png`,
        name: "JOSE LECAROS DE MARZI",
        cargo: "VOCAL",
        validation: 8,
        add: 2
    }
]

export default function ConsejoCarousel({ className, slidesLg = 4, slidesSM = 2, animation = '', textLight = true }) {
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
            {
                directivosList?.map((d, dkey) =>
                    <div key={dkey} className="keen-slider__slide content-center flex items-stretch justify-center h-full w-full">
                        <div className={`relative my-auto h-full w-full ${currentSlide + (d.add) === d.validation ? '' : animation}`}>
                            <div className="relative flex justify-center">
                            <Image
                                className={className}
                                src={d.img}
                                alt={d.name}
                                quality="100"
                                width="250"
                                height="250"
                            />
                            </div>
                            <div className="rounded-lg px-3 py-1 text-center mt-2">
                                <p className={`${textLight ? 'text-white text-xl' : 'text-gray-600 text-lg'} font-bold`}>{toNombrePropio(d.name)}</p>
                                <p className="text-light text-gray-400 text-sm font-normal">{d.cargo}</p>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    )
}