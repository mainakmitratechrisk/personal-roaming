import { featuresData, FeatureItem, statsData, StatItem } from "./data";
import Image from "next/image";

const Travel = () => {
  return (
    <section className="w-full font-sans bg-[#F9F9F9] py-12">
      {/* Wrapper to set container constraints & shadow drop layout */}
      <div className="max-w-350 mx-auto rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-gray-100 overflow-hidden">
        {/* --- TOP HEADER BOX (Primary Color with Rounded Top Corners) --- */}
        <div className="bg-primary p-4 gap-x-6 gap-x-10 xl:gap-x-16 flex items-center justify-center">
          {/* Main Title Heading Section */}
          <div className="text-[22px] lg:text-2xl xl:text-3xl font-bold leading-snug text-white">
            <p> Why travel businesses </p>
            <span>choose roaming</span>
          </div>

          {/* Features Column Icons Layout List */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:gap-x-6 xl:gap-x-8 text-center">
            {featuresData.map((item: FeatureItem) => (
              <div key={item.id} className="flex flex-col items-center">
                {/* IMAGE ICON (replaces renderFeatureIcon) */}
                <div
                  className="
    w-10 h-10
    sm:w-12 sm:h-12
    md:w-12 md:h-12
    lg:w-14 lg:h-14
    xl:w-16 xl:h-16
    flex items-center justify-center
    mb-1
  "
                >
                  <Image
                    src={item.image}
                    alt={item.text_1}
                    width={30}
                    height={30}
                    className="
      w-5 h-5
      sm:w-6 sm:h-6
      md:w-6 md:h-6
      lg:w-6 lg:h-6
      xl:w-8 xl:h-8
      object-contain
    "
                  />
                </div>

                {/* TEXT (UNCHANGED) */}
                <p className="  text-[16px] sm:text-xs font-normal xl:leading-normal text-white/90 max-w-30">
                  <span>{item.text_1}</span>
                  <span>{item.text_2}</span>
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* --- BOTTOM STATS BOX (White with Rounded Bottom Corners) --- */}
        <div
          className="bg-white px-6 py-4 lg:px-12 grid items-center justify-center grid-cols-2 sm:grid-cols-3
           md:grid-cols-5 gap-8
         lg:gap-x-6"
        >
          {statsData.map((stat: StatItem) => (
            <div key={stat.id} className="flex items-center">
              {/* IMAGE (FIXED - NO WARNING) */}
              {/* IMAGE */}
              <div
                className="
    w-10 h-10
    sm:w-12 sm:h-12
    md:w-14 md:h-14
    lg:w-16 lg:h-16
    xl:w-[72px] xl:h-[72px]
    flex items-center justify-center shrink-0
  "
              >
                <Image
                  src={stat.image}
                  alt={stat.label}
                  width={32}
                  height={32}
                  className="
      w-5 h-5
      sm:w-6 sm:h-6
      md:w-7 md:h-7
      lg:w-8 lg:h-8
      xl:w-9 xl:h-9
      object-contain
    "
                />
              </div>

              {/* TEXT */}
              <div className="flex flex-col">
                <span className="text-2xl sm:text-2xl font-medium text-primary tracking-tight leading-none mb-1">
                  {stat.number}
                </span>

                <span className="text-[12px] font-medium text-secondary leading-tight">
                  {stat.label}
                </span>

                <span className="text-[12px] text-secondary font-medium leading-none mt-0.5">
                  {stat.subLabel}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Travel;
