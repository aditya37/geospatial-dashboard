import axios from "axios";
import {
  BASE_URL,
  PROCESS_ADD_GEOFENCE_AREA,
  SUCCESS_ADD_GEOFENCE_AREA,
  FAILED_ADD_GEOFENCE_AREA,
} from "./actions";

export const AddGeofenceArea = (request) => (dispatch) => {
  dispatch({
    type: PROCESS_ADD_GEOFENCE_AREA,
    payload: "",
  });
  return axios({
    baseURL: BASE_URL + "/geofence/geofencing/",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: request,
  })
    .then((res) => {
      dispatch({
        type: SUCCESS_ADD_GEOFENCE_AREA,
        payload: {
          message: res.data.message,
        },
      });
    })
    .catch((err) => {
      if (err.response) {
        if (err.response.status == 404) {
          dispatch({
            type: FAILED_ADD_GEOFENCE_AREA,
            payload: {
              message: err.response.data.description,
            },
          });
        } else if (err.response.status == 400) {
          dispatch({
            type: FAILED_ADD_GEOFENCE_AREA,
            payload: {
              message: err.response.data.description,
            },
          });
        } else if (err.response.status == 502) {
          dispatch({
            type: FAILED_ADD_GEOFENCE_AREA,
            payload: {
              message: "Failed to connect server",
            },
          });
        }
      }
    });
};
