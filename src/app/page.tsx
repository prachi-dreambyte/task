'use client';

import { useState } from 'react';
import HeroBanner from '@/components/HeroBanner';
import AboutUs from '@/components/AboutUs';
import MissionVision from '@/components/MissionVision';
import Services from '@/components/Services';
import WhyChooseUs from '@/components/WhyChooseUs';
import Testimonials from '@/components/Testimonials';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import Navigation from '@/components/Navigation';

export default function Home() {
  const [isDark, setIsDark] = useState(false);

  return (
    <div className={isDark ? 'dark-mode' : 'light-mode'}>
      <Navigation isDark={isDark} setIsDark={setIsDark} />
      <HeroBanner />
      <AboutUs />
      <MissionVision />
      <Services />
      <WhyChooseUs />
      <Testimonials />
      <ContactForm />
      <Footer />
    </div>
  );
}
