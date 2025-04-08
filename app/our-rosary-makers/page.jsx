import Link from "next/link";
import MainLayout from "../../components/MainLayout";
import Image from "next/image";

import { rosaries } from "../../constants";

const page = () => {
  return (
    <MainLayout>
      {" "}
      <section className="bg-cream py-6 w-full">
        <div className="padding-x w-full space-y-6">
          <div className="section-bg text-primary-brown space-y-4">
            <h3 className="sm:text-lg uppercase font-semibold text-primary-black border-b-1">
              Our Rosary Makers
            </h3>
            <p>
              Rosary making is a joyful labor of love. Please assist us. Make a{" "}
              <Link href="/make-a-donation-2" className="text-blue-800">
                donation
              </Link>
              ,{" "}
              <Link href="/come-join-us-2" className="text-blue-800">
                {" "}
                volunteer
              </Link>{" "}
              and pray for us.
            </p>
            <div className="flex flex-wrap gap-6">
              <div className="min-w-64 flex-1">
                <Image
                  src="/assets/images/RMOA.jpg"
                  width={140}
                  height={140}
                  alt="news-images"
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="min-w-64 flex-1">
                <Image
                  src="/assets/images/rmoa1-2.jpg"
                  width={140}
                  height={140}
                  alt="news-images"
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="min-w-64 flex-1">
                <Image
                  src="/assets/images/Jonathan-Doe.jpg"
                  width={140}
                  height={140}
                  alt="news-images"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
          <div className="section-bg text-primary-brown space-y-4">
            <h3 className="sm:text-lg uppercase font-semibold text-primary-black border-b-1">
              Samples of Our Work
            </h3>
            <div className="flex flex-wrap gap-2">
              {rosaries.map((rosary, index) => (
                <div className="min-w-64 flex-1" key={index}>
                  <Image
                    src={rosary}
                    width={140}
                    height={140}
                    alt="news-images"
                    className="w-full h-auto object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default page;
