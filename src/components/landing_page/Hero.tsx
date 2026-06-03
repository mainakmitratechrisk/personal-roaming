// components/hero/HeroSection.tsx

import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative bg-[#F9F9F9] overflow-hidden">
      <div className="max-w-350 mx-auto w-full pl-[2vw]">

        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-0">

          {/* LEFT CONTENT */}
          <div className="pt-32 pb-12 lg:py-20 xl:py-24">
            {/* Small Label */}
            <div className="mb-4 inline-block py-1">
              <span
                className="text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[26px] font-medium
                tracking-wider text-[#4B2E83]"
              >
                BANGLADESH&apos;S LEADING
              </span>
            </div>

            {/* Heading */}
            <h1
              className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[54px] xl:text-[60px] font-semibold
               leading-[1] tracking-[-1px] lg:tracking-[-2px] text-secondary"
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

          {/* RIGHT IMAGE — contained inside the max-width, plane never cropped */}
          <div className="relative h-[300px] sm:h-[380px] lg:h-[460px] xl:h-[540px]">
            <Image
              src="/images/landing-page/airplane.png"
              alt="Travel Marketplace"
              fill
              priority
              className="object-contain object-center"
            />

            {/* Soft left fade to blend with background */}
            <div className="absolute inset-0 bg-linear-to-r from-[#F9F9F9] via-[#F9F9F9]/10 to-transparent pointer-events-none" />
          </div>

        </div>
      </div>
    </section>
  );
}
