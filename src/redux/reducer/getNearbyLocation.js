import {
  PROCESS_GET_NEARBY_LOCATIONS,
  SUCCESS_GET_NEARBY_LOCATIONS,
  FAILED_GET_NEARBY_LOCATIONS,
} from "../action/actions";

const initState = {
  isLoading: false,
  data: null,
  nearbyCount: 0,
};

export default (state = initState, action) => {
  switch (action.type) {
    case PROCESS_GET_NEARBY_LOCATIONS:
      return {
        ...state,
        isLoading: true,
      };
    case SUCCESS_GET_NEARBY_LOCATIONS:
      return {
        ...state,
        isLoading: false,
        data: action.payload.nearby_locations,
        nearbyCount: action.payload.count,
      };
    case FAILED_GET_NEARBY_LOCATIONS:
      return {
        ...state,
        isLoading: false,
        data: [],
        nearbyCount: 0,
      };
    default:
      return state;
  }
};
