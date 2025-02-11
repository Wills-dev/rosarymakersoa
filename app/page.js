import Image from "next/image";

import Navbar from "../components/Navbar";
import WhatWeDo from "../components/WhatWeDo";
import JoinUs from "../components/JoinUs";
import MakeDonation from "../components/MakeDonation";
import Footer from "../components/Footer";
import OurLatestNews from "../components/OurLatestNews";
import HeroSection from "../components/HeroSection";
import AboutUs from "../components/AboutUs";

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <Navbar />
      <div className="absolute left-0 top-[20%] w-44 h-40  max-sm:hidden">
        <Image
          src="/assets/images/Group8.png"
          height={70}
          width={120}
          alt="dots"
          className="w-full h-full"
        />
      </div>
      <HeroSection />
      <WhatWeDo />
      <AboutUs />
      <div className="absolute right-0 top-[60%] w-44 h-40  max-sm:hidden">
        <Image
          src="/assets/images/Group9.png"
          height={70}
          width={120}
          alt="dots"
          className="w-full h-full"
        />
      </div>
      <JoinUs />
      <div className="absolute left-0 top-[90%] w-44 h-40 max-sm:hidden">
        <Image
          src="/assets/images/Group8.png"
          height={70}
          width={120}
          alt="dots"
          className="w-full h-full"
        />
      </div>
      <MakeDonation />
      <OurLatestNews />
      <Footer />
    </main>
  );
}
