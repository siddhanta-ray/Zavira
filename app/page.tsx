import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import VisionMission from "./components/VisionMission";
import Features from "./components/Features";
import StartNow from "./components/StartNow";
import HowWeOperate from "./components/HowWeOperate";
import Footer from "./components/Footer";
  
export default function Home() {
  return (
    <div className="bg-gradient-to-br from-[#f8fdf4] to-[#d4f1a4] text-[#2d5016] font-sans mt-14">
      <div className="max-w-[1400px] mx-auto px-5 py-4 overflow-y-scroll hide-scrollbar">
        <HeroSection />
        <AboutSection />
        <VisionMission />
        <Features />
        <StartNow />
        <HowWeOperate/>
        <Footer />
      </div>
    </div>
  );
}

