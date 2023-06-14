import React, { useState } from 'react'
import SearchPromotor from '../Selects/SearchPromotor'
import SearchComiteGremial from '../Selects/SearchComiteGremial'
import lottieJson from '../../public/animations/71551-confetti.json'
import lottieJson2 from '../../public/animations/lf30_editor_friends.json'
import lottieJson3 from '../../public/animations/lf20_30iie6_confetti.json'
import Lottie from "lottie-react";
import Select from 'react-select'

import moment from "moment"
import 'moment/locale/es'
import { Transition } from '@headlessui/react'
import { useDispatch, useSelector } from 'react-redux'
import { searchRuc, resetSearchRuc } from '../../redux/actions/asociado'
moment.locale('es')

export default function index(props) {
    const stepsPersona = [<ChooseType {...props} />, <ChoosePromotor {...props} />, <StepInfoPersona {...props} />, <AfiliationCompleted {...props} />]
    const stepsEmpresa = [<ChooseType {...props} />, <ChoosePromotor {...props} />, <StepInfoEmpresa {...props} />, <StepInfoRep {...props} />, <StepInfoSegRep {...props} />, <AfiliationCompleted {...props} />]
    const formsStep = [stepsEmpresa, stepsPersona]
    const { step, typeAfiliation } = props

    return (
        <div className="w-full">
            {
                typeAfiliation ?
                    formsStep[typeAfiliation - 1][step]
                    : formsStep[0][step]
            }
        </div>
    )
}

const ChooseType = ({ next, setTypeAfiliation, setmaxStep, setstepsForFill }) =>
    <div className="text-center">
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
            <h2 className="font-extrabold text-2xl mb-6">¿Cómo te quieres afiliar?</h2>
            <button type="button" onClick={() => { setTypeAfiliation(1); setstepsForFill(3); setmaxStep(3 + 2); next(); }} className="mx-auto w-full lg:w-96 shadow-close py-6 px-5 rounded-xl font-medium text-left flex justify-between mb-4 cursor-pointer hover:scale-101">
                <p className="flex">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 my-auto text-blue-600 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clipRule="evenodd" />
                    </svg>
                    Empresa</p>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 my-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
            </button>
            <button type="button" onClick={() => { setTypeAfiliation(2); setstepsForFill(1); setmaxStep(1 + 2); next(); }} className="mx-auto w-full lg:w-96 shadow-close py-6 px-5 rounded-xl font-medium text-left flex justify-between cursor-pointer hover:scale-101">
                <p className="flex">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 my-auto text-blue-600 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                    </svg>
                    Persona jurídica</p>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 my-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
            </button>
        </Transition>
    </div>

const ChoosePromotor = ({ next, control, Controller, errors }) => {
    return (
        <div className="text-center">
            <Transition
                show={true}
                appear={true}
                enter="transform transition duration-1000"
                enterFrom="opacity-0"
                enterTo="opacity-100 translate-y-0"
                leave="transform duration-200 transition ease-in-out"
                leaveFrom="opacity-100 translate-y-0 "
                leaveTo="opacity-0 "
            >
                <h2 className="font-extrabold text-2xl mb-6 text-center">Antes de empezar...</h2>
                <div className="flex w-full pb-0 mb-0 relative">
                    <Controller
                        name="idPromotor"
                        control={control}
                        render={({ field: { onChange, onBlur, value, ref } }) => (
                            <SearchPromotor
                                onChange={(e) => onChange(e.value)}
                                onBlur={onBlur}
                                selected={value} />
                        )}

                        rules={{ required: false }}
                    />
                </div>
                <button className="text-gray-800 mt-2 text-sm hover:underline hvoer:text-blue-500" type="button" onClick={next}>Omitir</button>
            </Transition>
        </div>
    )
}

