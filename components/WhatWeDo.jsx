"use client";

import { whatWeDo } from "../constants";

import AnimatedCards from "./AnimatedCards";

const WhatWeDo = () => {
  return (
    <section className="min-h-screen w-full bg-[#f8fcff]">
      <div className="padding-x py-10 h-full w-full">
        <div className="flex justify-center items-center min-h-screen">
          <div className="">
            <h6 className="font-semibold text-primary-color capitalize text-lg text-center">
              What we are doing
            </h6>
            <div className="w-full flex justify-center">
              {" "}
              <h2 className="sm:text-5xl text-2xl py-6 text-[#002d5b] font-bold max-w-xl text-center sm:leading-normal capitalize">
                We Are In A Mission To make rosaries and to strive to pray
              </h2>
            </div>

            <div className="grid grid-cols-6 gap-6 w-full">
              {whatWeDo?.map((whatWeDo, i) => (
                <AnimatedCards whatWeDo={whatWeDo} i={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
