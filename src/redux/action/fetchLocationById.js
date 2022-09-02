import axios from "axios";
import {
  PROCESS_FETCH_LOCATIONS_ID,
  SUCCESS_FETCH_LOCATIONS_ID,
  FAILED_FETCH_LOCATIONS_ID,
  BASE_URL,
} from "./actions.js";

const initPayload = {
  message: "",
  data: "",
};
export const FetchLocationById = (id) => (dispatch) => {
  dispatch({
    type: PROCESS_FETCH_LOCATIONS_ID,
    payload: initPayload,
  });
  const path = "/geospatial/locations/" + id;
  return axios({
    baseURL: BASE_URL,
    method: "GET",
    url: path,
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      dispatch({
        type: SUCCESS_FETCH_LOCATIONS_ID,
        payload: {
          message: "success, fetch location",
          data: res.data,
        },
      });
    })
    .catch((err) => {
      dispatch({
        type: FAILED_FETCH_LOCATIONS_ID,
        payload: initPayload,
      });
    });
};
