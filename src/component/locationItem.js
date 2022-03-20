import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  solid,
  regular,
  brands,
} from "@fortawesome/fontawesome-svg-core/import.macro";

const locationItem = (props) => {
  const locationItems = props.items || [];
  return (
    <div
      className="list-group"
      style={{
        overflowY: "scroll",
        height: "40vh",
      }}
    >
      {locationItems.map((val, index) => {
        return (
          <div class="list-group-item">
            <div class="d-flex justify-content-between align-items-center border-bottom mb-3">
              <p class="text-warning text-xl">
                {val.shape.properties.location_type == "ROAD" ? (
                  <FontAwesomeIcon icon={solid("road")} />
                ) : val.shape.properties.location_type == "MOSQUE" ? (
                  <FontAwesomeIcon icon={solid("mosque")} />
                ) : val.shape.properties.location_type == "CRUCH" ? (
                  <FontAwesomeIcon icon={solid("cross")} />
                ) : (
                  <FontAwesomeIcon icon={solid("building")} />
                )}
              </p>
              <p class="d-flex flex-column text-right">
                <span class="text-muted font-weight-bold">
                  {val.location_name}
                </span>
                <span class="text-muted">
                  {val.administratif_area.province_name}
                </span>
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default locationItem;
