import Image from "next/image";
import React from "react";
import { LoginFooterImage_2 } from "./data";

const LoginFooter_2 = () => {
  return (
    <div className="w-full  pb-4 px-2">
      <div className=" px-4 flex flex-col lg:flex-row items-center justify-between ">
        {/* LEFT SECTION: Section Label Heading */}
        <div className="text-center lg:text-left flex justify-start flex-col shrink-0">
          <p className="text-login-footer  uppercase font-semibold text-xs md:text-[12px]  ">
            Our Accreditations
          </p>
          <p className=" text-login-footer  font-semibold text-xs md:text-[12px]  ">
            & LICENCES
          </p>
        </div>

        {/* RIGHT SECTION */}
        {/* RIGHT SECTION */}
        <div className="grid grid-cols-5 gap-4 w-full">
          {LoginFooterImage_2.map((partner) => {
            const isColumnText = partner.id === 4 || partner.id === 5;

            return (
              <div
                key={partner.id}
                className={`flex items-center justify-center gap-2 ${
                  isColumnText ? "flex-row text-left" : "flex-col text-center"
                }`}
              >
                {/* IMAGE */}
                <div className="relative w-10 h-8 xl:w-12 xl:h-10 3xl:w-14 3xl:h-12 shrink-0">
                  <Image
                    src={partner.image}
                    alt={partner.alt}
                    fill
                    sizes="80px"
                    className="object-contain"
                    priority
                  />
                </div>

                {/* TEXT */}
                {partner.hasText && (
                  <div
                    className={`flex ${
                      isColumnText
                        ? "flex-col items-start"
                        : "flex-row items-center"
                    } leading-tight border-l border-gray-100 pl-2`}
                  >
                    {partner.text_1 && (
                      <span className="text-gray-700 text-[11px] md:text-[12px] font-semibold">
                        {partner.text_1}
                      </span>
                    )}

                    {partner.text_2 && (
                      <span className="text-gray-700 text-[11px] md:text-[12px] font-semibold">
                        {partner.text_2}
                      </span>
                    )}

                    {partner.text_3 && (
                      <span className="text-gray-700 text-[11px] md:text-[12px] font-semibold">
                        {partner.text_3}
                      </span>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default LoginFooter_2;
