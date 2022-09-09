import { MapContainer, TileLayer, GeoJSON, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
const TabItemNearbyLocation = (props) => {
  const ResizeMap = () => {
    const map = useMap();
    map._onResize();
    map.invalidateSize()
    return null;
  };
  return (
    <>
      <MapContainer
        style={{
          width: "auto",
          height: "310px",
        }}
        center={[props.lat, props.long]}
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
    </>
  );
};
export default TabItemNearbyLocation;
