import React from "react";
import { IoMdSettings } from "react-icons/io";
import { IoLockClosedOutline } from "react-icons/io5";

const ForgotPasswordMobile = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F7F6FB] px-4">
      <div className="w-full max-w-sm bg-white rounded-xl shadow-md p-6 text-center">
        {/* Icon */}
        <div className="flex items-center justify-center mb-4">
          <div className="w-14 h-14 rounded-full bg-[#ECE8F6] flex items-center justify-center">
            <IoLockClosedOutline className="text-[#111162] text-2xl" />
          </div>
        </div>

        {/* Title */}
        <h1 className="text-lg font-semibold text-[#111162]">
          Forgot Password
        </h1>

        {/* Description */}
        <p className="text-sm text-gray-500 mt-2 leading-relaxed">
          This feature is currently under development.
          <br />
          We are working on a secure password reset flow.
        </p>

        {/* Status Badge */}
        <div className="mt-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ECE8F6] text-[#111162] text-xs font-medium">
          <IoMdSettings className="animate-spin text-sm" />
          Coming Soon
        </div>

        {/* Button (disabled look) */}
        <button
          disabled
          className="w-full mt-6 py-3 rounded-lg bg-[#111162] text-white text-sm font-medium opacity-50 cursor-not-allowed"
        >
          Work in Progress
        </button>
      </div>
    </div>
  );
};

export default ForgotPasswordMobile;
