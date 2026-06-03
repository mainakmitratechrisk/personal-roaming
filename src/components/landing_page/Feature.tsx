"use client";

import Image from "next/image";

const features = [
  {
    icon: "/images/features/image_1.svg",
    title: "Trusted by 500+",
    subtitle: "Travel partners",
  },
  {
    icon: "/images/features/image_2.svg",
    title: "Best Market",
    subtitle: "Fares",
  },
  {
    icon: "/images/features/image_3.svg",
    title: "24/7 Dedicated",
    subtitle: "Support",
  },
  {
    icon: "/images/features/image_4.svg",
    title: "Secure &",
    subtitle: "Reliable Platform",
  },
];

const Feature = () => {
  return (
    <div className="my-10 max-w-350 mx-auto w-full flex flex-wrap items-center lg:gap-x-12 gap-y-10">
      {features.map((item, index) => (
        <div key={index} className="flex items-start gap-4">
          {/* ICON IMAGE */}
          <div className="w-14 h-14 flex items-center justify-center shrink-0">
            <Image
              src={item.icon}
              alt={item.title}
              width={32}
              height={32}
              className={`object-contain ${
                item.icon.includes("image_1") ? "scale-130" : ""
              }`}
            />
          </div>

          {/* TEXT */}
          <div>
            <h3 className="text-[15px] font-medium text-secondary">
              {item.title}
            </h3>

            <p className=" text-[15px] font-medium text-secondary">
              {item.subtitle}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Feature;