const StepInfoEmpresa = ({ register, control, Controller, errors, setValue }) => {
    const dispatch = useDispatch();
    const { gaveResult, loadingRucSearch } = useSelector(({ asociado }) => asociado)

    const [type, settype] = useState('text')
    return (<div className="w-full">
        <Transition
            show={true}
            appear={true}
            enter="transform transition duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transform duration-200 transition ease-in-out"
            leaveFrom="opacity-100 "
        >
            <p className="font-bold text-3xl mb-10 text-center ">Queremos saber más de tu empresa</p>
            <p className="font-bold text-gray-800 mb-3">Información de la empresa</p>
            <div className="flex flex-col gap-3 lg:gap-4 mb-7">
                <div className="flex flex-wrap lg:flex-nowrap gap-3 lg:gap-5">
                    <div className="flex w-full lg:w-1/3">
                        <input className={`shadow-sm appearance-none border rounded-l-md w-full h-10 text-gray-700 placeholder-gray-400 leading-tight focus:outline-none focus:shadow-outline border-gray-200 ${gaveResult ? 'bg-gray-200' : ''}`}
                            id="ruc" type="text"
                            placeholder="RUC *"
                            readOnly={gaveResult}
                            {...register("ruc", { required: true })}
                        />
                        <button type="button"
                            className="w-14 flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-r-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                            onClick={() => {
                                if (gaveResult) {
                                    dispatch(resetSearchRuc(setValue));
                                } else {
                                    dispatch(searchRuc(document.getElementById('ruc').value, setValue));
                                }
                            }}>
                            {
                                loadingRucSearch ?
                                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    :
                                    (
                                        gaveResult ?
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                                            </svg>
                                            :
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                                            </svg>
                                    )
                            }
                        </button>
                    </div>
                    <div className="flex w-full lg:w-2/3">
                        <input className={`${gaveResult ? 'bg-gray-200' : ''} shadow-sm appearance-none border rounded-md w-full h-10 text-gray-700 placeholder-gray-400 leading-tight focus:outline-none focus:shadow-outline border-gray-200`}
                            id="razonsocial" type="text"
                            placeholder="Razón Social *"
                            readOnly={gaveResult}
                            {...register("razonsocial", { required: true })}
                        />
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row gap-3">
                    <div className="flex w-full lg:w-1/2">
                        <input className="shadow-sm appearance-none border rounded-md w-full h-10 text-gray-700 placeholder-gray-400 leading-tight focus:outline-none focus:shadow-outline border-gray-200"
                            id="actividad" type="text"
                            placeholder="Actividad de su empresa *"
                            {...register("actividad", { required: true })}
                        />
                    </div>
                    <div className="flex flex-wrap w-full lg:w-1/2 pb-0 mb-0 relative">
                        <Controller
                            name="comitegremial"
                            control={control}
                            render={({ field: { onChange, onBlur, value, ref } }) => (
                                <SearchComiteGremial
                                    onChange={(e) => onChange(e.value)}
                                    onBlur={onBlur}
                                    selected={value} />
                            )}

                            rules={{ required: "Campo requerido" }}
                        />
                        <div className="flex text-red-500 mt-0 mx-2">
                            {errors.comitegremial && errors.comitegremial.message}
                        </div>
                    </div>
                </div>
                <div className="flex w-full lg:w-1/2">
                    <input className="shadow-sm appearance-none border rounded-md w-full h-10 text-gray-700 placeholder-gray-400 leading-tight focus:outline-none focus:shadow-outline border-gray-200"
                        id="fundacion" type={type}
                        placeholder="Fundación *"
                        onFocus={() => settype('date')}
                        onBlur={() => settype('text')}
                        {...register("fundacion", { required: true })}
                    />
                </div>
            </div>
            <p className="font-bold text-gray-800 mb-3">¿Cómo nos podemos contactar?</p>
            <div className="flex flex-col gap-3 lg:gap-4">
                <div className="flex flex-col lg:flex-row gap-3">
                    <div className="flex w-full lg:w-1/2">
                        <input className={`${gaveResult ? 'bg-gray-200' : ''} shadow-sm appearance-none border rounded-md w-full h-10 text-gray-700 placeholder-gray-400 leading-tight focus:outline-none focus:shadow-outline border-gray-200`}
                            id="direccionfiscal" type="text"
                            placeholder="Dirección Jurídica *"
                            readOnly={gaveResult}
                            {...register("direccionfiscal", { required: true })}
                        />
                    </div>
                    <div className="flex w-full lg:w-1/2">
                        <input className="shadow-sm appearance-none border rounded-md w-full h-10 text-gray-700 placeholder-gray-400 leading-tight focus:outline-none focus:shadow-outline border-gray-200"
                            id="direccionsocial" type="text"
                            placeholder="Dirección para entrega de documentos"
                            {...register("direccionsocial", { required: false })}
                        />
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row gap-3">
                    <div className="flex w-full lg:w-1/2">
                        <input className="shadow-sm appearance-none border rounded-md w-full h-10 text-gray-700 placeholder-gray-400 leading-tight focus:outline-none focus:shadow-outline border-gray-200"
                            id="telefono_asociado" type="tel"
                            placeholder="Teléfono"
                            {...register("telefono_asociado", { required: false })}
                        />
                    </div>
                    <div className="flex w-full lg:w-1/2">
                        <input className="shadow-sm appearance-none border rounded-md w-full h-10 text-gray-700 placeholder-gray-400 leading-tight focus:outline-none focus:shadow-outline border-gray-200"
                            id="correo_asociado" type="email"
                            placeholder="Correo"
                            {...register("correo_asociado", { required: false })}
                        />
                    </div>
                </div>
            </div>
        </Transition></div>)
}

