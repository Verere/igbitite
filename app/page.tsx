import Navbar from '@/components/Navbar';
import HeroSection from '@/sections/HeroSection';








import Footer from '@/components/Footer';
import AboutSection from '@/sections/AboutSection';
import ServicesSection from '@/sections/ServicesSection';
import IndustriesSection from '@/sections/IndustriesSection';
import WhyChooseUsSection from '@/sections/WhyChooseUsSection';
import ProjectsSection from '@/sections/ProjectsSection';
import TestimonialSection from '@/sections/TestimonialSection';
import ContactSection from '@/sections/ContactSection';

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <IndustriesSection />
      <WhyChooseUsSection />
      <ProjectsSection />
      <TestimonialSection />
      <ContactSection />
      <Footer />
    </>
  );
}
