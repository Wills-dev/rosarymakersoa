import bgImg from "/public/assets/images/about-us.JPG";
import SectionTitle from "../atoms/SectionTitle";
import AboutUsContent from "../molecules/AboutUsContent";
import SectionLayout from "../templates/SectionLayout";
import AnimatedImage from "../molecules/AnimatedImage";

const AboutSection = () => {
  //
  return (
    <div className="">
      <AnimatedImage img={bgImg} />
      <SectionLayout>
        <div className="padding-ctn padding-y pt-0">
          <div className="flex md:gap-16 gap-10 md:items-center max-md:flex-col">
            <div className="max-w-xl w-full">
              <SectionTitle title="About us" />
              <div className="pt-10">
                <AboutUsContent />
              </div>
            </div>
          </div>
        </div>
      </SectionLayout>
    </div>
  );
};

export default AboutSection;
