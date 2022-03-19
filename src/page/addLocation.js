import React, { useState } from "react";
import { Form, Button, FormSelect } from "react-bootstrap";
import Header from "../component/header.js";
import Sidebar from "../component/sidebar.js";
import EditableMap from "../component/editablemap.js";
const AddLocation = () => {
  const [getLocation, setLocation] = useState({
    geometry: "",
  });
  const [showGeofence, hideGoefence] = useState(false);

  const _checkboxOnChange = (e) => {
    if (e.target.checked == false) {
      hideGoefence(false);
    } else {
      hideGoefence(true);
    }
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
                      {/* row for add location */}
                      <div className="row">
                        {/* colom form */}
                        <div className="col-md-4">
                          <Form>
                            <div className="form-row">
                              <div className="col">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" placeholder="Name" />
                                <Form.Label
                                  style={{
                                    marginTop: "10px",
                                  }}
                                >
                                  Type
                                </Form.Label>
                                <FormSelect>
                                  <option>....</option>
                                </FormSelect>
                              </div>
                              <div className="col">
                                <Form.Label>City</Form.Label>
                                <FormSelect>
                                  <option>City...</option>
                                </FormSelect>
                                <Form.Label
                                  style={{
                                    marginTop: "10px",
                                  }}
                                >
                                  Province
                                </Form.Label>
                                <FormSelect>
                                  <option>Province</option>
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
                              value={JSON.stringify(
                                getLocation.geometry.geometry
                              )}
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
                                <div className="col" style={{marginTop:"10px"}}>
                                  <Form.Label>
                                    <small>Geofence Type</small>
                                  </Form.Label>
                                  <FormSelect>
                                    <option>Tourist</option>
                                    <option>Logistic</option>
                                    <option>Attendance</option>
                                  </FormSelect>
                                  {/* row geofencing detect start*/}
                                  <div className="row" style={{marginTop:"10px"}}>
                                    <Form.Label>
                                      <small>Geofencing Detect</small>
                                    </Form.Label>
                                    <div className="col">
                                      <Form.Check label="Enter" />
                                    </div>
                                    <div className="col">
                                      <Form.Check label="Inside" />
                                    </div>
                                    <div className="col">
                                      <Form.Check label="Exit" />
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
                              style={{
                                marginTop: "10px",
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
                            onCreated={(e) => {
                              setLocation({
                                geometry: e.layer.toGeoJSON(),
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

export default AddLocation;
