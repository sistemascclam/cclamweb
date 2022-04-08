import React, { useState } from 'react'

const Slide1 = () => <div className="h-56 lg:h-96 grid grid-cols-3 gap-2 w-full relative    ">
    <a href="https://cclam.org.pe/pdfs/COMUNICADO_N001_DEL_COMITE_ELECTORAL_DE_LA_CCLAM" target="_blank" rel="noreferrer" className="flex justify-center rounded-xl shadow-md content-end bg-comunicado-header bg-cover lg:bg-top bg-no-repeat bg-center"></a>
    <a href="https://cclam.org.pe/pdfs/ELECCIONES_ESTATUTOS.pdf" target="_blank" rel="noreferrer" className="flex justify-center rounded-xl shadow-md content-end bg-comunicado-estatutos bg-cover lg:bg-top bg-no-repeat bg-center"></a>
    <a href="https://cclam.org.pe/pdfs/REGLAMENTO_DE_ELECCIONES_CCLAM_23_NOV_2022.pdf" target="_blank" rel="noreferrer" className="flex justify-center rounded-xl shadow-md content-end bg-comunicado-reglamento bg-cover lg:bg-top bg-no-repeat bg-center"></a>
</div>

const Slide2 = () => <div className="h-56 lg:h-96 grid grid-cols-3 gap-2 w-full relative    ">
    <a href="https://cclam.org.pe/pdfs/convocatoria_2_abril.jpeg" target="_blank" rel="noreferrer" className="flex justify-center rounded-xl shadow-md content-end bg-convocatoria-2abril bg-cover lg:bg-top bg-no-repeat bg-center"></a>
    <a href="https://cclam.org.pe/pdfs/COMUNICADO_2_COMITE_ELECTORAL" target="_blank" rel="noreferrer" className="flex justify-center rounded-xl shadow-md content-end bg-comunicado-dos-header bg-cover lg:bg-top bg-no-repeat bg-center"></a>
    <a href="https://cclam.org.pe/pdfs/LISTA_COMUNICADO_2" target="_blank" rel="noreferrer" className="flex justify-center rounded-xl shadow-md content-end bg-comunicado-dos-header-dos bg-cover lg:bg-top bg-no-repeat bg-center"></a>
</div>

const Slide3 = () =>
    <div className="h-56 lg:h-96 grid grid-cols-3 gap-2 w-full relative ">
        <a href="https://cclam.org.pe/pdfs/comunicado_3" target="_blank" rel="noreferrer" className="flex justify-center rounded-xl shadow-md content-end bg-comunicado-tres-header bg-cover lg:bg-top bg-no-repeat bg-center"></a>
        <a href="https://cclam.org.pe/pdfs/comunicado_3_parte_2" target="_blank" rel="noreferrer" className="flex justify-center rounded-xl shadow-md content-end bg-comunicado-tres-header-dos bg-cover lg:bg-top bg-no-repeat bg-center"></a>
        <a href="https://cclam.org.pe/pdfs/comunicado_04.png" target="_blank" rel="noreferrer" className="flex justify-center rounded-xl shadow-md content-end bg-comunicado-cuatro-header bg-cover lg:bg-top bg-no-repeat bg-center"></a>
    </div>

const Slide4 = () =>
    <div className="h-56 lg:h-96 grid grid-cols-3 gap-2 w-full relative ">
        <a href="https://cclam.org.pe/pdfs/lista_comunicado_04_comite_electoral.png" target="_blank" rel="noreferrer" className="flex justify-center rounded-xl shadow-md content-end bg-comunicado-cuatro-header-dos bg-cover lg:bg-top bg-no-repeat bg-center"></a>
    </div>

const Slidesm1 = () => <div className="h-56 lg:h-96 grid grid-cols-2 gap-2 w-full relative    ">
    <a href="https://cclam.org.pe/pdfs/COMUNICADO_N001_DEL_COMITE_ELECTORAL_DE_LA_CCLAM" target="_blank" rel="noreferrer" className="flex justify-center rounded-xl shadow-md content-end bg-comunicado-header bg-cover lg:bg-top bg-no-repeat bg-center"></a>
    <a href="https://cclam.org.pe/pdfs/ELECCIONES_ESTATUTOS.pdf" target="_blank" rel="noreferrer" className="flex justify-center rounded-xl shadow-md content-end bg-comunicado-estatutos bg-cover lg:bg-top bg-no-repeat bg-center"></a>
</div>

