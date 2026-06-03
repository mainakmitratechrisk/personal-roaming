"use client";

import Link from "next/link";
import { servicesData } from "./data";
import Image from "next/image";

export default function DiscoverAllSolutions() {
  return (
    <section className="bg-[#F9F9F9] font-sans py-10 ">
      {/* Container with max-width to center content 
        and grid for two-column desktop layout 
      */}
      <div className="max-w-350 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-1 xl:gap-6 items-start">
        {/* --- LEFT SIDE: TEXT CONTENT --- */}
        {/* LEFT SIDE */}
        <div className="flex flex-col gap-3 lg:gap-3 xl:gap-4 text-center lg:text-left">
          {/* Subheading */}
          <p className="text-sm lg:text-[16px] xl:text-lg font-medium tracking-widest text-primary uppercase">
            ONE PLATFORM, ENDLESS POSSIBILITIES
          </p>

          {/* Heading */}
          <h2 className="flex flex-col text-4xl lg:text-[38px] xl:text-5xl font-bold text-secondary leading-[1.1]">
            <span>All-in-one solutions for</span>
            <span>
              every <span className="text-primary">travel business</span>
            </span>
          </h2>

          {/* Description */}
          <p className="flex flex-col text-base lg:text-[15px] xl:text-[16px] text-primary leading-relaxed max-w-xl mx-auto lg:mx-0">
            <span>We provide a comprehensive suite of travel products</span>
            <span> and technology solutions to help you grow, simplify</span>
            <span> operations and delight your customers.</span>
          </p>

          {/* Button */}
          <div className=" lg:mt-3 xl:mt-6 flex justify-center lg:justify-start">
            <Link
              href="/#solutions"
              className="inline-flex text-[14px] xl:text-[16px] items-center gap-2 px-4 xl:px-6 py-3 bg-primary text-white font-medium
               rounded-md hover:bg-[#322354] transition-colors duration-200 group"
            >
              Discover All Solutions
              <span className="group-hover:translate-x-1 transition-transform">
                →
              </span>
            </Link>
          </div>
        </div>

        {/* --- RIGHT SIDE: CARD GRID --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 lg:gap-2 xl:gap-4">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className="cursor-pointer group bg-white lg:p-4 xl:p-5 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl
                         hover:-translate-y-1 transition-all duration-300 flex flex-col gap-2 h-full "
            >
              {/* TOP SECTION */}
              <div className="flex items-center gap-2">
                {/* ICON */}
                <div className="flex items-center justify-center shrink-0">
                  <Image
                    src={service.icon}
                    alt={service.title}
                    width={24}
                    height={24}
                    className="w-5 h-5 sm:w-6 sm:h-6 md:w-6 lg:w-7 xl:w-8 object-contain"
                  />
                </div>

                {/* TITLE */}
                <h3 className="lg:text-[16px] xl:text-[18px] font-semibold text-secondary leading-none">
                  {service.title}
                </h3>
              </div>

              {/* DESCRIPTION */}
              <p className=" text-sm md:text-[13px] xl:text-[15px] leading-relaxed text-secondary/80 ">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
