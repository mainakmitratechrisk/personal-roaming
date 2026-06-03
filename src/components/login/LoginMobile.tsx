"use client";

import { useAccountLoginMutation } from "@/redux/rest-api/authAPI";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { Eye, EyeOff } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

const LoginMobile = () => {
  const router = useRouter();  
  const [bsUsername,setBsUsername]  = useState("") 
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const [accountLogin, { isLoading }] = useAccountLoginMutation();


 const getErrorMessage = (error: unknown) => {
  const err = error as FetchBaseQueryError & {
    data?: { message?: string };
  };

  return err?.data?.message || "Something went wrong";
};

const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement> ) => {
  e.preventDefault();

  // ✅ validation
  if (!bsUsername.trim() || !password.trim()) {
    console.log("Please fill all fields");
    return;
  }

  try {
    // ✅ RTK Query call (typed)
    const res = await accountLogin({bsUsername,password}).unwrap();

    console.log("Login Success:", res);
    // optional redirect
    router.push("/dashboard");

  } catch (error: unknown) {
  console.log("Login Failed:", getErrorMessage(error));
}
};

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-cover"
     style={{
        
     }}
    >
      {/* Wrapper to align the image to the bottom with a max-height restraint */}
  <div className="absolute inset-0 z-0 h-full w-full">
  <Image
    src="/images/login/login-image.png"
    alt="Background Flight"
    fill
    priority 
    sizes="100vw"
    className="object-cover object-bottom"
  />
  {/* Optional: Dark overlay blend if your background asset doesn't natively cover the top */}
  <div className="absolute inset-0 bg-gradient-to-b from-[#06043C]/20 via-transparent to-transparent pointer-events-none" />
</div>
      
      {/* Top Content Section */}
<div className=" h-[284px] md:h-[350px] relative z-10 flex flex-col items-center justify-center ">
  <div className=" flex w-full flex-col items-center justify-center gap-y-2 bg-linear-to-b from-login to-login
      px-6 py-14 text-center  md:py-16  md:px-10 md:gap-y-3 "
  >
    {/* Logo */}
    <div className="mb-2 flex items-center justify-center">
      <Image
        src="/images/login/logo.png"
        alt="romaing bangladesh"
        width={180}
        height={60}
        className="  object-contain md:w-[220px] "
      />
    </div>

    <p className=" text-[13px] font-medium uppercase tracking-wider text-white md:text-sm md:tracking-widest ">
      B2B Travel Marketplace
    </p>

    {/* Heading */}
    <div className="  mt-4 flex flex-col items-center space-y-3  md:mt-6 md:space-y-4 "
    >
      <h2  className=" text-center text-[26px] font-bold leading-tight text-white md:text-[34px] ">
        Welcome Back!
      </h2>

      <p  className=" flex flex-col items-center justify-center text-center text-sm leading-6 text-purple-100
          md:text-base md:leading-7">
        <span>Login to your account and</span>
        <span>continue your journey</span>
      </p>
    </div>
  </div>
</div>

     {/* Center Login Card */}
<div
  className=" absolute left-1/2 top-[48%] z-20  -translate-x-1/2 -translate-y-1/2  max-w-2xl mx-auto w-full 
   px-5 sm:px-6 md:px-8 md:py-8 lg:hidden "
>
  <div
    className=" rounded-2xl bg-white shadow-2xl  p-5 sm:p-6 md:p-7 "
  >
    {/* Form */}
    <form className="space-y-3.5" onSubmit={handleSubmit}>
      {/* Email */}
      <div>
        <div className="relative">
          {/* Left Icon */}
          <div  className="  absolute left-4 top-1/2 z-10  flex h-5 w-5 -translate-y-1/2  items-center justify-center ">
            <Image
              src={"/images/login/email.svg"}
              alt="email icon"
              width={20}
              height={20}
              className="h-5 w-5 object-contain"
            />
          </div>

          <input
            type="email"
            required
            placeholder="Email or Mobile Number"
            onChange={(e)=>setBsUsername(e.target.value)}
            className=" h-12 w-full rounded-xl border border-gray-200 bg-white pl-12 pr-4 text-secondary
              outline-none transition  focus:border-purple-500 placeholder:text-secondary placeholder:text-[14px]
            "
          />
        </div>
      </div>

      {/* Password */}
      <div>
        <div className="relative">
          {/* Left Password Icon */}
          <div
            className=" absolute left-4 top-1/2 z-10  flex h-5 w-5 -translate-y-1/2  items-center justify-center "
          >
            <Image
              src={"/images/login/password.svg"}
              alt="password icon"
              width={20}
              height={20}
              className="h-5 w-5 object-contain"
            />
          </div>

          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            required
              onChange={(e)=>setPassword(e.target.value)}
            className=" h-12 w-full rounded-xl border border-gray-200 bg-white pl-12 pr-12 text-secondary
              outline-none transition  focus:border-purple-500  placeholder:text-secondary  placeholder:text-[14px]
            "
          />

          {/* Eye Toggle */}
          <button
            type="button"
            onClick={() =>
              setShowPassword(!showPassword)
            }
            className=" absolute right-4 top-1/2 flex -translate-y-1/2  items-center justify-center text-gray-500 "
          >
            {showPassword ? (
              <EyeOff size={20} />
            ) : (
              <Eye size={20} />
            )}
          </button>
        </div>
      </div>

      {/* Forgot Password */}
      <div className="flex justify-end">
        <button
          type="button"
          className="text-sm font-medium text-primary"
        >
          Forgot Password?
        </button>
      </div>

      {/* Login Button */}
      <button
        type="submit"
        className=" h-12 w-full rounded-lg  bg-[#0E0B64] text-sm font-semibold text-white transition " >
       {isLoading ? "logging..." : "Login" }  
      </button>

      {/* Signup */}
      <div className="text-center text-sm text-primary">
        Don&apos;t have an account?{" "}
        <button
          type="button"
          className="font-semibold"
        >
          Sign Up
        </button>
      </div>
    </form>
  </div>
</div>


{/* Footer text */}

<div
  className=" absolute bottom-0 w-full border-t border-white/10 bg-white/10 py-5 backdrop-blur-sm ">
  <div className="   flex items-center justify-center gap-3 text-white">
    {/* Security Icon */}
    <Image
      src={"/images/login/secure.svg"}
      alt="secure icon"
      width={30}
      height={30}
      className="h-7.5 w-7.5 object-contain"
    />

    {/* Text */}
    <div className="flex flex-col leading-[1.2]">
      <p className="text-sm">  Your data is protected with </p>
      <p className="text-sm"> industry-standard security </p>
    </div>
  </div>
</div>
    </div>


  );
};

export default LoginMobile;