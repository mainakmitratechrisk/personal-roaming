import React from "react";
import Image from "next/image";
import { accreditationData } from "./data";

const Accreditations = () => {
  return (
    <div className="w-full  pb-4 ">
      <div className="  mx-auto px-4 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-4">
        {/* LEFT SECTION: Section Label Heading */}
        <div className="text-center lg:text-left flex items-center flex-col shrink-0 tracking-widest uppercase leading-tight max-w-37.5">
          <p className="text-[#43236e] font-bold text-xs md:text-sm ">Our</p>
          <p className=" text-[#43236e] font-bold text-xs md:text-sm">
            Accreditations
          </p>
        </div>

        {/* RIGHT SECTION: Flexible Row Holding All 5 Dynamic Partner Units */}
        {/* RIGHT SECTION */}
        <div className="flex flex-wrap items-center justify-between gap-x-10 gap-y-6 grow">
          {accreditationData.map((partner) => (
            <div
              key={partner.id}
              className="flex items-center gap-3 transition-opacity duration-200 hover:opacity-80"
            >
              {/* IMAGE */}
              <div className="relative w-16 h-12 shrink-0">
                <Image
                  src={partner.image}
                  alt={partner.alt}
                  fill
                  sizes="64px"
                  className="object-contain"
                  priority
                />
              </div>

              {/* TEXT COLUMN */}
              {partner.hasText && (
                <div className="flex flex-col leading-tight border-l border-gray-100 pl-2">
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
          ))}
        </div>
      </div>
    </div>
  );
};

export default Accreditations;
