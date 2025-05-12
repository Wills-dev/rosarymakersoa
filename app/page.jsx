import MainLayout from "../components/templates/MainLayout";
import HeroSection from "../components/organisms/HeroSection";
import AboutSection from "../components/organisms/AboutSection";
import OurSection from "../components/organisms/OurSection";
import OurVideo from "../components//organisms/OurVideo";

const page = () => {
  return (
    <MainLayout>
      <HeroSection />
      <OurSection />
      <AboutSection />
      <OurVideo />
    </MainLayout>
  );
};

export default page;
