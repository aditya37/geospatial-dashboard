const CardMobilityLog = (props) => {
  return (
    <>
      <div className="card">
        <div
          className="card-header border-0"
          style={{
            backgroundColor: "#FFFFFF",
          }}
        >
          <div className="d-flex justify-content-between">
            <h3 className="card-title">Mobility Log</h3>
            <a href="javascript:void(0);">View Detail</a>
          </div>
        </div>
        <div className="card-body">
          <div class="d-flex justify-content-between align-items-center border-bottom mb-3">
            <p class="text-success text-sm">
              <span class="text-muted">Geofencing Inside Detect</span>
            </p>
            <p class="d-flex flex-column text-right">
              <span class="font-weight-bold">
                <i class="text-success"></i> {props.inside}
              </span>
            </p>
          </div>
          <div class="d-flex justify-content-between align-items-center border-bottom mb-3">
            <p class="text-success text-sm">
              <span class="text-muted">Geofencing Exit Detect</span>
            </p>
            <p class="d-flex flex-column text-right">
              <span class="font-weight-bold">
                <i class="text-success"></i> {props.exit}
              </span>
            </p>
          </div>
          <div class="d-flex justify-content-between align-items-center border-bottom mb-3">
            <p class="text-success text-sm">
              <span class="text-muted">Geofencing Enter Detect</span>
            </p>
            <p class="d-flex flex-column text-right">
              <span class="font-weight-bold">
                <i class="text-success"></i>  {props.enter}
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default CardMobilityLog;
