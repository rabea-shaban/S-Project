import { forwardRef } from "react";

type InputProps = {
  icon: React.ReactNode;
  placeholder: string;
  error?: any;
};

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ icon, placeholder, error, ...rest }, ref) => (
    <div>
      <div
        className={`flex items-center gap-3 px-4 py-3 rounded-xl border
        ${error ? "border-red-500" : "border-gray-300"}
        focus-within:ring-2 focus-within:ring-[#7a9b80]`}
      >
        <span className="text-gray-400">{icon}</span>
        <input
          ref={ref}
          placeholder={placeholder}
          className="w-full outline-none bg-transparent"
          {...rest}
        />
      </div>

      {error && <p className="text-red-500 text-xs mt-1">{error.message}</p>}
    </div>
  ),
);

export default Input;
