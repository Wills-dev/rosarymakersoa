"use client";

import Image from "next/image";

import { motion } from "framer-motion";
import { itemVariants2 } from "../../../anim";

const BoardMemberCard = ({ member, direction }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="w-64"
    >
      <motion.div
        className="relative w-64 h-80 overflow-hidden rounded-lg shadow-lg"
        variants={itemVariants2(direction)}
      >
        <Image
          src={member.image}
          alt={member.name}
          layout="fill"
          objectFit="cover"
          className="transition-all duration-300 grayscale hover:grayscale-0"
        />
      </motion.div>
      <motion.div className="w-full">
        <h3 className="text-xl font-bold text-center">{member.name}</h3>
        <p className="text-sm text-center">{member.role}</p>
      </motion.div>
    </motion.div>
  );
};

export default BoardMemberCard;
