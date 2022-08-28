import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import Header from "../../component/header";
import Sidebar from "../../component/sidebar";
import { Link } from "react-router-dom";
import DataTable from "react-data-table-component";
import TableLocationsCol from "./table_locations_col";
import data from "./dumy_data_table_location";
import { fetchLocations } from "../../redux/action/fetchLocations";

const GetLocations = (props) => {
  React.useEffect(async () => {
    await props.ActionGetLocations();
  }, []);
  return (
    <>
      <div className="hold-transition layout-fixed layout-navbar-fixed layout-footer-fixed">
        <Header page="Location" />
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
                          Registered Location
                        </h3>
                        <Link className="btn btn-primary" to="/location/add">
                          Add Location
                        </Link>
                      </div>
                    </div>
                    {/* card header stop */}
                    <div className="card-body">
                      <DataTable
                        className="table"
                        progressPending={
                          props.stateFetchLocation.isLoading == true
                            ? true
                            : false
                        }
                        columns={TableLocationsCol}
                        data={props.stateFetchLocation.data || data}
                        pagination
                        paginationComponentOptions={{
                          noRowsPerPage: true,
                        }}
                        paginationPerPage="5"
                      ></DataTable>
                    </div>
                  </div>
                </div>
              </div>
              {/* Row end */}
            </div>
          </section>
          <Sidebar path="location" />
        </div>
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
    ActionGetLocations: () => {
      dispatch(fetchLocations());
    },
  };
};
export default connect(mapStateProps, mapDispatachToProps)(GetLocations);
