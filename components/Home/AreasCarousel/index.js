import Item from './Item';
import CarouselFade from '../../CarouselFade'

export default function Carrousel() {
    return (
        <>
            <CarouselFade
                slides={[
                    <Item
                        fijo="TUS TRÁMITES"
                        phrases={["DESDE CASA"]}
                        description="Queremos cuidarte, por eso realiza tus trámites a través de nuestra mesa virtual de partes."
                        bg="bg-mesa-de-partes"
                        external="https://cclam.sofydoc.com/externo/"
                    />,
                    <Item
                        fijo="PROTESTOS"
                        description="Accede a créditos más fácilmente, consulta tu historial crediticio y realiza tus protestos a tiempo."
                        phrases={["Y RIESGOS"]}
                        bg="bg-protestos"
                        servicelink="/servicios/protestos-moras"
                    />,
                    <Item
                        fijo="FORMALIZA"
                        description="Te brindamos la asesoría correcta para que puedas formalizar y obtener beneficios ¡Te entregamos tu empresa totalmente constituida!"
                        phrases={["CON NOSOTROS"]}
                        bg="bg-formalizacion"
                        servicelink="/servicios/formalizacion-empresas"
                    />,
                    <Item
                        fijo="COMERCIO"
                        description="Importar y exportar nunca fue tan fácil, lleva tu empresa al siguiente nivel con nuestra asesoría."
                        phrases={["EXTERIOR"]}
                        bg="bg-comercio-exterior"
                        servicelink="/servicios/comercio-exterior"
                    />,
                    <Item
                        fijo="IDENTIDAD"
                        description="Te brindamos la asesoría correcta para que puedas formalizar y obtener beneficios ¡Te entregamos tu empresa totalmente constituida!"
                        phrases={["DIGITAL"]}
                        bg="bg-identidad-digital"
                        servicelink="/servicios/formalizacion-empresas"
                        textWhite
                    />
                    ,
                    <Item
                        fijo=""
                        description="Entérate del estado de tu empresa llenando una encuesta y recibe asesorías personalizadas en base a los resultados."
                        phrases={["KAP"]}
                        bg="bg-kap"
                        external="https://www.cclam.org.pe/diagnostico-empresarial/registro"
                        textWhite
                    />
                ]}
            />
        </>
    )
}