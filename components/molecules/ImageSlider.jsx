"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

import { motion, AnimatePresence } from "framer-motion";

const ImageSlider = ({ slider }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    slider.forEach((slide) => {
      const img = new window.Image();
      img.src = slide.src;
    });
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slider.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slider.length) % slider.length);
  };

  return (
    <section className="pb-16">
      <div className="relative w-full h-screen 2xl:h-[1200px] max-sm:h-[350px] overflow-hidden">
        <AnimatePresence>
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Image
              src={slider[currentSlide].src}
              alt={slider[currentSlide].alt}
              fill
              style={{ objectFit: "cover" }}
              priority={currentSlide === 0}
              loading={currentSlide === 0 ? "eager" : "lazy"}
            />
            <div className="absolute inset-0 bg-black bg-opacity-30" />
          </motion.div>
        </AnimatePresence>

        <div className="absolute bottom-4 right-4 flex justify-center gap-4">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={prevSlide}
            className="bg-white bg-opacity-80 text-black h-10 w-10 flex justify-center items-center rounded-full hover:bg-opacity-100 transition-colors"
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
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={nextSlide}
            className="bg-white bg-opacity-80 text-black h-10 w-10 flex justify-center items-center rounded-full hover:bg-opacity-100 transition-colors"
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
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="text-gray-600 text-sm drop-shadow-lg p-2"
      >
        {slider[currentSlide].caption}
      </motion.p>
    </section>
  );
};

export default ImageSlider;
