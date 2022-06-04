import Image from 'next/image'
import moment from 'moment'
import 'moment/locale/es'
import ModalImage from './ModalImage';
import { useState } from 'react';
moment.locale('es')

export default function EventosContainer({ eventosData, type }) {
    let [isOpen, setIsOpen] = useState(false)
    let [imageModal, setImageModal] = useState(<></>)

    const toogleModal = (image) => {
        if (image) setImageModal(image)
        setIsOpen(!isOpen)
    }

    return (
        <div className="flex flex-wrap justify-center">
            {
                eventosData?.map((evento, key) =>
                type==="proximos" && evento.link ?
                        <a key={key} href={evento.link} target="_blank">
                            <div className="mx-2 my-4 w-80 relative hover:scale-105 transition duration-500 ease-in-out shadow-xl">
                                <Image
                                    className="rounded-xl shadow-xl cursor-pointer "
                                    alt={evento.title}
                                    src={`${process.env.STORAGE_URL_BK}${evento.coverImage}`}
                                    width="600"
                                    layout="responsive"
                                    objectFit="cover"
                                />
                            </div>
                        </a>
                        :
                        <div key={key}
                            onClick={() => toogleModal(
                                // <iframe
                                //     target="_parent"
                                //     src={`${process.env.STORAGE_URL_FT}/images/logotipo.png`}
                                //     // src={`${process.env.STORAGE_URL_BK}${evento.coverImage}`}
                                // >
                                // </iframe>
                                <Image
                                    className="rounded-xl shadow-xl cursor-grab "
                                    alt={evento.title}
                                    src={`${process.env.STORAGE_URL_BK}${evento.coverImage}`}
                                    width="600"
                                    height="600"
                                    layout="responsive"
                                    objectFit="contain"
                                />
                                )}>
                            <div className="mx-2 my-4 w-80 relative hover:scale-105 transition duration-500 ease-in-out shadow-xl">
                                <Image
                                    className="rounded-xl shadow-xl cursor-pointer "
                                    alt={evento.title}
                                    src={`${process.env.STORAGE_URL_BK}${evento.coverImage}`}
                                    width="600"
                                    height="600"
                                    layout="responsive"
                                    objectFit="cover"
                                />
                            </div>
                        </div>
                )
            }
            <ModalImage isOpen={isOpen} imageModal={imageModal} toogleModal={toogleModal} />
        </div>
    )
}
