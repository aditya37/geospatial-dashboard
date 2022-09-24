import React, { useState, useEffect, useRef } from "react";
import { connect } from "react-redux";
import { Tab, Tabs } from "react-bootstrap";
import { MapContainer, TileLayer, GeoJSON, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import TabItemNearbyDevice from "./tabItemNearbyDevice";
import TabDetectChart from "../component/tabDetectChart";
import TabItemNearbyLocation from "../component/tabItemNearbyLocation";
import { GetNearbyLocations } from "../redux/action/getNearbyLocation";

const TabLocationDetail = (props) => {
  // state geojson....
  const [getLocation, setLocation] = useState({
    geometry: "",
  });

  // load geojson from local storage...
  React.useEffect(async () => {
    var cache = JSON.parse(localStorage.getItem("geojson" + props.id));
    var geo = JSON.parse(cache.geojson);
    setLocation({ geometry: geo });
  }, []);

  // handle tab on select...
  const handleSelectTab = (e) => {
    if (e == "nearby_location") {
      const payload = {
        count: 5,
        nearby_filter: {
          with_type: false,
          type_name: "",
        },
        current_position: {
          lat: parseFloat(props.lat),
          long: parseFloat(props.long),
          radius: 5000,
        },
      };
      props.ActionGetNearbyLocation(JSON.stringify(payload));
    }
  };
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
              {/* validate location type
                if tourist will show chart detect
               */}
              {props.basicInfoData.geofence_type == "tourist" ? (
                <TabDetectChart geofence_id={props.basicInfoData.geofence_id} />
              ) : (
                "this location not type tourist"
              )}
            </Tab>
            <Tab eventKey="nearby_location" title="Nearby Location">
              {props.stateNearbyLocation.isLoading == true ? (
                <small>Please wait...</small>
              ) : (
                <TabItemNearbyLocation
                  lat={props.lat}
                  long={props.long}
                  count={props.stateNearbyLocation.nearbyCount}
                  data={props.stateNearbyLocation.data}
                />
              )}
            </Tab>
            <Tab eventKey="nearby_device" title="Nearby Device">
              <TabItemNearbyDevice />
            </Tab>
          </Tabs>
        </div>
      </div>
    </>
  );
};

// redux
const mapStateProps = (state) => {
  return {
    stateNearbyLocation: state.reducerGetNearbyLocation,
  };
};
const mapDispatachToProps = (dispatch) => {
  return {
    ActionGetNearbyLocation: (request) => {
      dispatch(GetNearbyLocations(request));
    },
  };
};
export default connect(mapStateProps, mapDispatachToProps)(TabLocationDetail);
