const CardMobilityLog = () => {
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
                <i class="text-success"></i> 12
              </span>
            </p>
          </div>
          <div class="d-flex justify-content-between align-items-center border-bottom mb-3">
            <p class="text-success text-sm">
              <span class="text-muted">Geofencing Exit Detect</span>
            </p>
            <p class="d-flex flex-column text-right">
              <span class="font-weight-bold">
                <i class="text-success"></i> 1200
              </span>
            </p>
          </div>
          <div class="d-flex justify-content-between align-items-center border-bottom mb-3">
            <p class="text-success text-sm">
              <span class="text-muted">Geofencing Enter Detect</span>
            </p>
            <p class="d-flex flex-column text-right">
              <span class="font-weight-bold">
                <i class="text-success"></i> 12
              </span>
            </p>
          </div>
        </div>
        <div className="card-footer">
          <span>Recorded at: 2022-01-11</span>
        </div>
      </div>
    </>
  );
};
export default CardMobilityLog;
