import ForgotPasswordDesktop from "@/components/ForgotPassword/ForgotPasswordDesktop";
import ForgotPasswordMobile from "@/components/ForgotPassword/ForgotPasswordMobile";
import React from "react";

const page = () => {
  return (
    <div>
      <div className=" lg:hidden">
        <ForgotPasswordMobile />
      </div>

      <div className=" hidden lg:block">
        <ForgotPasswordDesktop />
      </div>
    </div>
  );
};

export default page;
