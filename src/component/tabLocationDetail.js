import React, { useState, useEffect, useRef } from "react";
import { connect } from "react-redux";
import { Tab, Tabs } from "react-bootstrap";
import TabDetectChart from "../component/tabDetectChart";
import TabItemNearbyLocation from "../component/tabItemNearbyLocation";
import { MapContainer, TileLayer, GeoJSON, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import TabItemNearbyDevice from "./tabItemNearbyDevice";

const TabLocationDetail = (props) => {
  const [getLocation, setLocation] = useState({
    geometry: "",
  });
  React.useEffect(async () => {
    var cache = JSON.parse(localStorage.getItem("geojson" + props.id));
    var geo = JSON.parse(cache.geojson);
    setLocation({ geometry: geo });
  }, []);

  // handle tab on select...
  const handleSelectTab = (e) => {};
  return (
    <>
      <div className="card">
        <div className="card-body">
          <MapContainer
            style={{
              width: "auto",
              height: "25vh",
            }}
            center={[props.lat, props.long]}
            zoom={20}
            scrollWheelZoom={false}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <GeoJSON
              data={getLocation.geometry}
              key={props.basicInfoData.location_id}
            />
          </MapContainer>

          <Tabs className="mb-3" onSelect={handleSelectTab}>
            <Tab eventKey="detect_chart" title="Detect">
              <TabDetectChart />
            </Tab>
            <Tab eventKey="nearby_location" title="Nearby Location">
              <TabItemNearbyLocation lat={props.lat} long={props.long} />
            </Tab>
            <Tab eventKey="nearby_device" title="Nearby Device">
              <TabItemNearbyDevice/>
            </Tab>
          </Tabs>
        </div>
      </div>
    </>
  );
};

// redux
const mapStateProps = (state) => {
  return {};
};
const mapDispatachToProps = (dispatch) => {
  return {};
};
export default connect(mapStateProps, mapDispatachToProps)(TabLocationDetail);
