"use client";

import { motion } from "framer-motion";

import { containerVariants } from "../../anim";
import { ROUTES } from "../../lib/constants/routes";

import CustomButton from "../atoms/CustomButton";
import SectionParagraph from "../atoms/SectionParagraph";

const AboutUsContent = () => {
  return (
    <motion.div variants={containerVariants} className="space-y-4 sm:text-lg">
      <SectionParagraph>
        Rosary Makers of America is a 501(c)(3) nonprofit organization founded
        in the United States of America. More than thirty-five percent of our
        healthy special needs people who graduate out of the special need High
        school education in America spend much time at home unemployed and
        unengaged. They are not in college or university, not in vocational
        training and have no job or employment. These dire statistics may be the
        same or worse in various parts of the world.
      </SectionParagraph>
      <SectionParagraph>
        It is this stark and sad reality that is the motive force or impetus for
        the founding of Rosary Makers of America, Inc.
      </SectionParagraph>
      <CustomButton text="Learn more" href={ROUTES?.ABOUT_US} />
    </motion.div>
  );
};

export default AboutUsContent;
