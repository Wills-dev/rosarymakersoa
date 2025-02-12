import Navbar from "./../../components/Navbar";
import Footer from "./../../components/Footer";

const ContaactUs = () => {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      <section className="w-full min-h-screen pt-32">
        <div className="flex justify-center py-28">
          <h1 className="text-[#002d5b] font-bold sm:text-6xl text-4xl font-mulish">
            Contact Us
          </h1>
        </div>
        <div className="padding-x pb-28 flex justify-center">
          <div className="max-w-4xl sm:text-xl text-lg font-light text-[#64676c]"></div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default ContaactUs;
