import {
  FORMDATAIZI,
  ERROR_MESSAGE_IZI
} from "../types";

const INIT_STATE = {
  formDataIzi:null,
  errorIzi:null,
};

const states = (state = INIT_STATE, action) => {
  switch (action.type) {
    case FORMDATAIZI: {
      return {
        ...state,
        formDataIzi: action.payload,
      }
    }
    case ERROR_MESSAGE_IZI: {
      return {
        ...state,
        errorIzi: action.payload,
      }
    }
    default:
      return state;
    }
}
export default states;