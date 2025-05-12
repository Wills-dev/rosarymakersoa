import SectionTitle from "../atoms/SectionTitle";
import AboutUsContent from "../molecules/AboutUsContent";
import SectionLayout from "../templates/SectionLayout";

const AboutSection = () => {
  return (
    <SectionLayout>
      <div className="padding-ctn padding-y pt-0">
        <div className="flex md:items-center max-md:flex-col">
          <div className="max-w-xl w-full">
            <SectionTitle title="About us" />
            <div className="pt-10">
              <AboutUsContent />
            </div>
          </div>
        </div>
      </div>
    </SectionLayout>
  );
};

export default AboutSection;
