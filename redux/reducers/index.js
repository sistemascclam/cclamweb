import { combineReducers } from 'redux'
import common from  "./common"
import concepto from  "./concepto"
import descuento from  "./descuento"
import izi from  "./izi"
import pedido from  "./pedido"
import curso from  "./curso"
import noticia from  "./noticia"
import pronunciamiento from  "./pronunciamiento"
import revistadigital from  "./revistadigital"
import actividad from  "./actividad"
import promotor from  "./promotor"
import comitegremial from  "./comitegremial"
import asociado from  "./asociado"

// COMBINED REDUCERS
const reducers = {
  common: common,
  concepto: concepto,
  descuento: descuento,
  izi: izi,
  pedido: pedido,
  curso: curso,
  noticia: noticia,
  pronunciamiento: pronunciamiento,
  revistadigital: revistadigital,
  actividad: actividad,
  promotor: promotor,
  comitegremial:comitegremial,
  asociado:asociado
}

export default combineReducers(reducers)
