"use client";

import { motion, useInView } from "framer-motion";

import { containerVariants } from "../../anim";
import { our } from "../../lib/constants";

import OurCard from "../molecules/cards/OurCard";
import { useRef } from "react";

const OurSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
      className="padding-ctn padding-y"
    >
      <div className="flex gap-6 padding-y flex-wrap">
        {our?.map((our, index) => (
          <OurCard key={index} our={our} />
        ))}
      </div>
    </motion.section>
  );
};

export default OurSection;
