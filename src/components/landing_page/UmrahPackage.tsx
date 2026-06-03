"use client";

import React, { useState } from "react";

// Sample mock data for the hotel images
const HOTEL_IMAGES = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80",
    alt: "Luxury Hotel Resort Pool",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=600&q=80",
    alt: "Modern Sailboat Hotel",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=600&q=80",
    alt: "Beachfront Premium Resort",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=600&q=80",
    alt: "Hillside Mediterranean Hotel",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=600&q=80",
    alt: "Tropical Villa Stay",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=600&q=80",
    alt: "Boutique Exotic Hotel",
  },
];

const UmrahPackage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleCount = 5; // Number of images visible at once
  const maxIndex = Math.max(0, HOTEL_IMAGES.length - visibleCount);

  const nextSlide = () => {
    if (currentIndex < maxIndex) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  return (
    <section className="py-2 font-sans select-none max-w-350 mx-auto w-full">
      <div className="flex  flex-col md:flex-row items-stretch gap-6 relative">
        {/* Left Side: Text Area (Approx 30% width) */}
        <div className="w-full md:w-[30%] flex flex-col justify-center pr-4 space-y-2">
          <h2 className="lg:text-[18px] xl:text-xl font-semibold text-secondary tracking-tight">
            Umrah Packages
          </h2>
          <div className="text-primary text-base md:text-[15px] xl:text-[16px] leading-relaxed">
            <p>Best Umrah packages</p>
            <span>with quality service and support.</span>
          </div>
          <button
            className="w-fit bg-primary text-white font-medium text-[14px] xl:text-[16px]   px-6 py-2 rounded-md transition-all 
		  duration-200 hover:opacity-90 active:scale-95 shadow-sm lg:px-8 xl:px-10 cursor-pointer"
          >
            View All Packages
          </button>
        </div>

        <div className="w-full md:w-[70%]">
          {/* Right Side: Carousel Area (Approx 70% width) */}
          <div className="w-full relative flex items-center">
            {/* Navigation Buttons: Exactly Middle Centered Vertically & Overlapping Borders */}

            {/* Left Arrow Button */}
            <button
              onClick={prevSlide}
              disabled={currentIndex === 0}
              className={`absolute left-0 -translate-x-1/2 z-30 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-[0_4px_10px_rgba(0,0,0,0.15)] border border-gray-100 transition-all duration-200 ${
                currentIndex === 0
                  ? "opacity-40 cursor-not-allowed"
                  : "hover:bg-gray-50 active:scale-95 cursor-pointer pointer-events-auto"
              }`}
              aria-label="Previous slides"
            >
              <svg
                className="w-5 h-5 text-black stroke-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </button>

            {/* Right Arrow Button */}
            {/* Right Arrow Button */}
            <button
              onClick={nextSlide}
              disabled={currentIndex === maxIndex}
              className={`absolute right-0 translate-x-1/2 z-30 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-[0_4px_10px_rgba(0,0,0,0.15)] border border-gray-100 transition-all duration-200 ${
                currentIndex === maxIndex
                  ? "opacity-40 cursor-not-allowed"
                  : "hover:bg-gray-50 active:scale-95 cursor-pointer pointer-events-auto"
              }`}
              aria-label="Next slides"
            >
              <svg
                className="w-5 h-5 text-black stroke-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>

            {/* Carousel Track Wrapper */}
            <div className="w-full overflow-hidden">
              <div
                className="flex gap-3 transition-transform duration-500 ease-out"
                style={{
                  transform: `translateX(calc(-${currentIndex * (100 / visibleCount)}% - ${currentIndex * 12}px))`,
                }}
              >
                {HOTEL_IMAGES.map((hotel) => (
                  <div
                    key={hotel.id}
                    className="shrink-0"
                    style={{
                      width: `calc((100% - ${(visibleCount - 1) * 12}px) / ${visibleCount})`,
                    }}
                  >
                    <div className="aspect-4/3 w-full overflow-hidden rounded-sm bg-gray-100">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={hotel.src}
                        alt={hotel.alt}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Pagination Dots at Bottom Center */}
          <div className="flex justify-center items-center gap-2 mt-2">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  currentIndex === index
                    ? "w-5 bg-primary"
                    : "w-2.5 bg-primary/20"
                }`}
                aria-label={`Go to slide group ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default UmrahPackage;
