import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Form, Button, FormSelect } from "react-bootstrap";
import Header from "../component/header.js";
import Sidebar from "../component/sidebar.js";
import EditableMap from "../component/editablemap.js";
import { getLocationType } from "../redux/action/getLocationType.js";
import { GetProvince } from "../redux/action/getProvince.js";
import { getCityByProvinsi } from "../redux/action/getCityByProvince.js";
import { Link } from "react-router-dom";
import LocationTypeItems from "../component/locationTypeItem.js";
import ProvinceSelectItem from "../component/provinceSelectItem.js";
import CitySelectItem from "../component/citySelectItem.js";
import { RequestAddLocation } from "../redux/action/addLocation";
import ReactLoading from "react-loading";

const AddLocation = (props) => {
  const [getLocation, setLocation] = useState({
    geometry: "",
  });
  const [showGeofence, hideGoefence] = useState(false);

  // form state
  const [getFormState, setFormState] = useState({
    location_name: "",
    city_id: 0,
    province_id: 0,
    location_type: 0,
    geojson: "",
    is_geofence: false,
    geofence_type: "",
    detect: [],
  });

  React.useEffect(async () => {
    await props.ActionFetchLocationType();
    await props.ActionFetchProvinsi();
  }, []);

  const _checkboxOnChange = (e) => {
    if (e.target.checked == false) {
      hideGoefence(false);
      setFormState({
        ...getFormState,
        is_geofence: false,
      });
    } else {
      setFormState({
        ...getFormState,
        is_geofence: true,
      });
      hideGoefence(true);
    }
  };

  const _locationTypeOnChange = (e) => {
    setFormState({
      ...getFormState,
      location_type: parseInt(e.target.value),
    });
  };

  const _getProvinceOnChange = (e) => {
    if (e.target.value == 0) {
    } else {
      props.ActionGetCityByProvinsi(e.target.value);
      setFormState({
        ...getFormState,
        province_id: parseInt(e.target.value),
      });
    }
  };

  const _selectCityOnchange = (e) => {
    setFormState({
      ...getFormState,
      city_id: parseInt(e.target.value),
    });
  };

  const _handleGeofenceDetect = (val) => {
    if (val.target.checked) {
      setFormState({
        ...getFormState,
        detect: [...getFormState.detect, val.target.id],
      });
    } else {
      getFormState.detect.forEach((index, key) => {
        var _indexItem = getFormState.detect.indexOf(key);
        // slice array
        getFormState.detect.splice(_indexItem, 1);
      });
    }
  };

  const _handleFormSubmit = (e) => {
    e.preventDefault();
    const requestPayload = {
      location_name: getFormState.location_name,
      city_id: getFormState.city_id,
      province_id: getFormState.province_id,
      location_type: getFormState.location_type,
      geojson: getLocation.geometry,
      is_geofence: getFormState.is_geofence,
      geofence_type: getFormState.geofence_type,
      detect: getFormState.detect,
    };
    console.log(requestPayload)
    props.ActionAddLocation(requestPayload);
  };
  return (
    <>
      <div className="hold-transition layout-fixed layout-navbar-fixed layout-footer-fixed">
        <Header page="Location" />
        <div className="content-wrapper">
          <section className="content">
            <div className="container-fluid">
              <div
                className="row"
                style={{
                  marginTop: 10,
                }}
              >
                <div className="col-md-12">
                  {/* main card start */}
                  <div className="card">
                    <div className="card-header">
                      <h5>Add Location</h5>
                    </div>
                    <div className="card-body">
                      {props.stateAddLocation.isFailed == true ? (
                        <div
                          className="col-sm-12 alert alert-warning"
                          role="alert"
                        >
                          <small>{props.stateAddLocation.message}</small>
                        </div>
                      ) : (
                        ""
                      )}
                      {/* success message */}
                      {props.stateAddLocation.isSuccess == true ? (
                        <div
                          className="col-sm-12 alert alert-primary"
                          role="alert"
                        >
                          <small>{props.stateAddLocation.message}</small>
                        </div>
                      ) : (
                        ""
                      )}
                      {/* row for add location */}
                      <div className="row">
                        {/* colom form */}
                        <div className="col-md-4">
                          <Form onSubmit={(e) => _handleFormSubmit(e)}>
                            <div className="form-row">
                              <div className="col">
                                <Form.Label>Name</Form.Label>
                                <Form.Control
                                  type="text"
                                  placeholder="Name"
                                  onChange={(e) => {
                                    setFormState({
                                      ...getFormState,
                                      location_name: e.target.value,
                                    });
                                  }}
                                />
                                <Form.Label
                                  style={{
                                    marginTop: "10px",
                                  }}
                                >
                                  Type
                                </Form.Label>
                                <FormSelect onChange={_locationTypeOnChange}>
                                  {props.locationTypeState.isLoading == true ? (
                                    <option>Please wait....</option>
                                  ) : (
                                    <LocationTypeItems
                                      data={props.locationTypeState.data}
                                    />
                                  )}
                                  {/* <LocationTypeItems/> */}
                                </FormSelect>
                              </div>
                              <div className="col">
                                <Form.Label>Province</Form.Label>
                                <FormSelect onChange={_getProvinceOnChange}>
                                  {props.fetchProvinsiState.isLoading ==
                                  true ? (
                                    <option>Please wait....</option>
                                  ) : (
                                    <ProvinceSelectItem
                                      data={props.fetchProvinsiState.data}
                                    />
                                  )}
                                </FormSelect>
                                <Form.Label
                                  style={{
                                    marginTop: "10px",
                                  }}
                                >
                                  City
                                </Form.Label>
                                <FormSelect onChange={_selectCityOnchange}>
                                  {props.getCityByProvinsi.isLoading == true ? (
                                    <option>Please Select Province</option>
                                  ) : (
                                    <CitySelectItem
                                      data={props.getCityByProvinsi.data}
                                    />
                                  )}
                                </FormSelect>
                              </div>
                            </div>
                            {/* raw geojson */}
                            <Form.Control
                              as="textarea"
                              rows={4}
                              style={{
                                marginTop: "10px",
                              }}
                              value={JSON.stringify(getLocation.geometry)}
                              disabled
                            />

                            {/* geofencing form start*/}
                            <div className="mb-3" style={{ marginTop: "12px" }}>
                              <Form.Check
                                type="checkbox"
                                label="Geofencing Area"
                                onChange={_checkboxOnChange}
                              />
                              <div
                                className="form-row"
                                hidden={showGeofence == false ? true : false}
                              >
                                <div
                                  className="col"
                                  style={{ marginTop: "10px" }}
                                >
                                  <Form.Label>
                                    <small>Geofence Type</small>
                                  </Form.Label>
                                  <FormSelect
                                    onChange={(val) => {
                                      setFormState({
                                        ...getFormState,
                                        geofence_type: val.target.value,
                                      });
                                    }}
                                  >
                                    <option key="tourist">tourist</option>
                                    <option key="logistic">logistic</option>
                                    <option key="attedance">attendance</option>
                                  </FormSelect>
                                  {/* row geofencing detect start*/}
                                  <div
                                    className="row"
                                    style={{ marginTop: "10px" }}
                                  >
                                    <Form.Label>
                                      <small>Geofencing Detect</small>
                                    </Form.Label>
                                    <div className="col">
                                      <Form.Check
                                        label="Enter"
                                        id="enter"
                                        onChange={_handleGeofenceDetect}
                                      />
                                    </div>
                                    <div className="col">
                                      <Form.Check
                                        label="Inside"
                                        id="inside"
                                        onChange={_handleGeofenceDetect}
                                      />
                                    </div>
                                    <div className="col">
                                      <Form.Check
                                        label="Exit"
                                        id="exit"
                                        onChange={_handleGeofenceDetect}
                                      />
                                    </div>
                                  </div>
                                  {/* row geofencing detect stop*/}
                                </div>
                              </div>
                            </div>
                            {/* geofencing form end*/}

                            {/* button */}
                            {/* button save.. */}
                            {props.stateAddLocation.isLoading == true ? (
                              <Button
                                className="col"
                                type="submit"
                                style={{
                                  marginTop: "10px",
                                }}
                                disabled
                              >
                                <div
                                  style={{
                                    marginLeft: "125px",
                                    marginRight: "125px",
                                  }}
                                >
                                  <ReactLoading
                                    type="spin"
                                    color="black"
                                    height={30}
                                    width={30}
                                  />
                                </div>
                              </Button>
                            ) : (
                              <Button
                                className="col"
                                type="submit"
                                style={{
                                  marginTop: "10px",
                                }}
                              >
                                Save
                              </Button>
                            )}
                            {/* button */}
                            <Link
                              className="col col-md-12 btn btn-warning"
                              style={{
                                marginTop: "10px",
                              }}
                              to="/location/"
                            >
                              Cancel
                            </Link>
                          </Form>
                        </div>
                        {/* colom map */}
                        <div className="col-md-8">
                          <EditableMap
                            height="60vh"
                            onCreated={(e) => {
                              var strJson = JSON.stringify(e.layer.toGeoJSON());
                              setLocation({
                                geometry: strJson,
                              });
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* main card end */}
                </div>
              </div>
            </div>
          </section>
        </div>
        <Sidebar path="location" />
      </div>
    </>
  );
};
// redux management
const mapStateProps = (state) => {
  console.log(state.reducerAddLocation);
  return {
    locationTypeState: state.reducerGetLocationType,
    fetchProvinsiState: state.reducerFetchProvinsi,
    getCityByProvinsi: state.reducerGetCityByProvinsi,
    stateAddLocation: state.reducerAddLocation,
  };
};
const mapDispatachToProps = (dispatch) => {
  return {
    ActionFetchLocationType: () => {
      dispatch(getLocationType());
    },
    ActionFetchProvinsi: () => {
      dispatch(GetProvince());
    },
    ActionGetCityByProvinsi: (id) => {
      dispatch(getCityByProvinsi(id));
    },
    ActionAddLocation: (request) => {
      dispatch(RequestAddLocation(request));
    },
  };
};
export default connect(mapStateProps, mapDispatachToProps)(AddLocation);
