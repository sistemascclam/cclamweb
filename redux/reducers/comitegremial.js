import {
    FILTER_COMITE_GREMIAL,
    LOADING_COMITE_GREMIAL,
  } from "../types";
  
  const INIT_STATE = {
    comiteGremialFilter:[],
    comiteGremialFilterLoading:false
  };
  
  const states = (state = INIT_STATE, action) => {
    switch (action.type) {
      case FILTER_COMITE_GREMIAL: {
        return {
          ...state,
          comiteGremialFilter: action.payload,
        }
      }
      case LOADING_COMITE_GREMIAL: {
        return {
          ...state,
          comiteGremialFilterLoading: action.payload,
        }
      }
      default:
        return state;
    }
  }
  
  export default states;