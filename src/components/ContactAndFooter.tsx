import { useState, FormEvent } from 'react';
import { motion } from 'motion/react';
import {
  Phone,
  MessageCircle,
  MapPin,
  Instagram,
  Clock,
  ArrowUp,
  Check,
} from 'lucide-react';
import {
  buildWhatsAppUrl,
  COPY,
  DRESS_COLLECTION,
  Language,
  SALON_CONTACT,
} from '../data/salonData';
import { OrchidBlossomLineArt, TropicalLeafLineArt } from './BotanicalOrnament';

interface ContactAndFooterProps {
  lang: Language;
  onToggleLang: () => void;
}

export function ContactAndFooter({ lang, onToggleLang }: ContactAndFooterProps) {
  const t = COPY[lang].contact;
  const tFooter = COPY[lang].footer;
  const tNav = COPY[lang].nav;

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [weddingDate, setWeddingDate] = useState('');
  const [selectedStyle, setSelectedStyle] = useState(DRESS_COLLECTION[0].name);
  const [formError, setFormError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const directWhatsAppUrl = buildWhatsAppUrl(COPY[lang].ctaSection.whatsappPrefill);

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    const cleanedPhone = phone.replace(/[^\d+]/g, '');
    if (name.trim().length < 2 || cleanedPhone.length < 7) {
      setFormError(t.errorRequired);
      return;
    }

    setFormError('');
    setSubmitted(true);

    const msg =
      lang === 'he'
        ? `שלום Tropy Garden! שמי ${name.trim()}, טלפון: ${phone.trim()}.${
            weddingDate ? ` תאריך חתונה משוער: ${weddingDate}.` : ''
          } אשמח לתאם פגישת מדידה (סגנון שאהבתי: ${selectedStyle}).`
        : `Hello Tropy Garden! My name is ${name.trim()}, phone: ${phone.trim()}.${
            weddingDate ? ` Estimated wedding date: ${weddingDate}.` : ''
          } I would love to schedule a fitting (style of interest: ${selectedStyle}).`;

    window.open(buildWhatsAppUrl(msg), '_blank', 'noopener,noreferrer');
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Section 9: Minimalist Contact & Private Booking */}
      <section
        id="contact"
        className="bg-[#FAF7F2] text-[#16211B] py-20 sm:py-28 lg:py-36"
      >
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left / Start: Salon Details & Interactive Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.75 }}
              className="lg:col-span-6 space-y-8"
            >
              <div className="space-y-3">
                <p className="text-xs tracking-[0.2em] text-[#6E7B58] font-medium">
                  {t.kicker}
                </p>
                <h2 className="font-serif text-[clamp(2.1rem,4vw,3.5rem)] leading-[1.08] text-[#11281E]">
                  {t.title}
                </h2>
                <p className="text-sm sm:text-base text-[#16211B]/75 max-w-[48ch]">
                  {t.subtitle}
                </p>
              </div>

              {/* Clean Hairline Contact Directory */}
              <dl className="divide-y divide-[#16211B]/12 border-y border-[#16211B]/12">
                <div className="py-4 flex items-center justify-between gap-4">
                  <dt className="flex items-center gap-3 text-xs tracking-wider text-[#6E7B58]">
                    <Phone className="w-4 h-4 stroke-[1.5] text-[#8D6B34]" />
                    <span>{t.phoneLabel}</span>
                  </dt>
                  <dd className="text-sm sm:text-base font-medium text-[#11281E] tabular-nums">
                    <a
                      href={SALON_CONTACT.phoneHref}
                      className="hover:text-[#8D6B34] transition-colors"
                      dir="ltr"
                    >
                      {SALON_CONTACT.phoneDisplay}
                    </a>
                  </dd>
                </div>

                <div className="py-4 flex items-center justify-between gap-4">
                  <dt className="flex items-center gap-3 text-xs tracking-wider text-[#6E7B58]">
                    <MessageCircle className="w-4 h-4 stroke-[1.5] text-[#8D6B34]" />
                    <span>{t.whatsappLabel}</span>
                  </dt>
                  <dd className="text-sm sm:text-base font-medium text-[#11281E] tabular-nums">
                    <a
                      href={directWhatsAppUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#8D6B34] transition-colors"
                      dir="ltr"
                    >
                      {SALON_CONTACT.whatsappDisplay}
                    </a>
                  </dd>
                </div>

                <div className="py-4 flex items-center justify-between gap-4">
                  <dt className="flex items-center gap-3 text-xs tracking-wider text-[#6E7B58] shrink-0">
                    <MapPin className="w-4 h-4 stroke-[1.5] text-[#8D6B34]" />
                    <span>{t.addressLabel}</span>
                  </dt>
                  <dd className="text-sm sm:text-base text-[#11281E] text-end">
                    {SALON_CONTACT.address[lang]}
                  </dd>
                </div>

                <div className="py-4 flex items-center justify-between gap-4">
                  <dt className="flex items-center gap-3 text-xs tracking-wider text-[#6E7B58]">
                    <Instagram className="w-4 h-4 stroke-[1.5] text-[#8D6B34]" />
                    <span>{t.instagramLabel}</span>
                  </dt>
                  <dd className="text-sm sm:text-base text-[#11281E]">
                    <a
                      href={SALON_CONTACT.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#8D6B34] transition-colors"
                      dir="ltr"
                    >
                      {SALON_CONTACT.instagramHandle}
                    </a>
                  </dd>
                </div>

                <div className="py-4 flex items-center justify-between gap-4">
                  <dt className="flex items-center gap-3 text-xs tracking-wider text-[#6E7B58] shrink-0">
                    <Clock className="w-4 h-4 stroke-[1.5] text-[#8D6B34]" />
                    <span>{t.hoursLabel}</span>
                  </dt>
                  <dd className="text-sm text-[#11281E] text-end">
                    {SALON_CONTACT.hours[lang]}
                  </dd>
                </div>
              </dl>

              {/* 4 Functional Interactive Action Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <a
                  href={directWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 min-h-[46px] px-5 py-3 bg-[#11281E] text-[#FAF7F2] text-xs sm:text-sm tracking-wider hover:bg-[#8D6B34] transition-colors"
                >
                  <MessageCircle className="w-4 h-4 stroke-[1.5]" />
                  <span>{t.actions.whatsapp}</span>
                </a>

                <a
                  href={SALON_CONTACT.phoneHref}
                  className="inline-flex items-center justify-center gap-2.5 min-h-[46px] px-5 py-3 border border-[#11281E]/25 text-[#11281E] text-xs sm:text-sm tracking-wider hover:border-[#11281E] hover:bg-[#F3EDE3] transition-colors"
                >
                  <Phone className="w-4 h-4 stroke-[1.5]" />
                  <span>{t.actions.call}</span>
                </a>

                <a
                  href={SALON_CONTACT.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 min-h-[46px] px-5 py-3 border border-[#11281E]/25 text-[#11281E] text-xs sm:text-sm tracking-wider hover:border-[#11281E] hover:bg-[#F3EDE3] transition-colors"
                >
                  <MapPin className="w-4 h-4 stroke-[1.5]" />
                  <span>{t.actions.maps}</span>
                </a>

                <a
                  href={SALON_CONTACT.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 min-h-[46px] px-5 py-3 border border-[#11281E]/25 text-[#11281E] text-xs sm:text-sm tracking-wider hover:border-[#11281E] hover:bg-[#F3EDE3] transition-colors"
                >
                  <Instagram className="w-4 h-4 stroke-[1.5]" />
                  <span>{t.actions.instagram}</span>
                </a>
              </div>
            </motion.div>

            {/* Right / End: Minimalist Validated Private Fitting Form */}
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="lg:col-span-6 bg-[#F3EDE3] border border-[#16211B]/12 p-7 sm:p-10 lg:p-12"
            >
              <div className="space-y-2 mb-8">
                <h3 className="font-serif text-2xl sm:text-3xl text-[#11281E]">
                  {t.formTitle}
                </h3>
                <p className="text-sm text-[#16211B]/75">{t.formSubtitle}</p>
              </div>

              {submitted ? (
                <div className="py-10 px-6 bg-[#FAF7F2] border border-[#C5A267]/45 text-center space-y-4">
                  <div className="w-11 h-11 rounded-full bg-[#11281E] text-[#C5A267] flex items-center justify-center mx-auto">
                    <Check className="w-5 h-5 stroke-[1.75]" />
                  </div>
                  <h4 className="font-serif text-2xl text-[#11281E]">{t.successTitle}</h4>
                  <p className="text-sm text-[#16211B]/80 max-w-md mx-auto">
                    {t.successBody}
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setName('');
                      setPhone('');
                      setWeddingDate('');
                    }}
                    className="text-xs underline underline-offset-4 text-[#8D6B34] hover:text-[#11281E] cursor-pointer pt-2"
                  >
                    {lang === 'he' ? 'שליחת פנייה נוספת' : 'Send another inquiry'}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} noValidate className="space-y-5">
                  <div>
                    <label htmlFor="contact-name" className="sr-only">
                      {t.namePlaceholder}
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder={t.namePlaceholder}
                      className="w-full min-h-[48px] px-4 py-3 bg-[#FAF7F2] border border-[#16211B]/20 text-sm text-[#11281E] placeholder:text-[#6E7B58]/70 focus:outline-none focus:border-[#11281E] transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-phone" className="sr-only">
                      {t.phonePlaceholder}
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder={t.phonePlaceholder}
                      className="w-full min-h-[48px] px-4 py-3 bg-[#FAF7F2] border border-[#16211B]/20 text-sm text-[#11281E] placeholder:text-[#6E7B58]/70 focus:outline-none focus:border-[#11281E] transition-colors"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-date" className="sr-only">
                        {t.datePlaceholder}
                      </label>
                      <input
                        id="contact-date"
                        type="text"
                        value={weddingDate}
                        onChange={(e) => setWeddingDate(e.target.value)}
                        placeholder={t.datePlaceholder}
                        className="w-full min-h-[48px] px-4 py-3 bg-[#FAF7F2] border border-[#16211B]/20 text-sm text-[#11281E] placeholder:text-[#6E7B58]/70 focus:outline-none focus:border-[#11281E] transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="contact-style" className="sr-only">
                        {t.styleLabel}
                      </label>
                      <select
                        id="contact-style"
                        value={selectedStyle}
                        onChange={(e) => setSelectedStyle(e.target.value)}
                        className="w-full min-h-[48px] px-4 py-3 bg-[#FAF7F2] border border-[#16211B]/20 text-sm text-[#11281E] focus:outline-none focus:border-[#11281E] transition-colors"
                      >
                        {DRESS_COLLECTION.map((dress) => (
                          <option key={dress.id} value={dress.name}>
                            {dress.name} — {dress.styleLabel[lang]}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {formError && (
                    <p role="alert" className="text-xs text-[#9E2A2B] font-medium">
                      {formError}
                    </p>
                  )}

                  <button
                    type="submit"
                    className="w-full min-h-[50px] px-6 py-3.5 bg-[#11281E] text-[#FAF7F2] text-sm font-medium tracking-[0.12em] hover:bg-[#8D6B34] transition-colors cursor-pointer"
                  >
                    {t.submitButton}
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 10: Deep Tropical Green Luxury Footer */}
      <footer className="relative bg-[#11281E] text-[#FAF7F2] pt-20 pb-12 overflow-hidden">
        {/* Minimalist Botanical Line Art */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-8 start-6 w-40 text-[#C5A267]/15"
        >
          <TropicalLeafLineArt className="w-full h-auto" />
        </div>
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-10 end-10 w-28 text-[#FAF7F2]/10 hidden sm:block"
        >
          <OrchidBlossomLineArt className="w-full h-auto" />
        </div>

        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
          <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-10 pb-14 border-b border-[#FAF7F2]/15">
            <div className="space-y-4">
              <a
                href="#home"
                className="font-serif text-3xl sm:text-4xl tracking-[0.2em] text-[#FAF7F2]"
              >
                TROPY GARDEN
              </a>
              <p className="text-xs sm:text-sm tracking-[0.26em] text-[#C5A267]">
                {tFooter.tagline}
              </p>
            </div>

            <nav
              aria-label={lang === 'he' ? 'קישורי תחתית' : 'Footer Navigation'}
              className="flex flex-wrap items-center gap-x-7 gap-y-3 text-sm text-[#EADAD5]/85"
            >
              <a href="#home" className="hover:text-[#C5A267] transition-colors whitespace-nowrap">
                {tNav.home}
              </a>
              <a href="#collection" className="hover:text-[#C5A267] transition-colors whitespace-nowrap">
                {tNav.collection}
              </a>
              <a href="#story" className="hover:text-[#C5A267] transition-colors whitespace-nowrap">
                {tNav.story}
              </a>
              <a href="#experience" className="hover:text-[#C5A267] transition-colors whitespace-nowrap">
                {tNav.experience}
              </a>
              <a href="#contact" className="hover:text-[#C5A267] transition-colors whitespace-nowrap">
                {tNav.contact}
              </a>
              <a
                href={SALON_CONTACT.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#C5A267] transition-colors whitespace-nowrap"
              >
                Instagram
              </a>
              <a
                href={directWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#C5A267] transition-colors whitespace-nowrap"
              >
                WhatsApp
              </a>
            </nav>
          </div>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#EADAD5]/70">
            <p>{tFooter.copyright}</p>

            <div className="flex items-center gap-6">
              <button
                type="button"
                onClick={onToggleLang}
                className="hover:text-[#C5A267] transition-colors cursor-pointer py-1"
              >
                {lang === 'he' ? 'English Version' : 'גרסה בעברית'}
              </button>

              <button
                type="button"
                onClick={scrollToTop}
                className="inline-flex items-center gap-2 text-[#FAF7F2] hover:text-[#C5A267] transition-colors cursor-pointer py-1"
              >
                <span>{tFooter.backToTop}</span>
                <ArrowUp className="w-3.5 h-3.5 stroke-[1.5]" />
              </button>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
