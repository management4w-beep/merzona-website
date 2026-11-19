# موقع ميرزونا (Merzona)

موقع ثابت (static) عربي + إنكليزي، بدون أي مكتبات. يُبنى بـ `node build.mjs` ويُنشر على GitHub Pages عبر GitHub Actions.

## الملفات المهمة
- `src/config.mjs` — رابط الموقع، أرقام الفروع، والمعلومات الناقصة (`null` = ما بتظهر): العنوان، ساعات الدوام، الإحداثيات، رابط Google Business Profile، سنة التأسيس، روابط السوشال.
- `src/content.mjs` — كل النصوص (عربي + إنكليزي).
- `assets/css/site.css`، `assets/js/site.js` — التصميم والسلوك.
- `scripts/fetch-gallery.mjs` — بينزّل صور الكتالوج وقت البناء ليحطها كصور ثابتة بالصفحات.

## النشر
1. Settings → Pages → Source: **GitHub Actions**.
2. كل push على `main` بيبني وينشر الموقع تلقائياً (وكل اثنين الساعة 3 الفجر UTC لتحديث الصور).

## بعد ربط دومين
Settings → Secrets and variables → Actions → Variables:
- `SITE_URL` = `https://الدومين-الجديد` (بدون / بالآخر)
- `CUSTOM_DOMAIN` = `الدومين-الجديد`

## تشغيل محلي
`node scripts/fetch-gallery.mjs && node build.mjs` ثم افتح `dist/`.
