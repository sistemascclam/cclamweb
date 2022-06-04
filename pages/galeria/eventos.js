import Head from 'next/head'
import Layout from '../../components/layout'
import EventosContainer from '../../components/EventosContainer'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {list} from "../../redux/actions/actividad"
import moment from 'moment'
import 'moment/locale/es'
moment.locale('es')

export default function Eventos() {
    const dispatch = useDispatch();
    const {actividadList}=useSelector(({actividad})=>actividad)
    useEffect(() => {
      dispatch(list())
    }, [])
    return (
        <Layout>
            <Head>
                <title>CCLAM | Eventos</title>
            </Head>
            <div className="min-h-screen bg-themeWhite">
                <div className="pt-32 lg:pt-20 text-center">
                    <h1 className="text-sm lg:text-xl md:text-xl font-black text-themeLightBlue ">GALERÍA<span className="block text-black text-2xl lg:text-5xl md:text-5xl">Eventos</span></h1>
                </div>
                <div className="w-full py-6 lg:py-14 text-center">
                    <p className="text-base text-themeLightBlue mb-1 leading-tight">Entérate de lo que viene</p>
                    <p className="font-bold text-3xl leading-tight">Próximos eventos</p>
                    <EventosContainer type="proximos" eventosData={actividadList?.filter(e =>e.fechaFin>=moment(Date.now()).format('YYYY-MM-DD')).sort(function(a,b){ return new Date(a.fechaInicio) - new Date(b.fechaInicio); })} />
                    <p className="font-bold text-3xl leading-tight mt-20">Eventos pasados</p>
                    <EventosContainer type="pasados" eventosData={actividadList?.filter(e =>e.fechaFin<moment(Date.now()).format('YYYY-MM-DD')).sort(function(a,b){ return new Date(b.fechaInicio) - new Date(a.fechaInicio); })} />
                </div>
            </div>
        </Layout>
    )
}