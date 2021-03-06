import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Form, Button, FormSelect } from 'react-bootstrap';
import Header from '../component/header.js';
import Sidebar from '../component/sidebar.js';
import EditableMap from '../component/editablemap.js';
import { getLocationType } from '../redux/action/getLocationType.js';
import { GetProvince } from '../redux/action/getProvince.js';
import { getCityByProvinsi } from '../redux/action/getCityByProvince.js';

import LocationTypeItems from '../component/locationTypeItem.js';
import ProvinceSelectItem from '../component/provinceSelectItem.js';
import CitySelectItem from '../component/citySelectItem.js';

const AddLocation = (props) => {
  const [getLocation, setLocation] = useState({
    geometry: ''
  });
  const [showGeofence, hideGoefence] = useState(false);
  // form state
  const [getFormState, setFormState] = useState({
    location_name: '',
    city_id: 0,
    province_id: 0,
    location_type: 0,
    shape: '',
    is_geofence: false,
    geofence_type: '',
    detect: []
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
        is_geofence: false
      });
    } else {
      setFormState({
        ...getFormState,
        is_geofence: true
      });
      hideGoefence(true);
    }
  };

  const _locationTypeOnChange = (e) => {
    setFormState({
      ...getFormState,
      location_type: e.target.value
    });
  };

  const _getProvinceOnChange = (e) => {
    if (e.target.value == 0) {
    } else {
      props.ActionGetCityByProvinsi(e.target.value);
      setFormState({
        ...getFormState,
        province_id: e.target.value
      });
    }
  };
  const _selectCityOnchange = (e) => {
    setFormState({
      ...getFormState,
      city_id: e.target.value
    });
  };
  const _handleGeofenceDetect = (val) => {
    if (val.target.checked) {
      setFormState({
        ...getFormState,
        detect: [...getFormState.detect, val.target.id]
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

    console.log(getFormState);
  };
  return (
    <>
      <div className="hold-transition layout-fixed layout-navbar-fixed layout-footer-fixed">
        <Header />
        <div className="content-wrapper">
          <section className="content">
            <div className="container-fluid">
              <div
                className="row"
                style={{
                  marginTop: 10
                }}
              >
                <div className="col-md-12">
                  {/* main card start */}
                  <div className="card">
                    <div className="card-header">
                      <h5>Add Location</h5>
                    </div>
                    <div className="card-body">
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
                                      location_name: e.target.value
                                    });
                                  }}
                                />
                                <Form.Label
                                  style={{
                                    marginTop: '10px'
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
                                    marginTop: '10px'
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
                                marginTop: '10px'
                              }}
                              value={JSON.stringify(
                                getLocation.geometry.geometry
                              )}
                              disabled
                            />

                            {/* geofencing form start*/}
                            <div className="mb-3" style={{ marginTop: '12px' }}>
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
                                  style={{ marginTop: '10px' }}
                                >
                                  <Form.Label>
                                    <small>Geofence Type</small>
                                  </Form.Label>
                                  <FormSelect
                                    onChange={(val) => {
                                      setFormState({
                                        ...getFormState,
                                        geofence_type: val.target.value
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
                                    style={{ marginTop: '10px' }}
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
                            <Button
                              className="col"
                              type="submit"
                              style={{
                                marginTop: '10px'
                              }}
                            >
                              Save
                            </Button>
                          </Form>
                        </div>
                        {/* colom map */}
                        <div className="col-md-8">
                          <EditableMap
                            height="60vh"
                            onDeleted={(e) => {
                              setLocation({
                                ...getLocation,
                                geometry: ''
                              });
                              setFormState({
                                ...getFormState,
                                shape: ''
                              });
                            }}
                            onCreated={(e) => {
                              var strJson = JSON.stringify(e.layer.toGeoJSON());
                              var parseJson = JSON.parse(strJson);
                              console.log(parseJson.geometry);
                              setLocation({
                                geometry: e.layer.toGeoJSON()
                              });
                              setFormState({
                                ...getFormState,
                                shape: parseJson.geometry
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
        <Sidebar />
      </div>
    </>
  );
};
// redux management
const mapStateProps = (state) => {
  console.log(state.reducerFetchProvinsi);
  return {
    locationTypeState: state.reducerGetLocationType,
    fetchProvinsiState: state.reducerFetchProvinsi,
    getCityByProvinsi: state.reducerGetCityByProvinsi
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
    }
  };
};
export default connect(mapStateProps, mapDispatachToProps)(AddLocation);
