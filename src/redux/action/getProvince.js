import axios from "axios";
import {
  BASE_URL_INDOAREA,
  PROCESS_FETCH_PROVINSI,
  SUCCESS_FETCH_PROVINSI,
  FAILED_FETCH_PROVINSI,
} from "./actions.js";

const provinsiPayload = {
  provinsi: [],
};
export const GetProvince = () => (dispatch) => {
  dispatch({ type: PROCESS_FETCH_PROVINSI, payload: provinsiPayload });

  return axios({
    baseURL: BASE_URL_INDOAREA,
    url: "/provinsi",
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      provinsiPayload.provinsi = res.data.provinsi;
      dispatch({ type: SUCCESS_FETCH_PROVINSI, payload: provinsiPayload });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: FAILED_FETCH_PROVINSI, payload: provinsiPayload });
    });
};
