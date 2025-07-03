import SectionTitle from "../atoms/SectionTitle";
import SecondarySlider from "../molecules/SecondarySlider";

const SampleOurWork = () => {
  return (
    <section className="padding-y bg-gray-100">
      <div className="padding-ctn">
        <SectionTitle title=" Samples of Our Work" />
      </div>
      <div className="padding-y">
        <SecondarySlider />
      </div>
    </section>
  );
};

export default SampleOurWork;
