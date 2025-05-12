"use client";

import { motion } from "framer-motion";

import { subheadingVariants } from "../../anim";

const SectionTitle = ({ title }) => {
  return (
    <motion.h1
      variants={subheadingVariants}
      initial="hidden"
      animate="visible"
      className="font-medium sm:text-5xl text-3xl capitalize"
    >
      {title}
    </motion.h1>
  );
};

export default SectionTitle;
