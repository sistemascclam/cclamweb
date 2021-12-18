import {
  LIST_REVISTADIGITAL,
  GET_REVISTADIGITAL
} from "../types";

const INIT_STATE = {
  revistaDigitalList: null,
  revistaDigitalObject:null
};

const states = (state = INIT_STATE, action) => {
  switch (action.type) {
    case LIST_REVISTADIGITAL: {
      return {
        ...state,
        revistaDigitalList: action.payload,
      }
    }
    case GET_REVISTADIGITAL: {
      return {
        ...state,
        revistaDigitalObject: action.payload
      }
    }
    default:
      return state;
  }
}
export default states;