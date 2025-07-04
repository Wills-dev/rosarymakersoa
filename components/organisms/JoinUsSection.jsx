"use client";

import AnimatedImage from "../molecules/AnimatedImage";
import bgImg from "/public/assets/images/join-us.JPG";
import SectionTitle from "../atoms/SectionTitle";
import CustomButton from "../atoms/CustomButton";
import SectionLayout from "../templates/SectionLayout";
import SectionParagraph from "../atoms/SectionParagraph";

import { ROUTES } from "../../lib/constants/routes";

const JoinUsSection = ({ reverse = true }) => {
  return (
    <div className="">
      <AnimatedImage img={bgImg} />
      <SectionLayout className="">
        <div className="padding-y padding-ctn">
          <div className="flex md:gap-16 gap-10 md:items-center max-md:flex-col">
            <div className="max-w-xl w-full space-y-4">
              <SectionTitle title="Join us" />

              <div className="space-y-4 sm:text-lg pt-6">
                <SectionParagraph>
                  COME JOIN OUR ROSARY MAKERS FAMILY!
                </SectionParagraph>
                <SectionParagraph>
                  Be a part of something meaningful. At Rosary Makers of
                  America, we empower special needs individuals through
                  purposeful work, crafting beautiful Catholic rosaries while
                  nurturing a life of prayer and community. Whether you're
                  volunteering, donating, or spreading the word, your support
                  helps turn idle time into inspired purpose. Together, we make
                  more than rosaries — we make a difference.
                </SectionParagraph>
                <CustomButton text="Join Us" href={ROUTES?.JOIN_US} />
              </div>
            </div>
            {/* <motion.div
            variants={imageTwoVariants(reverse)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            className="flex-1 w-full"
          >
            <Image
              alt="about-us"
              src="/assets/images/join-us.JPG"
              width={400}
              height={600}
              priority
              className="object-cover h-auto w-full"
            />
          </motion.div> */}
          </div>
        </div>
      </SectionLayout>
    </div>
  );
};

export default JoinUsSection;
