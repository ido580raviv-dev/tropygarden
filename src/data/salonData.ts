export type Language = 'he' | 'en';

export type DressCategory =
  | 'all'
  | 'classic'
  | 'lace'
  | 'boho'
  | 'dramatic'
  | 'minimalist'
  | 'modern';

export interface BridalDress {
  id: string;
  name: string;
  collectionName: {
    he: string;
    en: string;
  };
  category: Exclude<DressCategory, 'all'>;
  styleLabel: {
    he: string;
    en: string;
  };
  fabricNote: {
    he: string;
    en: string;
  };
  description: {
    he: string;
    en: string;
  };
  image: string;
  alt: {
    he: string;
    en: string;
  };
}

export interface TestimonialItem {
  id: string;
  quote: {
    he: string;
    en: string;
  };
  label: {
    he: string;
    en: string;
  };
  seasonNote: {
    he: string;
    en: string;
  };
  image: string;
}

/**
 * Editable Salon Contact Details
 * Replace these placeholder values with the real salon phone, WhatsApp number, address, and Instagram handle.
 */
export const SALON_CONTACT = {
  brandName: 'TROPY GARDEN',
  phoneDisplay: '03-000-0000',
  phoneHref: 'tel:+97230000000',
  whatsappNumber: '972500000000', // International format without +
  whatsappDisplay: '050-000-0000',
  instagramHandle: '@tropygarden.bridal',
  instagramUrl: 'https://www.instagram.com/',
  address: {
    he: 'מתחם המעצבים, תל אביב (כתובת הסלון לעדכון)',
    en: 'Design District, Tel Aviv (Salon Address Placeholder)',
  },
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Tel+Aviv+Israel',
  hours: {
    he: 'א׳–ה׳ 10:00–19:00 · ו׳ 09:30–14:00 (בתיאום מראש)',
    en: 'Sun–Thu 10:00–19:00 · Fri 09:30–14:00 (By Appointment)',
  },
};

