"use client";

import CustomButton from "../atoms/CustomButton";
import SectionTitle from "../atoms/SectionTitle";
import SectionLayout from "../templates/SectionLayout";
import SectionParagraph from "../atoms/SectionParagraph";

import { ROUTES } from "../../lib/constants/routes";

const DonateSection = ({ reverse = false }) => {
  return (
    <SectionLayout>
      <div className="padding-y padding-ctn">
        <div className="flex md:items-center max-md:flex-col">
          <div className="flex-1"></div>
          <div className="max-w-2xl w-full space-y-4">
            <SectionTitle title="Make a Donation" />
            <div className="space-y-4 sm:text-lg pt-6">
              <SectionParagraph>Please support our work.</SectionParagraph>
              <SectionParagraph>
                Our Mission is to get special needs adults employed, to enrich
                and improve their lives.
              </SectionParagraph>
              <SectionParagraph>
                Rosary Makers of America is a 501(c)(3) nonprofit organization.
              </SectionParagraph>
              <div className="">
                <CustomButton text="Make a Donation" href={ROUTES?.DONATE} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionLayout>
  );
};

export default DonateSection;
