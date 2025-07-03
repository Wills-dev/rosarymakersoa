import Image from "next/image";

import SectionParagraph from "../atoms/SectionParagraph";

const SectionsOfHolyRosary = () => {
  return (
    <section className="padding-y padding-ctn bg-gray-100">
      <div className="grid lg:grid-cols-8 md:grid-cols-4 grid-cols-2 gap-10">
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
          <SectionParagraph className="sm:text-xl text-lg ">
            The Story of the Rosary
          </SectionParagraph>
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
          <SectionParagraph className="sm:text-xl text-lg ">
            How to Pray the Rosary
          </SectionParagraph>
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
          <SectionParagraph className="sm:text-xl text-lg ">
            Benefits of the Rosary
          </SectionParagraph>
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
          <SectionParagraph className="sm:text-xl text-lg ">
            How to Make the Rosary
          </SectionParagraph>
        </div>
      </div>
    </section>
  );
};

export default SectionsOfHolyRosary;
