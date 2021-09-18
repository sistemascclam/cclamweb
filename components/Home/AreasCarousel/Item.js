import Typing from '../../Typing'

export default function Item({bg,phrases,description}) {
    return (
        <>
            <div className={`absolute inset-0 ${bg} bg-cover bg-right opacity-25 lg:opacity-100 md:opacity-100 sm:opacity-100 h-full w-full`}></div>
            <div className="absolute lg:pt-44 md:pt-44 sm:pt-44 pt-40 mb-3 ">
                <div className="text-left p-6 mx-6 mt-auto ">
                    <h1 className="text-3xl lg:text-6xl md:text-6xl sm:text-6xl tracking-tight font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-themeBlue to-blue-500">
                        <span className="block">SOMOS</span>
                        <Typing phrases={phrases} />
                    </h1>
                    <p className="mt-3 max-w-xl text-base lg:text-xl md:text-xl sm:text-xl ">
                        {description}
                    </p>
                </div>
            </div>
        </>
    )
}
