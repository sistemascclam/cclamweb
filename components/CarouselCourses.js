import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import ContenidoExtra from './ContenidoExtra'

export default function CarouselCourses({ slidesLg = 3, slidesSM = 1, cursos }) {
    let [isOpen, setIsOpen] = useState(false)
    const [selected, setselected] = useState(0)

    const toogleModal = (i) => {
        setselected(i)
        setIsOpen(!isOpen)
    }
    const [pause, setPause] = useState(false);
    const timer = useRef();
    const [sliderRef, slider] = useKeenSlider({
        loop: true,
        rtl: true,
        spacing: 25,
        breakpoints: {
            "(max-width: 639px) ": {
                slidesPerView: slidesSM,
            },
            "(min-width: 640px)": {
                slidesPerView: slidesLg,
            },
        },
        duration: 1000,
        dragStart: () => {
            setPause(false);
        },
        dragEnd: () => {
            setPause(false);
        },
    });

    useEffect(() => {
        sliderRef.current.addEventListener("mouseover", () => {
            setPause(true);
        });
        sliderRef.current.addEventListener("mouseout", () => {
            setPause(false);
        });
    }, [sliderRef]);

    useEffect(() => {
        timer.current = setInterval(() => {
            if (!pause && slider) {
                slider.prev();
            }
        }, 3000);
        return () => {
            clearInterval(timer.current);
        };
    }, [pause, slider]);

    return (
        <div ref={sliderRef} className="keen-slider mx-auto h-full w-full">
            {cursos?.map((c, i) => (
                <div key={i} className="keen-slider__slide content-center flex items-stretch justify-center h-full w-full">
                    <div className={`relative my-auto h-full w-full`} 
                        onClick={()=>toogleModal(i)}>
                        <Image
                            alt={c.descripcion}
                            className="rounded-3xl shadow-close cursor-pointer"
                            src={`${process.env.STORAGE_URL_BK}${c.coverImage}`}
                            width="400"
                            height="400"
                        />
                    </div>
                </div>
            ))}
            <ContenidoExtra isOpen={isOpen} lista={cursos.slice(selected,cursos.length).concat(cursos.slice(0,selected))} toogleModal={toogleModal} />
        </div>
    );
}
