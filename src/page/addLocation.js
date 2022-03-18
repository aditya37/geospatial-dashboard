import React, { useState } from "react";
import { Form, Button, FormSelect } from "react-bootstrap";
import Header from "../component/header.js";
import Sidebar from "../component/sidebar.js";
import EditableMap from "../component/editablemap.js";
const AddLocation = () => {
  const [getLocation, setLocation] = useState({
    geometry: "",
  });
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
                                  <option>Location Type</option>
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
                                  <option>Province...</option>
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
                              value={JSON.stringify(getLocation.geometry.geometry)}
                              disabled
                            />
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
                                ...getLocation,
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
