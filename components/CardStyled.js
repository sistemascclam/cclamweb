
export default function CardStyled({title,left,right,col}) {
    return (
        <div class="py-6 flex flex-col justify-center my-10">
            <div class={`relative ${col?'py-4':'pt-12'}`}>
                <div class="absolute inset-1 bg-gray-200 shadow-lg transform -skew-y-6 lg:skew-y-0 md:skew-y-0 md:-rotate-1 lg:-rotate-1 rounded-3xl"></div>
                <div class="absolute inset-1 bg-themeLightBlue  shadow-lg transform -skew-y-6 lg:skew-y-0 md:skew-y-0 md:-rotate-2 lg:-rotate-2 rounded-3xl"></div>
                <div className="relative mx-8 mb-3"><h3 className="text-white font-black text-lg">{title}</h3></div>
                <div className="relative px-8 py-16 bg-white shadow-3xl rounded-3xl">
                    <div className="w-full mx-auto">
                        <div className={`flex ${col?'flex-col':'lg:flex-row flex-col'} divide-gray-200`}>
                            <div className={`relative ${col?'mb-4':'w-56 h-72'}  flex-none mx-auto`}>
                                {right}
                            </div>
                            <div className="relative lg:px-8 text-justify text-gray-800">
                                {left}
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
