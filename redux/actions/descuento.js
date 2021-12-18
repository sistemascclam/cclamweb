import {
    FETCH_START,
    FETCH_SUCCESS,
    FETCH_ERROR,
    GET_DESCUENTO,
    CHECKING_DESCUENTO
} from "../types";
import axios from '../../util/Api';


export const check = (params) => {
    return (dispatch) => {
      dispatch({ type: FETCH_START });
      dispatch({ type: CHECKING_DESCUENTO, payload: true });
      axios.post('/checkDcto',params
      ).then(({ data }) => {
        dispatch({ type: FETCH_SUCCESS });
        dispatch({ type: GET_DESCUENTO, payload: data ? data : -1 });
        dispatch({ type: CHECKING_DESCUENTO, payload: false });
      }).catch(function (error) {
        dispatch({ type: FETCH_ERROR, payload: error });
        dispatch({ type: CHECKING_DESCUENTO, payload: false });
      });
    }
  };

  export const resetdcto = (params) => {
    return (dispatch) => {
      dispatch({ type: GET_DESCUENTO, payload: null });
    }
  };