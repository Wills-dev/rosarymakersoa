"use client";

import { useEffect, useState } from "react";

import { motion } from "framer-motion";

import { benefitsOfRosary } from "../../constants";

import SectionSubTitle from "../atoms/SectionSubTitle";
import SectionTitle from "../atoms/SectionTitle";
import BenefitCard from "./cards/BenefitCard";

const BenefitsRosary = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section
      className="bg-gray-100 padding-y padding-ctn space-y-4"
      id="benefits"
    >
      <SectionTitle title="Benefits of the Rosary" />
      <SectionSubTitle text="15 Promises of the Rosary" />
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={isMounted ? { scale: 1, opacity: 1 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="pt-20 flex flex-wrap gap-6 justify-between"
      >
        {benefitsOfRosary?.map((benefit) => (
          <BenefitCard
            key={benefit?.id}
            benefit={benefit}
            animate={benefit?.animate}
          />
        ))}
      </motion.div>
    </section>
  );
};

export default BenefitsRosary;
