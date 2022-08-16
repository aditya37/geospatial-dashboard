import { Table } from "react-bootstrap";

const CardDeviceLog = () => {
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
                <th>#</th>
                <th>Device Id</th>
                <th>Activity</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1.</td>
                <td>bb122</td>
                <td>Update software</td>
                <td>
                  <span className="badge bg-danger">bahaya</span>
                </td>
              </tr>
              <tr>
                <td>2.</td>
                <td>bb122</td>
                <td>Update software</td>
                <td>
                  <span className="badge bg-danger">bahaya</span>
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
        <div className="card-footer">
            <span>Recorded at: 2022-01-11</span>
        </div>
      </div>
    </>
  );
};
export default CardDeviceLog;
