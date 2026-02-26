import Hero from '@/components/HeroSection';
import AboutUs from '@/components/AboutSection';
import Services from '@/components/OurServices';
import WhyChoose from '@/components/WhyChoose';
import Projects from '@/components/OurProjects';
import Testimonials from '@/components/Testimonial';
import Faqs from '@/components/Faqs';
import CtaBox from '@/components/CtaBox';
import Blog from '@/components/BlogSection';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutUs />
      <Services />
      <WhyChoose />
      <Projects />
      <Testimonials />
      <Faqs />
      <CtaBox />
      <Blog />
      <Footer />
    </>
  );
}