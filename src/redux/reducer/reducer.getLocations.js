import {
  PROCESS_FETCH_LOCATIONS,
  SUCCESS_FETCH_LOCATIONS,
  FAILED_FETCH_LOCATIONS,
} from "../action/actions.js";

const initState = {
  isLoading: false,
  finished: false,
  data: null,
};

export default (state = initState, action) => {
  switch (action.type) {
    case PROCESS_FETCH_LOCATIONS:
      return {
        ...state,
        isLoading: true,
        finished: false,
      };
    case SUCCESS_FETCH_LOCATIONS:
      return {
        ...state,
        isLoading: false,
        finished: true,
        data: action.payload.locations,
      };
    case FAILED_FETCH_LOCATIONS:
      return {
        ...state,
        isLoading: false,
        finished: true,
        data: [],
      };
    default:
      return state;
  }
};
