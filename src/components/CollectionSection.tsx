import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import {
  BridalDress,
  COPY,
  DRESS_COLLECTION,
  DressCategory,
  Language,
} from '../data/salonData';
import { EditorialImage } from './BotanicalOrnament';

interface CollectionSectionProps {
  lang: Language;
  onBookDress: (dressName: string) => void;
}

export function CollectionSection({ lang, onBookDress }: CollectionSectionProps) {
  const [activeFilter, setActiveFilter] = useState<DressCategory>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const t = COPY[lang].collection;

  const filteredDresses =
    activeFilter === 'all'
      ? DRESS_COLLECTION
      : DRESS_COLLECTION.filter((d) => d.category === activeFilter);

  const openLightbox = (dress: BridalDress) => {
    const idx = DRESS_COLLECTION.findIndex((item) => item.id === dress.id);
    setLightboxIndex(idx >= 0 ? idx : 0);
  };

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null);
  }, []);

  const showPrev = useCallback(() => {
    setLightboxIndex((prev) =>
      prev === null ? null : (prev - 1 + DRESS_COLLECTION.length) % DRESS_COLLECTION.length
    );
  }, []);

  const showNext = useCallback(() => {
    setLightboxIndex((prev) =>
      prev === null ? null : (prev + 1) % DRESS_COLLECTION.length
    );
  }, []);

  useEffect(() => {
    if (lightboxIndex === null) return;
    document.body.style.overflow = 'hidden';

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') {
        if (lang === 'he') showPrev();
        else showNext();
      }
      if (e.key === 'ArrowLeft') {
        if (lang === 'he') showNext();
        else showPrev();
      }
    };

    window.addEventListener('keydown', handleKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKey);
    };
  }, [lightboxIndex, lang, closeLightbox, showNext, showPrev]);

  const activeDress = lightboxIndex !== null ? DRESS_COLLECTION[lightboxIndex] : null;

  return (
    <section
      id="collection"
      className="bg-[#F3EDE3] text-[#16211B] py-20 sm:py-28 lg:py-36 border-t border-[#16211B]/8"
    >
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Magazine Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-12 border-b border-[#16211B]/12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-3"
          >
            <p className="text-xs tracking-[0.2em] text-[#6E7B58] font-medium">
              {t.kicker}
            </p>
            <h2 className="font-serif text-[clamp(2.5rem,5vw,4.25rem)] leading-none tracking-[0.06em] text-[#11281E]">
              {t.title}
            </h2>
            <p className="font-serif text-xl sm:text-2xl text-[#16211B]/80 italic pt-1">
              {t.subtitle}
            </p>
          </motion.div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <button
              type="button"
              onClick={() => {
                if (activeFilter !== 'all') {
                  setActiveFilter('all');
                } else {
                  setLightboxIndex(0);
                }
              }}
              className="inline-flex items-center justify-center min-h-[44px] px-7 py-3 bg-[#11281E] text-[#FAF7F2] text-xs sm:text-sm tracking-[0.14em] hover:bg-[#8D6B34] transition-colors duration-200 whitespace-nowrap shrink-0 cursor-pointer"
            >
              {t.cta}
            </button>
          </div>
        </div>

        {/* Interactive Style Filter Tabs */}
        <div
          role="tablist"
          aria-label={lang === 'he' ? 'סינון סגנונות שמלות' : 'Filter bridal silhouettes'}
          className="flex items-center gap-2 overflow-x-auto py-6 mb-6 scrollbar-none"
        >
          {t.filters.map((filter) => {
            const isActive = activeFilter === filter.id;
            return (
              <button
                key={filter.id}
                role="tab"
                type="button"
                aria-selected={isActive}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-4 py-2 text-xs sm:text-sm whitespace-nowrap shrink-0 transition-all duration-200 cursor-pointer border ${
                  isActive
                    ? 'bg-[#11281E] text-[#FAF7F2] border-[#11281E]'
                    : 'bg-transparent text-[#16211B]/75 border-[#16211B]/15 hover:border-[#11281E]/50 hover:text-[#11281E]'
                }`}
              >
                {filter.label}
              </button>
            );
          })}
        </div>

        {/* Asymmetric Editorial Magazine Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14 lg:gap-y-20">
          {filteredDresses.map((dress, index) => {
            const staggeredOffset =
              activeFilter === 'all' && index % 3 === 1 ? 'lg:translate-y-10' : '';

            return (
              <motion.article
                key={dress.id}
                layout
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.7, delay: (index % 3) * 0.08 }}
                className={`group flex flex-col ${staggeredOffset}`}
              >
                <button
                  type="button"
                  onClick={() => openLightbox(dress)}
                  aria-label={`${dress.name} — ${t.viewFull}`}
                  className="relative w-full text-start cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#11281E]"
                >
                  <div className="relative overflow-hidden bg-[#E5DDD0]">
                    <EditorialImage
                      src={dress.image}
                      alt={dress.alt[lang]}
                      className="aspect-[3/4] w-full"
                      imgClassName="group-hover:scale-105"
                    />

                    {/* Subtle Editorial Hover Scrim + Expand Cue */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B1B14]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-5">
                      <span className="text-xs tracking-[0.18em] text-[#FAF7F2] font-light">
                        {t.viewFull}
                      </span>
                      <span className="w-9 h-9 rounded-full bg-[#FAF7F2]/90 text-[#11281E] flex items-center justify-center">
                        <Maximize2 className="w-4 h-4 stroke-[1.5]" />
                      </span>
                    </div>
                  </div>
                </button>

                {/* Unboxed Editorial Typography Caption */}
                <div className="pt-5 space-y-2">
                  <div className="flex items-baseline justify-between gap-4 border-b border-[#16211B]/12 pb-2.5">
                    <h3 className="font-serif text-2xl sm:text-[26px] tracking-[0.12em] text-[#11281E]">
                      {dress.name}
                    </h3>
                    <span className="text-xs tracking-wider text-[#8D6B34] font-medium whitespace-nowrap">
                      {dress.styleLabel[lang]}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-xs text-[#6E7B58] pt-0.5">
                    <span>{dress.collectionName[lang]}</span>
                    <span aria-hidden="true">·</span>
                    <span>{dress.fabricNote[lang]}</span>
                  </div>

                  <p className="text-sm leading-relaxed text-[#16211B]/80 pt-1">
                    {dress.description[lang]}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>

      {/* Fullscreen Editorial Lightbox Modal */}
      <AnimatePresence>
        {activeDress && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            role="dialog"
            aria-modal="true"
            aria-label={activeDress.name}
            className="fixed inset-0 z-50 bg-[#0B1B14]/95 backdrop-blur-md text-[#FAF7F2] flex items-center justify-center p-4 sm:p-8"
            onClick={closeLightbox}
          >
            <div
              className="relative w-full max-w-5xl bg-[#11281E] border border-[#FAF7F2]/15 grid grid-cols-1 md:grid-cols-12 overflow-hidden max-h-[92vh]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={closeLightbox}
                aria-label={lang === 'he' ? 'סגירה' : 'Close'}
                className="absolute top-4 end-4 z-20 w-11 h-11 rounded-full bg-[#0B1B14]/80 text-[#FAF7F2] border border-[#FAF7F2]/25 hover:border-[#C5A267] flex items-center justify-center transition-colors cursor-pointer"
              >
                <X className="w-5 h-5 stroke-[1.5]" />
              </button>

              {/* Full Portrait Image */}
              <div className="md:col-span-7 relative bg-[#0B1B14] max-h-[55vh] md:max-h-[85vh]">
                <img
                  src={activeDress.image}
                  alt={activeDress.alt[lang]}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top max-h-[55vh] md:max-h-[85vh]"
                />
              </div>

              {/* Editorial Gown Details */}
              <div className="md:col-span-5 p-6 sm:p-10 flex flex-col justify-between gap-6 overflow-y-auto">
                <div className="space-y-5">
                  <p className="text-xs tracking-[0.2em] text-[#C5A267]">
                    {activeDress.collectionName[lang]}
                  </p>
                  <h3 className="font-serif text-4xl sm:text-5xl tracking-[0.12em] text-[#FAF7F2]">
                    {activeDress.name}
                  </h3>
                  <div className="flex items-center gap-2 text-xs text-[#EADAD5]/80 border-y border-[#FAF7F2]/15 py-3">
                    <span>{activeDress.styleLabel[lang]}</span>
                    <span aria-hidden="true">·</span>
                    <span>{activeDress.fabricNote[lang]}</span>
                  </div>
                  <p className="text-sm sm:text-base leading-relaxed text-[#FAF7F2]/85">
                    {activeDress.description[lang]}
                  </p>
                </div>

                <div className="space-y-4 pt-4">
                  <button
                    type="button"
                    onClick={() => {
                      const selectedName = activeDress.name;
                      closeLightbox();
                      onBookDress(selectedName);
                    }}
                    className="w-full py-3.5 px-6 bg-[#C5A267] text-[#0B1B14] text-sm font-medium tracking-wider hover:bg-[#D8BA85] transition-colors cursor-pointer"
                  >
                    {t.bookThisDress}
                  </button>

                  {/* Lightbox Prev / Next Navigation */}
                  <div className="flex items-center justify-between pt-2 border-t border-[#FAF7F2]/10">
                    <button
                      type="button"
                      onClick={showPrev}
                      aria-label={lang === 'he' ? 'השמלה הקודמת' : 'Previous gown'}
                      className="inline-flex items-center gap-1.5 text-xs tracking-wider text-[#FAF7F2]/75 hover:text-[#C5A267] py-2 cursor-pointer"
                    >
                      {lang === 'he' ? (
                        <ChevronRight className="w-4 h-4" />
                      ) : (
                        <ChevronLeft className="w-4 h-4" />
                      )}
                      <span>{lang === 'he' ? 'הקודמת' : 'Prev'}</span>
                    </button>

                    <span className="text-xs tabular-nums text-[#FAF7F2]/55">
                      {(lightboxIndex ?? 0) + 1} / {DRESS_COLLECTION.length}
                    </span>

                    <button
                      type="button"
                      onClick={showNext}
                      aria-label={lang === 'he' ? 'השמלה הבאה' : 'Next gown'}
                      className="inline-flex items-center gap-1.5 text-xs tracking-wider text-[#FAF7F2]/75 hover:text-[#C5A267] py-2 cursor-pointer"
                    >
                      <span>{lang === 'he' ? 'הבאה' : 'Next'}</span>
                      {lang === 'he' ? (
                        <ChevronLeft className="w-4 h-4" />
                      ) : (
                        <ChevronRight className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
