import {
  SUCCESS_FETCH_GEOFENCE_BY_TYPE,
  PROCESS_FETCH_GEOFENCE_BY_TYPE,
  FAILED_FETCH_GEOFENCE_BY_TYPE,
} from "../action/actions";

const initState = {
  isLoading: false,
  isSuccess: false,
  message: "",
  data:  [],
};

export default (state = initState, action) => {
  switch (action.type) {
    case PROCESS_FETCH_GEOFENCE_BY_TYPE:
      return {
        ...state,
        isLoading: true,
        isSuccess: false,
      };
    case SUCCESS_FETCH_GEOFENCE_BY_TYPE:
      return {
        ...state,
        isLoading: false,
        isSuccess: true,
        data: action.payload.data,
      };
    case FAILED_FETCH_GEOFENCE_BY_TYPE:
      return {};
    default:
      return state;
  }
};
