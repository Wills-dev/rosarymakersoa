"use client";

import Link from "next/link";

import { motion } from "framer-motion";

import { itemVariants } from "../../anim";

const CustomButton = ({
  text,
  href,
  showArrow = true,
  externalLink = false,
}) => {
  const buttonElement = (
    <button className="relative flex items-center justify-center px-6 py-3 bg-black text-white font-semibold rounded-full overflow-hidden group">
      <span className="absolute inset-0 bg-blue-950 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></span>
      <span className="relative z-10 flex items-center">
        {text}
        {showArrow && (
          <svg
            className="ml-2 w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        )}
      </span>
    </button>
  );
  return (
    <motion.div
      variants={itemVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
    >
      {href && externalLink ? (
        <a href={href} target="_blank" rel="noopener noreferrer">
          {buttonElement}
        </a>
      ) : href ? (
        <Link href={href}>{buttonElement}</Link>
      ) : (
        { buttonElement }
      )}
    </motion.div>
  );
};

export default CustomButton;
