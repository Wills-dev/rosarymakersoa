"use client";

import { motion } from "framer-motion";

import { subheadingVariants } from "../anim";

const BePart = () => {
  return (
    <motion.div
      variants={subheadingVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="section-bg"
    >
      <h3 className="sm:text-lg uppercase font-semibold text-primary-black border-b-1">
        Join Us
      </h3>
      <div className="mt-2 pt-2 flex md:items-center flex-col gap-5">
        <div className="flex-1 w-full">
          <div className=" w-full max-h-96 h-96 relative aspect-video sm:my-12">
            <iframe
              src="https://player.vimeo.com/video/877740921?dnt=1&app_id=122963"
              frameborder="0"
              title="Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full min-h-full min-w-full"
            ></iframe>
          </div>
        </div>
        <div className="flex-1">
          <h6 className=" sm:text-2xl font-bold text-primary-brown">
            Be a Part of Something Meaningful
          </h6>
        </div>
      </div>
    </motion.div>
  );
};

export default BePart;