const StepInfoRep = ({ register, control, Controller, errors }) => {
    const [type, settype] = useState('text')
    return (<div className="w-full">
        <Transition
            show={true}
            appear={true}
            enter="transform transition duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transform duration-200 transition ease-in-out"
            leaveFrom="opacity-100 "
        >
            <p className="font-bold text-3xl mb-10 text-center ">Queremos saber de tu representante</p>
            <div className="flex flex-col gap-3 lg:gap-4">
                <div className="flex flex-col lg:flex-row gap-2 lg:gap-5 w-full">
                    <div className="flex w-full lg:w-4/12">
                        <div className="flex flex-wrap w-full pb-0 mb-0 relative">
                            <Controller
                                name="tipodocumento_representante"
                                control={control}
                                render={({ field: { onChange, onBlur, value, ref } }) => (
                                    <Select
                                        placeholder="Tipo de documento *"
                                        instanceId="SearchTipoDocumentoRepresentante"
                                        styles={{
                                            control: (provided, state) => ({
                                                ...provided,
                                                boxShadow: "none",
                                                border: "none"
                                            }),
                                            input: (base) => ({
                                                ...base,
                                                'input:focus': {
                                                    boxShadow: 'none',
                                                },
                                            }),
                                        }}
                                        name="SearchTipoDocumentoRepresentante"
                                        className="shadow-sm appearance-none border rounded-md w-full text-gray-700 placeholder-gray-400 leading-tight focus:outline-none focus:shadow-outline border-gray-200 h-10"
                                        isClearable={true}
                                        onChange={(e) => onChange(e.value)}
                                        onBlur={onBlur}
                                        selected={value}
                                        options={[{ value: 1, label: "DNI" }, { value: 6, label: "RUC" }, { value: 4, label: "Carnet de extranjería" }, { value: 7, label: "Pasaporte" }]}
                                        value={[{ value: 1, label: "DNI" }, { value: 6, label: "RUC" }, { value: 4, label: "Carnet de extranjería" }, { value: 7, label: "Pasaporte" }].find(c => c.value === value)}
                                    />
                                )}

                                rules={{ required: "Campo requerido" }}
                            />
                            <div className="flex text-red-500 mt-0 mx-2">
                                {errors.tipodocumento_representante && errors.tipodocumento_representante.message}
                            </div>
                        </div>
                    </div>
                    <div className="flex w-full lg:w-4/12">
                        <input className="shadow-sm appearance-none border rounded-md w-full h-10 text-gray-700 placeholder-gray-400 leading-tight focus:outline-none focus:shadow-outline border-gray-200"
                            id="documento_representante" type="text"
                            placeholder="Documento *"
                            {...register("documento_representante", { required: true })}
                        />
                    </div>
                    <div className="flex w-full lg:w-4/12"></div>
                </div>
                <div className="flex flex-col lg:flex-row gap-2 lg:gap-5">
                    <div className="flex w-full lg:w-4/12">
                        <input className="shadow-sm appearance-none border rounded-md w-full h-10 text-gray-700 placeholder-gray-400 leading-tight focus:outline-none focus:shadow-outline border-gray-200"
                            id="nombres_representante" type="text"
                            placeholder="Nombres *"
                            {...register("nombres_representante", { required: true })}
                        />
                    </div>
                    <div className="flex w-full lg:w-4/12">
                        <input className="shadow-sm appearance-none border rounded-md w-full h-10 text-gray-700 placeholder-gray-400 leading-tight focus:outline-none focus:shadow-outline border-gray-200"
                            id="paterno_representante" type="text"
                            placeholder="Apellido Paterno *"
                            {...register("paterno_representante", { required: true })}
                        />
                    </div>
                    <div className="flex w-full lg:w-4/12">
                        <input className="shadow-sm appearance-none border rounded-md w-full h-10 text-gray-700 placeholder-gray-400 leading-tight focus:outline-none focus:shadow-outline border-gray-200"
                            id="materno_representante" type="text"
                            placeholder="Apellido Materno *"
                            {...register("materno_representante", { required: true })}
                        />
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row gap-2 lg:gap-5">
                    <div className="flex w-full lg:w-4/12">
                        <input className="shadow-sm appearance-none border rounded-md w-full h-10 text-gray-700 placeholder-gray-400 leading-tight focus:outline-none focus:shadow-outline border-gray-200"
                            id="fechanacimiento_representante" type={type}
                            placeholder="Fecha Nacimiento *"
                            onFocus={() => settype('date')}
                            onBlur={() => settype('text')}
                            {...register("fechanacimiento_representante", { required: true })}
                        />
                    </div>
                    <div className="flex w-full lg:w-4/12">
                        <input className="shadow-sm appearance-none border rounded-md w-full h-10 text-gray-700 placeholder-gray-400 leading-tight focus:outline-none focus:shadow-outline border-gray-200"
                            id="telefono_representante" type="tel"
                            placeholder="Teléfono"
                            {...register("telefono_representante", { required: false })}
                        />
                    </div>
                    <div className="flex w-full lg:w-4/12">
                        <input className="shadow-sm appearance-none border rounded-md w-full h-10 text-gray-700 placeholder-gray-400 leading-tight focus:outline-none focus:shadow-outline border-gray-200"
                            id="correo_representante" type="email"
                            placeholder="Correo"
                            {...register("correo_representante", { required: false })}
                        />
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row gap-2 lg:gap-5">
                    <div className="flex w-full lg:w-4/12">
                        <input className="shadow-sm appearance-none border rounded-md w-full h-10 text-gray-700 placeholder-gray-400 leading-tight focus:outline-none focus:shadow-outline border-gray-200"
                            id="cargo_representante" type="text"
                            placeholder="Cargo *"
                            {...register("cargo_representante", { required: true })}
                        />
                    </div>
                    <div className="flex w-full lg:w-4/12"></div>
                    <div className="flex w-full lg:w-4/12"></div>
                </div>
            </div>
        </Transition>
    </div>)
}

