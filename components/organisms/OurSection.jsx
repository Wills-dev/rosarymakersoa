import { our } from "../../lib/constants";

import OurCard from "../molecules/cards/OurCard";
import SectionLayout from "../templates/SectionLayout";

const OurSection = () => {
  return (
    <SectionLayout>
      <div className="padding-ctn padding-y">
        <div className="flex gap-6 padding-y flex-wrap">
          {our?.map((our, index) => (
            <OurCard key={index} our={our} />
          ))}
        </div>
      </div>
    </SectionLayout>
  );
};

export default OurSection;
