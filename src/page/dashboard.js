import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import Header from "../component/header.js";
import Sidebar from "../component/sidebar.js";
import CardMobilityLog from "../component/cardMobilityLog.js";
import CardDeviceLog from "../component/cardDeviceLog.js";
import { fetchLocations } from "../redux/action/fetchLocations.js";

const Dashboard = (props) => {
  React.useEffect(async () => {
    await props.ActionFetchLocation();
  }, []);
  return (
    <>
      <div className="hold-transition layout-fixed layout-navbar-fixed layout-footer-fixed">
        <Header />
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
                      <h3>150</h3>
                      <p>Activated Device</p>
                    </div>
                  </div>
                </div>
                <div class="col-md-3">
                  <div class="small-box bg-success">
                    <div class="inner">
                      <h3>150</h3>
                      <p>Recorded Tracking</p>
                    </div>
                  </div>
                </div>
                <div class="col-md-3">
                  <div class="small-box bg-warning">
                    <div class="inner">
                      <h3>150</h3>
                      <p>Location</p>
                    </div>
                  </div>
                </div>
                <div class="col-md-3">
                  <div class="small-box bg-warning">
                    <div class="inner">
                      <h3>150</h3>
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
                      <CardDeviceLog />
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
        <Sidebar />
      </div>
    </>
  );
};
// redux
const mapStateProps = (state) => {
  return {
    stateFetchLocation: state.reducerGetLocations,
  };
};
const mapDispatachToProps = (dispatch) => {
  return {
    ActionFetchLocation: () => {
      dispatch(fetchLocations());
    },
  };
};
export default connect(mapStateProps, mapDispatachToProps)(Dashboard);
