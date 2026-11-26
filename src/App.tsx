/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { MotionConfig } from 'motion/react';
import { Language } from './data/salonData';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { StorySection } from './components/StorySection';
import { CollectionSection } from './components/CollectionSection';
import { ExperienceSection } from './components/ExperienceSection';
import { GardenSection } from './components/GardenSection';
import { TestimonialsAndCta } from './components/TestimonialsAndCta';
import { ContactAndFooter } from './components/ContactAndFooter';
import { AppointmentModal } from './components/AppointmentModal';

export default function App() {
  const [lang, setLang] = useState<Language>('he');
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [bookingDress, setBookingDress] = useState<string | undefined>(undefined);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'he' ? 'rtl' : 'ltr';
  }, [lang]);

  const handleToggleLang = () => {
    setLang((prev) => (prev === 'he' ? 'en' : 'he'));
  };

  const handleOpenBooking = (dressName?: string) => {
    setBookingDress(dressName);
    setBookingModalOpen(true);
  };

  return (
    <MotionConfig reducedMotion="user">
      <div
        dir={lang === 'he' ? 'rtl' : 'ltr'}
        className="min-h-screen bg-[#FAF7F2] text-[#16211B] overflow-x-clip"
      >
        <Navbar
          lang={lang}
          onToggleLang={handleToggleLang}
          onOpenBooking={() => handleOpenBooking()}
        />

        <main>
          <HeroSection
            lang={lang}
            onToggleLang={handleToggleLang}
            onOpenBooking={() => handleOpenBooking()}
          />

          <StorySection lang={lang} />

          <CollectionSection
            lang={lang}
            onBookDress={(dressName) => handleOpenBooking(dressName)}
          />

          <ExperienceSection lang={lang} />

          <GardenSection lang={lang} />

          <TestimonialsAndCta lang={lang} />
        </main>

        <ContactAndFooter lang={lang} onToggleLang={handleToggleLang} />

        <AppointmentModal
          isOpen={bookingModalOpen}
          lang={lang}
          initialDress={bookingDress}
          onClose={() => setBookingModalOpen(false)}
        />
      </div>
    </MotionConfig>
  );
}
