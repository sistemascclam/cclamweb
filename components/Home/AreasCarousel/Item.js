import Typing from '../../Typing'
import Link from 'next/link'

export default function Item({ bg, fijo, phrases, description, servicelink, external, textWhite }) {
    return (
        <>
            <div className={`absolute inset-0 ${bg} bg-cover bg-right opacity-25 lg:opacity-100 md:opacity-100 sm:opacity-100 h-full w-full`}></div>
            <div className="absolute lg:pt-44 md:pt-44 sm:pt-44 pt-40 mb-3 ">
                <div className="text-left p-6 mx-6 mt-auto ">
                    <p className={`font-medium text-lg ${textWhite ? 'text-white' : 'text-themeBlue' }`}>Lo mejor de nosotros</p>
                    <h1 className={`font-bold text-2xl mb-5 ${textWhite ? 'text-white' : '' }`}>Nuestros servicios</h1>
                    <h2 className={`text-4xl lg:text-6xl md:text-6xl sm:text-6xl tracking-tight font-extrabold ${textWhite ? 'text-white' : 'bg-clip-text text-transparent bg-gradient-to-r from-themeBlue to-blue-500' } `}>
                        <span className="block">{fijo}</span>
                        <Typing phrases={phrases} />
                    </h2>
                    <p className={`mt-4 max-w-xl text-base lg:text-lg md:text-lg sm:text-lg ${textWhite ? 'text-white' : 'text-themeBlue' }`}>
                        {description}
                    </p>
                    {
                        servicelink ?
                            <Link href={servicelink}>
                                <a className="mt-6 bg-gradient-to-r from-themeBlue to-themeLightBlue text-white font-light rounded-full px-4 py-1 flex w-max">
                                    Saber más
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 my-auto ml-3 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </a>
                            </Link>
                            :
                            <a href={external} target="_blank" className="mt-6 bg-gradient-to-r from-themeBlue to-themeLightBlue text-white font-light rounded-full px-4 py-1 flex w-max">
                                Saber más
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 my-auto ml-3 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </a>
                    }
                </div>
            </div>
        </>
    )
}
