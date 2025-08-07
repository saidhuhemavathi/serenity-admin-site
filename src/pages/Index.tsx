import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { Services } from '@/components/Services';
import { Instructors } from '@/components/Instructors';
import { Schedule } from '@/components/Schedule';
import { Gallery } from '@/components/Gallery';
import { Contact } from '@/components/Contact';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <Instructors />
      <Schedule />
      <Gallery />
      <Contact />
    </div>
  );
};

export default Index;
