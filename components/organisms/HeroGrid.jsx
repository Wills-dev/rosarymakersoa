"use client";

import { useEffect, useState } from "react";

import { motion } from "framer-motion";

import HeroGridItemContainer from "../molecules/HeroGridItemContainer";

const HeroGrid = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);
  const gridItems = [
    {
      id: 1,
      color: "bg-blue-500",
      hoverColor: "bg-blue-700",
      text: "Innovation",
      animation: "down",
      src: "/assets/images/ourMakers/maker0.jpg",
    },
    {
      id: 2,
      color: "bg-green-500",
      hoverColor: "bg-green-700",
      text: "Creativity",
      animation: "up",
      src: "/assets/images/rosary/35.jpg",
    },
    {
      id: 3,
      color: "bg-red-500",
      hoverColor: "bg-red-700",
      text: "Technology",
      animation: "left",
      src: "/assets/images/ourMakers/maker1.jpg",
    },
    {
      id: 4,
      color: "bg-yellow-500",
      hoverColor: "bg-yellow-700",
      text: "Future",
      animation: "right",
      src: "/assets/images/ourMakers/maker5.jpg",
    },
    {
      id: 5,
      color: "bg-purple-500",
      hoverColor: "bg-purple-700",
      text: "Discovery",
      animation: "up",
      src: "/assets/images/rosary/32.jpg",
    },
    {
      id: 6,
      color: "bg-zinc-500",
      hoverColor: "bg-zinc-700",
      text: "Discovery",
      animation: "up",
      src: "/assets/images/ourMakers/maker6.jpg",
    },
    {
      id: 7,
      color: "bg-slate-500",
      hoverColor: "bg-slate-700",
      text: "Discovery",
      animation: "up",
      src: "/assets/images/rosary/19.jpg",
    },
    {
      id: 8,
      color: "bg-purple-500",
      hoverColor: "bg-purple-700",
      text: "Discovery",
      animation: "up",
      src: "/assets/images/ourMakers/maker7.jpg",
    },
    {
      id: 9,
      color: "bg-purple-500",
      hoverColor: "bg-purple-700",
      text: "Discovery",
      animation: "up",
      src: "/assets/images/ourMakers/maker8.jpg",
    },
    {
      id: 10,
      color: "bg-purple-500",
      hoverColor: "bg-purple-700",
      text: "Discovery",
      animation: "up",
      src: "/assets/images/rosary/9.jpg",
    },
  ];

  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={isMounted ? { scale: 1, opacity: 1 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="grid grid-cols-6 md:gap-6 gap-2"
    >
      <HeroGridItemContainer
        key={gridItems[0].id}
        color={gridItems[0].color}
        hoverColor={gridItems[0].hoverColor}
        text={gridItems[0].text}
        animationVariant={gridItems[0].animation}
        src={gridItems[0].src}
        className="col-start-5 col-span-2 lg:col-start-6 lg:col-span-1"
      />
      <HeroGridItemContainer
        key={gridItems[1].id}
        color={gridItems[1].color}
        hoverColor={gridItems[1].hoverColor}
        text={gridItems[1].text}
        animationVariant={gridItems[1].animation}
        src={gridItems[1].src}
        className=" col-span-2 lg:col-start-4 lg:col-span-1"
      />
      {gridItems.slice(2).map((item) => (
        <HeroGridItemContainer
          key={item.id}
          color={item.color}
          hoverColor={item.hoverColor}
          text={item.text}
          animationVariant={item.animation}
          src={item.src}
          className="col-span-2 lg:col-span-1"
        />
      ))}
    </motion.div>
  );
};

export default HeroGrid;
