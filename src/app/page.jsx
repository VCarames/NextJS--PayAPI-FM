import Clients from "@/components/home/Clients";
import Benefits from "@/components/home/Benefits";
import Hero from "@/components/home/Hero";
import Features from "@/components/home/Features";
import CTASection from "@/components/CTASection";

function Home() {
  return (
    <>
      <Hero />
      <Clients />
      <Benefits />
      <Features />
      <CTASection />
    </>
  );
}

export default Home;
