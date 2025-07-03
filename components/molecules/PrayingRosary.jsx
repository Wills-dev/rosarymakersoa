import SectionSubTitle from "../atoms/SectionSubTitle";
import SectionParagraph from "../atoms/SectionParagraph";

const PrayingRosary = () => {
  return (
    <section className="padding-y padding-ctn">
      <SectionSubTitle text="Indulgences for Praying the Rosary." />
      <div className="pt-10 space-y-4 max-w-4xl">
        <SectionParagraph>
          An Indulgence is the remission before God of the temporal punishment
          due for sins which have already been forgiven as far as their guilt is
          concerned. Indulgences are granted by God through the Catholic Church
          which, as minister of the Redemption, dispenses and applies the
          treasury of the satisfaction won by Christ and the Saints.
        </SectionParagraph>
        <SectionParagraph>
          Though the guilt of sin and the eternal punishment it may have merited
          are remitted by sacramental absolution, measurable punishment before
          or after death is still required in order to satisfy God’s justice,
          even for sins already forgiven. To the extent we fail to atone
          sufficiently for our sins during our lifetimes on earth, we will
          suffer for a given “time” in Purgatory. An Indulgence cancels or
          lessens this non-eternal punishment.
        </SectionParagraph>
        <SectionParagraph>
          In order to gain an Indulgence, one must be Baptized, not
          excommunicated, and in the state of grace at least at the completion
          of the prescribed work. In order to gain Indulgences, one must have at
          least a general intention of gaining them. If at the beginning of the
          day we make an intention to gain all the Indulgences we can that day,
          we do not have to make this intention each time we perform a work to
          which an Indulgence is attached. An Indulgence may be gained for
          oneself or may be offered for Souls in Purgatory, but may not be
          applied to another living person.
        </SectionParagraph>
        <SectionParagraph>
          A plenary Indulgence remits all the punishment due for sin and makes
          possible immediate entrance into Heaven after death.
        </SectionParagraph>
      </div>
    </section>
  );
};

export default PrayingRosary;
