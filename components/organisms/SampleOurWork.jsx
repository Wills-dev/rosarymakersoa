import { ourRosaries } from "../../lib/constants";

import SectionTitle from "../atoms/SectionTitle";
import SecondarySlider from "../molecules/SecondarySlider";

const SampleOurWork = () => {
  return (
    <section className="padding-y bg-gray-100">
      <div className="padding-ctn">
        <SectionTitle title=" Samples of Our Work" />
      </div>
      <div className="padding-y">
        <SecondarySlider ourRosaries={ourRosaries} />
      </div>
    </section>
  );
};

export default SampleOurWork;
