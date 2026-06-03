"use client";

import React, { useState } from "react";
import { CiMail } from "react-icons/ci";

const Subscribe = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle subscription logic here
    console.log("Subscribing email:", email);
  };

  return (
    <section className="w-full max-w-350 mx-auto lg:py-5  xl:py-6 select-none">
      {/* Unified Card Container with Shadow and Border */}
      <div
        className="w-full bg-white border border-gray-100 rounded-xl p-6 md:p-6 lg:p-8 xl:p-8 
      shadow-[0_4px_20px_rgba(0,0,0,0.05)] flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8"
      >
        {/* LEFT SIDE: Icon and Branding Content Block */}
        <div className="flex items-center gap-5">
          {/* Circular Enveloped Icon (Matching Deep Primary Palette Theme) */}
          <div className="w-16 h-16 md:w-18 md:h-18 bg-primary rounded-full flex items-center justify-center shrink-0 shadow-sm">
            <CiMail className="w-8 h-8 md:w-10 md:h-10 text-white" />
          </div>

          {/* Heading Text Column */}
          <div className="flex flex-col space-y-1">
            <h3 className="text-primary font-semibold text-lg lg:text-lg xl:text-xl leading-tight tracking-tight">
              Stay updated with the latest <br className="hidden md:inline" />
              deals &amp; travel insights
            </h3>
            <p className="text-primary text-xs md:text-sm font-medium">
              Subscribe to our newsletter
            </p>
          </div>
        </div>

        {/* RIGHT SIDE: Email Submission Input Form Layout */}
        <form
          onSubmit={handleSubscribe}
          className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full lg:max-w-md xl:max-w-lg"
        >
          <div className="relative grow">
            <input
              type="email"
              required
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-white text-gray-700 placeholder-gray-400 font-medium text-sm border 
               border-gray-200 rounded-lg px-4 py-3 outline-none transition-all focus:border-primary 
                focus:ring-1 focus:ring-primary/20"
            />
          </div>

          <button
            type="submit"
            className="bg-primary text-white text-sm font-medium px-10 py-3 rounded-lg hover:opacity-95 
             active:scale-[0.98] transition-all cursor-pointer whitespace-nowrap shadow-sm"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default Subscribe;
