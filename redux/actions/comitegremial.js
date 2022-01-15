import {
    FETCH_ERROR,
    FETCH_SUCCESS,
    FILTER_COMITE_GREMIAL,
    LOADING_COMITE_GREMIAL
  } from "../types";
  import axios from '../../util/Api'
  
  export const filter = (search="") => {
    return (dispatch) => {
      dispatch({ type: LOADING_COMITE_GREMIAL, payload:true });
      axios.post('auth/comiteFilterData',
      {
          "search": search
      }
      ).then(({data}) => {
        if (data) {
          dispatch({ type: FETCH_SUCCESS });
          dispatch({ type: FILTER_COMITE_GREMIAL, payload: data });
        } else {
          dispatch({ type: FETCH_ERROR, payload: data.error });
        }
        dispatch({ type: LOADING_COMITE_GREMIAL, payload:false });
      }).catch(function (error) {
        dispatch({ type: FETCH_ERROR, payload: error });
        dispatch({ type: LOADING_COMITE_GREMIAL, payload:false });
      });
    }
  };