import Image from "next/image";

import MainLayout from "../../components/MainLayout";

const page = () => {
  return (
    <MainLayout>
      {" "}
      <section className="bg-cream py-6 w-full">
        <div className="padding-x w-full space-y-6">
          <div className="section-bg text-primary-brown space-y-4">
            <h3 className="sm:text-lg uppercase font-semibold text-primary-black border-b-1">
              St. Padre Pio
            </h3>

            <div className="flex flex-wrap max-sm:flex-col gap-6">
              <div className="sm:min-w-96 flex-1 w-full text-primary-brown space-y-4">
                <p>
                  Padre Pio was born on May 25, 1887 in Pietrelcina, southern
                  Italy. He was tutored privately until his entry to the
                  novitiate of the Capuchin Friars at the age of 15. Of feeble
                  health but strong will, with the help of grace, he completed
                  the required studies and was ordained a priest in 1910.
                </p>
                <p>
                  On September 20, 1918 the five wounds of our Lord’s passion
                  appeared on his body, making him the first stigmatized priest
                  in the history of the Catholic Church. Countless persons were
                  attracted to his confessional and many more received his
                  saintly counsel and spiritual guidance through correspondence.
                </p>
                <p>
                  His whole life was marked by long hours of prayer and
                  continual austerity. His letters to his spiritual directors
                  reveal the ineffable suffering, physical and spiritual, which
                  accompanied him all through his life. They also reveal his
                  deep union with God, his burning love for the Blessed
                  Eucharist and Our Blessed Lady.
                </p>
              </div>
              <div className="max-w-md w-full">
                <Image
                  src="/assets/images/pio.jpg"
                  height={270}
                  width={120}
                  alt="dots"
                  className="w-full object-cover"
                />
              </div>
            </div>

            <p>
              On January 9, 1940, Padre Pio announced his grandiose plans to
              develop a Home for the Relief of Suffering (the Casa Sollievo
              della Sofferenza). The Casa opened its doors on May 5, 1956 as a
              300 bed facility, built on the small, sincere and spontaneous
              donations and prayers of his followers. He also developed an
              international network of prayer groups for the support of the Casa
              and its ministry that continues to live on and grow today.
            </p>
            <p>
              Padre Pio considered the Casa Sollievo Della Sofferenza (Casa) his
              “Work”, inspired and blessed by God, to be a haven of relief from
              suffering for all of God’s children in pain in body or soul. It is
              a model community of Catholic Christian health delivery, and has
              grown into a regional referral center of international renown.
              Today, with over 1,000 beds and services comparable to most
              academic research centers of excellence, the Casa is thriving by
              God’s graces in one of the most remote, desolate and poorest areas
              of Italy…atop Mount Gargano, four hours from Rome.
            </p>
            <p>
              Worn out by over half a century of intense suffering and constant
              apostolic activity in San Giovanni Rotondo, Padre Pio was called
              to his heavenly reward on September 23, 1968. After a public
              funeral, which attracted over 100,000 mourners, his body was
              entombed in the crypt of Our Lady of Grace Church. Increasing
              numbers flock to his tomb from all parts of the world and many
              testify to spiritual and temporal graces received.
            </p>
            <p>
              On the 16th of February 1973, the Archbishop of Manfredonia, Msgr.
              Valentino Vailati, consigned the documentation to the Sacred
              Congregation of the Causes of Saints so as to obtain the “nihil
              obstat” for the beginning of the process of his Beatification.
            </p>
            <p>
              On December 18, 1997, by the reading of the decree on the herocity
              of virtues, the Holy Father John Paul II declared Padre Pio
              “Venerable.”, and on June 16, 2002, over 500,000 Padre Pio
              devotees gathered in Rome to witness Pope John Paul II proclaim
              Padre Pio, “Saint Pio of Pietrelcina”
            </p>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default page;
