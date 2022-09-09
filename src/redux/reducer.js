import { combineReducers } from "redux";
import reducerGetLocationType from "./reducer/reducer.getLocationType";
import reducerFetchProvinsi from "./reducer/reducer.fetchProvinsi";
import reducerGetCityByProvinsi from "./reducer/reducer.getCityByProvinsi";
import reducerGetLocations from "./reducer/reducer.getLocations";
import reducerFetchCounter from "./reducer/reducer.fetchCounter";
import reducerFetcLocationById from "./reducer/getLocationById";
import reducerGetNearbyLocation from "./reducer/getNearbyLocation";

export default combineReducers({
  reducerGetLocationType: reducerGetLocationType,
  reducerFetchProvinsi: reducerFetchProvinsi,
  reducerGetCityByProvinsi: reducerGetCityByProvinsi,
  reducerGetLocations: reducerGetLocations,
  reducerFetchCounter: reducerFetchCounter,
  reducerFetcLocationById: reducerFetcLocationById,
  reducerGetNearbyLocation: reducerGetNearbyLocation,
});
