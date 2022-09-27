import {
  PROCESS_ADD_GEOFENCE_AREA,
  SUCCESS_ADD_GEOFENCE_AREA,
  FAILED_ADD_GEOFENCE_AREA,
} from "../action/actions";

const inistate = {
  isLoading: false,
  isSuccess: false,
  isFailed: false,
  message: "",
};

export default (state = inistate, action) => {
  switch (action.type) {
    case PROCESS_ADD_GEOFENCE_AREA:
      return {
        ...state,
        isLoading: true,
        isSuccess: false,
        message: "processing add geofence area",
      };
    case SUCCESS_ADD_GEOFENCE_AREA:
      return {
        isLoading: false,
        isSuccess: true,
        isFailed: false,
        message: action.payload.message,
      };
    case FAILED_ADD_GEOFENCE_AREA:
      return {
        isLoading: false,
        isSuccess: false,
        isFailed: true,
        message: action.payload.message,
      };
    default:
      return state;
  }
};
