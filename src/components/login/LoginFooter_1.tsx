import Image from "next/image";
import React from "react";
import { LoginFooterImage_1 } from "./data";

const LoginFooter_1 = () => {
  return (
    <div className="w-full  pb-4 px-2">
      <div className="px-4 flex  items-center gap-x-10">
        {/* LEFT SECTION: Section Label Heading */}
        <div className="text-center lg:text-left flex items-center flex-col shrink-0">
          <p className=" text-login-footer font-semibold text-xs md:text-[12px] uppercase">
            Our Airplane partners
          </p>
        </div>

        {/* RIGHT SECTION */}
        <div className="overflow-hidden w-full">
          <div className="flex w-max animate-scroll gap-10">
            {/* FIRST LOOP */}
            <div className="flex gap-10">
              {LoginFooterImage_1.map((partner, index) => (
                <div
                  key={`a-${index}`}
                  className="flex items-center justify-center"
                >
                  <div className="relative w-[120px] h-10 xl:h-12">
                    <Image
                      src={partner.image}
                      alt={partner.alt}
                      fill
                      sizes="20vw"
                      className="object-contain"
                      priority
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* SECOND LOOP (IDENTICAL COPY) */}
            <div className="flex gap-10" aria-hidden="true">
              {LoginFooterImage_1.map((partner, index) => (
                <div
                  key={`b-${index}`}
                  className="flex items-center justify-center"
                >
                  <div className="relative w-[120px] h-10 xl:h-12">
                    <Image
                      src={partner.image}
                      alt={partner.alt}
                      fill
                      sizes="20vw"
                      className="object-contain"
                      priority
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginFooter_1;
