import { Table } from "react-bootstrap";
const TabItemBasicInfoLocation = () => {
  return (
    <>
      <div className="row">
        <div className="col-md-12">
          <Table
            className="table"
            striped="true"
            style={{
              marginLeft: "4px",
            }}
          >
            <thead>
              <tr>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Registered Id</td>
                <td>1</td>
              </tr>
              <tr>
                <td>Location Name</td>
                <td>Pasar Dander</td>
              </tr>
              <tr>
                <td>Location Type</td>
                <td>Market</td>
              </tr>
              <tr>
                <td>With Geofencing</td>
                <td>Yes</td>
              </tr>
              <tr>
                <td>Geofence Type</td>
                <td>Tourist</td>
              </tr>
              <tr>
                <td>Geometry Type</td>
                <td>Point</td>
              </tr>
              <tr>
                <td>Area (M2)</td>
                <td>4,5</td>
              </tr>
              <tr>
                <td>Created At</td>
                <td>2022-08-17</td>
              </tr>
              <tr>
                <td>Modified At</td>
                <td>2022-08-17</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
};
export default TabItemBasicInfoLocation;
