import { useRouter } from "next/router"
import Head from 'next/head'
import Layout from '../../components/layout'
import { useDispatch, useSelector } from "react-redux";
import { RadioGroup } from '@headlessui/react'
import { useEffect, useRef, useState } from "react"
import { toSoles, withLeftZeros } from "../../util/Helper"
import { getOne } from "../../redux/actions/concepto"
import { check, resetdcto } from "../../redux/actions/descuento"
import { generateorder, paypedidoweb, resetSuccessPedido, resetErrors } from "../../redux/actions/pedido"
import { initIziForm, resetIziForm } from "../../redux/actions/izi"
import { useForm } from "react-hook-form";
import Link from 'next/link'
import KRGlue from "@lyracom/embedded-form-glue"

import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
import Lottie from 'react-lottie'
import moment from "moment";
import 'moment/locale/es';
import lottieJson from '../../public/animations/lf30_editor_8knd39fu.json'
moment.locale('es')
import Image from 'next/image'

export default function RealizarPago() {
  const [showComponent, setshowComponent] = useState(0);
  const [paiddata, setpaiddata] = useState(null)
  useEffect(() => {
    return () => {
      setshowComponent(0)
      setpaiddata(null)
    }
  }, [])
  return (
    <Layout>
      <Head>
        <title>CCLAM | Orden de servicio</title>
        <link
          rel="stylesheet"
          href="https://static.micuentaweb.pe/static/js/krypton-client/V4.0/ext/classic.css"
        />
        <script src="https://static.micuentaweb.pe/static/js/krypton-client/V4.0/ext/classic.js"></script>
      </Head>
      <section className="min-h-screen relative">
        {
          showComponent === 0 ?
            <RegistrarInfo handleEndForm={setshowComponent} setpaiddata={setpaiddata} /> :
            (
              showComponent === 1 ?
                <>
                  <SuccessOrder />
                  <Link href="/">
                    <a className="text-blue-600 py-2 px-3 rounded-full flex font-medium justify-center mt-3 hover:text-blue-700 w-max mx-auto transition-all duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 my-auto mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                      </svg>
                      Regresar
                    </a>
                  </Link>
                </>
                :
                <SuccessPayment paiddata={paiddata} />
            )
        }
      </section>
    </Layout>
  );
}

const plans = [
  {
    id: 2,
    imageComp: <Image src={`${process.env.STORAGE_URL_FT}/svgs/tarjetas.svg`} width="150" height="40" className="mt-3" layout="fixed" alt="tarjetasdepagos" />,
    name: 'Pago online',
    description: 'Realiza tu pago por tu nuestra plataforma y recibe tu número y comprobante de pago.'
  },
  {
    id: 1,
    imageComp: <Image src={`${process.env.STORAGE_URL_FT}/images/bbvaybcp.png`} width="130" height="25" className="mt-3" objectFit="contain" alt="tarjetasdepagos" />,
    name: 'Transferencia bancaria',
    description: 'Genera el pedido y realiza tu pago directamente en alguna de nuestras cuentas bancarias referenciando tu número de orden y recibe tu servicio después de que nuestro equipo corrobore el pago correspondiente.'
  }
]

