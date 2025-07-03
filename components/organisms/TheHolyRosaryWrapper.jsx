import Link from "next/link";

import PageTitle from "../atoms/PageTitle";
import SectionParagraph from "../atoms/SectionParagraph";
import SectionsOfHolyRosary from "../molecules//SectionsOfHolyRosary";
import RosaryStory from "../molecules/RosaryStory";
import BenefitsRosary from "../molecules/BenefitsRosary";
import PrayingRosary from "../molecules/PrayingRosary";
import NewNorms from "../molecules/NewNorms";
import RosaryBlessings from "../molecules/RosaryBlessings";
import MoreBenefits from "../molecules/MoreBenefits";

const TheHolyRosaryWrapper = () => {
  return (
    <div className="padding-y">
      <section className="padding-ctn">
        <div className="padding-y max-w-4xl space-y-4">
          <PageTitle title="The Holy Rosary" />
          <SectionParagraph className="sm:text-xl text-lg max-w-4xl pt-10">
            Learn How to Pray the Rosary, the Benefits of the Rosary and How to
            Make the Rosary. The rosary is one of the most cherished prayers of
            our Catholic Church.
          </SectionParagraph>
          <SectionParagraph className="sm:text-xl text-lg ">
            Our Mission is to get special needs adults employed, to enrich and
            improve their lives. Rosary Makers of America is a labor of love.{" "}
          </SectionParagraph>
          <SectionParagraph className="sm:text-xl text-lg ">
            <Link
              href="/make-a-donation-2"
              className="text-blue-950 font-medium hover:underline transition-all duration-300"
            >
              Make a donation
            </Link>
            ,{" "}
            <Link
              href="/come-join-us-2"
              className="text-blue-950 font-medium hover:underline transition-all duration-300"
            >
              volunteer
            </Link>{" "}
            and pray for us.
          </SectionParagraph>
        </div>
      </section>
      <SectionsOfHolyRosary />
      <RosaryStory />
      <BenefitsRosary />
      <PrayingRosary />
      <NewNorms />
      <RosaryBlessings />
      <MoreBenefits />
    </div>
  );
};

export default TheHolyRosaryWrapper;
