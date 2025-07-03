import SectionParagraph from "../atoms/SectionParagraph";
import SectionTitle from "../atoms/SectionTitle";

const NewNorms = () => {
  return (
    <section className="padding-y padding-ctn bg-gray-100">
      <SectionTitle title="The New Norms" />
      <div className="pt-10 space-y-4 max-w-4xl">
        <SectionParagraph>
          To gain a plenary Indulgence, it is necessary to perform the work to
          which the Indulgence is attached and to fulfill three conditions:
          sacramental Confession, Eucharistic Communion, and prayer for the
          intentions of the Pope. (The recitation of one Our Father and one Hail
          Mary fully suffices, though we are free to say any other prayer we
          desire.) It is further required that all attachment to sin, even
          venial sin, be absent. If the latter disposition is in any way less
          than complete or if the three prescribed conditions are not fulfilled,
          the Indulgence will be only partial.
        </SectionParagraph>
        <SectionParagraph>
          The three conditions may be fulfilled several days before or several
          days after performing the prescribed work; nevertheless, it is fitting
          that Communion be received and prayer for the Pope’s intentions be
          said the same day the work is performed.
        </SectionParagraph>
        <SectionParagraph>
          A single Confession suffices for gaining several plenary Indulgences.
          However, one must receive Holy Communion and pray for the Pope’s
          intentions for each plenary Indulgence. To be able to gain a daily
          plenary Indulgence, one should go to Confession at least every two
          weeks.
        </SectionParagraph>
        <SectionParagraph>
          Only one plenary Indulgence can be acquired each day, unless a person
          is at the point of death. In that event, even after gaining a plenary
          Indulgence that day, one can gain the plenary Indulgence for the
          moment of death.
        </SectionParagraph>
        <SectionParagraph>
          A partial Indulgence remits only part of the punishment due for sin
          and is now granted without designation of a specific number of “days”
          or “years.” The faithful who, at least with a contrite heart, perform
          an action or recite a prayer to which a partial Indulgence is
          attached, obtain, in addition to the remission of temporal punishment
          acquired by the action itself, an equal remission of punishment
          through the intervention of the Church. The amount remitted depends on
          the person’s fervor, on the greatness of the sacrifice, and on how
          perfectly the act is performed. Any number of partial Indulgences can
          be acquired per day, unless otherwise indicated.
        </SectionParagraph>
        <SectionParagraph>
          A plenary indulgence is granted for reciting five decades of the
          Rosary in a church or public oratory or in a family group, religious
          community or pious association. A partial indulgence is granted in
          other circumstances. The five decades must be recited continuously.
          The vocal recitation must be accompanied by pious meditation on the
          mysteries. In public recitation the mysteries must be announced in the
          manner customary in the place; for private recitation, however, it
          suffices if the vocal recitation is accompanied by meditation on the
          mysteries.
        </SectionParagraph>
      </div>
    </section>
  );
};

export default NewNorms;
