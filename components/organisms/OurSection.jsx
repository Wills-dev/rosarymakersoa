import { our } from "../../lib/constants";

import OurCard from "../molecules/cards/OurCard";

const OurSection = () => {
  return (
    <section className="padding-ctn padding-y">
      <div className="flex gap-6 padding-y flex-wrap">
        {our?.map((our, index) => (
          <OurCard key={index} our={our} />
        ))}
      </div>
    </section>
  );
};

export default OurSection;
