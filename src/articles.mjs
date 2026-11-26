// مقالات وقاموس مصطلحات: معلومات عامة عن المجال فقط، بدون أرقام أو ادعاءات عن الشركة.
// تختلف تسميات المواد من مدينة لأخرى، فبعضها مذكور بصيغة "يُسمّى أحياناً".

export const labels = {
  ar: {
    nav: 'المقالات', glossaryNav: 'قاموس المصطلحات', breadcrumb: 'المقالات', breadcrumbGlossary: 'قاموس المصطلحات',
    readMore: 'اقرأ المقال', latestH: 'مقالات تساعدك قبل الطلب', latestP: 'شروحات مبسّطة بالمصطلحات التي يستعملها الناس في دمشق وسوريا والإمارات.',
    allArticles: 'كل المقالات', glossaryTeaserH: 'قاموس الألمنيوم والزجاج', glossaryTeaserP: 'سيكوريت أم تمبرد؟ ألمنيوم أم ألومنيوم؟ دربزين أم درابزين؟ كل التسميات ومعانيها في صفحة واحدة.',
    glossaryLink: 'افتح القاموس', relatedServices: 'الخدمات المتعلقة', alsoRead: 'اقرأ أيضاً', faqH: 'أسئلة شائعة',
  },
  en: {
    nav: 'Articles', glossaryNav: 'Glossary', breadcrumb: 'Articles', breadcrumbGlossary: 'Glossary',
    readMore: 'Read the article', latestH: 'Articles to read before you order', latestP: 'Plain explanations using the terms people use in Damascus, Syria and the UAE.',
    allArticles: 'All articles', glossaryTeaserH: 'Aluminum and glass glossary', glossaryTeaserP: 'Tempered or "securit"? Aluminum or aluminium? Every name and what it means, on one page.',
    glossaryLink: 'Open the glossary', relatedServices: 'Related services', alsoRead: 'Also read', faqH: 'Common questions',
  },
};

export const articlesIndex = {
  ar: {
    title: 'مقالات الألمنيوم والزجاج في دمشق وسوريا | ميرزونا',
    desc: 'شروحات مبسّطة عن زجاج السيكوريت (التمبرد)، الزجاج المزدوج، شبابيك الألمنيوم، الكيرتن وول، الدرابزين وكبائن الشاور، بالمصطلحات التي يستعملها الناس في دمشق وسوريا.',
    h1: 'مقالات الألمنيوم والزجاج',
    lead: 'شروحات مبسّطة قبل أن تطلب: الفرق بين الأنواع، وكيف تختار، وما تحتاج أن تحضّره. نذكر فيها الأسماء المختلفة للمادة الواحدة حتى تجد ما تبحث عنه.',
  },
  en: {
    title: 'Aluminum and Glass Articles for Damascus and Syria | Merzona',
    desc: 'Plain explanations of tempered glass, double glazing, aluminum windows, curtain walls, railings and shower cabins, using the terms people use in Damascus, Syria and the UAE.',
    h1: 'Aluminum and glass articles',
    lead: 'Plain explanations before you order: the difference between types, how to choose, and what to prepare. We mention the different names for the same material so you can find what you are looking for.',
  },
};

