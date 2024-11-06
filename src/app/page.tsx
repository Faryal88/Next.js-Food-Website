import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import About from '../components/About';
import Menu from '../components/Menu';
import Testimonials from '../components/Testimonials';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <About />
        <Menu />
        <Testimonials />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
