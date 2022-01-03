import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import Layout, { siteTitle } from '../components/layout'
import CardContact from '../components/RecursosHumanos/CardContact'
import { Transition } from '@headlessui/react'

const cards = [
    {
        element: <CardContact
            correo="gerenciageneral@cclam.org.pe"
            telf="944679867"
            wsp="944679867"
            image={<Image
                src={`${process.env.STORAGE_URL_FT}/images/recursos-humanos/gerente.png`}
                layout="fill"
                objectFit="cover"
                quality="100"
                className="rounded-4xl"
                alt="Miguel Camacho"
            />} />,
        keywords: ["gerente", "gerencia", "miguel camacho"]
    },
    {
        keywords: ["asistente", "Secretaria", "gerencia", "chelsy", "quispe"],
        element: <CardContact
            correo="secretariagerencia@cclam.org.pe"
            telf="944680147"
            wsp="944680147"
            image={<Image
                src={`${process.env.STORAGE_URL_FT}/images/recursos-humanos/asistente-gerencia.png`}
                layout="fill"
                objectFit="cover"
                quality="100"
                className="rounded-4xl"
                alt="Chelsy"
            />} />,
    },
    {
        keywords: ["alex", "didi", "servicio", "asociado"],
        element: <CardContact
            correo="alexgomez@cclam.org.pe"
            telf="942418670"
            wsp="942418670"
            image={<Image
                src={`${process.env.STORAGE_URL_FT}/images/recursos-humanos/servicio-asociado.png`}
                layout="fill"
                objectFit="cover"
                quality="100"
                className="rounded-4xl"
                alt="Alex Didi"
            />} />
    },
    {
        keywords: ["solución", "disputas", "maria", "alejandra", "pasco", "arbitraje"],
        element: <CardContact
            correo="secretariogeneral@cclam.org.pe"
            telf="984701376"
            wsp="984701376"
            image={<Image
                src={`${process.env.STORAGE_URL_FT}/images/recursos-humanos/centro-solucion-y-disputas.png`}
                layout="fill"
                objectFit="cover"
                quality="100"
                className="rounded-4xl"
                alt="alejandra pasco"
            />} />,
    },
    {
        keywords: ["secretaria", "arbitral", "asistente", "legal", "cynthia", "chavesta"],
        element: <CardContact
            correo="secretriaarbitral@cclam.org.pe"
            telf="984793698"
            wsp="984793698"
            image={<Image
                src={`${process.env.STORAGE_URL_FT}/images/recursos-humanos/asistente-legal.png`}
                layout="fill"
                objectFit="cover"
                quality="100"
                className="rounded-4xl"
                alt="cynthia chavesta"
            />} />,
    },
    {
        keywords: ["secretario", "arbitral", "legal", "juan", "pablo", "pacheco", "ojeda"],
        element: <CardContact
            correo="secretriaarbitral@cclam.org.pe"
            telf="984793698"
            wsp="984793698"
            image={<Image
                src={`${process.env.STORAGE_URL_FT}/images/recursos-humanos/juan-pablo.png`}
                layout="fill"
                objectFit="cover"
                quality="100"
                className="rounded-4xl"
                alt="juan pacheco"
            />} />,
    },
    {
        keywords: ["protestos", "riesgos", "vanessa", "ñiquen"],
        element: <CardContact
            correo="protestos@cclam.org.pe"
            telf="944674614"
            wsp="944674614"
            image={<Image
                src={`${process.env.STORAGE_URL_FT}/images/recursos-humanos/protestos.png`}
                layout="fill"
                objectFit="cover"
                quality="100"
                className="rounded-4xl"
                alt="vanessa ñiquen"
            />} />,
    },
    {
        keywords: ["comercio", "exterior", "juan", "carlos", "mera"],
        element: <CardContact
            correo="comex@cclam.org.pe "
            telf="944680348"
            wsp="944680348"
            image={<Image
                src={`${process.env.STORAGE_URL_FT}/images/recursos-humanos/comercio-exterior.png`}
                layout="fill"
                objectFit="cover"
                quality="100"
                className="rounded-4xl"
                alt="juan mera"
            />} />,
    },
    {
        keywords: ["capacitación", "capacitacion", "formalización", "formalizacion", "desarrollo", "carmen", "julia", "sime"],
        element: <CardContact
            correo="capacitacion@cclam.org.pe"
            telf="944675625"
            wsp="944675625"
            image={<Image
                src={`${process.env.STORAGE_URL_FT}/images/recursos-humanos/desarrollo-empresarial.png`}
                layout="fill"
                objectFit="cover"
                quality="100"
                className="rounded-4xl"
                alt="carmen sime"
            />} />,
    },
    {
        keywords: ["empresas", "formalizacion", "jorge", "chozo", "cajusol"],
        element: <CardContact
            correo="jchozo@cclam.org.pe"
            telf="984785915"
            wsp="984785915"
            image={<Image
                src={`${process.env.STORAGE_URL_FT}/images/recursos-humanos/formalizacion.png`}
                layout="fill"
                objectFit="cover"
                quality="100"
                className="rounded-4xl"
                alt="jorge cajusol"
            />} />,
    },
    {
        keywords: ["cobranza", "martha", "sifuentes"],
        element: <CardContact
            correo="servicioalasociado@cclam.org.pe"
            telf="944684294"
            wsp="944684294"
            image={<Image
                src={`${process.env.STORAGE_URL_FT}/images/recursos-humanos/cobranza.png`}
                layout="fill"
                objectFit="cover"
                quality="100"
                className="rounded-4xl"
                alt="martha sifuentes"
            />} />,
    },
    {
        keywords: ["cobranza", "cobrador", "marco", "silva"],
        element: <CardContact
            correo=" "
            telf="939389393"
            wsp="939389393"
            image={<Image
                src={`${process.env.STORAGE_URL_FT}/images/recursos-humanos/cobranza1.png`}
                layout="fill"
                objectFit="cover"
                quality="100"
                className="rounded-4xl"
                alt="marco silva"
            />} />,
    },
    {
        keywords: ["cobranza", "cobrador", "javier", "maza"],
        element: <CardContact
            correo=" "
            telf="944677873"
            wsp="944677873"
            image={<Image
                src={`${process.env.STORAGE_URL_FT}/images/recursos-humanos/cobranza2.png`}
                layout="fill"
                objectFit="cover"
                quality="100"
                className="rounded-4xl"
                alt="javier maza"
            />} />,
    },
    {
        keywords: ["cobranza", "cobrador", "alejandro", "maza"],
        element: <CardContact
            correo=" "
            telf="944677956"
            wsp="944677956"
            image={<Image
                src={`${process.env.STORAGE_URL_FT}/images/recursos-humanos/cobranza3.png`}
                layout="fill"
                objectFit="cover"
                quality="100"
                className="rounded-4xl"
                alt="alejandro maza"
            />} />,
    },
    {
        keywords: ["asistente", "contabilidad", "recursos humanos", "walter", "villavicencio"],
        element: <CardContact
            correo="asistentecontable@cclam.org.pe"
            telf="938883716"
            wsp="938883716"
            image={<Image
                src={`${process.env.STORAGE_URL_FT}/images/recursos-humanos/contabilidad.png`}
                layout="fill"
                objectFit="cover"
                quality="100"
                className="rounded-4xl"
                alt="walter villavicencio"
            />} />,
    },
    {
        keywords: ["caja", "ana", "guzman"],
        element: <CardContact
            correo="aguzman@cclam.org.pe"
            telf="944683540"
            wsp="944683540"
            image={<Image
                src={`${process.env.STORAGE_URL_FT}/images/recursos-humanos/caja.png`}
                layout="fill"
                objectFit="cover"
                quality="100"
                className="rounded-4xl"
                alt="ana guzman"
            />} />,
    },
    {
        keywords: ["rosa", "bances", "sectorista"],
        element: <CardContact
            correo="rosabances@cclam.org.pe"
            telf="984713266"
            wsp="984713266"
            image={<Image
                src={`${process.env.STORAGE_URL_FT}/images/recursos-humanos/sectorista.png`}
                layout="fill"
                objectFit="cover"
                quality="100"
                className="rounded-4xl"
            />} />,
    },
    {
        keywords: ["sistemas", "daniela", "paiva"],
        element: <CardContact
            correo="sistemas@cclam.org.pe"
            telf="939387702"
            wsp="939387702"
            image={<Image
                src={`${process.env.STORAGE_URL_FT}/images/recursos-humanos/sistemas.png`}
                layout="fill"
                objectFit="cover"
                quality="100"
                className="rounded-4xl"
            />} />,
    },
    {
        keywords: ["imagen", "institucional", "juan", "luis", "llontop"],
        element: <CardContact
            correo="imageninstitucional@cclam.org.pe"
            telf="984769175"
            wsp="984769175"
            image={<Image
                src={`${process.env.STORAGE_URL_FT}/images/recursos-humanos/imagen.png`}
                layout="fill"
                objectFit="cover"
                quality="100"
                className="rounded-4xl"
            />} />,
    },
    {
        keywords: ["diseño", "luis", "carlos", "masabel"],
        element: <CardContact
            correo="luismasabel@cclam.org.pe"
            telf="984704667"
            wsp="984704667"
            image={<Image
                src={`${process.env.STORAGE_URL_FT}/images/recursos-humanos/design.png`}
                layout="fill"
                objectFit="cover"
                quality="100"
                className="rounded-4xl"
            />} />,
    },
    {
        keywords: ["laura", "torres"],
        element: <CardContact
            correo=" "
            telf="948501378"
            wsp="948501378"
            image={<Image
                src={`${process.env.STORAGE_URL_FT}/images/recursos-humanos/promocion-desarrollo-asociados.png`}
                layout="fill"
                objectFit="cover"
                quality="100"
                className="rounded-4xl"
            />} />,
    },
    {
        keywords: ["jesús", "cerdán"],
        element: <CardContact
            correo=" "
            telf="978970721"
            wsp="978970721"
            image={<Image
                src={`${process.env.STORAGE_URL_FT}/images/recursos-humanos/promocion-desarrollo-asociados2.png`}
                layout="fill"
                objectFit="cover"
                quality="100"
                className="rounded-4xl"
            />} />,
    }]

