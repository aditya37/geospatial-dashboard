import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, FeatureGroup } from "react-leaflet";
import { EditControl } from "react-leaflet-draw";
import L from "leaflet";

const EditableMap = (props) => {
  const { onCreated } = props;
  const [map, setMap] = useState(null);
  useEffect(() => {
    if (map) {
      // move to current location
      map.locate().on("locationfound", function (e) {
        map.flyTo(e.latlng, map.getZoom());
        const radius = e.accuracy;
        const circle = L.circle(e.latlng, radius);
        circle.addTo(map);
      });
      setInterval(function () {
        map.invalidateSize();
      }, 100);
    }
  }, [map]);
  return (
    <>
      <div>
        <MapContainer
          style={{
            width: "auto",
            height: props.height,
          }}
          center={[-7.2190419, 111.8642217]}
          zoom={30}
          scrollWheelZoom={false}
          whenCreated={setMap}
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <FeatureGroup>
            <EditControl
              position="topright"
              draw={{
                polygon: true,
                rectangle: false,
                marker: true,
                circle: false,
                polyline: true,
                circlemarker: false,
              }}
              onCreated={onCreated}
            />
          </FeatureGroup>
        </MapContainer>
      </div>
    </>
  );
};

export default EditableMap;
