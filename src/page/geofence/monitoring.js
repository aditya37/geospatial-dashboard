import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { FormSelect, Button } from "react-bootstrap";
import L from "leaflet";
import { MapContainer, GeoJSON, TileLayer, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Header from "../../component/header";
import Sidebar from "../../component/sidebar";
import DataTable from "react-data-table-component";
import DetectedDeviceCol from "../geofence/detected_device_col";
import { BASE_URL_SSE_SERVICE_STREAM } from "../../redux/action/actions";
import { FetchGeofenceByType } from "../../redux/action/fetchGeofenceByType";

const Monitoring = (props) => {
  // update tile in map... every move map
  const [map, setMap] = useState(null);

  // response payload from sse
  const [data, setData] = useState({
    isSuccess: false,
    isProcessing: true,
    message: "Please Select geofence area and start",
    point: null,
    device_id: "",
  });

  // geofence type
  const [geofenceType, setGeofenceType] = useState("tourist");

  // move to current lat long...
  const flayToMap = () => {
    if (map) {
      map.locate().on("locationfound", function (e) {
        map.flyTo(e.latlng, map.getZoom());
      });
    }
  };

  const SSEHandler = (type) => {
    var url = BASE_URL_SSE_SERVICE_STREAM + "/sse/geofencing/?type=" + type;

    const sse = new EventSource(url);
    sse.onopen = () => {
      setData({
        isProcessing: true,
        message: "Connection to server opened",
      });
    };
    sse.onmessage = (msg) => {
      var j = JSON.parse(msg.data);
      setData({
        isProcessing: false,
        point: j.point,
        device_id: j.device_id,
      });
      console.log(j);
    };
    sse.onerror = (err) => {
      setData({
        isProcessing: true,
        message: "failed to connect sse server",
      });
      sse.close();
    };
  };

  // invalidate map size...
  useEffect(async () => {
    if (map) {
      await flayToMap();
      setInterval(function () {
        map.invalidateSize();
      }, 100);
    }
  }, [map]);

  const geofenceTypeOnChange = (e) => {
    setGeofenceType(e.target.value);
    props.ActionFetchGeofenceByType(e.target.value);
  };
  const handleOnClick = (e) => {
    SSEHandler(geofenceType);
  };

  return (
    <div className="hold-transition layout-fixed layout-navbar-fixed layout-footer-fixed">
      <Header page="Monitoring" />
      <div className="content-wrapper">
        <section className="content">
          <div className="container-fluid">
            <div
              className="row"
              style={{
                marginTop: "10px",
              }}
            >
              {/* col map start */}
              <div
                className="col-md-8"
                style={{
                  marginTop: "10px",
                }}
              >
                <div className="card">
                  <div className="card-body">
                    <MapContainer
                      center={[-6.1886281, 106.8228031]}
                      zoom={16}
                      zoomControl={true}
                      scrollWheelZoom={false}
                      style={{ height: "550px", width: "100%" }}
                      whenCreated={setMap}
                    >
                      <TileLayer
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                      />
                      {/* select goefence type */}
                      <div
                        className="card leaflet-right"
                        style={{
                          position: "absolute",
                          top: "20px",
                          right: "20px",
                          padding: "10px",
                          zIndex: 400,
                        }}
                      >
                        <div className="card-body">
                          <h6 className="font-weight-bold">Geofencing Type</h6>
                          <FormSelect onChange={geofenceTypeOnChange}>
                            <option value="tourist">Tourist</option>
                            <option value="logistic">Logistic</option>
                            <option value="attedance">Attedance</option>
                          </FormSelect>
                          {props.stateFetchGeofenceByType.isLoading == true ? (
                            <Button
                              className="col"
                              type="submit"
                              style={{
                                marginTop: "15px",
                              }}
                              disabled={true}
                            >
                              Fetching Data
                            </Button>
                          ) : (
                            <Button
                              className="col"
                              type="submit"
                              style={{
                                marginTop: "15px",
                              }}
                              onClick={handleOnClick}
                            >
                              Select
                            </Button>
                          )}
                        </div>
                      </div>
                      {/* load geofence area */}
                      {props.stateFetchGeofenceByType.data.length <= 0
                        ? ""
                        : props.stateFetchGeofenceByType.data.map((val) => {
                            <GeoJSON data={JSON.parse(val.geojson)} />;
                          })}
                      {/* load current position of device */}
                      {data.point == null ? (
                        ""
                      ) : (
                        <GeoJSON
                          data={JSON.parse(data.point)}
                          pointToLayer={(f, latlng) => {
                            const circle = L.circle(latlng, 10, {
                              color: "#FFFF00",
                            });
                            circle.addTo(map);
                          }}
                        />
                      )}
                    </MapContainer>
                  </div>
                </div>
              </div>
              {/* col map end */}
              <div
                className="col-md-4"
                style={{
                  marginTop: "10px",
                }}
              >
                <div className="card">
                  <div
                    className="card-header border-0"
                    style={{
                      backgroundColor: "#FFFFFF",
                    }}
                  >
                    <small className="card-title">Detected Device</small>
                  </div>
                  <div className="card-body">
                    {data.isProcessing == true ? (
                      data.message
                    ) : (
                      <DataTable
                        data={[
                          {
                            device_id: 32,
                            status: "ON_TRACKING",
                            detect: "inside",
                            geofence_area: "test",
                          },
                          {
                            device_id: 32,
                            status: "ON_TRACKING",
                            detect: "inside",
                            geofence_area: "test",
                          },
                        ]}
                        columns={DetectedDeviceCol}
                        pagination
                        paginationComponentOptions={{
                          noRowsPerPage: true,
                        }}
                        paginationPerPage="8"
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Sidebar path="monitoring" />
    </div>
  );
};
// redux
const mapStateProps = (state) => {
  console.log(state.reducerFetchGeofenceByType);
  return {
    stateFetchGeofenceByType: state.reducerFetchGeofenceByType,
  };
};
const mapDispatachToProps = (dispatch) => {
  return {
    ActionFetchGeofenceByType: (type) => {
      dispatch(FetchGeofenceByType(type));
    },
  };
};
export default connect(mapStateProps, mapDispatachToProps)(Monitoring);
