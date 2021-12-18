import {
  SUCCESS_SAVE_PEDIDO,
  SAVING_PEDIDO,
  PEDIDO_DATA,
  PEDIDO_ERRORS
} from "../types";

const INIT_STATE = {
  successPedido:0,
  loadingPedido:false,
  pedidoData: null,
  pedidoErrors: null
};

const states = (state = INIT_STATE, action) => {
  switch (action.type) {
    case SUCCESS_SAVE_PEDIDO: {
      return {
        ...state,
        successPedido:action.payload,
      }
    }
    case SAVING_PEDIDO: {
      return {
        ...state,
        loadingPedido: action.payload,
      }
    }
    case PEDIDO_DATA: {
      return {
        ...state,
        pedidoData: action.payload,
      }
    }
    case PEDIDO_ERRORS: {
      return {
        ...state,
        pedidoErrors: action.payload,
      }
    }
    default:
      return state;
  }
}
export default states;