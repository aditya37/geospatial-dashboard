import {
  PROCESS_FETCH_PROVINSI,
  SUCCESS_FETCH_PROVINSI,
  FAILED_FETCH_PROVINSI,
} from "../action/actions.js";

const initState = {
  isLoading: false,
  data: null,
};

export default (state = initState, action) => {
  switch (action.type) {
    case PROCESS_FETCH_PROVINSI:
      return {
        ...state,
        isLoading: true,
      };
    case SUCCESS_FETCH_PROVINSI:
      return {
        ...state,
        isLoading: false,
        data: action.payload.provinsi,
      };
    case FAILED_FETCH_PROVINSI:
      return {
        ...state,
        isLoading: false,
        data: [],
      };
    default:
      return state;
  }
};
