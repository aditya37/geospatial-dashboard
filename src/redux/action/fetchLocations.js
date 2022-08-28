import axios from "axios";
import {
  BASE_URL,
  PROCESS_FETCH_LOCATIONS,
  SUCCESS_FETCH_LOCATIONS,
  FAILED_FETCH_LOCATIONS,
} from "./actions.js";

const resppayload = {
  count: 0,
  locations: [],
};
export const fetchLocations = () => (dispatch) => {
  dispatch({
    type: PROCESS_FETCH_LOCATIONS,
    payload: resppayload,
  });
  return axios({
    baseURL: BASE_URL,
    method: "GET",
    url: "/geospatial/locations?page=1&itemPerPage=1000",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((resp) => {
      resppayload.count = resp.data.count;
      resppayload.locations = resp.data.locations;
      dispatch({
        type: SUCCESS_FETCH_LOCATIONS,
        payload: resppayload,
      });
    })
    .catch((err) => {
      dispatch({
        type: FAILED_FETCH_LOCATIONS,
        payload: resppayload,
      });
    });
};
