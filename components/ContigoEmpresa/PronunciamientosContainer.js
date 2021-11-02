import Image from 'next/image'
import moment from 'moment'
import 'moment/locale/es'
import ModalImage from '../ModalImage';
import { useState } from 'react';
moment.locale('es')

export default function PronunciamientosContainer({ pronunciamientosData }) {
    let [isOpen, setIsOpen] = useState(false)
    let [imageModal, setImageModal] = useState(<></>)

    const toogleModal = (image) => {
        if (image) setImageModal(image)
        setIsOpen(!isOpen)
    }

    return (
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {
                pronunciamientosData.map((pronunciamiento, key) =>
                    <div key={key}
                        onClick={() => toogleModal(
                            <Image
                                className="rounded-xl shadow-xl cursor-grab "
                                alt={pronunciamiento.title}
                                src={`/images/contigoempresa/pronunciamientos/${pronunciamiento.coverImage}`}
                                width="600"
                                height="600"
                                layout="responsive"
                                quality="100"
                            />)}>
                        <div className="text-right text-gray-500 mb-2">
                            <p className="text-xs">{moment(pronunciamiento.date).calendar()}</p>
                        </div>
                        <div className="relative hover:scale-105 transition duration-500 ease-in-out shadow-xl">
                            <Image
                                className="rounded-xl shadow-xl cursor-pointer "
                                alt={pronunciamiento.date}
                                src={`/images/contigoempresa/pronunciamientos/${pronunciamiento.coverImage}`}
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
