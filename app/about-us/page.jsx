import Footer from "./../..//components/Footer";
import Navbar from "./../../components/Navbar";
import Image from "next/image";

const AboutUss = () => {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      <div className="absolute -left-20 top-[16%] w-44 h-40">
        <Image
          src="/assets/images/Group8.png"
          height={70}
          width={120}
          alt="dots"
          className="w-full h-full"
        />
      </div>
      <div className="absolute -right-20 top-[16%] w-44 h-40">
        <Image
          src="/assets/images/Group8.png"
          height={70}
          width={120}
          alt="dots"
          className="w-full h-full"
        />
      </div>
      <section className="w-full min-h-screen pt-32">
        <div className="flex justify-center py-28">
          <h1 className="text-[#002d5b] font-bold sm:text-6xl text-4xl font-mulish">
            About US
          </h1>
        </div>
        <div className="container mx-auto px-4 pb-28">
          <div className="flex gap-14 max-md:flex-col">
            <div className="flex-1 flex flex-col gap-4 text-[#64676c] sm:text-lg font-light">
              <p className="leading-8">
                Rosary Makers of America is a 501(c)(3) nonprofit organization
                founded in the United States of America. More than thirty-five
                percent of our healthy special needs people who graduate out of
                the special need High school education in America spend much
                time at home unemployed and unengaged. They are not in college
                or university, not in vocational training and have no job or
                employment. These dire statistics may be the same or worse in
                various parts of the world.
              </p>
              <p className="leading-8">
                It is this stark and sad reality that is the motive force or
                impetus for the founding of Rosary Makers of America, Inc.
              </p>
              <p className="leading-8">
                The purpose and goal of Rosary Makers of America is to make or
                craft the catholic rosaries ( a special string of prayer beads
                for catholic Christians ) of the highest quality and in so doing
                be men and women of prayer. Prayer, which is the singular
                sustaining force of our human existence without which humanity
                and human existence would have been reduced to dust and ashes.
              </p>
              <p className="leading-8">
                Our Mission is to get our special needs adults gainfully
                employed. To enrich and improve their lives so they can enjoy
                the dignity and the beauty of honest human labor. To teach them
                to do ‘small’ things and ‘big’ things very well with love for
                the Greater good, that is with a supernatural outlook.
              </p>
            </div>
            <div className="flex-1">
              <Image
                src="/assets/images/RMOA-Fist-Bump.jpg"
                height={270}
                width={120}
                alt="dots"
                className="w-full object-cover"
              />
            </div>
          </div>
          <div className="flex md:items-center gap-14 max-md:flex-col-reverse pt-10">
            {" "}
            <div className="flex-1">
              <Image
                src="/assets/images/rmoa-22.jpg"
                height={270}
                width={120}
                alt="dots"
                className="w-full object-cover"
              />
            </div>
            <div className="flex-1 flex flex-col gap-4 text-[#64676c] sm:text-lg font-light">
              <p className="leading-8">
                Our Vision and our prayer is that Rosary Makers of America
                contributes its quota in building a world where all humanity is
                gainfully employed in love and service to one another and to
                God, the end of all human endeavors and labor.
              </p>
              <p className="leading-8">
                We invite you to come and be part of the Rosary Makers of
                America, Inc. family, in one way or the other. Give us a call,
                come work or volunteer for us, make a financial donation and
                above all pray for us.
              </p>
            </div>
          </div>
        </div>
        <div className="bg-[#002d5b]">
          <div className="container mx-auto py-28 px-4">
            <div className="flex justify-center items-center gap-14 flex-wrap">
              <div className="w-40 h-40 border-2 border-[#fcb900] rounded-full text-white flex justify-center items-center">
                <p className="text-center sm:text-xl text-lg font-bold">
                  Hard Work
                </p>
              </div>
              <div className="w-40 h-40 border-2 border-[#fcb900] rounded-full text-white flex justify-center items-center">
                <p className="text-center sm:text-xl text-lg font-bold">
                  Pure Love
                </p>
              </div>
              <div className="w-40 h-40 border-2 border-[#fcb900] rounded-full text-white flex justify-center items-center">
                <p className="text-center sm:text-xl text-lg font-bold">
                  Smart Ideas
                </p>
              </div>
              <div className="w-40 h-40 border-2 border-[#fcb900] rounded-full text-white flex justify-center items-center">
                <p className="text-center sm:text-xl text-lg font-bold">
                  Good <br />
                  Decisions
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="py-28 flex flex-col items-center justify-center gap-12">
          <h2 className="sm:text-5xl text-2xl py-6 text-[#002d5b] font-bold max-w-xl sm:leading-normal capitalize">
            Board of Directors
          </h2>
          <ul className="flex gap-4 flex-col">
            <li className="font-light text-lg text-[#64676c] text-center">
              Nicholas Kemdi Ihenacho, MD, President & Chairman
            </li>
            <li className="font-light text-lg text-[#64676c] text-center">
              Bridget I. Ihenacho, Pharm D, Financial Secretary
            </li>
            <li className="font-light text-lg text-[#64676c] text-center">
              Reverend Dr. Paschal Amagba, CMF, Spiritual Advisor
            </li>
            <li className="font-light text-lg text-[#64676c] text-center">
              Ifeanyi Anikpe, PharmD
            </li>
            <li className="font-light text-lg text-[#64676c] text-center">
              Jessie Moreau, M. Ed, Public Activities Advisor
            </li>
            <li className="font-light text-lg text-[#64676c] text-center">
              David Leta, JD, Secretary
            </li>
            <li className="font-light text-lg text-[#64676c] text-center">
              Leo Ovaje, MD, Treasurer
            </li>
          </ul>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default AboutUss;
