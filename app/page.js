import Navbar from "@/components/Navbar";
import AboutUs from "@/components/AboutUs";
import HeroSection from "@/components/HeroSection";
import WhatWeDo from "@/components/WhatWeDo";
import JoinUs from "@/components/JoinUs";

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <Navbar />
      <HeroSection />
      <WhatWeDo />
      <AboutUs />
      <JoinUs />
    </main>
  );
}