const StepInfoSegRep = ({ register, control, Controller, errors }) => {
    const [type, settype] = useState('text')
    return (
        <div className="w-full">
            <Transition
                show={true}
                appear={true}
                enter="transform transition duration-500"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transform duration-200 transition ease-in-out"
                leaveFrom="opacity-100 "
            >
                <p className="font-bold text-3xl mb-10 text-center ">Contacto Adicional <small className="text-blue-500">(Opcional)</small></p>
                <div className="flex flex-col gap-3 lg:gap-4">
                    <div className="flex flex-col lg:flex-row gap-2 lg:gap-5 w-full">
                        <div className="flex w-full lg:w-4/12">
                            <div className="flex flex-wrap w-full pb-0 mb-0 relative">
                                <Controller
                                    name="tipodocumento_adicional"
                                    control={control}
                                    render={({ field: { onChange, onBlur, value, ref } }) => (
                                        <Select
                                            placeholder="Tipo de documento"
                                            instanceId="SearchTipoDocumentoadicional"
                                            styles={{
                                                control: (provided, state) => ({
                                                    ...provided,
                                                    boxShadow: "none",
                                                    border: "none"
                                                }),
                                                input: (base) => ({
                                                    ...base,
                                                    'input:focus': {
                                                        boxShadow: 'none',
                                                    },
                                                }),
                                            }}
                                            name="SearchTipoDocumentoadicional"
                                            className="shadow-sm appearance-none border rounded-md w-full text-gray-700 placeholder-gray-400 leading-tight focus:outline-none focus:shadow-outline border-gray-200 h-10"
                                            isClearable={false}
                                            onChange={(e) => onChange(e.value)}
                                            onBlur={onBlur}
                                            selected={value}
                                            options={[{ value: 1, label: "DNI" }, { value: 6, label: "RUC" }, { value: 4, label: "Carnet de extranjería" }, { value: 7, label: "Pasaporte" }]}
                                            value={[{ value: 1, label: "DNI" }, { value: 6, label: "RUC" }, { value: 4, label: "Carnet de extranjería" }, { value: 7, label: "Pasaporte" }].find(c => c.value === value)}
                                        />
                                    )}

                                    rules={{ required: false }}
                                />
                                <div className="flex text-red-500 mt-0 mx-2">
                                    {errors.tipodocumento_adicional && errors.tipodocumento_adicional.message}
                                </div>
                            </div>
                        </div>
                        <div className="flex w-full lg:w-4/12">
                            <input className="shadow-sm appearance-none border rounded-md w-full h-10 text-gray-700 placeholder-gray-400 leading-tight focus:outline-none focus:shadow-outline border-gray-200"
                                id="documento_adicional" type="text"
                                placeholder="Documento"
                                {...register("documento_adicional", { required: false })}
                            />
                        </div>
                        <div className="flex w-full lg:w-4/12"></div>
                    </div>
                    <div className="flex flex-col lg:flex-row gap-2 lg:gap-5">
                        <div className="flex w-full lg:w-4/12">
                            <input className="shadow-sm appearance-none border rounded-md w-full h-10 text-gray-700 placeholder-gray-400 leading-tight focus:outline-none focus:shadow-outline border-gray-200"
                                id="nombres_adicional" type="text"
                                placeholder="Nombres"
                                {...register("nombres_adicional", { required: false })}
                            />
                        </div>
                        <div className="flex w-full lg:w-4/12">
                            <input className="shadow-sm appearance-none border rounded-md w-full h-10 text-gray-700 placeholder-gray-400 leading-tight focus:outline-none focus:shadow-outline border-gray-200"
                                id="paterno_adicional" type="text"
                                placeholder="Apellido Paterno"
                                {...register("paterno_adicional", { required: false })}
                            />
                        </div>
                        <div className="flex w-full lg:w-4/12">
                            <input className="shadow-sm appearance-none border rounded-md w-full h-10 text-gray-700 placeholder-gray-400 leading-tight focus:outline-none focus:shadow-outline border-gray-200"
                                id="materno_adicional" type="text"
                                placeholder="Apellido Materno"
                                {...register("materno_adicional", { required: false })}
                            />
                        </div>
                    </div>
                    <div className="flex flex-col lg:flex-row gap-2 lg:gap-5">
                        <div className="flex w-full lg:w-4/12">
                            <input className="shadow-sm appearance-none border rounded-md w-full h-10 text-gray-700 placeholder-gray-400 leading-tight focus:outline-none focus:shadow-outline border-gray-200"
                                id="fechanacimiento_adicional" type={type}
                                placeholder="Fecha Nacimiento"
                                onFocus={() => settype('date')}
                                onBlur={() => settype('text')}
                                {...register("fechanacimiento_adicional", { required: false })}
                            />
                        </div>
                        <div className="flex w-full lg:w-4/12">
                            <input className="shadow-sm appearance-none border rounded-md w-full h-10 text-gray-700 placeholder-gray-400 leading-tight focus:outline-none focus:shadow-outline border-gray-200"
                                id="telefono_adicional" type="tel"
                                placeholder="Teléfono"
                                {...register("telefono_adicional", { required: false })}
                            />
                        </div>
                        <div className="flex w-full lg:w-4/12">
                            <input className="shadow-sm appearance-none border rounded-md w-full h-10 text-gray-700 placeholder-gray-400 leading-tight focus:outline-none focus:shadow-outline border-gray-200"
                                id="correo_adicional" type="email"
                                placeholder="Correo"
                                {...register("correo_adicional", { required: false })}
                            />
                        </div>
                    </div>
                    <div className="flex flex-col lg:flex-row gap-2 lg:gap-5">
                        <div className="flex w-full lg:w-4/12">
                            <input className="shadow-sm appearance-none border rounded-md w-full h-10 text-gray-700 placeholder-gray-400 leading-tight focus:outline-none focus:shadow-outline border-gray-200"
                                id="cargo_adicional" type="text"
                                placeholder="Cargo"
                                {...register("cargo_adicional", { required: false })}
                            />
                        </div>
                        <div className="flex w-full lg:w-4/12"></div>
                        <div className="flex w-full lg:w-4/12"></div>
                    </div>
                </div>
            </Transition>
        </div>)
}

