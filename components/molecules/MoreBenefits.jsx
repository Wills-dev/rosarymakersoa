import SectionParagraph from "../atoms/SectionParagraph";
import SectionSubTitle from "../atoms/SectionSubTitle";

const MoreBenefits = () => {
  return (
    <section className="padding-ctn padding-y">
      <SectionSubTitle text="Benefits of the Rosary" />
      <div className="pt-10 grid grid-cols-2 gap-6">
        <SectionParagraph className="md:col-span-1  col-span-2">
          1. It gradually gives us a perfect knowledge of Jesus Christ.
        </SectionParagraph>
        <SectionParagraph className="md:col-span-1  col-span-2">
          2. It purifies our souls, washing away sin.
        </SectionParagraph>
        <SectionParagraph className="md:col-span-1  col-span-2">
          3. It gives us victory over all our enemies.
        </SectionParagraph>
        <SectionParagraph className="md:col-span-1  col-span-2">
          4. It makes it easy for us to practice virtue.
        </SectionParagraph>
        <SectionParagraph className="md:col-span-1  col-span-2">
          5. It sets us on fire with love of Our Lord.
        </SectionParagraph>
        <SectionParagraph className="md:col-span-1  col-span-2">
          6. It enriches us with graces and merits.
        </SectionParagraph>
        <SectionParagraph className="col-span-2 max-w-4xl">
          7. It supplies us with what is needed to pay all our debts to God and
          to our fellow men; and finally, it obtains all kinds of graces for us
          from Almighty God.
        </SectionParagraph>
      </div>
    </section>
  );
};

export default MoreBenefits;
