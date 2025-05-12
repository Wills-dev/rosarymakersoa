"use client";

import { motion } from "framer-motion";

import { containerVariants } from "../../anim";

const SectionLayout = ({ children }) => {
  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
    >
      {children}
    </motion.section>
  );
};

export default SectionLayout;
