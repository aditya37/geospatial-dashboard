import { MapContainer, TileLayer, Marker, FeatureGroup } from 'react-leaflet';
import L from 'leaflet';
import { EditControl } from 'react-leaflet-draw';

const EditableMap = (props) => {
  const { onCreated, onDeleted } = props;
  return (
    <>
      <div>
        <MapContainer
          style={{
            width: 'auto',
            height: props.height
          }}
          center={[52.6376, -1.135171]}
          zoom={30}
          scrollWheelZoom={false}
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <FeatureGroup>
            <EditControl
              position="topright"
              draw={{
                polygon: true,
                rectangle: false,
                marker: false,
                circle: false,
                polyline: false,
                circlemarker: false
              }}
              onCreated={onCreated}
              onDeleted={onDeleted}
            />
          </FeatureGroup>
        </MapContainer>
      </div>
    </>
  );
};

export default EditableMap;
