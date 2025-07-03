import Link from "next/link";

import PageTitle from "../atoms/PageTitle";
import SectionParagraph from "../atoms/SectionParagraph";
import SectionsOfHolyRosary from "../molecules//SectionsOfHolyRosary";
import RosaryStory from "../molecules/RosaryStory";
import BenefitsRosary from "../molecules/BenefitsRosary";
import PrayingRosary from "../molecules/PrayingRosary";
import NewNorms from "../molecules/NewNorms";

const TheHolyRosaryWrapper = () => {
  return (
    <div className="padding-y">
      <section className="padding-ctn">
        <div className="padding-y max-w-xl space-y-4">
          <PageTitle title="The Holy Rosary" />
          <SectionParagraph className="sm:text-xl text-lg max-w-xl pt-10">
            Learn How to Pray the Rosary, the Benefits of the Rosary and How to
            Make the Rosary. The rosary is one of the most cherished prayers of
            our Catholic Church.
          </SectionParagraph>
          <SectionParagraph className="sm:text-xl text-lg ">
            Our Mission is to get special needs adults employed, to enrich and
            improve their lives. Rosary Makers of America is a labor of love.{" "}
          </SectionParagraph>
          <SectionParagraph className="sm:text-xl text-lg ">
            <Link
              href="/make-a-donation-2"
              className="text-blue-950 font-medium hover:underline transition-all duration-300"
            >
              Make a donation
            </Link>
            ,{" "}
            <Link
              href="/come-join-us-2"
              className="text-blue-950 font-medium hover:underline transition-all duration-300"
            >
              volunteer
            </Link>{" "}
            and pray for us.
          </SectionParagraph>
        </div>
      </section>
      <SectionsOfHolyRosary />
      <RosaryStory />
      <BenefitsRosary />
      <PrayingRosary />
      <NewNorms />
      <div className="padding-x w-full space-y-6">
        <div className="section-bg text-primary-brown space-y-4">
          <h3 className="sm:text-lg uppercase font-semibold text-primary-black border-b-1">
            Blessing of the Rosary
          </h3>
          <div className="grid grid-cols-2 gap-6">
            <p className="md:col-span-1  col-span-2">
              1. Sinners are forgiven.
            </p>
            <p className="md:col-span-1  col-span-2">
              2. Souls that thirst are refreshed.
            </p>
            <p className="md:col-span-1  col-span-2">
              3. Those who are fettered have their bonds broken.
            </p>
            <p className="md:col-span-1  col-span-2">
              4. Those who weep find happiness
            </p>
            <p className="md:col-span-1  col-span-2">
              5. Those who are tempted find peace.
            </p>{" "}
            <p className="md:col-span-1  col-span-2">6. The poor find help.</p>
            <p className="md:col-span-1  col-span-2">
              7. Religious are reformed.
            </p>
            <p className="md:col-span-1  col-span-2">
              8. Those who are ignorant are instructed.
            </p>
            <p className="md:col-span-1  col-span-2">
              9. The living learn to overcome pride.
            </p>
            <p className="md:col-span-1  col-span-2">
              10. The dead (the Holy Souls) have their pains eased by suffrages.
            </p>
          </div>
        </div>
        <div className="section-bg text-primary-brown space-y-4">
          <h3 className="sm:text-lg uppercase font-semibold text-primary-black border-b-1">
            Benefits of the Rosary
          </h3>
          <div className="grid grid-cols-2 gap-6">
            <p className="md:col-span-1  col-span-2">
              1. It gradually gives us a perfect knowledge of Jesus Christ.
            </p>
            <p className="md:col-span-1  col-span-2">
              2. It purifies our souls, washing away sin.
            </p>
            <p className="md:col-span-1  col-span-2">
              3. It gives us victory over all our enemies.
            </p>
            <p className="md:col-span-1  col-span-2">
              4. It makes it easy for us to practice virtue.
            </p>
            <p className="md:col-span-1  col-span-2">
              5. It sets us on fire with love of Our Lord.
            </p>{" "}
            <p className="md:col-span-1  col-span-2">
              6. It enriches us with graces and merits.
            </p>
            <p className="md:col-span-1  col-span-2">
              7. It supplies us with what is needed to pay all our debts to God
              and to our fellow men; and finally, it obtains all kinds of graces
              for us from Almighty God.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TheHolyRosaryWrapper;
