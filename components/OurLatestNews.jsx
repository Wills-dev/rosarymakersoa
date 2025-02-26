import Image from "next/image";

const OurLatestNews = () => {
  return (
    <section className="section-bg">
      <h3 className="sm:text-lg uppercase font-semibold text-primary-black border-b-1">
        Our Gallery
      </h3>
      <div className="">
        <div className="grid grid-cols-7 md:grid-rows-2 grid-rows-3 w-full gap-1 md:h-[34rem] h-screen">
          <div className="md:col-span-3 col-span-7 row-span-1">
            <Image
              src="/assets/images/rmoa2.jpeg"
              width={200}
              height={150}
              alt="gallery"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="md:col-span-2 col-span-4 row-span-1">
            <Image
              src="/assets/images/gallery-3.jpg"
              width={200}
              height={150}
              alt="gallery"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="md:col-span-2 col-span-3 row-span-2">
            <Image
              src="/assets/images/gallery-4.jpg"
              width={200}
              height={150}
              alt="gallery"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="md:col-span-2 col-span-4 row-span-1">
            <Image
              src="/assets/images/RMOA.jpg"
              width={200}
              height={150}
              alt="gallery"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="md:col-span-3 col-span-7 row-span-1">
            <Image
              src="/assets/images/rmoa1-2.jpg"
              width={200}
              height={150}
              alt="gallery"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurLatestNews;
