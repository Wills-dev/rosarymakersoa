import React from "react";
import DonateButton from "./DonateButton";

const HeroSection = () => {
  return (
    <section className="w-full min-h-screen container mx-auto p-4 sm:pt-24 pt-28">
      <div className="max-w-3xl h-full flex flex-col gap-8 justify-center pt-28">
        <h1 className="sm:text-6xl text-3xl font-extrabold text-[#002d5b] sm:leading-normal">
          Enjoying the Dignity of Honest Human Labor in Rosary Making.
        </h1>
        <p className="text-[#464d65]">
          On a mission to empower adults with disabilities by providing
          meaningful employment, enriching their lives through the dignity of
          honest work.
        </p>

        <DonateButton />
      </div>
    </section>
  );
};

export default HeroSection;
