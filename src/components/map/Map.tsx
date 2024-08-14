import "./Map.scss";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { INFO } from "../../constants/constants";

const Map = () => {
  const latLong: L.LatLngExpression = {
    lat: 41.96067925572924,
    lng: -88.08193958465841,
  };

  const defaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconAnchor: [15, 18],
  });

  L.Marker.prototype.options.icon = defaultIcon;
  return (
    <div className="map-container">
      <MapContainer
        center={latLong}
        zoom={14}
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
