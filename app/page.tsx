import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import VisionMission from "./components/VisionMission";
import Features from "./components/Features";
import StartNow from "./components/StartNow";
import HowWeOperate from "./components/HowWeOperate";
import Footer from "./components/Footer";
export default function Home() {
  return (
    <main className="overflow-y-scroll snap-y snap-mandatory scroll-smooth scrollbar-hide h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <VisionMission />
      <Features />
      <StartNow />
      <HowWeOperate />
      <Footer />
    </main>
  );
}