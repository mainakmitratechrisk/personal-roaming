"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { footerLinks } from "./data";
import Accreditations from "./Accreditations";

const Footer = () => {
  return (
    <footer className=" bg-[#F9F9F9] ">
      <div className="   font-sans select-none w-full mx-auto max-w-350 ">
        {/* Core Multi-Column Main Layout Grid Grid */}
        <div
          className="py-16 px-[2vw] 2xl:px-0 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 
        md:gap-6"
        >
          {/* COLUMN 1: Company Logo Branding Block */}
          <div className="flex flex-col space-y-4 lg:col-span-1">
            <div
              className="
    relative
    w-24 h-8
    sm:w-28 sm:h-9
    md:w-32 md:h-10
    lg:w-36 lg:h-12
    xl:w-40 xl:h-14
    2xl:w-44 2xl:h-16
  "
            >
              <Image
                src="/images/landing-page/logo.png"
                alt="Roaming Bangladesh Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <p className="text-secondary text-[14px] leading-relaxed font-normal max-w-50">
              Empowering travel businesses with technology, trust and unmatched
              support
            </p>

            {/* Social Media Links */}
            <div className="flex items-center gap-2 sm:gap-3 pt-2">
              <Link
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="
         w-6 h-6
      sm:w-9 sm:h-9
      lg:w-8 lg:h-8
      xl:w-10 xl:h-10
      rounded-full border border-gray-200
      flex items-center justify-center
      text-gray-500
      hover:bg-[#1877F2]
      hover:text-white
      hover:border-[#1877F2]
      transition-all duration-300
    "
              >
                <FaFacebookF className="text-xs sm:text-sm md:text-base" />
              </Link>

              <Link
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="
        w-6 h-6
      sm:w-9 sm:h-9
      lg:w-8 lg:h-8
      xl:w-10 xl:h-10
      rounded-full border border-gray-200
      flex items-center justify-center
      text-gray-500
      hover:bg-linear-to-tr
      hover:from-[#f9ce34]
      hover:via-[#ee2a7b]
      hover:to-[#6228d7]
      hover:text-white
      hover:border-transparent
      transition-all duration-300
    "
              >
                <FaInstagram className="text-xs sm:text-sm md:text-base" />
              </Link>

              <Link
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="
         w-6 h-6
      sm:w-9 sm:h-9
      lg:w-8 lg:h-8
      xl:w-10 xl:h-10
      rounded-full border border-gray-200
      flex items-center justify-center
      text-gray-500
      hover:bg-[#0A66C2]
      hover:text-white
      hover:border-[#0A66C2]
      transition-all duration-300
    "
              >
                <FaLinkedinIn className="text-xs sm:text-sm md:text-base" />
              </Link>

              <Link
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="
      w-6 h-6
      sm:w-9 sm:h-9
      lg:w-8 lg:h-8
      xl:w-10 xl:h-10
      rounded-full border border-gray-200
      flex items-center justify-center
      text-gray-500
      hover:bg-[#FF0000]
      hover:text-white
      hover:border-[#FF0000]
      transition-all duration-300
    "
              >
                <FaYoutube className="text-xs sm:text-sm md:text-base" />
              </Link>
            </div>
          </div>

          {/* COLUMNS 2 to 5: Dynamic Navigation Link Collections Map Loop */}
          {footerLinks.map((group) => (
            <div
              key={group.title}
              className="flex flex-col lg:space-y-2 xl:space-y-4"
            >
              <h4 className="text-secondary font-bold text-[20px] tracking-tight">
                {group.title}
              </h4>
              <ul className="flex flex-col lg:space-y-2.5 xl:space-y-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-secondary hover:text-primary transition-colors text-[14px] font-medium"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* COLUMN 6: Direct Support Contact & Coordinate Info Info Panel */}
          <div className="flex flex-col space-y-4 sm:col-span-2 md:col-span-1 lg:col-span-1">
            <h4 className="text-gray-900 font-bold text-[20px] tracking-tight">
              Contact
            </h4>
            <div className="flex flex-col space-y-4 text-[14px] font-medium text-gray-600">
              {/* Phone Coordinate Row */}
              <a
                href="tel:+8809611464560"
                className="flex items-center gap-3 hover:text-primary transition-colors group"
              >
                <svg
                  className="w-4 h-4 text-primary shrink-0 group-hover:scale-105 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.824-1.554-5.154-3.884-6.708-6.708l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.107a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v1.75z"
                  />
                </svg>
                <span>+880 9611464560</span>
              </a>

              {/* Email Address Link Row */}
              <a
                href="mailto:info@roamingbd.com"
                className="flex items-center gap-3 hover:text-primary transition-colors group"
              >
                <svg
                  className="w-4 h-4 text-primary shrink-0 group-hover:scale-105 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
                <span className="break-all">info@roamingbd.com</span>
              </a>

              {/* Physical Office Address Row Layout */}
              <div className="flex items-start gap-3 group">
                <svg
                  className="w-4 h-4 text-primary shrink-0 mt-1 group-hover:scale-105 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25s-7.5-4.108-7.5-11.25A7.5 7.5 0 1119.5 10.5z"
                  />
                </svg>
                <p className="text-gray-600 lg:text-[14px] leading-relaxed font-medium">
                  H-25, R-02, S-03 Uttara Rajlokkhi,
                  <br />
                  behind Swapno super shop,
                  <br />
                  Dhaka-1230, Bangladesh
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className=" py-4">
          <Accreditations />
        </div>
      </div>

      <div className=" py-2 bg-primary flex items-center justify-center">
        <h3 className=" text-[14px] text-white">
          Copyright 2026 Roaming Tours travels | All Rights Reserved{" "}
        </h3>
      </div>
    </footer>
  );
};

export default Footer;
