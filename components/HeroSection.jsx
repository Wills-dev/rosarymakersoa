import React from "react";
import DonateButton from "./DonateButton";

const HeroSection = () => {
  return (
    <section className="w-full min-h-screen pt-32">
      <div className="h-full">
        <div className="bg-hero-img bg-no-repeat bg-cover bg-center h-screen relative">
          <div className="absolute left-0 top-0 bg-white w-full h-full opacity-75 z-0 md:hidden" />
          <div className="container mx-auto p-4 pt-28 ">
            <div className="max-w-2xl h-full flex flex-col gap-8 justify-center">
              <h1 className="sm:text-5xl text-3xl font-extrabold text-[#002d5b] sm:leading-normal z-10">
                Enjoying the Dignity of Honest Human Labor in Rosary Making.
              </h1>
              <p className="text-[#464d65] z-10">
                On a mission to empower adults with disabilities by providing
                meaningful employment, enriching their lives through the dignity
                of honest work.
              </p>

              <DonateButton />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
