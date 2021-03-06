import Head from 'next/head'
import Layout from '../components/layout'
import Image from "next/image";
import { Transition } from '@headlessui/react'
import { toNombrePropio } from '../util/Helper';

const sectoristas = [
    {
        name: "Alex Didi Gómez",
        telf: "942418670",
        correo: "alexgomez@cclam.org.pe",
        src: "/images/comitesgremiales/alex.png",
        comites: [
            {
                name: "Construcción, inmobiliaria y afines",
                miembros: [
                    { cargo: 'PRESIDENTE', representante: 'MIGUEL PEREZ YUYES', empresa: 'AVITARE GRUPO INMOBILIARIO S.A.C.' },
                    { cargo: 'VICE - PRESIDENTE', representante: 'MARCO ANTONIO CHAFLOQUE GAMARRA', empresa: 'URBANIZACION AMOR DE DIOS' },
                    { cargo: 'SECRETARIO ADMINISTRATIVO', representante: 'SANTIAGO AGUSTIN CISNEROS ESPARTA', empresa: 'PRO HOME PERU S.A.C.' },
                    { cargo: 'SECRETARIO DE GESTIÓN Y FIN.', representante: 'GERMAN GOMEZ BUSTAMANTE', empresa: 'GERGOBUS ( PLANICIE INMOB.)' },
                    { cargo: 'VOCAL', representante: 'JOHON ALEXANDER SALAZAR BAIGORRIA', empresa: 'JM DESARROLLADOR S.A.C.' },
                ],
                icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
            },
            {
                name: "Metalmecánica Industrias",
                miembros: [
                    { cargo: 'PRESIDENTE', representante: 'GONZALO SANCHEZ CALDERON', empresa: 'CIDMONPER S.A.C.' },
                    { cargo: 'VICE - PRESIDENTE', representante: 'CARLOS HEREDIA PAIVA', empresa: 'CAHEPA EIRL.' },
                    { cargo: 'SECRETARIO ADMINISTRATIVO', representante: 'DORA PATRICIA AGURTO LORREN', empresa: 'TUBOS Y POSTES CHACUPE S.A.C.' },
                    { cargo: 'SECRETARIO DE GESTIÓN Y FIN.', representante: 'JAVIER CORDOBA GUERRERO', empresa: 'DELCOR FABRICACIONES SAC' },
                    { cargo: 'VOCAL', representante: 'MONICA GAMONAL DAVALOS', empresa: 'EXPORTACIONES G & D FENIX SRL' },
                ],
                icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            },
            {
                name: "Asuntos tributarios",
                miembros: [
                    { cargo: 'PRESIDENTE', representante: 'TADEO GERMAN CABALLERO RUIZ', empresa: 'TC CABALLERO AUDITORES S.C. R. L.' },
                    { cargo: 'VICE - PRESIDENTE', representante: 'MARIBEL CARRANZA TORRES', empresa: 'COLEGIO DE CONTADORES' },
                    { cargo: 'SECRETARIO ADMINISTRATIVO', representante: 'RONALD GONZALES SECLEN', empresa: 'ESTUDIO MENDOZA Y AUDITORES S.A.C.' },
                    { cargo: 'SECRETARIO DE GESTIÓN Y FIN.', representante: 'JAVIER BANCAYAN ELERA', empresa: 'JAVIER BANCAYAN ASESORIA EMPRESARIAL' },
                    { cargo: 'VOCAL', representante: 'MARIA ASTRID REYNOSO DE VARGAS', empresa: 'ESTUDIO REYNOSO S.A.C.' },
                ],
                icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
            },
            {
                name: "Salud",
                miembros: [
                    { cargo: 'PRESIDENTE', representante: 'D`ANGELO RAMOS ERNESTO MARTIN', empresa: 'D`ANGELO RAMOS ERNESTO MARTIN' },
                    { cargo: 'VICE - PRESIDENTE', representante: 'MARLON TENORIO ANICAMA', empresa: 'CLINICDENT ESPECIALISTAS E.I.R.L.' },
                    { cargo: 'SECRETARIO ADMINISTRATIVO', representante: 'CARLOS GARCIA PINTADO', empresa: 'SOLUCIONES MEDICAS DEL NORTE S.A.C.' },
                    { cargo: 'SECRETARIO DE GESTIÓN Y FIN.', representante: 'BRUNO VELASQUEZ SAAVEDRA', empresa: 'GSP TRUJILLO S.A.C. (CLINICAS AUNA)' },
                    { cargo: 'VOCAL', representante: 'CESAR LOPEZ TAFUR', empresa: 'BOTICA VERDE INTERNACIONAL SRL' },
                    { cargo: 'SOCIOS ESTRATEGICO 1', representante: 'NIDIA SAMAME FRIAS', empresa: 'OSTEOMEDIC PERU E.I.R.L.' },
                    { cargo: 'SOCIOS ESTRATEGICO 2', representante: 'SERRA ROMERO MARIA CELESTE', empresa: 'CELESTE GABINETE ESTETICA' },
                    { cargo: 'SOCIOS ESTRATEGICO 3', representante: 'GIOVANNA BOCANGEL PACHECO', empresa: 'HOSPITAL DE CLINICAS LAMBAYEQUE S.A.C.' },
                ],
                icon: <svg viewBox="0 0 448 512" className="h-6 w-6" focusable="false" role="img" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill="currentColor" d="M128 244v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12zm140 12h40c6.627 0 12-5.373 12-12v-40c0-6.627-5.373-12-12-12h-40c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12zm-76 84v-40c0-6.627-5.373-12-12-12h-40c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h40c6.627 0 12-5.373 12-12zm76 12h40c6.627 0 12-5.373 12-12v-40c0-6.627-5.373-12-12-12h-40c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12zm180 124v36H0v-36c0-6.627 5.373-12 12-12h19.5V85.035C31.5 73.418 42.245 64 55.5 64H144V24c0-13.255 10.745-24 24-24h112c13.255 0 24 10.745 24 24v40h88.5c13.255 0 24 9.418 24 21.035V464H436c6.627 0 12 5.373 12 12zM79.5 463H192v-67c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v67h112.5V112H304v24c0 13.255-10.745 24-24 24H168c-13.255 0-24-10.745-24-24v-24H79.5v351zM266 64h-26V38a6 6 0 00-6-6h-20a6 6 0 00-6 6v26h-26a6 6 0 00-6 6v20a6 6 0 006 6h26v26a6 6 0 006 6h20a6 6 0 006-6V96h26a6 6 0 006-6V70a6 6 0 00-6-6z"></path>
                </svg>
            }
        ]
    },
    {
        name: "Rosa Bances Mimbela",
        src: "/images/comitesgremiales/rosa.png",
        telf: "984713266",
        correo: "rosabances@cclam.org.pe",
        comites: [
            {
                name: "Turismo",
                miembros: [
                    { cargo: 'PRESIDENTE', representante: 'MARIA ISABEL ESPINAL TAPIA', empresa: 'AGENCIA DE VIAJES SIPAN TOURS' },
                    { cargo: 'VICE - PRESIDENTE', representante: 'FIORELLA RAMIREZ CHOPITEA', empresa: 'CENTRO DE CONVENCIONES TUMBAS REALES S.A.C.' },
                    { cargo: 'SECRETARIO ADMINISTRATIVO', representante: 'NADIA ARANA SANCHEZ', empresa: 'AEROPUERTO DEL PERU SAC' },
                    { cargo: 'SECRETARIO DE GESTIÓN Y FIN.', representante: 'GLADYS ZAPATA FERNADEZ', empresa: 'HOTEL SANTA ROSA' },
                    { cargo: 'VOCAL', representante: 'EDUARDO MONTOYA ALTAMIRANO', empresa: 'CONSORCIO TURÍSTICO NBJ SAC' },
                    { cargo: 'SOCIO ESTRATEGICO 1', representante: 'PAUL SAAVEDRA C.', empresa: 'GRAN HOTEL PIMENTEL' },
                    { cargo: 'SOCIO ESTRATEGICO 2', representante: 'JOSE CEDANO ', empresa: 'MOOT HOTEL' },
                    { cargo: 'SOCIO ESTRATEGICO 3', representante: 'ELIZABETH CRUZ  DIAZ', empresa: 'HOTEL AMERICA SAC' },

                ],
                icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            },
            {
                name: "Gestión del Talento Humano",
                miembros: [
                    { cargo: 'PRESIDENTE', representante: 'JORGE LAVALLE AGUINAGA', empresa: 'SINERGIA.PE' },
                    { cargo: 'VICE - PRESIDENTE', representante: 'JUAN DIEZ ARAGON', empresa: 'ARGOS DAJE SAC' },
                    { cargo: 'SECRETARIO ADMINISTRATIVO', representante: 'GIULLIANA CAROLINA CAÑOLA RAMIREZ ', empresa: 'ALMA Y MENTE' },
                    { cargo: 'SECRETARIO DE GESTIÓN Y FIN.', representante: 'VIDAURO INCIO CARPIO', empresa: 'VIDAURO INCIO CARPIO' },
                    { cargo: 'VOCAL', representante: 'ALEJANDRO SANCHEZ', empresa: 'INSTITUTO DE INVESTIGACION E INNOVACION DE GESTION Y DESARROLLO EMPRESARIAL E.I.R.L.' },

                ],
                icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
            },
            {
                name: "Seguridad y salud en el trabajo",
                miembros: [
                    { cargo: 'PRESIDENTE', representante: 'MONICA CORNEJO BONILLA', empresa: 'MCB CONSULTING TRAINING SAC' },
                    { cargo: 'VICE - PRESIDENTE', representante: 'DANIEL PEREZ BANCES', empresa: 'CLINICA INDUSTRIAL SAC' },
                    { cargo: 'SECRETARIO ADMINISTRATIVO', representante: 'HENRY BARBOZA TARRILLO', empresa: 'GRUPO HESST S.A.C.' },
                    { cargo: 'SECRETARIO DE GESTIÓN Y FIN.', representante: 'CARLOS GARCIA PINTADO', empresa: 'CLINICA SOLUCIONES MEDICAS' },
                    { cargo: 'VOCAL', representante: 'VIDAURO INCIO CARPIO', empresa: 'VIDAURO INCIO CARPIO' },
                ],
                icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
            },
            {
                name: "Transportes",
                miembros: [
                    { cargo: 'PRESIDENTE', representante: 'FERNANDO CARPIO  CUBAS', empresa: 'AUTOMOTORES SAN LORENZO SAC' },
                    { cargo: 'VICE - PRESIDENTE', representante: 'ENRIQUE FUENTES VERTIZ', empresa: 'DEPOSITO PAKATNAMU EIRL/TRANSPORTES PAKATNAMU SAC' },
                    { cargo: 'SECRETARIO ADMINISTRATIVO', representante: 'CARLOS CASTRO FAYA', empresa: 'SERVIS PIURA' },
                    { cargo: 'SECRETARIO DE GESTIÓN Y FIN.', representante: 'GONZALO OLANO LA PIEDRA', empresa: 'OLTURSA' },
                    { cargo: 'VOCAL', representante: 'VICTOR RIVERA ORTEGA', empresa: 'MANNUCCI DIESEL SAC' },
                ],
                icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
                </svg>
            },
            {
                name: "Pesca industrial",
                miembros: [
                    { cargo: 'PRESIDENTE', representante: 'JUAN EDGAR FIESTAS MARTINEZ', empresa: 'PESQUERA DON CHANO SAC' },
                    { cargo: 'VICE - PRESIDENTE', representante: 'EDWIN RUBEN SUCLUPE URCIA', empresa: 'EDWIN RUBEN SUCLUPE URCIA' },
                    { cargo: 'SECRETARIO ADMINISTRATIVO', representante: 'VICTOR OROZCO NUNTON', empresa: 'GROUP VIOLETA SAC' },
                    { cargo: 'SECRETARIO DE GESTIÓN Y FIN.', representante: 'LARRY PANTA SANCHEZ', empresa: 'LARRY PANTA SANCHEZ' },
                    { cargo: 'VOCAL1', representante: 'JULIO PUESCAS LLENQUE', empresa: 'INVERSIONES Y NEGOCIOS DON JULIO E.I.R.L.' },
                    { cargo: 'VOCAL 2', representante: 'JUAN DE DIOS NUNTON BERNAL', empresa: 'JUAN DE DIOS NUNTON BERNAL' },
                ],
                icon: <svg viewBox="0 0 576 512" className="h-6 w-6" focusable="false" role="img" fill="currentColor" xmlns="http://www.w3.org/2000/svg" >
                    <path fill="currentColor" d="M327.1 96c-89.97 0-168.54 54.77-212.27 101.63L27.5 131.58c-12.13-9.18-30.24.6-27.14 14.66L24.54 256 .35 365.77c-3.1 14.06 15.01 23.83 27.14 14.66l87.33-66.05C158.55 361.23 237.13 416 327.1 416 464.56 416 576 288 576 256S464.56 96 327.1 96zm87.43 184c-13.25 0-24-10.75-24-24 0-13.26 10.75-24 24-24 13.26 0 24 10.74 24 24 0 13.25-10.75 24-24 24z"></path>
                </svg>
            },
            {
                name: "Textil y joyería",
                miembros: [
                    { cargo: 'PRESIDENTE', representante: 'JUAN MANUEL SCANDER CHIKHANI', empresa: 'TEJIDOS Y CONFECCIONES BARBA NEGRA' },
                    { cargo: 'VICE - PRESIDENTE', representante: 'KAREN VILLANUEVA', empresa: 'KARILI JOYERIA' },
                    { cargo: 'SECRETARIO ADMINISTRATIVO', representante: 'LUPE MARGARITA GARAY FERNANDEZ', empresa: 'CREACIONES LUPITA' },
                    { cargo: 'SECRETARIO DE GESTIÓN Y FIN.', representante: 'MILAGROS VELASQUEZ', empresa: 'MIRÁCOLI CONFECCIONES' },
                    { cargo: 'VOCAL', representante: 'LUIS GARCIA MERINO', empresa: 'LUIS GARCIA MERINO' },
                ],
                icon: <svg viewBox="0 0 512 512" className="h-6 w-6" focusable="false" role="img" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M35.42 188.21l207.75 269.46a16.17 16.17 0 0025.66 0l207.75-269.46a16.52 16.52 0 00.95-18.75L407.06 55.71A16.22 16.22 0 00393.27 48H118.73a16.22 16.22 0 00-13.79 7.71L34.47 169.46a16.52 16.52 0 00.95 18.75zM48 176h416"></path><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M400 64l-48 112-96-128M112 64l48 112 96-128m0 400l-96-272m96 272l96-272"></path>
                </svg>
            },
        ]
    },
    {
        name: "Vanessa Ñiquen Bazán",
        telf: "944674614",
        correo: "protestos@cclam.org.pe",
        src: "/images/comitesgremiales/vanessa.png",
        comites: [
            {
                name: "Legal",
                miembros: [
                    { cargo: 'PRESIDENTE', representante: 'CARLOS ANDRE PALOMINO GUERRA', empresa: 'CARLOS ANDRE PALOMINO GUERRA' },
                    { cargo: 'VICE - PRESIDENTE', representante: 'EDWIN ZAMORA VEGA', empresa: 'EDWIN ZAMORA MILLONES' },
                    { cargo: 'SECRETARIO ADMINISTRATIVO', representante: 'MÓNICA BEATRIZ MANAY TORRES', empresa: 'DE LEGE ASESORIA Y GESTION S.A.C' },
                    { cargo: 'SECRETARIO DE GESTIÓN Y FIN.', representante: 'PORRO RIVADENEIRA MANUEL FRANCISCO', empresa: 'PORRO RIVADENEIRA MANUEL FRANCISCO' },
                    { cargo: 'VOCAL', representante: 'JOSE ANTONIO CARDENAS REYNAGA', empresa: 'CARDENAS REYNAGA ABOGADOS Y CONSULTORES E.I.R.L' },
                    { cargo: 'SOCIO ESTRATEGICO 1', representante: 'JHESMAW QUISPE JANAMPA', empresa: 'ESTUDIO JHESMAW QUISPE JANAMPA ABOGADOS S.A.C' },
                    { cargo: 'SOCIO ESTRATEGICO 2', representante: 'SALATIEL MARRUFO ALCANTARA', empresa: 'ESTUDIO MARRUFO ABOGADOS S.A.C' },
                    { cargo: 'SOCIO ESTRATEGICO 3', representante: 'VICTOR MIGUEL CALLEJA VELA', empresa: 'ESTUDIO CALLEJA ABOGADOS S.A.C' },
                ],
                icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            },
            {
                name: "Banca, Seguros, AFP's y Microfinancieras",
                miembros: [
                    { cargo: 'PRESIDENTE', representante: 'OSCAR TOLEDO NEGLIA', empresa: 'LA POSITIVA SEGUROS Y REASEGUROS S.A.A.' },
                    { cargo: 'VICE - PRESIDENTE', representante: 'KATHERINE ROSA MANRIQUE SILVA', empresa: 'FOGAPI' },
                    { cargo: 'SECRETARIO ADMINISTRATIVO', representante: 'MARTIN BALTAZAR NOVOA SALCEDO', empresa: 'CIA DE SEGURIDAD PROSEGUR S A' },
                    { cargo: 'SECRETARIO DE GESTIÓN Y FIN.', representante: 'PAUL RAMIREZ OLAZABAL', empresa: 'CRECER SEGUROS S.A. COMPAÑIA DE SEGUROS' },
                    { cargo: 'VOCAL', representante: 'JOSÉ LUIS ROJAS MONTALVO', empresa: 'ROMA CORREDORES DE SEGUROS S.A.C' },
                ],
                icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            }
        ]
    },
    {
        name: "Martha Sifuentes Rojas",
        telf: "944684294",
        correo: "servicioalasociado@cclam.org.pe",
        src: "/images/comitesgremiales/martha.png",
        comites: [
            {
                name: "Mujer Empresaria Lambayecana",
                miembros: [
                    { cargo: 'PRESIDENTE', representante: 'ROSA CHAMBERGO MONTEJO', empresa: 'SEMANARIO REGIONAL EXPRESION' },
                    { cargo: 'VICE - PRESIDENTE', representante: 'CELESTE SERRA  ROMERO', empresa: 'CELESTE GABINETE ESTETICA' },
                    { cargo: 'SECRETARIO TECNICO ADMINISTRATIVO', representante: 'GIULLIANA CAÑOLA RAMIREZ', empresa: 'ALMA Y MENTE' },
                    { cargo: 'SECRETARIO TECNICO DE GESTIÓN Y FIN.', representante: 'MARIBEL CARRANZA TORRES', empresa: 'COLEGIO DE CONTADORES PUBLICOS' },
                    { cargo: 'VOCAL', representante: 'MARIA E. NUÑEZ PUSE', empresa: 'EKAM PERU SAC.' },
                ],
                icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19,9a7,7,0,1,0-8,6.92V18H10a1,1,0,0,0,0,2h1v1a1,1,0,0,0,2,0V20h1a1,1,0,0,0,0-2H13V15.92A7,7,0,0,0,19,9Zm-7,5a5,5,0,1,1,5-5A5,5,0,0,1,12,14Z" /></svg>
            },
            {
                name: "Comercio",
                miembros: [
                    { cargo: 'PRESIDENTE', representante: 'CARLOS IBERICO OSORIO', empresa: 'AVICOLA LA COLPA SRL' },
                    { cargo: 'VICE - PRESIDENTE', representante: 'VANESSA RAMOS  ORTIZ', empresa: 'PEOPLE PROGRESS' },
                    { cargo: 'SECRETARIO TECNICO ADMINISTRATIVO', representante: 'LUIS MECHAN ', empresa: 'CENTRO DE  ESPECIALIDADES  SANTA LUCIA SAC.' },
                    { cargo: 'SECRETARIO TECNICO DE GESTIÓN Y FIN.', representante: 'JOLMER MONTENEGRO SANCHEZ', empresa: 'CORPORACION  LATINOAMERICANA DE ALIMENTOS' },
                    { cargo: 'VOCAL', representante: 'JHOMAN CARRASCO MORI', empresa: 'JHOCAMO AGENCIA EIRL.' },
                    { cargo: 'SOCIO ESTRATEGICO 1', representante: 'HENRRY GUEVARA MEJIA', empresa: 'AXCOL EIRL - POLYFRIO' },
                    { cargo: 'SOCIO ESTRATEGICO 2', representante: 'MARKO CHAFLOQUE ', empresa: 'URBANIZACION AMOR DE DIOS' },
                ],
                icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
            },
            {
                name: "Minería, Energía e Hidrocarburos",
                miembros: [
                    { cargo: 'PRESIDENTE', representante: 'FREDY REGALADO', empresa: 'MINERA LA ZANJA S.R.L. / CIA MINERA COIMOLACHE SA' },
                    { cargo: 'VICE - PRESIDENTE', representante: 'JORGE LEON ', empresa: 'CAÑARIACO COPPER PERU S.A.' },
                    { cargo: 'SECRETARIO TECNICO ADMINISTRATIVO', representante: 'NIKOLAI ALVAREZ', empresa: 'GASES DEL PACIFICO' },
                    { cargo: 'SECRETARIO TECNICO DE GESTIÓN Y FIN.', representante: 'CESAR GUERRERO', empresa: 'RED DE  ENERGIA DEL PERU S.A' },
                    { cargo: 'VOCAL', representante: 'MARIA GARCIA FERNANDEZ ', empresa: 'PERFORACIONES HIDRAULICAS DEL NORTE' },
                    { cargo: 'SOCIO ESTRATEGICO 1', representante: 'ALEX SANDOVAL CARRASCO', empresa: 'SEHIGA CONSULTORIA Y PROYECTOS' },
                ],
                icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
            }
        ]
    },
    {
        name: "Carmen Julia Sime Nieto",
        telf: "944675625",
        correo: "campuscamara@cclam.org.pe",
        src: "/images/comitesgremiales/carmen.png",
        comites: [
            {
                name: "Profesionales en proyectos",
                miembros: [
                    { cargo: 'PRESIDENTE', representante: 'JANINNA NATALY SESA CORDOVA ', empresa: 'CARITAS CHICLAYO' },
                    { cargo: 'VICE - PRESIDENTE', representante: 'PAUL ROBERT LOPEZ PEREZ', empresa: 'L & M CONSULTING ASSOCIATE MANAGEMENT S.A.C.' },
                    { cargo: 'SECRETARIO ADMINISTRATIVO', representante: 'FIORELLA RAMIREZ CHAPITEA', empresa: 'CENTRO DE CONVENCIONES TUMBAS REALES S.A.C.' },
                    { cargo: 'SECRETARIO DE GESTIÓN Y FIN.', representante: 'YOEL DE LA CRUZ LLATAS', empresa: 'YOEL DE LA CRUZ LLATAS' },
                    { cargo: 'VOCAL', representante: 'ANGUIE VILLENA CHAMBERGO ', empresa: 'ANGUIE VILLENA CHAMBERGO ' },
                ],
                icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            }
        ]
    },
    {
        name: "Verónica Vanessa Piscoya Lazo",
        telf: "944680348",
        correo: "comex@cclam.org.pe",
        src: "/images/comitesgremiales/vane.png",
        comites: [
            {
                name: "Comercio Exterior",
                miembros: [
                    { cargo: 'PRESIDENTE', representante: 'ELKIN DARIO VANEGAS MURILLO', empresa: 'QUICORNAC S.A.C.' },
                    { cargo: 'VICE - PRESIDENTE', representante: 'ANGELA HUIDOBRO ROMERO', empresa: 'STALNO S.A.C.' },
                    { cargo: 'SECRETARIO ADMINISTRATIVO', representante: 'ZULMA MARIBEL CAMPOS MEZA', empresa: 'COMPAÑIA AGROINDUSTRIAL SANTA ANA S.A.C.' },
                    { cargo: 'SECRETARIO DE GESTIÓN Y FIN.', representante: 'MARLON JAHIR FLORES LIZANA', empresa: 'AMMPE S.A.C.' },
                    { cargo: 'VOCAL', representante: 'YUDITH MUÑOZ MENDOZA ', empresa: 'INDEPENDIENTE' },
                    { cargo: 'SOCIO ESTRATEGICO 1', representante: 'MISIA NELLY PERALES HUANCARUNA', empresa: 'INDUAMERICA INTERNACIONAL S.A.C.' },
                    { cargo: 'SOCIO ESTRATEGICO 2', representante: 'JOSE FERNANDO LOAYZA SILVA', empresa: 'EL AGUILA SRL' },
                    { cargo: 'SOCIO ESTRATEGICO 3', representante: 'JUAN RICARDO PUGA MENDOZA ', empresa: 'PROMOTORA Y SERVICIOS LAMBAYEQUE S.A.C.' },
                ],
                icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            },
            {
                name: "Agro y Agroindustrias",
                miembros: [
                    { cargo: 'PRESIDENTE', representante: 'TOMAS PADILLA LOZADA', empresa: 'ASOCIACIÓN PERUANA DE MOLINEROS DE ARROZ' },
                    { cargo: 'VICE - PRESIDENTE', representante: 'JUAN CARLOS MERA GOICOCHEA', empresa: 'ASOCIACIÓN PERUANA DE MOLINEROS DE ARROZ' },
                    { cargo: 'SECRETARIO ADMINISTRATIVO', representante: 'ENRIQUE HORACIO DEL CASTILLO VALLE', empresa: 'DEL CASTILLO VALLE ENRIQUE HORACIO' },
                    { cargo: 'SECRETARIO DE GESTIÓN Y FIN.', representante: 'MARCO CHAFLOQUE GAMARRA', empresa: 'URBANIZACION AMOR DE DIOS ' },
                    { cargo: 'VOCAL', representante: 'MONICA CORNEJO BONILLA', empresa: 'ACRUX SERVICIOS GENERALES S.A.C.' },
                    { cargo: 'SOCIO ESTRATEGICO 1', representante: 'YUDITH MUÑOZ MENDOZA ', empresa: 'YUDITH MUÑOZ MENDOZA ' },
                ],
                icon: <svg viewBox="0 0 24 24" className="h-6 w-6" focusable="false" role="img" fill="currentColor" xmlns="http://www.w3.org/2000/svg" ><title>LeafThree icon</title><path d="M13.5 2a5.5 5.5 0 0 0-4.9 3 7 7 0 0 1 5.49 3.13c.45-.08.93-.13 1.41-.13h3.48l.02-.5V3.44c0-.8-.65-1.44-1.44-1.44H13.5zM8.43 18h-.18a6 6 0 0 1-6-6V7.51c0-.83.68-1.51 1.51-1.51h4.49a6 6 0 0 1 4.8 2.4 7.52 7.52 0 0 0-3.93 3.16L7.53 9.97a.75.75 0 0 0-1.06 1.06l1.96 1.96a7.49 7.49 0 0 0 0 5z"></path><path d="M9 15.5A6.5 6.5 0 0 1 15.5 9h4.91c.88 0 1.59.71 1.59 1.59v4.91a6.5 6.5 0 0 1-10.54 5.1l-1.18 1.18a.75.75 0 1 1-1.06-1.06l1.18-1.18A6.47 6.47 0 0 1 9 15.5zm3.18 4.38 4.6-4.6a.75.75 0 1 0-1.06-1.06l-4.6 4.6c.3.4.66.76 1.06 1.06z"></path></svg>
            },
        ]
    },
    {
        name: "Chelsy Quispe Díaz",
        telf: "944680147",
        correo: "secretariagerencia@cclam.org.pe",
        src: "/images/comitesgremiales/chelsy.png",
        comites: [
            {
                name: "Educación",
                miembros: [
                    { cargo: 'PRESIDENTE', representante: 'HUBER EZEQUIEL RODRIGUEZ NOMURA', empresa: 'UNIVERSIDAD SEÑOR DE SIPÁN' },
                    { cargo: 'VICE - PRESIDENTE', representante: 'EDDER JOHN HUAMAN YOVERA ', empresa: 'HUAMAN YOVERA EDDER JOHN' },
                    { cargo: 'SECRETARIO ADMINISTRATIVO', representante: 'DRA. PATRICIA JULIA CAMPOS OLAZÁBAL', empresa: 'UNIVERSIDAD CATÓLICA SANTO TORIBIO DE MOGROVEJO' },
                    { cargo: 'SECRETARIO DE GESTIÓN Y FIN.', representante: 'JAIMICE SÁNCHEZ GÓMEZ', empresa: 'LANGUAGE SKILLS S.A.C.' },
                    { cargo: 'VOCAL', representante: 'JONY GUILLERMO PIANA RAMIREZ', empresa: 'COLEGIO JORGE BASADRE' },
                ],
                icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                </svg>
            }
        ]
    }

]

