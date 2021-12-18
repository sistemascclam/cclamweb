import {
    FETCH_START,
    FETCH_SUCCESS,
    FETCH_ERROR,
    FORMDATAIZI,
    SAVING_PEDIDO,
    ERROR_MESSAGE_IZI,
    PEDIDO_ERRORS
} from "../types";
import axios from '../../util/Api';

export const initIziForm = (params) => {
    return (dispatch) => {
      dispatch({ type: FETCH_START });
      dispatch({ type: SAVING_PEDIDO, payload: true });
      axios.post('/iziiniweb',params
      ).then(({ data }) => {
        dispatch({ type: FETCH_SUCCESS });
        if(data.error){
          dispatch({ type: PEDIDO_ERRORS, payload: data.errors});
        }
        if(data.message){
          dispatch({ type: ERROR_MESSAGE_IZI, payload: data.message  });
        }else{
          dispatch({ type: FORMDATAIZI, payload: data.formToken  });
        }
        dispatch({ type: SAVING_PEDIDO, payload: false });
      }).catch(function (error) {
        dispatch({ type: SAVING_PEDIDO, payload: false });
        dispatch({ type: FETCH_ERROR, payload: error });
      });
    }
  };

  
export const resetIziForm = () => {
  return (dispatch) => {
    dispatch({ type: FORMDATAIZI, payload: null  });
  }
}