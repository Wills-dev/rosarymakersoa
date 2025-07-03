"use client";

import { useState, useEffect, useRef } from "react";

import { motion } from "framer-motion";

import Image from "next/image";

const SecondarySlider = ({ ourRosaries }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const sliderRef = useRef(null);

  useEffect(() => {
    // Preload all images
    ourRosaries?.forEach((slide) => {
      const img = new window.Image();
      img.src = slide.src;
    });

    const timer = setTimeout(() => {
      setIsInitialLoad(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % ourRosaries?.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + ourRosaries?.length) % ourRosaries?.length
    );
  };

  const cardWidth = 200;
  const translateX = -(currentIndex * cardWidth);

  return (
    <div className="relative w-full 2xl:max-w-7xl 2xl:mx-auto py-8 overflow-hidden">
      <motion.div
        ref={sliderRef}
        initial={{ x: isInitialLoad ? "-50%" : 0 }}
        animate={{ x: translateX }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="flex"
      >
        {ourRosaries?.map((slide, index) => (
          <motion.div
            key={index}
            className="flex-shrink-0 w-64 h-80 mx-2 bg-black"
            initial={{ opacity: isInitialLoad ? 0 : 1 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.8,
              delay: isInitialLoad ? 0.1 * index : 0,
            }}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              width={300}
              height={200}
              className="w-full h-full rounded-2xl"
              style={{ objectFit: "cover" }}
              priority={index === 0}
              loading={index === 0 ? "eager" : "lazy"}
            />
          </motion.div>
        ))}
      </motion.div>

      <div className="flex items-center justify-end gap-2 padding-ctn py-4">
        <motion.button
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          onClick={prevSlide}
          className="bg-black bg-opacity-80 text-white p-3 rounded-full hover:bg-opacity-100 transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
            />
          </svg>
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          onClick={nextSlide}
          className="bg-black bg-opacity-80 text-white p-3 rounded-full hover:bg-opacity-100 transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
            />
          </svg>
        </motion.button>
      </div>
    </div>
  );
};

export default SecondarySlider;
