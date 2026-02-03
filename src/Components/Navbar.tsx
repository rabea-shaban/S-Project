import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiShield, FiUser, FiLogOut } from "react-icons/fi";

const Navbar = ({ tracking }: { tracking: boolean }) => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/auth/login");
  };

  return (
    <nav className="w-full h-16 bg-[#f7f3ec] px-6 flex justify-between items-center relative">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <div className="w-9 h-9 bg-[#5f7f65] rounded-xl flex items-center justify-center">
          <FiShield className="text-white" />
        </div>
        <span className="font-medium text-gray-800">CareTrace</span>
      </div>

      <div
        className={`px-4 py-1 rounded-full text-sm font-medium ${
          tracking
            ? "bg-[#e7efe9] text-[#5f7f65]"
            : "bg-[#fdecea] text-[#c0392b]"
        }`}
      >
        ● {tracking ? "Live" : "Offline"}
      </div>

      {/* User */}
      <div className="relative">
        <button
          onClick={() => setOpen(!open)}
          className="w-9 h-9 bg-[#e7efe9] rounded-full flex items-center justify-center"
        >
          <FiUser className="text-[#5f7f65]" />
        </button>

        {/* Dropdown */}
        {open && (
          <div className="absolute right-0 mt-3 w-40 bg-white rounded-xl shadow-lg border">
            <button
              onClick={handleLogout}
              className="w-full flex items-center gap-2 px-4 py-3 text-sm text-red-600 hover:bg-gray-50 rounded-xl"
            >
              <FiLogOut />
              Logout
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
