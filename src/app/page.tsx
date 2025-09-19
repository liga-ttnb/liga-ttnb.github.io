import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Achievements from '@/components/sections/Achievements';
import Sports from '@/components/sections/Sports';
import Calendar from '@/components/sections/Calendar';
import Gallery from '@/components/sections/Gallery';
import Sponsors from '@/components/sections/Sponsors';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/sections/Footer';
import Impact from '@/components/sections/Impact';
import Donations from '@/components/sections/Donations';
import Shop from '@/components/sections/Shop';

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Hero />
      <Gallery />
      <About />
      <Achievements />
      <Sponsors />
      <Impact />
      <Donations />
      <Sports />
      <Calendar />
      <Shop />
      <Contact />
      <Footer />
    </main>
  );
}