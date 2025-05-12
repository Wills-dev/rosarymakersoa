import SectionTitle from "../atoms/SectionTitle";
import AboutUsContent from "../molecules/AboutUsContent";

const AboutSection = () => {
  return (
    <section className="padding-ctn padding-y pt-0">
      <div className="flex md:items-center max-md:flex-col">
        <div className="max-w-xl w-full">
          <SectionTitle title="About us" />
          <div className="pt-10">
            <AboutUsContent />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