const RegistrarInfo = ({ handleEndForm, setpaiddata }) => {
  const dispatch = useDispatch();
  const Router = useRouter();
  const { conceptoFound } = useSelector(({ concepto }) => concepto);
  const { infoDcto, searchingDcto } = useSelector(({ descuento }) => descuento);
  const { loadingPedido, successPedido } = useSelector(({ pedido }) => pedido);
  const { formDataIzi, errorIzi } = useSelector(({ izi }) => izi);
  const [payFormLoaded, setpayFormLoaded] = useState(false)
  const [payMethod, setpayMethod] = useState(null)
  const [codDcto, setcodDcto] = useState("");
  const router = useRouter()
  const { register, handleSubmit, reset } = useForm();
  const [typeDoc, settypeDoc] = useState(null);
  const { pedidoErrors } = useSelector(({ pedido }) => pedido);
  const [error, seterror] = useState(null);
  const [done, setdone] = useState(false)
  const {
    query: { servicio },
  } = router

  useEffect(() => {
    setdone(false)
    dispatch(resetSuccessPedido())
    dispatch(resetIziForm())
  }, [])

  useEffect(() => {
    if (servicio) {
      dispatch(getOne(servicio));
    }
  }, [servicio, dispatch])

  useEffect(() => {
    if (typeof (conceptoFound) != 'object') {
      Router.replace("/");
    }
  }, [conceptoFound, dispatch])

  const handleCheckDcto = () => {
    dispatch(check({ "codigo": codDcto }));
  }

  const handleResetDcto = () => {
    setcodDcto("")
    dispatch(resetdcto());
  }

  useEffect(() => {
    if (formDataIzi) {
      window.scrollTo(0, 0)
      let endpoint = "https://api.micuentaweb.pe";
      let publicKey = process.env.REACT_APP_IZI_PUBLIC_KEY;
      let formToken = formDataIzi;
      KRGlue.loadLibrary(endpoint, publicKey)
        .then(({ KR }) =>
          KR.setFormConfig({
            formToken: formToken,
            "kr-language": "es-ES"
          })
        )
        .then(({ KR }) => {
          setpayFormLoaded(true)
          return KR.addForm("#myPaymentForm")
        })
        .then(({ KR, result }) => {
          KR.showForm(result.formId)
          KR.onSubmit((res) => {
            console.log(res)
            dispatch(paypedidoweb({ "pedido_id": res.clientAnswer.orderDetails.orderId, "iziresponse": res.clientAnswer }))
            if (res.clientAnswer.orderStatus === 'PAID' || res.clientAnswer.orderStatus === 'PARTIALLY_PAID' || res.clientAnswer.orderStatus === 'RUNNING') {
              setpaiddata(res.clientAnswer);
              handleEndForm(payMethod.id)
            } else {
              seterror("No se pudo completar la transacción.");
            }
          })
        })
        .catch(e => {
          seterror("Error en la transacción")
        });
    }
  }, [formDataIzi])

  const onSubmit = (data) => {
    {
      if (payMethod) {
        data.servid = conceptoFound.id;
        data.dctoid = infoDcto?.id;
        data.tipoDoc = typeDoc;
        setcodDcto("")
        let final = data;
        if (final.tipoDoc === "RUC") {
          final.razonsocial = final.nombres;
          final.ruc = final.documento;
          delete final.nombres;
          delete final.paterno;
          delete final.materno;
          delete final.documento;
        } else {
          final.dni = final.documento;
          delete final.documento;
        }
        if (payMethod.id == 1) {
          dispatch(generateorder(final))
        } else {
          dispatch(initIziForm(final))
        }
        setdone(true)
      }
    }
  }

  useEffect(() => {
    if (successPedido === 200 && done) {
      resetWhenEnd()
    }
  }, [successPedido,dispatch]);

  const resetWhenEnd=()=>{
    dispatch(resetSuccessPedido())
    window.scrollTo(0, 0)
    handleEndForm(payMethod.id)
    setpayFormLoaded(false)
    dispatch(resetIziForm())
    setdone(false)
  }

  const handleBack = () => {
    setpayFormLoaded(false)
    dispatch(resetIziForm())
  }

  const handleResetError = (keys) => {
    if (pedidoErrors == null || keys == null) return
    let errorstmp = pedidoErrors;
    keys.forEach(kk => {
      delete errorstmp[kk]
    });
    dispatch(resetErrors(errorstmp))
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full grid grid-cols-6 gap-2 pt-32 px-5">
      <div className="p-5 col-span-6 lg:col-span-2 bg-white shadow-sm rounded-2xl">
        <p className="font-semibold text-xl">Resumen de pedido</p>
        <div className="flex justify-between">
          <p className="mt-4 text-gray-500">Servicio</p>
          <p className="mt-4 text-gray-500">Precio</p>
        </div>
        <div className="flex justify-between mt-1">
          <div className="w-4/6"><p>{conceptoFound?.servicio}</p></div>
          <div className="w-2/6 text-right"><p><small>S/. </small>{toSoles(conceptoFound?.precio)}</p></div>
        </div>
        <div className="flex justify-between mt-1 font-semibold">
          <div className="w-4/6"><p>Trámite virtual</p></div>
          <div className="w-2/6 text-right"><p><small>S/. </small>{toSoles(5)}</p></div>
        </div>
        <div className="col-span-6 sm:col-span-3 my-5">
          <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
            Código de descuento
          </label>
          <div className="grid grid-cols-8 gap-3">
            <input
              disabled={formDataIzi}
              onChange={(e) => setcodDcto(e.target.value ? e.target.value : "")}
              value={codDcto}
              type="text"
              name="first-name"
              id="first-name"
              autoComplete="given-name"
              className="col-span-6 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
            <button
              disabled={formDataIzi}
              type="button"
              onClick={infoDcto ? handleResetDcto : handleCheckDcto}
              className="col-span-2 py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white disabled:bg-gray-300 bg-gray-400 hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
            >
              {
                searchingDcto ?
                  <svg className="animate-spin  h-5 w-5 text-white mx-auto text-center" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  :
                  <>
                    <span className="hidden lg:block">{infoDcto ? 'Quitar' : 'Aplicar'}</span>

                    <span className="block lg:hidden text-center">
                      {
                        infoDcto ?
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                          </svg>
                          :
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mx-auto  " viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                          </svg>
                      }
                    </span>
                  </>
              }
            </button>
          </div>
          {
            infoDcto == -1 ?
              <small>Código no encontrado</small> : ""
          }
          {
            infoDcto && infoDcto != -1 ?
              <div className="flex justify-between mt-4">
                <div className="w-4/6 lg:w-4/5 font-semibold"><p>Descuento <span className="bg-gray-100 font-medium px-2 py-1 rounded-full">{infoDcto?.motivo}</span></p></div>
                <div className="w-2/6 lg:w-1/5 font-semibold text-right"><p><small>-S/. </small>{toSoles(infoDcto?.monto)}</p></div>
              </div>
              :
              ""
          }
        </div>
        <div className="flex justify-between">
          <div className="w-4/6 font-semibold"><p>Subtotal</p></div>
          <div className="w-2/6 font-semibold text-right"><p><small>S/. </small>{toSoles((conceptoFound?.precio + 5 - (infoDcto?.monto ?? 0)) / 1.18)}</p></div>
        </div>
        <div className="flex justify-between">
          <div className="w-4/6 font-semibold"><p>IGV</p></div>
          <div className="w-2/6 font-semibold text-right"><p><small>S/. </small>{toSoles(conceptoFound?.precio + 5 - (infoDcto?.monto ?? 0) - (conceptoFound?.precio + 5 - (infoDcto?.monto ?? 0)) / 1.18)}</p></div>
        </div>
        <div className="flex justify-between">
          <div className="w-4/6 font-semibold"><p>Total</p></div>
          <div className="w-2/6 font-semibold text-right"><p><small>S/. </small>{toSoles(conceptoFound?.precio - (infoDcto?.monto ?? 0) + 5)}</p></div>
        </div>
      </div>
      <div className="col-span-6 lg:col-span-4 p-5 bg-white shadow-sm rounded-2xl">
        {
          formDataIzi ?
            <PayIziForm error={error} handleBack={handleBack} loaded={payFormLoaded} />
            :
            <>
              <p className="font-semibold text-xl">Información de facturación</p>
              <div className="px-4 py-5 bg-white sm:p-6">
                <div className="grid grid-cols-6 gap-6">
                  <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="tipo-doc" className="block text-sm font-medium text-gray-700">
                      Tipo de documento <span className="text-red-500">*</span>
                    </label>
                    <select
                      onChange={(e) => { settypeDoc(e.target.value); handleResetError(["tipoDoc"]) }}
                      id="tipo-doc"
                      name="tipo-doc"
                      autoComplete="tipo-doc"
                      defaultValue="--Seleccione un tipo de documento--"
                      className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    >
                      <option disabled>--Seleccione un tipo de documento--</option>
                      <option>RUC</option>
                      <option>DNI</option>
                    </select>
                    {
                      pedidoErrors?.tipoDoc &&
                      <p className="text-sm mt-1 mb-0 text-red-500">{pedidoErrors?.tipoDoc[0]}</p>
                    }
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="documento" className="block text-sm font-medium text-gray-700">
                      Documento<span className="text-red-500">*</span>
                    </label>
                    <input
                      {...register("documento", { required: true })}
                      type="tel"
                      name="documento"
                      id="documento"
                      autoComplete="given-name"
                      onChange={(e) => handleResetError(["dni", "ruc"])}
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                    {
                      pedidoErrors?.dni &&
                      <p className="text-sm mt-1 mb-0 text-red-500">{pedidoErrors?.dni[0]}</p>
                    }
                    {
                      pedidoErrors?.ruc &&
                      <p className="text-sm mt-1 mb-0 text-red-500">{pedidoErrors?.ruc[0]}</p>
                    }
                  </div>
                  <div className="col-span-6">
                    <label htmlFor="nombres" className="block text-sm font-medium text-gray-700">
                      {typeDoc === "RUC" ? "Razón social" : "Nombres completos"}  <span className="text-red-500">*</span>
                    </label>
                    <input
                      {...register("nombres", { required: true })}
                      type="text"
                      name="nombres"
                      id="nombres"
                      onChange={(e) => handleResetError(["razonsocial", "nombres"])}
                      autoComplete="given-name"
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                    {
                      pedidoErrors?.razonsocial &&
                      <p className="text-sm mt-1 mb-0 text-red-500">{pedidoErrors?.razonsocial[0]}</p>
                    }
                    {
                      pedidoErrors?.nombres &&
                      <p className="text-sm mt-1 mb-0 text-red-500">{pedidoErrors?.nombres[0]}</p>
                    }
                  </div>
                  {
                    typeDoc === "RUC" ?
                      <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="direccion" className="block text-sm font-medium text-gray-700">
                          Dirección <span className="text-red-500">*</span>
                        </label>
                        <input
                          {...register("direccion", { required: true })}
                          type="text"
                          name="direccion"
                          id="direccion"
                          onChange={(e) => handleResetError(["direccion"])}
                          autoComplete="family-name"
                          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                        {
                          pedidoErrors?.direccion &&
                          <p className="text-sm mt-1 mb-0 text-red-500">{pedidoErrors?.direccion[0]}</p>
                        }
                      </div>
                      :
                      <>
                        <div className="col-span-6 sm:col-span-3">
                          <label htmlFor="paterno" className="block text-sm font-medium text-gray-700">
                            Apellido Paterno <span className="text-red-500">*</span>
                          </label>
                          <input
                            {...register("paterno", { required: true })}
                            type="text"
                            name="paterno"
                            id="paterno"
                            onChange={(e) => handleResetError(["paterno"])}
                            autoComplete="family-name"
                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                          />
                          {
                            pedidoErrors?.paterno &&
                            <p className="text-sm mt-1 mb-0 text-red-500">{pedidoErrors?.paterno[0]}</p>
                          }
                        </div>

                        <div className="col-span-6 sm:col-span-3">
                          <label htmlFor="materno" className="block text-sm font-medium text-gray-700">
                            Apellido Materno <span className="text-red-500">*</span>
                          </label>
                          <input
                            {...register("materno", { required: true })}
                            type="text"
                            name="materno"
                            id="materno"
                            onChange={(e) => handleResetError(["materno"])}
                            autoComplete="family-name"
                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                          />
                          {
                            pedidoErrors?.materno &&
                            <p className="text-sm mt-1 mb-0 text-red-500">{pedidoErrors?.materno[0]}</p>
                          }
                        </div>
                      </>
                  }
                  <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="correo" className="block text-sm font-medium text-gray-700">
                      Correo <span className="text-red-500">*</span>
                    </label>
                    <input
                      {...register("correo", {
                        required: true,
                        pattern: {
                          value: /\S+@\S+\.\S+/
                        }
                      })}
                      type="email"
                      name="correo"
                      id="correo"
                      onChange={(e) => handleResetError(["correo"])}
                      autoComplete="email"
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                    {
                      pedidoErrors?.correo &&
                      <p className="text-sm mt-1 mb-0 text-red-500">{pedidoErrors?.correo[0]}</p>
                    }
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="telefono" className="block text-sm font-medium text-gray-700">
                      Teléfono <span className="text-red-500">*</span>
                    </label>
                    <input
                      {...register("telefono", { required: true })}
                      type="tel"
                      name="telefono"
                      id="telefono"
                      onChange={(e) => handleResetError(["telefono"])}
                      autoComplete="email"
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                    {
                      pedidoErrors?.telefono &&
                      <p className="text-sm mt-1 mb-0 text-red-500">{pedidoErrors?.telefono[0]}</p>
                    }
                  </div>
                </div>
              </div>
              <p className="font-semibold text-xl mt-2">Selecciona un método de pago</p>
              <div className="px-4 py-5 bg-white sm:p-6">
                <RadioGroup value={payMethod} onChange={setpayMethod}>
                  <RadioGroup.Label className="sr-only">Modo de pago</RadioGroup.Label>
                  <div className="space-y-2">
                    {plans.map((plan) => (
                      <RadioGroup.Option
                        key={plan.name}
                        value={plan}
                        className={({ checked }) =>
                          `
                ${checked ? 'bg-blue-500 text-white' : 'bg-white'
                          }
                  relative rounded-lg shadow-md px-5 py-4 cursor-pointer flex focus:outline-none`
                        }
                      >
                        {({ checked }) => (
                          <>
                            <div className="flex items-center justify-between w-full">
                              <div className="flex items-center">
                                <div className="text-sm">
                                  <RadioGroup.Label
                                    as="div"
                                    className={`font-medium mb-1 ${checked ? 'text-white' : 'text-gray-900'
                                      }`}
                                  >
                                    {plan.name}
                                  </RadioGroup.Label>
                                  <RadioGroup.Description
                                    as="div"
                                    className={`inline  leading-none ${checked ? 'text-blue-100' : 'text-gray-500'
                                      }`}
                                  >
                                    {plan.imageComp}
                                    <p className="mt-1">
                                      {plan.description}
                                    </p>
                                  </RadioGroup.Description>
                                </div>
                              </div>

                              {checked ? (
                                <div className="flex-shrink-0 text-white">
                                  <CheckIcon className="w-6 h-6" />
                                </div>
                              ) : <div className="flex-shrink-0 text-white">
                                <div className="w-5 h-5 border border-gray-300 shadow-md rounded-full">
                                </div>
                              </div>}
                            </div>
                          </>
                        )}
                      </RadioGroup.Option>
                    ))}
                  </div>
                </RadioGroup>
                <button
                  type="submit"
                  className="mt-8 w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  {
                    loadingPedido ?
                      <svg className="animate-spin  h-5 w-5 text-white mx-auto text-center" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg> :
                      (
                        payMethod?.id === 1 ?
                          "Generar pedido"
                          : (payMethod?.id === 2 ? "Ir a pagar" : "...")
                      )
                  }
                </button>
              </div>
            </>
        }
      </div>
    </form>
  );
}

function CheckIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <circle cx={12} cy={12} r={12} fill="#fff" opacity="0.2" />
      <path
        d="M7 13l3 3 7-7"
        stroke="#fff"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

const SuccessOrder = () => {
  const { pedidoData } = useSelector(({ pedido }) => pedido);
  const imageRef = useRef();
  const pdfRef = useRef();

  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: lottieJson,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  const handleDownloadImage = async () => {
    const element = imageRef.current;
    const canvas = await html2canvas(element);

    const data = canvas.toDataURL('image/jpg');
    const link = document.createElement('a');

    if (typeof link.download === 'string') {
      link.href = data;
      link.download = `CCLAM PAGO ONLINE N°${withLeftZeros(pedidoData?.pedido?.id)}.jpg`;

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      window.open(data);
    }
  }

  const handleDownloadPdf = async () => {
    const element = imageRef.current;
    const canvas = await html2canvas(element);
    const data = canvas.toDataURL('image/png');

    const pdf = new jsPDF();
    const imgProperties = pdf.getImageProperties(data);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight =
      (imgProperties.height * pdfWidth) / imgProperties.width;
    pdf.addImage(data, 'PNG', 0, 0, pdfWidth, pdfHeight);
    pdf.save(`CCLAM PAGO ONLINE N°${withLeftZeros(pedidoData?.pedido?.id)}.pdf`);
  };

  return (
    <div className="text-center pt-14" ref={pdfRef}>
      <div className="mx-auto py-10 lg:px-10 max-w-sm lg:max-w-lg" ref={imageRef}>
        <div
          className="animate-successcard w-28 h-28 mx-auto">
          <Lottie
            options={defaultOptions}
          />
        </div>
        <p className="font-bold text-3xl">Orden N° {withLeftZeros(pedidoData?.pedido?.id)}</p>
        <p className="text-sm leading-none mb-3">(Por favor referencia este número en la transacción. )</p>
        <p className="font-bold text-blue-600 text-5xl my-4">S/.{toSoles(pedidoData?.pedido?.total)}</p>
        <p className="text-blue-600 text-lg">{pedidoData?.concepto?.descripcion}</p>
        <p className="my-2 font-medium text-2xl	">
          {pedidoData?.pedido?.documento} - {pedidoData?.pedido?.adquiriente}
        </p>
        <p>{moment(pedidoData?.pedido?.created_at).format('llll')}</p>
        <p className="text-sm font-light leading-none mt-5">La constancia del pedido se enviará al correo <span className="text-blue-600">{pedidoData?.pedido?.correo}</span></p>
      </div>
      <div className="flex flex-wrap justify-center gap-6 mx-auto">
        <button className="bg-blue-600 text-white py-2 px-3 rounded-full flex font-medium" type="button" onClick={handleDownloadImage}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          <small className="my-auto ml-1">Imagen</small>
        </button>
        <button className="bg-blue-600 text-white py-2 px-3 rounded-full flex font-medium" type="button" onClick={handleDownloadPdf}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          <small className="my-auto ml-1">PDF</small>
        </button>
      </div>
    </div>
  )
}

