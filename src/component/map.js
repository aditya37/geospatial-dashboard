import { MapContainer, TileLayer, Marker,Popup } from "react-leaflet";
const map = (props) => {
  return (
    <>
      <div>
        <MapContainer
          style={{
            width: "auto",
            height: props.height,
          }}
          center={[52.6376, -1.135171]}
          zoom={12}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[52.6376, -1.135171]}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup> 
          </Marker>
          
        </MapContainer>
      </div>
    </>
  );
};

export default map;
