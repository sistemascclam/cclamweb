import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useEffect, useRef, useState } from "react";
import Link from "next/link"

export default function CarouselServicesWithPayment({ services }) {
    return (
        <>
            {
                services.length > 3 ?
                    <Carousel services={services} />
                    :
                    <>
                        <Carousel services={services} className="block lg:hidden" />
                        <div className="hidden lg:flex h-full w-full justify-center gap-6">
                            {services?.map((c, i) => (
                                <div key={i} className="content-center flex items-stretch justify-center h-full">
                                    <div className="border-2 p-8 rounded-xl ">
                                        <p className="font-semibold text-xl">{c.servicio}</p>
                                        <p className="text-sm mt-1 text-gray-500">{c.descripcion}</p>
                                        <p className="my-5"><span className="text-4xl font-extrabold"><small>S/.</small>{c.precio}</span> <span className="text-gray-600 text-sm">/pago único</span></p>
                                        <Link href={`/realizar-pedido/${c.id}`}>
                                            <a
                                                className="mt-8 w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                                            >
                                                Comprar
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </>
            }
        </>
    );
}

const Carousel = ({ slidesLg = 3, slidesSM = 1, services,className="" }) => {
    const [pause, setPause] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0)
    const timer = useRef();
    const [sliderRef, slider] = useKeenSlider({
        initial: 0,
        slideChanged(s) {
            setCurrentSlide(s.details().relativeSlide)
        },
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
        <div className={`relative ${className}`}>
            <div ref={sliderRef} className="keen-slider mx-auto h-full w-full">
                {services?.map((c, i) => (
                    <div key={i} className="keen-slider__slide content-center flex items-stretch justify-center h-full w-full">
                        <div className="border-2 p-8 rounded-xl ">
                            <p className="font-semibold text-xl">{c.servicio}</p>
                            <p className="text-sm mt-1 text-gray-500">{c.descripcion}</p>
                            <p className="my-5"><span className="text-4xl font-extrabold"><small>S/.</small>{c.precio}</span> <span className="text-gray-600 text-sm">/pago único</span></p>
                            <Link href={`/realizar-pedido/${c.id}`}>
                                <a
                                    className="mt-8 w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                                >
                                    Comprar
                                </a>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
            {slider && (
                <div className="hidden lg:block">
                    <ArrowLeft
                        onClick={(e) => e.stopPropagation() || slider.next()}
                        disabled={currentSlide === 0}
                    />
                    <ArrowRight
                        onClick={(e) => e.stopPropagation() || slider.prev()}
                        disabled={currentSlide === slider.details().size - 1}
                    />
                </div>
            )}
        </div>
    );
}


function ArrowLeft(props) {
    return (
        <svg
            onClick={props.onClick}
            className="w-6 h-6 absolute opacity-20 hover:opacity-100 top-1/2 left-0 cursor-pointer select-none"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
        >
            <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
        </svg>
    )
}

function ArrowRight(props) {
    return (
        <svg
            onClick={props.onClick}
            className="w-6 h-6 absolute opacity-20 hover:opacity-100 top-1/2 right-0 cursor-pointer select-none"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
        >
            <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
        </svg>
    )
}
