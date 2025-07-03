import PageTitle from "../atoms/PageTitle";
import SectionParagraph from "../atoms/SectionParagraph";
import ParticipateCard from "../molecules/cards/ParticipateCard";

import { participate } from "../../constants/index";

const ComeJoinUsWrapper = () => {
  return (
    <section className="sm:pt-16 pt-20">
      <section className="padding-y padding-ctn">
        <PageTitle title="Come Join Us" />
      </section>
      <section className="padding-ctn space-y-6 pb-20">
        <SectionParagraph className="sm:text-xl text-lg max-w-xl">
          There are many ways that you can participate with our organization.
          We’re currently seeking:
        </SectionParagraph>

        <div className="grid lg:grid-cols-6 sm:grid-cols-4 grid-cols-2 gap-6 py-6">
          {participate?.map((partake, index) => (
            <ParticipateCard
              key={partake?.caption}
              index={index}
              participate={partake}
            />
          ))}
        </div>
        <SectionParagraph className="sm:text-xl text-lg max-w-xl">
          Interested in applying for the instructor position? State that when
          filling out the form below or view our listing on{" "}
          <a
            href="https://www.indeed.com/job/arts-and-crafts-instructor-7c599a9f099b3ebf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-800"
          >
            INDEED.
          </a>
        </SectionParagraph>
        <SectionParagraph className="sm:text-xl text-lg max-w-xl">
          The purpose and goal of Rosary Makers of America is to make or craft
          the catholic rosaries. Our Mission is to get our special needs adults
          gainfully employed.
        </SectionParagraph>
      </section>
    </section>
  );
};

export default ComeJoinUsWrapper;
