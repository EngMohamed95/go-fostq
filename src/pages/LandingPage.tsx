import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Hero from '../components/sections/Hero';
import PainPoints from '../components/sections/PainPoints';
import Services from '../components/sections/Services';
import Stats from '../components/sections/Stats';
import Testimonials from '../components/sections/Testimonials';
import About from '../components/sections/About';
import FAQ from '../components/sections/FAQ';
import CTA from '../components/sections/CTA';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-zinc-50 overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <PainPoints />
        <Services />
        <Stats />
        <Testimonials />
        <About />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
