import { Link, useNavigate } from "react-router-dom";
import { Shield, User, Heart } from "lucide-react";

type Role = "guardian" | "patient";

const SelectRole = () => {
  const navigate = useNavigate();

  const handleSelectRole = (role: Role) => {
    // حفظ الدور
    localStorage.setItem("signupRole", role);

    // توجيه حسب الدور
    if (role === "guardian") {
      navigate("/auth/guardian");
    } else {
      navigate("/auth/patient");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f6f1ea]">
      <div className="w-full max-w-[520px] text-center">
        {/* Logo */}
        <div className="flex justify-center mb-4">
          <div className="w-14 h-14 bg-[#5f7f65] rounded-2xl flex items-center justify-center shadow">
            <Shield className="text-white" size={26} />
          </div>
        </div>

        {/* App Name */}
        <h1 className="text-2xl font-semibold text-gray-800">CareTrace</h1>
        <p className="text-sm text-gray-500 mt-1 mb-8">
          Safe, connected, always together.
        </p>

        {/* Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h2 className="text-lg font-medium text-gray-700 mb-6">
            Who are you signing up as?
          </h2>

          {/* Roles */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Guardian */}
            <button
              onClick={() => handleSelectRole("guardian")}
              className="group border rounded-2xl p-6 transition
              hover:border-[#7a9b80] hover:shadow-md"
            >
              <div
                className="w-12 h-12 mx-auto mb-4 bg-[#e7efe9]
              rounded-xl flex items-center justify-center"
              >
                <User className="text-[#5f7f65]" size={22} />
              </div>

              <h3 className="font-semibold text-gray-800">Guardian</h3>
              <p className="text-sm text-gray-500 mt-1">Caregiver / Family</p>
            </button>

            {/* Patient */}
            <button
              onClick={() => handleSelectRole("patient")}
              className="group border rounded-2xl p-6 transition
              hover:border-[#e07a6a] hover:shadow-md"
            >
              <div
                className="w-12 h-12 mx-auto mb-4 bg-[#fdecea]
              rounded-xl flex items-center justify-center"
              >
                <Heart className="text-[#e07a6a]" size={22} />
              </div>

              <h3 className="font-semibold text-gray-800">Patient</h3>
              <p className="text-sm text-gray-500 mt-1">Care Recipient</p>
            </button>
          </div>

          <hr className="my-6" />

          {/* Login */}
          <p className="text-sm text-gray-500">
            Already have an account?{" "}
            <Link
              to="/auth/login"
              className="text-[#6d8f73] font-medium hover:underline"
            >
              Log In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SelectRole;