export const articles = [
  {
    slug: 'tempered-glass-securit',
    services: ['shower-cabins', 'glass-partitions', 'railings'],
    ar: {
      title: 'زجاج سيكوريت (تمبرد) أم مقسّى؟ الفرق والاستخدامات',
      desc: 'زجاج السيكوريت هو نفسه التمبرد والمقسّى، وبعضهم يقول ازاز سكريت. تعرّف على معناه، وأين يُستعمل في الشاور والدرابزين والقواطع والأبواب، وكيف تميّزه عن العادي.',
      h1: 'زجاج سيكوريت وتمبرد ومقسّى: اسم واحد لمادة واحدة',
      lead: 'قد تسمعه «سيكوريت» في دمشق، و«تمبرد» عند غيرهم، و«مقسّى» في الكتابة الرسمية، وبعض اللهجات تقول «ازاز سكريت». كلها تعني زجاجاً عُولج بالحرارة ليصبح أقوى من الزجاج العادي.',
      sections: [
        ['ما هو زجاج السيكوريت؟', [
          'هو زجاج عادي يُسخَّن إلى درجة عالية ثم يُبرَّد بسرعة، فيكتسب مقاومة أعلى للصدمات والانحناء. تسميته بالإنكليزية Tempered Glass، ومنها جاءت كلمة «تمبرد»، أما «سيكوريت» فمأخوذة من كلمة security أي الأمان.',
          'لا يمكن قصّه أو ثقبه بعد التقسية، لذلك تُؤخذ القياسات وتُنفَّذ الثقوب والحفوف قبل أن يدخل الفرن. وهذا سبب أهمية القياس الدقيق قبل الطلب.',
        ]],
        ['كيف يتصرف عند الكسر؟', [
          'إذا انكسر الزجاج المقسّى تفتّت إلى قطع صغيرة ذات حواف غير حادة نسبياً، بخلاف الزجاج العادي الذي يتحول إلى شظايا طويلة حادة. لذلك يُطلب في الأماكن التي قد يلمسها الناس أو يرتطمون بها.',
        ]],
        ['أين يُستعمل السيكوريت؟', [
          'كبائن الشاور وأبوابها، لأنها قريبة من الجسم وفي مكان زلق.',
          'درابزين الزجاج على الدرج والشرفات والتراسات.',
          'قواطع المكاتب والمحال وأبواب الزجاج بدون إطار.',
          'واجهات المحال وأبواب الدخول، ورفوف الزجاج والطاولات.',
        ]],
        ['كيف تميّزه عن الزجاج العادي؟', [
          'يوجد غالباً ختم صغير في زاوية اللوح يدل على التقسية. وإذا نظرت إليه من زاوية مع زجاج مستقطب (كنظارات الشمس المستقطبة) قد تظهر بقع أو خطوط داكنة، وهذا طبيعي في الزجاج المقسّى.',
          'اطلب دائماً من المنفّذ أن يوضح أن الزجاج مقسّى، ولا تكتفِ بكلمة «زجاج ثخين».',
        ]],
        ['كيف تطلب السيكوريت؟', [
          'حدّد المكان (شاور، درابزين، قاطع أو باب)، والقياسات الدقيقة، والسماكة المناسبة للاستعمال، واللون (شفاف أو مصنفر أو ملوّن)، ونوع الإكسسوارات. وأرسل لنا صورة المكان عبر واتساب لنساعدك في اختيار الأنسب.',
        ]],
      ],
      faq: [
        ['هل السيكوريت والتمبرد نفس الشيء؟', 'نعم. سيكوريت وتمبرد ومقسّى أسماء لزجاج واحد عُولج بالحرارة، والفرق في التسمية فقط بحسب اللهجة.'],
        ['هل يمكن قصّ السيكوريت بعد تركيبه؟', 'لا. القص والثقب والتسوية تتم قبل التقسية، ولا يمكن تعديل اللوح بعدها.'],
        ['هل السيكوريت لا ينكسر؟', 'ليس كذلك، فهو أقوى من العادي لكنه ينكسر عند صدمة قوية أو عيب في الحافة، وعندها يتفتت إلى قطع صغيرة.'],
      ],
    },
    en: {
      title: 'Tempered Glass, "Securit" or "Tempered": What It Is',
      desc: 'Securit, tempered and hardened glass are the same thing. Learn what it is, where it is used in showers, railings and partitions, and how to tell it from ordinary glass.',
      h1: 'Securit, tempered and hardened glass: one material, many names',
      lead: 'In Damascus you may hear "securit", elsewhere "tempered" or "hardened". All of them mean glass treated with heat so that it is stronger than ordinary glass.',
      sections: [
        ['What is tempered glass?', ['It is ordinary glass heated to a high temperature and then cooled quickly, which gives it higher resistance to impact and bending. In Arabic it is called securit, tempered (from the English word) or muqassa.', 'It cannot be cut or drilled after tempering, so sizes, holes and edges are finished before it goes into the furnace. That is why accurate measuring matters before you order.']],
        ['How does it break?', ['When tempered glass breaks it crumbles into small, relatively blunt pieces, unlike ordinary glass that breaks into long sharp shards. That is why it is used where people may touch or bump into it.']],
        ['Where is it used?', ['Shower cabins and their doors.', 'Glass railings on stairs, balconies and terraces.', 'Office and shop partitions and frameless glass doors.', 'Shopfronts, entrance doors, shelves and tables.']],
        ['How to order it', ['Tell us the place (shower, railing, partition or door), the exact sizes, the thickness suited to the use, the color (clear, frosted or tinted) and the fittings. Send a photo of the place on WhatsApp and we will help you choose.']],
      ],
      faq: [
        ['Are securit and tempered the same?', 'Yes. They are names for the same heat-treated glass; the difference is only in the dialect.'],
        ['Can tempered glass be cut after installation?', 'No. Cutting, drilling and edge work are done before tempering.'],
      ],
    },
  },
  {
    slug: 'aluminum-windows-doors-damascus',
    services: ['windows-doors', 'sliding-systems', 'folding-systems'],
    ar: {
      title: 'شبابيك وأبواب ألمنيوم: الأنواع وكيف تختار',
      desc: 'دليل اختيار شبابيك وأبواب الألمنيوم في دمشق: الفرق بين المفصلي والسحّاب والقلّاب والفولدينغ، وأنواع القطاعات والزجاج والعزل، وماذا تحضّر قبل التسعير.',
      h1: 'شبابيك وأبواب ألمنيوم: كيف تختار النوع المناسب',
      lead: 'يُكتب «ألمنيوم» و«ألومنيوم» و«المنيوم»، ويُسمّى الشغل «منجور ألمنيوم» أو «نوافذ وأبواب ألمنيوم». المهم أن تعرف أنواع الفتح والقطاعات لتطلب ما يناسب بيتك.',
      sections: [
        ['المفصلي والقلّاب', [
          'الشباك المفصلي يفتح على مفصلات مثل الباب، فيحتاج إلى مساحة للتأرجح ويعطي إحكاماً جيداً عند الإغلاق. أما القلّاب فيميل من الأعلى للتهوية مع بقاء الشباك مغلقاً من الأسفل.',
        ]],
        ['السحّاب (الانزلاقي)', [
          'تنزلق الضلفة على سكّة فلا تحتاج مساحة للفتح، وهي مناسبة للشرفات والفتحات الواسعة والمطابخ الضيقة. تتوفر أنظمة سحّاب عازلة للحرارة والصوت.',
        ]],
        ['الفولدينغ', [
          'ضلف تُطوى وتتراصّ على جانب الفتحة لتفتحها بالكامل، وتناسب الشرفات والصالات والمطاعم.',
        ]],
        ['القطاع العادي والقطاع العازل', [
          'القطاع العازل للحرارة (Thermal Break) يفصل الجزء الداخلي عن الخارجي بشريط عازل، فيقلل انتقال الحرارة والبرودة عبر الإطار. ينفع في الأماكن التي تهمّك فيها فاتورة التدفئة والتبريد.',
        ]],
        ['الزجاج داخل الشباك', [
          'يمكن تركيب زجاج مفرد أو مزدوج (عازل) أو مقسّى أو لامينيت بحسب الحاجة. الزجاج المزدوج يحسّن العزل الحراري والصوتي، والمقسّى يزيد الأمان.',
        ]],
        ['ماذا تحضّر قبل التسعير؟', [
          'صورة الفتحات وقياساتها، ونوع الفتح، واللون (أبيض، أسود، رمادي، خشبي...)، ونوع الزجاج، وعدد الفتحات. أرسلها إلينا عبر واتساب ونعطيك عرض سعر واضحاً.',
        ]],
      ],
      faq: [
        ['ما الفرق بين الشباك المفصلي والسحّاب؟', 'المفصلي يفتح بالتأرجح على مفصلات، والسحّاب ينزلق على سكّة ولا يحتاج مساحة، ويناسب الفتحات العريضة.'],
        ['هل ألمنيوم وألومنيوم نفس الشيء؟', 'نعم، هي كتابتان لنفس المعدن، والاسم الشائع في الأسواق «ألمنيوم».'],
        ['هل يلزم قياس الفتحات بنفسي؟', 'أرسل لنا القياسات التقريبية وصورة المكان، ويتم تأكيد القياس النهائي قبل التصنيع.'],
      ],
    },
    en: {
      title: 'Aluminum Windows and Doors: Types and How to Choose',
      desc: 'A guide to choosing aluminum windows and doors in Damascus: hinged, tilt, sliding and folding, profile and glass types, insulation, and what to prepare before a quote.',
      h1: 'Aluminum windows and doors: how to choose the right type',
      lead: 'Aluminum is written "aluminium" or "aluminum", and the work is called aluminum joinery. What matters is knowing the opening types and profiles so you can order what suits your home.',
      sections: [
        ['Hinged and tilt', ['A hinged window opens on hinges like a door, needs swing space and seals well when closed. A tilt window tips from the top for ventilation while staying closed at the bottom.']],
        ['Sliding', ['The panel glides on a track and needs no opening space, which suits balconies, wide openings and narrow kitchens. Sliding systems with thermal and sound insulation are available.']],
        ['Folding', ['Panels fold and stack to one side of the opening to open it fully. They suit balconies, lounges and restaurants.']],
        ['Standard and thermal break profiles', ['A thermal break profile separates the inner part from the outer part with an insulating strip, reducing heat transfer through the frame.']],
        ['What to prepare before a quote', ['A photo of the openings and their sizes, the opening type, the color, the glass type and the number of openings. Send them on WhatsApp and we will give you a clear quote.']],
      ],
      faq: [
        ['What is the difference between hinged and sliding windows?', 'A hinged window swings open on hinges. A sliding window glides on a track and needs no swing space.'],
      ],
    },
  },
  {
    slug: 'double-glazing-insulated-glass',
    services: ['windows-doors', 'sliding-systems', 'curtain-wall'],
    ar: {
      title: 'زجاج مزدوج (دبل جلاس) عازل: ما هو ومتى تحتاجه',
      desc: 'الزجاج المزدوج أو دبل جلاس أو الزجاج العازل: لوحان بينهما فراغ مغلق يحدّ من انتقال الحرارة والصوت. تعرّف على فوائده ومتى يستحق، والفرق عن اللامينيت والسيكوريت.',
      h1: 'الزجاج المزدوج (دبل جلاس): العزل الحراري والصوتي للشبابيك',
      lead: 'يُسمّى «دبل جلاس» و«زجاج مزدوج» و«زجاج عازل» و«IGU» عند أهل المهنة. ومعناه لوحان من الزجاج بينهما فراغ مغلق.',
      sections: [
        ['كيف يعمل؟', ['يفصل الفراغ المغلق بين اللوحين جزءاً من انتقال الحرارة والصوت، فيقلّ تسرّب البرودة شتاءً والحرارة صيفاً. ويقلّ تكاثف الرطوبة على الزجاج الداخلي في كثير من الأحوال.']],
        ['متى تحتاجه؟', ['في الغرف المطلّة على الشوارع المزدحمة بسبب الضجيج.', 'في الواجهات الزجاجية الكبيرة والمجالس الزجاجية.', 'في البيوت التي تريد تخفيف كلفة التدفئة والتبريد.']],
        ['دبل جلاس والسيكوريت واللامينيت', ['الدبل جلاس يُعنى بالعزل. السيكوريت يُعنى بالقوة والأمان. اللامينيت (المصفّح) لوحان ملتصقان بطبقة بلاستيكية، فيبقى الزجاج متماسكاً عند الكسر. ويمكن الجمع بينها في لوح واحد، كأن يكون أحد لوحي الدبل جلاس مقسّى.']],
        ['زجاج Low-E', ['هو زجاج بطبقة رقيقة تعكس جزءاً من الإشعاع الحراري، فيحسّن العزل مع بقاء الشفافية. اسأل عنه إذا كان العزل أولوية.']],
      ],
      faq: [
        ['ما هو الدبل جلاس؟', 'زجاج مزدوج: لوحان بينهما فراغ مغلق لتحسين العزل الحراري والصوتي.'],
        ['هل الزجاج المزدوج مقسّى؟', 'ليس بالضرورة. يمكن أن يكون عادياً أو مقسّى أو لامينيت أو Low-E، بحسب الطلب.'],
      ],
    },
    en: {
      title: 'Double Glazing (Double Glass): What It Is and When You Need It',
      desc: 'Double glazing, double glass or insulated glass: two panes with a sealed gap that reduces heat and sound transfer. Learn its benefits and how it differs from laminated and tempered glass.',
      h1: 'Double glazing: thermal and sound insulation for windows',
      lead: 'It is called "double glass", double glazing, insulated glass or IGU in the trade. It means two panes of glass with a sealed gap between them.',
      sections: [
        ['How does it work?', ['The sealed gap between the panes slows heat and sound transfer, so less cold gets in during winter and less heat in summer.']],
        ['When do you need it?', ['Rooms facing busy streets, because of noise.', 'Large glass facades and glass majlis.', 'Homes that want lower heating and cooling cost.']],
        ['Double glazing, tempered and laminated', ['Double glazing is about insulation. Tempered is about strength and safety. Laminated is two panes bonded with a plastic layer so the glass stays together when broken. They can be combined in one unit.']],
      ],
      faq: [
        ['What is double glazing?', 'Two panes with a sealed gap, to improve thermal and sound insulation.'],
      ],
    },
  },
  {
    slug: 'curtain-wall-glass-facades',
    services: ['curtain-wall', 'shopfronts', 'cladding'],
    ar: {
      title: 'كيرتن وول والواجهات الزجاجية: الأنواع وكيف تختار',
      desc: 'الكيرتن وول (كارتن وول، واجهات ستركشر) واجهة زجاجية على هيكل ألمنيوم. اعرف أنواعها التقليدية وSSG، وما تحتاجه لتسعير واجهة في دمشق.',
      h1: 'الكيرتن وول والواجهات الزجاجية',
      lead: 'يكتبه الناس كيرتن وول أو كارتن وول، ويقولون أيضاً «واجهة ستركشر» أو «واجهة زجاج وألمنيوم»، ويقابله في العربية الفصيحة «الجدار الستاري».',
      sections: [
        ['ما هو الكيرتن وول؟', ['واجهة زجاجية على هيكل ألمنيوم تُعلَّق على هيكل المبنى. لا تحمل أحمال المبنى بل تحمل وزنها وتنقل أحمال الرياح إلى هيكله.']],
        ['الأنواع الرئيسية', ['التقليدي: يظهر فيه كبس ألمنيوم على وجه الزجاج.', 'SSG أو الستركشر: يُثبَّت الزجاج بالسيليكون الإنشائي فيظهر سطح زجاجي أملس.', 'نصف ستركشر: كبسات في اتجاه وزجاج مثبّت بالسيليكون في الاتجاه الآخر.']],
        ['اختيار الزجاج', ['يمكن أن يكون الزجاج مزدوجاً عازلاً أو مقسّى أو لامينيت أو عاكساً أو ملوّناً بحسب الواجهة والاتجاه ومستوى العزل.']],
        ['ماذا نحتاج للتسعير؟', ['مساحة الواجهة وارتفاعها، ومخططات المبنى أو صور الواجهة، ونوع النظام والزجاج المطلوب، ولون الألمنيوم، وتفاصيل الأبواب والفتحات داخل الواجهة.']],
      ],
      faq: [
        ['ما الفرق بين الكيرتن وول والكلادينغ؟', 'الكيرتن وول واجهة زجاجية. أما الكلادينغ فألواح (غالباً ألمنيوم مركّب) تُكسى بها الواجهة، ويمكن الجمع بينهما في واجهة واحدة.'],
        ['هل الكيرتن وول يحمل المبنى؟', 'لا. هو يحمل وزنه وأحمال الرياح وينقلها إلى هيكل المبنى.'],
      ],
    },
    en: {
      title: 'Curtain Wall and Glass Facades: Types and How to Choose',
      desc: 'Curtain wall (also written "carten wall", structural glazing) is a glass facade on an aluminum frame. Learn the conventional and SSG types and what is needed to price a facade in Damascus.',
      h1: 'Curtain wall and glass facades',
      lead: 'People write it "curtain wall" or "carten wall" and also say structural facade or glass and aluminum facade.',
      sections: [
        ['What is a curtain wall?', ['A glass facade on an aluminum frame, hung on the building structure. It does not carry building loads; it carries its own weight and passes wind loads to the structure.']],
        ['Main types', ['Conventional: aluminum caps show on the glass face.', 'SSG (structural glazing): glass fixed with structural silicone for a smooth glass surface.', 'Semi-structural: caps in one direction, silicone-fixed glass in the other.']],
        ['What we need to price it', ['The facade area and height, building drawings or facade photos, the system and glass type, the aluminum color and the door and opening details.']],
      ],
      faq: [
        ['What is the difference between curtain wall and cladding?', 'A curtain wall is a glass facade. Cladding is panels, usually aluminum composite, covering the facade. They can be combined.'],
      ],
    },
  },
  {
    slug: 'glass-railings-aluminum-balustrades',
    services: ['railings', 'glass-partitions'],
    ar: {
      title: 'درابزين زجاج وألمنيوم: دربزين أم درابزين؟ الأنواع',
      desc: 'دربزين أو درابزين أو هاندريل: الأنواع الرئيسية (ألمنيوم مصبوب، ألمنيوم قطاعات، زجاج سيكوريت)، وأين يناسب كل نوع في الدرج والشرفة والتراس.',
      h1: 'درابزين الزجاج والألمنيوم للدرج والشرفات',
      lead: 'تُكتب الكلمة «درابزين» و«دربزين» و«دريزين» و«هاندريل» (Handrail)، وكلها تدل على الحاجز الذي يحمي حافة الدرج أو الشرفة أو التراس.',
      sections: [
        ['درابزين الألمنيوم المصبوب', ['يُصنع بصبّ المعدن في قوالب، فيتيح زخارف وأشكالاً كلاسيكية يصعب تنفيذها بالقطاعات العادية، ويأتي بتشطيبات كالأسود والبرونزي والذهبي. مناسب للأسوار والبلكونات والأدراج ذات الطابع الكلاسيكي.']],
        ['درابزين الألمنيوم بالقطاعات', ['خطوط بسيطة ومظهر حديث، يُصنع من قطاعات ألمنيوم ويمكن دمجه مع الزجاج.']],
        ['درابزين الزجاج', ['زجاج سيكوريت أو لامينيت يمنح إطلالة مفتوحة وخفة بصرية. يُثبَّت من الأرض أو من الجانب، وفيه أنظمة بقوائم وأنظمة بدون قوائم ظاهرة.']],
        ['ماذا تحدّد قبل الطلب؟', ['الموقع (درج أو بلكون أو تراس)، والطول التقريبي، وارتفاع الحاجز المطلوب، ونمط التصميم، وصورة للمكان وطريقة التثبيت الممكنة (أرضية أم جانبية).']],
      ],
      faq: [
        ['ما الفرق بين الدربزين والدرابزين؟', 'نفس الكلمة بكتابتين، والمقصود الحاجز الذي يحمي حافة الدرج أو الشرفة.'],
        ['أي نوع أنسب لشرفة تطل على الشارع؟', 'يعتمد على الذوق والخصوصية: المصبوب يعطي حجباً جزئياً وطابعاً زخرفياً، والزجاج يعطي إطلالة مفتوحة، ويمكن الجمع بينهما.'],
      ],
    },
    en: {
      title: 'Glass and Aluminum Railings: Types for Stairs and Balconies',
      desc: 'Railing, balustrade or handrail: the main types (cast aluminum, aluminum profiles, tempered glass) and where each suits stairs, balconies and terraces.',
      h1: 'Glass and aluminum railings for stairs and balconies',
      lead: 'In Arabic the word is written darabzeen, dirbzeen or handrail. All mean the barrier that protects the edge of a staircase, balcony or terrace.',
      sections: [
        ['Cast aluminum railings', ['Made by pouring metal into molds, allowing ornament and classic shapes that are hard to make from standard profiles, in finishes such as black, bronze and gold.']],
        ['Aluminum profile railings', ['Simple lines and a modern look, made from aluminum profiles and can be combined with glass.']],
        ['Glass railings', ['Tempered or laminated glass gives an open view and visual lightness, fixed on the floor or on the side.']],
        ['What to decide before ordering', ['The location (stairs, balcony or terrace), the approximate length, the barrier height, the design style and a photo of the place.']],
      ],
      faq: [
        ['Which type suits a balcony facing the street?', 'It depends on taste and privacy: cast aluminum gives partial screening and an ornamental look, glass gives an open view, and they can be combined.'],
      ],
    },
  },
  {
    slug: 'shower-cabins-guide',
    services: ['shower-cabins', 'mirrors'],
    ar: {
      title: 'كبائن شاور زجاج (شاور بوكس): أنواعها وكيف تختار',
      desc: 'كبينة الشاور أو الشاور بوكس أو شاشة الشاور: الفرق بين الزاوية والمستقيم والمفتوح، والباب المفصلي والسحّاب، والزجاج السيكوريت الشفاف والمصنفر.',
      h1: 'كبائن الشاور الزجاجية: كيف تختار الشكل والزجاج',
      lead: 'تُسمّى كبينة شاور أو «شاور بوكس» أو «شاشة شاور» أو «حاجز دوش». وفي كل الأحوال يلزم أن يكون الزجاج سيكوريت (مقسّى).',
      sections: [
        ['أشكال الكبائن', ['الزاوية: بابان أو باب وجانب ثابت في زاوية الحمام.', 'المستقيم: حاجز واحد على جانب البانيو أو منطقة الاستحمام.', 'المفتوح (Walk-in): لوح ثابت بدون باب، يعطي مظهراً حديثاً ويحتاج مساحة مناسبة لتجنب التطاير.']],
        ['الباب المفصلي أم السحّاب؟', ['المفصلي يحتاج مساحة أمام الكبينة ليفتح، والسحّاب ينزلق ويناسب الحمامات الصغيرة.']],
        ['الزجاج', ['سيكوريت شفاف يعطي إحساساً بالاتساع، ومصنفر يعطي خصوصية، وهناك زجاج ملوّن أو مطبوع. يمكن معالجة الزجاج بطبقة تقلّل التصاق الكلس.']],
        ['الإكسسوارات', ['المقابض والمفصلات والسكّر تأتي بتشطيبات مثل الستانلس والأسود والذهبي. اختر ما ينسجم مع حنفيات الحمام.']],
        ['ماذا تحضّر؟', ['قياسات منطقة الاستحمام (العرض والعمق والارتفاع)، وشكل الكبينة، ونوع الباب، ولون الإكسسوارات، وصورة الحمام.']],
      ],
      faq: [
        ['ما الزجاج المناسب للشاور؟', 'الزجاج السيكوريت (المقسّى) لأنه أقوى من العادي ويتفتت إلى قطع صغيرة عند الكسر.'],
        ['هل يمكن تركيب الكبينة في حمام صغير؟', 'نعم، الباب السحّاب والشكل الزاوي يناسبان المساحات الصغيرة.'],
      ],
    },
    en: {
      title: 'Glass Shower Cabins (Shower Box): Types and How to Choose',
      desc: 'Shower cabin, shower box or shower screen: corner, straight and walk-in layouts, hinged and sliding doors, and clear or frosted tempered glass.',
      h1: 'Glass shower cabins: choosing the layout and glass',
      lead: 'Also called a shower box, shower screen or shower enclosure. In every case the glass should be tempered.',
      sections: [
        ['Layouts', ['Corner: two doors, or a door and a fixed side, in the corner of the bathroom.', 'Straight: one screen along the bath or shower area.', 'Walk-in: a fixed pane without a door for a modern look; it needs enough space to limit splashes.']],
        ['Hinged or sliding door?', ['A hinged door needs space in front of the cabin to open. A sliding door glides and suits small bathrooms.']],
        ['What to prepare', ['The shower area sizes (width, depth, height), the layout, the door type, the fittings color and a photo of the bathroom.']],
      ],
      faq: [
        ['Which glass is right for a shower?', 'Tempered glass, because it is stronger than ordinary glass and breaks into small pieces.'],
      ],
    },
  },
  {
    slug: 'request-quote-aluminum-glass-damascus',
    services: ['windows-doors', 'curtain-wall', 'railings'],
    ar: {
      title: 'كيف تطلب عرض سعر ألمنيوم وزجاج في دمشق؟',
      desc: 'خطوات عملية لطلب عرض سعر ألمنيوم وزجاج في دمشق وريفها: ماذا تصوّر، وما القياسات والتفاصيل المطلوبة، وكيف تُقارن بين العروض.',
      h1: 'كيف تطلب عرض سعر ألمنيوم وزجاج في دمشق',
      lead: 'كلما كانت المعلومات التي ترسلها أوضح كان عرض السعر أدقّ وأسرع. هذه قائمة عملية قبل أن تراسل أي شركة.',
      sections: [
        ['1. صوّر المكان', ['صورة عامة للفتحة أو الواجهة، وصورة قريبة لأي تفصيل مميز، ويفضل تصوير المكان من الداخل والخارج.']],
        ['2. حدّد القياسات التقريبية', ['العرض والارتفاع لكل فتحة، أو الطول الإجمالي للدرابزين، أو مساحة الواجهة. القياس النهائي يُؤكَّد عادة قبل التصنيع.']],
        ['3. حدّد النوع والتفاصيل', ['نوع الفتح، ولون الألمنيوم، ونوع الزجاج (مفرد، مزدوج، سيكوريت، لامينيت، مصنفر)، والإكسسوارات.']],
        ['4. اذكر المنطقة', ['دمشق أو ريف دمشق أو محافظة أخرى، لأن الموقع يؤثر على ترتيب التركيب والنقل.']],
        ['5. قارن العروض بذكاء', ['قارن النوع والمواصفات قبل السعر: نوع القطاع، ونوع الزجاج، والإكسسوارات، وما إذا كان التركيب مشمولاً، ومدة التنفيذ.']],
        ['كيف تتواصل معنا؟', ['راسلنا على واتساب فرع دمشق وأرسل الصور والقياسات، أو زر فرعنا في المزة خلال الدوام من السبت إلى الخميس.']],
      ],
      faq: [
        ['هل تخدمون خارج دمشق؟', 'نعم، نخدم دمشق وريفها وباقي المحافظات السورية.'],
        ['هل يمكن إرسال صور فقط دون قياسات؟', 'يمكنك البدء بالصور، ونحدّد معك ما يلزم من قياسات.'],
      ],
    },
    en: {
      title: 'How to Request an Aluminum and Glass Quote in Damascus',
      desc: 'Practical steps to request an aluminum and glass quote in Damascus and its countryside: what to photograph, which sizes and details are needed, and how to compare offers.',
      h1: 'How to request an aluminum and glass quote in Damascus',
      lead: 'The clearer the information you send, the more accurate and faster the quote. Here is a practical checklist before you message any company.',
      sections: [
        ['1. Photograph the place', ['A general photo of the opening or facade, and a close photo of any special detail, ideally from inside and outside.']],
        ['2. Give approximate sizes', ['Width and height of each opening, the total railing length, or the facade area. Final sizes are normally confirmed before manufacturing.']],
        ['3. Specify type and details', ['Opening type, aluminum color, glass type (single, double, tempered, laminated, frosted) and fittings.']],
        ['4. Compare offers wisely', ['Compare the specification before the price: profile type, glass type, fittings, whether installation is included, and timing.']],
        ['How to reach us', ['Message the Damascus branch on WhatsApp with photos and sizes, or visit our Mazzeh branch during working hours, Saturday to Thursday.']],
      ],
      faq: [
        ['Do you serve outside Damascus?', 'Yes, we serve Damascus, its countryside and the other Syrian governorates.'],
      ],
    },
  },
  {
    slug: 'pergolas-shades-guide',
    services: ['pergolas-shades', 'glass-majlis', 'skylights'],
    ar: {
      title: 'بيرغولا ومظلات ألمنيوم: برغولا أم برجولا؟ الأنواع',
      desc: 'البيرغولا (برغولا، برجولا) والمظلات: الفرق بينهما، والسقف المفتوح والمغطّى، والمواد، وما تحدّده قبل الطلب للحدائق والأسطح ومواقف السيارات.',
      h1: 'بيرغولا ومظلات ألمنيوم للحدائق والأسطح',
      lead: 'تُكتب «بيرغولا» و«برغولا» و«برجولا» و«بيرجولا»، وكلها هيكل يظلّل الجلسات الخارجية. وتُستعمل «المظلات» عادة لمواقف السيارات والمداخل.',
      sections: [
        ['البيرغولا', ['هيكل ألمنيوم بعوارض مفتوحة أو بسقف مغطّى، يظلّل الحدائق والأسطح والتراسات، ويمكن دمج الإنارة فيه وإضافة ستائر جانبية أو زجاج.']],
        ['المظلات', ['تظلّل مواقف السيارات والمداخل وممرات المشاة، وتُصنع من الألمنيوم مع تغطية بألواح مناسبة.']],
        ['سقف مفتوح أم مغطّى؟', ['المفتوح يعطي تظليلاً جزئياً وتهوية، والمغطّى يحمي من المطر والشمس بدرجة أكبر. ويمكن اعتماد حلول بعوارض قابلة للتحريك أو ألواح.']],
        ['ماذا تحدّد؟', ['المساحة والارتفاع المتاح، وشكل السقف، وطريقة التثبيت (على أرض أو على جدار)، واللون، والحاجة إلى إنارة أو ستائر.']],
      ],
      faq: [
        ['ما الفرق بين البيرغولا والمظلة؟', 'البيرغولا للجلسات الخارجية بطابع جمالي، والمظلة غالباً لمواقف السيارات والمداخل بطابع عملي.'],
      ],
    },
    en: {
      title: 'Aluminum Pergolas and Shades: Types and How to Choose',
      desc: 'Pergolas (also written bergola) and shades: the difference between them, open and covered roofs, materials, and what to decide before ordering for gardens, rooftops and car parks.',
      h1: 'Aluminum pergolas and shades for gardens and rooftops',
      lead: 'Written pergola, bergola or burgula in Arabic, it is a structure that shades outdoor seating. "Shades" usually means car park and entrance canopies.',
      sections: [
        ['Pergola', ['An aluminum structure with open beams or a covered roof, shading gardens, rooftops and terraces. Lighting can be built in, and side curtains or glass added.']],
        ['Shades', ['They shade car parks, entrances and walkways, made of aluminum with suitable panel cover.']],
        ['What to decide', ['The area and available height, the roof style, how it is fixed (floor or wall), the color, and any lighting or curtains.']],
      ],
      faq: [
        ['What is the difference between a pergola and a shade?', 'A pergola is for outdoor seating with a decorative character; a shade is mostly for car parks and entrances.'],
      ],
    },
  },
  {
    slug: 'shopfront-glass-office-partitions',
    services: ['glass-partitions', 'shopfronts', 'windows-doors'],
    ar: {
      title: 'واجهات المحلات وقواطع المكاتب الزجاجية: كيف تختار',
      desc: 'دليل مبسّط لاختيار واجهة محل زجاجية أو قاطع زجاجي لمكتب: الزجاج المقسّى، الأبواب بدون إطار أو بإطار ألمنيوم، الخصوصية، وما تحتاج لتحضيره قبل التسعير.',
      h1: 'واجهة المحل وقواطع المكتب الزجاجية: كيف تختار',
      lead: 'الزجاج يجعل المحل ظاهراً للمارّة والمكتب مضيئاً. المهم أن تعرف أنواع الأبواب والقواطع وما يناسب استعمالك قبل أن تطلب عرض سعر.',
      sections: [
        ['الواجهة الزجاجية للمحل', [
          'واجهة المحل تُنفَّذ غالباً من زجاج مقسّى (سيكوريت) بإطار ألمنيوم أو بدون إطار مع أبواب زجاجية، وتُختار حسب الشكل المطلوب ومتطلبات الأمان للمكان.',
          'يمكن إضافة مدخل بباب مفصلي أو سحّاب، ولوحة الاسم والإضاءة تُنسَّق مع الواجهة قبل التنفيذ.',
        ]],
        ['قواطع المكاتب', [
          'القاطع الزجاجي يقسم المكتب إلى غرف مع بقاء الضوء الطبيعي. يتوفر بإطار ألمنيوم أو بدون إطار، وبزجاج شفاف أو مصنفر أو ملوّن بحسب الخصوصية المطلوبة.',
          'يمكن تركيب باب في القاطع بنظام مفصلي أو سحّاب، ويُتفق على نوع الإكسسوارات قبل التنفيذ.',
        ]],
        ['بإطار أم بدون إطار؟', [
          'بدون إطار يعطي مظهراً أنظف وضوءاً أكثر، وبإطار ألمنيوم يعطي تثبيتاً أوضح وخطوطاً تحدّد المساحات. الاختيار يعود لذوقك وطبيعة المكان.',
        ]],
        ['الخصوصية', [
          'للخصوصية يمكن استعمال زجاج مصنفر أو ملصقات بدرجات شفافية مختلفة على جزء من القاطع، مع إبقاء باقي الزجاج شفافاً.',
        ]],
        ['ماذا تحضّر قبل التسعير؟', [
          'صورة المكان، وعرض وارتفاع الواجهة أو القاطع، وعدد الأبواب ونوع فتحها، واللون المطلوب للإطار، ودرجة الخصوصية. أرسلها على واتساب إلى فرع دمشق ونرد بعرض السعر.',
        ]],
      ],
      faq: [
        ['هل زجاج قواطع المكاتب سيكوريت؟', 'يُنفَّذ غالباً من الزجاج المقسّى لأنه أكثر أماناً، ويُحدَّد النوع والسماكة مع المنفّذ قبل الطلب.'],
        ['هل يمكن تركيب باب داخل القاطع الزجاجي؟', 'نعم، يمكن تركيب باب مفصلي أو سحّاب داخل القاطع، ويُتفق على نوع الإكسسوارات.'],
        ['ما الذي أرسله للحصول على عرض سعر؟', 'صورة للمكان والقياسات التقريبية وعدد الأبواب والتفاصيل المطلوبة، عبر واتساب.'],
      ],
    },
    en: {
      title: 'Glass Shopfronts and Office Partitions: How to Choose',
      desc: 'A simple guide to choosing a glass shopfront or an office glass partition: tempered glass, frameless or aluminum-framed doors, privacy, and what to prepare before a quote.',
      h1: 'Glass shopfronts and office partitions: how to choose',
      lead: 'Glass makes a shop visible to passers-by and an office bright. Know the door and partition types and what suits your use before you ask for a quote.',
      sections: [
        ['The glass shopfront', ['A shopfront is usually made of tempered (securit) glass, with an aluminum frame or frameless with glass doors, chosen by the look you want and the safety needs of the place.', 'An entrance with a hinged or sliding door can be added, and the sign and lighting are coordinated with the facade before work starts.']],
        ['Office partitions', ['A glass partition divides an office into rooms while keeping natural light. It comes with an aluminum frame or frameless, in clear, frosted or tinted glass depending on the privacy you need.', 'A hinged or sliding door can be fitted in the partition, and the fittings are agreed before work starts.']],
        ['Framed or frameless?', ['Frameless gives a cleaner look and more light; an aluminum frame gives clearer fixing and lines that define spaces. The choice depends on your taste and the place.']],
        ['Privacy', ['For privacy you can use frosted glass or films of different transparency on part of the partition and keep the rest clear.']],
        ['What to prepare before a quote', ['A photo of the place, the width and height of the facade or partition, the number of doors and how they open, the frame color and the privacy level. Send them on WhatsApp to the Damascus branch and we will reply with a quote.']],
      ],
      faq: [
        ['Is office partition glass tempered?', 'It is usually made of tempered glass because it is safer; the type and thickness are agreed before ordering.'],
        ['Can a door be fitted inside a glass partition?', 'Yes, a hinged or sliding door can be fitted, and the fittings are agreed in advance.'],
        ['What do I send to get a quote?', 'A photo of the place, approximate sizes, the number of doors and the details you need, on WhatsApp.'],
      ],
    },
  },
  {
    slug: 'compare-aluminum-glass-quotes',
    services: ['windows-doors', 'curtain-wall', 'railings'],
    ar: {
      title: 'كيف تقارن عروض أسعار الألمنيوم والزجاج؟ قائمة تدقيق',
      desc: 'قبل أن تختار أرخص عرض: قائمة تدقيق لمقارنة عروض الألمنيوم والزجاج في دمشق، من نوع القطاع والزجاج والإكسسوارات إلى التركيب والمواعيد، بدون أرقام.',
      h1: 'كيف تقارن عروض أسعار الألمنيوم والزجاج',
      lead: 'عرضان بنفس السعر قد يكونان مختلفين تماماً بالمواصفات. هذه قائمة تساعدك على المقارنة بعدل قبل أن تقرر.',
      sections: [
        ['قارن المواصفات قبل السعر', [
          'اكتب في كل عرض: نوع القطاع (عادي أو عازل)، وسماكته، ولونه، ونوع الزجاج (مفرد، مزدوج، مقسّى، لامينيت)، وسماكته.',
        ]],
        ['الإكسسوارات والأقفال', [
          'اسأل عن نوع المفصلات والعجلات والأقفال والمقابض، فهي تؤثر بسهولة الاستعمال وعمر الشغل.',
        ]],
        ['ما الذي يشمله السعر؟', [
          'تأكد هل يشمل السعر التركيب والنقل والإسفنج العازل والتشطيبات، أم أنها بنود منفصلة.',
        ]],
        ['القياس والمواعيد', [
          'اسأل من يقيس الفتحات ومتى يتم التسليم، وماذا يحصل إذا اختلف القياس النهائي عن التقريبي.',
        ]],
        ['الضمان وما بعد التركيب', [
          'اطلب أن يكون الضمان وما يغطيه مكتوباً، واسأل عن الصيانة بعد التركيب.',
        ]],
        ['أعمال سابقة', [
          'اطلب صوراً أو فيديو لأعمال منفّذة شبيهة بما تريد، وتحقق منها قبل أن تقرر.',
        ]],
      ],
      faq: [
        ['لماذا تختلف الأسعار بين عرض وآخر؟', 'لأن المواصفات تختلف: نوع القطاع وسماكته، ونوع الزجاج، والإكسسوارات، وما يشمله السعر من تركيب وتشطيبات.'],
        ['هل الأرخص هو الأفضل دائماً؟', 'ليس بالضرورة. قارن المواصفات المكتوبة أولاً، ثم السعر.'],
        ['كيف أحصل على عرض واضح؟', 'أرسل صورة للمكان والقياسات ونوع العمل عبر واتساب، واطلب أن يُكتب العرض بالمواصفات.'],
      ],
    },
    en: {
      title: 'How to Compare Aluminum and Glass Quotes: A Checklist',
      desc: 'Before you pick the cheapest offer: a checklist to compare aluminum and glass quotes in Damascus, from profile and glass type to fittings, installation and timing.',
      h1: 'How to compare aluminum and glass quotes',
      lead: 'Two quotes at the same price can be completely different in specification. This checklist helps you compare fairly before you decide.',
      sections: [
        ['Compare the specification before the price', ['Write down in each quote: the profile type (standard or thermal break), its thickness, its color, the glass type (single, double, tempered, laminated) and its thickness.']],
        ['Fittings and locks', ['Ask about hinges, rollers, locks and handles; they affect ease of use and how long the work lasts.']],
        ['What does the price include?', ['Check whether the price includes installation, transport, insulating foam and finishing, or whether they are separate items.']],
        ['Measuring and timing', ['Ask who measures the openings, when delivery happens, and what happens if the final size differs from the approximate one.']],
        ['Warranty and after installation', ['Ask for the warranty and what it covers in writing, and ask about maintenance after installation.']],
        ['Previous work', ['Ask for photos or video of similar completed work and check them before you decide.']],
      ],
      faq: [
        ['Why do prices differ between quotes?', 'Because the specification differs: profile type and thickness, glass type, fittings, and what the price includes in installation and finishing.'],
        ['Is the cheapest always the best?', 'Not necessarily. Compare the written specification first, then the price.'],
        ['How do I get a clear quote?', 'Send a photo of the place, sizes and type of work on WhatsApp, and ask for the quote to be written with the specification.'],
      ],
    },
  },
];

