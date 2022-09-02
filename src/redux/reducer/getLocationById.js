import {
  PROCESS_FETCH_LOCATIONS_ID,
  SUCCESS_FETCH_LOCATIONS_ID,
  FAILED_FETCH_LOCATIONS_ID,
} from "../action/actions";

const initState = {
  isLoading: false,
  message: "",
  data: "",
};

export default (state = initState, action) => {
  switch (action.type) {
    case PROCESS_FETCH_LOCATIONS_ID:
      return {
        ...state,
        isLoading: true,
      };
    case SUCCESS_FETCH_LOCATIONS_ID:
      return {
        ...state,
        isLoading: false,
        message: action.payload.message,
        data: action.payload.data,
      };
    case FAILED_FETCH_LOCATIONS_ID:
      return {
        ...state,
        isLoading: false,
        message: action.payload.message,
      };
    default:
      return state;
  }
};
