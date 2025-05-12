import MainLayout from "../components/templates/MainLayout";
import HeroSection from "../components/organisms/HeroSection";
import AboutSection from "../components/organisms/AboutSection";
import OurSection from "../components/organisms/OurSection";
import OurVideo from "../components//organisms/OurVideo";
import OurArticle from "../components//organisms/OurArticle";
import JoinUsSection from "../components//organisms/JoinUsSection";
import DonateSection from "../components//organisms/DonateSection";
import Footer from "../components//organisms/Footer";

const page = () => {
  return (
    <MainLayout>
      <HeroSection />
      <OurSection />
      <AboutSection />
      <OurVideo />
      <OurArticle />
      <JoinUsSection />
      <DonateSection />
      <Footer />
    </MainLayout>
  );
};

export default page;
