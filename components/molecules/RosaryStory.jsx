import Image from "next/image";

import bgImg from "/public/assets/images/animatedBg.jpg";

import SectionTitle from "../atoms/SectionTitle";
import SectionSubTitle from "../atoms/SectionSubTitle";
import SectionParagraph from "../atoms/SectionParagraph";
import AnimatedImage from "./AnimatedImage";

const RosaryStory = () => {
  return (
    <section className="padding-y" id="story">
      <div className="padding-ctn">
        <div className="space-y-4">
          <SectionTitle title="The story of the Rosary" />
          <SectionSubTitle text="The History of the Rosary" />
          <div className="flex max-lg:flex-col gap-10">
            <div className="space-y-2 flex-1">
              <div className="w-full">
                <Image
                  src="/assets/images/RMOA10.jpg"
                  width={140}
                  height={140}
                  alt="news-images"
                  className="w-full h-auto object-cover"
                />
              </div>
              <SectionParagraph className="sm:text-lg">
                Rev Fr. William Saunders
              </SectionParagraph>
            </div>
            <div className="flex-1 w-full">
              <SectionParagraph>
                The rosary is one of the most cherished prayers of our Catholic
                Church. Introduced by the Creed, the Our Father, three Hail
                Marys and the Doxology (“Glory Be”), and concluded with the
                Salve Regina, the rosary involves the recitation of five decades
                consisting of the Our Father, 10 Hail Marys and the Doxology.
                During this recitation, the individual meditates on the saving
                mysteries of our Lord’s life and the faithful witness of our
                Blessed Mother. Journeying through the Joyful, Sorrowful and
                Glorious mysteries of the rosary, the individual brings to mind
                our Lord’s incarnation, His passion and death and His
                resurrection from the dead. In so doing, the rosary assists us
                in growing in a deeper appreciation of these mysteries, in
                uniting our life more closely to our Lord and in imploring His
                graced assistance to live the faith. We also ask for the prayers
                of our Blessed Mother, who leads all believers to her Son.
              </SectionParagraph>
            </div>
          </div>
          <div className="space-y-4 max-w-4xl pt-10">
            <SectionParagraph className="">
              The origins of the rosary are “sketchy” at best. The use of
              “prayer beads” and the repeated recitation of prayers to aid in
              meditation stem from the earliest days of the Church and has roots
              in pre-Christian times. Evidence exists from the Middle Ages that
              strings of beads were used to count Our Fathers and Hail Marys.
              Actually, these strings of beads became known as “Paternosters,”
              the Latin for “Our Father.”
            </SectionParagraph>
            <SectionParagraph>
              The structure of the rosary gradually evolved between the 12th and
              15th centuries. Eventually 50 Hail Marys were recited and linked
              with verses of psalms or other phrases evoking the lives of Jesus
              and Mary. During this time, this prayer form became known as the
              rosarium (“rose garden”), actually a common term to designate a
              collection of similar material, such as an anthology of stories on
              the same subject or theme. During the 16th century, the structure
              of the five-decade rosary based on the three sets of mysteries
              prevailed.
            </SectionParagraph>
            <SectionParagraph>
              Tradition does hold that St. Dominic (d. 1221) devised the rosary
              as we know it. Moved by a vision of our Blessed Mother, he
              preached the use of the rosary in his missionary work among the
              Albigensians, who had denied the mystery of Christ. Some scholars
              take exception to St. Dominic’s role in forming the rosary. The
              earliest accounts of his life do not mention it, the Dominican
              constitutions do not link him with it and contemporaneous
              portraits do not include it as a symbol to identify the saint.
            </SectionParagraph>
          </div>
        </div>
      </div>
      <AnimatedImage img={bgImg} />
      <div className="padding-y padding-ctn">
        <div className="space-y-4 max-w-4xl pt-10">
          <SectionParagraph className="">
            In 1922, Dom Louis Cougaud stated, “The various elements which enter
            into the composition of that Catholic devotion commonly called the
            rosary are the product of a long and gradual development which began
            before St. Dominic’s time, which continued without his having any
            share in it, and which only attained its final shape several
            centuries after his death.” However, other scholars would rebut that
            St. Dominic not so much “invented” the rosary as he preached its use
            to convert sinners and those who had strayed from the faith.
            Moreover, at least a dozen popes have mentioned St. Dominic’s
            connection with the rosary, sanctioning his role as at least a
            “pious belief.”
          </SectionParagraph>
          <SectionParagraph>
            The rosary gained greater popularity in the 1500s, when Moslem Turks
            were ravaging Eastern Europe. Recall that in 1453, Constantinople
            had fallen to the Moslems, leaving the Balkans and Hungary open to
            conquest. With Moslems raiding even the coast of Italy, the control
            of the Mediterranean was now at stake.
          </SectionParagraph>
          <SectionParagraph>
            In 1571, Pope Pius V organized a fleet under the command of Don Juan
            of Austria the half-brother of King Philip 11 of Spain. While
            preparations were underway, the Holy Father asked all of the
            faithful to say the rosary and implore our Blessed Mother’s prayers,
            under the title Our Lady of Victory, that our Lord would grant
            victory to the Christians. Although the Moslem fleet outnumbered
            that of the Christians in both vessels and sailors, the forces were
            ready to meet in battle. The Christian flagship flew a blue banner
            depicting Christ crucified. On October 7, 1571, the Moslems were
            defeated at the Battle of Lepanto. The following year, Pope St. Pius
            V established the Feast of the Holy Rosary on October 7, where the
            faithful would not only remember this victory, but also give thanks
            to the Lord for all of His benefits and remember the powerful
            intercession of our Blessed Mother.
          </SectionParagraph>
          <SectionParagraph>
            The fact that our Church continues to include the Feast of the Holy
            Rosary on the liturgical calendar testifies to the importance and
            goodness of this form of prayer. Archbishop Fulton Sheen said, “The
            rosary is the book of the blind, where souls see and there enact the
            greatest drama of love the world has ever known; it is the book of
            the simple, which initiates them into mysteries and knowledge more
            satisfying than the education of other men; it is the book of the
            aged, whose eyes close upon the shadow of this world, and open on
            the substance of the next. The power of the rosary is beyond
            description.”
          </SectionParagraph>
        </div>
      </div>
    </section>
  );
};

export default RosaryStory;
