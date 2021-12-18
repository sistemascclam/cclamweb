import {
  LIST_ACTIVIDAD
} from "../types";

const INIT_STATE = {
  actividadList: null
};

const states = (state = INIT_STATE, action) => {
  switch (action.type) {
    case LIST_ACTIVIDAD: {
      return {
        ...state,
        actividadList: action.payload,
      }
    }
    default:
      return state;
  }
}
export default states;