import SectionTitle from "../atoms/SectionTitle";
import CustomButton from "../atoms/CustomButton";

import { ROUTES } from "../../lib/constants/routes";

const DonateSection = () => {
  return (
    <section className="padding-y padding-ctn">
      <div className="flex md:items-center max-md:flex-col">
        <div className="flex-1"></div>
        <div className="max-w-2xl w-full space-y-4">
          <SectionTitle title="Make a Donation" />
          <div className="space-y-4 sm:text-lg pt-6">
            <p>Please support our work.</p>
            <p>
              Our Mission is to get special needs adults employed, to enrich and
              improve their lives.
            </p>
            <p>
              Rosary Makers of America is a 501(c)(3) nonprofit organization.
            </p>
            <div className="">
              <CustomButton text="Make a Donation" href={ROUTES?.DONATE} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonateSection;
