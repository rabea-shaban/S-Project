import { useState } from "react";
import Navbar from "../Components/Navbar";
import LiveMapSection from "../Components/LiveMapSection";
import DetailsSection from "../Components/DetailsSection";
import Container from "../Components/ui/Container";

const Home = () => {
  const [tab, setTab] = useState<"map" | "details">("map");
  const [tracking, setTracking] = useState(true);

  return (
    <>
      <Container className="border-b border-gray-200">
        <Navbar tracking={tracking} />
      </Container>
      <div className="bg-[#f6f1ea] min-h-screen p-6">
        <div className="max-w-5xl mx-auto space-y-6">
          {/* Tabs */}
          <div className="flex justify-between gap-2 bg-[#ece8df] p-5 rounded-xl ">
            <button
              onClick={() => setTab("map")}
              className={`px-4 py-2 rounded-lg ${
                tab === "map" ? "bg-white shadow" : "text-gray-500"
              }`}
            >
              Live Map
            </button>

            <button
              onClick={() => setTab("details")}
              className={`px-4 py-2 rounded-lg ${
                tab === "details" ? "bg-white shadow" : "text-gray-500"
              }`}
            >
              Details
            </button>
          </div>

          {tab === "map" && (
            <LiveMapSection tracking={tracking} setTracking={setTracking} />
          )}

          {tab === "details" && <DetailsSection />}
        </div>
      </div>
    </>
  );
};

export default Home;
