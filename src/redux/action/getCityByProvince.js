import axios from "axios";
import {
  BASE_URL_INDOAREA,
  PROCESS_FETCH_CITY,
  SUCCESS_FETCH_CITY,
  FAILED_FETCH_CITY,
} from "./actions.js";

const getCityByProvinsiPayload = {
  message: "",
  citys: [],
};

export const getCityByProvinsi = (cityid) => (dispatch) => {
  dispatch({ type: PROCESS_FETCH_CITY, payload: getCityByProvinsiPayload });
  console.log(cityid);
  return axios({
    baseURL: BASE_URL_INDOAREA,
    method: "GET",
    url: "/kota?id_provinsi=" + cityid,
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      getCityByProvinsiPayload.citys = res.data.kota_kabupaten;
      getCityByProvinsiPayload.message = "Success Load provinsi";
      dispatch({ type: SUCCESS_FETCH_CITY, payload: getCityByProvinsiPayload });
    })
    .catch((err) => {
      console.log(err);
      getCityByProvinsiPayload.citys = [];
      getCityByProvinsiPayload.message = "Gagal Load provinsi";
      dispatch({ type: FAILED_FETCH_CITY, payload: getCityByProvinsiPayload });
    });
};
