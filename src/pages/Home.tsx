import { useState } from "react";
import MapView from "../Components/MapView";

const Home = () => {
  const userName = localStorage.getItem("userName");
  const userEmail = localStorage.getItem("userEmail");
  const [lat, setLat] = useState<number>(28.67164695112075);
  const [lng, setLng] = useState<number>(30.6902292769242);
  const handleLocationChange = (newLat: number, newLng: number) => {
    setLat(newLat);
    setLng(newLng);
  };
  return (
    <div>
      <h1>Home</h1>
      <p>Welcome, {userName}</p>
      <p>Email: {userEmail}</p>

      <div style={{ padding: "20px" }}>
        <h2>Location Map</h2>
        <p>
          <strong>Latitude:</strong> {lat.toFixed(6)} <br />
          <strong>Longitude:</strong> {lng.toFixed(6)}
        </p>
        <MapView lat={lat} lng={lng} onChange={handleLocationChange} />
      </div>
    </div>
  );
};

export default Home;
