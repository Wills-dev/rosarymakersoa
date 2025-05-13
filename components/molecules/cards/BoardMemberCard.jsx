"use client";

import Image from "next/image";
import { useState } from "react";

import { motion } from "framer-motion";
import { itemVariants2 } from "../../../anim";

const BoardMemberCard = ({ member, direction }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative w-64 h-80 overflow-hidden rounded-lg shadow-lg"
      variants={itemVariants2(direction)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Image
        src={member.image}
        alt={member.name}
        layout="fill"
        objectFit="cover"
        className={`transition-all duration-300 ${
          isHovered ? "grayscale" : ""
        }`}
      />
      <motion.div
        className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <h3 className="text-xl font-bold text-center">{member.name}</h3>
        <p className="text-sm text-center">{member.role}</p>
      </motion.div>
    </motion.div>
  );
};

export default BoardMemberCard;
