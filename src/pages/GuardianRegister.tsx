import { useNavigate } from "react-router-dom";
import { ArrowLeft, User, Heart, MapPin } from "lucide-react";

const GuardianRegister = () => {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // TODO: API call
    alert("Account created & token generated ✅");
  };

  return (
    <div className="min-h-screen bg-[#f6f1ea] flex justify-center py-16 px-4">
      <div className="w-full max-w-[720px]">
        {/* Back */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-gray-600 mb-6"
        >
          <ArrowLeft size={18} />
          Back
        </button>

        {/* Header */}
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 bg-[#e7efe9] rounded-xl flex items-center justify-center">
            <User className="text-[#5f7f65]" size={20} />
          </div>
          <div>
            <h1 className="text-xl font-semibold text-gray-800">
              Guardian Sign Up
            </h1>
            <p className="text-sm text-gray-500">
              Your info & your patient's details
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Guardian Information */}
          <div className="bg-white rounded-2xl shadow p-6">
            <h2 className="flex items-center gap-2 text-[#5f7f65] font-medium mb-4">
              🛡️ Guardian Information
            </h2>

            <div className="space-y-4">
              <input
                placeholder="Full Name (as in National ID)"
                className="input"
              />
              <input placeholder="National ID" className="input" />
              <input type="email" placeholder="Email" className="input" />
              <input placeholder="Phone" className="input" />
              <input placeholder="Address" className="input" />
            </div>
          </div>

          {/* Patient Information */}
          <div className="bg-white rounded-2xl shadow p-6">
            <h2 className="flex items-center gap-2 text-[#e07a6a] font-medium mb-4">
              ❤️ Patient Information
            </h2>

            <div className="space-y-4">
              <input
                placeholder="Full Name (as in National ID)"
                className="input"
              />
              <input placeholder="National ID" className="input" />
              <input type="email" placeholder="Email" className="input" />
              <input placeholder="Phone" className="input" />
              <input placeholder="Address" className="input" />
            </div>
          </div>

          {/* Location */}
          <div className="bg-white rounded-2xl shadow p-6">
            <h2 className="flex items-center gap-2 text-[#5f7f65] font-medium mb-4">
              📍 Patient&apos;s Default Location
            </h2>

            <button
              type="button"
              className="w-full border-2 border-dashed rounded-xl p-6
              flex flex-col items-center gap-2 text-gray-500 hover:border-[#7a9b80]"
            >
              <div className="w-10 h-10 bg-[#e7efe9] rounded-xl flex items-center justify-center">
                <MapPin className="text-[#5f7f65]" />
              </div>
              <p className="font-medium">Pick a location</p>
              <span className="text-sm">
                Map pin · GPS · or manual coordinates
              </span>
            </button>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-[#7a9b80] hover:bg-[#6d8f73]
            text-white py-4 rounded-xl font-medium transition"
          >
            Create Account & Get Token
          </button>
        </form>
      </div>

      {/* Input Style */}
      <style>
        {`
          .input {
            width: 100%;
            padding: 12px 16px;
            border-radius: 12px;
            border: 1px solid #e5e7eb;
            outline: none;
          }
          .input:focus {
            border-color: #7a9b80;
            box-shadow: 0 0 0 2px rgba(122,155,128,0.2);
          }
        `}
      </style>
    </div>
  );
};

export default GuardianRegister;
