import { useState, useEffect, useRef } from "react";
import MapView from "./MapView";
import { FiMapPin } from "react-icons/fi";

type Props = {
  tracking: boolean;
  setTracking: (value: boolean) => void;
};

const LiveMapSection = ({ tracking, setTracking }: Props) => {
  const [lat, setLat] = useState(30.0424);
  const [lng, setLng] = useState(31.2398);
  const [statusMessage, setStatusMessage] = useState("");

  // لمتابعة التغيير السابق
  const prevTracking = useRef(tracking);

  // مراقبة التحويل Live <-> Offline
  useEffect(() => {
    if (prevTracking.current && !tracking) {
      setStatusMessage("⚠️ Tracking turned OFF (Offline)");
    }

    if (!prevTracking.current && tracking) {
      setStatusMessage("✅ Tracking resumed (Live)");
    }

    prevTracking.current = tracking;
  }, [tracking]);

  const handleLocationChange = (newLat: number, newLng: number) => {
    if (!tracking) return; // ❌ لو Offline ما نحدّثش

    setLat(newLat);
    setLng(newLng);
  };

  return (
    <div className="space-y-6">
      {/* ===== Map ===== */}
      <div className="bg-white rounded-2xl shadow p-4 relative">
        <div className="flex items-center gap-2 mb-2 text-sm font-medium">
          <FiMapPin className="text-pink-500" />
          Live Map
        </div>

        <MapView lat={lat} lng={lng} onChange={handleLocationChange} />

        {/* Current Location */}
        <div className="absolute bottom-4 left-4 bg-white rounded-xl shadow px-4 py-2 text-xs">
          <p className="text-gray-500">Current Location</p>
          <p className="font-medium">
            {lat.toFixed(4)}° N, {lng.toFixed(4)}° E
          </p>
        </div>
      </div>

      {/* ===== Status Cards ===== */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Stat title="Status" value={tracking ? "Tracking" : "Offline"} />
        <Stat title="Last Update" value="06:24 PM" />
        <Stat title="Battery" value="87%" />
      </div>

      {/* ===== Toggle ===== */}
      <div className="bg-white rounded-2xl shadow px-6 py-4 flex justify-between items-center">
        <div>
          <p className="text-sm font-medium">Live Tracking</p>
          <p className="text-xs text-gray-500">Real-time location updates</p>
        </div>

        <button
          onClick={() => setTracking(!tracking)}
          className={`w-12 h-6 rounded-full p-1 transition
          ${tracking ? "bg-[#7a9b80]" : "bg-gray-300"}`}
        >
          <div
            className={`w-4 h-4 bg-white rounded-full transition
            ${tracking ? "translate-x-6" : ""}`}
          />
        </button>
      </div>
    </div>
  );
};

export default LiveMapSection;

/* ===== Small Stat Card ===== */
const Stat = ({ title, value }: { title: string; value: string }) => (
  <div className="bg-[#eaf4ec] rounded-2xl shadow p-4 text-center">
    <p className="text-xs text-gray-500">{title}</p>
    <p className="text-sm font-semibold text-[#5f7f65]">{value}</p>
  </div>
);
