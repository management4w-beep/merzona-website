// المحتوى (عربي + إنكليزي). ما فيه أي رقم أو سنة خبرة أو عنوان مخترع.
// الأسطر المأخوذة حرفياً من كتالوج الشركة موسومة بـ [كتالوج].

export const services = [
  {
    slug: 'windows-doors',
    cats: ['windows', 'door', 'cast aluminum doors'], // 'windows' كتالوج جديد (اختياري): أي صور تُرفع فيه تظهر أولاً
    ar: {
      name: 'شبابيك وأبواب ألمنيوم',
      title: 'شبابيك وأبواب ألمنيوم في دمشق ودبي | ميرزونا',
      desc: 'تصميم وتوريد وتركيب شبابيك وأبواب الألمنيوم للبيوت والمكاتب والمحال في دمشق ودبي والشارقة. اطلب عرض سعر عبر واتساب.',
      lead: 'شبابيك وأبواب ألمنيوم للمداخل والغرف الداخلية والمحال، بتصاميم وقياسات تُحدَّد حسب مشروعك. نتولى التصميم والتوريد والتركيب.',
      features: [
        'أبواب ألمنيوم للمداخل والأبواب الداخلية بتصاميم متنوعة', // [كتالوج]
        'أبواب وبوابات ألمنيوم مصبوب بتصاميم حصرية', // [كتالوج]
        'شبابيك بقياسات تناسب الفتحة المطلوبة',
        'اختيار الشكل واللون بما يناسب طراز المبنى',
      ],
      uses: ['الفلل والبيوت', 'الشقق السكنية', 'المكاتب والمحال التجارية', 'المداخل والواجهات'],
    },
    en: {
      name: 'Aluminum windows & doors',
      title: 'Aluminum Windows & Doors in Damascus & UAE | Merzona',
      desc: 'Design, supply and installation of aluminum windows and doors for homes, offices and shops in Damascus, Dubai and Sharjah. Request a quote on WhatsApp.',
      lead: 'Aluminum windows and doors for entrances, interior rooms and shops, sized and styled for your project. We handle design, supply and installation.',
      features: [
        'Aluminum entrance and interior doors in a range of designs',
        'Cast aluminum doors and gates in exclusive designs',
        'Windows made to the size of your opening',
        'Finish and style chosen to suit the building',
      ],
      uses: ['Villas and houses', 'Apartments', 'Offices and shops', 'Entrances and facades'],
    },
  },
  {
    slug: 'railings',
    cats: ['cast aluminum handrails', 'glass handrail'],
    ar: {
      name: 'درابزين وأدراج زجاجية',
      title: 'درابزين وأدراج زجاجية | دمشق ودبي | ميرزونا',
      desc: 'درابزين ألمنيوم صب بتصاميم كلاسيكية وحديثة ودرابزين زجاج للأدراج والبلكونات. توريد وتركيب في دمشق ودبي والشارقة.',
      lead: 'درابزين للأدراج والبلكونات والتراسات: ألمنيوم مصبوب بتصاميم كلاسيكية وحديثة، أو زجاج بتثبيت أرضي أو جانبي.',
      features: [
        'تصاميم كلاسيكية وحديثة من الألمنيوم المصبوب', // [كتالوج]
        'تشطيبات برونزية وسوداء ومزخرفة', // [كتالوج]
        'درابزين زجاج للأدراج والبلكونات', // [كتالوج]
        'تثبيت أرضي وجانبي للزجاج', // [كتالوج]
      ],
      uses: ['الأدراج الداخلية والخارجية', 'البلكونات والتراسات', 'الفلل والمباني السكنية', 'المحال والمنشآت التجارية'],
    },
    en: {
      name: 'Glass railings & staircases',
      title: 'Glass Railings & Staircases | Damascus & UAE | Merzona',
      desc: 'Cast aluminum railings in classic and modern designs, plus glass railings for stairs and balconies. Supply and installation in Damascus, Dubai and Sharjah.',
      lead: 'Railings for stairs, balconies and terraces: cast aluminum in classic and modern designs, or glass with floor or side fixing.',
      features: [
        'Classic and modern cast aluminum designs',
        'Bronze, black and ornamental finishes',
        'Glass railings for stairs and balconies',
        'Floor-mounted and side-mounted glass fixing',
      ],
      uses: ['Indoor and outdoor stairs', 'Balconies and terraces', 'Villas and residential buildings', 'Shops and commercial buildings'],
    },
  },
  {
    slug: 'sliding-systems',
    cats: ['sliding'],
    ar: {
      name: 'أبواب ونوافذ سحّاب',
      title: 'أبواب ونوافذ ألمنيوم سحّاب | ميرزونا',
      desc: 'أنظمة سحّاب ألمنيوم عازلة للحرارة والصوت لأبواب ونوافذ البيوت والمحال. توريد وتركيب في دمشق ودبي والشارقة.',
      lead: 'أنظمة سحّاب ألمنيوم عازلة للحرارة والصوت، تفتح بالانزلاق فلا تحتاج مساحة للتأرجح.', // [كتالوج] + وصف عام
      features: [
        'أبواب سحّاب لمداخل الشرفات والحدائق',
        'نوافذ سحّاب لمختلف الغرف',
        'أنظمة عازلة للحرارة والصوت', // [كتالوج]
        'قياسات وألوان حسب المشروع',
      ],
      uses: ['مداخل الشرفات والتراسات', 'الصالونات وغرف الجلوس', 'الحدائق والمسابح', 'المحال والمكاتب'],
    },
    en: {
      name: 'Sliding doors & windows',
      title: 'Aluminum Sliding Doors & Windows | Merzona',
      desc: 'Aluminum sliding systems with thermal and sound insulation for home and shop doors and windows. Supply and installation in Damascus, Dubai and Sharjah.',
      lead: 'Aluminum sliding systems with thermal and sound insulation. They open by sliding, so they need no swing space.',
      features: [
        'Sliding doors for balcony and garden entrances',
        'Sliding windows for any room',
        'Thermal and sound insulating systems',
        'Sizes and colors to suit the project',
      ],
      uses: ['Balcony and terrace entrances', 'Living rooms and lounges', 'Gardens and pool areas', 'Shops and offices'],
    },
  },
  {
    slug: 'curtain-wall',
    cats: ['curtain wall design'],
    ar: {
      name: 'واجهات زجاجية (كيرتن وول)',
      title: 'واجهات زجاجية كيرتن وول | دمشق ودبي | ميرزونا',
      desc: 'تنفيذ واجهات زجاجية كيرتن وول للفلل والمباني بأنظمة ألمنيوم متنوعة. اطلب عرض سعر لمشروعك في دمشق أو الإمارات.',
      lead: 'واجهات زجاجية للفلل والمباني بأنظمة ألمنيوم، من التصميم حتى التركيب.', // [كتالوج]
      features: [
        'واجهات زجاجية للفلل والمباني', // [كتالوج]
        'أنظمة كيرتن وول بأشكال مختلفة، منها التقليدي وSSG',
        'تفاصيل فنية ومخططات لكل نظام',
        'تصميم وتركيب حسب واجهة المشروع',
      ],
      uses: ['الفلل', 'المباني السكنية والتجارية', 'المعارض والمكاتب', 'الواجهات الرئيسية'],
    },
    en: {
      name: 'Glass facades (curtain wall)',
      title: 'Curtain Wall Glass Facades | Damascus & UAE | Merzona',
      desc: 'Curtain wall glass facades for villas and buildings in several aluminum systems. Request a quote for your project in Damascus or the UAE.',
      lead: 'Glass facades for villas and buildings, built on aluminum systems, from design through installation.',
      features: [
        'Glass facades for villas and buildings',
        'Curtain wall systems in different forms, including conventional and SSG',
        'Technical details and drawings for each system',
        'Designed and installed to fit the project facade',
      ],
      uses: ['Villas', 'Residential and commercial buildings', 'Showrooms and offices', 'Main facades'],
    },
  },
  {
    slug: 'shower-cabins',
    cats: ['showers'],
    ar: {
      name: 'كبائن شاور زجاج',
      title: 'كبائن شاور زجاج سيكوريت | دمشق ودبي | ميرزونا',
      desc: 'كبائن شاور من الزجاج السيكوريت بإكسسوارات ستانلس وأسود وذهبي. تصميم وتركيب في دمشق ودبي والشارقة.',
      lead: 'كبائن شاور من الزجاج السيكوريت، بإكسسوارات ستانلس أو أسود أو ذهبي لتناسب ديكور الحمام.', // [كتالوج]
      features: [
        'زجاج سيكوريت', // [كتالوج]
        'إكسسوارات ستانلس وأسود وذهبي', // [كتالوج]
        'قياسات حسب مساحة الحمام',
        'تصاميم متعددة لكل ذوق',
      ],
      uses: ['حمامات الشقق والفلل', 'الفنادق والمنتجعات', 'حمامات المحال والمكاتب'],
    },
    en: {
      name: 'Glass shower cabins',
      title: 'Tempered Glass Shower Cabins | Damascus & UAE | Merzona',
      desc: 'Shower cabins in tempered glass with stainless, black or gold fittings. Design and installation in Damascus, Dubai and Sharjah.',
      lead: 'Shower cabins in tempered glass, with stainless, black or gold fittings to match your bathroom.',
      features: [
        'Tempered glass',
        'Stainless, black and gold fittings',
        'Sizes made to your bathroom',
        'Several designs to choose from',
      ],
      uses: ['Apartment and villa bathrooms', 'Hotels and resorts', 'Shop and office bathrooms'],
    },
  },
  {
    slug: 'pergolas-shades',
    cats: ['pergolas'],
    ar: {
      name: 'بيرغولا ومظلات ألمنيوم',
      title: 'بيرغولا (برغولا) ومظلات ألمنيوم | ميرزونا',
      desc: 'بيرغولا ومظلات ألمنيوم للحدائق والأسطح ومواقف السيارات بإنارة مدمجة. تنفيذ في دمشق ودبي والشارقة.',
      lead: 'بيرغولا (برغولا) ألمنيوم للحدائق والأسطح ومواقف السيارات، مع إمكانية الإنارة المدمجة.', // [كتالوج]
      features: [
        'بيرغولا ألمنيوم للحدائق والأسطح', // [كتالوج]
        'مظلات لمواقف السيارات', // [كتالوج]
        'إنارة مدمجة', // [كتالوج]
        'تصميم حسب المساحة والاستخدام',
      ],
      uses: ['حدائق الفلل', 'أسطح المباني', 'مواقف السيارات', 'المقاهي والمطاعم'],
    },
    en: {
      name: 'Aluminum pergolas & shades',
      title: 'Aluminum Pergolas & Shades | Damascus & UAE | Merzona',
      desc: 'Aluminum pergolas and shades for gardens, rooftops and car parks, with built-in lighting. Built in Damascus, Dubai and Sharjah.',
      lead: 'Aluminum pergolas for gardens, rooftops and car parks, with optional built-in lighting.',
      features: [
        'Aluminum pergolas for gardens and rooftops',
        'Shades for car parks',
        'Built-in lighting',
        'Designed to the space and its use',
      ],
      uses: ['Villa gardens', 'Building rooftops', 'Car parks', 'Cafes and restaurants'],
    },
  },
  {
    slug: 'glass-majlis',
    cats: ['glass majlis'],
    ar: {
      name: 'مجالس زجاج',
      title: 'مجالس وغرف زجاجية خارجية | ميرزونا',
      desc: 'تصميم وتنفيذ مجالس وغرف زجاجية خارجية بإطلالة مفتوحة. اطلب عرض سعر عبر واتساب من فرع دمشق أو الإمارات.',
      lead: 'مجالس وغرف زجاجية خارجية بإطلالة مفتوحة على الحديقة أو المنظر.', // [كتالوج]
      features: [
        'مجالس وغرف زجاجية خارجية', // [كتالوج]
        'إطلالة مفتوحة وإضاءة طبيعية',
        'هيكل ألمنيوم وزجاج',
        'تصميم يناسب المساحة المتاحة',
      ],
      uses: ['حدائق الفلل', 'الأسطح', 'المنتجعات والاستراحات'],
    },
    en: {
      name: 'Glass majlis',
      title: 'Glass Majlis & Outdoor Glass Rooms | Merzona',
      desc: 'Design and build of glass majlis and outdoor glass rooms with open views. Request a quote on WhatsApp from the Damascus or Sharjah branch.',
      lead: 'Outdoor glass majlis and rooms with an open view of the garden or landscape.',
      features: [
        'Outdoor glass majlis and rooms',
        'Open views and natural light',
        'Aluminum and glass structure',
        'Designed to the available space',
      ],
      uses: ['Villa gardens', 'Rooftops', 'Resorts and retreats'],
    },
  },
  {
    slug: 'domes',
    cats: ['domes'],
    ar: {
      name: 'قباب',
      title: 'قباب ألمنيوم وزجاج | ميرزونا',
      desc: 'قباب بإطارات ألمنيوم وزجاج تضيف طابعاً معمارياً وإضاءة طبيعية. اطلب عرض سعر من فرع دمشق أو الإمارات.',
      lead: 'قباب تضيف طابعاً معمارياً مميزاً وإضاءة طبيعية للمبنى.',
      features: [
        'قباب بإطارات ألمنيوم وزجاج',
        'إضاءة طبيعية للمساحات الداخلية',
        'تصميم حسب القياس والطراز المطلوب',
      ],
      uses: ['الفلل والقصور', 'المساجد والمباني العامة', 'الصالات والمداخل'],
    },
    en: {
      name: 'Domes',
      title: 'Aluminum & Glass Domes | Merzona',
      desc: 'Domes with aluminum frames and glass that add architectural character and natural light. Request a quote from the Damascus or Sharjah branch.',
      lead: 'Domes that add architectural character and natural light to a building.',
      features: [
        'Domes with aluminum frames and glass',
        'Natural light for interior spaces',
        'Made to the size and style required',
      ],
      uses: ['Villas and palaces', 'Mosques and public buildings', 'Halls and entrances'],
    },
  },
  {
    slug: 'stained-glass',
    cats: ['stain glass'],
    ar: {
      name: 'زجاج معشّق',
      title: 'زجاج معشّق ملوّن للنوافذ والأقواس | ميرزونا',
      desc: 'زجاج معشّق ملوّن للنوافذ والأقواس والأبواب. تصميم وتنفيذ في دمشق ودبي والشارقة. اطلب عرض سعر عبر واتساب.',
      lead: 'زجاج معشّق ملوّن للنوافذ والأقواس، بتصاميم تُختار مع العميل.', // [كتالوج] + وصف
      features: [
        'زجاج معشّق ملوّن', // [كتالوج]
        'للنوافذ والأقواس والأبواب',
        'تصاميم وألوان حسب الطلب',
      ],
      uses: ['النوافذ والأقواس', 'الأبواب والقواطع', 'المساجد والمباني ذات الطابع التراثي'],
    },
    en: {
      name: 'Stained glass',
      title: 'Stained Glass for Windows & Arches | Merzona',
      desc: 'Colored stained glass for windows, arches and doors. Design and execution in Damascus, Dubai and Sharjah. Request a quote on WhatsApp.',
      lead: 'Colored stained glass for windows and arches, in designs chosen with the client.',
      features: [
        'Colored stained glass',
        'For windows, arches and doors',
        'Designs and colors made to order',
      ],
      uses: ['Windows and arches', 'Doors and partitions', 'Mosques and heritage-style buildings'],
    },
  },
  {
    slug: 'mirrors',
    cats: ['mirrors'],
    ar: {
      name: 'مرايا',
      title: 'مرايا بقياسات وأشكال حسب الطلب | ميرزونا',
      desc: 'مرايا بقياسات وأشكال حسب الطلب للحمامات وغرف الجلوس والمحال مع التركيب. اطلب عرض سعر من فرع دمشق أو الإمارات.',
      lead: 'مرايا بقياسات وأشكال حسب الطلب، مع التركيب.',
      features: [
        'قياسات وأشكال حسب الطلب',
        'للحمامات وغرف الجلوس والمحال',
        'تركيب على الجدار أو ضمن الخزائن والقواطع',
      ],
      uses: ['الحمامات', 'غرف الجلوس والنوم', 'المحال والصالونات'],
    },
    en: {
      name: 'Mirrors',
      title: 'Custom Mirrors, Made to Size | Merzona',
      desc: 'Mirrors made to your size and shape for bathrooms, living rooms and shops, with installation. Request a quote from the Damascus or Sharjah branch.',
      lead: 'Mirrors made to your size and shape, with installation.',
      features: [
        'Sizes and shapes made to order',
        'For bathrooms, living rooms and shops',
        'Fitted on walls or inside cabinets and partitions',
      ],
      uses: ['Bathrooms', 'Living rooms and bedrooms', 'Shops and salons'],
    },
  },
  {
    slug: 'folding-systems',
    cats: ['folding'],
    ar: {
      name: 'أبواب ونوافذ فولدينغ',
      title: 'أبواب ونوافذ ألمنيوم فولدينغ (قابلة للطي) | ميرزونا',
      desc: 'أنظمة فولدينغ ألمنيوم قابلة للطي لفتح الواجهة بالكامل. توريد وتركيب في دمشق ودبي والشارقة. اطلب عرض سعر.',
      lead: 'أنظمة فولدينغ تُطوى على جانب الفتحة لتفتح المساحة بالكامل.',
      features: [
        'أبواب ونوافذ ألمنيوم قابلة للطي',
        'فتح كامل للفتحة عند الحاجة',
        'مناسبة للشرفات والصالات والمحال',
      ],
      uses: ['الشرفات والتراسات', 'الصالات والمطاعم', 'واجهات المحال'],
    },
    en: {
      name: 'Folding doors & windows',
      title: 'Aluminum Folding Doors & Windows | Merzona',
      desc: 'Aluminum folding systems that open the whole frontage. Supply and installation in Damascus, Dubai and Sharjah. Request a quote.',
      lead: 'Folding systems that stack to one side of the opening and open the whole space.',
      features: [
        'Foldable aluminum doors and windows',
        'Full opening when you need it',
        'Suited to balconies, lounges and shopfronts',
      ],
      uses: ['Balconies and terraces', 'Lounges and restaurants', 'Shopfronts'],
    },
  },
];