export default function Asociados() {
    return (
        <Layout>
            <Head>
                <title>CCLAM | Comités gremiales</title>
            </Head>
            <section className="min-h-screen ">
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
                    <div className="pt-36 lg:pt-28 text-center">
                        <h1 className="text-3xl lg:text-5xl font-black">Comités gremiales <span className="block text-themeBlue mt-2">Representatividad nacional</span></h1>
                        <div className="max-w-6xl mx-auto mt-5">
                            <p className="text-sm lg:text-lg">Los Comités Gremiales son órganos de apoyo que se han conformado en la institución con los diferentes sectores que tiene la región Lambayeque. Actualmente la Centenaria Cámara de Comercio y Producción de Lambayeque cuenta con 19 Comités Gremiales al Servicio institucional empresarial y regional.</p>
                        </div>
                    </div>
                </Transition>
                {
                    sectoristas.map((sectorista, k) =>
                        <SectoristaConComites key={k}
                            sectorista={sectorista}
                        />)
                }

            </section>
        </Layout>
    )
}

const SectoristaConComites = ({ sectorista }) =>
    <div>
        <div className="my-10 flex justify-end overflow-hidden">
            <div className="lg:w-8/12 py-1">
                <CardSectorista className="ml-5 p-1 flex" orientation="l">
                    <div className="relative w-36 h-36 p-3 rounded-full">
                        <Image
                            className="rounded-full select-none "
                            src={`${process.env.STORAGE_URL_FT}${sectorista.src}`}
                            width="400"
                            height="400"
                            alt={sectorista.name}
                        />
                    </div>
                    <div className="my-auto">
                        <p className="font-semibold text-bgblue select-none ">{sectorista.name}</p>
                        <a href={`https://wa.me/51${sectorista.telf}`} target="_blank" rel="noreferrer" className="hover:text-bgblue block text-sm">+51{sectorista.telf}</a>
                        <a href={`mailto:${sectorista.correo}`} target="_blank" rel="noreferrer" className="hover:text-bgblue block text-sm">{sectorista.correo}</a>
                    </div>
                </CardSectorista>
            </div>
        </div>
        <div className="px-5 flex flex-wrap justify-center gap-6">
            {
                sectorista.comites.map((comite, i) =>
                    <a href={`https://wa.me/51${sectorista.telf}?text=Hola%2C%20quisiera%20saber%20m%C3%A1s%20del%20comit%C3%A9%20gremial%20de%20${comite.name.replace(/ /g, "%20")}`} target="_blank"
                        className="block w-80 rounded-xl p-6 bg-white ring-gray-900/5 shadow-md space-y-3 hover:-translate-y-2 transition-all duration-300">
                        <div className="flex items-center space-x-3">
                            <span className="text-bgblue">
                                {comite.icon}
                            </span>
                            <h3 className="text-gray-900 text-base leading-tight font-semibold">{comite.name}</h3>
                        </div>
                        <div className="text-sm mt-2">
                            {
                                comite?.miembros.map((m,mi)=>
                                <div className="text-gray-500" key={mi}>
                                    <p><b>{toNombrePropio(m.cargo)}:</b></p>
                                    <p>{toNombrePropio((m.representante))}</p>
                                    <p className="mb-2 text-xs font-semibold text-gray-400">{(m.empresa)}</p>
                                </div>
                                )
                            }
                        </div>
                        <p className="text-gray-500 text-sm hidden">Escríbenos para enterarte más del comité de {comite.name}.</p>
                        <div className="w-max my-0 p-1 rounded-2xl relative">
                            <span className="text-bgblue text-xs">
                                Saber más...
                            </span>
                        </div>
                    </a>
                )
            }
        </div>
    </div>

const CardSectorista = ({ className, children, orientation }) =>
    <div className={`bg-white relative h-full ${className} ${orientation === 'l' ? 'rounded-l-full  lg:translate-x-28 text-left' : 'rounded-r-full  lg:-translate-x-28 text-right'} shadow-close transition-all duration-1000 ease-in-out transform hover:translate-x-0`}>
        {children}
    </div>

