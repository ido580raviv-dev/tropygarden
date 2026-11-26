import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import {
  buildWhatsAppUrl,
  COPY,
  IMAGES,
  Language,
  SAMPLE_TESTIMONIALS,
} from '../data/salonData';
import { EditorialImage } from './BotanicalOrnament';

interface TestimonialsAndCtaProps {
  lang: Language;
}

export function TestimonialsAndCta({ lang }: TestimonialsAndCtaProps) {
  const tStories = COPY[lang].testimonials;
  const tCta = COPY[lang].ctaSection;
  const whatsappHref = buildWhatsAppUrl(tCta.whatsappPrefill);

  return (
    <>
      {/* Section 7: Bride Stories (Editable Sample Quote Structure) */}
      <section
        id="testimonials"
        className="bg-[#F3EDE3] text-[#16211B] py-20 sm:py-28 lg:py-32 border-t border-[#16211B]/8"
      >
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.75 }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[#16211B]/12"
          >
            <div className="space-y-3">
              <p className="text-xs tracking-[0.2em] text-[#6E7B58] font-medium">
                {tStories.kicker}
              </p>
              <h2 className="font-serif text-[clamp(2.1rem,4vw,3.5rem)] leading-none tracking-[0.06em] text-[#11281E]">
                {tStories.title}
              </h2>
            </div>

            <p className="text-xs text-[#6E7B58] max-w-md leading-relaxed">
              {tStories.notice}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 lg:pt-16">
            {SAMPLE_TESTIMONIALS.map((item, idx) => (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, delay: idx * 0.1 }}
                className="bg-[#FAF7F2] border border-[#16211B]/10 p-7 sm:p-9 flex flex-col justify-between gap-8"
              >
                <div className="space-y-5">
                  <div className="flex items-center gap-4">
                    <EditorialImage
                      src={item.image}
                      alt={item.label[lang]}
                      className="w-14 h-14 rounded-full shrink-0 border border-[#C5A267]/35"
                    />
                    <div className="min-w-0">
                      <p className="text-xs font-medium text-[#11281E] truncate">
                        {item.label[lang]}
                      </p>
                      <p className="text-xs text-[#8D6B34] mt-0.5 truncate">
                        {item.seasonNote[lang]}
                      </p>
                    </div>
                  </div>

                  <blockquote className="font-serif text-xl sm:text-2xl leading-[1.55] text-[#11281E]">
                    {item.quote[lang]}
                  </blockquote>
                </div>

                <div className="pt-4 border-t border-[#16211B]/8 flex items-center justify-between text-xs text-[#6E7B58]">
                  <span>TROPY GARDEN</span>
                  <span className="tabular-nums">0{idx + 1}</span>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Section 8: Dramatic Full-Bleed Bridal Appointment CTA */}
      <section
        id="appointment"
        className="relative min-h-[75vh] sm:min-h-[82vh] flex items-center justify-center overflow-hidden bg-[#0B1B14] text-[#FAF7F2]"
      >
        <img
          src={IMAGES.ctaBride}
          alt={
            lang === 'he'
              ? 'כלה בשמלת כלה והינומה צועדת בגן טרופי בשקיעה זהובה'
              : 'Bride in couture wedding dress walking through golden tropical garden'
          }
          referrerPolicy="no-referrer"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        {/* Measured Twilight Contrast Scrim */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-[#0B1B14]/88 via-[#0B1B14]/55 to-[#0B1B14]/65"
        />

        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 max-w-3xl mx-auto px-5 sm:px-8 text-center py-20 space-y-6"
        >
          <p className="text-xs tracking-[0.24em] text-[#C5A267] font-medium">
            {tCta.kicker}
          </p>

          <h2 className="font-serif text-[clamp(2.4rem,5.2vw,4.75rem)] leading-[1.02] tracking-[0.06em] text-[#FAF7F2] whitespace-pre-line">
            {tCta.title}
          </h2>

          <p className="text-base sm:text-xl leading-relaxed text-[#EADAD5]/90 max-w-[46ch] mx-auto font-light">
            {tCta.body}
          </p>

          <div className="pt-4">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-3 min-h-[54px] px-10 py-4 bg-[#FAF7F2] text-[#11281E] text-sm sm:text-base font-medium tracking-[0.12em] hover:bg-[#C5A267] hover:text-[#0B1B14] transition-all duration-300 shadow-lg hover:scale-[1.02] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C5A267]"
            >
              <span>{tCta.button}</span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </motion.div>
      </section>
    </>
  );
}
