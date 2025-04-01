import Image from "next/image";

import MainLayout from "../../components/MainLayout";

const page = () => {
  return (
    <MainLayout>
      <section className="bg-cream py-6 w-full">
        <div className="padding-x w-full space-y-6">
          <div className="section-bg text-primary-brown space-y-4">
            <h3 className="sm:text-lg uppercase font-semibold text-primary-black border-b-1">
              Come Join Us
            </h3>
            <div className="py-6 space-y-6  text-primary-brown">
              <div className="w-full h-96 bg-no-repeat bg-cover bg-center bg-join-uss" />
              <p>
                There are many ways that you can participate with our
                organization. We’re currently seeking:
              </p>
              <ul className=" list-disc pl-2">
                <li>Rosary Makers</li>
                <li>Volunteers</li>
                <li>Arts & Crafts Instructors</li>
                <li className="max-w-md">
                  nterested in applying for the instructor position? State that
                  when filling out the form below or view our listing on{" "}
                  <a
                    href="https://www.indeed.com/job/arts-and-crafts-instructor-7c599a9f099b3ebf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-800"
                  >
                    INDEED.
                  </a>
                </li>
              </ul>
              <p className="max-w-md">
                The purpose and goal of Rosary Makers of America is to make or
                craft the catholic rosaries. Our Mission is to get our special
                needs adults gainfully employed.
              </p>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default page;
