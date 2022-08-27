import {
  PROCESS_FETCH_COUNTER,
  SUCCESS_FETCH_COUNTER,
  FAILED_FETCH_COUNTER,
} from "../action/actions.js";

const initState = {
  isLoading: false,
  message: "",
  data: {
    activated_device: 0,
    recorded_tracking: 0,
    registered_location: 0,
    geofence_area: 0,
  },
};
export default (state = initState, action) => {
  switch (action.type) {
    case PROCESS_FETCH_COUNTER:
      return {
        ...state,
        isLoading: true,
      };
    case SUCCESS_FETCH_COUNTER:
      return {
        ...state,
        isLoading: false,
        data: {
          activated_device: action.payload.activated_device,
          recorded_tracking: action.payload.recorded_tracking,
          registered_location: action.payload.registered_location,
          geofence_area: action.payload.geofence_area,
        },
      };
    case FAILED_FETCH_COUNTER:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};
