import Image from 'next/image'
import moment from 'moment'
import 'moment/locale/es'
import ModalImage from './ModalImage';
import { useState } from 'react';
moment.locale('es')

export default function EventosContainer({ eventosData }) {
    let [isOpen, setIsOpen] = useState(false)
    let [imageModal, setImageModal] = useState(<></>)

    const toogleModal = (image) => {
        if (image) setImageModal(image)
        setIsOpen(!isOpen)
    }

    return (
        <div className="flex flex-wrap justify-center">
            {
                eventosData.map((evento, key) =>
                    <div key={key}
                        onClick={() => toogleModal(
                            <Image
                                className="rounded-xl shadow-xl cursor-grab "
                                alt={evento.date}
                                src={`/images/eventos/${evento.evento}`}
                                width="600"
                                height="600"
                                layout="responsive"
                                quality="100"
                            />)}>
                        <div className="mx-2 my-4 w-80 relative hover:scale-105 transition duration-500 ease-in-out shadow-xl">
                            <Image
                                className="rounded-xl shadow-xl cursor-pointer "
                                alt={evento.date}
                                src={`/images/eventos/${evento.evento}`}
                                width="600"
                                height="600"
                                layout="responsive"
                                quality="100"
                            />
                        </div>
                    </div>
                )
            }
            <ModalImage isOpen={isOpen} imageModal={imageModal} toogleModal={toogleModal} />
        </div>
    )
}
