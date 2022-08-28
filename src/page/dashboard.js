import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import Header from "../component/header.js";
import Sidebar from "../component/sidebar.js";
import CardMobilityLog from "../component/cardMobilityLog.js";
import CardDeviceLog from "../component/cardDeviceLog.js";
import { FetchCounter } from "../redux/action/fetchCounter";
import { BASE_URL_SOCKET_SERVICE_STREAM } from "../redux/action/actions";
import dumyJson from "../dumy_json";
const Dashboard = (props) => {
  const [deviceLogs, setDeviceLogs] = useState({
    data: "" || JSON.stringify(dumyJson),
  });
  const SocketDeviceLogs = () => {
    var url = BASE_URL_SOCKET_SERVICE_STREAM + "/ws/devices/logs";
    const ws = new WebSocket(url);

    // on open
    ws.onopen = () => {
      console.log("Socket Open");
    };
    ws.onerror = (e) => {
      console.log("Socket Error", e);
    };
    ws.onclose = () => {
      console.log("Socket Closed");
    };
    ws.onmessage = (msg) => {
      setDeviceLogs({
        data: msg.data,
      });
    };
  };
  React.useEffect(async () => {
    await props.ActionFetchCounter();
    await SocketDeviceLogs();
  }, []);
  return (
    <>
      <div className="hold-transition layout-fixed layout-navbar-fixed layout-footer-fixed">
        <Header page="Overview" />
        <div className="content-wrapper">
          <section className="content">
            <div className="container-fluid">
              {/* row counter start */}
              <div
                className="row"
                style={{
                  marginTop: 10,
                }}
              >
                <div class="col-md-3">
                  <div class="small-box bg-info">
                    <div class="inner">
                      {props.stateFetchCounter.isLoading == true ? (
                        <small>Fetching....</small>
                      ) : (
                        <h3>{props.stateFetchCounter.data.activated_device}</h3>
                      )}
                      <p>Activated Device</p>
                    </div>
                  </div>
                </div>
                <div class="col-md-3">
                  <div class="small-box bg-success">
                    <div class="inner">
                      {props.stateFetchCounter.isLoading == true ? (
                        <small>Fetching....</small>
                      ) : (
                        <h3>
                          {props.stateFetchCounter.data.recorded_tracking}
                        </h3>
                      )}
                      <p>Recorded Tracking</p>
                    </div>
                  </div>
                </div>
                <div class="col-md-3">
                  <div class="small-box bg-warning">
                    <div class="inner">
                      {props.stateFetchCounter.isLoading == true ? (
                        <small>Fetching....</small>
                      ) : (
                        <h3>
                          {props.stateFetchCounter.data.registered_location}
                        </h3>
                      )}
                      <p>Location</p>
                    </div>
                  </div>
                </div>
                <div class="col-md-3">
                  <div class="small-box bg-warning">
                    <div class="inner">
                      {props.stateFetchCounter.isLoading == true ? (
                        <small>Fetching....</small>
                      ) : (
                        <h3>{props.stateFetchCounter.data.geofence_area}</h3>
                      )}
                      <p>Geofence Area</p>
                    </div>
                  </div>
                </div>
                {/* device logs row start */}
                <div className="col-md-12">
                  <div className="row">
                    {/* div mobility log start*/}
                    <div className="col-lg-6">
                      <CardMobilityLog />
                    </div>
                    {/* div mobility log stop*/}
                    {/* div device log... start*/}
                    <div className="col-lg-6">
                      <CardDeviceLog values={deviceLogs.data} />
                    </div>
                    {/* div device log... end*/}
                  </div>
                </div>
                {/* device logs row end */}
              </div>
              {/* row counter end */}
            </div>
          </section>
        </div>
        <Sidebar path="overview" />
      </div>
    </>
  );
};
// redux
const mapStateProps = (state) => {
  return {
    stateFetchCounter: state.reducerFetchCounter,
  };
};
const mapDispatachToProps = (dispatch) => {
  return {
    ActionFetchCounter: () => {
      dispatch(FetchCounter());
    },
  };
};
export default connect(mapStateProps, mapDispatachToProps)(Dashboard);
