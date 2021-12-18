import {
  LIST_CONCEPTO,
  GET_CONCEPT
} from "../types";

const INIT_STATE = {
  conceptoList: [],
  conceptoFound: null,
};

const states = (state = INIT_STATE, action) => {
  switch (action.type) {
    case LIST_CONCEPTO: {
      return {
        ...state,
        conceptoList: action.payload,
      }
    }
    case GET_CONCEPT: {
      return {
        ...state,
        conceptoFound: action.payload
      }
    }
    default:
      return state;
  }
}
export default states;