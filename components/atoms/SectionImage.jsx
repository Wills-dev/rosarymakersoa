"use client";

import Image from "next/image";

import { motion } from "framer-motion";

import { imageTwoVariants } from "../../anim";

const SectionImage = ({ reverse, imgUrl, alt }) => {
  return (
    <motion.div
      variants={imageTwoVariants(reverse)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      className="flex-1 w-full"
    >
      <Image
        src={imgUrl}
        className=" w-full h-auto"
        placeholder="blur"
        alt={alt}
      />
    </motion.div>
  );
};

export default SectionImage;
