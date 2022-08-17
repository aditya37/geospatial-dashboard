import React from "react";
import { Provider } from "react-redux";
import {
  Dashboard,
  GetLocations,
  AddLocation,
  DetailLocation,
  EditLocation,
  LocationType,
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
      </Routes>
    </Provider>
  );
};
export default MyRoute;
