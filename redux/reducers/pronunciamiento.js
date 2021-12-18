import {
  LIST_PRONUNCIAMIENTO
} from "../types";

const INIT_STATE = {
  pronunciamientoList: null
};

const states = (state = INIT_STATE, action) => {
  switch (action.type) {
    case LIST_PRONUNCIAMIENTO: {
      return {
        ...state,
        pronunciamientoList: action.payload,
      }
    }
    default:
      return state;
  }
}
export default states;