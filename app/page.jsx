import Nav from "../components/Nav";
import BePart from "../components/BePart";
import Prayer from "../components/Prayer";
import MainSectuon from "../components/MainSection";
import CreateDonation from "../components/CreateDonation";
import AboutUsSection from "../components/AboutUsSection";
import Footer from "../components/Footer";
import OurLatestNews from "../components/OurLatestNews";

const page = () => {
  return (
    <main className="relative min-h-screen w-full bg-primary-color ">
      <div className="padding-x w-full">
        <Nav />
        <MainSectuon />
      </div>
      <section className="bg-cream py-6 w-full">
        <div className="padding-x w-full space-y-6">
          <AboutUsSection />
          <BePart />
          <Prayer />
          <CreateDonation />
          <OurLatestNews />
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default page;
