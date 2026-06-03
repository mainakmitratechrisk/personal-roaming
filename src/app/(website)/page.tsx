import CountryWiseVisaService from "@/components/landing_page/CountryWiseVisaService";
import DiscoverAllSolutions from "@/components/landing_page/DiscoverAllSolutions";
import Feature from "@/components/landing_page/Feature";
import GrowBussiness from "@/components/landing_page/GrowBussiness";
import Hero from "@/components/landing_page/Hero";
import HotelWorldwide from "@/components/landing_page/HotelWorldwide";
import Travel from "@/components/landing_page/Travel";
import UmrahPackage from "@/components/landing_page/UmrahPackage";
import Testimonial from "@/components/landing_page/Testimonial";
import Subscribe from "@/components/landing_page/Subscribe";

export default function Home() {
  return (
    <main className="min-h-screen  bg-[#F9F9F9]">
      <Hero />

      <div className="px-[2vw]">
        <Feature />
        <DiscoverAllSolutions />
        <Travel />
        <HotelWorldwide />
        <CountryWiseVisaService />
        <UmrahPackage />
        <GrowBussiness />
        <Testimonial />
        <Subscribe />
      </div>
    </main>
  );
}
