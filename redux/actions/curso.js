import {
    FETCH_START,
    FETCH_SUCCESS,
    FETCH_ERROR,
    LIST_CURSO
} from "../types";
import axios from '../../util/Api';


export const list = () => {
    return (dispatch) => {
      dispatch({ type: FETCH_START });
      axios.get('/externalcourselist'
      ).then(({ data }) => {
        if (data) {
          dispatch({ type: FETCH_SUCCESS });
          dispatch({ type: LIST_CURSO, payload: data });
        } else {
          dispatch({ type: FETCH_ERROR, payload: data.error });
        }
      }).catch(function (error) {
        dispatch({ type: FETCH_ERROR, payload: error });
      });
    }
  };