import { Link } from "react-router-dom";
const TableLocationsCol = [
  {
    name: "Location Name",
    selector: (row) => row.location_name,
  },
  {
    name: "Province Name",
    selector: (row) => row.administratif_area.province_name,
  },
  {
    name: "City Name",
    selector: (row) => row.administratif_area.city_name,
  },
  {
    name: "Type",
    selector: (row) => row.location_type,
  },
  {
    name: "With Goefencing",
    selector: (row) => (row.is_geofence == 1 ? "True" : "False"),
  },
  {
    name: "",
    selector: (row) => {
      var detailLocationUrl =
        "/location/" + row.id + "/lat/" + row.lat + "/long/" + row.long;
      var editUrl = "/location/edit/" + row.id;
      return (
        <div className="text-right py-0 align-middle">
          <div className="btn-group btn-group-md">
            <Link
              to={detailLocationUrl}
              className="btn btn-primary"
              style={{
                marginRight: "10px",
              }}
            >
              <i class="fas fa-eye"></i>
            </Link>
            <Link to={editUrl} className="btn btn-info">
              <i className="fas fa-edit"></i>
            </Link>
            <Link
              to="/"
              className="btn btn-danger"
              style={{
                marginLeft: "4px",
                marginRight: "15px",
              }}
            >
              <i class="fas fa-trash"></i>
            </Link>
          </div>
        </div>
      );
    },
  },
];
export default TableLocationsCol;
