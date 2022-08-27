import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";

const CardDeviceLog = ({ values }, props) => {
  const valueData = JSON.parse(values);
  return (
    <>
      <div className="card">
        <div className="card-header border-0">
          <div className="d-flex justify-content-between">
            <h3 className="card-title">Device Log</h3>
            <a href="javascript:void(0);">View Report</a>
          </div>
        </div>
        <div className="card-body">
          <Table className="table table-bordered">
            <thead>
              <tr>
                <th>Device Id</th>
                <th>Activity</th>
                <th>Timestmap</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {valueData.map((item) => {
                return (
                  <tr>
                    <td>{item.device_id}</td>
                    <td>{item.reason}</td>
                    <td>{item.recorded_at}</td>
                    <td>
                      <span className="badge bg-primary">{item.status}</span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
};
export default CardDeviceLog;
