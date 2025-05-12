import SectionTitle from "../atoms/SectionTitle";
import CustomButton from "../atoms/CustomButton";

import { ROUTES } from "../../lib/constants/routes";

const JoinUsSection = () => {
  return (
    <section className="padding-y padding-ctn">
      {" "}
      <div className="flex md:items-center max-md:flex-col">
        <div className="max-w-xl w-full space-y-4">
          <SectionTitle title="Join us" />

          <div className="space-y-4 sm:text-lg pt-6">
            <p>COME JOIN OUR ROSARY MAKERS FAMILY!</p>
            <p>
              Be a part of something meaningful. At Rosary Makers of America, we
              empower special needs individuals through purposeful work,
              crafting beautiful Catholic rosaries while nurturing a life of
              prayer and community. Whether you're volunteering, donating, or
              spreading the word, your support helps turn idle time into
              inspired purpose. Together, we make more than rosaries — we make a
              difference.
            </p>
            <div className="">
              <CustomButton text="Join Us" href={ROUTES?.JOIN_US} />
            </div>
          </div>
        </div>
        <div className="flex-1"></div>
      </div>
    </section>
  );
};

export default JoinUsSection;
