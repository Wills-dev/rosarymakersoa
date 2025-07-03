"use client";

import Image from "next/image";

import { motion } from "framer-motion";

const BlessingCards = ({ blessing }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="w-64"
    >
      <motion.div className="relative w-64 h-80 overflow-hidden rounded-lg shadow-lg">
        <div className="absolute bg-black opacity-80 top-0 left-0 w-full h-full z-10" />
        <div className="absolute w-full h-full z-20 left-0 top-0 p-6 flex justify-center items-center text-center text-gray-200 sm:text-xl font-semibold">
          {blessing?.benefit}
        </div>
        <Image
          src={blessing?.image}
          alt={blessing?.benefit}
          layout="fill"
          objectFit="cover"
          className=""
        />
      </motion.div>
    </motion.div>
  );
};

export default BlessingCards;
