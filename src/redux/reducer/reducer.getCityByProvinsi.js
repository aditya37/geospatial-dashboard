import {
  PROCESS_FETCH_CITY,
  SUCCESS_FETCH_CITY,
  FAILED_FETCH_CITY,
} from "../action/actions.js";
const initState = {
  message: "",
  isLoading: false,
  data: null,
};

export default (state = initState, action) => {
  switch (action.type) {
    case PROCESS_FETCH_CITY:
      return {
        ...state,
        isLoading: true,
      };
    case SUCCESS_FETCH_CITY:
      return {
        ...state,
        isLoading: false,
        message: action.payload.message,
        data: action.payload.citys,
      };
    case FAILED_FETCH_CITY:
      return {
        isLoading: false,
        message: action.payload.message,
        data: [],
      };
    default:
      return state;
  }
};
