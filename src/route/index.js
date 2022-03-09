import React from "react";
import { Dashboard, AddLocation } from "../page";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const MyRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/location/add" element={<AddLocation />} />
    </Routes>
  );
};
export default MyRoute;
