import {
    FETCH_START,
    FETCH_SUCCESS,
    FETCH_ERROR,
    LIST_REVISTADIGITAL,
    GET_REVISTADIGITAL
} from "../types";
import axios from '../../util/Api';


export const list = () => {
    return (dispatch) => {
      dispatch({ type: FETCH_START });
      axios.get('/externaldigitalmagazinelist'
      ).then(({ data }) => {
        if (data) {
          dispatch({ type: FETCH_SUCCESS });
          dispatch({ type: LIST_REVISTADIGITAL, payload: data });
        } else {
          dispatch({ type: FETCH_ERROR, payload: data.error });
        }
      }).catch(function (error) {
        dispatch({ type: FETCH_ERROR, payload: error });
      });
    }
  };
  
  export const getOne = (url) => {
    return (dispatch) => {
      dispatch({ type: FETCH_START });
      axios.post('/externaldigitalmagazineget',
      {url:url}
      ).then(({ data }) => {
        dispatch({ type: FETCH_SUCCESS });
        dispatch({ type: GET_REVISTADIGITAL, payload: data });
      }).catch(function (error) {
        dispatch({ type: FETCH_ERROR, payload: error });
      });
    }
  };