import {
    FETCH_START,
    FETCH_SUCCESS,
    FETCH_ERROR,
    LIST_ACTIVIDAD,
    SHOW_ACTIVIDAD
} from "../types";
import axios from '../../util/Api';

export const list = () => {
    return (dispatch) => {
      dispatch({ type: FETCH_START });
      axios.get('/externalactivitylist'
      ).then(({ data }) => {
        if (data) {
          dispatch({ type: FETCH_SUCCESS });
          dispatch({ type: LIST_ACTIVIDAD, payload: data });
        } else {
          dispatch({ type: FETCH_ERROR, payload: data.error });
        }
      }).catch(function (error) {
        dispatch({ type: FETCH_ERROR, payload: error });
      });
    }
  };

  export const show = (idActividad) => {
      return (dispatch) => {
        dispatch({ type: FETCH_START });
        axios.post('/actividadshow',
        {
          idActividad
        }
        ).then(({ data }) => {
          if (data) {
            dispatch({ type: FETCH_SUCCESS });
            dispatch({ type: SHOW_ACTIVIDAD, payload: data });
          } else {
            dispatch({ type: FETCH_ERROR, payload: data.error });
          }
        }).catch(function (error) {
          dispatch({ type: FETCH_ERROR, payload: error });
        });
      }
    };