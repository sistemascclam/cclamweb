import Image from 'next/image'
import moment from 'moment'
import 'moment/locale/es'
import ModalImage from '../ModalImage';
import { list } from "../../redux/actions/pronunciamiento"
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react';
moment.locale('es')

export default function PronunciamientosContainer({limit=50}) {
    const dispatch = useDispatch();
    const { pronunciamientoList } = useSelector(({ pronunciamiento }) => pronunciamiento)

    useEffect(() => {
        dispatch(list())
    }, [])

    let [isOpen, setIsOpen] = useState(false)
    let [imageModal, setImageModal] = useState(<></>)

    const toogleModal = (image) => {
        if (image) setImageModal(image)
        setIsOpen(!isOpen)
    }

    return (
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {
                pronunciamientoList?.filter((p,k)=>k<limit)?.map((pronunciamiento, key) =>
                    pronunciamiento.link ?
                        <a key={key} href={pronunciamiento.link} target="_blank">
                            <div className="text-right text-gray-500 mb-2">
                                <p className="text-xs">{moment(pronunciamiento.date).calendar()}</p>
                            </div>
                            <div className="relative hover:scale-105 transition duration-500 ease-in-out shadow-xl 	">
                                <Image
                                    className="rounded-xl shadow-xl cursor-pointer "
                                    alt={pronunciamiento.date}
                                    src={`${process.env.STORAGE_URL_BK}${pronunciamiento.coverImage}`}
                                    width="600"
                                    height="600"
                                    layout="responsive"
                                    objectFit="cover"
                                    objectPosition="top"
                                    quality="100"
                                />
                            </div>
                        </a>
                        :
                        <div key={key}
                            onClick={() => toogleModal(
                                <Image
                                    className="rounded-xl cursor-grab "
                                    alt={pronunciamiento.title}
                                    src={`${process.env.STORAGE_URL_BK}${pronunciamiento.coverImage}`}
                                    width="600"
                                    height="600"
                                    layout="responsive"
                                    objectFit="contain"
                                    quality="100"
                                />)}>
                            <div className="text-right text-gray-500 mb-2">
                                <p className="text-xs">{moment(pronunciamiento.date).calendar()}</p>
                            </div>
                            <div className="relative hover:scale-105 transition duration-500 ease-in-out shadow-xl">
                                <Image
                                    className="rounded-xl shadow-xl cursor-pointer "
                                    alt={pronunciamiento.date}
                                    src={`${process.env.STORAGE_URL_BK}${pronunciamiento.coverImage}`}
                                    width="600"
                                    height="600"
                                    layout="responsive"
                                    objectFit="cover"
                                    objectPosition="top"
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
