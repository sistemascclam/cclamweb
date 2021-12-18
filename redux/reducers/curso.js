import {
  LIST_CURSO
} from "../types";

const INIT_STATE = {
  cursoList: null,
};

const states = (state = INIT_STATE, action) => {
  switch (action.type) {
    case LIST_CURSO: {
      return {
        ...state,
        cursoList: action.payload,
      }
    }
    default:
      return state;
  }
}
export default states;