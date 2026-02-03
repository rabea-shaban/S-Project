import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { LatLng } from "leaflet";

interface MapViewProps {
  lat: number;
  lng: number;
  onChange: (lat: number, lng: number) => void;
}

const MapView: React.FC<MapViewProps> = ({ lat, lng, onChange }) => {
  return (
    <MapContainer
      center={[lat, lng]}
      zoom={13}
      style={{ height: "400px", width: "100%" }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

      <Marker
        position={[lat, lng]}
        draggable={true}
        eventHandlers={{
          dragend: (e) => {
            const marker = e.target;
            const position: LatLng = marker.getLatLng();

            onChange(position.lat, position.lng);
          },
        }}
      >
        <Popup>Drag me 😄</Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapView;
