import {
  PROCESS_FETCH_GEOFENCE_TYPE,
  SUCCESS_FETCH_GEOFENCE_TYPE,
  FAILED_FETCH_GEOFENCE_TYPE,
} from "../action/actions";
const initstate = {
  isLoading: false,
  data: [],
  message: "",
};

export default (state = initstate, action) => {
  switch (action.type) {
    case PROCESS_FETCH_GEOFENCE_TYPE:
      return {
        ...state,
        isLoading: true,
      };
    case SUCCESS_FETCH_GEOFENCE_TYPE:
      return {
        ...state,
        isLoading: false,
        data: action.payload.data,
      };
    case FAILED_FETCH_GEOFENCE_TYPE:
      return {
        ...state,
        isLoading: false,
        message: action.payload.message,
      };
    default:
      return state;
  }
};
