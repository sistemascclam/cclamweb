
export default function CardStyled({ title, left, right, col }) {
    return (
        <div className="flex flex-col justify-center">
            <div className="relative mx-8 mb-3"><h3 className="text-white font-black text-lg">{title}</h3></div>
            <div className="relative px-8 py-6 rounded-3xl">
                <div className="w-full mx-auto">
                    <div className={`flex ${col ? 'flex-col' : 'lg:flex-row flex-col'} divide-gray-200`}>
                        <div className={`relative ${col ? 'mb-4' : 'w-56 h-72'}  flex-none mx-auto`}>
                            {right}
                        </div>
                        <div className="relative lg:px-8 text-justify text-gray-800">
                            {left}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
