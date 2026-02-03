import { useNavigate } from "react-router-dom";
import { ArrowLeft, Link as LinkIcon } from "lucide-react";
import { useState } from "react";

const PatientLink = () => {
  const navigate = useNavigate();
  const [token, setToken] = useState("");

  const handleSubmit = () => {
    if (!token.trim()) return;

    // TODO: replace with API call
    localStorage.setItem("patientLinkToken", token);

    alert("Account linked successfully ✅");
    navigate("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f6f1ea] relative">
      {/* Back */}
      <button
        onClick={() => navigate(-1)}
        className="absolute top-10 left-10 flex items-center gap-2 text-gray-600 hover:text-gray-800"
      >
        <ArrowLeft size={18} />
        Back
      </button>

      {/* Card */}
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-[420px] p-8 text-center">
        {/* Icon */}
        <div className="w-14 h-14 mx-auto mb-4 bg-[#fdecea] rounded-2xl flex items-center justify-center">
          <LinkIcon className="text-[#d97a6f]" size={26} />
        </div>

        {/* Title */}
        <h1 className="text-xl font-semibold text-gray-800 mb-2">
          Enter Your Link Token
        </h1>
        <p className="text-sm text-gray-500 mb-6">
          Your guardian shared a token.
          <br />
          Paste it below to connect.
        </p>

        {/* Input */}
        <div className="text-left mb-6">
          <label className="text-sm text-gray-600 flex items-center gap-2 mb-1">
            🔑 Link Token
          </label>
          <input
            type="text"
            placeholder="ABCD-1234-EFGH"
            value={token}
            onChange={(e) => setToken(e.target.value.toUpperCase())}
            className="w-full px-4 py-3 rounded-xl border border-gray-300 outline-none
            focus:ring-2 focus:ring-[#d97a6f] tracking-widest text-center"
          />
        </div>

        {/* Button */}
        <button
          onClick={handleSubmit}
          className="w-full bg-[#d97a6f] hover:bg-[#c96d63] text-white py-3 rounded-xl font-medium transition"
        >
          Link Account
        </button>
      </div>
    </div>
  );
};

export default PatientLink;
