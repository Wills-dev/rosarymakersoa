import SectionParagraph from "../atoms/SectionParagraph";
import SectionSubTitle from "../atoms/SectionSubTitle";
import SectionTitle from "../atoms/SectionTitle";

const OurStory = () => {
  return (
    <section className="padding-y padding-ctn">
      <div className="space-y-4">
        <SectionTitle title="Our Story" />
        <SectionSubTitle text="Introduction:" />
        <SectionParagraph className="max-w-4xl">
          At the beginning, our story was not added to the website because the
          founder did not want to make the organization and its story about
          himself and his family but rather about the bigger story that Rosary
          Makers of America stand for which is to give our special needs young
          adult a special place and a center of excellence where they can come
          to be gainfully employed and engaged in the art of making beautiful
          rosaries and in so doing enjoy the pride, the joy and the dignity of
          honest human labor.
        </SectionParagraph>
        <SectionParagraph className="max-w-4xl">
          When I insisted and reassured him that the story behind the formation
          of our organization, Rosary Makers of America, would not be a
          distraction, but an asset and that people truly wanted to know how
          Rosary Makers of America came to be, he penned down the story that
          would unfold hereunder which I have captioned “The Story behind Our
          Story”.
        </SectionParagraph>
        <SectionParagraph className="max-w-4xl">
          ~Cynthia Okoro, Administator.
        </SectionParagraph>
      </div>
    </section>
  );
};

export default OurStory;
