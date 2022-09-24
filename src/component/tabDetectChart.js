import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { FetchAvgDetectByArea } from "../redux/action/fetchAvgDetectByArea";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const TabDetectChart = (props) => {
  const { geofence_id } = props;
  React.useEffect(async () => {
    // get data from backend.
    // will show data last 7 day from now
    await props.ActionFetchAvgDetect(geofence_id, 7);
  }, []);

  const data = {
    labels: props.stateFetchAvgDetect.labels,
    datasets: [
      {
        label: "enter",
        data: props.stateFetchAvgDetect.enter,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "exit",
        data: props.stateFetchAvgDetect.exit,
        borderColor: "rgb(242, 42, 14)",
        backgroundColor: "rgba(242, 42, 14, 0.5)",
      },
      {
        label: "inside",
        data: props.stateFetchAvgDetect.inside,
        borderColor: "rgb(212, 245, 49)",
        backgroundColor: "rgb(212, 245, 49,0.5)",
      },
    ],
  };
  return (
    <>
      {props.stateFetchAvgDetect.isLoading == true ? (
        <small>{props.stateFetchAvgDetect.message}</small>
      ) : (
        <Line data={data} />
      )}
    </>
  );
};
// redux
const mapStateProps = (state) => {
  return {
    stateFetchAvgDetect: state.reducerFetchAvgByArea,
  };
};
const mapDispatachToProps = (dispatch) => {
  return {
    ActionFetchAvgDetect: (area_id, interval) => {
      dispatch(FetchAvgDetectByArea(area_id, interval));
    },
  };
};
export default connect(mapStateProps, mapDispatachToProps)(TabDetectChart);
