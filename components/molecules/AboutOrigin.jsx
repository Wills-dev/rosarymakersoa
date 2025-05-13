import PageTitle from "../atoms/PageTitle";
import SectionParagraph from "../atoms/SectionParagraph";

const AboutOrigin = () => {
  return (
    <section className="padding-y padding-ctn ">
      <PageTitle title="About Us" />
      <div className="max-w-4xl pt-10 space-y-4">
        <SectionParagraph className="sm:text-xl  text-lg ">
          Rosary Makers of America is a 501(c)(3) nonprofit organization founded
          in the United States of America. More than thirty-five percent of our
          healthy special needs people who graduate out of the special need High
          school education in America spend much time at home unemployed and
          unengaged. They are not in college or university, not in vocational
          training and have no job or employment. These dire statistics may be
          the same or worse in various parts of the world.
        </SectionParagraph>
        <SectionParagraph className="sm:text-xl  text-lg font-light">
          It is this stark and sad reality that is the motive force or impetus
          for the founding of Rosary Makers of America, Inc.
        </SectionParagraph>
        <SectionParagraph className="sm:text-xl  text-lg font-light">
          The purpose and goal of Rosary Makers of America is to make or craft
          the catholic rosaries ( a special string of prayer beads for catholic
          Christians ) of the highest quality and in so doing be men and women
          of prayer. Prayer, which is the singular sustaining force of our human
          existence without which humanity and human existence would have been
          reduced to dust and ashes.
        </SectionParagraph>
        <SectionParagraph className="sm:text-xl  text-lg font-light">
          Our Mission is to get our special needs adults gainfully employed. To
          enrich and improve their lives so they can enjoy the dignity and the
          beauty of honest human labor. To teach them to do ‘small’ things and
          ‘big’ things very well with love for the Greater good, that is with a
          supernatural outlook.
        </SectionParagraph>
        <SectionParagraph className="sm:text-xl  text-lg font-light">
          Our Vision and our prayer is that Rosary Makers of America contributes
          its quota in building a world where all humanity is gainfully employed
          in love and service to one another and to God, the end of all human
          endeavors and labor.
        </SectionParagraph>
        <SectionParagraph className="sm:text-xl  text-lg font-light">
          We invite you to come and be part of the Rosary Makers of America,
          Inc. family, in one way or the other. Give us a call, come work or
          volunteer for us, make a financial donation and above all pray for us.
        </SectionParagraph>
      </div>
    </section>
  );
};

export default AboutOrigin;
