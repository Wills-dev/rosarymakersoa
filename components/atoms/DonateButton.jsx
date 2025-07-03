"use client";

import Script from "next/script";
import { useEffect, useState } from "react";

import { motion } from "framer-motion";

import { itemVariants } from "../../anim";

const DonateButton = () => {
  const handleClickOption2 = () => {
    // window.location.href =
    //   "https://crm.bloomerang.co/HostedDonation?ApiKey=pub_1ce6b1f0-ba3b-11eb-b1fa-060cfd9bde37&WidgetId=48128";
    // Alternatively, open in a new tab:
    window.open(
      "https://crm.bloomerang.co/HostedDonation?ApiKey=pub_1ce6b1f0-ba3b-11eb-b1fa-060cfd9bde37&WidgetId=48128",
      "_blank"
    );
  };

  return (
    <motion.div
      variants={itemVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
    >
      {/* <Script
        src="https://s3-us-west-2.amazonaws.com/bloomerang-public-cdn/rosarymakersofamerica/.widget-js/5710848.js"
        strategy="afterInteractive"
        onLoad={() => {
          setIsScriptLoaded(true);
          console.log("Bloomerang script loaded");
        }}
      /> */}
      <button
        onClick={handleClickOption2}
        className="relative flex items-center justify-center px-6 py-3 bg-black text-white font-semibold rounded-full overflow-hidden group"
      >
        <span className="absolute inset-0 bg-blue-950 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></span>
        <span className="relative z-10 flex items-center">Click To Donate</span>
      </button>
    </motion.div>
  );
};

export default DonateButton;
