const LocationWidget = () => {
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
        <h3 className="widget-user-username">Pasar Dander</h3>
        <h5 className="widget-user-desc">Market</h5>
      </div>

      <div className="card-body box-profile">
        <ul className="list-group list-group-unbordered mb-3">
          <li className="list-group-item">
            <b>Type</b> <span className="float-right">Market</span>
          </li>
          <li className="list-group-item">
            <b>Avg, Mobilty</b> <span className="float-right">4,5</span>
          </li>
          <li className="list-group-item">
            <b>Last Modified</b> <span className="float-right">2022-01-11</span>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default LocationWidget;
