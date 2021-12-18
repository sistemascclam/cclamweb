import {
  GET_DESCUENTO,
  CHECKING_DESCUENTO
} from "../types";

const INIT_STATE = {
  infoDcto:null,
  searchingDcto:false,
};

const states = (state = INIT_STATE, action) => {
  switch (action.type) {
    case GET_DESCUENTO: {
      return {
        ...state,
        infoDcto: action.payload,
      }
    }
    case CHECKING_DESCUENTO: {
      return {
        ...state,
        searchingDcto: action.payload,
      }
    }
    default:
      return state;
  }
}
export default states;