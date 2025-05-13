"use client";

import { useInView } from "react-intersection-observer";

import { motion } from "framer-motion";

import { BOARD_MEMBERS } from "../../lib/constants/index";
import { containerVariants } from "../../anim";

import SectionTitle from "../atoms/SectionTitle";
import BoardMemberCard from "../molecules/cards/BoardMemberCard";

const BoardDirectors = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const directions = ["left", "right", "top", "bottom", "left", "right", "top"];

  return (
    <motion.section
      ref={ref}
      className="bg-gray-100"
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <div className="padding-ctn padding-y">
        <div className="flex justify-center w-full pb-10">
          {" "}
          <SectionTitle title=" Our Board of Directors" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center">
          {BOARD_MEMBERS?.map((member, index) => (
            <BoardMemberCard
              key={member.id}
              member={member}
              direction={directions[index % directions.length]}
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default BoardDirectors;
