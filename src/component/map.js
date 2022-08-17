import React from "react";
import { MapContainer, TileLayer, GeoJSON, Popup } from "react-leaflet";

const map = (props) => {
  const geojsonData = props.data || [];
  const { onEachFeature } = props;
  return (
    <>
      <div>
        <MapContainer
          style={{
            width: "auto",
            height: props.height,
          }}
          center={[-6.2140576, 106.8141081]}
          zoom={40}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {/* if available geojson */}
          {geojsonData.length > 0
            ? geojsonData.map((val) => {
                return (
                  <>
                    <GeoJSON
                      key={val.id}
                      data={val.shape}
                      onEachFeature={onEachFeature}
                    />
                  </>
                );
              })
            : ""}
        </MapContainer>
      </div>
    </>
  );
};

export default map;
