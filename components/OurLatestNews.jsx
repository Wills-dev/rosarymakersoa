import Image from "next/image";
import React from "react";

const OurLatestNews = () => {
  return (
    <section className="min-h-screen w-full bg-[#f8fcff]">
      <div className="container mx-auto px-4 py-10 h-full w-full">
        <div className="flex justify-center items-center min-h-screen">
          <div className="">
            <h6 className="font-semibold text-primary-color capitalize text-lg text-center">
              Our Gallery
            </h6>
            <div className="w-full flex justify-center">
              {" "}
              <h2 className="sm:text-5xl text-2xl py-6 text-[#002d5b] font-bold max-w-xl text-center sm:leading-normal capitalize">
                Rosary making is a joyful labor of love
              </h2>
            </div>
            <div className="grid grid-cols-7 md:grid-rows-2 grid-rows-3 w-full gap-1 md:h-[60vh] h-screen">
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
        </div>
      </div>
    </section>
  );
};

export default OurLatestNews;
