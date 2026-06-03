"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const navLinks = [
  { label: "Home" },
  { label: "About Us" },
  { label: "Solutions", hasDropdown: true },
  { label: "Products", hasDropdown: true },
  { label: "Resources", hasDropdown: true },
  { label: "Contact Us" },
];

export default function Navbar() {
  const [active, setActive] = useState("Home");

  return (
    <header className="absolute top-0 left-0 z-50 w-full px-[2vw]">
      <div className="mx-auto flex  max-w-350 items-center justify-between py-7">
        {/* Logo */}
        <div className="flex items-center">
          <Image
            src="/images/landing-page/logo.png"
            alt="romaing bangladesh"
            width={190}
            height={60}
            className="w-[140px] sm:w-[160px] md:w-[160px] lg:w-[160px] xl:w-[180px] 2xl:w-[200px] h-auto"
          />
        </div>

        {/* Nav */}
        <nav className="hidden items-center lg:gap-5 xl:gap-8 lg:flex">
          {navLinks.map((item) => {
            const isActive = active === item.label;

            return (
              <Link
                key={item.label}
                href="#"
                onClick={() => setActive(item.label)}
                className={`relative flex items-center gap-1 text-[12px] lg:text-[14px] xl:text-[16px] transition ${
                  isActive
                    ? "text-[#4B2E83] font-bold"
                    : "text-[#222] hover:text-[#4B2E83]"
                }`}
              >
                {item.label}

                {/* ARROW ICON */}
                {item.hasDropdown && (
                  <IoIosArrowDown className="text-[14px] mt-[1px] transition group-hover:rotate-180" />
                )}

                {/* UNDERLINE */}
                <span
                  className={`absolute left-0 -bottom-1 h-0.5 bg-primary transition-all duration-300 ${
                    isActive ? "w-full" : "w-0"
                  }`}
                />
              </Link>
            );
          })}
        </nav>
        {/* Buttons */}
        <div className="flex items-center gap-4">
          <Link href="/login">
            <button
              className="py-2 xl:py-2.5 rounded-[10px] border cursor-pointer border-primary lg:px-7 xl:px-8 text-sm font-medium 
						 text-primary hover:bg-primary/5 active:scale-98 transition-all"
            >
              Login
            </button>
          </Link>

          <button
            className="py-2 xl:py-2.5 cursor-pointer rounded-[10px] bg-primary lg:px-7 xl:px-8 text-sm font-medium text-white
					 shadow-lg shadow-[#4B2E83]/20 transition hover:opacity-90"
          >
            Join Now
          </button>
        </div>
      </div>
    </header>
  );
}
