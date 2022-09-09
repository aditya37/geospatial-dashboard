import { MapContainer, TileLayer, GeoJSON, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Form } from "react-bootstrap";

const TabItemNearbyDevice = (props) => {
  const ResizeMap = () => {
    const map = useMap();
    map._onResize();
    map.invalidateSize()
    return null;
  };
  return (
    <>
      <div className="row">
        <div className="col-md-5">
          <Form>
            <Form.Group
              className="sm-2"
              style={{
                marginBottom: "5px",
              }}
            >
              <small className="sm-2">Device Type</small>
              <Form.Select size="sm">
                <option selected={true}>Android</option>
                <option>IoT</option>
              </Form.Select>
            </Form.Group>
            <Form.Group
              className="sm-2"
              style={{
                marginBottom: "4px",
              }}
            >
              <small className="sm-2">Radius (M)</small>
              <Form.Select size="sm">
                <option selected={true}>5</option>
                <option>10</option>
                <option>15</option>
              </Form.Select>
            </Form.Group>
            <Form.Group
              className="sm-2"
              style={{
                marginBottom: "4px",
              }}
            >
              <small className="sm-2">Status</small>
              <Form.Select size="sm">
                <option selected={true}>ON_RECORD</option>
                <option>HEALTH</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="sm-2">
              <small className="sm-2">Count</small>
              <Form.Control type="number" placeholder="Count" />
            </Form.Group>
          </Form>
        </div>
        <div className="col-md-7">
          <MapContainer
            style={{
              width: "auto",
              height: "310px",
            }}
            center={[-7.153669884759263, 111.90089106559752]}
            zoom={20}
            scrollWheelZoom={false}
          >
            <ResizeMap />
            <TileLayer
              updateInterval={90}
              updateWhenIdle="true"
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
            />
          </MapContainer>
        </div>
      </div>
    </>
  );
};
export default TabItemNearbyDevice;
