import Image from 'next/image'
import menus from "../../../content/navegacion.json"
import ListMenu from "../Nav/ListMenu"

export default function index() {
    return (
        <footer className="bg-themeWhite px-10 lg:px-20 py-10">
            <div className="flex flex-wrap justify-between text-gray-600">
                <div className="flex flex-col mt-10 lg:mt-20">
                    <p className="font-bold">Sobre tu cámara</p>
                    <ListMenu
                        type={"small"}
                        menusParam={menus}
                        cod={1} />
                </div>
                <div className="w-48 mt-10 lg:mt-20">
                    <p className="font-bold mb-5">Paga aquí con</p>
                    <Image src="/svgs/tarjetas.svg" width="871" height="150" layout="responsive" />
                </div>
                <div className="flex flex-col mt-10 lg:mt-20">
                    <p className="font-bold">Contáctanos</p>
                    <div className="flex mt-5">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-themeLightBlue mr-3" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                        </svg>
                        <a href="tel:51984656652" target="_blank" className="text-sm">+51 984 656 652</a>
                    </div>
                    <div className="flex mt-5">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-themeLightBlue mr-3" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                        </svg>
                        <a href="mailto:secretariagerencia@cclam.org.pe" target="_blank" className="text-sm">secretariagerencia@cclam.org.pe</a>
                    </div>
                    <div className="flex mt-5">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-themeLightBlue mr-3" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                        <p className="text-sm">María Izaga 035. Lambayeque, Chiclayo.</p>
                    </div>
                </div>
                <div className="flex flex-col mt-10 lg:mt-20">
                    <p className="font-bold">Ubícanos</p>
                    <div className="rounded-xl shadow-close mt-5">
                        <iframe className="rounded-xl shadow-close" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" src="https://maps.google.com/maps?q=Calle%20Manuel%20Mar%C3%ADa%20Izaga%2035%20Chiclayo%2014009&amp;t=m&amp;z=17&amp;output=embed&amp;iwloc=near" title="Calle Manuel María Izaga 35 Chiclayo 14009" aria-label="Calle Manuel María Izaga 35 Chiclayo 14009"></iframe>
                    </div>
                </div>
            </div>
            <div className="w-full text-center mt-14">
                <p className="font-bold">Síguenos</p>
                <div className="flex justify-center mt-2">
                    <a href="https://www.facebook.com/cclambayeque" target="_blank" className="bg-themeLightBlue text-white rounded-full p-2 mr-2">
                        <svg viewBox="0 0 24 24" height="20" width="20" focusable="false" role="img" fill="currentColor" xmlns="http://www.w3.org/2000/svg" >
                            <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"></path>
                        </svg>
                    </a>
                    <a href="https://twitter.com/ccp_lambayeque" target="_blank" className="bg-themeLightBlue text-white rounded-full p-2 mr-2">
                        <svg viewBox="0 0 24 24" height="20" width="20" focusable="false" role="img" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"></path>
                        </svg>
                    </a>
                    <a href="https://www.instagram.com/cclambayeque/" target="_blank" className="bg-themeLightBlue text-white rounded-full p-2 mr-2">
                        <svg viewBox="0 0 24 24" height="20" width="20" focusable="false" role="img" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.999 7.377a4.623 4.623 0 1 0 0 9.248 4.623 4.623 0 0 0 0-9.248zm0 7.627a3.004 3.004 0 1 1 0-6.008 3.004 3.004 0 0 1 0 6.008z"></path><circle cx="16.806" cy="7.207" r="1.078"></circle><path d="M20.533 6.111A4.605 4.605 0 0 0 17.9 3.479a6.606 6.606 0 0 0-2.186-.42c-.963-.042-1.268-.054-3.71-.054s-2.755 0-3.71.054a6.554 6.554 0 0 0-2.184.42 4.6 4.6 0 0 0-2.633 2.632 6.585 6.585 0 0 0-.419 2.186c-.043.962-.056 1.267-.056 3.71 0 2.442 0 2.753.056 3.71.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.042 1.268.055 3.71.055s2.755 0 3.71-.055a6.615 6.615 0 0 0 2.186-.419 4.613 4.613 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.186.043-.962.056-1.267.056-3.71s0-2.753-.056-3.71a6.581 6.581 0 0 0-.421-2.217zm-1.218 9.532a5.043 5.043 0 0 1-.311 1.688 2.987 2.987 0 0 1-1.712 1.711 4.985 4.985 0 0 1-1.67.311c-.95.044-1.218.055-3.654.055-2.438 0-2.687 0-3.655-.055a4.96 4.96 0 0 1-1.669-.311 2.985 2.985 0 0 1-1.719-1.711 5.08 5.08 0 0 1-.311-1.669c-.043-.95-.053-1.218-.053-3.654 0-2.437 0-2.686.053-3.655a5.038 5.038 0 0 1 .311-1.687c.305-.789.93-1.41 1.719-1.712a5.01 5.01 0 0 1 1.669-.311c.951-.043 1.218-.055 3.655-.055s2.687 0 3.654.055a4.96 4.96 0 0 1 1.67.311 2.991 2.991 0 0 1 1.712 1.712 5.08 5.08 0 0 1 .311 1.669c.043.951.054 1.218.054 3.655 0 2.436 0 2.698-.043 3.654h-.011z"></path>
                        </svg>
                    </a>
                    <a href="https://www.youtube.com/channel/UC1AiwP-g_axxOcyEKtFJh6w/videos" target="_blank" className="bg-themeLightBlue text-white rounded-full p-2 mr-2">
                        <svg viewBox="0 0 16 16" height="20" width="20" focusable="false" role="img" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"></path>
                        </svg>
                    </a>
                </div>
            </div>
        </footer>
    )
}
