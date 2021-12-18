import Image from 'next/image'
import moment from 'moment'
import 'moment/locale/es'
import ModalImage from '../ModalImage';
import {list} from "../../redux/actions/revistadigital"
import { useDispatch,useSelector } from 'react-redux'
import { useEffect, useState } from 'react';
moment.locale('es')

export default function RevistasDigitalesContainer() {
    const dispatch = useDispatch();
    const {revistaDigitalList}=useSelector(({revistadigital})=>revistadigital)
    
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
                revistaDigitalList?.map((revistaDigital, key) =>
                    <a key={key} href={revistaDigital.revista ? (`${process.env.STORAGE_URL_BK}${revistaDigital.revista}`) : revistaDigital.url} target="_blank" >
                        <div className="text-center text-gray-500 mb-2">
                            <p className="text-sm">{moment(revistaDigital.date).format('LL')}</p>
                        </div>
                        <div className="relative hover:scale-105 transition duration-500 ease-in-out shadow-xl">
                            <Image
                                className="rounded-xl shadow-xl cursor-pointer "
                                alt={revistaDigital.date}
                                src={`${process.env.STORAGE_URL_BK}${revistaDigital.coverImage}`}
                                width="600"
                                height="600"
                                layout="responsive"
                                quality="100"
                            />
                        </div>
                    </a>
                )
            }
            <ModalImage isOpen={isOpen} imageModal={imageModal} toogleModal={toogleModal} />
        </div>
    )
}
