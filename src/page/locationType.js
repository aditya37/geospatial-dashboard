import React, { useState } from "react";
import Header from "../component/header.js";
import Sidebar from "../component/sidebar";
import { Link } from "react-router-dom";
import { Table, Button, Modal, Form, Row,Col } from "react-bootstrap";
const LocationType = () => {
  const [show, setShow] = useState(false);
  const handleCloseModal = () => {
    setShow(false);
  };
  const handleShowModal = () => {
    setShow(true);
  };
  return (
    <>
      <div className="hold-transition layout-fixed layout-navbar-fixed layout-footer-fixed">
        <Header page="Location Type" />
        <div className="content-wrapper">
          <section className="content">
            <div className="container-fluid">
              {/* Row start */}
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
                      <div className="d-flex justify-content-between">
                        <h3
                          className="card-title"
                          style={{
                            marginTop: 10,
                          }}
                        >
                          Location Type
                        </h3>
                        <Button
                          className="btn btn-primary"
                          onClick={handleShowModal}
                        >
                          Add Location Type
                        </Button>
                      </div>
                    </div>

                    {/* modal start*/}
                    <Modal show={show} onHide={handleCloseModal}>
                      <Modal.Header closeButton>
                        <Modal.Title>Add Location Type</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        <Form>
                          <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridEmail">
                              <Form.Label>Type Name</Form.Label>
                              <Form.Control
                                type="text"
                                placeholder="Location Type"
                              />
                            </Form.Group>
                          </Row>
                        </Form>
                      </Modal.Body>
                      <Modal.Footer>
                        <Button variant="primary" onClick={handleCloseModal}>
                          Save
                        </Button>
                      </Modal.Footer>
                    </Modal>
                    {/* modal end */}

                    {/* card header stop */}
                    <div className="card-body">
                      <Table className="table ">
                        <thead>
                          <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th></th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>1.</td>
                            <td>Market</td>
                            <td className="text-right py-0 align-middle">
                              <div className="btn-group btn-group-md">
                                <Link
                                  to="#"
                                  className="btn btn-info"
                                >
                                  <i className="fas fa-edit"></i>
                                </Link>
                                <Link
                                  to="/"
                                  className="btn btn-danger"
                                  style={{
                                    marginLeft: "10px",
                                  }}
                                >
                                  <i class="fas fa-trash"></i>
                                </Link>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>2.</td>
                            <td>Road</td>
                            <td className="text-right py-0 align-middle">
                              <div className="btn-group btn-group-md">
                                <Link to="/" className="btn btn-info">
                                  <i className="fas fa-edit"></i>
                                </Link>
                                <Link
                                  to="/"
                                  className="btn btn-danger"
                                  style={{
                                    marginLeft: "10px",
                                  }}
                                >
                                  <i class="fas fa-trash"></i>
                                </Link>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </Table>
                    </div>
                  </div>
                </div>
              </div>
              {/* Row end */}
            </div>
          </section>
          <Sidebar path="location-type" />
        </div>
      </div>
    </>
  );
};
export default LocationType;
