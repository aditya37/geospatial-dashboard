import React, { useState, useEffect, useMemo, useRef } from "react";
import { connect } from "react-redux";
import L from "leaflet";
import { MapContainer, TileLayer, Marker, GeoJSON } from "react-leaflet";
import { useParams } from "react-router-dom";
import axios from "axios";

import { FetchGeofenceByType } from "../../redux/action/fetchGeofenceByType";

const QAToolGeofence = (props) => {
  let { speed, device_id, geofence_type } = useParams();
  const [map, setMap] = useState(null);
  const [position, setPosition] = useState([-6.1886281, 106.8228031]);
  const markRef = useRef(null);

  // move to current lat long...
  const flayToMap = () => {
    if (map) {
      map.locate().on("locationfound", function (e) {
        map.flyTo(e.latlng, map.getZoom());
        setPosition(e.latlng);
        console.log(e.latlng);
      });
    }
  };

  useEffect(async () => {
    await props.ActionFetchGeofenceByType(geofence_type);
    await flayToMap();
    if (map) {
      setInterval(function () {
        map.invalidateSize();
      }, 100);
    }
  }, [map]);

  var myIcon = L.icon({
    iconUrl:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAApCAYAAADAk4LOAAAFgUlEQVR4Aa1XA5BjWRTN2oW17d3YaZtr2962HUzbDNpjszW24mRt28p47v7zq/bXZtrp/lWnXr337j3nPCe85NcypgSFdugCpW5YoDAMRaIMqRi6aKq5E3YqDQO3qAwjVWrD8Ncq/RBpykd8oZUb/kaJutow8r1aP9II0WmLKLIsJyv1w/kqw9Ch2MYdB++12Onxee/QMwvf4/Dk/Lfp/i4nxTXtOoQ4pW5Aj7wpici1A9erdAN2OH64x8OSP9j3Ft3b7aWkTg/Fm91siTra0f9on5sQr9INejH6CUUUpavjFNq1B+Oadhxmnfa8RfEmN8VNAsQhPqF55xHkMzz3jSmChWU6f7/XZKNH+9+hBLOHYozuKQPxyMPUKkrX/K0uWnfFaJGS1QPRtZsOPtr3NsW0uyh6NNCOkU3Yz+bXbT3I8G3xE5EXLXtCXbbqwCO9zPQYPRTZ5vIDXD7U+w7rFDEoUUf7ibHIR4y6bLVPXrz8JVZEql13trxwue/uDivd3fkWRbS6/IA2bID4uk0UpF1N8qLlbBlXs4Ee7HLTfV1j54APvODnSfOWBqtKVvjgLKzF5YdEk5ewRkGlK0i33Eofffc7HT56jD7/6U+qH3Cx7SBLNntH5YIPvODnyfIXZYRVDPqgHtLs5ABHD3YzLuespb7t79FY34DjMwrVrcTuwlT55YMPvOBnRrJ4VXTdNnYug5ucHLBjEpt30701A3Ts+HEa73u6dT3FNWwflY86eMHPk+Yu+i6pzUpRrW7SNDg5JHR4KapmM5Wv2E8Tfcb1HoqqHMHU+uWDD7zg54mz5/2BSnizi9T1Dg4QQXLToGNCkb6tb1NU+QAlGr1++eADrzhn/u8Q2YZhQVlZ5+CAOtqfbhmaUCS1ezNFVm2imDbPmPng5wmz+gwh+oHDce0eUtQ6OGDIyR0uUhUsoO3vfDmmgOezH0mZN59x7MBi++WDL1g/eEiU3avlidO671bkLfwbw5XV2P8Pzo0ydy4t2/0eu33xYSOMOD8hTf4CrBtGMSoXfPLchX+J0ruSePw3LZeK0juPJbYzrhkH0io7B3k164hiGvawhOKMLkrQLyVpZg8rHFW7E2uHOL888IBPlNZ1FPzstSJM694fWr6RwpvcJK60+0HCILTBzZLFNdtAzJaohze60T8qBzyh5ZuOg5e7uwQppofEmf2++DYvmySqGBuKaicF1blQjhuHdvCIMvp8whTTfZzI7RldpwtSzL+F1+wkdZ2TBOW2gIF88PBTzD/gpeREAMEbxnJcaJHNHrpzji0gQCS6hdkEeYt9DF/2qPcEC8RM28Hwmr3sdNyht00byAut2k3gufWNtgtOEOFGUwcXWNDbdNbpgBGxEvKkOQsxivJx33iow0Vw5S6SVTrpVq11ysA2Rp7gTfPfktc6zhtXBBC+adRLshf6sG2RfHPZ5EAc4sVZ83yCN00Fk/4kggu40ZTvIEm5g24qtU4KjBrx/BTTH8ifVASAG7gKrnWxJDcU7x8X6Ecczhm3o6YicvsLXWfh3Ch1W0k8x0nXF+0fFxgt4phz8QvypiwCCFKMqXCnqXExjq10beH+UUA7+nG6mdG/Pu0f3LgFcGrl2s0kNNjpmoJ9o4B29CMO8dMT4Q5ox8uitF6fqsrJOr8qnwNbRzv6hSnG5wP+64C7h9lp30hKNtKdWjtdkbuPA19nJ7Tz3zR/ibgARbhb4AlhavcBebmTHcFl2fvYEnW0ox9xMxKBS8btJ+KiEbq9zA4RthQXDhPa0T9TEe69gWupwc6uBUphquXgf+/FrIjweHQS4/pduMe5ERUMHUd9xv8ZR98CxkS4F2n3EUrUZ10EYNw7BWm9x1GiPssi3GgiGRDKWRYZfXlON+dfNbM+GgIwYdwAAAAASUVORK5CYII",
    iconSize: [25, 41],
    iconAnchor: [22, 94],
    popupAnchor: [-10, -90],
  });

  const sendRequest = (lat, long, speed, device) => {
    const url =
      "http://127.0.0.1/dev/api/geofence/geofencing/qa/tool/?speed=" +
      parseInt(speed) +
      "&device=" +
      device +
      "&lat=" +
      parseFloat(lat) +
      "&long=" +
      parseFloat(long);
    axios({
      baseURL: url,
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const eventDragMark = useMemo(() => ({
    dragend() {
      const marker = markRef.current;
      if (marker != null) {
        const coord = marker.getLatLng();
        sendRequest(coord.lat, coord.lng, speed, device_id);
        setPosition(coord);
      }
    },
  }));

  return (
    <>
      <MapContainer
        center={[-6.1886281, 106.8228031]}
        zoom={16}
        zoomControl={true}
        scrollWheelZoom={false}
        whenCreated={setMap}
        style={{
          height: "100vh",
        }}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker
          icon={myIcon}
          draggable={true}
          position={position}
          eventHandlers={eventDragMark}
          ref={markRef}
        />
        {/* load geofence area */}
        {props.stateFetchGeofenceByType.data.length <= 0
          ? ""
          : props.stateFetchGeofenceByType.data.map((val) => {
              return <GeoJSON key={val.id} data={JSON.parse(val.geojson)} />;
            })}
      </MapContainer>
    </>
  );
};
const mapStateProps = (state) => {
  return {
    stateFetchGeofenceByType: state.reducerFetchGeofenceByType,
  };
};
const mapDispatachToProps = (dispatch) => {
  return {
    ActionFetchGeofenceByType: (type) => {
      dispatch(FetchGeofenceByType(type));
    },
  };
};
export default connect(mapStateProps, mapDispatachToProps)(QAToolGeofence);
