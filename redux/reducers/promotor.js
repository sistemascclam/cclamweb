import {
    FILTER_PROMOTOR,
    LOADING_PROMOTOR,
  } from "../types";
  
  const INIT_STATE = {
    promotorFilter:[],
    promoFilterLoading:false
  };
  
  const states = (state = INIT_STATE, action) => {
    switch (action.type) {
      case FILTER_PROMOTOR: {
        return {
          ...state,
          promotorFilter: action.payload,
        }
      }
      case LOADING_PROMOTOR: {
        return {
          ...state,
          promoFilterLoading: action.payload,
        }
      }
      default:
        return state;
    }
  }
  
  export default states;