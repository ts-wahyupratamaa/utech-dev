import Hero from '@/app/components/Hero';
import Services from '@/app/components/Services';
import Showcase from '@/app/components/Showcase';
import About from '@/app/components/About';
import Faq from '@/app/components/Faq';
import Contact from '@/app/components/Contact';
import Footer from '@/app/components/Footer';

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Showcase />
      <About />
      <Contact />
      <Faq />
      <Footer />
    </>
  );
}
