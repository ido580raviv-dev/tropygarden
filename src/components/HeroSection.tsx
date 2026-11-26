import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowDown } from 'lucide-react';
import { COPY, IMAGES, Language } from '../data/salonData';
import { TropicalLeafLineArt, OrchidBlossomLineArt } from './BotanicalOrnament';

interface HeroSectionProps {
  lang: Language;
  onToggleLang: () => void;
  onOpenBooking: () => void;
}

export function HeroSection({ lang, onToggleLang, onOpenBooking }: HeroSectionProps) {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '16%']);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.02, 1.1]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0.2]);

  const t = COPY[lang].hero;

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-[100svh] w-full overflow-hidden flex flex-col justify-end bg-[#0D1E16] text-[#FAF7F2]"
    >
      {/* Parallax Cinematic Hero Background */}
      <motion.div
        style={{ y: imageY, scale: imageScale }}
        className="absolute inset-0 will-change-transform"
      >
        <img
          src={IMAGES.hero}
          alt={
            lang === 'he'
              ? 'כלה בשמלת כלה יוקרתית בגן טרופי קסום עם פרחים לבנים ואור שמש רך'
              : 'Bride in luxury couture wedding gown inside a sunlit tropical conservatory'
          }
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center"
        />
      </motion.div>

      {/* Measured Contrast Scrims for WCAG AA legibility */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-[#0B1B14]/90 via-[#0B1B14]/35 to-[#0B1B14]/45"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-[#0B1B14]/55 via-transparent to-[#0B1B14]/35"
      />

      {/* Subtle Floating Botanical Line Accents */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-24 end-6 sm:end-14 w-28 sm:w-40 text-[#FAF7F2]/18 animate-botanical-sway hidden md:block"
      >
        <TropicalLeafLineArt className="w-full h-auto" />
      </div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-28 start-8 w-24 text-[#C5A267]/25 animate-botanical-sway hidden lg:block"
      >
        <OrchidBlossomLineArt className="w-full h-auto" />
      </div>

      {/* Hero Content */}
      <motion.div
        style={{ opacity: contentOpacity }}
        className="relative z-10 max-w-[1440px] w-full mx-auto px-5 sm:px-8 lg:px-12 pt-32 pb-12 sm:pb-16 lg:pb-20"
      >
        <div className="max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-xs sm:text-[13px] tracking-[0.22em] text-[#EADAD5] mb-5 font-light"
          >
            {t.kicker}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-[clamp(2.75rem,6.5vw,5.75rem)] leading-[0.98] tracking-[0.08em] font-normal text-[#FAF7F2] mb-6"
          >
            {t.title}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.24, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-1.5 mb-9"
          >
            <p className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#FAF7F2]/95 leading-snug">
              {t.subtitleLine1}
              <br />
              {t.subtitleLine2}
            </p>
            <p className="text-sm sm:text-base text-[#EADAD5]/85 tracking-wide pt-1 font-light">
              {t.subtitleEn}
            </p>
          </motion.div>

          {/* Primary & Secondary CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.36, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap items-center gap-4"
          >
            <a
              href="#collection"
              className="inline-flex items-center justify-center min-h-[48px] px-8 py-3.5 bg-[#FAF7F2] text-[#11281E] text-sm font-medium tracking-wider hover:bg-[#C5A267] hover:text-[#0B1B14] transition-colors duration-200 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C5A267]"
            >
              {t.primaryCta}
            </a>

            <button
              type="button"
              onClick={onOpenBooking}
              className="inline-flex items-center justify-center min-h-[48px] px-7 py-3.5 border border-[#FAF7F2]/55 bg-[#0B1B14]/25 backdrop-blur-xs text-[#FAF7F2] text-sm font-normal tracking-wider hover:border-[#C5A267] hover:bg-[#FAF7F2]/10 transition-colors duration-200 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C5A267]"
            >
              {t.secondaryCta}
            </button>
          </motion.div>
        </div>

        {/* Bottom Utility Row: Language Toggle + Scroll Indicator */}
        <div className="mt-12 sm:mt-14 pt-6 border-t border-[#FAF7F2]/15 flex items-center justify-between gap-4">
          <button
            type="button"
            onClick={onToggleLang}
            className="inline-flex items-center gap-2 text-xs tracking-[0.16em] text-[#FAF7F2]/85 hover:text-[#C5A267] transition-colors py-2 px-1 cursor-pointer whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-[#C5A267]"
            aria-label={lang === 'he' ? 'Switch to English' : 'החלף לעברית'}
          >
            <span className={lang === 'he' ? 'text-[#C5A267] font-medium' : 'opacity-70'}>
              עברית
            </span>
            <span aria-hidden="true" className="opacity-40">
              /
            </span>
            <span className={lang === 'en' ? 'text-[#C5A267] font-medium' : 'opacity-70'}>
              EN
            </span>
          </button>

          <a
            href="#story"
            className="inline-flex items-center gap-3 text-xs tracking-[0.2em] text-[#FAF7F2]/80 hover:text-[#FAF7F2] transition-colors py-2"
          >
            <span>{t.scrollCue}</span>
            <span className="relative flex flex-col items-center h-7 w-4">
              <span className="w-[1px] h-5 bg-[#C5A267] animate-scroll-hairline" />
              <ArrowDown className="w-3 h-3 text-[#C5A267] -mt-1 stroke-[1.5]" />
            </span>
          </a>
        </div>
      </motion.div>
    </section>
  );
}
