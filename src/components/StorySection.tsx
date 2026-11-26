import { motion } from 'motion/react';
import { COPY, IMAGES, Language } from '../data/salonData';
import { EditorialImage, OrchidBlossomLineArt } from './BotanicalOrnament';

interface StorySectionProps {
  lang: Language;
}

export function StorySection({ lang }: StorySectionProps) {
  const t = COPY[lang].story;

  return (
    <section
      id="story"
      className="relative bg-[#FAF7F2] text-[#16211B] py-20 sm:py-28 lg:py-36 overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Editorial Asymmetric Spread */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Text & Primary Editorial Column */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 lg:pt-8 space-y-8"
          >
            <div className="space-y-4">
              <p className="text-xs tracking-[0.2em] text-[#6E7B58] font-medium">
                {t.kicker}
              </p>
              <h2 className="font-serif text-[clamp(2.1rem,4vw,3.5rem)] leading-[1.06] tracking-wide text-[#11281E] whitespace-pre-line">
                {t.title}
              </h2>
            </div>

            <div className="w-16 h-[1px] bg-[#C5A267]" aria-hidden="true" />

            <div className="space-y-5 text-base sm:text-[17px] leading-[1.8] text-[#16211B]/85 max-w-[54ch]">
              <p>{t.paragraph1}</p>
              <p className="font-medium text-[#11281E]">{t.paragraph2}</p>
            </div>

            {/* Secondary Inset Portrait on Desktop */}
            <div className="pt-4 hidden lg:block">
              <div className="max-w-xs">
                <EditorialImage
                  src={IMAGES.dressLace}
                  alt={t.caption2}
                  className="aspect-[3/4] w-full"
                  imgClassName="hover:scale-105"
                />
                <p className="mt-3 text-xs tracking-wide text-[#6E7B58]">
                  {t.caption2}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Large Asymmetric Visual Composition */}
          <div className="lg:col-span-7 relative">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              <EditorialImage
                src={IMAGES.storyAtelier}
                alt={t.caption1}
                className="aspect-[4/3] w-full"
                imgClassName="hover:scale-103"
              />
              <div className="mt-3 flex items-center justify-between text-xs tracking-wide text-[#6E7B58]">
                <span>{t.caption1}</span>
                <span>TROPY GARDEN ATELIER</span>
              </div>
            </motion.div>

            {/* Overlapping Smaller Botanical Frame */}
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.9, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
              className="mt-8 sm:mt-0 sm:w-[48%] lg:w-[44%] sm:-mt-20 sm:ms-auto relative z-10 bg-[#FAF7F2] p-3 sm:p-4 shadow-sm"
            >
              <EditorialImage
                src={IMAGES.gardenBotanical}
                alt={lang === 'he' ? 'צמחייה טרופית וסחלבים לבנים בגן הסלון' : 'Tropical foliage and white orchids'}
                className="aspect-[4/3] w-full"
                imgClassName="hover:scale-105"
              />
            </motion.div>

            {/* Minimalist Botanical Line Accent */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-10 start-8 w-28 text-[#8D6B34]/25 hidden sm:block"
            >
              <OrchidBlossomLineArt className="w-full h-auto" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
