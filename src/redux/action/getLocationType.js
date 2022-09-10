
import axios from "axios";
import {
  BASE_URL,
  PROCESS_FETCH_LOCATION_TYPE,
  SUCCESS_FETCH_LOCATION_TYPE,
  FAILED_FETCH_LOCATION_TYPE,
} from "./actions.js";

const fetchLocationTypePayload = {
  data: {
    message: "",
    count: 0,
    location_type: [],
  },
};


export const getLocationType = () => (dispatch) => {
  dispatch({
    type: PROCESS_FETCH_LOCATION_TYPE,
    payload: fetchLocationTypePayload,
  });

  return axios({
    method: "GET",
    baseURL: BASE_URL,
    url: "/geospatial/locations/types/",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      fetchLocationTypePayload.data.location_type = res.data.location_type;
      fetchLocationTypePayload.data.message = "Success Load location type";
      fetchLocationTypePayload.data.count = res.data.count;
      dispatch({
        type: SUCCESS_FETCH_LOCATION_TYPE,
        payload: fetchLocationTypePayload,
      });
    })
    .catch((err) => {
      console.log(err);
      const { message } = fetchLocationTypePayload.data;
      message = "Failed to load data";
      dispatch({
        typa: FAILED_FETCH_LOCATION_TYPE,
        payload: fetchLocationTypePayload,
      });
    });
};
