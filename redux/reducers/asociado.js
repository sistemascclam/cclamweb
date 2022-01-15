import {
    SHOW_RUC_SEARCHED,
    LOADING_RUC_SEARCH,
    HAS_RUC_SEARCHED,
    LOADING_SAVING_AFILIATION,
    AFILIATION_SAVED
  } from "../types";
  
  const INIT_STATE = {
    rucSearched: null,
    gaveResult: false,
    loadingRucSearch:false,
    loadingSendAfiliation:false,
    afiliationSaved:false
  };
  
  const states = (state = INIT_STATE, action) => {
    switch (action.type) {
      case SHOW_RUC_SEARCHED: {
        return {
          ...state,
          rucSearched: action.payload,
        }
      }
      case LOADING_RUC_SEARCH: {
        return {
          ...state,
          loadingRucSearch: action.payload,
        }
      }
      case HAS_RUC_SEARCHED: {
        return {
          ...state,
          gaveResult: action.payload,
        }
      }
      case LOADING_SAVING_AFILIATION: {
        return {
          ...state,
          loadingSendAfiliation: action.payload,
        }
      }
      case AFILIATION_SAVED: {
        return {
          ...state,
          afiliationSaved: action.payload,
        }
      }
      default:
        return state;
    }
  }
  
  export default states;