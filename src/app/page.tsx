import HeroSection from '@/app/components/HeroSection';
import ServicesProcess from '@/app/components/ServicesProcess';
import ServicesShowcase from '@/app/components/ServicesShowcase';
import AboutSection from '@/app/components/AboutSection';
import FAQSection from '@/app/components/FAQSection';
import ContactSection from '@/app/components/ContactSection';
import Footer from '@/app/components/Footer';

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesProcess />
      <ServicesShowcase />
      <AboutSection />
      <ContactSection />
      <FAQSection />
      <Footer />
    </>
  );
}
