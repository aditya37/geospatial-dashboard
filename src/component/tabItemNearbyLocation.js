import Map from "../component/map";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  solid,
  regular,
  brands,
} from "@fortawesome/fontawesome-svg-core/import.macro";
const TabItemNearbyLocation = () => {
  return (
    <>
      <div className="row">
        <div
          className="col-md-4 list-group"
          style={{
            overflowY: "scroll",
            height: "60vh",
          }}
        >
          <div className="list-group-item">
            <div class="d-flex justify-content-between align-items-center border-bottom mb-3">
              <p class="text-warning text-l">
                <FontAwesomeIcon icon={solid("road")} />
              </p>
              <p class="d-flex flex-column text-right">
                <span class="text-muted font-weight-bold">Pasar Dander</span>
                <small className="text-muted">Radius 2 meter</small>
                <small className="text-muted">Market</small>
              </p>
            </div>
            <div class="d-flex justify-content-between align-items-center border-bottom mb-3">
              <p class="text-warning text-l">
                <FontAwesomeIcon icon={solid("road")} />
              </p>
              <p class="d-flex flex-column text-right">
                <span class="text-muted font-weight-bold">Pasar Dander</span>
                <small className="text-muted">Radius 2 meter</small>
                <small className="text-muted">Market</small>
              </p>
            </div>
            <div class="d-flex justify-content-between align-items-center border-bottom mb-3">
              <p class="text-warning text-l">
                <FontAwesomeIcon icon={solid("road")} />
              </p>
              <p class="d-flex flex-column text-right">
                <span class="text-muted font-weight-bold">Pasar Dander</span>
                <small className="text-muted">Radius 2 meter</small>
                <small className="text-muted">Market</small>
              </p>
            </div>
            <div class="d-flex justify-content-between align-items-center border-bottom mb-3">
              <p class="text-warning text-l">
                <FontAwesomeIcon icon={solid("road")} />
              </p>
              <p class="d-flex flex-column text-right">
                <span class="text-muted font-weight-bold">Pasar Dander</span>
                <small className="text-muted">Radius 2 meter</small>
                <small className="text-muted">Market</small>
              </p>
            </div>
            <div class="d-flex justify-content-between align-items-center border-bottom mb-3">
              <p class="text-warning text-l">
                <FontAwesomeIcon icon={solid("road")} />
              </p>
              <p class="d-flex flex-column text-right">
                <span class="text-muted font-weight-bold">Pasar Dander</span>
                <small className="text-muted">Radius 2 meter</small>
                <small className="text-muted">Market</small>
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-8">
          <Map height="60vh"></Map>
        </div>
      </div>
    </>
  );
};
export default TabItemNearbyLocation;
