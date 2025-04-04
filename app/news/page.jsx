import Image from "next/image";

import MainLayout from "../../components/MainLayout";
import Prayer from "../../components/Prayer";
import Link from "next/link";

const page = () => {
  const images = [
    "/assets/images/new1.jpg",
    "/assets/images/news2.jpg",
    "/assets/images/news3.jpg",
    "/assets/images/news4.jpg",
    "/assets/images/news5.jpg",
    "/assets/images/news6.jpg",
  ];
  return (
    <MainLayout>
      {" "}
      <section className="bg-cream py-6 w-full">
        <div className="padding-x w-full space-y-6">
          <div className="section-bg text-primary-brown space-y-4">
            <h3 className="sm:text-lg uppercase font-semibold text-primary-black border-b-1">
              Latest News
            </h3>
            <div className="flex flex-wrap max-sm:flex-col gap-6 text-primary-brown">
              <div className="flex-1 w-full">
                <div className="w-full h-64 bg-no-repeat bg-cover bg-center bg-news-img1" />
                <p className="pt-1">
                  {" "}
                  The General Audience on Wednesdays is an occasion where many
                  believers try to give the Pope a gift. Nicholas Kemdi came
                  from Atlanta, to give Pope Francis a rosary made by his son
                  Dowm.
                </p>
              </div>
              <div className="flex-1 w-full">
                <div className="w-full h-64 bg-no-repeat bg-cover bg-center bg-gallery-img2" />
                <p className="pt-1">
                  Al Santo Padre le llegan regalos de todas partes del mundo. La
                  ocasión para poder entregárselos en persona es la Audiencia
                  General de los miércoles en la plaza de San Pedro. Allí estaba
                  esta semana Nicholas Kemdi Ihenacho con su familia y un
                  rosario para el Papa, pero no uno cualquiera.
                </p>
              </div>
            </div>
          </div>
          <div className="section-bg text-primary-brown space-y-4">
            <h3 className="sm:text-lg uppercase font-semibold text-primary-black border-b-1">
              March 20, 2022: Sharing our mission with St. Marguerite D’Youville
              Parish
            </h3>
            <div className="grid md:grid-cols-6 sm:grid-cols-4 grid-cols-2 gap-6">
              {images?.map((image) => (
                <div className="col-span-2">
                  <div className="w-full" key={image}>
                    <Image
                      src={image}
                      width={140}
                      height={140}
                      alt="news-images"
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <Prayer />
          <div className="section-bg text-primary-brown space-y-4">
            <h3 className="sm:text-lg uppercase font-semibold text-primary-black border-b-1">
              Heroes of the Church and true heroes of the world: Lovers of the
              Rosary
            </h3>
            <div className="grid sm:grid-cols-4 grid-cols-2 gap-6">
              <div className="col-span-2 space-y-3">
                <div className="w-full ">
                  <Image
                    src="/assets/images/3st__josemaria_escriva_rosary156768602457.jpg"
                    width={140}
                    height={140}
                    alt="news-images"
                    className="w-full h-auto object-cover"
                  />
                </div>
                <p className="text-lg font-extrabold text-primary-black">
                  St. Josemaria Escriva
                </p>
                <p className="font-bold">
                  Biography of Saint Josemaria Escriva
                </p>
                <p className="pt-1">
                  A brief biography of the founder of Opus Dei.
                </p>
                <p>
                  Josemaria Escriva was born in Barbastro, Spain on January 9,
                  1902. He was ordained on March 28, 1925. He studied civil law
                  along with his ecclesiastical studies, and in 1927, he moved
                  to Madrid to obtain a doctorate in law. While there, he worked
                  hard with the poor and sick, and also with students, workers,
                  and professionals.
                </p>
                <Link
                  href="/st-josemaria-escriva"
                  className="text-primary-black font-bold underline"
                >
                  Read more
                </Link>
              </div>
              <div className="col-span-2 space-y-3">
                <div className="w-full ">
                  <Image
                    src="/assets/images/pope john paul.jpg"
                    width={140}
                    height={140}
                    alt="news-images"
                    className="w-full h-auto object-cover"
                  />
                </div>
                <p className="text-lg font-extrabold text-primary-black">
                  St. Pope John Paul II
                </p>
                <p className="font-bold">BIOGRAPHICAL PROFILE</p>
                <p className="font-bold">JOHN PAUL II (1920-2005)</p>
                <p>
                  KAROL JOZEF WOJTYLA, elected Pope on 16 October 1978, was born
                  in Wadowice, Poland, on 18 May 1920.
                </p>
                <p>
                  He was the third of three children born to Karol Wojtyla and
                  Emilia Kaczorowska, who died in 1929. His elder brother
                  Edmund, a physician, died in 1932, and his father, Karol, a
                  non-commissioned officer in the army, died in 1941.
                </p>
                <Link
                  href="/st-pope-john-paul-ii"
                  className="text-primary-black font-bold underline"
                >
                  Read more
                </Link>
              </div>
              <div className="col-span-2 space-y-3">
                <div className="w-full ">
                  <Image
                    src="/assets/images/teresa.jpg"
                    width={140}
                    height={140}
                    alt="news-images"
                    className="w-full h-auto object-cover"
                  />
                </div>
                <p className="text-lg font-extrabold text-primary-black">
                  St. Teresa of Calcutta
                </p>
                <p>
                  <span className="italic">
                    “By blood, I am Albanian. By citizenship, an Indian. By
                    faith, I am a Catholic nun. As to my calling, I belong to
                    the world. As to my heart, I belong entirely to the Heart of
                    Jesus.”
                  </span>{" "}
                  Small of stature, rocklike in faith, Mother Teresa of Calcutta
                  was entrusted with the mission of proclaiming God’s thirsting
                  love for humanity, especially for the poorest of the poor.
                  <span className="italic">
                    “God still loves the world and He sends you and me to be His
                    love and His compassion to the poor.”
                  </span>
                </p>
                <Link
                  href="/st-teresa-of-calcutta"
                  className="text-primary-black font-bold underline"
                >
                  Read more
                </Link>
              </div>
              <div className="col-span-2 space-y-3">
                <div className="w-full ">
                  <Image
                    src="/assets/images/pio.jpg"
                    width={140}
                    height={140}
                    alt="news-images"
                    className="w-full h-auto object-cover"
                  />
                </div>
                <p className="text-lg font-extrabold text-primary-black">
                  St. Padre Pio
                </p>
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
                  in the history of the Catholic Church.
                </p>
                <Link
                  href="/st-padre-pio"
                  className="text-primary-black font-bold underline"
                >
                  Read more
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default page;
