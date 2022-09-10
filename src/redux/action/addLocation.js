import axios from "axios";
import {
  BASE_URL,
  PROCESS_ADD_LOCATION,
  SUCCESS_ADD_LOCATION,
  FAILED_ADD_LOCATIONS,
} from "./actions";

export const RequestAddLocation = (request) => (dispatch) => {
  dispatch({
    type: PROCESS_ADD_LOCATION,
    payload: null,
  });
  return axios({
    method: "POST",
    baseURL: BASE_URL,
    url: "geospatial/locations/",
    headers: {
      "Content-Type": "application/json",
    },
    data: JSON.stringify(request),
  })
    .then((res) => {
      console.log(res);
      dispatch({
        type: SUCCESS_ADD_LOCATION,
        payload: {
          message: "Location created with id " + res.data.id,
        },
      });
    })
    .catch((err) => {
      if (err.response) {
        console.log(err.response.data.description);
        if (err.response.status == 404) {
          dispatch({
            type: FAILED_ADD_LOCATIONS,
            payload: {
              message: err.response.data.description,
            },
          });
        } else if (err.response.status == 400) {
          dispatch({
            type: FAILED_ADD_LOCATIONS,
            payload: {
              message: err.response.data.description,
            },
          });
        }
      }
    });
};
