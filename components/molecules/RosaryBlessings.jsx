"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import SectionTitle from "../atoms/SectionTitle";
import BlessingCards from "./cards/BlessingCards";

import { rosaryBenefits } from "../../constants";
import { containerVariants } from "../../anim";

const RosaryBlessings = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.section
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="padding-y padding-ctn"
    >
      <SectionTitle title="Blessing of the Rosary" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center pt-10">
        {rosaryBenefits?.map((blessing) => (
          <BlessingCards key={blessing?.id} blessing={blessing} />
        ))}
      </div>
    </motion.section>
  );
};

export default RosaryBlessings;
