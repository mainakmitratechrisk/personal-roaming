// components/hero/HeroSection.tsx

import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#F9F9F9]">
      <div className=" grid gap-x-4  grid-cols-1 lg:grid-cols-[540px_1fr]">
        {/* LEFT CONTENT */}
        <div className="relative z-20  bg-[#F9F9F9] pt-32 ">
          <div className="max-w-350 mx-auto w-full px-[2vw]">
            {/* Small Label */}
            <div className="mb-4 inline-block py-1">
              <span
                className=" text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[26px] font-medium  
                tracking-wider text-[#4B2E83] "
              >
                BANGLADESH&apos;S LEADING
              </span>
            </div>
            {/* Heading */}
            <h1
              className=" text-[32px] sm:text-[40px] md:text-[48px] lg:text-[54px] xl:text-[60px] font-semibold
               leading-[1] tracking-[-1px] 
              lg:tracking-[-2px] text-secondary"
            >
              B2B Travel
              <br />
              <span className="text-[#4B2E83]">Marketplace</span>
            </h1>

            {/* Description */}
            <p className="mt-7 text-[16px] lg:text-[18px] xl:text-[20px] xl:leading-7.5 text-login-footer">
              Empowering travel businesses with seamless solutions, competitive
              rates, and unmatched support.
            </p>

            {/* Buttons */}
            <div className="mt-10 flex items-center gap-5">
              {/* PRIMARY BUTTON */}
              <button className="inline-flex items-center gap-2 rounded-xl bg-[#4B2E83] px-8 py-3 text-[14px] font-medium text-white shadow-xl shadow-[#4B2E83]/30 transition hover:scale-[1.02]">
                <span>Join Our Platform</span>
                <span className="inline-flex items-center leading-none">→</span>
              </button>

              {/* SECONDARY BUTTON */}
              <button className="inline-flex items-center gap-2 rounded-xl border border-[#4B2E83]/30 bg-white px-8 py-3 text-[14px] font-medium text-[#4B2E83] transition hover:border-[#4B2E83]">
                <span>Explore Solutions</span>
                <span className="inline-flex items-center leading-none">→</span>
              </button>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative h-110 lg:h-120 xl:h-140 overflow-hidden">
          <Image
            src="/images/landing-page/airplane.png"
            alt="Travel Marketplace"
            fill
            priority
            className="object-cover object-center"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-linear-to-l from-transparent via-transparent to-[#f6f6f6]" />

          {/* Soft Top Overlay */}
          <div className="absolute inset-0 bg-linear-to-b from-white/10 via-transparent to-transparent" />
        </div>
      </div>
    </section>
  );
}
