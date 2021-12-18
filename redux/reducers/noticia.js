import {
  LIST_NOTICIA,
  GET_NOTICIA
} from "../types";

const INIT_STATE = {
  noticiaList: null,
  noticiaObject:null
};

const states = (state = INIT_STATE, action) => {
  switch (action.type) {
    case LIST_NOTICIA: {
      return {
        ...state,
        noticiaList: action.payload,
      }
    }
    case GET_NOTICIA: {
      return {
        ...state,
        noticiaObject: action.payload
      }
    }
    default:
      return state;
  }
}
export default states;