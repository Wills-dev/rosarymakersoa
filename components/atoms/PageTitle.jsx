"use client";

import { motion } from "framer-motion";

import { subheadingVariants } from "../../anim";

const PageTitle = ({ title }) => {
  return (
    <motion.h1
      variants={subheadingVariants}
      initial="hidden"
      animate="visible"
      className="font-semibold sm:text-7xl text-5xl capitalize"
    >
      {title}
    </motion.h1>
  );
};

export default PageTitle;
