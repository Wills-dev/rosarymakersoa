"use client";

import { useRef } from "react";
import Image from "next/image";

import { motion, useScroll, useTransform, useInView } from "framer-motion";

const AnimatedImage = ({ img }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.3, 1]); // Scale from 30% to 100%
  const opacity = useTransform(scrollYProgress, [0, 1], [0.7, 1]); // Opacity from 0.7 to 1
  const width = useTransform(scrollYProgress, [0, 1], ["96px", "100%"]); // Width from 96px to 100%
  const height = useTransform(scrollYProgress, [0, 1], ["96px", "100vh"]); // Height from 96px to 100vh

  return (
    <div className="w-screen h-screen flex items-center justify-center overflow-hidden relative">
      <motion.div
        ref={ref}
        className="relative"
        style={{ scale, opacity, width, height }}
        transition={{ duration: 2, ease: "easeInOut" }}
      >
        <Image src={img} alt="Animated Image" fill className="object-cover" />
      </motion.div>
    </div>
  );
};

export default AnimatedImage;
