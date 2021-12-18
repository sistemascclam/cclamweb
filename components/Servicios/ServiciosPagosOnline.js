import CarouselServicesWithPayment from '../../components/CarouselServicesWithPayment'
import { useDispatch, useSelector } from "react-redux";
import { list } from "../../redux/actions/concepto"
import { useEffect } from 'react';

export default function ServiciosPagosOnline({ idArea }) {
    const dispatch = useDispatch();
    const { conceptoList } = useSelector(({ concepto }) => concepto);

    useEffect(() => {
        dispatch(list());
    }, [dispatch]);

    return (
        <>
        {
            conceptoList?.filter(c => c.area === idArea)?.length>0 ?
            <div className="mt-10 mb-20">
                <div className="text-center">
                    <p className="text-base text-themeLightBlue mb-1">Servicios virtuales</p>
                    <p className="font-bold text-3xl mb-8">Adquiere cualquiera ahora</p>
                </div>
                <CarouselServicesWithPayment services={conceptoList.filter(c => c.area === idArea)} />
            </div>
            :
            ""
        }
        </>
    )
}
