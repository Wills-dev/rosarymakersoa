import Navbar from "./../../components/Navbar";
import Footer from "./../../components/Footer";

const page = () => {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      <section className="w-full min-h-screen pt-32">
        <div className="flex justify-center py-28">
          <h1 className="text-[#002d5b] font-bold sm:text-6xl text-4xl font-mulish">
            Make a Donation!
          </h1>
        </div>
        <div className="container mx-auto px-4 pb-28 flex justify-center">
          <div className="max-w-4xl sm:text-xl text-lg font-light text-[#64676c]">
            <p className=" text-center leading-9">
              Rosary Makers of America is a 501(c)(3) non profit organization.
              Please support our work. Our Mission is to get special needs
              adults employed, to enrich and improve their lives. Be part of the
              Rosary Makers of America family.
            </p>
            <p className="text-center font-bold py-4">
              Volunteer, make a donation or pray for us.
            </p>
            <p className=" text-center leading-9">
              Donating to a Catholic Appeal or Church? Consider a tax-deductible
              donation to support us!
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default page;
