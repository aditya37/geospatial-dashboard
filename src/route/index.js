import React from "react";
import { Provider } from "react-redux";
import { Dashboard, AddLocation, SimulateTracking } from "../page";
import { Routes, Route } from "react-router-dom";
import store from "../redux/store.js";
const MyRoute = () => {
	return (
		<Provider store={store}>
			<Routes>
				<Route path="/" element={<Dashboard />} />
				<Route
					path="/location/add"
					element={<AddLocation />}
				/>
				<Route
					path="/qa/tool/tracking"
					element={<SimulateTracking />}
				/>
			</Routes>
		</Provider>
	);
};
export default MyRoute;
