"use client";

import { motion, AnimatePresence } from "framer-motion";

import HeroGridItem from "../atoms/HeroGridItem";

const HeroGridItemContainer = ({
  color,
  hoverColor,
  text,
  className,
  animationVariant,
}) => {
  const variants = {
    hidden: {
      opacity: 0,
      x:
        animationVariant === "left"
          ? -50
          : animationVariant === "right"
          ? 50
          : 0,
      y: animationVariant === "up" ? -50 : animationVariant === "down" ? 50 : 0,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      className={`relative overflow-hidden group rounded-2xl ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={variants}
    >
      <HeroGridItem color={color} hoverColor={hoverColor} />
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 flex items-center justify-center text-white text-xl font-bold"
        >
          <span className="opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out">
            {text}
          </span>
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
};

export default HeroGridItemContainer;
