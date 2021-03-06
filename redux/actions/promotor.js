import {
    FETCH_ERROR,
    FETCH_SUCCESS,
    FILTER_PROMOTOR,
    LOADING_PROMOTOR
  } from "../types";
  import axios from '../../util/Api'
  
  export const filter = (search="") => {
    return (dispatch) => {
      dispatch({ type: LOADING_PROMOTOR, payload:true });
      axios.post('auth/promotorFilterData',
      {
          "search": search
      }
      ).then(({data}) => {
        if (data) {
          dispatch({ type: FETCH_SUCCESS });
          dispatch({ type: FILTER_PROMOTOR, payload: data });
        } else {
          dispatch({ type: FETCH_ERROR, payload: data.error });
        }
        dispatch({ type: LOADING_PROMOTOR, payload:false });
      }).catch(function (error) {
        dispatch({ type: FETCH_ERROR, payload: error });
        dispatch({ type: LOADING_PROMOTOR, payload:false });
      });
    }
  };