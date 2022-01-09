import Typing from '../../Typing'
import Link from 'next/link'

export default function Item({ bg, fijo, phrases, description, servicelink, external, textWhite }) {
    return (
        <div className={`${bg} bg-cover ${textWhite ? 'bg-left' : 'bg-right'}  inset-0 absolute `}>
            <div className={`bg-white absolute inset-0 ${textWhite ? 'opacity-0' : 'opacity-80'} lg:opacity-0 md:opacity-0 sm:opacity-0`}></div>
            <div className="absolute text-left p-8 my-36 opacity-100">
                <p className={`font-medium text-lg ${textWhite ? 'text-white' : 'text-themeBlue'}`}>Lo mejor de nosotros</p>
                <h1 className={`font-bold text-2xl mb-5 ${textWhite ? 'text-white' : ''}`}>Nuestros servicios</h1>
                <h2 className={`text-4xl lg:text-6xl md:text-6xl sm:text-6xl tracking-tight font-extrabold ${textWhite ? 'text-white' : 'bg-clip-text text-transparent bg-gradient-to-r from-themeBlue to-blue-500'} `}>
                    <span className="block">{fijo}</span>
                    <Typing phrases={phrases} />
                </h2>
                <p className={`mt-4 max-w-xl text-base lg:text-lg md:text-lg sm:text-lg ${textWhite ? 'text-white' : 'text-themeBlue'}`}>
                    {description}
                </p>
                {
                    servicelink ?
                        <Link href={servicelink}>
                            <a className="mt-6 bg-gradient-to-r from-themeBlue to-themeLightBlue shadow-md text-white font-normal text-sm rounded-full px-4 py-2 transition-all ease-in-out duration-500 hover:ml-2 flex w-max">
                                Saber más
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 my-auto ml-3 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                                </svg>
                            </a>
                        </Link>
                        :
                        <a href={external} target="_blank" rel="noreferrer" className="mt-6 bg-gradient-to-r from-themeBlue to-themeLightBlue shadow-md text-white font-normal text-sm rounded-full px-4 py-2 transition-all ease-in-out duration-500 hover:ml-2 flex w-max">
                            Saber más
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 my-auto ml-3 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                            </svg>
                        </a>
                }
            </div>
        </div>
    )
}
