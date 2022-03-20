import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import Header from "../component/header.js";
import Sidebar from "../component/sidebar.js";
import Map from "../component/map.js";
import LocationItem from "../component/locationItem.js";
import ReactLoading from "react-loading";
import { fetchLocations } from "../redux/action/fetchLocations.js";
import reactElementToJSXString from "react-element-to-jsx-string";
import { Popup } from "react-leaflet";
import { Table } from "react-bootstrap";

const Dashboard = (props) => {
  React.useEffect(async () => {
    await props.ActionFetchLocation();
  }, []);

  const _onEachFeature = (feature, layer) => {
    layer.bindPopup(
      reactElementToJSXString(
        <Popup className="card">
          <div className="card-header">
            <b>{feature.properties.name}</b>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col">
                <small>Id: {feature.properties.location_id}</small>
              </div>
              <div className="col">
                <small>Area: {feature.properties.area} m2</small>
              </div>
              <div className="col">
                <small>City : {feature.properties.city_name}</small>
              </div>
              <div className="col">
                <small>Type : {feature.properties.location_type}</small>
              </div>
            </div>
          </div>
        </Popup>
      )
    );
  };

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
                <div class="col-md-4">
                  <div class="small-box bg-info">
                    <div class="inner">
                      <h3>150</h3>
                      <p>Tracking Active</p>
                    </div>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="small-box bg-success">
                    <div class="inner">
                      <h3>150</h3>
                      <p>Geofence Area</p>
                    </div>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="small-box bg-warning">
                    <div class="inner">
                      <h3>150</h3>
                      <p>Total Area (M)</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* row counter end */}

              {/* row for registered location start*/}
              <div
                className="row"
                style={{
                  marginTop: 10,
                }}
              >
                <div className="col-md-8">
                  {/* card Location Polygon*/}
                  <div className="card">
                    {/* card header start*/}
                    <div className="card-header">
                      <h5>Location Polygon</h5>
                    </div>
                    {/* card header stop*/}
                    {/* card body start */}
                    <div className="card-body">
                      {/* custom map component */}
                      <Map
                        height="40vh"
                        data={props.stateFetchLocation.data}
                        onEachFeature={_onEachFeature}
                      />
                    </div>
                    {/* card body stop */}
                  </div>
                </div>
                {/* registered location item start */}
                <div className="col-md-4">
                  <div className="card">
                    <div className="card-header">
                      <div className="row">
                        <div className="col">
                          <h5>Location Item</h5>
                        </div>
                        {/* loading location item */}
                        {props.stateFetchLocation.isLoading == true ? (
                          <div
                            className="col"
                            style={{
                              alignContent: "flex-end",
                            }}
                          >
                            <ReactLoading
                              type="spin"
                              color="black"
                              height={20}
                              width={20}
                            />
                          </div>
                        ) : (
                          ""
                        )}
                        {/* loading location end */}
                      </div>
                    </div>
                    <div className="card-body">
                      {props.stateFetchLocation.isLoading == true ? (
                        <small>Fetching data....</small>
                      ) : (
                        <LocationItem items={props.stateFetchLocation.data} />
                      )}
                    </div>
                  </div>
                </div>
                {/* registered location item end */}
              </div>
              {/* row for Location Polygon end*/}
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
