import { Link } from "react-router-dom";
const ColTableGeofenceArea = [
  {
    name: "Area name",
    selector: (row) => row.name,
  },
  {
    name: "Channel Name",
    selector: (row) => row.channel_name,
  },
  {
    name: "Type Name",
    selector: (row) => row.type_name,
  },
  {
    name: "Detect",
    selector: (row) => row.detect.join(","),
  },
  {
    name: "",
    selector: (row) => {
      console.log(row)
      var detailUrl = "/geofence/" + row.id;
      var editUrl = "/geofence/edit/"+ row.id
      return (
        <div className="text-right py-0 align-middle">
          <div className="btn-group btn-group-md">
            <Link
              to={detailUrl}
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
export default ColTableGeofenceArea;
