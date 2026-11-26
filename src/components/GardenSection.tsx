import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { COPY, IMAGES, Language } from '../data/salonData';
import { EditorialImage, OrchidBlossomLineArt } from './BotanicalOrnament';

interface GardenSectionProps {
  lang: Language;
}

export function GardenSection({ lang }: GardenSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const ySlow = useTransform(scrollYProgress, [0, 1], [32, -32]);
  const yFast = useTransform(scrollYProgress, [0, 1], [-24, 24]);

  const t = COPY[lang].garden;

  return (
    <section
      id="garden"
      ref={sectionRef}
      className="relative bg-[#FAF7F2] text-[#16211B] py-24 sm:py-32 lg:py-40 overflow-hidden"
    >
      {/* Soft Blush Atmosphere Accent */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/4 start-1/2 -translate-x-1/2 w-[560px] h-[560px] rounded-full bg-[#EADAD5]/45 blur-3xl"
      />

      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        {/* Centered Editorial Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl mx-auto text-center space-y-4 mb-16 sm:mb-24"
        >
          <p className="text-xs tracking-[0.22em] text-[#6E7B58] font-medium">
            {t.kicker}
          </p>
          <h2 className="font-serif text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.02] tracking-[0.06em] text-[#11281E]">
            {t.title}
          </h2>
          <p className="text-base sm:text-lg leading-relaxed text-[#16211B]/75 max-w-[48ch] mx-auto">
            {t.lead}
          </p>
        </motion.div>

        {/* Artistic Asymmetric Magazine Collage */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-10 items-center">
          {/* Oversized Left Botanical Sanctuary Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-6 lg:col-span-5"
          >
            <EditorialImage
              src={IMAGES.gardenBotanical}
              alt={lang === 'he' ? 'עלים טרופיים וסחלבים לבנים בקרני שמש' : 'Tropical palm leaves and white orchids in sunlit sanctuary'}
              className="aspect-[4/5] w-full"
              imgClassName="hover:scale-105"
            />
          </motion.div>

          {/* Center Parallax Stacked Pair */}
          <motion.div
            style={{ y: yFast }}
            className="md:col-span-6 lg:col-span-4 space-y-6 lg:space-y-8 will-change-transform"
          >
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="w-[85%] ms-auto"
            >
              <EditorialImage
                src={IMAGES.dressBoho}
                alt={lang === 'he' ? 'כלה בלב הגן הטרופי' : 'Bride amidst lush garden ferns'}
                className="aspect-[3/4] w-full"
                imgClassName="hover:scale-105"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-[72%]"
            >
              <EditorialImage
                src={IMAGES.storyAtelier}
                alt={lang === 'he' ? 'תקריב תחרה ומשי שמפניה' : 'Champagne silk and botanical lace closeup'}
                className="aspect-[4/3] w-full"
                imgClassName="hover:scale-105"
              />
            </motion.div>
          </motion.div>

          {/* Right Offset Feature Frame + Botanical Ornament */}
          <motion.div
            style={{ y: ySlow }}
            className="md:col-span-12 lg:col-span-3 flex flex-col items-end gap-8 will-change-transform"
          >
            <div className="hidden lg:block w-24 text-[#8D6B34]/35 animate-botanical-sway">
              <OrchidBlossomLineArt className="w-full h-auto" />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.85, delay: 0.15 }}
              className="w-full md:w-2/3 lg:w-full"
            >
              <EditorialImage
                src={IMAGES.dressDramatic}
                alt={lang === 'he' ? 'שמלת כלה מפוסלת בחממת זכוכית' : 'Couture gown in sunlit glass orangery'}
                className="aspect-[3/4] w-full"
                imgClassName="hover:scale-105"
              />
              <p className="mt-3 text-xs tracking-[0.16em] text-[#6E7B58] text-end">
                ORANGERY · SILK ORGANZA
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
