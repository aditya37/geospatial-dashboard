import { Table } from "react-bootstrap";
const TabItemBasicInfoLocation = (props) => {
  
  const datas = props.data
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
                <td>{datas.location_id}</td>
              </tr>
              <tr>
                <td>Location Name</td>
                <td>{datas.location_name}</td>
              </tr>
              <tr>
                <td>Location Type</td>
                <td>{datas.location_type}</td>
              </tr>
              <tr>
                <td>With Geofencing</td>
                <td>{datas.is_geofence == 1 ? "True" : "False"}</td>
              </tr>
              <tr>
                <td>Geofence Type</td>
                <td>{datas.geofence_type}</td>
              </tr>
              <tr>
                <td>Geometry Type</td>
                <td>{datas.geometry_type}</td>
              </tr>
              <tr>
                <td>Area (M2)</td>
                <td>{datas.area}</td>
              </tr>
              <tr>
                <td>Created At</td>
                <td>{datas.created_at}</td>
              </tr>
              <tr>
                <td>Modified At</td>
                <td>{datas.modified_at}</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
};
export default TabItemBasicInfoLocation;