const StepInfoPersona = ({ register, control, Controller, errors }) => {
    const [type, settype] = useState('text')
    return (<div className="w-full">
        <Transition
            show={true}
            appear={true}
            enter="transform transition duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transform duration-200 transition ease-in-out"
            leaveFrom="opacity-100 "
        >
            <p className="font-bold text-2xl mb-3 text-center ">Cuéntanos más de ti</p>
            <p className="font-bold text-gray-800 mb-3">Información personal</p>
            <div className="flex flex-col gap-4 mb-7">
                <div className="flex flex-col lg:flex-row gap-2 lg:gap-4 w-full lg:w-8/12">
                    <div className="flex w-full lg:w-1/2">
                        <div className="flex flex-wrap w-full pb-0 mb-0 relative">
                            <Controller
                                name="tipodocumento_persona"
                                control={control}
                                render={({ field: { onChange, onBlur, value, ref } }) => (
                                    <Select
                                        placeholder="Tipo de documento *"
                                        instanceId="SearchTipoDocumentopersona"
                                        styles={{
                                            control: (provided, state) => ({
                                                ...provided,
                                                boxShadow: "none",
                                                border: "none"
                                            }),
                                            input: (base) => ({
                                                ...base,
                                                'input:focus': {
                                                    boxShadow: 'none',
                                                },
                                            }),
                                        }}
                                        name="SearchTipoDocumentopersona"
                                        className="shadow-sm appearance-none border rounded-md w-full text-gray-700 placeholder-gray-400 leading-tight focus:outline-none focus:shadow-outline border-gray-200 h-10"
                                        isClearable={true}
                                        onChange={(e) => onChange(e.value)}
                                        onBlur={onBlur}
                                        selected={value}
                                        options={[{ value: 1, label: "DNI" }, { value: 6, label: "RUC" }, { value: 4, label: "Carnet de extranjería" }, { value: 7, label: "Pasaporte" }]}
                                        value={[{ value: 1, label: "DNI" }, { value: 6, label: "RUC" }, { value: 4, label: "Carnet de extranjería" }, { value: 7, label: "Pasaporte" }].find(c => c.value === value)}
                                    />
                                )}

                                rules={{ required: "Campo requerido" }}
                            />
                            <div className="flex text-red-500 mt-0 mx-2">
                                {errors.tipodocumento_persona && errors.tipodocumento_persona.message}
                            </div>
                        </div>
                    </div>
                    <div className="flex w-full lg:w-1/2">
                        <input className="shadow-sm appearance-none border rounded-md w-full h-10 text-gray-700 placeholder-gray-400 leading-tight focus:outline-none focus:shadow-outline border-gray-200"
                            id="documento_persona" type="text"
                            placeholder="Documento *"
                            {...register("documento_persona", { required: true })}
                        />
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row gap-2 lg:gap-4">
                    <div className="flex w-full lg:w-4/12">
                        <input className="shadow-sm appearance-none border rounded-md w-full h-10 text-gray-700 placeholder-gray-400 leading-tight focus:outline-none focus:shadow-outline border-gray-200"
                            id="nombres_persona" type="text"
                            placeholder="Nombres *"
                            {...register("nombres_persona", { required: true })}
                        />
                    </div>
                    <div className="flex w-full lg:w-4/12">
                        <input className="shadow-sm appearance-none border rounded-md w-full h-10 text-gray-700 placeholder-gray-400 leading-tight focus:outline-none focus:shadow-outline border-gray-200"
                            id="paterno_persona" type="text"
                            placeholder="Apellido Paterno *"
                            {...register("paterno_persona", { required: true })}
                        />
                    </div>
                    <div className="flex w-full lg:w-4/12">
                        <input className="shadow-sm appearance-none border rounded-md w-full h-10 text-gray-700 placeholder-gray-400 leading-tight focus:outline-none focus:shadow-outline border-gray-200"
                            id="materno_persona" type="text"
                            placeholder="Apellido Materno *"
                            {...register("materno_persona", { required: true })}
                        />
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row gap-2 lg:gap-4">
                    <div className="flex flex-wrap w-full lg:w-4/12 pb-0 mb-0 relative">
                        <Controller
                            name="sexo"
                            control={control}
                            render={({ field: { onChange, onBlur, value, ref } }) => (
                                <Select
                                    placeholder="Sexo *"
                                    instanceId="SelectSexo"
                                    styles={{
                                        control: (provided, state) => ({
                                            ...provided,
                                            boxShadow: "none",
                                            border: "none"
                                        }),
                                        input: (base) => ({
                                            ...base,
                                            'input:focus': {
                                                boxShadow: 'none',
                                            },
                                        }),
                                    }}
                                    name="SelectSexo"
                                    className="shadow-sm appearance-none border rounded-md w-full text-gray-700 placeholder-gray-400 leading-tight focus:outline-none focus:shadow-outline border-gray-200 h-10"
                                    isClearable={true}
                                    onChange={(e) => onChange(e.value)}
                                    onBlur={onBlur}
                                    selected={value}
                                    options={[{ value: 1, label: 'Hombre' }, { value: 2, label: 'Mujer' }]}
                                    value={[{ value: 1, label: 'Hombre' }, { value: 2, label: 'Mujer' }].find(c => c.value === value)}
                                />
                            )}

                            rules={{ required: "Campo requerido" }}
                        />
                        <div className="flex text-red-500 mt-0 mx-2">
                            {errors.sexo && errors.sexo.message}
                        </div>
                    </div>
                    <div className="flex w-full lg:w-4/12">
                        <input className="shadow-sm appearance-none border rounded-md w-full h-10 text-gray-700 placeholder-gray-400 leading-tight focus:outline-none focus:shadow-outline border-gray-200"
                            id="fechanacimiento_persona" type={type}
                            placeholder="Fecha Nacimiento *"
                            onFocus={() => settype('date')}
                            onBlur={() => settype('text')}
                            {...register("fechanacimiento_persona", { required: true })}
                        />
                    </div>
                    <div className="flex w-full lg:w-4/12">
                        <input className="shadow-sm appearance-none border rounded-md w-full h-10 text-gray-700 placeholder-gray-400 leading-tight focus:outline-none focus:shadow-outline border-gray-200"
                            id="actividad_persona" type="text"
                            placeholder="Actividad/Profesión *"
                            {...register("actividad_persona", { required: true })}
                        />
                    </div>
                </div>
                <div className="flex flex-wrap w-full pb-0 mb-0 relative">
                    <Controller
                        name="comitegremial"
                        control={control}
                        render={({ field: { onChange, onBlur, value, ref } }) => (
                            <SearchComiteGremial
                                onChange={(e) => onChange(e.value)}
                                onBlur={onBlur}
                                selected={value} />
                        )}

                        rules={{ required: "Campo requerido" }}
                    />
                    <div className="flex text-red-500 mt-0 mx-2">
                        {errors.comitegremial && errors.comitegremial.message}
                    </div>
                </div>
            </div>
            <p className="font-bold text-gray-800 mb-3">¿Cómo nos podemos contactar?</p>
            <div className="flex flex-col gap-4">
                <div className="flex flex-col lg:flex-row gap-2 lg:gap-4">
                    <div className="flex w-full lg:w-1/2">
                        <input className="shadow-sm appearance-none border rounded-md w-full h-10 text-gray-700 placeholder-gray-400 leading-tight focus:outline-none focus:shadow-outline border-gray-200"
                            id="direccionfiscal_persona" type="text"
                            placeholder="Dirección Jurídica*"
                            {...register("direccionfiscal_persona", { required: true })}
                        />
                    </div>
                    <div className="flex w-full lg:w-1/2">
                        <input className="shadow-sm appearance-none border rounded-md w-full h-10 text-gray-700 placeholder-gray-400 leading-tight focus:outline-none focus:shadow-outline border-gray-200"
                            id="direccionsocial" type="text"
                            placeholder="Dirección para entrega de documentos"
                            {...register("direccionsocial", { required: false })}
                        />
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row gap-2 lg:gap-4">
                    <div className="flex w-full lg:w-1/2">
                        <input className="shadow-sm appearance-none border rounded-md w-full h-10 text-gray-700 placeholder-gray-400 leading-tight focus:outline-none focus:shadow-outline border-gray-200"
                            id="telefono_persona" type="tel"
                            placeholder="Teléfono"
                            {...register("telefono_persona", { required: false })}
                        />
                    </div>
                    <div className="flex w-full lg:w-1/2">
                        <input className="shadow-sm appearance-none border rounded-md w-full h-10 text-gray-700 placeholder-gray-400 leading-tight focus:outline-none focus:shadow-outline border-gray-200"
                            id="correo_persona" type="email"
                            placeholder="Correo"
                            {...register("correo_persona", { required: false })}
                        />
                    </div>
                </div>
            </div>
        </Transition>
    </div>)
}

