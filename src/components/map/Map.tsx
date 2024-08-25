import "./Map.scss";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import Icon from "../../assets/favicon.png";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { INFO } from "../../constants/constants";
import { MapContainer } from "react-leaflet/MapContainer";
import { TileLayer } from "react-leaflet/TileLayer";
import { Marker } from "react-leaflet/Marker";

const Map = () => {
  const latLong: L.LatLngExpression = {
    lat: 41.96067925572924,
    lng: -88.08193958465841,
  };

  const defaultIcon = L.icon({
    iconUrl: Icon,
    iconSize: [35, 35],
    className: "map-marker",
  });

  L.Marker.prototype.options.icon = defaultIcon;
  return (
    <div className="map-container">
      <MapContainer
        center={latLong}
        zoom={15}
        attributionControl={false}
        zoomControl={true}
        scrollWheelZoom={false}
        dragging={false}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={latLong}></Marker>
      </MapContainer>
      <div className="map-info">
        <a
          className="map-address"
          href={`https://maps.google.com/maps?q=${INFO.ADDRESS}`}
          target="_blank"
          rel="noreferrer"
        >
          <div className="info-container">
            <p>{INFO.ADDRESS}</p>
            <p>{INFO.HOURS}</p>
          </div>
          <div className="info-icon">
            <KeyboardArrowRightIcon fontSize="inherit" />
          </div>
        </a>
      </div>
    </div>
  );
};

export default Map;
