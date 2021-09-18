import Item from './Item';
import Image from 'next/image'
import CarouselFade from '../../CarouselFade'

export default function Carrousel() {
    return (
        <>
        <CarouselFade
            slides={[
                <Item
                    description="Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua."
                    phrases={["ÁREA DE MESA DE PARTES", "MESA DE PARTES"]}
                    bg="bg-mesa-de-partes"
                />,
                <Item
                    description="Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua."
                    phrases={["ÁREA DE PROTESTOS", "PROTESTOS"]}
                    bg="bg-protestos"
                />,
                <Item
                    description="Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua."
                    phrases={["ÁREA DE FORMALIZACION", "FORMALIZACION"]}
                    bg="bg-formalizacion"
                />,
                <Item
                    description="Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua."
                    phrases={["ÁREA DE COMERCIO EXTERIOR", "COMERCIO EXTERIOR"]}
                    bg="bg-comercio-exterior"
                />
            ]}
        />
        </>
    )
}

/*
            slides={[
                <Item
                    description="Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua."
                    phrases={["ÁREA DE MESA DE PARTES", "MESA DE PARTES"]}
                    ImgCarrousel={() => <Image
                        src={"/images/areas/mesa-de-partes.png"}
                        alt="MESA DE PARTES"
                        layout="fill"
                        objectFit="cover"
                        quality="100"
                    />}
                />,
                <Item
                    description="Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua."
                    phrases={["ÁREA DE PROTESTOS", "PROTESTOS"]}
                    ImgCarrousel={() => <Image
                        src={"/images/areas/protestos.png"}
                        alt="Protestos"
                        layout="fill"
                        objectFit="cover"
                        quality="100"
                    />}
                />,
                <Item
                    description="Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua."
                    phrases={["ÁREA DE FORMALIZACION", "FORMALIZACION"]}
                    ImgCarrousel={() => <Image
                        src={"/images/areas/formalizacion.png"}
                        alt="Formalizacion"
                        layout="fill"
                        objectFit="cover"
                        quality="100"
                    />}
                />,
                <Item
                    description="Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua."
                    phrases={["ÁREA DE COMERCIO EXTERIOR", "COMERCIO EXTERIOR"]}
                    ImgCarrousel={() => <Image
                        src={"/images/areas/comercio-exterior.png"}
                        alt="COMERCIO EXTERIOR"
                        layout="fill"
                        objectFit="cover"
                        quality="100"
                    />}
                />
            ]}
*/