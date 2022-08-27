import axios from "axios";

import {
  BASE_URL,
  PROCESS_FETCH_COUNTER,
  SUCCESS_FETCH_COUNTER,
  FAILED_FETCH_COUNTER,
} from "./actions.js";

const respPayload = {
  activated_device: 0,
  recorded_tracking: 0,
  registered_location: 0,
  geofence_area: 0,
  message: ""
};

export const FetchCounter = () => (dispatch) => {
  dispatch({
    type: PROCESS_FETCH_COUNTER,
    payload: respPayload,
  });
  return axios({
    baseURL: BASE_URL,
    method: "GET",
    url: "/geospatial/locations/counts/",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      dispatch({
        type: SUCCESS_FETCH_COUNTER,
        payload: res.data,
      });
    })
    .catch((err) => {
      respPayload.message = "Failed fetch counter"
      dispatch({
        type: FAILED_FETCH_COUNTER,
        payload: respPayload,
      });
    });
};