export const ui = {
  ar: {
    dir: 'rtl', lang: 'ar', langName: 'العربية', otherName: 'English',
    skip: 'تخطّ إلى المحتوى',
    nav: { services: 'الخدمات', damascus: 'فرع دمشق', uae: 'فرع الشارقة', contact: 'تواصل معنا' },
    menu: 'القائمة',
    whatsapp: 'واتساب',
    waSy: 'واتساب فرع دمشق',
    waAe: 'واتساب فرع الشارقة',
    callSy: 'اتصل بفرع دمشق',
    callAe: 'اتصل بفرع الشارقة',
    requestQuote: 'اطلب عرض سعر',
    allServices: 'كل الخدمات',
    ourWork: 'تصاميم ونماذج',
    features: 'ماذا نقدّم',
    uses: 'أين تُستخدم',
    faq: 'أسئلة شائعة',
    related: 'خدمات أخرى',
    breadcrumbHome: 'الرئيسية',
    branchSy: 'فرع دمشق، سوريا',
    branchAe: 'فرع الشارقة (ويخدم دبي أيضاً)',
    email: 'البريد الإلكتروني',
    phone: 'الهاتف وواتساب',
    footerBlurb: 'شركة مقاولات متخصصة بأعمال الألمنيوم والزجاج في دمشق ودبي والشارقة.',
    rights: 'جميع الحقوق محفوظة',
    waMsg: (what) => `مرحباً ميرزونا، أرغب بالاستفسار عن ${what}.`,
    waMsgGeneral: 'مرحباً ميرزونا، أرغب بالاستفسار عن خدماتكم.',
    faqSvc: (n) => [
      ['ما المعلومات التي أحتاجها لطلب عرض سعر؟', `أرسل لنا عبر واتساب صورة للمكان وقياسات الفتحات التقريبية ونوع العمل المطلوب (${n})، وسنرد عليك بالتفاصيل.`],
      ['هل تعملون في دمشق والإمارات؟', 'نعم، لدينا فرع في دمشق وفرع في الإمارات (دبي والشارقة). اختر الفرع الأقرب إليك من أزرار واتساب في هذه الصفحة.'],
    ],
    galleryNote: 'اضغط على أي صورة لتكبيرها',
    galleryEmpty: 'صور هذه الخدمة قريباً. أرسل لنا طلبك عبر واتساب لنرسل لك نماذج من أعمالنا.',
  },
  en: {
    dir: 'ltr', lang: 'en', langName: 'English', otherName: 'العربية',
    skip: 'Skip to content',
    nav: { services: 'Services', damascus: 'Damascus branch', uae: 'Sharjah branch', contact: 'Contact' },
    menu: 'Menu',
    whatsapp: 'WhatsApp',
    waSy: 'WhatsApp Damascus',
    waAe: 'WhatsApp UAE',
    callSy: 'Call Damascus branch',
    callAe: 'Call Sharjah branch',
    requestQuote: 'Request a quote',
    allServices: 'All services',
    ourWork: 'Designs and examples',
    features: 'What we offer',
    uses: 'Where it is used',
    faq: 'Common questions',
    related: 'More services',
    breadcrumbHome: 'Home',
    branchSy: 'Damascus branch, Syria',
    branchAe: 'Sharjah branch (also serving Dubai)',
    email: 'Email',
    phone: 'Phone and WhatsApp',
    footerBlurb: 'A contracting company specialized in aluminum and glass works in Damascus, Dubai and Sharjah.',
    rights: 'All rights reserved',
    waMsg: (what) => `Hello Merzona, I would like to ask about ${what}.`,
    waMsgGeneral: 'Hello Merzona, I would like to ask about your services.',
    faqSvc: (n) => [
      ['What do I need to send to get a quote?', `Send us a photo of the place, approximate opening sizes and the type of work you need (${n}) on WhatsApp, and we will reply with details.`],
      ['Do you work in both Damascus and the UAE?', 'Yes. We have a branch in Damascus and a branch in the UAE (Dubai and Sharjah). Choose the closer one with the WhatsApp buttons on this page.'],
    ],
    galleryNote: 'Tap any photo to enlarge it',
    galleryEmpty: 'Photos for this service are coming soon. Message us on WhatsApp and we will send examples of our work.',
  },
};

