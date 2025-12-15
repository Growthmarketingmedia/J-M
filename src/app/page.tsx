import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Stats from "@/components/sections/Stats";
import ServiceAreas from "@/components/sections/ServiceAreas";
import Testimonials from "@/components/sections/Testimonials";
import Process from "@/components/sections/Process";
import EmergencyBanner from "@/components/sections/EmergencyBanner";
import Contact from "@/components/sections/Contact";
import MapSection from "@/components/sections/MapSection";
import InsuranceSlider from "@/components/sections/InsuranceSlider";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <Stats />
      <Services />
      <EmergencyBanner />
      <WhyChooseUs />
      <InsuranceSlider />
      <Process />
      <Testimonials />
      <ServiceAreas />
      <Contact />
      <MapSection />
    </div>
  );
}
