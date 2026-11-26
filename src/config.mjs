// ============================================================
// إعدادات الموقع — كل معلومة ناقصة (null) ما بتنعرض بالموقع أبداً.
// لما تعطيني المعلومة، منحطها هون ومنعيد البناء وبتظهر لحالها.
// ============================================================

// رابط الموقع الأساسي. هلأ GitHub Pages، وبعد ربط الدومين غيّره بس (أو عبر متغير SITE_URL).
export const SITE_URL = (process.env.SITE_URL || 'https://merzona.ae').replace(/\/+$/, '');

// عنوان سيرفر الصور (الـ API العام للكتالوج)
export const API_BASE = process.env.API_BASE || 'https://merzona-server-production.up.railway.app';

export const company = {
  nameAr: 'ميرزونا',
  nameEn: 'Merzona',
  fullAr: 'ميرزونا للألمنيوم والزجاج',
  fullEn: 'Merzona for Aluminum & Glass Works',
  // البريد الرسمي للشركة
  email: 'info@merzona.ae',
  // ===== معلومات ناقصة (null = ما بتنعرض) =====
  foundingYear: 2023,     // سنة التأسيس
  sameAs: ['https://www.instagram.com/merzona.sy', 'https://www.instagram.com/merzona.ae'],
};

export const branches = {
  sy: {
    key: 'sy',
    wa: '963939919670',
    tel: '+963939919670',
    phoneDisplay: '+963 939 919 670',
    country: 'SY',
    // معلومات ناقصة:
    district: { ar: 'المزة', en: 'Mazzeh' },   // دمشق، المزة
    streetAddress: { ar: '17 نيسان', en: '17th April' },  // كما يظهر في خرائط جوجل
    instagram: 'https://www.instagram.com/merzona.sy',
    hours: ['Sa-Th 10:00-16:00'],
    hoursText: { ar: 'من السبت إلى الخميس، من الساعة 10 صباحاً حتى 4 عصراً (الجمعة عطلة)', en: 'Saturday to Thursday, 10:00 am to 4:00 pm (closed Friday)' },
    geo: null,                  // { lat: 33.5, lng: 36.3 }
    gbpUrl: null,               // أضف رابط خرائط ميرزونا الصحيح هنا عند إنشاء الصفحة
    mapEmbedUrl: null,
    areasAr: ['دمشق', 'ريف دمشق', 'باقي المحافظات السورية'],
    areasEn: ['Damascus', 'Damascus countryside', 'the other Syrian governorates'],
  },
  ae: {
    key: 'ae',
    wa: '971508471158',
    tel: '+971508471158',
    phoneDisplay: '+971 50 847 1158',
    country: 'AE',
    district: null,
    streetAddress: null,
    instagram: 'https://www.instagram.com/merzona.ae',
    hours: null,
    geo: null,
    gbpUrl: null,
    mapEmbedUrl: null,
    areasAr: ['الإمارات كلها'],
    areasEn: ['All of the UAE'],
  },
};
