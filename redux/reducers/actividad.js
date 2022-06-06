import {
  LIST_ACTIVIDAD,
  SHOW_ACTIVIDAD
} from "../types";

const INIT_STATE = {
  actividadList: null,
  actividadObject: null
};

const states = (state = INIT_STATE, action) => {
  switch (action.type) {
    case LIST_ACTIVIDAD: {
      return {
        ...state,
        actividadList: action.payload,
      }
    }
    case SHOW_ACTIVIDAD: {
      return {
        ...state,
        actividadObject: action.payload,
      }
    }
    default:
      return state;
  }
}
export default states;