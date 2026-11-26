import { useState, useEffect, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, MessageCircle } from 'lucide-react';
import {
  buildWhatsAppUrl,
  COPY,
  DRESS_COLLECTION,
  Language,
} from '../data/salonData';

interface AppointmentModalProps {
  isOpen: boolean;
  lang: Language;
  initialDress?: string;
  onClose: () => void;
}

export function AppointmentModal({
  isOpen,
  lang,
  initialDress,
  onClose,
}: AppointmentModalProps) {
  const [brideName, setBrideName] = useState('');
  const [phone, setPhone] = useState('');
  const [dressChoice, setDressChoice] = useState(
    initialDress || DRESS_COLLECTION[0].name
  );
  const [error, setError] = useState('');

  useEffect(() => {
    if (initialDress) {
      setDressChoice(initialDress);
    }
  }, [initialDress]);

  useEffect(() => {
    if (!isOpen) return;
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleEsc);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleEsc);
    };
  }, [isOpen, onClose]);

  const t = COPY[lang].contact;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const cleanedPhone = phone.replace(/[^\d+]/g, '');
    if (brideName.trim().length < 2 || cleanedPhone.length < 7) {
      setError(t.errorRequired);
      return;
    }
    setError('');
    const message =
      lang === 'he'
        ? `היי Tropy Garden! שמי ${brideName.trim()} (${phone.trim()}). אשמח לקבוע פגישת מדידה פרטית, והתאהבתי בשמלת ${dressChoice}.`
        : `Hello Tropy Garden! My name is ${brideName.trim()} (${phone.trim()}). I would love to schedule a private bridal fitting for the ${dressChoice} gown.`;

    window.open(buildWhatsAppUrl(message), '_blank', 'noopener,noreferrer');
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          role="dialog"
          aria-modal="true"
          aria-label={COPY[lang].nav.book}
          className="fixed inset-0 z-50 bg-[#0B1B14]/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 18, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.98 }}
            transition={{ duration: 0.25 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-lg bg-[#FAF7F2] text-[#16211B] border border-[#C5A267]/35 p-7 sm:p-10 shadow-2xl"
          >
            <button
              type="button"
              onClick={onClose}
              aria-label={lang === 'he' ? 'סגירה' : 'Close'}
              className="absolute top-4 end-4 w-10 h-10 rounded-full flex items-center justify-center text-[#16211B]/70 hover:text-[#11281E] hover:bg-[#EFE8DC] transition-colors cursor-pointer"
            >
              <X className="w-5 h-5 stroke-[1.5]" />
            </button>

            <div className="space-y-2 mb-7 pe-8">
              <p className="text-xs tracking-[0.2em] text-[#8D6B34]">
                TROPY GARDEN · PRIVATE SUITE
              </p>
              <h3 className="font-serif text-3xl text-[#11281E]">
                {COPY[lang].nav.book}
              </h3>
              <p className="text-sm text-[#16211B]/75">{t.formSubtitle}</p>
            </div>

            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              <input
                type="text"
                required
                value={brideName}
                onChange={(e) => setBrideName(e.target.value)}
                placeholder={t.namePlaceholder}
                className="w-full min-h-[48px] px-4 py-3 bg-white border border-[#16211B]/20 text-sm text-[#11281E] placeholder:text-[#6E7B58]/70 focus:outline-none focus:border-[#11281E]"
              />

              <input
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder={t.phonePlaceholder}
                className="w-full min-h-[48px] px-4 py-3 bg-white border border-[#16211B]/20 text-sm text-[#11281E] placeholder:text-[#6E7B58]/70 focus:outline-none focus:border-[#11281E]"
              />

              <div>
                <label
                  htmlFor="modal-dress-select"
                  className="block text-xs text-[#6E7B58] mb-1.5"
                >
                  {t.styleLabel}
                </label>
                <select
                  id="modal-dress-select"
                  value={dressChoice}
                  onChange={(e) => setDressChoice(e.target.value)}
                  className="w-full min-h-[48px] px-4 py-3 bg-white border border-[#16211B]/20 text-sm text-[#11281E] focus:outline-none focus:border-[#11281E]"
                >
                  {DRESS_COLLECTION.map((dress) => (
                    <option key={dress.id} value={dress.name}>
                      {dress.name} — {dress.styleLabel[lang]}
                    </option>
                  ))}
                </select>
              </div>

              {error && (
                <p role="alert" className="text-xs text-[#9E2A2B] font-medium">
                  {error}
                </p>
              )}

              <button
                type="submit"
                className="w-full min-h-[50px] px-6 py-3.5 bg-[#11281E] text-[#FAF7F2] text-sm font-medium tracking-wider hover:bg-[#8D6B34] transition-colors inline-flex items-center justify-center gap-2.5 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 stroke-[1.5]" />
                <span>{t.submitButton}</span>
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
