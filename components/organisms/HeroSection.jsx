"use client";

import { motion } from "framer-motion";

import { subheadingVariants, wordVariants } from "../../anim";

import HeroGrid from "./HeroGrid";

const HeroSection = () => {
  const headingText =
    "Enjoying the Dignity of Honest Human Labor in Rosary Making".split(" ");

  return (
    <section className="bg-black ">
      <div className="2xl:min-h-fit min-h-screen padding-y padding-ctn">
        <div className="h-full flex  items-center md:pt-52 pt-40 pb-20">
          <div className="max-w-2xl md:space-y-8 space-y-4">
            <motion.h1
              initial="hidden"
              animate="visible"
              className="xl:text-5xl text-2xl  text-white  leading-tight tracking-wide font-semibold"
            >
              {headingText.map((word, index) => (
                <motion.span
                  key={index}
                  className="inline-block mr-2"
                  variants={wordVariants}
                  custom={index}
                >
                  {word}
                </motion.span>
              ))}
            </motion.h1>
            <motion.p
              variants={subheadingVariants}
              initial="hidden"
              animate="visible"
              className=" text-[#acacac] sm:text-xl"
            >
              On a mission to empower adults with disabilities by providing
              meaningful employment, enriching their lives through the dignity
              of honest work.
            </motion.p>
          </div>
          ]
        </div>
        <HeroGrid />
      </div>
    </section>
  );
};

export default HeroSection;
