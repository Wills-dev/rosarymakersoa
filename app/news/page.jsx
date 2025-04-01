import Image from "next/image";

import MainLayout from "../../components/MainLayout";
import Prayer from "../../components/Prayer";

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
        </div>
      </section>
    </MainLayout>
  );
};

export default page;
