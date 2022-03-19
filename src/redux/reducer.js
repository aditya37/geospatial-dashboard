import { combineReducers } from "redux";
import reducerGetLocationType from "./reducer/reducer.getLocationType";
import reducerFetchProvinsi from "./reducer/reducer.fetchProvinsi";
import reducerGetCityByProvinsi from "./reducer/reducer.getCityByProvinsi";
export default combineReducers({
  reducerGetLocationType: reducerGetLocationType,
  reducerFetchProvinsi: reducerFetchProvinsi,
  reducerGetCityByProvinsi: reducerGetCityByProvinsi,
});
