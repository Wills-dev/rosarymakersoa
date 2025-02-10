import Image from "next/image";
import Link from "next/link";
import React from "react";

const JoinUs = () => {
  return (
    <section className="min-h-screen w-full bg-[#f8fcff]">
      <div className="container mx-auto px-4 py-10 h-full w-full">
        <div className="flex justify-center items-center min-h-screen">
          <div className="w-full">
            <h6 className="font-semibold text-primary-color capitalize text-lg text-center">
              Join us
            </h6>
            <div className="w-full flex justify-center">
              {" "}
              <h2 className="sm:text-5xl text-2xl py-6 text-[#002d5b] font-bold max-w-xl text-center sm:leading-normal capitalize">
                Be a Part of Something Meaningful
              </h2>
            </div>
            <div className=" w-full max-h-96 h-96 relative aspect-video my-12">
              <iframe
                src="https://player.vimeo.com/video/877740921?dnt=1&app_id=122963"
                frameborder="0"
                title="Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full"
              ></iframe>
            </div>
            <div className="grid grid-cols-6 gap-12 py-14">
              <div className="md:col-span-3 col-span-6 flex justify-center">
                <Image
                  src="/assets/images/Georgia-Bulletin.png"
                  height={100}
                  width={100}
                  alt="georgia bulletin"
                  className=" object-cover max-h-96 w-96"
                />
              </div>
              <div className="md:col-span-3 col-span-6">
                <h6 className="font-semibold text-primary-color capitalize sm:text-xl text-lg">
                  Art, Prayer and Companionship Goals of Rosary Makers
                </h6>
                <div className="flex flex-col gap-6 pt-6">
                  <p className="text-[#64676c]">
                    By ANDREW NELSON, Staff Writer|Published February 3, 2022
                  </p>
                  <p className="text-[#64676c]">
                    STONE MOUNTAIN–Bringing faith into the world of the special
                    needs disabilities community, Nicholas Ihenacho is a founder
                    of Rosary Makers of America that offers a special focus on
                    art, prayer and companionship.
                  </p>
                  <p className="text-[#64676c]">
                    From working with his son, Ikenna, who has Down syndrome,
                    Ihenacho formed this nonprofit for others to express
                    themselves by creating prayer beads. With the diverse range
                    of guests and their families, the organization hopes to
                    share their handiwork with area parishes and believers.
                  </p>
                  <a
                    href="https://georgiabulletin.org/news/2022/02/art-prayer-and-companionship-goals-of-rosary-makers/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-primary-color py-3 px-8 text-white hover:bg-blue-900  transition-all duration-300 max-w-fit"
                  >
                    Read the full article
                  </a>
                </div>
              </div>{" "}
            </div>
            <div className="w-full">
              <div className="bg-join-us h-[40vh] w-full bg-no-repeat bg-cover relative bg-fixed bg-[50%] flex items-center my-10">
                <div className="absolute w-full h-full top-0 left-0 bg-primary-color opacity-75" />
                <div className="flex sm:items-center justify-between z-10 sm:px-10 px-6 w-full max-sm:flex-col gap-4">
                  <p className="text-white sm:text-4xl text-xl font-semibold leading-normal">
                    Lets Chenge The World <br /> With Humanity
                  </p>
                  <Link
                    href="/come-join-us-2"
                    className="bg-white py-3 px-8 text-primary-color hover:bg-gray-200  transition-all duration-300 max-w-fit"
                  >
                    Join us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinUs;
