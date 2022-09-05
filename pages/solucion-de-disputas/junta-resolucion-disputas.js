import Head from 'next/head'
import Layout from '../../components/layout'
import Image from "next/image";

const floatingButtonConfig={ mesaVirtual: "Mesa de partes", linkMesaVirtual:"mailto:arbitraje@cclam.org.pe", numWsp:"51984701376" }

export default function JuntaResolucionDisputas() {
    return (
        <Layout floatingButtonInfo={floatingButtonConfig}>
            <Head>
                <title>CCLAM | Junta de resolución de disputas</title>
            </Head>
            <div className="pt-40 flex flex-wrap justify-center">
                <div className="relative ">
                    <Image
                        src={`${process.env.STORAGE_URL_FT}/images/inconstruction.png`}
                        width="300"
                        height="300"
                    />
                </div>
                <div className="my-auto m-10 order-first">
                    <p className="text-xl font-bold">Oops! Página en construcción</p>
                    <p>Regresa pronto para ver las nuevas actualizaciones.</p>
                    
                </div>
            </div>
        </Layout>
    )
}