export function buildWhatsAppUrl(message: string): string {
  return `https://wa.me/${SALON_CONTACT.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const IMAGES = {
  hero: '/src/assets/images/hero_bridal_garden_1795680616363.jpg',
  storyAtelier: '/src/assets/images/story_atelier_detail_1795680619805.jpg',
  gardenBotanical: '/src/assets/images/garden_tropical_botanical_1795680621487.jpg',
  ctaBride: '/src/assets/images/cta_dream_bride_1795680621505.jpg',
  dressClassic: '/src/assets/images/dress_classic_silk_1795680617451.jpg',
  dressLace: '/src/assets/images/dress_delicate_lace_1795680617945.jpg',
  dressBoho: '/src/assets/images/dress_boho_ethereal_1795680617746.jpg',
  dressDramatic: '/src/assets/images/dress_dramatic_ballgown_1795680618537.jpg',
  dressMinimalist: '/src/assets/images/dress_minimalist_slip_1795680619080.jpg',
  dressModern: '/src/assets/images/dress_modern_sculptural_1795680619343.jpg',
};

export const DRESS_COLLECTION: BridalDress[] = [
  {
    id: 'aura-classic',
    name: 'AURA',
    collectionName: {
      he: 'קולקציית Timeless Silk',
      en: 'Timeless Silk Collection',
    },
    category: 'classic',
    styleLabel: {
      he: 'קלאסית ונקייה',
      en: 'Classic & Clean',
    },
    fabricNote: {
      he: 'משי מיקאדו איטלקי · קו נקי',
      en: 'Italian Silk Mikado · Sculpted Line',
    },
    description: {
      he: 'גזרה אצילית ונקייה ממשי מיקאדו עשיר, עם מחשוף לב אדריכלי ונפילה מדויקת שמחמיאה לכל תנועה.',
      en: 'An aristocratic clean-lined gown in rich silk mikado with an architectural sweetheart neckline and fluid drape.',
    },
    image: IMAGES.dressClassic,
    alt: {
      he: 'שמלת כלה קלאסית ונקייה ממשי שנהב לצד סחלבים לבנים',
      en: 'Classic clean ivory silk bridal gown beside white orchids',
    },
  },
  {
    id: 'camellia-lace',
    name: 'CAMELLIA',
    collectionName: {
      he: 'קולקציית Botanical Lace',
      en: 'Botanical Lace Collection',
    },
    category: 'lace',
    styleLabel: {
      he: 'תחרה עדינה',
      en: 'Delicate Lace',
    },
    fabricNote: {
      he: 'תחרת שאנטילי צרפתית · רקמת עלים',
      en: 'French Chantilly Lace · Botanical Embroidery',
    },
    description: {
      he: 'שמלת תחרה רומנטית עם רקמת פרחים בעבודת יד ושרוולים שקופים המלטפים את העור ברכות של בוקר.',
      en: 'Romantic French lace gown featuring hand-sewn botanical motifs and gossamer sheer sleeves.',
    },
    image: IMAGES.dressLace,
    alt: {
      he: 'שמלת כלה עם תחרה עדינה ורקמה בוטנית בחממה מוארת',
      en: 'Delicate Chantilly lace wedding dress in sunlit glass conservatory',
    },
  },
  {
    id: 'fleur-boho',
    name: 'FLEUR',
    collectionName: {
      he: 'קולקציית Wild Bloom',
      en: 'Wild Bloom Collection',
    },
    category: 'boho',
    styleLabel: {
      he: 'בוהו טבעי',
      en: 'Boho Ethereal',
    },
    fabricNote: {
      he: 'שיפון משי אוורירי · שרוולי פעמון',
      en: 'Airy Silk Chiffon · Bell Sleeves',
    },
    description: {
      he: 'חופשיות טבעית ותנועה רכה ברוח, בשילוב תחרות אורגניות שנועדו לכלה החולמת על גן פתוח ואור זהוב.',
      en: 'Effortless natural movement in flowing silk chiffon and organic lace made for golden garden ceremonies.',
    },
    image: IMAGES.dressBoho,
    alt: {
      he: 'שמלת כלה בסגנון בוהו משוחרר בלב גן טרופי',
      en: 'Ethereal bohemian bridal gown walking through tropical garden ferns',
    },
  },
  {
    id: 'imperial-volume',
    name: 'IMPERIAL',
    collectionName: {
      he: 'קולקציית Grand Orangery',
      en: 'Grand Orangery Collection',
    },
    category: 'dramatic',
    styleLabel: {
      he: 'דרמטית עם נפח',
      en: 'Dramatic Volume',
    },
    fabricNote: {
      he: 'אורגנזת משי בשכבות · שובל מלכותי',
      en: 'Layered Silk Organza · Cathedral Train',
    },
    description: {
      he: 'נוכחות בלתי נשכחת של נפח פיסולי ושכבות אורגנזה אווריריות שמרחפות כמו ענן קוטור.',
      en: 'Unforgettable couture presence with sculpted ruffles of weightless silk organza and sweeping train.',
    },
    image: IMAGES.dressDramatic,
    alt: {
      he: 'שמלת כלה דרמטית עם נפח מפוסל באורנזרי שטוף שמש',
      en: 'Dramatic voluminous silk organza ballgown in sunlit glass orangery',
    },
  },
  {
    id: 'solstice-minimal',
    name: 'SOLSTICE',
    collectionName: {
      he: 'קולקציית Pure Essence',
      en: 'Pure Essence Collection',
    },
    category: 'minimalist',
    styleLabel: {
      he: 'מינימליסטית',
      en: 'Minimalist Satin',
    },
    fabricNote: {
      he: 'סאטן משי בגוון שמפניה · גב נשפך',
      en: 'Champagne Bias-Cut Satin · Cowl Back',
    },
    description: {
      he: 'זוהר שקט של סאטן משי בגזרת אלכסון וגב פתוח ונשפך. יוקרה מדויקת שלא זקוקה לתוספות.',
      en: 'Quiet luminosity in bias-cut champagne silk satin with a fluid cowl back and pure lines.',
    },
    image: IMAGES.dressMinimalist,
    alt: {
      he: 'שמלת כלה מינימליסטית מסאטן משי עם גב פתוח',
      en: 'Minimalist champagne silk satin slip bridal gown with draped back',
    },
  },
  {
    id: 'sculpta-modern',
    name: 'SCULPTA',
    collectionName: {
      he: 'קולקציית Avant-Couture',
      en: 'Avant-Couture Collection',
    },
    category: 'modern',
    styleLabel: {
      he: 'מודרנית וייחודית',
      en: 'Modern Sculptural',
    },
    fabricNote: {
      he: 'דיגום אסימטרי · קפלים אדריכליים',
      en: 'Asymmetric Draping · Architectural Pleats',
    },
    description: {
      he: 'פרשנות עכשווית ונועזת לקוטור כלות, עם משחק גיאומטרי של קפלים, מחשוף אסימטרי ושסע נקי.',
      en: 'A contemporary couture silhouette with architectural pleating, asymmetric neckline, and poised slit.',
    },
    image: IMAGES.dressModern,
    alt: {
      he: 'שמלת כלה מודרנית בגזרה אדריכלית ייחודית לצד צללי דקל',
      en: 'Modern sculptural asymmetric wedding dress beside palm leaf shadows',
    },
  },
];

export const EXPERIENCE_STEPS = [
  {
    num: '01',
    icon: 'sparkles' as const,
    title: {
      he: 'פגישת ייעוץ אישית',
      en: 'Personal Consultation',
    },
    description: {
      he: 'שיחה נינוחה ומעמיקה להכרת החזון, סגנון האירוע והאווירה שאת מדמיינת.',
      en: 'An unhurried conversation to understand your vision, setting, and bridal aesthetic.',
    },
  },
  {
    num: '02',
    icon: 'compass' as const,
    title: {
      he: 'התאמה לסגנון ולאישיות שלך',
      en: 'Tailored to Your Essence',
    },
    description: {
      he: 'בחירת גזרות, בדים ותחרות שמדגישים את הנוכחות הטבעית שלך מבלי להשתלט עליה.',
      en: 'Curating silhouettes and textiles that celebrate your natural poise and individuality.',
    },
  },
  {
    num: '03',
    icon: 'lock' as const,
    title: 'חוויית מדידה פרטית ואינטימית',
      en: 'Private Intimate Fitting',
  },
  {
    num: '04',
    icon: 'heart' as const,
    title: 'ליווי מקצועי ואישי',
    en: 'Dedicated Styling Guidance',
  },
  {
    num: '05',
    icon: 'layers' as const,
    title: 'מגוון סגנונות ושמלות',
    en: 'Curated Couture Variety',
  },
  {
    num: '06',
    icon: 'feather' as const,
    title: 'תשומת לב לכל פרט קטן',
    en: 'Attention to Every Detail',
  },
];

export const EXPERIENCE_DESCRIPTIONS: Record<string, { he: string; en: string }> = {
  '01': {
    he: 'שיחה נינוחה ומעמיקה להכרת החזון, סגנון האירוע והתחושה שאת רוצה לשאת ברגע הגדול.',
    en: 'An unhurried conversation exploring your vision, venue light, and how you want to feel.',
  },
  '02': {
    he: 'התאמה מדויקת של גזרות, בדים ותחרות המבליטים את האישיות והנוכחות הטבעית שלך.',
    en: 'Tailored silhouettes and luminous textiles curated specifically to complement your personality.',
  },
  '03': {
    he: 'הסלון כולו עומד לרשותך ולרשות המלוות הקרובות שלך באווירה רגועה, שקטה ומלאת פינוק.',
    en: 'The entire salon sanctuary reserved exclusively for you and your closest circle.',
  },
  '04': {
    he: 'מהמדידה הראשונה ועד איסוף השמלה – צוות מעצבות ותופרות שמלווה אותך יד ביד ברוגע.',
    en: 'Hand-in-hand guidance from first sketch and pinning through final pre-wedding pressing.',
  },
  '05': {
    he: 'קולקציית קוטור עשירה הנעה בין משי קלאסי ונקי, תחרה רומנטית, בוהו אוורירי וגזרות מודרניות.',
    en: 'A thoughtful spectrum spanning classic silk mikado, French Chantilly lace, ethereal boho, and modern lines.',
  },
  '06': {
    he: 'תיפורים ידניים, כפתורי פנינה, התאמת הינומה ואקססוריז המשלימים יצירה מושלמת.',
    en: 'Hand-finished seams, pearl closures, bespoke veils, and finishing touches crafted to perfection.',
  },
};

/**
 * Editable Sample Bride Reflections
 * Note: Per client instructions, these are clearly marked as illustrative sample quotes
 * structured for easy replacement with verified bride testimonials.
 */
export const SAMPLE_TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'sample-1',
    quote: {
      he: '״הרגשתי כאילו נכנסתי לעולם אחר. מהרגע הראשון ידעתי שאני במקום שבו מבינים בדיוק מה אני מחפשת.״',
      en: '“I felt as though I had stepped into another world. From the very first moment, I knew they understood exactly what I was dreaming of.”',
    },
    label: {
      he: 'טקסט לדוגמה להמלצת כלה · סגנון קלאסי',
      en: 'Sample Bride Reflection · Classic Silhouette',
    },
    seasonNote: {
      he: 'תבנית ציטוט להחלפה בהמלצה אמיתית',
      en: 'Editable placeholder for verified bride quote',
    },
    image: IMAGES.dressClassic,
  },
  {
    id: 'sample-2',
    quote: {
      he: '״החוויה הייתה פשוט קסומה. מצאתי את השמלה שלי, אבל גם קיבלתי חוויה שלא אשכח.״',
      en: '“The experience was pure magic. I found my dream dress, and gained a memory I will carry forever.”',
    },
    label: {
      he: 'טקסט לדוגמה להמלצת כלה · תחרה בוטנית',
      en: 'Sample Bride Reflection · Botanical Lace',
    },
    seasonNote: {
      he: 'תבנית ציטוט להחלפה בהמלצה אמיתית',
      en: 'Editable placeholder for verified bride quote',
    },
    image: IMAGES.dressLace,
  },
  {
    id: 'sample-3',
    quote: {
      he: '״כל פרט היה מושלם, היחס, האווירה והתחושה. לא יכולתי לדמיין חוויה טובה יותר.״',
      en: '“Every detail was effortless—the warmth, the garden atmosphere, and the tailoring. I could not imagine a finer experience.”',
    },
    label: {
      he: 'טקסט לדוגמה להמלצת כלה · גן קיץ',
      en: 'Sample Bride Reflection · Summer Garden',
    },
    seasonNote: {
      he: 'תבנית ציטוט להחלפה בהמלצה אמיתית',
      en: 'Editable placeholder for verified bride quote',
    },
    image: IMAGES.dressBoho,
  },
];

export const COPY = {
  he: {
    nav: {
      home: 'הבית',
      collection: 'הקולקציה',
      story: 'הסיפור שלנו',
      experience: 'חוויית הכלה',
      contact: 'יצירת קשר',
      book: 'תיאום פגישה',
    },
    hero: {
      kicker: 'בית אופנת כלות · HAUTE COUTURE & TROPICAL SANCTUARY',
      title: 'TROPY GARDEN',
      subtitleLine1: 'השמלה שתמיד חלמת עליה.',
      subtitleLine2: 'הרגע שתמיד תזכרי.',
      subtitleEn: 'Your dream dress. Your unforgettable moment.',
      primaryCta: 'גילוי קולקציית הכלות',
      secondaryCta: 'קביעת פגישת מדידה',
      scrollCue: 'גללי לגלות',
    },
    story: {
      kicker: 'הסיפור שלנו · ATELIER & PHILOSOPHY',
      title: 'A LITTLE MAGIC.\nA LOT OF LOVE.',
      paragraph1:
        'כל כלה היא עולם שלם של חלומות, השראה ויופי. ב-Tropy Garden אנחנו מאמינות שהשמלה שלך היא הרבה מעבר לשמלה – היא חלק מהסיפור שלך, מהרגעים המרגשים ומהזיכרונות שילוו אותך לנצח.',
      paragraph2:
        'אנחנו מזמינות אותך להיכנס לעולם של יצירה, סטייל, אהבה וקסם, ולמצוא את השמלה שבה תרגישי הכי את.',
      caption1: 'תחרה צרפתית בעבודת יד · סחלבים לבנים',
      caption2: 'דיגום אישי באור טבעי',
    },
    collection: {
      kicker: 'קולקציית 2026 · EDITORIAL LOOKBOOK',
      title: 'FIND THE ONE',
      subtitle: 'לא עוד שמלה. השמלה שלך.',
      cta: 'גלי את הקולקציה',
      filters: [
        { id: 'all', label: 'כל השמלות' },
        { id: 'classic', label: 'קלאסית ונקייה' },
        { id: 'lace', label: 'תחרה עדינה' },
        { id: 'boho', label: 'בוהו' },
        { id: 'dramatic', label: 'דרמטית עם נפח' },
        { id: 'minimalist', label: 'מינימליסטית' },
        { id: 'modern', label: 'מודרנית' },
      ] as { id: DressCategory; label: string }[],
      viewFull: 'צפייה בגודל מלא',
      bookThisDress: 'תיאום מדידה לשמלה זו',
    },
    experience: {
      kicker: 'המסע האישי שלך · PRIVATE BRIDAL SUITE',
      title: "MORE THAN A DRESS.\nIT'S YOUR MOMENT.",
      lead: 'בסלון שלנו הזמן עוצר מלכת. מדידה אחת פרטית, קשב מלא ויצירת שמלה שמותאמת אלייך עד התפר האחרון.',
    },
    garden: {
      kicker: 'אווירה והשראה · BOTANICAL COUTURE',
      title: 'WHERE DREAMS BLOOM',
      lead: 'שילוב נדיר של עלים טרופיים ירוקים, פרחים לבנים, אור שמש רך ובדי משי שנושמים איתך.',
    },
    testimonials: {
      kicker: 'סיפורי כלות · תבנית השראה הניתנת לעריכה',
      title: 'MOMENTS OF MAGIC',
      notice: 'הערה: הציטוטים מטה מוצגים כדוגמאות להשראה ומבנה מוכן להחלפה בהמלצות כלות אמיתיות.',
    },
    ctaSection: {
      kicker: 'הצעד הראשון שלך · PRIVATE FITTING',
      title: 'YOUR DREAM DRESS\nIS WAITING FOR YOU.',
      body: 'המסע שלך לשמלה המושלמת מתחיל כאן. אנחנו מחכות לך לחוויה אישית, מרגשת ומלאת קסם.',
      button: 'אני רוצה לקבוע פגישה',
      whatsappPrefill: 'היי Tropy Garden! אשמח לקבוע פגישת מדידה אישית בסלון.',
    },
    contact: {
      kicker: 'יצירת קשר · ביקור בסלון',
      title: 'בואי לבקר בגן שלנו',
      subtitle: 'פרטי ההתקשרות מוצגים כתבנית ברורה ונוחה לעדכון קל בפרטי הסלון המלאים.',
      phoneLabel: 'טלפון',
      whatsappLabel: 'WhatsApp ישיר',
      addressLabel: 'כתובת הסלון',
      instagramLabel: 'Instagram',
      hoursLabel: 'שעות פעילות',
      actions: {
        whatsapp: 'שליחת WhatsApp',
        call: 'התקשרות לסלון',
        maps: 'ניווט ב-Google Maps',
        instagram: 'מעבר לאינסטגרם',
      },
      formTitle: 'בקשה לתיאום פגישה פרטית',
      formSubtitle: 'השאירי פרטים ונעביר אותך ישירות לשיחת תיאום ב-WhatsApp או שנחזור אלייך.',
      namePlaceholder: 'השם המלא שלך',
      phonePlaceholder: 'מספר טלפון לחזרה',
      datePlaceholder: 'תאריך חתונה משוער (לא חובה)',
      styleLabel: 'סגנון מועדף',
      submitButton: 'המשך לתיאום ב-WhatsApp',
      successTitle: 'הבקשה מוכנה ונשלחה לתיאום!',
      successBody: 'תודה! שיחת הוואטסאפ נפתחה עם הפרטים שלך, ואנו זמינות לכל שאלה.',
      errorRequired: 'אנא מלאי שם מלא ומספר טלפון תקין.',
    },
    footer: {
      tagline: 'WHERE EVERY BRIDE BLOOMS.',
      backToTop: 'חזרה למעלה',
      copyright: '© 2026 TROPY GARDEN. כל הזכויות שמורות.',
    },
  },
  en: {
    nav: {
      home: 'Home',
      collection: 'Collection',
      story: 'Our Story',
      experience: 'Experience',
      contact: 'Contact',
      book: 'Book Fitting',
    },
    hero: {
      kicker: 'BRIDAL COUTURE HOUSE · HAUTE COUTURE & TROPICAL SANCTUARY',
      title: 'TROPY GARDEN',
      subtitleLine1: 'Your dream dress.',
      subtitleLine2: 'Your unforgettable moment.',
      subtitleEn: 'Haute Couture crafted amidst an enchanting botanical sanctuary.',
      primaryCta: 'Explore the Collection',
      secondaryCta: 'Book a Private Fitting',
      scrollCue: 'Scroll to Explore',
    },
    story: {
      kicker: 'OUR STORY · ATELIER & PHILOSOPHY',
      title: 'A LITTLE MAGIC.\nA LOT OF LOVE.',
      paragraph1:
        'Every bride is an entire world of dreams, inspiration, and beauty. At Tropy Garden, we believe your gown is far more than a dress—it is part of your story, your most moving moments, and memories that stay forever.',
      paragraph2:
        'We invite you into a realm of artistry, style, love, and quiet magic, to discover the gown in which you feel unmistakably yourself.',
      caption1: 'Hand-embroidered French lace · White orchids',
      caption2: 'Bespoke draping in natural light',
    },
    collection: {
      kicker: '2026 COUTURE · EDITORIAL LOOKBOOK',
      title: 'FIND THE ONE',
      subtitle: 'Not just another gown. Yours.',
      cta: 'Discover the Collection',
      filters: [
        { id: 'all', label: 'All Gowns' },
        { id: 'classic', label: 'Classic & Clean' },
        { id: 'lace', label: 'Delicate Lace' },
        { id: 'boho', label: 'Boho' },
        { id: 'dramatic', label: 'Dramatic Volume' },
        { id: 'minimalist', label: 'Minimalist' },
        { id: 'modern', label: 'Modern' },
      ] as { id: DressCategory; label: string }[],
      viewFull: 'View Fullscreen',
      bookThisDress: 'Book Fitting for This Gown',
    },
    experience: {
      kicker: 'YOUR JOURNEY · PRIVATE BRIDAL SUITE',
      title: "MORE THAN A DRESS.\nIT'S YOUR MOMENT.",
      lead: 'Inside our salon, time softens. One private suite, unhurried attention, and couture tailoring shaped around you.',
    },
    garden: {
      kicker: 'MOOD & INSPIRATION · BOTANICAL COUTURE',
      title: 'WHERE DREAMS BLOOM',
      lead: 'A rare harmony of deep tropical leaves, ivory blossoms, golden sunlight, and silk fabrics that move with you.',
    },
    testimonials: {
      kicker: 'BRIDE STORIES · EDITABLE INSPIRATION TEMPLATE',
      title: 'MOMENTS OF MAGIC',
      notice: 'Note: Quotes below serve as an editable template structure ready to be replaced with verified bride testimonials.',
    },
    ctaSection: {
      kicker: 'YOUR FIRST STEP · PRIVATE FITTING',
      title: 'YOUR DREAM DRESS\nIS WAITING FOR YOU.',
      body: 'Your journey to the perfect gown begins here. We await you for an intimate, unforgettable experience filled with magic.',
      button: 'I Want to Book an Appointment',
      whatsappPrefill: 'Hello Tropy Garden! I would love to schedule a private bridal fitting.',
    },
    contact: {
      kicker: 'CONTACT · VISIT THE SALON',
      title: 'Step Into Our Garden',
      subtitle: 'Contact details are cleanly structured as easy-to-update placeholders for the salon.',
      phoneLabel: 'Phone',
      whatsappLabel: 'Direct WhatsApp',
      addressLabel: 'Salon Address',
      instagramLabel: 'Instagram',
      hoursLabel: 'Opening Hours',
      actions: {
        whatsapp: 'Message on WhatsApp',
        call: 'Call Salon',
        maps: 'Navigate via Google Maps',
        instagram: 'Visit Instagram',
      },
      formTitle: 'Request a Private Fitting',
      formSubtitle: 'Share your details and continue directly to our WhatsApp concierge.',
      namePlaceholder: 'Your full name',
      phonePlaceholder: 'Your phone number',
      datePlaceholder: 'Estimated wedding date (optional)',
      styleLabel: 'Preferred silhouette',
      submitButton: 'Continue to WhatsApp',
      successTitle: 'Ready for your fitting!',
      successBody: 'Thank you. Your personalized WhatsApp message has been prepared.',
      errorRequired: 'Please enter your name and a valid phone number.',
    },
    footer: {
      tagline: 'WHERE EVERY BRIDE BLOOMS.',
      backToTop: 'Back to Top',
      copyright: '© 2026 TROPY GARDEN. All rights reserved.',
    },
  },
};
