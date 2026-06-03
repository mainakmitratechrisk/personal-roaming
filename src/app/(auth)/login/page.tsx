"use client"

import LoginDesktop from "@/components/login/LoginDesktop";
import LoginMobile from "@/components/login/LoginMobile";


const Page = () => {

  return (
            <div>
                 
                 <div className=" lg:hidden">
                       <LoginMobile />
                 </div>

                    <div className=" hidden lg:block">
                         <LoginDesktop/>
                    </div>
            </div>
  );
};

export default Page;