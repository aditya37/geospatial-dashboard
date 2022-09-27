import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import DataTable from "react-data-table-component";
import { Modal, Form, FormSelect, Button } from "react-bootstrap";
import Header from "../../component/header";
import Sidebar from "../../component/sidebar";
import { MenuAboveTable, SelectItemLocation } from "../../component";
import { fetchLocations } from "../../redux/action/fetchLocations";
import { FetchLocationById } from "../../redux/action/fetchLocationById";
import { AddGeofenceArea } from "../../redux/action/addGeofence";

const GetAllGeofenceArea = (props) => {
  const [stateModal, setStateModal] = useState(false);
  const showModalAddGeofence = (e) => {
    setStateModal(true);
  };
  const [stateAlert, setAlert] = useState({
    show: false,
    message: "",
  });
  // state for add geofence...
  const [addGeofence, setAddGeofence] = useState({
    location_id: 0,
    name: "",
    location_type: "",
    detect: [],
    geojson: null,
    geofence_type: 0,
  });

  useEffect(async () => {
    // safe your laptop :)
    await props.ActionGetLocations();
  }, []);

  // onChangeLocation...
  const onChangeLocation = (e) => {
    props.ActionFetchLocationById(e.target.value);
    const localgjson = JSON.parse(
      localStorage.getItem("geojson" + e.target.value) != null
        ? localStorage.getItem("geojson" + e.target.value)
        : props.ActionFetchLocationById(e.target.value)
    );

    setAddGeofence({
      ...addGeofence,
      geojson: localgjson.geojson,
      location_type: parseInt(localgjson.type.id),
      location_id: parseInt(e.target.value),
    });
  };
  // check box handler...
  const _handleGeofenceDetect = (val) => {
    if (val.target.checked) {
      setAddGeofence({
        ...addGeofence,
        detect: [...addGeofence.detect, val.target.id],
      });
    } else {
      addGeofence.detect.forEach((index, key) => {
        var _indexItem = addGeofence.detect.indexOf(key);
        // slice array
        addGeofence.detect.splice(_indexItem, 1);
      });
    }
  };

  // geofenceTypeOnChange....
  const geofenceTypeOnChange = (v) => {
    setAddGeofence({
      ...addGeofence,
      geofence_type: parseInt(v.target.value),
    });
  };

  const handleForm = (e) => {
    e.preventDefault();
    console.log(JSON.stringify(addGeofence));
    props.ActionAddGeofence(JSON.stringify(addGeofence));
  };
  return (
    <>
      <div className="hold-transition layout-fixed layout-navbar-fixed layout-footer-fixed">
        <Header page="Geofence" />
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
                  <div className="card">
                    {/* card header start */}
                    <div className="card-header">
                      <h3
                        className="card-title"
                        style={{
                          marginTop: 10,
                        }}
                      >
                        Registered Geofence Area
                      </h3>
                    </div>
                    {/* card header stop */}
                    {/* card body start */}
                    <div className="card-body">
                      <div className="row">
                        {/* menu above table start */}
                        <MenuAboveTable onClick={showModalAddGeofence} />
                        {/* menu above table stop */}
                        <DataTable
                          className="table"
                          data={[
                            {
                              id: 1,
                            },
                          ]}
                          columns={[
                            {
                              name: "Area name",
                              selector: (row) => row.id,
                            },
                            {
                              name: "Channel Name",
                            },
                            {
                              name: "Type Name",
                            },
                            {
                              name: "Action",
                            },
                          ]}
                          pagination
                          paginationComponentOptions={{
                            noRowsPerPage: true,
                          }}
                        />
                      </div>
                    </div>
                    {/* card body stop */}
                  </div>
                </div>
              </div>
            </div>
            {/* modal start */}
            <Modal
              show={stateModal}
              size="md"
              onHide={() => setStateModal(false)}
            >
              <Modal.Header closeButton>
                <Modal.Title className="card-title">
                  Add Geofence Area
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <div className="row">
                  <div className="col-md-12">
                    {/* failed message add geofence */}
                    {props.stateAddGeofence.isFailed == true ? (
                      <div
                        className="col-sm-12 alert alert-warning"
                        role="alert"
                      >
                        <small>{props.stateAddGeofence.message}</small>
                      </div>
                    ) : (
                      ""
                    )}

                    {/* success message add geofence */}
                    {props.stateAddGeofence.isSuccess == true ? (
                      <div
                        className="col-sm-12 alert alert-success"
                        role="alert"
                      >
                        <small>{props.stateAddGeofence.message}</small>
                      </div>
                    ) : (
                      ""
                    )}
                    {/* alert */}
                    {props.stateFetchLocationById.data.is_geofence == 1 ? (
                      <div className="alert alert-warning">
                        can't add this location to geofence, this location has
                        been set to geofence
                      </div>
                    ) : (
                      ""
                    )}
                    <Form onSubmit={handleForm}>
                      <Form.Group className="mb-3">
                        <Form.Label>Location</Form.Label>
                        <FormSelect onChange={onChangeLocation}>
                          <SelectItemLocation
                            data={props.stateFetchLocation.data}
                          />
                        </FormSelect>
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Label>Geofence Name</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Geofence Area"
                          disabled={
                            props.stateFetchLocationById.data.is_geofence == 1
                              ? true
                              : false
                          }
                          onChange={(v) => {
                            setAddGeofence({
                              ...addGeofence,
                              name: v.target.value,
                            });
                          }}
                        />
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Label>Location Type</Form.Label>
                        <Form.Control
                          type="text"
                          disabled
                          placeholder={
                            props.stateFetchLocationById.data != ""
                              ? props.stateFetchLocationById.data.type.id
                              : ""
                          }
                        />
                        {props.stateFetchLocationById.isLoading == true ? (
                          <small>Fetching Detail Location</small>
                        ) : (
                          ""
                        )}
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Label>Geofence Type</Form.Label>
                        <FormSelect
                          onChange={geofenceTypeOnChange}
                          disabled={
                            props.stateFetchLocationById.data.is_geofence == 1
                              ? true
                              : false
                          }
                        >
                          <option value="3">Tourist</option>
                          <option value="2">Logistic</option>
                          <option value="1">Attedance</option>
                        </FormSelect>
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Label>Geofence Detect</Form.Label>
                        <div className="row">
                          <div className="col-md-2">
                            <Form.Check
                              label="Exit"
                              id="exit"
                              disabled={
                                props.stateFetchLocationById.data.is_geofence ==
                                1
                                  ? true
                                  : false
                              }
                              onChange={_handleGeofenceDetect}
                            />
                          </div>
                          <div className="col-md-2">
                            <Form.Check
                              label="Inside"
                              id="inside"
                              onChange={_handleGeofenceDetect}
                              disabled={
                                props.stateFetchLocationById.data.is_geofence ==
                                1
                                  ? true
                                  : false
                              }
                            />
                          </div>
                          <div className="col-md-2">
                            <Form.Check
                              label="Enter"
                              id="enter"
                              disabled={
                                props.stateFetchLocationById.data.is_geofence ==
                                1
                                  ? true
                                  : false
                              }
                              onChange={_handleGeofenceDetect}
                            />
                          </div>
                        </div>
                      </Form.Group>
                      <Form.Group className="mb-4">
                        <Button
                          className="col"
                          type="submit"
                          disabled={
                            props.stateFetchLocationById.data.is_geofence == 1
                              ? true
                              : false
                          }
                        >
                          Save
                        </Button>
                      </Form.Group>
                    </Form>
                  </div>
                </div>
              </Modal.Body>
            </Modal>
          </section>
          <Sidebar path="geofence" />
        </div>
      </div>
    </>
  );
};
// redux
const mapStateProps = (state) => {
  return {
    stateFetchLocation: state.reducerGetLocations,
    stateFetchLocationById: state.reducerFetcLocationById,
    stateAddGeofence: state.reducerAddGeofence,
  };
};
const mapDispatachToProps = (dispatch) => {
  return {
    ActionGetLocations: () => {
      dispatch(fetchLocations());
    },
    ActionFetchLocationById: (id) => {
      dispatch(FetchLocationById(id));
    },
    ActionAddGeofence: (payload) => {
      dispatch(AddGeofenceArea(payload));
    },
  };
};
export default connect(mapStateProps, mapDispatachToProps)(GetAllGeofenceArea);
