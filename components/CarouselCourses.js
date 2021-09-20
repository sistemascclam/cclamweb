import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import cursos from "../content/static/cursospromo.json";
import ModalImage from './ModalImage'

export default function CarouselCourses({ slidesLg = 3, slidesSM = 1 }) {
    let [isOpen, setIsOpen] = useState(false)
    let [imageModal, setImageModal] = useState(<></>)

    const toogleModal = (image) => {
        if (image) setImageModal(image)
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
                        onClick={() => toogleModal(
                            <Image
                            className="rounded-3xl shadow-close"
                            src={`/images/servicios/desarrolloempresarial/cursos/${c.curso}`}
                            width="600"
                            height="600"
                            />)}>
                        <Image
                            className="rounded-3xl shadow-close cursor-pointer"
                            src={`/images/servicios/desarrolloempresarial/cursos/${c.curso}`}
                            width="400"
                            height="400"
                        />
                    </div>
                </div>
            ))}
            <ModalImage isOpen={isOpen} imageModal={imageModal} toogleModal={toogleModal} />
        </div>
    );
}
