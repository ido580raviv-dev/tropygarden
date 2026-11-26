import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { COPY, Language } from '../data/salonData';

interface NavbarProps {
  lang: Language;
  onToggleLang: () => void;
  onOpenBooking: () => void;
}

export function Navbar({ lang, onToggleLang, onOpenBooking }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const t = COPY[lang].nav;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 48);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const navLinks = [
    { href: '#home', label: t.home },
    { href: '#collection', label: t.collection },
    { href: '#story', label: t.story },
    { href: '#experience', label: t.experience },
    { href: '#contact', label: t.contact },
  ];

  const handleNavClick = () => {
    setMobileOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          scrolled
            ? 'bg-[#FAF7F2]/95 backdrop-blur-md text-[#16211B] border-b border-[#16211B]/10 shadow-xs'
            : 'bg-gradient-to-b from-[#0B1B14]/65 to-transparent text-[#FAF7F2]'
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 h-16 lg:h-20 flex items-center justify-between gap-8">
          {/* Zone 1: Single-element Brand Wordmark */}
          <a
            href="#home"
            className="font-serif text-xl sm:text-2xl tracking-[0.18em] font-medium whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C5A267]"
          >
            TROPY GARDEN
          </a>

          {/* Zone 2: 5 concise single-line nav links */}
          <nav
            aria-label={lang === 'he' ? 'ניווט ראשי' : 'Primary Navigation'}
            className="hidden lg:flex items-center gap-8 text-sm font-normal tracking-wide"
          >
            {navLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`relative py-1 whitespace-nowrap shrink-0 transition-colors duration-200 after:content-[''] after:absolute after:bottom-0 after:inset-x-0 after:h-[1px] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-200 ${
                  scrolled
                    ? 'text-[#16211B]/80 hover:text-[#11281E] after:bg-[#8D6B34]'
                    : 'text-[#FAF7F2]/90 hover:text-white after:bg-[#C5A267]'
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: 1 Primary Action (Desktop) / Hamburger (Mobile) */}
          <div className="flex items-center shrink-0">
            <button
              type="button"
              onClick={onOpenBooking}
              className={`hidden lg:inline-flex items-center justify-center px-6 py-2.5 text-xs tracking-[0.12em] font-medium whitespace-nowrap shrink-0 transition-all duration-200 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C5A267] ${
                scrolled
                  ? 'bg-[#11281E] text-[#FAF7F2] hover:bg-[#1A3B2D]'
                  : 'bg-[#FAF7F2] text-[#11281E] hover:bg-[#EFE8DC]'
              }`}
            >
              {t.book}
            </button>

            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              aria-label={lang === 'he' ? 'פתיחת תפריט' : 'Open menu'}
              aria-expanded={mobileOpen}
              className="lg:hidden inline-flex items-center justify-center w-11 h-11 rounded-full transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-[#C5A267]"
            >
              <Menu className="w-6 h-6 stroke-[1.5]" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Editorial Navigation Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 bg-[#11281E] text-[#FAF7F2] flex flex-col justify-between p-6 sm:p-10 lg:hidden"
          >
            <div className="flex items-center justify-between">
              <span className="font-serif text-xl tracking-[0.18em]">
                TROPY GARDEN
              </span>
              <button
                type="button"
                onClick={() => setMobileOpen(false)}
                aria-label={lang === 'he' ? 'סגירת תפריט' : 'Close menu'}
                className="w-11 h-11 inline-flex items-center justify-center rounded-full border border-[#FAF7F2]/25 text-[#FAF7F2] hover:bg-[#FAF7F2]/10 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5 stroke-[1.5]" />
              </button>
            </div>

            <nav className="flex flex-col gap-5 my-auto py-8">
              {navLinks.map((item, idx) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={handleNavClick}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 + idx * 0.05, duration: 0.35 }}
                  className="font-serif text-3xl sm:text-4xl text-[#FAF7F2] hover:text-[#C5A267] transition-colors py-1 border-b border-[#FAF7F2]/10"
                >
                  {item.label}
                </motion.a>
              ))}
            </nav>

            <div className="flex flex-col gap-4 pt-6 border-t border-[#FAF7F2]/15">
              <button
                type="button"
                onClick={() => {
                  setMobileOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-3.5 px-6 bg-[#C5A267] text-[#11281E] font-medium text-sm tracking-widest hover:bg-[#D5B57D] transition-colors cursor-pointer"
              >
                {t.book}
              </button>

              <div className="flex items-center justify-between text-xs text-[#FAF7F2]/75 pt-2">
                <span>WHERE EVERY BRIDE BLOOMS.</span>
                <button
                  type="button"
                  onClick={() => {
                    onToggleLang();
                    setMobileOpen(false);
                  }}
                  className="px-3 py-1.5 border border-[#FAF7F2]/30 hover:border-[#C5A267] text-[#FAF7F2] transition-colors cursor-pointer"
                >
                  {lang === 'he' ? 'English' : 'עברית'}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
