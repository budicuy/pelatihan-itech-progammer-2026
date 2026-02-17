import Benefits from "@/components/sections/Benefits";
import CTA from "@/components/sections/CTA";
import Curriculum from "@/components/sections/Curriculum";
import FloatingCTA from "@/components/sections/FloatingCTA";
import Footer from "@/components/sections/Footer";
import Hero from "@/components/sections/Hero";
import Navbar from "@/components/sections/Navbar";
import Philosophy from "@/components/sections/Philosophy";
import TechStack from "@/components/sections/TechStack";
import Timeline from "@/components/sections/Timeline";

export default function Home() {
  return (
    <div className="bg-background-dark text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <Philosophy />
      <Curriculum />
      <TechStack />
      <Timeline />
      <Benefits />
      <CTA />
      <FloatingCTA />
      <Footer />
    </div>
  );
}
