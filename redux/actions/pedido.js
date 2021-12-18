import {
    FETCH_START,
    FETCH_SUCCESS,
    FETCH_ERROR,
    SUCCESS_SAVE_PEDIDO,
    SAVING_PEDIDO,
    PEDIDO_DATA,
    PEDIDO_ERRORS
} from "../types";
import axios from '../../util/Api';

export const paypedidoweb = (params) => {
    return (dispatch) => {
      dispatch({ type: FETCH_START });
      axios.post('/paypedidoweb',params
      ).then(({ data }) => {
        dispatch({ type: FETCH_SUCCESS });
        dispatch({ type: SUCCESS_SAVE_PEDIDO, payload: 200});
      }).catch(function (error) {
        dispatch({ type: FETCH_ERROR, payload: error });
        dispatch({ type: SAVING_PEDIDO, payload: false });
      });
    }
  };
export const generateorder = (params) => {
    return (dispatch) => {
      dispatch({ type: FETCH_START });
      dispatch({ type: SAVING_PEDIDO, payload: true });
      axios.post('/saveorderonline',params
      ).then(({ data }) => {
        dispatch({ type: FETCH_SUCCESS });
        if(data.error){
          dispatch({ type: PEDIDO_ERRORS, payload: data.errors});
        }else{
          dispatch({ type: SUCCESS_SAVE_PEDIDO, payload: 200});
          dispatch({ type: PEDIDO_DATA, payload: data});
        }
        dispatch({ type: SAVING_PEDIDO, payload: false });
      }).catch(function (error) {
        dispatch({ type: FETCH_ERROR, payload: error });
        dispatch({ type: SAVING_PEDIDO, payload: false });
      });
    }
  };

  export const resetSuccessPedido = (params) => {
    return (dispatch) => {
      dispatch({ type: SUCCESS_SAVE_PEDIDO, payload: 0});
    }
  };


  export const resetErrors=(data)=>{
    return (dispatch) => {
      dispatch({ type: PEDIDO_ERRORS, payload: data});
    }
  }

