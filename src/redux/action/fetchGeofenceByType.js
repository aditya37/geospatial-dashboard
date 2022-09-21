import axios from "axios";
import {
  BASE_URL,
  SUCCESS_FETCH_GEOFENCE_BY_TYPE,
  PROCESS_FETCH_GEOFENCE_BY_TYPE,
  FAILED_FETCH_GEOFENCE_BY_TYPE,
} from "./actions";

export const FetchGeofenceByType = (type) => (dispatch) => {
  dispatch({
    type: PROCESS_FETCH_GEOFENCE_BY_TYPE,
    payload: null,
  });
  return axios({
    method: "GET",
    baseURL: BASE_URL,
    url: "/geofence/geofencing/" + type + "/?page=1&itemPerPage=1000",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      console.log(res);
      dispatch({
        type: SUCCESS_FETCH_GEOFENCE_BY_TYPE,
        payload: {
          data: res.data.geofence_areas || [],
        },
      });
    })
    .catch((err) => {
      if (err.response) {
        if (err.response.status == 404) {
          dispatch({
            type: FAILED_FETCH_GEOFENCE_BY_TYPE,
            payload: {
              message: err.response.data.description,
            },
          });
        } else if (err.response.status == 400) {
          dispatch({
            type: FAILED_FETCH_GEOFENCE_BY_TYPE,
            payload: {
              message: err.response.data.description,
            },
          });
        }
      }
    });
};
