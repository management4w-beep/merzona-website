// فيديوهات حقيقية من حساب إنستغرام ميرزونا. الأغلفة مقصوصة من صفحة الحساب نفسه.
// العناوين منقولة من نص الغلاف نفسه بدون إضافة مكان أو تفاصيل من عندنا.
export const IG_REEL = (id) => `https://www.instagram.com/merzona.sy/reel/${id}/`;

export const projects = [
  ['DfpTyo1AYmx', 'هاندريل (درابزين) في يعفور، سوريا', 'Handrail in Yafour, Syria'],
  ['DfNDHIegNM4', 'درابزين زجاجي للدرج والتراس في فيلا في يعفور', 'Glass railing for the stairs and terrace of a villa in Yafour'],
  ['DfFVP4PgdPm', 'غرفة شتوية زجاجية', 'Glass winter room'],
  ['DeR5QXEgzKB', 'تأسيس زجاج: مكاتب وأبواب وسحّاب', 'Glass fit-out: offices, doors and sliding systems'],
  ['DeR4hZJgTDz', 'الزجاج الجامبو (Full Height)', 'Jumbo full-height glass'],
  ['DeO0dWNATeS', 'تركيب شاورات', 'Shower installation'],
  ['DeO0cFQAktp', 'مشروع صغير لملحق فيلا', 'Small project for a villa annex'],
  ['DeO0arXgLeD', 'ملاحظات للزجاج الفل هايت', 'Notes on full-height glass'],
  ['DeKPMTNgOE8', 'زيارة أحد مشاريعنا، دبي - العوير', 'Visit to one of our projects, Al Awir, Dubai'],
  ['DeKPGybATmP', 'فيلا الجميرا', 'Jumeirah villa'],
  ['DeHCaeAAxUf', 'كرتن وول مخفي داخل الأرضية', 'Curtain wall hidden inside the floor'],
  ['DeHCVjogQNK', 'جولة في أحد المشاريع قيد التنفيذ، دبي - العوير', 'Tour of a project under construction, Al Awir, Dubai'],
  ['Dd1R5mOA7kM', 'معرض ياس مول (Showroom YAS MALL)', 'Showroom at Yas Mall'],
  ['Dd1BMsPA7WQ', 'أعمال تركيب معرض ياس مول', 'Installation works, Yas Mall showroom'],
  ['Dd0_fuuxxu9', 'شبك الحشرات (Mesh)', 'Insect screen (mesh)'],
  ['DdwKN6PA5q_', 'مشروع الجميرا JVT', 'Jumeirah JVT project'],
  ['DdwDIrfgdq4', 'الأبواب النحيلة (Slim)', 'Slim doors'],
  ['Ddv5dketrqL', 'مشروع جديد في مارينا', 'New project in Marina'],
  ['Ddvx77GApQ1', 'تركيب الأبواب ذات المقطع النحيل (Slim System)', 'Installing slim-profile doors (Slim System)'],
  ['DapRdGBgDEi', 'مشروع الجميرا: تجديد (Renovation)', 'Jumeirah renovation project'],
  ['DapRVExg6ci', 'فاصل زجاجي بين الصالة والمطبخ', 'Glass divider between the living room and kitchen'],
  ['DapQ6IaAN7v', 'مشروع في أبوظبي', 'Abu Dhabi project'],
  ['DapQ4kRgvFn', 'ألمنيوم الغرير (Aluminum Al Ghurair)', 'Aluminum Al Ghurair'],
].map(([id, ar, en]) => ({ id, ar, en }));

export const projectsPage = {
  ar: {
    title: 'مشاريعنا: فيديوهات تركيب ألمنيوم وزجاج | ميرزونا',
    desc: 'لقطات وفيديوهات من مشاريع ميرزونا الحقيقية: درابزين زجاجي، كيرتن وول، أبواب نحيلة، قواطع زجاج، شاورات وغيرها، مع رابط الفيديو الكامل على إنستغرام.',
    h1: 'مشاريعنا',
    lead: 'لقطات من مشاريع نفّذناها. اضغط على أي لقطة لتشاهد الفيديو الكامل على إنستغرام.',
    watch: 'شاهد على إنستغرام', home: 'من مشاريعنا', homeP: 'فيديوهات حقيقية من مواقع العمل.', all: 'كل المشاريع',
    follow: 'تابعنا على إنستغرام', breadcrumb: 'مشاريعنا',
  },
  en: {
    title: 'Our Projects: Aluminum and Glass Installation Videos | Merzona',
    desc: 'Clips and videos from real Merzona projects: glass railings, curtain walls, slim doors, glass partitions, showers and more, with the full video on Instagram.',
    h1: 'Our projects',
    lead: 'Clips from projects we have carried out. Tap any clip to watch the full video on Instagram.',
    watch: 'Watch on Instagram', home: 'From our projects', homeP: 'Real videos from our work sites.', all: 'All projects',
    follow: 'Follow us on Instagram', breadcrumb: 'Projects',
  },
};
