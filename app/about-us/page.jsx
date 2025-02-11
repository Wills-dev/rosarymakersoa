import Footer from "./../..//components/Footer";
import Navbar from "./../../components/Navbar";
import Image from "next/image";

const AboutUss = () => {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      <div className="absolute -left-20 top-[16%] w-44 h-40 max-sm:hidden">
        <Image
          src="/assets/images/Group8.png"
          height={70}
          width={120}
          alt="dots"
          className="w-full h-full"
        />
      </div>
      <div className="absolute -right-20 top-[16%] w-44 h-40 max-sm:hidden">
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
        <div className="py-28 flex flex-col items-center justify-center gap-12 px-4">
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
        <div className="bg-[#f8fcff]">
          <div className="container mx-auto px-4 py-28">
            <h2 className="sm:text-5xl text-2xl pb-6 text-[#002d5b] font-bold max-w-xl sm:leading-normal capitalize">
              Our Story
            </h2>
            <h6 className="font-semibold text-primary-color capitalize text-lg">
              Introduction:
            </h6>
            <div className="flex-1 flex flex-col gap-4 text-[#64676c] sm:text-lg font-light">
              <p className="leading-8">
                At the beginning, our story was not added to the website because
                the founder did not want to make the organization and its story
                about himself and his family but rather about the bigger story
                that Rosary Makers of America stand for which is to give our
                special needs young adult a special place and a center of
                excellence where they can come to be gainfully employed and
                engaged in the art of making beautiful rosaries and in so doing
                enjoy the pride, the joy and the dignity of honest human labor.
              </p>
              <p className="leading-8">
                When I insisted and reassured him that the story behind the
                formation of our organization, Rosary Makers of America, would
                not be a distraction, but an asset and that people truly wanted
                to know how Rosary Makers of America came to be, he penned down
                the story that would unfold hereunder which I have captioned
                “The Story behind Our Story”.
              </p>
              <p className="leading-8">~Cynthia Okoro, Administator.</p>
              <h2 className="sm:text-5xl text-2xl py-6 text-[#002d5b] font-bold sm:leading-normal capitalize">
                The Story Behind Our Story
              </h2>
              <h6 className="font-semibold text-primary-color capitalize text-lg">
                The Inspiration:
              </h6>
              <div className="flex-1 flex flex-col gap-4 text-[#64676c] sm:text-lg font-light">
                <p className="leading-8">
                  The birth of our most beloved son Ikenna Michael Ihenacho was
                  our inspiration for the founding of Rosary Makers of America.
                  It was 1996 and I was a pursuing my subspecialty training in
                  nephrology (the study and treatment of kidney diseases) in the
                  beautiful and picturesque town of Albuquerque New Mexico and
                  my wife was working as a staff pharmacist in a local mail
                  order pharmacy when our fifth child, Ikenna was conceived. It
                  was our fourth and last pregnancy. At the third, we were
                  blessed with a pair of twins. His four siblings were healthy
                  and their pregnancies were uneventful and routine.
                </p>
              </div>
              <h6 className="font-semibold text-primary-color capitalize text-lg">
                A Routine Prenatal Visit and An Unexpected Intrauterine
                Diagnosis:
              </h6>
              <div className="flex-1 flex flex-col gap-4 text-[#64676c] sm:text-lg font-light">
                <p className="leading-8">
                  My wife had gone for one of her routine prenatal visits with
                  her obstetrician and I had gone off to my job as a
                  subspecialist doctor in training. On this visit she was to
                  undergo a rather routine test, called amniocentesis (taking a
                  sample of the baby fluid or amniotic fluid) to check in the
                  laboratory on the health of the baby in the womb. Having had
                  three previous pregnancies with four to kids to show for them,
                  we were not in any way concerned about the test or its outcome
                  until the obstetrician came back to pronounce or announce the
                  result of the test. “Ma’am”, he began rather tentatively,
                  “this looks like trisomy 23 (a medical jargon for Down’s
                  syndrome) but just to be 100% certain, we would send it out
                  for a confirmatory test. Should the confirmatory test result
                  come back positive, would you want to terminate the
                  pregnancy”? He inquired. To this question my wife calmly and
                  definitively told him, No. She further clarified to her
                  obstetrician that pregnancy termination was simply not an
                  option.
                </p>
                <p className="leading-8">
                  Our after-dinner conversations that night was very somber and
                  sobering, as my wife recounted to me how her day had gone and
                  all that transpired at the obstetrician’s office. I commended
                  her for her response and told her that I loved more than ever
                  and that her response, that pregnancy termination was out of
                  the question, was my response too. So, we waited for the
                  confirmatory test report and we prayed and prayed but the
                  confirmatory test report came back confirming the preliminary
                  report as positive. For the remaining period of the pregnancy
                  we continued to pray for an intrauterine healing or miracle
                  for our son.
                </p>
              </div>
              <h6 className="font-semibold text-primary-color capitalize text-lg">
                A Valentine Baby, February 12, 1997:
              </h6>
              <div className="flex-1 flex flex-col gap-4 text-[#64676c] sm:text-lg font-light">
                <p className="leading-8">
                  On February 12, 1997, our beautiful son Ikenna Micheal
                  Ihenacho was born and I shade tears of joy when I heard his
                  loud cry and held him close to my heart in the delivery room.
                  My wife and I were full of joy and gratitude to God for his
                  precious life and we wondered how his life would evolve.
                  Trusting in our most holy, all loving, all knowing and
                  all-powerful Father in Heaven, we return to life as usual and
                  back to the “playground”, if you will, like little kids,
                  handing over to the Father all that troubled us.
                </p>
              </div>
              <h6 className="font-semibold text-primary-color capitalize text-lg">
                The brave infant:
              </h6>
              <div className="flex-1 flex flex-col gap-4 text-[#64676c] sm:text-lg font-light">
                <p className="leading-8">
                  When our son Ikenna was barely one year old he underwent and
                  open-heart surgery to correct some heart condition that was
                  common in children with Down’s syndrome. The surgery went very
                  well. The whole family, siblings, parents and grandparents had
                  accompanied him to this surgery. I still remember this trip to
                  the tertiary hospital where the surgery was performed as if it
                  was yesterday. Following the surgery, he had remained in very
                  good health and his life along with his older siblings had
                  settled into the daily routines of school, church, music
                  lessons, sports and other extracurricular events and
                  activities.
                </p>
              </div>
              <div className="flex-1 flex flex-col gap-4 text-[#64676c] sm:text-lg font-light">
                <p>What would the child do when he grows up?</p>
                <p className="leading-8">
                  Like all parents we wondered what Ikenna would do when he
                  grows up. It was about his ten birthday that we began to
                  ponder what he would do when he grows up. We were active in
                  our Corpus Christi Catholic Church rosary apostolate, and we
                  did meet to pray the rosary after the weekday Masses and
                  before the 8 o’clock Sunday Masses. We published a leaflet to
                  teach people how to pray the rosary and started a small group
                  to learn the art of rosary making. This rosary making group
                  met once a week and my wife and I went once a week with our
                  son Ikenna to learn how to make rosary. Our rosary group did
                  not last long as people moved on to other things and we took
                  our newly acquired rosary making skills home with us and
                  continued to make rosaries at home with Ikenna.
                </p>
              </div>
              <div className="flex-1 flex flex-col gap-4 text-[#64676c] sm:text-lg font-light">
                <p className="leading-8">
                  Making rosaries was great fun and we all enjoyed the art. Our
                  son Ikenna would work patiently and diligently at stringing
                  the rosary beads and would beam with great joy and pride each
                  time he completes a new rosary. Thus, the Rosary Makers of
                  America, Inc. a center of rosary making excellence, was born
                  to serve all special need young adults (ie young adults with
                  developmental disability).
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default AboutUss;
