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
              St. Josemaria Escriva
            </h3>

            <div className="flex flex-wrap max-sm:flex-col gap-6">
              <div className="sm:min-w-96 flex-1 w-full text-primary-brown space-y-4">
                <p className=" font-poppins font-bold">
                  Biography of Saint Josemaria Escriva
                </p>
                <p>A brief biography of the founder of Opus Dei.</p>
                <p>
                  Josemaria Escriva was born in Barbastro, Spain on January 9,
                  1902. He was ordained on March 28, 1925. He studied civil law
                  along with his ecclesiastical studies, and in 1927, he moved
                  to Madrid to obtain a doctorate in law. While there, he worked
                  hard with the poor and sick, and also with students, workers,
                  and professionals.
                </p>
                <p>
                  On October 2, 1928, he saw by divine inspiration, as the
                  Pope’s Apostolic Constitution Ut Sit affirmed, that God was
                  asking him to spread the universal call to holiness, and that
                  a new path would be opened up within the Church – Opus Dei –
                  to spread this call throughout the world. History has borne
                  out this vision: there are now around 90,000 people in Opus
                  Dei and his spiritual message has reached millions.
                </p>
                <p>
                  His apostolic work was not limited to Opus Dei, however. He
                  helped numerous people discern vocations to the priesthood and
                  religious life, both active and contemplative. In 1943, he
                  founded the Priestly Society of the Holy Cross, an association
                  inseparably united to Opus Dei, to which belong thousands of
                  diocesan priests around the world. And his Christian teachings
                  on marriage have been especially influential, with countless
                  people putting them into practice in their lives.
                </p>
              </div>
              <div className="max-w-sm w-full">
                <Image
                  src="/assets/images/3st__josemaria_escriva_rosary156768602457.jpg"
                  height={270}
                  width={120}
                  alt="dots"
                  className="w-full object-cover"
                />
              </div>
            </div>

            <p>
              Escriva was always a proponent of understanding and dialogue, and
              in 1950 he won the Holy See’s approval to allow Opus Dei to
              appoint Cooperators, who could be Catholics, non-Catholic
              Christians or even non-believers.
            </p>
            <p>
              Inspired by Escriva’s teaching and his promotion of the apostolic
              and social responsibility of Christians, the members and
              Cooperators of Opus Dei have started hundreds of evangelical works
              and social initiatives all over the world, especially among the
              poor and disadvantaged.
            </p>
            <p>
              Willing to innovate, but always faithful to the Magisterium of the
              Church, Escriva was described by Pope John Paul II as a precursor
              of the Second Vatican Council. He anticipated by thirty years many
              of the teachings that, after the great ecclesial assembly, became
              the patrimony of the whole People of God.
            </p>
            <p>
              He is the author of books of spirituality which are read around
              the world. His best-known book is The Way, which has sold nearly
              four million copies in 43 languages.
            </p>
            <p>
              Escriva died in Rome on June 26, 1975. He was beatified on May 17,
              1992, in St. Peter’s Square. He was canonized by John Paul II in
              the same place on October 6, 2002, before a crowd of 350,000.
            </p>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default page;
