"use client";

import { motion } from "framer-motion";

import SectionTitle from "../atoms/SectionTitle";
import SectionSubTitle from "../atoms/SectionSubTitle";
import CustomButton from "../atoms/CustomButton";
import SectionParagraph from "../atoms/SectionParagraph";
import SectionLayout from "../templates/SectionLayout";

import { imageTwoVariants } from "../../anim";

const OurArticle = ({ reverse = false }) => {
  return (
    <SectionLayout>
      <div className="padding-y padding-ctn">
        <div className="flex md:items-center max-md:flex-col">
          {/* <motion.div
            variants={imageTwoVariants(reverse)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            className="flex-1"
          ></motion.div> */}

          <div className="max-w-6xl w-full space-y-4">
            <SectionTitle title="Art, Prayer & Companionship Goals of Rosary Makers" />
            <SectionSubTitle text="By ANDREW NELSON, Staff Writer|Published February 3, 2022" />
            <div className="space-y-4 sm:text-lg pt-6">
              <SectionParagraph>
                {" "}
                STONE MOUNTAIN–Bringing faith into the world of the special
                needs disabilities community, Nicholas Ihenacho is a founder of
                Rosary Makers of America that offers a special focus on art,
                prayer and companionship.
              </SectionParagraph>
              <SectionParagraph>
                From working with his son, Ikenna, who has Down syndrome,
                Ihenacho formed this nonprofit for others to express themselves
                by creating prayer beads. With the diverse range of guests and
                their families, the organization hopes to share their handiwork
                with area parishes and believers.
              </SectionParagraph>
              <CustomButton
                text="Read full article"
                href="https://georgiabulletin.org/news/2022/02/art-prayer-and-companionship-goals-of-rosary-makers/"
                externalLink
              />
            </div>
          </div>
        </div>
      </div>
    </SectionLayout>
  );
};

export default OurArticle;
