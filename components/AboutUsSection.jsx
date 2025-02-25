import Image from "next/image";
import Link from "next/link";

import AboutImage from "../public/assets/images/RMOA-h.png";

const AboutUsSection = () => {
  return (
    <div className="section-bg">
      <h3 className="sm:text-lg uppercase font-semibold text-primary-black border-b-1">
        About Us
      </h3>
      <div className="mt-2 pt-2 flex max-md:flex-col gap-5">
        <div className="max-w-sm w-full">
          <Image
            src={AboutImage}
            alt="about-us"
            placeholder="blur"
            className="w-full h-auto"
          />
        </div>
        <div className="flex flex-col gap-4">
          <p className=" text-primary-brown">
            <span className="font-bold">Our purpose</span> is to make rosaries
            and to strive to pray.
          </p>
          <p className=" text-primary-brown">
            <span className="font-bold">Our Mission</span> is to get our special
            needs adults (adults with disabilities) gainfully employed and
            engaged. To enrich and improve their lives so they can enjoy the
            dignity and the beauty of honest human labor. To teach them to do
            ‘small’ things and ‘big’ things very well with love for the Greater
            good.
          </p>
          <p className=" text-primary-brown">
            <span className="font-bold">Our Vision</span> is a world where all
            humanity is gainfully employed in love and service to one another
            and to God, the end of all human endeavors and labor.
          </p>
          <Link
            href="/about-us"
            className="px-5 py-2 border-1 border-primary-brown hover:border-primary-black hover:text-primary-black text-primary-brown w-fit transition-all duration-300"
          >
            Learn more
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutUsSection;
