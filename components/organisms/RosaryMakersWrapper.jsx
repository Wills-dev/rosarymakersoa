import Link from "next/link";

import PageTitle from "../atoms/PageTitle";
import SectionParagraph from "../atoms/SectionParagraph";
import ImageSlider from "../molecules/ImageSlider";
import SampleOurWork from "./SampleOurWork";

import { ROUTES } from "../../lib/constants/routes";

const RosaryMakersWrapper = () => {
  return (
    <div className="">
      <div className="padding-y">
        <section className="padding-ctn padding-y">
          <PageTitle title="Our Rosary Makers" />
          <SectionParagraph className="sm:text-xl text-lg max-w-4xl pt-10">
            Rosary making is a joyful labor of love. Please assist us. Make a{" "}
            <Link href={ROUTES?.DONATE} className="text-blue-800">
              donation
            </Link>
            ,{" "}
            <Link href={ROUTES?.JOIN_US} className="text-blue-800">
              {" "}
              volunteer
            </Link>{" "}
            and pray for us.
          </SectionParagraph>
        </section>
      </div>
      <ImageSlider />
      <SampleOurWork />
    </div>
  );
};

export default RosaryMakersWrapper;
