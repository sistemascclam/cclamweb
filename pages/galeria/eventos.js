import Head from 'next/head'
import Layout from '../../components/layout'
import EventosContainer from '../../components/EventosContainer'
import eventosData from "../../public/dynamic/eventos.json"

export default function Eventos() {
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
                    <EventosContainer eventosData={eventosData.filter(e => e.nuevo)} />
                    <p className="font-bold text-3xl leading-tight mt-20">Eventos pasados</p>
                    <EventosContainer eventosData={eventosData.filter(e => !e.nuevo)} />
                </div>
            </div>
        </Layout>
    )
}