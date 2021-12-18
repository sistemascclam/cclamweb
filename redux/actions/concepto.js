import {
    FETCH_START,
    FETCH_SUCCESS,
    FETCH_ERROR,
    LIST_CONCEPTO,
    GET_CONCEPT,
} from "../types";
import axios from '../../util/Api';


export const list = () => {
    return (dispatch) => {
      dispatch({ type: FETCH_START });
      axios.post('/listconceptos'
      ).then(({ data }) => {
        if (data) {
          dispatch({ type: FETCH_SUCCESS });
          dispatch({ type: LIST_CONCEPTO, payload: data });
        } else {
          dispatch({ type: FETCH_ERROR, payload: data.error });
        }
      }).catch(function (error) {
        dispatch({ type: FETCH_ERROR, payload: error });
      });
    }
  };
  
export const getOne = (id) => {
  return (dispatch) => {
    dispatch({ type: FETCH_START });
    axios.get('/getConceptoPay/'+id
    ).then(({ data }) => {
      dispatch({ type: FETCH_SUCCESS });
      dispatch({ type: GET_CONCEPT, payload: data ? data : -1 });
    }).catch(function (error) {
      dispatch({ type: FETCH_ERROR, payload: error });
    });
  }
};