export default function RecursosHumanos() {
    const [search, setsearch] = useState(false);
    const [value, setvalue] = useState("");
    const toogleSearch = () => {
        setsearch(!search)
        setvalue("")
    }
    return (
        <Layout>
            <Head>
                <title>CCLAM | Recursos humanos</title>
            </Head>
            <div className="min-h-screen bg-themeWhite">

                <Transition
                    show={true}
                    appear={true}
                    enter="transform transition duration-1000"
                    enterFrom="opacity-0 -translate-y-3"
                    enterTo="opacity-100 translate-y-0"
                    leave="transform duration-200 transition ease-in-out"
                    leaveFrom="opacity-100 translate-y-0 "
                    leaveTo="opacity-0 "
                >
                    <div className="pt-40 text-center">
                        <h1 className="text-3xl lg:text-5xl md:text-5xl sm:text-6xl font-black">Recursos <span className="text-themeBlue mt-2">Humanos</span></h1>
                        <p className="font-medium text-themeLightBlue text-xl mt-1">¡Contáctate con nosotros!</p>
                    </div>
                </Transition>
                <Transition
                    show={true}
                    appear={true}
                    enter="transform transition duration-1000"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="transform duration-200 transition ease-in-out"
                    leaveFrom="opacity-100 "
                    leaveTo="opacity-0 "
                >
                    <div className="w-full px-2 lg:px-20 pt-10 flex">
                        <Transition
                            show={search}
                            enter="transition-opacity duration-150"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="transition-opacity duration-150"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                            className="ml-auto mr-5 w-full "
                        >
                            <input
                                className="form-input w-full rounded-full shadow-sm py-2 px-5 "
                                type="text" placeholder="Buscar colaborador"
                                onChange={(e) => setvalue(e.target.value)}
                            />
                        </Transition>
                        <button className={`${!search && 'ml-auto'} block bg-themeLightBlue p-3 rounded-full text-white`} onClick={toogleSearch}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </button>
                    </div>
                    <div className="w-full grid mt-12 px-2 lg:px-12 grid-cols-1 lg:grid-cols-2 gap-12">
                        {
                            cards.filter(f => value ? f.keywords.some(k => value.trim().toLocaleLowerCase().replace(/\s\s+/g, ' ').split(" ").some(v => k.includes(v))) : true).map((c, i) =>
                                <div key={i}>{c.element}</div>
                            )
                        }
                    </div>
                </Transition>
            </div>
        </Layout>
    )
}
