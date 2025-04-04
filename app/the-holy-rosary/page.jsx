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
            <div className="grid lg:grid-cols-8 md:grid-cols-4 grid-cols-2">
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
        </div>
      </section>
    </MainLayout>
  );
};

export default page;
