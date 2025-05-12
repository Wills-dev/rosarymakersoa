import SectionTitle from "../atoms/SectionTitle";
import SectionSubTitle from "../atoms/SectionSubTitle";
import CustomButton from "../atoms/CustomButton";

const OurArticle = () => {
  return (
    <section className="padding-y padding-ctn">
      {" "}
      <div className="flex md:items-center max-md:flex-col">
        <div className="flex-1"></div>
        <div className="max-w-2xl w-full space-y-4">
          <SectionTitle title="Art, Prayer & Companionship Goals of Rosary Makers" />
          <SectionSubTitle text="By ANDREW NELSON, Staff Writer|Published February 3, 2022" />
          <div className="space-y-4 sm:text-lg pt-6">
            <p>
              STONE MOUNTAIN–Bringing faith into the world of the special needs
              disabilities community, Nicholas Ihenacho is a founder of Rosary
              Makers of America that offers a special focus on art, prayer and
              companionship.
            </p>
            <p>
              From working with his son, Ikenna, who has Down syndrome, Ihenacho
              formed this nonprofit for others to express themselves by creating
              prayer beads. With the diverse range of guests and their families,
              the organization hopes to share their handiwork with area parishes
              and believers.
            </p>
            <div className="">
              <CustomButton
                text="Read full article"
                href="https://georgiabulletin.org/news/2022/02/art-prayer-and-companionship-goals-of-rosary-makers/"
                externalLink
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurArticle;
