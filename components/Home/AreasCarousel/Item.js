import Typing from '../../Typing'

export default function Item({ImgCarrousel,phrases,description}) {
    return (
        <>
            <ImgCarrousel />
            <div className="absolute lg:pt-44 md:pt-44 sm:pt-44 pt-40 mb-3">
                <div className="text-left p-6 mx-6 mt-auto">
                    <h1 className="text-3xl lg:text-7xl md:text-7xl sm:text-6xl tracking-tight font-extrabold">
                        <span className="block">SOMOS</span>
                        <Typing phrases={phrases} />
                    </h1>
                    <p className="mt-3 max-w-xl text-base lg:text-xl md:text-xl sm:text-xl">
                        {description}
                    </p>
                </div>
            </div>
        </>
    )
}
