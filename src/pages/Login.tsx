import { Link, useNavigate } from "react-router-dom";
import { useForm, type SubmitHandler } from "react-hook-form";
import { useState } from "react";
import User, { type IUser } from "../Data/Users";
import { loginUser } from "../utils/auth";

const Login = () => {
  const navigate = useNavigate();
  const [loginError, setLoginError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<IUser>({
    mode: "onBlur",
  });

  const onSubmit: SubmitHandler<IUser> = (data) => {
    setLoginError("");

    const isValid =
      data.email === User.email && data.password === User.password;

    if (!isValid) {
      setLoginError("Invalid email or password");
      return;
    }

    loginUser(User);
    navigate("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f6f1ea]">
      <div className="w-full max-w-[420px]">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-14 h-14 mx-auto bg-[#5f7f65] rounded-2xl flex items-center justify-center mb-4">
            🛡️
          </div>
          <h1 className="text-2xl font-semibold text-gray-800">Welcome Back</h1>
          <p className="text-sm text-gray-500 mt-1">Log in to your account</p>
        </div>

        {/* Card */}
        <div className="bg-white rounded-2xl shadow-xl p-6">
          {loginError && (
            <div className="bg-red-100 text-red-700 text-sm p-3 rounded mb-4">
              {loginError}
            </div>
          )}

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-4"
          >
            {/* Email */}
            <div>
              <input
                type="email"
                placeholder="Email"
                className={`w-full p-3 rounded-xl border outline-none
                ${errors.email ? "border-red-500" : "border-gray-300"}
                focus:ring-2 focus:ring-[#7a9b80]`}
                {...register("email", {
                  required: "Email is required",
                })}
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Password */}
            <div>
              <input
                type="password"
                placeholder="Password"
                className={`w-full p-3 rounded-xl border outline-none
                ${errors.password ? "border-red-500" : "border-gray-300"}
                focus:ring-2 focus:ring-[#7a9b80]`}
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Minimum 6 characters",
                  },
                })}
              />
              {errors.password && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-[#7a9b80] hover:bg-[#6d8f73] text-white py-3 rounded-xl transition disabled:opacity-50"
            >
              {isSubmitting ? "Logging in..." : "Log In"}
            </button>
          </form>

          {/* Footer */}
          <p className="text-center text-sm text-gray-500 mt-4">
            Don’t have an account?{" "}
            <Link to="/auth/SelectRole" className="text-[#6d8f73] font-medium">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
