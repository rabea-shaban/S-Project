import { Link, useNavigate } from "react-router-dom";
import { useForm, type SubmitHandler } from "react-hook-form";
import { useState } from "react";
import User, { type IUser } from "../Data/Users";
import Image from "/logoing.png";
import google from "/google.png";

/* ================= Types ================= */

const Login = () => {
  const navigate = useNavigate();
  const [loginError, setLoginError] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<IUser>({
    mode: "onBlur",
    defaultValues: {
      remember: false,
    },
  });

  const onSubmit: SubmitHandler<IUser> = (data) => {
    if (data.email === User.email && data.password === User.password) {
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("userEmail", data.email);
      localStorage.setItem("userName", `${User.firstName} ${User.lastName}`);
      navigate("/");
    } else {
      setLoginError("Invalid email or password");
    }
  };

  return (
    <div className="mt-20">
      <div className="container mx-auto px-10">
        <div className="flex gap-16 flex-col-reverse md:flex-row justify-between items-center">
          {/* Image Section */}
          <div className="img mt-10 mb-10 md:mt-0 md:mb-0 md:w-1/2">
            <img className="w-full object-cover" src={Image} alt="login" />
          </div>

          {/* Form Section */}
          <div className="form-container w-full md:w-1/2">
            <div className="w-100 md:w-80 m-auto">
              <div className="text-center">
                <h2 className="text-3xl font-bold mb-6">Welcome back</h2>
                <p className="text-gray-500 mb-6">
                  Welcome back! Please enter your details.
                </p>
              </div>

              {/* Form */}
              <div className="form px-2">
                {loginError && (
                  <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                    {loginError}
                  </div>
                )}
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="flex flex-col m-auto gap-6 mt-10"
                >
                  {/* Email */}
                  <div>
                    <input
                      type="email"
                      placeholder="Email"
                      className={`w-full border p-3 px-5 rounded-3xl outline-none
                    focus:ring-2 focus:ring-[#49BBBD]
                    ${errors.email ? "border-red-500" : "border-gray-300"}`}
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                          message: "Enter a valid email address",
                        },
                      })}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  {/* Password */}
                  <div>
                    <input
                      type="password"
                      placeholder="Password"
                      className={`w-full border p-3 px-5 rounded-3xl outline-none
                    focus:ring-2 focus:ring-[#49BBBD]
                    ${errors.password ? "border-red-500" : "border-gray-300"}`}
                      {...register("password", {
                        required: "Password is required",
                        minLength: {
                          value: 6,
                          message: "Password must be at least 6 characters",
                        },
                      })}
                    />
                    {errors.password && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.password.message}
                      </p>
                    )}
                  </div>

                  {/* Remember me */}
                  <div className="flex justify-between items-center">
                    <div>
                      <input
                        type="checkbox"
                        id="remember"
                        {...register("remember")}
                      />
                      <label htmlFor="remember" className="ms-2 text-gray-500">
                        Remember me
                      </label>
                    </div>

                    <Link to="" className="text-[#EA454C]">
                      Forgot Password ?
                    </Link>
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-[#EA454C] w-full px-5 py-3 rounded-3xl text-white
                  hover:opacity-90 transition disabled:opacity-50"
                  >
                    {isSubmitting ? "Logging in..." : "Login"}
                  </button>
                </form>

                {/* Google Login */}
                <a
                  href=""
                  className="flex gap-2 items-center justify-center mt-6"
                >
                  <img src={google} alt="google" />
                  <span className="text-[#EA454C]">Sign in with Google</span>
                </a>
              </div>
              <p className="text-center mt-6">
                Don't have an account?{" "}
                <Link className="text-[#EA454C]" to="/auth/register">
                  Sign up fo free!
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
