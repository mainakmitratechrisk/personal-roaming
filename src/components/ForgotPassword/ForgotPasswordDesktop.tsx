"use client";

import React, { useEffect, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FiEyeOff, FiEye } from "react-icons/fi";
import { MdOutlineMail } from "react-icons/md";
import { TbWorld } from "react-icons/tb";
import { TfiMicrosoftAlt } from "react-icons/tfi";
import { loginFeatures } from "../login/data";
import LoginFooter_1 from "../login/LoginFooter_1";
import LoginFooter_2 from "../login/LoginFooter_2";
import { PhoneInput } from "react-international-phone";
import { isValidPhoneNumber } from "libphonenumber-js";
import Image from "next/image";
import Link from "next/link";
import {
  IoIosArrowRoundBack,
  IoMdArrowBack,
  IoMdArrowForward,
} from "react-icons/io";

const ForgotPasswordDesktop = () => {
  const [otp, setOtp] = useState<string[]>(new Array(6).fill(""));
  const [timer, setTimer] = useState(45);
  const [activeTab, setActiveTab] = useState<"email" | "otp">("email");
  const [bsUsername, setBsUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState("");

  // Simple countdown timer for OTP resend
  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => setTimer((prev) => prev - 1), 1000);
      return () => clearInterval(interval);
    }
  }, [timer]);

  // Handle single character OTP box entry
  const handleOtpChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number,
  ) => {
    const target = e.target;
    const value = target.value;

    // Allow only numbers
    if (isNaN(Number(value))) return;

    const updatedOtp = [...otp];
    // Take only the last character entered (handles overwriting existing numbers)
    updatedOtp[index] = value.substring(value.length - 1);
    setOtp(updatedOtp);

    // Auto-focus next input field
    if (value !== "") {
      const nextElementSibling =
        target.nextElementSibling as HTMLInputElement | null;
      if (nextElementSibling) {
        nextElementSibling.focus();
      }
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number,
  ) => {
    const target = e.target as HTMLInputElement;

    // Move back to previous input on Backspace if current field is empty
    if (e.key === "Backspace" && target.value === "") {
      const previousElementSibling =
        target.previousElementSibling as HTMLInputElement | null;
      if (previousElementSibling) {
        previousElementSibling.focus();
      }
    }
  };

  const handleOTPLogin = (e: React.FormEvent) => {
    e.preventDefault();

    if (!phone) {
      setPhoneError("Mobile number is required");
      return;
    }

    if (!isValidPhoneNumber(phone)) {
      setPhoneError("Please enter a valid mobile number");
      return;
    }

    setPhoneError("");

    console.log("Valid Phone:", phone);

    // API Call
    // await sendOtp(phone);
  };

  const handleLogin = () => {};
  return (
    <div className="  w-full h-full overflow-x-hidden font-sans bg-[#F7F8FC]">
      <div className=" flex">
        {/* =========================
          LEFT SIDE PANEL
      ========================== */}
        <div className="relative lg:h-[700px] 2xl:h-[750px]  4xl:h-full flex-1 overflow-hidden flex flex-col bg-[#0a052e]">
          {/* BACKGROUND IMAGE - Dynamic width scaling based on remaining screen space */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/login/login-image.png"
              alt="Travel Background"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 65vw"
              className="object-cover object-[center_bottom]"
            />
            {/* Subtle Dark Overlay */}
            <div className="absolute inset-0 bg-black/10" />
          </div>

          {/* LEFT PANEL CONTENT */}
          <div
            className="relative z-10 h-full flex flex-col justify-between px-8 md:px-12 lg:px-10 2xl:px-20 py-8 lg:py-8 2xl:py-12
           text-white flex-1"
          >
            {/* TOP AREA: Logo */}
            <div>
              <div className="flex items-center">
                <Image
                  src="/images/login/logo.png"
                  alt="Roaming Bangladesh"
                  width={180}
                  height={60}
                  className="object-contain 
             w-32 lg:w-40 xl:w-44 2xl:w-52 
             h-auto transition-all duration-300"
                />
              </div>
              <p className="mt-2 xl:mt-3 text-[12px] lg:text-[12px] 4xl:text-[26px] uppercase  text-white/80 font-medium">
                B2B Travel Marketplace
              </p>
            </div>

            {/* CENTER CONTENT: Welcome Message & Features List */}
            <div className="max-w-[520px] 2xl:max-w-4xl py-10 lg:py-3 xl:py-6 mt-auto mb-auto">
              <h1 className="lg:text-2xl  2xl:text-3xl  4xl:text-5xl font-semibold leading-[1.1] tracking-tight">
                Your Trusted Travel
                <br />
                Business Partner
              </h1>

              <p
                className="mt-6 text-white/85 lg:text-[14px] xl:text-[15px] 4xl:text-[30px] md:text-[16px] xl:leading-6
                 4xl:leading-10 xl:leading-4
               lg:max-w-[480px] 2xl:max-w-[580px]"
              >
                One platform, endless possibilities.
                <br />
                Flights, Hotels, Visa, Tours & Umrah-
                <br />
                all in one place.
              </p>

              {/* FEATURES */}
              <div className="space-y-5 mt-10">
                {loginFeatures.map((feature) => (
                  <div key={feature.id} className="flex items-center gap-4">
                    {/* ICON BLOCK */}
                    <div className="w-11 h-11 rounded-2xl bg-[#4B2DBF]/60 backdrop-blur-md border border-white/10 flex items-center justify-center shrink-0">
                      <Image
                        src={feature.icon}
                        alt={feature.title}
                        width={22}
                        height={22}
                        className="object-contain"
                      />
                    </div>

                    {/* TEXT BLOCK */}
                    <div>
                      <h4 className="text-[15px] font-semibold text-white">
                        {feature.title}
                      </h4>
                      <div className="text-[12px] xl:text-sm text-white/75 leading-4 xl:leading-5 mt-0.5">
                        <span className="block">{feature.description_1}</span>
                        <span className="block">{feature.description_2}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* =========================
          RIGHT SIDE PANEL: Authentication Form
      ========================== */}
        <div
          className="w-full lg:w-[500px] xl:w-[500px] 4xl:w-[680px] lg:h-[700px] 2xl:h-[750px] 4xl:h-full  
          bg-white p-8 md:p-12 flex flex-col
           justify-center items-center relative shrink-0 z-10"
        >
          {/* Language Selector Top Right */}
          <div className="absolute top-6 right-6">
            <button
              className="flex items-center gap-1.5 text-sm text-gray-600 border border-gray-200 
            px-3 py-1 rounded-md hover:bg-gray-50 transition"
            >
              <TbWorld className="text-primary" /> <span>English</span>{" "}
              <span className="text-xs text-gray-400">▼</span>
            </button>
          </div>

          <div className="w-full max-w-md space-y-5 2xl:space-y-8">
            {/* Header Text */}
            <div className="text-center lg:text-left">
              <h2 className=" lg:text-2xl xl:text-3xl font-semibold text-primary">
                {activeTab === "email" ? "Forgot Password ?" : "OTP Login"}
              </h2>
              <p className="text-[12px] xl:text-[13px] text-login-footer mt-2">
                {activeTab === "email" ? (
                  <>
                    No Worries! Enter your registered email or mobile number
                    <br />
                    and we will send you instructions to reset your password
                  </>
                ) : (
                  "Enter the OTP sent to your registered email or mobile"
                )}
              </p>
            </div>

            {/* Login Tabs */}
            <div className="flex border-b border-gray-100 text-sm">
              <button
                type="button"
                onClick={() => setActiveTab("email")}
                className={`flex-1 py-2 xl:py-3 text-center font-medium border-b-2 flex items-center justify-center gap-2 cursor-pointer transition-colors ${
                  activeTab === "email"
                    ? "border-indigo-900 text-indigo-900"
                    : "border-transparent text-gray-400 hover:text-gray-600"
                }`}
              >
                <Image
                  src="/images/login/user.svg"
                  alt="Email Login"
                  width={14}
                  height={14}
                  priority
                  className="w-4! h-4! shrink-0"
                />
                <span>Email</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab("otp")}
                className={`flex-1 py-2 xl:py-3 text-center font-medium border-b-2 flex items-center justify-center gap-2 cursor-pointer transition-colors ${
                  activeTab === "otp"
                    ? "border-indigo-900 text-indigo-900"
                    : "border-transparent text-gray-400 hover:text-gray-600"
                }`}
              >
                <Image
                  src="/images/login/otp.svg"
                  alt="OTP Login"
                  width={14}
                  height={14}
                  className="w-4! h-4! shrink-0"
                />
                <span>Mobile Number</span>
              </button>
            </div>

            {/* Form Fields */}
            {activeTab === "email" && (
              <form className="space-y-4 2xl:space-y-5" onSubmit={handleLogin}>
                <div>
                  <label className="block text-xs font-semibold text-primary tracking-wider mb-2">
                    Email Address
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                      <MdOutlineMail className=" text-login" />
                    </span>
                    <input
                      required
                      type="email"
                      placeholder="Enter your registered email address"
                      className="w-full pl-10 pr-4 py-3 rounded-lg border text-gray-600 border-gray-200 outline-none
                       focus:border-login-footer focus:ring-1 focus:ring-login-footer transition text-sm"
                    />
                  </div>
                </div>

                <div className="bg-[#ECE8F6] p-3 rounded-sm flex items-start gap-2">
                  {/* Icon */}
                  <div className="w-5 h-5 bg-[#111162] rounded-full p-1 flex items-center justify-center shrink-0">
                    <p className="text-white scale-y-[-1]">!</p>
                  </div>

                  {/* Text section */}
                  <div className="flex flex-col">
                    {/* Title row */}
                    <h1 className="font-semibold text-login leading-5">
                      How it works?
                    </h1>

                    {/* Description */}
                    <p className="text-[12px] flex flex-col text-login-footer mt-1">
                      <span>
                        We will send a password reset link to your email
                        address.
                      </span>
                      <span>
                        Click on the link and follow the instructions to reset
                        your password
                      </span>
                    </p>
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full my-3 py-3 px-4 bg-[#111162] hover:bg-opacity-95 cursor-pointer text-white rounded-lg font-medium text-sm shadow-md transition-all duration-150 mt-2 flex items-center justify-center relative"
                >
                  <span>Send Reset Link</span>

                  <IoMdArrowForward className="absolute right-4 text-lg" />
                </button>
              </form>
            )}

            {/* OTP LOgin */}
            {activeTab === "otp" && (
              <form
                className="space-y-4 2xl:space-y-5"
                onSubmit={handleOTPLogin}
              >
                {/* Mobile Number Field */}
                <div>
                  <label className="block text-xs font-semibold text-[#111162] tracking-wider mb-2">
                    Mobile Number
                  </label>

                  <div
                    className={`rounded-lg border bg-white transition-all ${
                      phoneError
                        ? "border-red-500"
                        : "border-gray-200 focus-within:border-[#111162]"
                    }`}
                  >
                    <PhoneInput
                      defaultCountry="bd"
                      forceDialCode
                      value={phone}
                      onChange={(value) => {
                        setPhone(value);
                        if (phoneError) setPhoneError("");
                      }}
                      className="phone-input-wrapper w-full"
                      inputClassName="!h-12 !w-full !border-0 !bg-transparent !text-sm !text-gray-700 !pl-4"
                      countrySelectorStyleProps={{
                        buttonClassName:
                          "!h-12 !bg-transparent !px-3 !flex !items-center !gap-2 hover:!bg-gray-50",
                        dropdownStyleProps: {
                          className:
                            "!z-[9999] !mt-2 !rounded-lg !border !border-gray-200 !shadow-lg",
                        },
                      }}
                    />
                  </div>

                  {phoneError && (
                    <p className="mt-1 text-xs text-red-500">{phoneError}</p>
                  )}
                </div>
                {/* Enter OTP Field */}
                <div>
                  <label className="block text-xs font-semibold text-[#111162] tracking-wider mb-2">
                    Enter OTP
                  </label>
                  <div className="flex items-center justify-between gap-2">
                    {otp.map((data, index) => (
                      <input
                        key={index}
                        type="text"
                        maxLength={1}
                        value={data}
                        // Pass 'e' instead of 'e.target' here 👇
                        onChange={(e) => handleOtpChange(e, index)}
                        // Optional: Add the backspace listener we created earlier for a better user experience
                        onKeyDown={(e) => handleKeyDown(e, index)}
                        onFocus={(e) => e.target.select()}
                        className={`w-12 h-14 text-center text-lg font-medium outline-none rounded-[7px] border transition-all
        ${
          index === 0 && data === ""
            ? "border-[#5b51ae] ring-1 ring-[#5b51ae]"
            : "border-gray-200 focus:border-[#5b51ae] focus:ring-1 focus:ring-[#5b51ae]"
        } text-gray-700 bg-white`}
                      />
                    ))}
                  </div>
                </div>

                {/* Didn't receive OTP & Timer Context */}
                <div className="flex items-center justify-between text-xs font-medium pt-1">
                  <p className="text-gray-500">
                    Didn&apos;t receive OTP?{" "}
                    <button
                      type="button"
                      disabled={timer > 0}
                      onClick={() => setTimer(45)}
                      className={`font-semibold cursor-pointer text-[#111162] hover:underline disabled:opacity-50 disabled:no-underline`}
                    >
                      Resend OTP
                    </button>
                  </p>
                  <span className="text-[#111162] font-semibold tracking-wider">
                    {`00:${timer < 10 ? `0${timer}` : timer}`}
                  </span>
                </div>

                {/* Main Submit Button */}
                <button
                  type="submit"
                  className="w-full py-3.5 px-4 bg-[#111162] hover:bg-opacity-95 cursor-pointer text-white rounded-xl font-medium text-sm shadow-md transition-all duration-150 mt-4"
                >
                  Verify & Login
                </button>
              </form>
            )}
            {/* Divider */}
            <div className="relative flex items-center justify-center my-6">
              <div className="border-t border-gray-200 w-full"></div>
              <span className="absolute bg-white px-3 text-xs text-gray-400 whitespace-nowrap">
                or continue with
              </span>
            </div>
            {/* Social Logins */}
            <div className="grid grid-cols-2 gap-3">
              <button className="flex items-center justify-center gap-2 py-2.5 border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition cursor-pointer">
                <FcGoogle className="text-base" />
                <span className="text-gray-700">Google</span>
              </button>
              <button className="flex items-center justify-center gap-2 py-2.5 border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition cursor-pointer">
                <TfiMicrosoftAlt className="text-blue-500 text-base" />
                <span className="text-gray-700">Microsoft</span>
              </button>
            </div>
            {/* Register redirection */}
            <p className="text-center text-xs gap-x-2 flex items-center justify-center text-gray-500">
              <IoMdArrowBack size={18} />
              <Link
                href="/login"
                className="text-indigo-900 text-[14px] font-semibold hover:underline"
              >
                Back to Login
              </Link>
            </p>
          </div>
        </div>
      </div>

      <div className=" bg-white w-full z-50">
        <div className=" py-4 bg-white ">
          <LoginFooter_1 />
        </div>

        <div className=" h-[0.8px] w-full bg-gray-700  "></div>

        <div className=" py-4 bg-white">
          <LoginFooter_2 />
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordDesktop;
