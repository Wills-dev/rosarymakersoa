"use client";

import { motion } from "framer-motion";

import { itemVariants } from "../../anim";

const SectionParagraph = ({ children, className }) => {
  return (
    <motion.p
      variants={itemVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      className={`${className && className}`}
    >
      {children}
    </motion.p>
  );
};

export default SectionParagraph;
