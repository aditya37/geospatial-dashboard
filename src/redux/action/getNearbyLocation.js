import axios from "axios";
import {
  BASE_URL,
  PROCESS_GET_NEARBY_LOCATIONS,
  SUCCESS_GET_NEARBY_LOCATIONS,
  FAILED_GET_NEARBY_LOCATIONS,
} from "./actions.js";

export const GetNearbyLocations = (request) => (dispatch) => {
  dispatch({
    type: PROCESS_GET_NEARBY_LOCATIONS,
    payload: null,
  });
  return axios({
    baseURL: BASE_URL,
    method: "POST",
    url: "geospatial/locations/nearby",
    headers: {
      "Content-Type": "application/json",
    },
    data: request,
  })
    .then((res) => {
      dispatch({
        type: SUCCESS_GET_NEARBY_LOCATIONS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: FAILED_GET_NEARBY_LOCATIONS,
        payload: [],
      });
    });
};
