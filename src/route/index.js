import React from "react";
import { Provider } from "react-redux";
import {
  Dashboard,
  GetLocations,
  AddLocation,
  DetailLocation,
  EditLocation,
  LocationType,
  SearchLocation,
  Monitoring,
  QAToolGeofence,
  GetAllGeofenceArea,
} from "../page";
import { Routes, Route } from "react-router-dom";
import store from "../redux/store.js";
const MyRoute = () => {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/location/" element={<GetLocations />} />
        <Route path="/location/add" element={<AddLocation />} />
        <Route
          path="/location/:id/lat/:lat/long/:long"
          element={<DetailLocation />}
        />
        <Route path="/location/edit/:id" element={<EditLocation />} />
        <Route path="/location/type/" element={<LocationType />} />
        <Route path="/location/search/" element={<SearchLocation />} />
        <Route path="/geofence/monitoring" element={<Monitoring />} />
        <Route path="/geofence/" element={<GetAllGeofenceArea />} />
        <Route path="/geofence/:id" />
        <Route
          path="/qa/geofence/speed/:speed/device/:device_id/type/:geofence_type"
          element={<QAToolGeofence />}
        />
      </Routes>
    </Provider>
  );
};
export default MyRoute;
