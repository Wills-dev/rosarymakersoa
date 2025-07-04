import Image from "next/image";

import SectionTitle from "../atoms/SectionTitle";
import AboutUsContent from "../molecules/AboutUsContent";
import SectionLayout from "../templates/SectionLayout";

const AboutSection = () => {
  return (
    <SectionLayout>
      <div className="padding-ctn padding-y pt-0">
        <div className="flex md:gap-16 gap-10 md:items-center max-md:flex-col">
          <div className="max-w-xl w-full">
            <SectionTitle title="About us" />
            <div className="pt-10">
              <AboutUsContent />
            </div>
          </div>
          <div className="flex-1 w-full">
            <Image
              alt="about-us"
              src="/assets/images/about-us.JPG"
              width={400}
              height={600}
              priority
              className="object-cover h-auto w-full"
            />
          </div>
        </div>
      </div>
    </SectionLayout>
  );
};

export default AboutSection;
