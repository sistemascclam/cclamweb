import Head from 'next/head'
import moment from 'moment'
import 'moment/locale/es'
import Layout from '../components/layout';
import Image from 'next/image';
moment.locale('es')
var comunicados = [
    {
        image: "/images/comunicado_urgente/CONVOCATORIA_ASAMBLEA2803.png",
        url:"https://m.facebook.com/story.php?story_fbid=5070764136300358&id=269465366430283"
    },
    {
        image: "/images/comunicado_urgente/ee2018.png",
        url:"https://cclam.org.pe/pdfs/CCAUD2018.pdf"
    },
    {
        image: "/images/comunicado_urgente/ee2019.png",
        url:"https://cclam.org.pe/pdfs/CCAUD2019.pdf"
    },
    {
        image: "/images/comunicado_urgente/ee2020.png",
        url:"https://cclam.org.pe/pdfs/CC_AUD2020.pdf"
    },
    {
        image: "/images/comunicado_urgente/ee2021.png",
        url:"https://cclam.org.pe/pdfs/CC_AUD2021.pdf"
    },
    {
        image: "/images/comunicado_urgente/comunicado.jpeg",
        url:"https://cclam.org.pe/pdfs/COMUNICADO_N001_DEL_COMITE_ELECTORAL_DE_LA_CCLAM"
    },
    {
        image: "/images/comunicado_urgente/estatutos.jpeg",
        url:"https://cclam.org.pe/pdfs/ELECCIONES_ESTATUTOS.pdf"
    },
    {
        image: "/images/comunicado_urgente/reglamento.jpeg",
        url:"https://cclam.org.pe/pdfs/REGLAMENTO_DE_ELECCIONES_CCLAM_23_NOV_2022.pdf"
    },
    {
        image: "/images/comunicado_urgente/convocatoria_2_abril.jpeg",
        url:"https://cclam.org.pe/pdfs/convocatoria_2_abril.jpeg"
    },
    {
        image: "/images/comunicado_urgente/comunicado_2_header.jpeg",
        url:"https://cclam.org.pe/pdfs/COMUNICADO_2_COMITE_ELECTORAL"
    },
    {
        image: "/images/comunicado_urgente/lista_comunicado_2.jpeg",
        url:"https://cclam.org.pe/pdfs/LISTA_COMUNICADO_2"
    },
    {
        image: "/images/comunicado_urgente/comunicado_3.jpeg",
        url:"https://cclam.org.pe/pdfs/comunicado_3"
    },
    {
        image: "/images/comunicado_urgente/comunicado_3_parte_2.jpeg",
        url:"https://cclam.org.pe/pdfs/comunicado_3_parte_2"
    },
    {
        image: "/images/comunicado_urgente/comunicado_04.png",
        url:"https://cclam.org.pe/pdfs/comunicado_04.png"
    },
    {
        image: "/images/comunicado_urgente/lista_comunicado_04_comite_electoral.png",
        url:"https://cclam.org.pe/pdfs/lista_comunicado_04_comite_electoral.png"
    },
]

export default function Transparencia() {
    return (
        <Layout>
            <Head>
                <title>CCLAM | Transparencia</title>
            </Head>
            <div className="min-h-screen bg-themeWhite">
                <div className="pt-32 lg:pt-20 text-center">
                    <h1 className="text-sm lg:text-xl md:text-xl font-black text-themeLightBlue ">Portal de <span className="block text-black text-2xl lg:text-5xl md:text-5xl">Transparencia</span></h1>
                </div>
                <div className="w-full py-6 lg:py-14 text-center flex flex-wrap gap-6 justify-center">
                    {
                        comunicados.map((c,ci)=>
                        <a key={ci} href={c.url} target="_blank" rel="noreferrer" className="shadow-md w-80 h-96 relative rounded-xl">
                            <Image
                            className="rounded-xl"
                            src={c.image}
                            layout="fill"
                            objectFit="cover"
                            />
                        </a>
                        )
                    }
                </div>
            </div>
        </Layout>
    )
}