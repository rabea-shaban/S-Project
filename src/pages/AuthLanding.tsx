import React from "react";
import { User, LogIn, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const AuthLanding: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f6f1ea]">
      <div className="flex flex-col items-center text-center">
        <div className="w-14 h-14 bg-[#5f7f65] rounded-2xl flex items-center justify-center shadow-md mb-4">
          <Shield className="text-white" size={26} />
        </div>

        <h1 className="text-2xl font-semibold text-gray-800">CareTrace</h1>

        <p className="text-sm text-gray-500 mt-1 mb-8">
          Safe, connected, always together.
        </p>

        <div className="bg-white rounded-2xl shadow-lg w-[340px] p-5">
          <Link
            to={"/auth/SelectRole"}
            className="w-full flex items-center justify-center gap-2 bg-[#7a9b80] hover:bg-[#6d8f73] text-white font-medium py-3 rounded-xl transition"
          >
            <User size={18} />
            Sign Up
          </Link>

          <Link
            to={"/auth/login"}
            className="w-full mt-3 flex items-center justify-center gap-2 border border-gray-200 hover:bg-gray-50 text-gray-700 font-medium py-3 rounded-xl transition"
          >
            <LogIn size={18} />
            Log In
          </Link>
        </div>

        {/* Terms */}
        <p className="text-xs text-gray-400 mt-4">
          By continuing you agree to our{" "}
          <span className="underline cursor-pointer">Terms & Privacy</span>
        </p>
      </div>
    </div>
  );
};

export default AuthLanding;