export const glossaryPage = {
  ar: {
    title: 'قاموس الألمنيوم والزجاج: سيكوريت تمبرد دبل جلاس كيرتن وول | ميرزونا',
    desc: 'قاموس مصطلحات الألمنيوم والزجاج في سوريا والإمارات: سيكوريت وتمبرد ومقسّى، دبل جلاس، كيرتن وول، دربزين، بيرغولا، شتر، كلادينغ وغيرها بمعانيها.',
    h1: 'قاموس الألمنيوم والزجاج',
    lead: 'المادة الواحدة لها أكثر من اسم بحسب المدينة والمهنة. هنا الأسماء الشائعة ومعناها لتعرف ما تطلب. وإن سمعت اسماً غير مذكور فاسألنا.',
    sections: [
      ['أنواع الزجاج', [
        ['زجاج سيكوريت = تمبرد = مقسّى', 'زجاج معالج بالحرارة أقوى من العادي، وعند كسره يتفتت إلى قطع صغيرة. اسمه بالإنكليزية Tempered، ويقول بعضهم «ازاز سكريت».'],
        ['زجاج لامينيت = مصفّح = مغلّف', 'لوحان أو أكثر ملتصقة بطبقة بلاستيكية، فتبقى القطع متماسكة عند الكسر. يُستعمل للأمان والعزل الصوتي.'],
        ['دبل جلاس = زجاج مزدوج = زجاج عازل (IGU)', 'لوحان بينهما فراغ مغلق لتحسين العزل الحراري والصوتي.'],
        ['زجاج Low-E', 'زجاج بطبقة رقيقة تعكس جزءاً من الإشعاع الحراري لتحسين العزل.'],
        ['زجاج مصنفر = مطفّي = ساندبلاست', 'زجاج يمرّر الضوء ويحجب الرؤية، يُصنع بمعالجة السطح بالرمل أو الحمض.'],
        ['زجاج عاكس = ريفلكتيف', 'بطبقة تعكس جزءاً من الضوء والحرارة، يُستعمل في الواجهات.'],
        ['زجاج معشّق = مشبّك = ملوّن فنّي', 'زجاج بقطع ملوّنة بتصاميم زخرفية، يُستعمل في النوافذ والأقواس والأبواب.'],
        ['مرايا = مراية = مرآة', 'زجاج بطبقة عاكسة، تُفصَّل بالقياس والشكل وتُثبَّت على الجدار أو داخل الخزائن.'],
        ['زجاج مطبوع (سيلك سكرين)', 'زجاج مطبوع عليه تصميم أو نقش بطلاء خاص.'],
        ['في بعض اللهجات: قزاز أو جام أو ازاز', 'كلها أسماء عامية للزجاج.'],
      ]],
      ['الألمنيوم وقطاعاته', [
        ['ألمنيوم = ألومنيوم = المنيوم', 'كتابات مختلفة للمعدن نفسه. الشائع في الأسواق «ألمنيوم».'],
        ['قطاع = بروفيل = بروفايل', 'القطعة الألمنيوم ذات المقطع المحدد التي تُجمَّع منها الشبابيك والأبواب والواجهات.'],
        ['منجور ألمنيوم = نوافذ وأبواب ألمنيوم', 'تسمية شائعة للشبابيك والأبواب المصنوعة من الألمنيوم.'],
        ['ثيرمال بريك = قطع حراري = قطاع عازل للحرارة', 'قطاع يفصل جزؤه الداخلي عن الخارجي بشريط عازل لتقليل انتقال الحرارة.'],
        ['دهان بودرة = بودرة = Powder Coating', 'طبقة لون تُخبز على الألمنيوم وتتوفر بألوان كثيرة.'],
        ['أنودايز = أنودة', 'طبقة أكسيد على سطح الألمنيوم بمعالجة كهروكيميائية.'],
        ['ألمنيوم مصبوب = كاست = Cast Aluminum', 'قطع تُصنع بصب المعدن في قوالب لتعطي زخارف وأشكالاً خاصة.'],
        ['ضلفة = درفة = جناح', 'الجزء المتحرك من الباب أو الشباك.'],
        ['جوان = مطاط عازل', 'شريط مطاطي يمنع تسرّب الهواء والماء والغبار حول الزجاج والضلفة.'],
      ]],
      ['أنظمة الفتح', [
        ['مفصلي = ذراع', 'يفتح على مفصلات مثل الباب ويحتاج مساحة للتأرجح.'],
        ['قلّاب = تلت', 'يميل من الأعلى للتهوية.'],
        ['سحّاب = سلايد = انزلاقي', 'تنزلق الضلفة على سكّة ولا تحتاج مساحة للفتح.'],
        ['فولدينغ = بايفولد = طي', 'ضلف تُطوى وتتراصّ على جانب الفتحة لتفتحها كاملة.'],
        ['شتر = رول شتر = ستارة أمان', 'ستارة تُلفّ وتُنزَل لحماية المحل أو النافذة، يدوية أو كهربائية.'],
      ]],
      ['الواجهات والإكساء', [
        ['كيرتن وول = كارتن وول = جدار ستاري', 'واجهة زجاجية على هيكل ألمنيوم معلّقة على المبنى.'],
        ['ستركشر = SSG', 'نوع من الواجهات يُثبَّت فيه الزجاج بالسيليكون فيظهر سطح أملس.'],
        ['كلادينغ = ألوكوبوند = ACP', 'ألواح (غالباً ألمنيوم مركّب) تُكسى بها الواجهات.'],
        ['سكاي لايت = مناور = سقف زجاجي', 'سقف أو فتحة زجاجية تُدخل الضوء الطبيعي.'],
        ['واجهة محل = واجهة معرض', 'واجهة زجاجية وألمنيوم للمحال مع باب الدخول.'],
      ]],
      ['الدرابزين والحدائق والحمامات', [
        ['درابزين = دربزين = دريزين = هاندريل', 'الحاجز الذي يحمي حافة الدرج أو الشرفة أو التراس.'],
        ['بيرغولا = برغولا = برجولا = بيرجولا', 'هيكل ألمنيوم يظلّل الجلسات الخارجية.'],
        ['مظلة = مظلات سيارات', 'تظلّل المواقف والمداخل.'],
        ['مجلس زجاجي = غرفة زجاجية = غرفة شتوية', 'غرفة بهيكل ألمنيوم وجدران زجاجية.'],
        ['كبينة شاور = شاور بوكس = شاشة شاور = حاجز دوش', 'حاجز زجاجي لمنطقة الاستحمام.'],
        ['قاطع زجاج = حاجز زجاج = بارتيشن', 'جدار زجاجي يقسّم المساحة مع بقاء الضوء الطبيعي.'],
      ]],
    ],
  },
  en: {
    title: 'Aluminum and Glass Glossary: Securit, Tempered, Double Glass | Merzona',
    desc: 'A glossary of aluminum and glass terms used in Syria and the UAE: securit and tempered glass, double glass, curtain wall, railings, pergola, shutter and cladding, with their meanings.',
    h1: 'Aluminum and glass glossary',
    lead: 'The same material often has more than one name depending on the city and the trade. Here are the common names and what they mean, so you know what to ask for.',
    sections: [
      ['Glass types', [
        ['Securit = tempered = hardened glass', 'Heat-treated glass stronger than ordinary glass that breaks into small pieces.'],
        ['Laminated glass', 'Two or more panes bonded with a plastic layer so the pieces hold together when broken.'],
        ['Double glass = double glazing = insulated glass (IGU)', 'Two panes with a sealed gap to improve thermal and sound insulation.'],
        ['Low-E glass', 'Glass with a thin coating that reflects part of the heat radiation.'],
        ['Frosted glass = sandblasted', 'Glass that passes light but blocks the view.'],
        ['Reflective glass', 'Glass with a coating that reflects part of the light and heat, used in facades.'],
        ['Stained glass', 'Colored glass pieces in decorative patterns.'],
      ]],
      ['Aluminum', [
        ['Aluminum = aluminium', 'Two spellings of the same metal.'],
        ['Profile = section', 'The aluminum piece with a set cross-section from which windows, doors and facades are assembled.'],
        ['Thermal break', 'A profile whose inner and outer parts are separated by an insulating strip.'],
        ['Powder coating', 'A color layer baked onto aluminum, available in many colors.'],
        ['Anodizing', 'An oxide layer formed on the aluminum surface by an electrochemical process.'],
        ['Cast aluminum', 'Parts made by pouring metal into molds to give ornament and special shapes.'],
      ]],
      ['Opening systems', [
        ['Hinged', 'Opens on hinges like a door and needs swing space.'],
        ['Tilt', 'Tips from the top for ventilation.'],
        ['Sliding', 'The panel glides on a track and needs no opening space.'],
        ['Folding (bi-fold)', 'Panels fold and stack to one side to open the whole opening.'],
        ['Shutter = roller shutter', 'A roll-up screen protecting a shop or window, manual or motorized.'],
      ]],
      ['Facades, railings and more', [
        ['Curtain wall', 'A glass facade on an aluminum frame hung on the building.'],
        ['Structural glazing (SSG)', 'A facade type where glass is fixed with silicone for a smooth surface.'],
        ['Cladding = ACP', 'Panels, usually aluminum composite, covering facades.'],
        ['Skylight', 'A glass roof or opening that brings in natural light.'],
        ['Railing = balustrade = handrail', 'The barrier protecting the edge of stairs, balconies and terraces.'],
        ['Pergola', 'An aluminum structure that shades outdoor seating.'],
        ['Shower cabin = shower box = shower screen', 'A glass enclosure for the shower area.'],
        ['Glass partition', 'A glass wall that divides a space while keeping natural light.'],
      ]],
    ],
  },
};
