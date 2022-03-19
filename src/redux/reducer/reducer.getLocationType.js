import {
  PROCESS_FETCH_LOCATION_TYPE,
  SUCCESS_FETCH_LOCATION_TYPE,
  FAILED_FETCH_LOCATION_TYPE,
} from "../action/actions.js";

const initState = {
  isloading: false,
  data: {
    message: null,
    count: null,
    location_type: null,
  },
};

export default (state = initState, action) => {
  switch (action.type) {
    case PROCESS_FETCH_LOCATION_TYPE:
      return {
        ...state,
        isloading: true,
      };
    case SUCCESS_FETCH_LOCATION_TYPE:
      return {
        ...state,
        isloading: false,
        data: {
          message: action.payload.data.message,
          location_type: action.payload.data.location_type,
        },
      };
    case FAILED_FETCH_LOCATION_TYPE:
      return {
        ...state,
        isloading: false,
        data: {
          message: action.payload.data.message,
        },
      };
    default:
      return state;
  }
};
