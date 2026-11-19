// ============================================================
// إعدادات الموقع — كل معلومة ناقصة (null) ما بتنعرض بالموقع أبداً.
// لما تعطيني المعلومة، منحطها هون ومنعيد البناء وبتظهر لحالها.
// ============================================================

// رابط الموقع الأساسي. هلأ GitHub Pages، وبعد ربط الدومين غيّره بس (أو عبر متغير SITE_URL).
export const SITE_URL = (process.env.SITE_URL || 'https://management4w-beep.github.io/merzona-website').replace(/\/+$/, '');

// عنوان سيرفر الصور (الـ API العام للكتالوج)
export const API_BASE = process.env.API_BASE || 'https://merzona-server-production.up.railway.app';

export const company = {
  nameAr: 'ميرزونا',
  nameEn: 'Merzona',
  fullAr: 'ميرزونا للألمنيوم والزجاج',
  fullEn: 'Merzona for Aluminum & Glass Works',
  // البريد من إعدادات السيستم (Info@Merzona.com) — لازم تأكدلي إنو شغّال قبل النشر
  email: 'info@merzona.com',
  // ===== معلومات ناقصة (null = ما بتنعرض) =====
  foundingYear: null,     // سنة التأسيس
  sameAs: [],             // روابط فيسبوك / انستغرام / لينكدإن ... الخ
};

export const branches = {
  sy: {
    key: 'sy',
    wa: '963939919670',
    tel: '+963939919670',
    phoneDisplay: '+963 939 919 670',
    country: 'SY',
    // معلومات ناقصة:
    streetAddress: null,        // عنوان الفرع بالتفصيل
    hours: null,                // مثال: ['Mo-Th 09:00-17:00']
    geo: null,                  // { lat: 33.5, lng: 36.3 }
    gbpUrl: null,               // رابط ملف النشاط على خرائط جوجل (Google Business Profile)
    mapEmbedUrl: null,
    areasAr: ['دمشق'],          // مناطق الخدمة (أكّدلي إذا بتخدموا ريف دمشق وغيره)
    areasEn: ['Damascus'],
  },
  ae: {
    key: 'ae',
    wa: '971508471158',
    tel: '+971508471158',
    phoneDisplay: '+971 50 847 1158',
    country: 'AE',
    streetAddress: null,
    hours: null,
    geo: null,
    gbpUrl: null,
    mapEmbedUrl: null,
    areasAr: ['دبي', 'الشارقة'],
    areasEn: ['Dubai', 'Sharjah'],
  },
};
