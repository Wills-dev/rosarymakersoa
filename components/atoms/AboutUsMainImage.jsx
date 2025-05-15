import Image from "next/image";

import MainImage from "../../public/assets/images/new/image-1.jpg";

const AboutUsMainImage = () => {
  return (
    <section className="sm:pt-16 pt-20">
      <div className="w-full h-auto min-w-full overflow-hidden">
        <Image
          src={MainImage}
          priority
          alt="About us"
          placeholder="blur"
          className="w-full h-full min-w-full min-h-full object-cover"
        />
      </div>
    </section>
  );
};

export default AboutUsMainImage;
