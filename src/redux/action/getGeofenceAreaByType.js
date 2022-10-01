import axios from "axios";
import {
  PROCESS_FETCH_GEOFENCE_AREA_BY_TYPE,
  SUCCESS_FETCH_GEOFENCE_AREA_BY_TYPE,
  FAILED_FETCH_GEOFENCE_AREA_BY_TYPE,
  BASE_URL,
} from "./actions";

export const GetGofenceAreaByType = (type) => (dispatch) => {
  dispatch({
    type: PROCESS_FETCH_GEOFENCE_AREA_BY_TYPE,
    payload: null,
  });
  return axios({
    baseURL:
      BASE_URL + "/geofence/geofencing/" + type + "/?page=1&itemPerPage=1000",
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      console.log(res.data);
      dispatch({
        type: SUCCESS_FETCH_GEOFENCE_AREA_BY_TYPE,
        payload: {
          data: res.data.geofence_areas == null ? [] : res.data,
        },
      });
    })
    .catch((err) => {
      if (err.response) {
        if (err.response.status == 404) {
          dispatch({
            type: FAILED_FETCH_GEOFENCE_AREA_BY_TYPE,
            payload: {
              message: err.response.data.description,
            },
          });
        } else if (err.response.status == 400) {
          dispatch({
            type: FAILED_FETCH_GEOFENCE_AREA_BY_TYPE,
            payload: {
              message: err.response.data.description,
            },
          });
        } else if (err.response.status == 502) {
          dispatch({
            type: FAILED_FETCH_GEOFENCE_AREA_BY_TYPE,
            payload: {
              message: "Failed to connect server",
            },
          });
        }
      }
    });
};
