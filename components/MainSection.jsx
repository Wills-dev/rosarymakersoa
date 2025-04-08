import React from "react";

const MainSection = () => {
  return (
    <section className="w-full  border-t-1 border-primary-brown">
      <div className="py-28 w-full bg-primary-black my-6 bg-hero-img bg-cover bg-no-repeat relative">
        <div className="absolute bg-primary-black opacity-70 top-0 left-0 w-full h-full" />
        <div className="flex justify-center items-center w-full h-full">
          <div className="max-w-2xl z-20 space-y-4">
            <h1 className="xl:text-5xl text-3xl  text-white t font-poppins text-center leading-tight  font-bold">
              Enjoying the Dignity of Honest Human Labor in Rosary Making
            </h1>
            <p className="text-gray-300 text-center max-sm:text-sm">
              On a mission to empower adults with disabilities by providing
              meaningful employment, enriching their lives through the dignity
              of honest work.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainSection;
