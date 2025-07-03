"use client";

import Image from "next/image";

import { AnimatePresence, motion } from "framer-motion";

const ParticipateCard = ({ participate, index }) => {
  return (
    <motion.div
      initial={{ y: 40 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
      className="relative w-full col-span-2 rounded-lg group"
    >
      <motion.div className="w-full absolute top-0 left-0 z-20 flex flex-col gap-6 p-6 text-white">
        <p className="sm:text-3xl text-xl font-medium">
          {participate?.caption}
        </p>
        <p className="text-lg font-light group-hover:block hidden">
          {participate?.description}
        </p>
      </motion.div>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute bottom-0 left-0 p-6 z-20 w-full group-hover:block hidden"
        >
          <a
            href="https://www.indeed.com/job/arts-and-crafts-instructor-7c599a9f099b3ebf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between gap-4 text-white"
          >
            <span className="uppercase">Join us</span>
            <motion.span
              initial={{ x: -40 }}
              animate={{ x: 0 }}
              exit={{ x: 40 }}
              transition={{ duration: 0.5 }}
              className=""
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            </motion.span>
          </a>
        </motion.div>
      </AnimatePresence>
      <div className="absolute rounded-lg bg-black opacity-35 group-hover:opacity-100 h-full w-full top-0 left-0 right-0 bottom-0 z-10 transition-all duration-300 ease-out" />
      <motion.div
        className="relative w-full sm:h-[500px] h-96 overflow-hidden rounded-lg shadow-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Image
          src={participate?.image}
          alt={participate?.caption}
          layout="fill"
          priority={index === 0}
          quality={75}
          objectFit="cover"
          className="transition-all duration-300"
        />
      </motion.div>
    </motion.div>
  );
};

export default ParticipateCard;
