import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import Header from "../../component/header";
import Sidebar from "../../component/sidebar";
import LocationWidget from "../../component/locationWidget";
import TabLocationDetail from "../../component/tabLocationDetail";
import { useParams } from "react-router-dom";
import dumyGetLocationById from "../../dumy_data_get_location_by_id";
import { FetchLocationById } from "../../redux/action/fetchLocationById";
const LocationDetail = (props) => {
  let { id, lat, long } = useParams();
  React.useEffect(async () => {
    await props.ActionFetchLocationById(id);
  }, []);
  return (
    <>
      <div className="hold-transition layout-fixed layout-navbar-fixed layout-footer-fixed">
        <Header page="Location Detail" />
        <div className="content-wrapper">
          <section className="content">
            <div className="container-fluid">
              <div
                className="row"
                style={{
                  marginTop: 10,
                }}
              >
                <div className="col-md-4">
                  <LocationWidget
                    isLoading={props.stateFetchLocationById.isLoading}
                    data={props.stateFetchLocationById.data}
                  />
                </div>
                <div className="col-md-8">
                  <TabLocationDetail
                    basicInfoData={props.stateFetchLocationById.data}
                  />
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
// redux
const mapStateProps = (state) => {
  return {
    stateFetchLocationById: state.reducerFetcLocationById,
  };
};
const mapDispatachToProps = (dispatch) => {
  return {
    ActionFetchLocationById: (id) => {
      dispatch(FetchLocationById(id));
    },
  };
};
export default connect(mapStateProps, mapDispatachToProps)(LocationDetail);
