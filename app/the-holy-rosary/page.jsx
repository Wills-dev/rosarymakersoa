import Image from "next/image";

import MainLayout from "../../components/MainLayout";
import Link from "next/link";

const page = () => {
  return (
    <MainLayout>
      {" "}
      <section className="bg-cream py-6 w-full">
        <div className="padding-x w-full space-y-6">
          <div className="section-bg text-primary-brown space-y-4">
            <h3 className="sm:text-lg uppercase font-semibold text-primary-black border-b-1">
              The Holy Rosary
            </h3>
            <p>
              Learn How to Pray the Rosary, the Benefits of the Rosary and How
              to Make the Rosary. The rosary is one of the most cherished
              prayers of our Catholic Church. <br /> Our Mission is to get
              special needs adults employed, to enrich and improve their lives.
              Rosary Makers of America is a labor of love.{" "}
              <Link
                href="/make-a-donation-2"
                className=" font-poppins text-blue-950 hover:underline transition-all duration-300"
              >
                Make a donation
              </Link>
              ,{" "}
              <Link
                href="/come-join-us-2"
                className=" font-poppins text-blue-950 hover:underline transition-all duration-300"
              >
                volunteer
              </Link>{" "}
              and pray for us.
            </p>
            <div className="grid lg:grid-cols-8 md:grid-cols-4 grid-cols-2 gap-10">
              <div className="col-span-2 w-full flex flex-col items-center gap-2">
                <a href="#story">
                  <Image
                    src="/assets/images/The-Story-of-the-Rosary.png"
                    width={140}
                    height={140}
                    alt="news-images"
                    className="w-full h-auto object-cover"
                  />
                </a>
                <p className="text-center font-poppins font-semibold">
                  The Story of the Rosary
                </p>
              </div>
              <div className="col-span-2 w-full flex flex-col items-center gap-2">
                <a
                  href="https://rosarymakersoa.org/wp-content/uploads/2024/12/How-to-Pray-the-Rosary_new.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/assets/images/How-to-Pray-the-Rosary.png"
                    width={140}
                    height={140}
                    alt="news-images"
                    className="w-full h-auto object-cover"
                  />
                </a>
                <p className="text-center font-poppins font-semibold">
                  How to Pray the Rosary
                </p>
              </div>
              <div className="col-span-2 w-full flex flex-col items-center gap-2">
                <a href="#benefits">
                  <Image
                    src="/assets/images/Benefits-of-the-Rosary-2.png"
                    width={140}
                    height={140}
                    alt="news-images"
                    className="w-full h-auto object-cover"
                  />
                </a>
                <p className="text-center font-poppins font-semibold">
                  Benefits of the Rosary
                </p>
              </div>
              <div className="col-span-2 w-full flex flex-col items-center gap-2">
                <a
                  href="https://www.olrm.org/how-to-make-a-rosary/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/assets/images/How-to-Make-a-Rosary.png"
                    width={140}
                    height={140}
                    alt="news-images"
                    className="w-full h-auto object-cover"
                  />
                </a>
                <p className="text-center font-poppins font-semibold">
                  How to Make the Rosary
                </p>
              </div>
            </div>
          </div>
          <div className="section-bg text-primary-brown space-y-4">
            <h3 className="sm:text-lg uppercase font-semibold text-primary-black border-b-1">
              The story of the Rosary
            </h3>
            <div className="flex max-lg:flex-col gap-10">
              <div className="space-y-4 flex-1">
                <h3 className="sm:text-lg font-poppins font-semibold">
                  The History of the Rosary
                </h3>
                <p className="sm:text-lg">Rev Fr. William Saunders</p>
                <div className="w-full">
                  <Image
                    src="/assets/images/RMOA10.jpg"
                    width={140}
                    height={140}
                    alt="news-images"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
              <div className="flex-1 w-full">
                <p>
                  The rosary is one of the most cherished prayers of our
                  Catholic Church. Introduced by the Creed, the Our Father,
                  three Hail Marys and the Doxology (“Glory Be”), and concluded
                  with the Salve Regina, the rosary involves the recitation of
                  five decades consisting of the Our Father, 10 Hail Marys and
                  the Doxology. During this recitation, the individual meditates
                  on the saving mysteries of our Lord’s life and the faithful
                  witness of our Blessed Mother. Journeying through the Joyful,
                  Sorrowful and Glorious mysteries of the rosary, the individual
                  brings to mind our Lord’s incarnation, His passion and death
                  and His resurrection from the dead. In so doing, the rosary
                  assists us in growing in a deeper appreciation of these
                  mysteries, in uniting our life more closely to our Lord and in
                  imploring His graced assistance to live the faith. We also ask
                  for the prayers of our Blessed Mother, who leads all believers
                  to her Son.
                </p>
              </div>
            </div>
            <p>
              The origins of the rosary are “sketchy” at best. The use of
              “prayer beads” and the repeated recitation of prayers to aid in
              meditation stem from the earliest days of the Church and has roots
              in pre-Christian times. Evidence exists from the Middle Ages that
              strings of beads were used to count Our Fathers and Hail Marys.
              Actually, these strings of beads became known as “Paternosters,”
              the Latin for “Our Father.”
            </p>
            <p>
              The structure of the rosary gradually evolved between the 12th and
              15th centuries. Eventually 50 Hail Marys were recited and linked
              with verses of psalms or other phrases evoking the lives of Jesus
              and Mary. During this time, this prayer form became known as the
              rosarium (“rose garden”), actually a common term to designate a
              collection of similar material, such as an anthology of stories on
              the same subject or theme. During the 16th century, the structure
              of the five-decade rosary based on the three sets of mysteries
              prevailed.
            </p>
            <p>
              Tradition does hold that St. Dominic (d. 1221) devised the rosary
              as we know it. Moved by a vision of our Blessed Mother, he
              preached the use of the rosary in his missionary work among the
              Albigensians, who had denied the mystery of Christ. Some scholars
              take exception to St. Dominic’s role in forming the rosary. The
              earliest accounts of his life do not mention it, the Dominican
              constitutions do not link him with it and contemporaneous
              portraits do not include it as a symbol to identify the saint.
            </p>
            <p>
              In 1922, Dom Louis Cougaud stated, “The various elements which
              enter into the composition of that Catholic devotion commonly
              called the rosary are the product of a long and gradual
              development which began before St. Dominic’s time, which continued
              without his having any share in it, and which only attained its
              final shape several centuries after his death.” However, other
              scholars would rebut that St. Dominic not so much “invented” the
              rosary as he preached its use to convert sinners and those who had
              strayed from the faith. Moreover, at least a dozen popes have
              mentioned St. Dominic’s connection with the rosary, sanctioning
              his role as at least a “pious belief.”
            </p>
            <p>
              The rosary gained greater popularity in the 1500s, when Moslem
              Turks were ravaging Eastern Europe. Recall that in 1453,
              Constantinople had fallen to the Moslems, leaving the Balkans and
              Hungary open to conquest. With Moslems raiding even the coast of
              Italy, the control of the Mediterranean was now at stake.
            </p>
            <p>
              In 1571, Pope Pius V organized a fleet under the command of Don
              Juan of Austria the half-brother of King Philip 11 of Spain. While
              preparations were underway, the Holy Father asked all of the
              faithful to say the rosary and implore our Blessed Mother’s
              prayers, under the title Our Lady of Victory, that our Lord would
              grant victory to the Christians. Although the Moslem fleet
              outnumbered that of the Christians in both vessels and sailors,
              the forces were ready to meet in battle. The Christian flagship
              flew a blue banner depicting Christ crucified. On October 7, 1571,
              the Moslems were defeated at the Battle of Lepanto. The following
              year, Pope St. Pius V established the Feast of the Holy Rosary on
              October 7, where the faithful would not only remember this
              victory, but also give thanks to the Lord for all of His benefits
              and remember the powerful intercession of our Blessed Mother.
            </p>
            <p>
              The fact that our Church continues to include the Feast of the
              Holy Rosary on the liturgical calendar testifies to the importance
              and goodness of this form of prayer. Archbishop Fulton Sheen said,
              “The rosary is the book of the blind, where souls see and there
              enact the greatest drama of love the world has ever known; it is
              the book of the simple, which initiates them into mysteries and
              knowledge more satisfying than the education of other men; it is
              the book of the aged, whose eyes close upon the shadow of this
              world, and open on the substance of the next. The power of the
              rosary is beyond description.”
            </p>
          </div>
          <div className="section-bg text-primary-brown space-y-4">
            <h3 className="sm:text-lg uppercase font-semibold text-primary-black border-b-1">
              Benefits of the Rosary
            </h3>
            <div className="flex max-lg:flex-col gap-10">
              <div className="space-y-4 flex-1">
                <h3 className="sm:text-lg font-poppins font-semibold">
                  15 Promises of the Rosary
                </h3>
                <p className="sm:text-lg">
                  (Given to St. Dominic and Blessed Alan de la Roche)
                </p>
                <div className="w-full">
                  <Image
                    src="/assets/images/Holy-Rosary004.png"
                    width={140}
                    height={140}
                    alt="news-images"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
              <div className="flex-1 w-full space-y-4">
                <p>
                  1. Whoever shall faithfully serve me by the recitation of the
                  Rosary, shall receive powerful graces.
                </p>
                <p>
                  2. I promise my special protection and the greatest graces to
                  all those who shall recite the Rosary.
                </p>
                <p>
                  3. The Rosary shall be a powerful armor against hell, it will
                  destroy vice, decrease sin, and defeat heresies
                </p>
                <p>
                  4. It will cause virtue and good works to flourish; it will
                  obtain for souls the abundant mercy of God; it will withdraw
                  the hearts of people from the love of the world and its
                  vanities, and will lift them to the desire of eternal things.
                  Oh, that souls would sanctify themselves by this means.
                </p>
                <p>
                  5. The soul which recommends itself to me by the recitation of
                  the Rosary, shall not perish.
                </p>
                <p>
                  6. Whoever shall recite the Rosary devoutly, applying Himself
                  to the consideration of its Sacred Mysteries shall never be
                  conquered by misfortune. God will not chastise Him in His
                  justice, he shall not perish by an unprovided death; if he be
                  just, he shall remain in the grace of God, and become worthy
                  of eternal life.
                </p>
              </div>
            </div>
            <p>
              7. Whoever shall have a true devotion for the Rosary shall not die
              without the Sacraments of the Church.
            </p>
            <p>
              8. Those who are faithful to recite the Rosary shall have during
              their life and at their death the light of God and the plentitude
              of His graces; at the moment of death they shall participate in
              the merits of the Saints in Paradise.
            </p>
            <p>
              9. I shall deliver from purgatory those who have been devoted to
              the Rosary.
            </p>
            <p>
              10. The faithful children of the Rosary shall merit a high degree
              of glory in Heaven.
            </p>
            <p>
              11. You shall obtain all you ask of me by the recitation of the
              Rosary.
            </p>
            <p>
              12. All those who propagate the Holy Rosary shall be aided by me
              in their necessities.
            </p>
            <p>
              13. I have obtained from my Divine Son that all the advocates of
              the Rosary shall have for intercessors the entire celestial court
              during their life and at the hour of death
            </p>
            <p>
              14. All who recite the Rosary are my children, and brothers and
              sisters of my only Son, Jesus Christ.
            </p>
            <p>15. Devotion of my Rosary is a great sign of predestination.</p>
          </div>
          <div className="section-bg text-primary-brown space-y-4">
            <h3 className="sm:text-lg uppercase font-semibold text-primary-black border-b-1">
              Indulgences for Praying the Rosary.
            </h3>
            <p>
              An Indulgence is the remission before God of the temporal
              punishment due for sins which have already been forgiven as far as
              their guilt is concerned. Indulgences are granted by God through
              the Catholic Church which, as minister of the Redemption,
              dispenses and applies the treasury of the satisfaction won by
              Christ and the Saints.
            </p>
            <p>
              Though the guilt of sin and the eternal punishment it may have
              merited are remitted by sacramental absolution, measurable
              punishment before or after death is still required in order to
              satisfy God’s justice, even for sins already forgiven. To the
              extent we fail to atone sufficiently for our sins during our
              lifetimes on earth, we will suffer for a given “time” in
              Purgatory. An Indulgence cancels or lessens this non-eternal
              punishment.
            </p>
            <p>
              In order to gain an Indulgence, one must be Baptized, not
              excommunicated, and in the state of grace at least at the
              completion of the prescribed work. In order to gain Indulgences,
              one must have at least a general intention of gaining them. If at
              the beginning of the day we make an intention to gain all the
              Indulgences we can that day, we do not have to make this intention
              each time we perform a work to which an Indulgence is attached. An
              Indulgence may be gained for oneself or may be offered for Souls
              in Purgatory, but may not be applied to another living person.
            </p>
            <p>
              A plenary Indulgence remits all the punishment due for sin and
              makes possible immediate entrance into Heaven after death.
            </p>
          </div>
          <div className="section-bg text-primary-brown space-y-4">
            <h3 className="sm:text-lg uppercase font-semibold text-primary-black border-b-1">
              The New Norms
            </h3>
            <p>
              To gain a plenary Indulgence, it is necessary to perform the work
              to which the Indulgence is attached and to fulfill three
              conditions: sacramental Confession, Eucharistic Communion, and
              prayer for the intentions of the Pope. (The recitation of one Our
              Father and one Hail Mary fully suffices, though we are free to say
              any other prayer we desire.) It is further required that all
              attachment to sin, even venial sin, be absent. If the latter
              disposition is in any way less than complete or if the three
              prescribed conditions are not fulfilled, the Indulgence will be
              only partial.
            </p>
            <p>
              The three conditions may be fulfilled several days before or
              several days after performing the prescribed work; nevertheless,
              it is fitting that Communion be received and prayer for the Pope’s
              intentions be said the same day the work is performed.
            </p>
            <p>
              A single Confession suffices for gaining several plenary
              Indulgences. However, one must receive Holy Communion and pray for
              the Pope’s intentions for each plenary Indulgence. To be able to
              gain a daily plenary Indulgence, one should go to Confession at
              least every two weeks.
            </p>
            <p>
              Only one plenary Indulgence can be acquired each day, unless a
              person is at the point of death. In that event, even after gaining
              a plenary Indulgence that day, one can gain the plenary Indulgence
              for the moment of death.
            </p>
            <p>
              A partial Indulgence remits only part of the punishment due for
              sin and is now granted without designation of a specific number of
              “days” or “years.” The faithful who, at least with a contrite
              heart, perform an action or recite a prayer to which a partial
              Indulgence is attached, obtain, in addition to the remission of
              temporal punishment acquired by the action itself, an equal
              remission of punishment through the intervention of the Church.
              The amount remitted depends on the person’s fervor, on the
              greatness of the sacrifice, and on how perfectly the act is
              performed. Any number of partial Indulgences can be acquired per
              day, unless otherwise indicated.
            </p>
            <p>
              A plenary indulgence is granted for reciting five decades of the
              Rosary in a church or public oratory or in a family group,
              religious community or pious association. A partial indulgence is
              granted in other circumstances. The five decades must be recited
              continuously. The vocal recitation must be accompanied by pious
              meditation on the mysteries. In public recitation the mysteries
              must be announced in the manner customary in the place; for
              private recitation, however, it suffices if the vocal recitation
              is accompanied by meditation on the mysteries.
            </p>
          </div>
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
              <p className="md:col-span-1  col-span-2">
                6. The poor find help.
              </p>
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
                10. The dead (the Holy Souls) have their pains eased by
                suffrages.
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
                7. It supplies us with what is needed to pay all our debts to
                God and to our fellow men; and finally, it obtains all kinds of
                graces for us from Almighty God.
              </p>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default page;
