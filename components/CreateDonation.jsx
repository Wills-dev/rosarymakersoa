"use client";

import Link from "next/link";
import Image from "next/image";

import { motion } from "framer-motion";

import Donate from "../public/assets/images/RMOA-D.png";

import { subheadingVariants } from "../anim";

const CreateDonation = () => {
  return (
    <motion.div
      variants={subheadingVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="section-bg"
    >
      <h3 className="sm:text-lg uppercase font-semibold text-primary-black border-b-1">
        Make a Donation
      </h3>
      <div className="mt-2 pt-2 flex md:items-center max-md:flex-col gap-5">
        <div className="max-w-sm w-full">
          <Image
            src={Donate}
            alt="about-us"
            placeholder="blur"
            className="w-full h-auto object-cover"
          />
        </div>
        <div className="flex flex-col gap-4">
          <p className=" text-primary-brown">
            Please support our work. Our Mission is to get special needs adults
            employed, to enrich and improve their lives. Rosary Makers of
            America is a 501(c)(3) nonprofit organization.
          </p>

          <Link
            href="/make-a-donation-2"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 border-1 border-primary-brown hover:border-primary-black hover:text-primary-black text-primary-brown w-fit transition-all duration-300"
          >
            MAKE A DONATION
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default CreateDonation;
