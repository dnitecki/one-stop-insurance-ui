import "./Map.scss";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import PlaceIcon from "@mui/icons-material/Place";
import { INFO } from "../../constants/constants";
import { Phone } from "@mui/icons-material";

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
        <div className="map-address">
          <PlaceIcon fontSize="inherit" />
          <p>{INFO.ADDRESS}</p>
        </div>
        <div>
          <Phone fontSize="inherit" />
          <p>{INFO.PHONE}</p>
        </div>
      </div>
    </div>
  );
};

export default Map;
