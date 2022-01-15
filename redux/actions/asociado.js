import {
    FETCH_ERROR,
    FETCH_SUCCESS,
    SHOW_RUC_SEARCHED,
    LOADING_RUC_SEARCH,
    HAS_RUC_SEARCHED,
    LOADING_SAVING_AFILIATION,
    AFILIATION_SAVED
} from "../types";
import axios from '../../util/Api'

export const searchRuc = (rucSearched, setValue) => {
    return (dispatch) => {
        dispatch({ type: LOADING_RUC_SEARCH, payload: true });
        axios.get('searchRuc/' + rucSearched,
        ).then(({ data, status }) => {
            if (data) {
                dispatch({ type: FETCH_SUCCESS });
                dispatch({ type: HAS_RUC_SEARCHED, payload: data.data?.success ? data.data?.success : false });
                dispatch({ type: SHOW_RUC_SEARCHED, payload: data.data });
                setValue('razonsocial', data.data.nombre_o_razon_social)
                setValue('direccionfiscal', data.data.direccion_completa)

            } else {
                dispatch({ type: FETCH_ERROR, payload: data });
            }
            dispatch({ type: LOADING_RUC_SEARCH, payload: false });
        })
            .catch(function (error) {
                dispatch({ type: FETCH_ERROR, payload: error });
                dispatch({ type: LOADING_RUC_SEARCH, payload: false });
            });
    }
};

export const resetSearchRuc = (setValue) => {
    return (dispatch) => {
        dispatch({ type: SHOW_RUC_SEARCHED, payload: null });
        dispatch({ type: HAS_RUC_SEARCHED, payload: false });
        setValue('ruc', '')
        setValue('razonsocial', '')
        setValue('direccionfiscal', '')
    }
};

export const newAfiliation = (associatedData) => {
    return (dispatch) => {
      dispatch({ type: LOADING_SAVING_AFILIATION, payload: true });
      axios.post('auth/newafiliation',
        associatedData
      ).then(({ data, status }) => {
        if (data) {
          dispatch({ type: FETCH_SUCCESS });
          dispatch({ type: LOADING_SAVING_AFILIATION, payload: false });
          dispatch({ type: AFILIATION_SAVED, payload: true });
        } else {
          dispatch({ type: FETCH_ERROR, payload: data.message });
        }
      })
        .catch(function (error) {
        dispatch({ type: LOADING_SAVING_AFILIATION, payload: false });
          dispatch({ type: FETCH_ERROR, payload: error.response });
        });
    }
  };

  export const resetSaveAfiliation = () => {
      return (dispatch) => {
          dispatch({ type: LOADING_SAVING_AFILIATION, payload: false });
          dispatch({ type: AFILIATION_SAVED, payload: false });
      }
  };
  