import PageTitle from "../atoms/PageTitle";
import SectionParagraph from "../atoms/SectionParagraph";

const ContactUsWrapper = () => {
  return (
    <section className="sm:pt-16 pt-20 ">
      <div className="padding-y padding-ctn">
        <PageTitle title="Contact Us" />
      </div>
      <div className="padding-y space-y-4 bg-gray-100 padding-ctn">
        <SectionParagraph className="sm:text-xl font-medium text-lg ">
          Rosary Makers of America,
        </SectionParagraph>
        <SectionParagraph className="sm:text-xl text-lg ">
          2300 W Park Pl. Blvd Ste. 142
        </SectionParagraph>
        <SectionParagraph className="sm:text-xl text-lg ">
          Stone Mountain, GA 30087
        </SectionParagraph>
        <SectionParagraph className="sm:text-xl text-lg ">
          Telephone. Fax . Text: 678-345-0788
        </SectionParagraph>
        <SectionParagraph className="sm:text-xl text-lg ">
          Email: info@rosarymakersoa.org
        </SectionParagraph>
      </div>
    </section>
  );
};

export default ContactUsWrapper;
