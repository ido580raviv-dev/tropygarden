import { motion } from 'motion/react';
import {
  Sparkles,
  Compass,
  Lock,
  Heart,
  Layers,
  Feather,
} from 'lucide-react';
import {
  COPY,
  EXPERIENCE_DESCRIPTIONS,
  EXPERIENCE_STEPS,
  IMAGES,
  Language,
} from '../data/salonData';
import { EditorialImage, TropicalLeafLineArt } from './BotanicalOrnament';

interface ExperienceSectionProps {
  lang: Language;
}

const ICON_MAP = {
  sparkles: Sparkles,
  compass: Compass,
  lock: Lock,
  heart: Heart,
  layers: Layers,
  feather: Feather,
};

export function ExperienceSection({ lang }: ExperienceSectionProps) {
  const t = COPY[lang].experience;

  return (
    <section
      id="experience"
      className="relative bg-[#11281E] text-[#FAF7F2] py-24 sm:py-32 lg:py-40 overflow-hidden"
    >
      {/* Delicate Botanical Line Art Background Accent */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-10 end-4 w-56 text-[#C5A267]/12"
      >
        <TropicalLeafLineArt className="w-full h-auto" />
      </div>

      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        {/* Top Editorial Split: Headline + Inset Bridal Suite Visual */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-end pb-16 lg:pb-24 border-b border-[#FAF7F2]/12">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-5"
          >
            <p className="text-xs tracking-[0.22em] text-[#C5A267] font-medium">
              {t.kicker}
            </p>
            <h2 className="font-serif text-[clamp(2.25rem,4.5vw,4rem)] leading-[1.06] tracking-wide text-[#FAF7F2] whitespace-pre-line">
              {t.title}
            </h2>
            <p className="text-base sm:text-lg leading-relaxed text-[#EADAD5]/85 max-w-[52ch] pt-2 font-light">
              {t.lead}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.9, delay: 0.12 }}
            className="lg:col-span-5 grid grid-cols-2 gap-4 items-end"
          >
            <EditorialImage
              src={IMAGES.dressMinimalist}
              alt={lang === 'he' ? 'מדידה אישית בסוויטת הכלות' : 'Private bridal suite fitting'}
              className="aspect-[3/4] w-full border border-[#C5A267]/25"
              imgClassName="hover:scale-105"
            />
            <EditorialImage
              src={IMAGES.storyAtelier}
              alt={lang === 'he' ? 'פרטי תחרה ופנינים בעבודת יד' : 'Hand-crafted lace and pearl details'}
              className="aspect-[4/3] w-full border border-[#C5A267]/25 mb-6"
              imgClassName="hover:scale-105"
            />
          </motion.div>
        </div>

        {/* 6 Bespoke Bridal Experience Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 pt-14 lg:pt-16">
          {EXPERIENCE_STEPS.map((step, idx) => {
            const Icon = ICON_MAP[step.icon];
            const titleText =
              typeof step.title === 'string'
                ? lang === 'he'
                  ? step.title
                  : step.en
                : step.title[lang];
            const descText = EXPERIENCE_DESCRIPTIONS[step.num][lang];

            return (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.65,
                  delay: idx * 0.06,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group relative border border-[#C5A267]/22 bg-[#163125]/55 p-7 sm:p-8 transition-colors duration-300 hover:border-[#C5A267]/65 hover:bg-[#19382A]"
              >
                <div className="flex items-center justify-between mb-6">
                  <span className="font-serif text-xl tracking-[0.14em] text-[#C5A267] tabular-nums">
                    {step.num}
                  </span>
                  <Icon className="w-5 h-5 stroke-[1.25] text-[#C5A267]/85 group-hover:text-[#FAF7F2] transition-colors" />
                </div>

                <h3 className="font-serif text-2xl text-[#FAF7F2] mb-3 tracking-wide">
                  {titleText}
                </h3>

                <p className="text-sm leading-relaxed text-[#EADAD5]/80 font-light">
                  {descText}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