const PayIziForm = ({ loaded, error, handleBack }) => {
  return (
    <>
      <button onClick={handleBack} type="button" className="hover:bg-gray-100 hover:rounded-full  transition-all duration-300 ease-in-out">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 17l-5-5m0 0l5-5m-5 5h12" />
        </svg>
      </button>
      <p className="font-semibold text-sm text-center">Ya casi acabamos</p>
      <p className="font-semibold text-2xl text-center">Realiza tu pago aquí</p>
      <div className="w-max mx-auto">
        <div className="tarjetas my-8">
          <Image src={`${process.env.STORAGE_URL_FT}/svgs/tarjetas.svg`} width="871" height="130" layout="responsive" alt="tarjetasdepagos" />
        </div>
        <div className="form">
          <div className="container">
            {!loaded ?
              <svg className="animate-spin  h-5 w-5 text-blue-600 mx-auto text-center" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              : ""
            }
            <div id="myPaymentForm" className="w-max m-auto"></div>
            <div className="text-center text-red-500">{error}</div>
          </div>
        </div>
      </div>
    </>
  )

}

const SuccessPayment = ({ paiddata }) => {
  const { conceptoFound } = useSelector(({ concepto }) => concepto);
  const imageRef = useRef();
  const pdfRef = useRef();

  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: lottieJson,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  const handleDownloadImage = async () => {
    const element = imageRef.current;
    const canvas = await html2canvas(element);

    const data = canvas.toDataURL('image/jpg');
    const link = document.createElement('a');

    if (typeof link.download === 'string') {
      link.href = data;
      link.download = `CCLAM PAGO ONLINE.jpg`;

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      window.open(data);
    }
  }

  const handleDownloadPdf = async () => {
    const element = imageRef.current;
    const canvas = await html2canvas(element);
    const data = canvas.toDataURL('image/png');

    const pdf = new jsPDF();
    const imgProperties = pdf.getImageProperties(data);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight =
      (imgProperties.height * pdfWidth) / imgProperties.width;
    pdf.addImage(data, 'PNG', 0, 0, pdfWidth, pdfHeight);
    pdf.save(`CCLAM PAGO ONLINE ${new Date().getDate()}${new Date().getMonth() + 1}${new Date().getFullYear()}.pdf`);
  };

  return (
    <div className="text-center pt-14" ref={pdfRef}>
      <div className="mx-auto py-10 lg:px-10 max-w-sm" ref={imageRef}>
        <div
          className="animate-successcard w-28 h-28 mx-auto">
          <Lottie
            options={defaultOptions}
          />
        </div>
        <p className="font-bold text-lg opacity-90">Orden de pago N° {withLeftZeros(paiddata?.orderDetails?.orderId)}</p>
        <p className="font-bold text-4xl opacity-90">{`¡Pago ${paiddata?.orderStatus === 'PAID' ? 'exitoso' : paiddata?.orderStatus === 'PARTIALLY_PAID' ? 'parcialmente pagado' : 'en proceso'}!`}</p>
        <p className="font-bold text-blue-600 text-5xl my-4">S/.{toSoles(paiddata?.orderDetails?.orderTotalAmount / 100)}</p>
        <p className="text-blue-600 my-2 text-lg">{conceptoFound?.servicio}</p>
        <p className="my-2 font-medium text-2xl	">
          {`${paiddata?.customer?.billingDetails.firstName ? `${paiddata?.customer?.billingDetails.firstName} ${paiddata?.customer?.billingDetails?.lastName}` : paiddata?.customer?.billingDetails.legalName}`.toUpperCase()}
        </p>
        <p>{moment(paiddata?.serverDate).format('llll')}</p>
        <p className="text-sm font-light leading-none mt-5">La constancia de pago se enviará al correo <span className="text-blue-600">{paiddata?.customer?.email}</span></p>
      </div>
      <div className="flex flex-wrap justify-center gap-6 mx-auto">
        <button className="bg-blue-600 text-white py-2 px-3 rounded-full flex font-medium" type="button" onClick={handleDownloadImage}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          <small className="my-auto ml-1">Imagen</small>
        </button>
        <button className="bg-blue-600 text-white py-2 px-3 rounded-full flex font-medium" type="button" onClick={handleDownloadPdf}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          <small className="my-auto ml-1">PDF</small>
        </button>
      </div>
    </div>
  )
}