const Slidesm2 = () => <div className="h-56 lg:h-96 grid grid-cols-2 gap-2 w-full relative    ">
    <a href="https://cclam.org.pe/pdfs/REGLAMENTO_DE_ELECCIONES_CCLAM_23_NOV_2022.pdf" target="_blank" rel="noreferrer" className="flex justify-center rounded-xl shadow-md content-end bg-comunicado-reglamento bg-cover lg:bg-top bg-no-repeat bg-center"></a>
    <a href="https://cclam.org.pe/pdfs/convocatoria_2_abril.jpeg" target="_blank" rel="noreferrer" className="flex justify-center rounded-xl shadow-md content-end bg-convocatoria-2abril bg-cover lg:bg-top bg-no-repeat bg-center"></a>
</div>

const Slidesm3 = () =>
    <div className="h-56 lg:h-96 grid grid-cols-2 gap-2 w-full relative ">
        <a href="https://cclam.org.pe/pdfs/COMUNICADO_2_COMITE_ELECTORAL" target="_blank" rel="noreferrer" className="flex justify-center rounded-xl shadow-md content-end bg-comunicado-dos-header bg-cover lg:bg-top bg-no-repeat bg-center"></a>
        <a href="https://cclam.org.pe/pdfs/LISTA_COMUNICADO_2" target="_blank" rel="noreferrer" className="flex justify-center rounded-xl shadow-md content-end bg-comunicado-dos-header-dos bg-cover lg:bg-top bg-no-repeat bg-center"></a>
    </div>

const Slidesm4 = () =>
    <div className="h-56 lg:h-96 grid grid-cols-2 gap-2 w-full relative ">
        <a href="https://cclam.org.pe/pdfs/comunicado_3" target="_blank" rel="noreferrer" className="flex justify-center rounded-xl shadow-md content-end bg-comunicado-tres-header bg-cover lg:bg-top bg-no-repeat bg-center"></a>
        <a href="https://cclam.org.pe/pdfs/comunicado_3_parte_2" target="_blank" rel="noreferrer" className="flex justify-center rounded-xl shadow-md content-end bg-comunicado-tres-header-dos bg-cover lg:bg-top bg-no-repeat bg-center"></a>
    </div>

const Slidesm5 = () =>
    <div className="h-56 lg:h-96 grid grid-cols-2 gap-2 w-full relative ">
        <a href="https://cclam.org.pe/pdfs/comunicado_04.png" target="_blank" rel="noreferrer" className="flex justify-center rounded-xl shadow-md content-end bg-comunicado-cuatro-header bg-cover lg:bg-top bg-no-repeat bg-center"></a>
        <a href="https://cclam.org.pe/pdfs/lista_comunicado_04_comite_electoral.png" target="_blank" rel="noreferrer" className="flex justify-center rounded-xl shadow-md content-end bg-comunicado-cuatro-header-dos bg-cover lg:bg-top bg-no-repeat bg-center"></a>
        <a href="https://cclam.org.pe/pdfs/lista_comunicado_04_comite_electoral.png" target="_blank" rel="noreferrer" className="flex justify-center rounded-xl shadow-md content-end bg-comunicado-cuatro-header-dos bg-cover lg:bg-top bg-no-repeat bg-center"></a>
    </div>

const Slidesm6 = () =>
    <div className="h-56 lg:h-96 grid grid-cols-2 gap-2 w-full relative ">
        <a href="https://cclam.org.pe/pdfs/lista_comunicado_04_comite_electoral.png" target="_blank" rel="noreferrer" className="flex justify-center rounded-xl shadow-md content-end bg-comunicado-cuatro-header-dos bg-cover lg:bg-top bg-no-repeat bg-center"></a>
    </div>

const slides = [<Slide1 />, <Slide2 />, <Slide3 />, <Slide4 />]
const slidessm = [<Slidesm1 />, <Slidesm2 />, <Slidesm3 />, <Slidesm4 />, <Slidesm5 />,<Slidesm6 />]

export default function CarouselComunicados() {
    const [current, setcurrent] = useState(0)
    return (
        <div className="relative">
            <button disabled={current == 0} onClick={() => setcurrent(current - 1)} className="text-gray-600 hover:text-gray-800 disabled:opacity-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 absolute inset-y-0 my-auto ml-3 z-50" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
            </button>
            <div className="hidden lg:block">
                {slides[current]}
            </div>
            <div className="block lg:hidden">
                {slidessm[current]}
            </div>
            <button disabled={current == (slides.length - 1)} onClick={() => setcurrent(current + 1)} className="hidden lg:block text-gray-600 hover:text-gray-800 disabled:opacity-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 absolute right-0 inset-y-0 my-auto mr-3 z-50" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
            </button>
            <button disabled={current == (slidessm.length - 1)} onClick={() => setcurrent(current + 1)} className="block lg:hidden text-gray-600 hover:text-gray-800 disabled:opacity-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 absolute right-0 inset-y-0 my-auto mr-3 z-50" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
            </button>
        </div>
    )
}