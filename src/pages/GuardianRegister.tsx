import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import {
  FiArrowLeft,
  FiUser,
  FiHeart,
  FiMapPin,
  FiMail,
  FiPhone,
  FiHome,
  FiCreditCard,
} from "react-icons/fi";
import type { FormDataGuardian } from "../Data/Guardian";
import Input from "../Components/ui/Input ";

const GuardianRegister = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataGuardian>({
    mode: "onBlur",
  });

  const onSubmit = (data: FormDataGuardian) => {
    console.log("Form Data:", data);
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
          <FiArrowLeft />
          Back
        </button>

        {/* Header */}
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 bg-[#e7efe9] rounded-xl flex items-center justify-center">
            <FiUser className="text-[#5f7f65]" />
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

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Guardian Info */}
          <div className="bg-white rounded-2xl shadow p-6">
            <h2 className="font-medium text-[#5f7f65] mb-4">
              🛡️ Guardian Information
            </h2>

            <div className="space-y-4">
              {/* Guardian Name */}
              <Input
                icon={<FiUser />}
                placeholder="Full Name"
                error={errors.guardianName}
                {...register("guardianName", {
                  required: "Full name is required",
                })}
              />

              {/* National ID */}
              <Input
                icon={<FiCreditCard />}
                placeholder="National ID"
                error={errors.guardianNationalId}
                {...register("guardianNationalId", {
                  required: "National ID is required",
                })}
              />

              {/* Email */}
              <Input
                icon={<FiMail />}
                placeholder="Email"
                error={errors.guardianEmail}
                {...register("guardianEmail", {
                  required: "Email is required",
                })}
              />

              {/* Phone */}
              <Input
                icon={<FiPhone />}
                placeholder="Phone"
                error={errors.guardianPhone}
                {...register("guardianPhone", {
                  required: "Phone is required",
                })}
              />

              {/* Address */}
              <Input
                icon={<FiHome />}
                placeholder="Address"
                error={errors.guardianAddress}
                {...register("guardianAddress", {
                  required: "Address is required",
                })}
              />
            </div>
          </div>

          {/* Patient Info */}
          <div className="bg-white rounded-2xl shadow p-6">
            <h2 className="font-medium text-[#e07a6a] mb-4 flex items-center gap-2">
              <FiHeart /> Patient Information
            </h2>

            <div className="space-y-4">
              <Input
                icon={<FiUser />}
                placeholder="Full Name"
                error={errors.patientName}
                {...register("patientName", {
                  required: "Full name is required",
                })}
              />

              <Input
                icon={<FiCreditCard />}
                placeholder="National ID"
                error={errors.patientNationalId}
                {...register("patientNationalId", {
                  required: "National ID is required",
                })}
              />

              <Input
                icon={<FiMail />}
                placeholder="Email"
                error={errors.patientEmail}
                {...register("patientEmail", {
                  required: "Email is required",
                })}
              />

              <Input
                icon={<FiPhone />}
                placeholder="Phone"
                error={errors.patientPhone}
                {...register("patientPhone", {
                  required: "Phone is required",
                })}
              />

              <Input
                icon={<FiHome />}
                placeholder="Address"
                error={errors.patientAddress}
                {...register("patientAddress", {
                  required: "Address is required",
                })}
              />
            </div>
          </div>

          {/* Location */}
          <div className="bg-white rounded-2xl shadow p-6">
            <h2 className="font-medium text-[#5f7f65] mb-4 flex items-center gap-2">
              <FiMapPin /> Patient&apos;s Default Location
            </h2>

            <button
              type="button"
              className="w-full border-2 border-dashed rounded-xl p-6
              flex flex-col items-center gap-2 text-gray-500"
            >
              <FiMapPin size={24} />
              <p>Pick a location</p>
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
    </div>
  );
};

export default GuardianRegister;