const AfiliationCompleted = () => {

    const defaultOptions = {
        loop: false,
        autoplay: true,
        animationData: lottieJson,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    const defaultOptions2 = {
        loop: false,
        autoplay: true,
        animationData: lottieJson2,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    const defaultOptions3 = {
        loop: true,
        autoplay: true,
        animationData: lottieJson3,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    return (
        <>
            <div
                className="absolute inset-0">
                <Lottie
                    options={defaultOptions}
                />
            </div>
            <div className="text-center w-full relative">
                <div
                    className="absolute inset-0 z-20">
                    <Lottie
                        options={defaultOptions3}
                    />
                </div>
                <p className="font-black text-2xl text-blue-600 z-20">¡Afiliación registrada!</p>
                <div
                    className="animate-afiliation w-10/12 h-40 lg:h-80 mx-auto overflow-hidden flex justify-center mt-8">
                    <Lottie
                        options={defaultOptions2}
                    />
                </div>
                <div className="mx-auto text-blue-600 mt-10 z-20 relative">
                    <p className="text-lg text-gray-600 leading-tight mb-3 mt-4 mx-10">Su información ha sido enviada y se ha registrado con éxito. Bienvenido a la red empresarial más grande del norte del pais. En breve estaremos comunicándonos contigo para hablarte de tus nuevos beneficios.</p>

                    <div className="w-full text-center mt-8 z-50">
                        <p className="font-bold text-sm">Compártelo</p>
                        <div className="flex justify-center mt-2">
                            <a
                                className="font-light text-white transition-all ease-in-out hover:scale-110"
                                href={`https://wa.me/?text=Me%20acabo%20de%20afiliar%20a%20la%20Camara%20de%20Comercio%20de%20Lambayeque.`}
                                data-action="share/whatsapp/share"
                                target="_blank"
                            >
                                <div className="rounded-full bg-blue-600 p-2 mr-2 flex items-center justify-center shadow-3xl">
                                    <svg viewBox="-23 -21 682 682.66669" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><path fill="white" d="m544.386719 93.007812c-59.875-59.945312-139.503907-92.9726558-224.335938-93.007812-174.804687 0-317.070312 142.261719-317.140625 317.113281-.023437 55.894531 14.578125 110.457031 42.332032 158.550781l-44.992188 164.335938 168.121094-44.101562c46.324218 25.269531 98.476562 38.585937 151.550781 38.601562h.132813c174.785156 0 317.066406-142.273438 317.132812-317.132812.035156-84.742188-32.921875-164.417969-92.800781-224.359376zm-224.335938 487.933594h-.109375c-47.296875-.019531-93.683594-12.730468-134.160156-36.742187l-9.621094-5.714844-99.765625 26.171875 26.628907-97.269531-6.269532-9.972657c-26.386718-41.96875-40.320312-90.476562-40.296875-140.28125.054688-145.332031 118.304688-263.570312 263.699219-263.570312 70.40625.023438 136.589844 27.476562 186.355469 77.300781s77.15625 116.050781 77.132812 186.484375c-.0625 145.34375-118.304687 263.59375-263.59375 263.59375zm144.585938-197.417968c-7.921875-3.96875-46.882813-23.132813-54.148438-25.78125-7.257812-2.644532-12.546875-3.960938-17.824219 3.96875-5.285156 7.929687-20.46875 25.78125-25.09375 31.066406-4.625 5.289062-9.242187 5.953125-17.167968 1.984375-7.925782-3.964844-33.457032-12.335938-63.726563-39.332031-23.554687-21.011719-39.457031-46.960938-44.082031-54.890626-4.617188-7.9375-.039062-11.8125 3.476562-16.171874 8.578126-10.652344 17.167969-21.820313 19.808594-27.105469 2.644532-5.289063 1.320313-9.917969-.664062-13.882813-1.976563-3.964844-17.824219-42.96875-24.425782-58.839844-6.4375-15.445312-12.964843-13.359374-17.832031-13.601562-4.617187-.230469-9.902343-.277344-15.1875-.277344-5.28125 0-13.867187 1.980469-21.132812 9.917969-7.261719 7.933594-27.730469 27.101563-27.730469 66.105469s28.394531 76.683594 32.355469 81.972656c3.960937 5.289062 55.878906 85.328125 135.367187 119.648438 18.90625 8.171874 33.664063 13.042968 45.175782 16.695312 18.984374 6.03125 36.253906 5.179688 49.910156 3.140625 15.226562-2.277344 46.878906-19.171875 53.488281-37.679687 6.601563-18.511719 6.601563-34.375 4.617187-37.683594-1.976562-3.304688-7.261718-5.285156-15.183593-9.253906zm0 0" /></svg>
                                </div>
                            </a>
                            <a
                                className="font-light text-white transition-all ease-in-out hover:scale-110"
                                href={`https://telegram.me/share/url?url=Me%20acabo%20de%20afiliar%20a%20la%20Camara%20de%20Comercio%20de%20Lambayeque.`}
                                target="_blank"
                            >
                                <div className="rounded-full bg-blue-600 p-2 mr-2 flex items-center justify-center shadow-3xl">
                                    <svg viewBox="0 0 24 24" focusable="false" role="img" fill="currentColor" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><title>Telegram icon</title><path d="m20.665 3.717-17.73 6.837c-1.21.486-1.203 1.161-.222 1.462l4.552 1.42 10.532-6.645c.498-.303.953-.14.579.192l-8.533 7.701h-.002l.002.001-.314 4.692c.46 0 .663-.211.921-.46l2.211-2.15 4.599 3.397c.848.467 1.457.227 1.668-.785l3.019-14.228c.309-1.239-.473-1.8-1.282-1.434z"></path></svg>
                                </div>
                            </a>
                            <a
                                className="font-light text-white transition-all ease-in-out hover:scale-110"
                                href={`http://www.facebook.com/sharer.php?s=100&p[url]=http://cclam.org.pe/&p[title]=CCLAM&p[summary]=Me acabo de afiliar a la Camara de Comercio y Produccion de Lambayeque.&p[images][0]=http://cclam.org.pe/images/logocclam.png`}
                                target="_blank"
                            >
                                <div className="rounded-full bg-blue-600 p-2 mr-2 flex items-center justify-center shadow-3xl">
                                    <svg viewBox="0 0 24 24" focusable="false" role="img" fill="currentColor" height="20" width="20" xmlns="http://www.w3.org/2000/svg" ><title>Facebook icon</title><path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"></path></svg>                                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}