export const pages = {
  home: {
    ar: {
      title: 'ألمنيوم وزجاج دمشق: شبابيك، سيكوريت، كيرتن وول | ميرزونا',
      desc: 'ميرزونا شركة مقاولات متخصصة بأعمال الألمنيوم والزجاج: شبابيك وأبواب، واجهات زجاجية، درابزين، كبائن شاور، بيرغولا وأكثر. فرع في دمشق وفرع في الإمارات.',
      h1: 'شريكك في تصميم وتنفيذ واجهات الألمنيوم والزجاج (واجهات السيكوريت) وتوابعهم في سوريا والإمارات',
      lead: 'ميرزونا شركة مقاولات متخصصة بالألمنيوم والزجاج: شبابيك وأبواب، واجهات زجاجية، درابزين، كبائن شاور، بيرغولا وغيرها. تصميم وتوريد وتركيب، بفرع في دمشق وفرع في الإمارات.',
      servicesH: 'خدماتنا',
      servicesLead: 'اختر الخدمة لترى صور الأعمال وتطلب عرض سعر.',
      branchesH: 'فروعنا',
      stepsH: 'كيف تطلب عرض سعر',
      steps: [
        ['أرسل طلبك', 'صورة للمكان وقياسات تقريبية ونوع العمل، عبر واتساب الفرع الأقرب.'],
        ['نراجع ونرد', 'نراجع التفاصيل ونرسل لك عرض السعر.'],
        ['نتفق وننفّذ', 'بعد الاتفاق نبدأ التنفيذ.'],
      ],
      ctaH: 'عندك مشروع؟ أرسل لنا التفاصيل',
      ctaP: 'اختر فرع دمشق أو فرع الشارقة وراسلنا على واتساب.',
    },
    en: {
      title: 'Merzona | Aluminum & Glass in Damascus, Dubai & Sharjah',
      desc: 'Contracting company specialized in aluminum and glass: windows, doors, glass facades, railings, shower cabins and pergolas. Branches in Damascus and the UAE.',
      h1: 'Your partner in designing and building aluminum and glass facades (securit glass facades) and their accessories in Syria and the UAE',
      lead: 'Merzona is a contracting company specialized in aluminum and glass: windows and doors, glass facades, railings, shower cabins, pergolas and more. Design, supply and installation, with a branch in Damascus and a branch in the UAE.',
      servicesH: 'Our services',
      servicesLead: 'Pick a service to see our work and request a quote.',
      branchesH: 'Our branches',
      stepsH: 'How to request a quote',
      steps: [
        ['Send your request', 'A photo of the place, approximate sizes and the type of work, on WhatsApp to the closer branch.'],
        ['We review and reply', 'We review the details and send you a quote.'],
        ['Agree and build', 'Once agreed, we start the work.'],
      ],
      ctaH: 'Have a project? Send us the details',
      ctaP: 'Choose the Damascus or Sharjah branch and message us on WhatsApp.',
    },
  },
  servicesIndex: {
    ar: {
      title: 'خدمات الألمنيوم والزجاج | ميرزونا',
      desc: 'كل خدمات ميرزونا: شبابيك وأبواب ألمنيوم، سحّاب، كيرتن وول، درابزين، كبائن شاور، بيرغولا، مرايا، فولدينغ، مجالس زجاج، قباب وزجاج معشّق.',
      h1: 'خدمات الألمنيوم والزجاج',
      lead: 'من الشبابيك والأبواب إلى الواجهات الزجاجية والدرابزين والبيرغولا. اختر الخدمة التي تحتاجها.',
    },
    en: {
      title: 'Aluminum & Glass Services | Merzona',
      desc: 'All Merzona services: aluminum windows and doors, sliding, curtain wall, railings, shower cabins, pergolas, mirrors, folding, domes and stained glass.',
      h1: 'Aluminum and glass services',
      lead: 'From windows and doors to glass facades, railings and pergolas. Pick the service you need.',
    },
  },
  damascus: {
    ar: {
      title: 'ألمنيوم وزجاج في دمشق (المزة) | فرع ميرزونا دمشق',
      desc: 'فرع ميرزونا في دمشق لأعمال الألمنيوم والزجاج: شبابيك وأبواب، واجهات زجاجية، درابزين، كبائن شاور، بيرغولا ومرايا. تواصل عبر واتساب واطلب عرض سعر.',
      h1: 'ميرزونا لأعمال الألمنيوم والزجاج في دمشق',
      lead: 'فرع ميرزونا في دمشق ينفّذ أعمال الألمنيوم والزجاج للبيوت والمكاتب والمحال: من الشبابيك والأبواب والواجهات الزجاجية إلى الدرابزين وكبائن الشاور والبيرغولا.',
      servicesH: 'خدمات الألمنيوم والزجاج في دمشق',
      servicesLead: 'كل هذه الخدمات متاحة عبر فرع دمشق. اختر الخدمة لتعرف التفاصيل.',
      areaP: 'فرعنا في دمشق، منطقة المزة، ويخدم دمشق وريفها وباقي المحافظات السورية.',
      contactH: 'تواصل مع فرع دمشق',
      contactP: 'أسرع طريقة هي واتساب: أرسل صورة للمكان والقياسات التقريبية وما تحتاجه، ونرد عليك بعرض السعر.',
      faqH: 'أسئلة عن فرع دمشق',
      faq: [
        ['أين يقع فرع ميرزونا في دمشق؟', 'فرعنا في دمشق، منطقة المزة. يمكنك التواصل معه عبر واتساب أو الهاتف.'],
        ['هل تخدمون خارج دمشق؟', 'نعم، فرع دمشق يخدم دمشق وريفها وباقي المحافظات السورية.'],
        ['ما الخدمات المتوفرة في دمشق؟', 'شبابيك وأبواب ألمنيوم، سحّاب، واجهات زجاجية كيرتن وول، درابزين وأدراج زجاجية، كبائن شاور، بيرغولا ومظلات، مرايا، فولدينغ، مجالس زجاج، قباب وزجاج معشّق.'],
        ['كيف أحصل على عرض سعر في دمشق؟', 'أرسل لنا عبر واتساب صورة للمكان والقياسات التقريبية ونوع العمل، ونرسل لك عرض السعر.'],
      ],
    },
    en: {
      title: 'Aluminum & Glass in Damascus | Merzona Damascus Branch',
      desc: 'Merzona\'s Damascus branch for aluminum and glass: windows, doors, glass facades, railings, shower cabins and pergolas. Message us on WhatsApp for a quote.',
      h1: 'Merzona aluminum and glass works in Damascus',
      lead: 'Merzona\'s Damascus branch carries out aluminum and glass works for homes, offices and shops: from windows, doors and glass facades to railings, shower cabins and pergolas.',
      servicesH: 'Aluminum and glass services in Damascus',
      servicesLead: 'All of these services are available through the Damascus branch. Pick one to see the details.',
      areaP: 'Our branch is in Damascus, in the Mazzeh area, and serves Damascus, its countryside and the other Syrian governorates.',
      contactH: 'Contact the Damascus branch',
      contactP: 'WhatsApp is the fastest way: send a photo of the place, approximate sizes and what you need, and we will reply with a quote.',
      faqH: 'Questions about the Damascus branch',
      faq: [
        ['Where is Merzona\'s Damascus branch?', 'Our branch is in Damascus, in the Mazzeh area. You can reach it on WhatsApp or by phone.'],
        ['Do you serve areas outside Damascus?', 'Yes. The Damascus branch serves Damascus, its countryside and the other Syrian governorates.'],
        ['Which services are available in Damascus?', 'Aluminum windows and doors, sliding systems, curtain wall facades, cast aluminum and glass railings, shower cabins, pergolas and shades, mirrors, folding systems, glass majlis, domes and stained glass.'],
        ['How do I get a quote in Damascus?', 'Send us a photo of the place, approximate sizes and the type of work on WhatsApp, and we will send you a quote.'],
      ],
    },
  },
  uae: {
    ar: {
      title: 'ألمنيوم وزجاج في دبي والشارقة | فرع ميرزونا الشارقة',
      desc: 'فرع ميرزونا في الإمارات لأعمال الألمنيوم والزجاج في دبي والشارقة: شبابيك وأبواب، واجهات زجاجية، درابزين، كبائن شاور، بيرغولا. اطلب عرض سعر عبر واتساب.',
      h1: 'ميرزونا لأعمال الألمنيوم والزجاج في دبي والشارقة',
      lead: 'فرع ميرزونا في الإمارات ينفّذ أعمال الألمنيوم والزجاج في دبي والشارقة وفي الإمارات كلها، للفلل والمباني والمحال.',
      servicesH: 'خدمات الألمنيوم والزجاج في الإمارات',
      servicesLead: 'كل هذه الخدمات متاحة عبر فرع الشارقة. اختر الخدمة لتعرف التفاصيل.',
      contactH: 'تواصل مع فرع الشارقة',
      contactP: 'أرسل لنا عبر واتساب صورة للمكان والقياسات التقريبية وما تحتاجه، ونرد عليك بعرض السعر.',
      faqH: 'أسئلة عن فرع الشارقة',
      faq: [
        ['هل تخدمون الإمارات كلها؟', 'نعم، فرعنا في الإمارات (دبي والشارقة) يخدم الإمارات كلها.'],
        ['كيف أتواصل مع فرع الشارقة؟', 'عبر واتساب أو الهاتف على الرقم الظاهر في هذه الصفحة.'],
        ['كيف أحصل على عرض سعر؟', 'أرسل لنا صورة للمكان والقياسات التقريبية ونوع العمل عبر واتساب، ونرسل لك عرض السعر.'],
      ],
    },
    en: {
      title: 'Aluminum & Glass in Dubai & Sharjah | Merzona Sharjah Branch',
      desc: 'Merzona\'s Sharjah branch for aluminum and glass in Dubai and Sharjah: windows, doors, glass facades, railings, shower cabins and pergolas. Quote on WhatsApp.',
      h1: 'Merzona aluminum and glass works in Dubai and Sharjah',
      lead: 'Merzona\'s Sharjah branch carries out aluminum and glass works in Dubai, Sharjah and across the UAE, for villas, buildings and shops.',
      servicesH: 'Aluminum and glass services in the UAE',
      servicesLead: 'All of these services are available through the Sharjah branch. Pick one to see the details.',
      contactH: 'Contact the Sharjah branch',
      contactP: 'Send us a photo of the place, approximate sizes and what you need on WhatsApp, and we will reply with a quote.',
      faqH: 'Questions about the Sharjah branch',
      faq: [
        ['Do you serve the whole UAE?', 'Yes. Our Sharjah branch (also serving Dubai) serves all of the UAE.'],
        ['How do I contact the Sharjah branch?', 'On WhatsApp or by phone, using the number shown on this page.'],
        ['How do I get a quote?', 'Send us a photo of the place, approximate sizes and the type of work on WhatsApp, and we will send you a quote.'],
      ],
    },
  },
  contact: {
    ar: {
      title: 'تواصل معنا | ميرزونا دمشق والإمارات',
      desc: 'تواصل مع ميرزونا عبر واتساب أو الهاتف: فرع دمشق (سوريا) وفرع الشارقة (ويخدم دبي أيضاً).',
      h1: 'تواصل معنا',
      lead: 'اختر الفرع الأقرب إليك. واتساب هو أسرع طريقة للحصول على عرض سعر.',
    },
    en: {
      title: 'Contact Us | Merzona Damascus & UAE',
      desc: 'Contact Merzona on WhatsApp or by phone: Damascus branch (Syria) and Sharjah branch (also serving Dubai).',
      h1: 'Contact us',
      lead: 'Choose the branch closest to you. WhatsApp is the fastest way to get a quote.',
    },
  },
  notFound: {
    ar: { title: 'الصفحة غير موجودة | ميرزونا', desc: 'الصفحة المطلوبة غير موجودة.', h1: 'الصفحة غير موجودة', lead: 'الرابط الذي فتحته غير صحيح أو انتقلت الصفحة. ارجع إلى الرئيسية أو تصفّح الخدمات.' },
    en: { title: 'Page not found | Merzona', desc: 'The requested page was not found.', h1: 'Page not found', lead: 'The link may be wrong or the page has moved. Go back home or browse the services.' },
  },
};
