import axios from "axios";
import {
  BASE_URL,
  PROCESS_FETCH_AVG_DETECT_BY_AREA,
  SUCCESS_FETCH_AVG_DETECT_BY_AREA,
  FAILED_FETCH_AVG_DETECT_BY_AREA,
} from "./actions";

export const FetchAvgDetectByArea = (area, interval) => (dispatch) => {
  dispatch({
    type: PROCESS_FETCH_AVG_DETECT_BY_AREA,
    payload: null,
  });
  return axios({
    method: "GET",
    baseURL: BASE_URL,
    url:
      "/geofence/geofencing/mobility/" +
      area +
      "/avg?interval=" +
      parseInt(interval),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      dispatch({
        type: SUCCESS_FETCH_AVG_DETECT_BY_AREA,
        payload: {
          datas: res.data.average,
        },
      });
    })
    .catch((err) => {
      console.log(err);
      if (err.response) {
        if (err.response.status == 404) {
          dispatch({
            type: FAILED_FETCH_AVG_DETECT_BY_AREA,
            payload: {
              message: err.response.data.description,
            },
          });
        } else if (err.response.status == 400) {
          dispatch({
            type: FAILED_FETCH_AVG_DETECT_BY_AREA,
            payload: {
              message: err.response.data.description,
            },
          });
        } else if (err.response.status == 502) {
          dispatch({
            type: FAILED_FETCH_AVG_DETECT_BY_AREA,
            payload: {
              message: "Failed to connect server",
            },
          });
        }
      }
    });
};
