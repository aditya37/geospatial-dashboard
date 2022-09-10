import {
  PROCESS_ADD_LOCATION,
  SUCCESS_ADD_LOCATION,
  FAILED_ADD_LOCATIONS,
} from "../action/actions";
const initState = {
  isLoading: false,
  isFailed: false,
  isSuccess: false,
  message: "",
};

export default (state = initState, action) => {
  switch (action.type) {
    case PROCESS_ADD_LOCATION:
      return {
        ...state,
        isLoading: true,
        isFailed: false,
      };
    case SUCCESS_ADD_LOCATION:
      console.log(action.type);
      return {
        ...state,
        isLoading: false,
        isFailed: false,
        isSuccess: true,
        message: action.payload.message,
      };
    case FAILED_ADD_LOCATIONS:
      return {
        ...state,
        isLoading: false,
        isFailed: true,
        message:
          action.payload.message == "invalid data"
            ? "geojson format not valid"
            : action.payload.message,
      };
    default:
      return state;
  }
};
