"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { testimonialData } from "./data";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Testimonial = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: "left" | "right") => {
    if (!scrollContainerRef.current) return;

    const cardWidth = 310; // same as lg card width
    const gap = 24;

    scrollContainerRef.current.scrollBy({
      left: direction === "left" ? -(cardWidth + gap) : cardWidth + gap,
      behavior: "smooth",
    });
  };

  return (
    <section className="w-full max-w-350 mx-auto py-10 overflow-hidden">
      <div className="flex flex-col lg:flex-row gap-10 items-start">
        {/* LEFT SIDE */}
        <div className="xl:w-50 shrink-0 pt-4">
          <h2 className="text-secondary text-xl lg:text-2xl xl:text-3xl font-bold leading-tight">
            What our
          </h2>

          <h3 className="text-secondary text-xl lg:text-2xl xl:text-3xl font-bold leading-tight">
            Partners say
          </h3>
        </div>

        {/* RIGHT SIDE */}
        <div className="relative flex-1 min-w-0">
          {/* LEFT BUTTON */}
          <button
            onClick={() => handleScroll("left")}
            className="absolute -left-5 top-1/2 -translate-y-1/2 z-10 bg-white text-gray-800 p-2.5 rounded-full shadow-md
			 border-gray-100"
          >
            <IoIosArrowBack />
          </button>

          {/* SCROLL AREA */}
          <div
            ref={scrollContainerRef}
            className="flex gap-5 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4 px-10"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {testimonialData.map((item) => (
              <div
                key={item.id}
                className="shrink-0 basis-70 sm:basis-75 lg:basis-77.5 xl:basis-72 bg-white border border-gray-100 rounded-xl 
				xl:p-6 p-4 lg:p-4 shadow-sm hover:shadow-md transition-all duration-300 snap-start flex flex-col justify-between"
              >
                <div>
                  {/* Stars */}
                  <div className="flex gap-1 text-primary mb-2 xl:mb-3">
                    {[...Array(item.rating)].map((_, i) => (
                      <span key={i} className="text-lg">
                        ★
                      </span>
                    ))}
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 text-sm xl:leading-relaxed mb-2 xl:mb-3 min-h-18">
                    &ldquo;{item.description}&rdquo;
                  </p>
                </div>

                {/* Footer */}
                <div className="flex items-center gap-3 border-t border-gray-50">
                  <div className="relative w-11 h-11 rounded-full overflow-hidden border border-gray-100 shrink-0">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                      sizes="44px"
                    />
                  </div>

                  <div className="min-w-0">
                    <h4 className="text-gray-900 font-bold text-sm truncate">
                      -{item.name}
                    </h4>

                    <p className="text-gray-400 text-xs truncate">
                      {item.position}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT BUTTON */}
          <button
            onClick={() => handleScroll("right")}
            className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 bg-white text-gray-800 p-2.5 rounded-full shadow-md border border-gray-100"
          >
            <IoIosArrowForward />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
