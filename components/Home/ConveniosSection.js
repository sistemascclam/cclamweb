import { useRef, useState } from 'react';
import { useCountUp } from 'react-countup';
import ConveniosCarousel from './ConveniosCarousel/index'


export default function ConveniosSection() {
    const [count, setcount] = useState(true);

    /*CONVENIOS*/
    const conveniosRef = useRef(null);
    const { start: conveniosStart } = useCountUp({
        ref: conveniosRef,
        end: 40,
        duration: 1.5,
    });
    /*CONVENIOS*/

    /*AÑOS DE SERVICIO*/
    const serviceYears = useRef(null);
    const { start: serviceYearsStart } = useCountUp({
        ref: serviceYears,
        end: 120,
        duration: 1.5,
    });
    /*AÑOS DE SERVICIO*/

    /*EMPRESAS*/
    const empresasRef = useRef(null);
    const { start: empresasStart } = useCountUp({
        ref: empresasRef,
        end: 600,
        duration: 1.5,
    });
    /*EMPRESAS*/

    const startCounting = () => {
        if (count) {
            conveniosStart();
            serviceYearsStart();
            empresasStart();
            setcount(false);
        }
    }

    return (
        <section id="convenios" className="h-screen"  onMouseEnter={startCounting}>
            <div className="text-center mt-24">
                <h2 className="text-6xl font-extrabold text-themeBlue">Convenios</h2>
                <h3 className="text-2xl font-light text-themeBlue mt-2">Nuestros <strong>asociados</strong> nos respaldan</h3>
                <div className="text-white bg-gradient-to-r from-themeBlue to-themeLightBlue flex flex-wrap justify-between content-center  w-10/12 mx-auto rounded-lg shadow-3xl py-5 px-6 lg:px-32 mt-12">
                    <div className="mx-auto my-2">
                        <p className="font-extrabold text-4xl mb-1"><span ref={conveniosRef} />+</p>

                        <small className="text-xs">CONVENIOS</small>
                    </div>
                    <div className="mx-auto my-2">
                        <p className="font-extrabold text-4xl mb-1"><span ref={serviceYears} />+</p>
                        <small className="text-xs">AÑOS DE SERVICIO</small>
                    </div>
                    <div className="mx-auto my-2">
                        <p className="font-extrabold text-4xl mb-1"><span ref={empresasRef} />+</p>
                        <small className="text-xs">EMPRESAS</small>
                    </div>
                </div>
                <ConveniosCarousel />
                <button className="flex bg-themeLightBlue text-white font-semibold rounded-full shadow-lg py-2 px-5 mx-auto mt-16">Saber más
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 my-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>
        </section>
    )
}
