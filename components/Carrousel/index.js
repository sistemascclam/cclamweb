import Item from './Item';
import Image from 'next/image'

export default function Carrousel() {
    return (
        <div>
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
            />
        </div>
    )
}
