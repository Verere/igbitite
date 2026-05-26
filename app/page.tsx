import Navbar from '@/components/Navbar';
import HeroSection from '@/sections/HeroSection';
import TrustMetricsSection from '@/sections/TrustMetricsSection';

import AboutSection from '@/sections/AboutSection';
import ServicesSection from '@/sections/ServicesSection';
import IndustriesSection from '@/sections/IndustriesSection';
import WhyChooseUsSection from '@/sections/WhyChooseUsSection';
import ProjectsSection from '@/sections/ProjectsSection';
import TestimonialSection from '@/sections/TestimonialSection';
import CTASection from '@/sections/CTASection';
import ContactSection from '@/sections/ContactSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <TrustMetricsSection />
      <AboutSection />
      <ServicesSection />
      <IndustriesSection />
      <WhyChooseUsSection />
      <ProjectsSection />
      <TestimonialSection />
      <CTASection />
      <ContactSection />
      <Footer />
    </>
  );
}
