"use client";

import Image from "next/image";

import { motion } from "framer-motion";

import AboutImage from "../public/assets/images/Georgia-Bulletin.png";

import { subheadingVariants } from "../anim";

const Prayer = () => {
  return (
    <motion.div
      variants={subheadingVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="section-bg"
    >
      <h3 className="sm:text-lg uppercase font-semibold text-primary-black border-b-1">
        Art, Prayer and Companionship Goals of Rosary Makers
      </h3>
      <div className="mt-2 pt-2 flex max-md:flex-col gap-5">
        <div className="flex flex-col gap-4">
          <p className=" text-primary-brown">
            <span className="font-bold">
              {" "}
              By ANDREW NELSON, Staff Writer|Published February 3, 2022
            </span>
          </p>
          <p className=" text-primary-brown">
            STONE MOUNTAIN–Bringing faith into the world of the special needs
            disabilities community, Nicholas Ihenacho is a founder of Rosary
            Makers of America that offers a special focus on art, prayer and
            companionship.
          </p>
          <p className=" text-primary-brown">
            From working with his son, Ikenna, who has Down syndrome, Ihenacho
            formed this nonprofit for others to express themselves by creating
            prayer beads. With the diverse range of guests and their families,
            the organization hopes to share their handiwork with area parishes
            and believers.
          </p>
          <a
            href="https://georgiabulletin.org/news/2022/02/art-prayer-and-companionship-goals-of-rosary-makers/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 border-1 border-primary-brown hover:border-primary-black hover:text-primary-black text-primary-brown w-fit transition-all duration-300"
          >
            Learn more
          </a>
        </div>
        <div className="max-w-sm w-full">
          <Image
            src={AboutImage}
            alt="about-us"
            placeholder="blur"
            className="w-full h-auto"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Prayer;
