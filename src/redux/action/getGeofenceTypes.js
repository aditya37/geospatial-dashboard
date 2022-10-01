import axios from "axios";
import {
  PROCESS_FETCH_GEOFENCE_TYPE,
  SUCCESS_FETCH_GEOFENCE_TYPE,
  FAILED_FETCH_GEOFENCE_TYPE,
  BASE_URL,
} from "./actions";

export const GetGeofenceType = () => (dispatch) => {
  dispatch({
    type: PROCESS_FETCH_GEOFENCE_TYPE,
    payload: null,
  });

  return axios({
    baseURL: BASE_URL + "/geofence/geofencing/types/",
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      dispatch({
        type: SUCCESS_FETCH_GEOFENCE_TYPE,
        payload: {
          data: res.data,
        },
      });
    })
    .catch((err) => {
      if (err.response) {
        if (err.response.status == 404) {
          dispatch({
            type: FAILED_FETCH_GEOFENCE_TYPE,
            payload: {
              message: err.response.data.description,
            },
          });
        } else if (err.response.status == 400) {
          dispatch({
            type: FAILED_FETCH_GEOFENCE_TYPE,
            payload: {
              message: err.response.data.description,
            },
          });
        } else if (err.response.status == 502) {
          dispatch({
            type: FAILED_FETCH_GEOFENCE_TYPE,
            payload: {
              message: "Failed to connect server",
            },
          });
        }
      }
    });
};
