import ReactLoading from "react-loading";
const LocationWidget = (props) => {
  const { data, isLoading } = props;

  return (
    <div className="card card-widget widget-user shadow">
      <div
        className="widget-user-header bg-info"
        style={{
          backgroundImage: `url(${
            process.env.PUBLIC_URL + "/dist/img/photo1.png"
          })`,
        }}
      >
        {isLoading == true ? (
          <ReactLoading type="spin" color="white" height={30} width={30} />
        ) : (
          <div>
            <h3 className="widget-user-username">{data.location_name}</h3>
            <h5 className="widget-user-desc">{data.location_type}</h5>
          </div>
        )}
      </div>

      <div className="card-body box-profile">
        <ul className="list-group list-group-unbordered mb-3">
          {isLoading == true ? (
            <small>Fetching...</small>
          ) : (
            <>
              <li className="list-group-item">
                <b>Id</b>{" "}
                <span className="float-right">{data.location_id}</span>
              </li>
              <li className="list-group-item">
                <b>Type</b>{" "}
                <span className="float-right">{data.location_type}</span>
              </li>
              <li className="list-group-item">
                <b>Avg, Mobilty</b>{" "}
                <span className="float-right">{data.avg_mobility}</span>
              </li>
              <li className="list-group-item">
                <b>Last Modified</b>{" "}
                <span className="float-right">{data.modified_at}</span>
              </li>
              <li className="list-group-item">
                <b>With Geofencing</b>{" "}
                <span className="float-right">{data.is_geofence == 1 ? "True" : "False"}</span>
              </li>
              <li className="list-group-item">
                <b>Geofence Type</b>{" "}
                <span className="float-right">{data.geofence_type}</span>
              </li>
              <li className="list-group-item">
                <b>Geometry Type</b>{" "}
                <span className="float-right">{data.geometry_type}</span>
              </li>
              <li className="list-group-item">
                <b>Area</b>{" "}
                <span className="float-right">{data.area}</span>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};
export default LocationWidget;
