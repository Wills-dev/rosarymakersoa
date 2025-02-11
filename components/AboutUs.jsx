import Image from "next/image";
import Link from "next/link";

const AboutUs = () => {
  return (
    <section className="min-h-screen w-full">
      <div className="container mx-auto px-4 py-10 h-full w-full">
        <div className="flex justify-center items-center min-h-screen">
          <div className="grid grid-cols-6 gap-12">
            <div className="md:col-span-3 col-span-6">
              <h6 className="font-semibold text-primary-color capitalize text-lg">
                About our foundation
              </h6>
              <h2 className="sm:text-5xl text-2xl py-6 text-[#002d5b] font-bold max-w-xl sm:leading-normal capitalize">
                Work with Purpose, Serve with Love.
              </h2>
              <div className="flex flex-col gap-6">
                <p className="text-[#64676c]">
                  <span className="font-bold">Our Purpose</span> is to make
                  rosaries and to strive to pray.
                </p>
                <p className="text-[#64676c]">
                  <span className="font-bold">Our Mission </span>
                  is to get our special needs adults (adults with disabilities)
                  gainfully employed and engaged. To enrich and improve their
                  lives so they can enjoy the dignity and the beauty of honest
                  human labor. To teach them to do ‘small’ things and ‘big’
                  things very well with love for the Greater good.
                </p>
                <p className="text-[#64676c]">
                  <span className="font-bold">Our Vision </span>
                  is a world where all humanity is gainfully employed in love
                  and service to one another and to God, the end of all human
                  endeavors and labor.
                </p>
                <Link
                  href="/about-us"
                  className="bg-primary-color py-3 px-8 text-white hover:bg-blue-900  transition-all duration-300 max-w-fit"
                >
                  Learn More
                </Link>
              </div>
            </div>{" "}
            <div className="md:col-span-3 col-span-6 flex items-center">
              <div className="w-full md:h-full h-96 bg-no-repeat bg-cover bg-center bg-about-us" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
