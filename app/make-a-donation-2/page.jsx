import DonateButton from "../../components/atoms/DonateButton";
import PageTitle from "../../components/atoms/PageTitle";
import SectionParagraph from "../../components/atoms/SectionParagraph";
import MainLayout from "../../components/templates/MainLayout";

const MakeDonation = () => {
  return (
    <MainLayout>
      <div className="sm:pt-16 pt-20">
        <section className="padding-y padding-ctn">
          <PageTitle title="Make a Donation" />
        </section>
      </div>
      <section className="padding-y padding-ctn bg-gray-100">
        <div className=" space-y-4">
          <div className="space-y-4">
            <SectionParagraph className="sm:text-xl  text-lg ">
              Rosary Makers of America is a 501(c)(3) nonprofit organization.
              Please support our work. Our Mission is to get special needs
              adults employed, to enrich and improve their lives. Be part of the
              Rosary Makers of America family.
            </SectionParagraph>
            <SectionParagraph className="font-bold sm:text-lg">
              Volunteer, make a donation or pray for us.
            </SectionParagraph>
            <SectionParagraph className="sm:text-xl  text-lg ">
              Donating to a Catholic Appeal or Church? Consider a tax-deductible
              donation to support us!
            </SectionParagraph>
            <DonateButton />
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default MakeDonation;
