// محتوى مبني على دراسة البحث: مصطلحات السوق السوري والخليجي، وعناوين تحتوي المدينة + الخدمة.
// معلومات عامة عن المجال فقط، بدون أرقام أو ضمانات أو ادعاءات عن الشركة.

// عناوين عربية (≤ 60 حرفاً) تبدأ بكلمة البحث الأهم وتتبعها المدينة
export const arTitles = {
  'windows-doors': 'تفصيل وتركيب شبابيك وأبواب ألمنيوم دمشق | ميرزونا',
  railings: 'درابزين وأدراج زجاجية في دمشق | ميرزونا',
  'sliding-systems': 'شبابيك وأبواب ألمنيوم سحّاب دمشق | ميرزونا',
  'curtain-wall': 'كيرتن وول وواجهات زجاجية دمشق | ميرزونا',
  'shower-cabins': 'كبائن شاور زجاج سيكوريت دمشق | ميرزونا',
  'pergolas-shades': 'بيرغولا ومظلات ألمنيوم دمشق | ميرزونا',
  'glass-majlis': 'مجالس وغرف زجاجية دمشق | ميرزونا',
  domes: 'قباب ألمنيوم وزجاج دمشق | ميرزونا',
  'stained-glass': 'زجاج معشّق دمشق | ميرزونا',
  mirrors: 'مرايا حسب الطلب دمشق | ميرزونا',
  'folding-systems': 'أبواب ونوافذ فولدينغ ألمنيوم دمشق | ميرزونا',
};

// "تُعرف أيضاً بـ": مرادفات وطرق كتابة يبحث بها الناس (ألمنيوم/المنيوم/ألومنيوم، كيرتن/كارتن، سيكوريت/سكريت ...)
export const seoExtra = {
  'windows-doors': {
    aka: { ar: ['نوافذ ألمنيوم', 'منجور ألمنيوم', 'شبابيك المنيوم', 'أبواب ألومنيوم'], en: ['aluminium windows', 'aluminium doors', 'aluminum joinery'] },
    body: {
      ar: ['تُصنع الشبابيك والأبواب من قطاعات ألمنيوم تُجمَّع على قياس الفتحة، ويُركَّب فيها الزجاج المناسب للمكان. ويمكن أن تكون مفصلية أو قلّابة أو سحّاب، بألوان وتشطيبات مختلفة.', 'يتحدّد السعر ومدة التنفيذ حسب القياسات ونوع القطاع والزجاج والإكسسوارات. أرسل لنا صورة الفتحات وقياساتها ونعطيك عرض سعر واضحاً.'],
      en: ['Windows and doors are built from aluminum profiles assembled to the size of the opening, with glass suited to the place. They can be hinged, tilt or sliding, in different colors and finishes.', 'Price and timing depend on the sizes, the profile and glass type, and the fittings. Send us a photo of the openings and their sizes and we will give you a clear quote.'],
    },
    faq: { ar: [['ما الفرق بين الشباك المفصلي والسحّاب؟', 'المفصلي يفتح على مفصلات ويحتاج مساحة للتأرجح، والسحّاب ينزلق على سكّة فلا يحتاج مساحة ويناسب الفتحات العريضة.']], en: [['What is the difference between hinged and sliding windows?', 'A hinged window opens on hinges and needs swing space. A sliding window glides on a track, so it needs none and suits wide openings.']] },
  },
  railings: {
    aka: { ar: ['دربزين ألمنيوم', 'درابزين ألمنيوم مصبوب', 'درابزينات', 'دربزينات زجاج', 'هاندريل', 'درابزين سلالم وبلكونات'], en: ['aluminium railings', 'balustrades', 'handrails', 'glass balustrade'] },
    body: {
      ar: ['الألمنيوم المصبوب يتيح زخارف وأشكالاً كلاسيكية يصعب تنفيذها بالقطاعات العادية، وهو خيار شائع للأدراج والبلكونات والأسوار. أما درابزين الزجاج فيمنح إطلالة مفتوحة وخفة بصرية، ويُثبَّت أرضياً أو جانبياً.', 'حدّد الموقع (درج أو بلكون أو تراس) والطول التقريبي وأرسل صورة المكان، ونقترح عليك التصميم والتشطيب المناسبين.'],
      en: ['Cast aluminum allows ornament and classic shapes that are hard to make from standard profiles, and is a common choice for stairs, balconies and fences. Glass railings give an open view and visual lightness, and are fixed on the floor or on the side.', 'Tell us the location (stairs, balcony or terrace) and the approximate length, and send a photo, and we will suggest a suitable design and finish.'],
    },
    faq: { ar: [['ما الفرق بين درابزين الألمنيوم المصبوب ودرابزين الزجاج؟', 'المصبوب يعطي طابعاً زخرفياً بتشطيبات كالبرونزي والأسود، والزجاج يعطي مظهراً حديثاً مفتوحاً ويُستعمل فيه الزجاج السيكوريت.']], en: [['What is the difference between cast aluminum and glass railings?', 'Cast aluminum gives an ornamental look in finishes such as bronze and black. Glass gives a modern open look, using tempered glass.']] },
  },
  'sliding-systems': {
    aka: { ar: ['شبابيك سحاب', 'أبواب سحاب منزلقة', 'نوافذ منزلقة', 'سحاب ألمنيوم'], en: ['aluminium sliding windows', 'sliding doors', 'slim sliding system'] },
    body: {
      ar: ['ينزلق الباب أو الشباك السحّاب على سكّة بدل أن يفتح بالتأرجح، فيوفّر المساحة ويناسب الشرفات والفتحات الواسعة. وتتوفر أنظمة عازلة للحرارة والصوت عند الحاجة.', 'اختيار النظام يعتمد على عرض الفتحة وعدد الضلف ومستوى العزل المطلوب ونوع الزجاج.'],
      en: ['A sliding door or window glides on a track instead of swinging open, which saves space and suits balconies and wide openings. Systems with thermal and sound insulation are available when needed.', 'The choice of system depends on the opening width, the number of panels, the insulation level and the glass type.'],
    },
    faq: { ar: [['هل أنظمة السحّاب عازلة للصوت والحرارة؟', 'تتوفر أنظمة سحّاب عازلة للحرارة والصوت. مستوى العزل يتحدّد بنوع القطاع والزجاج، فاذكر حاجتك عند طلب العرض.']], en: [['Are sliding systems insulating?', 'Sliding systems with thermal and sound insulation are available. The level depends on the profile and glass, so mention your need when you ask for a quote.']] },
  },
  'curtain-wall': {
    aka: { ar: ['كارتن وول', 'واجهات ستركشر', 'واجهات ألمنيوم زجاجية', 'جدران ستارية', 'واجهات زجاجية'], en: ['curtain walling', 'structural glazing', 'glass facade', 'aluminium facade'] },
    body: {
      ar: ['الكيرتن وول (الجدار الستاري) واجهة زجاجية على هيكل ألمنيوم لا تحمل أحمال المبنى، بل تحمل وزنها وتنقل أحمال الرياح إلى هيكله. ولها أنظمة متعددة منها التقليدي (بكبسات خارجية) وSSG (زجاج مثبّت بالسيليكون).', 'نحتاج لتسعيرها مساحة الواجهة وارتفاعها ومخططات المبنى أو صور الواجهة، ونوع الزجاج المطلوب.'],
      en: ['A curtain wall is a glass facade on an aluminum frame. It does not carry the building loads: it carries its own weight and passes wind loads to the building structure. It comes in several systems, including conventional (with external caps) and SSG (glass fixed with structural silicone).', 'To price it we need the facade area and height, building drawings or facade photos, and the glass type you want.'],
    },
    faq: { ar: [['ما الفرق بين الكيرتن وول التقليدي وSSG؟', 'في التقليدي تظهر كبسات ألمنيوم على وجه الزجاج، أما في SSG فيُثبَّت الزجاج بالسيليكون فيظهر سطح زجاجي أملس.']], en: [['What is the difference between conventional and SSG curtain wall?', 'In conventional systems aluminum caps show on the glass face. In SSG the glass is fixed with silicone, giving a smooth glass surface.']] },
  },
  'shower-cabins': {
    aka: { ar: ['شاور بوكس', 'شاورات زجاج', 'كبائن استحمام', 'شاور زجاج سكريت', 'سكوريت'], en: ['shower enclosures', 'shower screens', 'glass shower doors', 'shower box'] },
    body: {
      ar: ['الزجاج السيكوريت (المقسّى) هو المناسب لكبائن الشاور لأنه أقوى من الزجاج العادي، وإذا انكسر تحوّل إلى قطع صغيرة غير حادة. وتأتي الكبائن بأشكال زاوية أو مستقيمة أو مفتوحة، بأبواب مفصلية أو سحّاب.', 'اختر لون الإكسسوارات (ستانلس أو أسود أو ذهبي) وإذا كنت تفضّل الزجاج الشفاف أو المصنفر، وأرسل قياسات الحمام ونقيس لك الكابينة.'],
      en: ['Tempered glass is the right choice for shower cabins because it is stronger than ordinary glass, and if it breaks it turns into small blunt pieces. Cabins come in corner, straight or walk-in layouts, with hinged or sliding doors.', 'Choose the fittings color (stainless, black or gold) and whether you prefer clear or frosted glass, and send the bathroom sizes so we can size the cabin.'],
    },
    faq: { ar: [['ما الزجاج المناسب للشاور؟', 'الزجاج السيكوريت (المقسّى) لأنه أقوى من العادي ويتفتت إلى قطع صغيرة عند الكسر.']], en: [['Which glass is right for a shower?', 'Tempered glass, because it is stronger than ordinary glass and breaks into small pieces.']] },
  },
  'pergolas-shades': {
    aka: { ar: ['برغولا', 'برجولا', 'بيرغولا ألمنيوم', 'مظلات سيارات', 'مظلات حدائق'], en: ['aluminium pergola', 'car park shades', 'canopies', 'garden pergola'] },
    body: {
      ar: ['البيرغولا (وتُكتب أيضاً برغولا أو برجولا) هيكل ألمنيوم يظلّل الحدائق والأسطح والجلسات الخارجية، ويمكن دمج الإنارة فيه. أما المظلات فتُستعمل لمواقف السيارات والمداخل.', 'حدّد المساحة والارتفاع المتاح وشكل السقف المطلوب (مفتوح أو مغطّى) وطريقة التثبيت.'],
      en: ['A pergola is an aluminum structure that shades gardens, rooftops and outdoor seating, and can include built-in lighting. Shades are used for car parks and entrances.', 'Tell us the area, the available height, the roof style you want (open or covered) and how it will be fixed.'],
    },
    faq: { ar: [['هل يمكن دمج إنارة بالبيرغولا؟', 'نعم، يمكن دمج إنارة بالبيرغولا حسب التصميم المطلوب.']], en: [['Can lighting be built into the pergola?', 'Yes, lighting can be built in, depending on the design you choose.']] },
  },
  'glass-majlis': {
    aka: { ar: ['غرف زجاجية', 'جلسات خارجية زجاج', 'مجلس زجاج', 'غرف شتوية', 'ملحق زجاجي'], en: ['glass rooms', 'outdoor glass room', 'glass extension', 'garden room'] },
    body: {
      ar: ['المجلس الزجاجي غرفة بهيكل ألمنيوم وجدران زجاجية، تمنحك جلسة بإطلالة مفتوحة وإضاءة طبيعية. ويمكن أن يُلحق بالمنزل أو يقوم في الحديقة أو على السطح.', 'من المهم تحديد اتجاه الإطلالة ومستوى العزل والتهوية والتكييف قبل التصميم.'],
      en: ['A glass majlis is a room with an aluminum frame and glass walls, giving you a seating space with an open view and natural light. It can be attached to the house, or stand in the garden or on the roof.', 'It is worth deciding the direction of the view, the insulation, ventilation and air conditioning before design.'],
    },
    faq: { ar: [['أين يُركَّب المجلس الزجاجي؟', 'في الحديقة أو على السطح أو ملحقاً بالمنزل، حسب المساحة المتاحة.']], en: [['Where can a glass majlis be built?', 'In the garden, on the roof or attached to the house, depending on the available space.']] },
  },
  domes: {
    aka: { ar: ['قبة زجاجية', 'قباب ألمنيوم', 'قباب فلل', 'قبة سقف'], en: ['glass dome', 'aluminium dome', 'skylight dome'] },
    body: {
      ar: ['تضيف القبة طابعاً معمارياً مميزاً وتُدخل الضوء الطبيعي إلى القاعات والمداخل، وتُنفَّذ بإطار ألمنيوم وزجاج حسب القياس.', 'نحتاج لتسعيرها أبعاد القاعدة وارتفاع القبة وصورة للمكان.'],
      en: ['A dome adds a distinctive architectural character and brings natural light into halls and entrances. It is made with an aluminum frame and glass to size.', 'To price it we need the base dimensions, the dome height and a photo of the place.'],
    },
    faq: { ar: [['ما المعلومات المطلوبة لتسعير قبة؟', 'أبعاد القاعدة، الارتفاع المطلوب، ونوع الزجاج، وصورة للمكان.']], en: [['What do you need to price a dome?', 'The base dimensions, the height, the glass type and a photo of the place.']] },
  },
  'stained-glass': {
    aka: { ar: ['زجاج مشبّك', 'زجاج ملوّن', 'قمريات', 'زجاج فنّي'], en: ['stained glass windows', 'colored glass', 'decorative glass', 'leaded glass'] },
    body: {
      ar: ['الزجاج المعشّق يُجمَّع من قطع زجاج ملوّنة بتصاميم زخرفية، وهو من الحرف التراثية المعروفة في العمارة الشامية، ويُستعمل في النوافذ والأقواس والأبواب والقواطع.', 'أرسل صورة مرجعية للتصميم أو الألوان التي تريدها مع القياسات.'],
      en: ['Stained glass is assembled from colored glass pieces in decorative patterns. It is used in windows, arches, doors and partitions.', 'Send a reference photo of the design or colors you want, with the sizes.'],
    },
    faq: { ar: [['هل يمكن تنفيذ تصميم من اختياري؟', 'نعم، يمكنك إرسال صورة مرجعية للتصميم والألوان ونناقش معك التنفيذ.']], en: [['Can you make a design of my choice?', 'Yes. Send a reference photo of the design and colors and we will discuss the execution with you.']] },
  },
  mirrors: {
    aka: { ar: ['مرايا حمامات', 'مرايا ديكور', 'مرايا جدارية', 'مرايا بإطار'], en: ['bathroom mirrors', 'wall mirrors', 'decorative mirrors', 'custom mirrors'] },
    body: {
      ar: ['تُفصَّل المرايا بالقياس والشكل المطلوب: مستطيلة أو دائرية أو بأشكال خاصة، بإطار أو بدون إطار، وتُثبَّت على الجدار أو داخل الخزائن والقواطع.', 'أرسل القياس والمكان وطريقة التثبيت المفضّلة.'],
      en: ['Mirrors are made to the size and shape you need: rectangular, round or custom, with or without a frame, fixed on the wall or inside cabinets and partitions.', 'Send the size, the location and your preferred fixing method.'],
    },
    faq: { ar: [['هل تُفصَّل المرايا بأشكال خاصة؟', 'نعم، المرايا تُفصَّل بالقياس والشكل المطلوب.']], en: [['Can mirrors be made in custom shapes?', 'Yes. Mirrors are made to the size and shape you need.']] },
  },
  'folding-systems': {
    aka: { ar: ['أبواب قابلة للطي', 'فولدينج', 'أبواب بايفولد', 'نوافذ طي'], en: ['bi-folding doors', 'bifold doors', 'folding windows', 'stacking doors'] },
    body: {
      ar: ['في أنظمة الفولدينغ تُطوى الضلف وتتراصّ على جانب الفتحة فتفتحها بالكامل، وهي مناسبة للشرفات والصالات والمطاعم وواجهات المحال.', 'حدّد عرض الفتحة وعدد الضلف واتجاه الطي (يمين أو يسار أو من الوسط).'],
      en: ['In folding systems the panels fold and stack to one side of the opening, opening it fully. They suit balconies, lounges, restaurants and shopfronts.', 'Specify the opening width, the number of panels and the fold direction (right, left or from the middle).'],
    },
    faq: { ar: [['أين تناسب أنظمة الفولدينغ؟', 'في الشرفات والصالات والمطاعم وواجهات المحال حيث تريد فتح المساحة بالكامل.']], en: [['Where do folding systems suit best?', 'On balconies, lounges, restaurants and shopfronts, wherever you want to open the space fully.']] },
  },
};

// نص إضافي لصفحتي الفروع (محتوى محلي فعلي)
export const branchSeo = {
  damascus: {
    ar: {
      h: 'ألمنيوم وزجاج لمشروعك في دمشق',
      ps: ['سواء كان مشروعك فيلا أو شقة أو محلاً أو مكتباً، يمكنك طلب شبابيك وأبواب ألمنيوم، أو واجهة زجاجية كيرتن وول، أو درابزين ألمنيوم صب أو زجاج، أو كبائن شاور، أو بيرغولا ومظلات، أو مرايا وزجاجاً معشّقاً، قواطع وأبواب زجاج، واجهات محلات، كلادينغ، مطابخ ألمنيوم، أو صيانة، من فرعنا في المزة.', 'نتولى التصميم والتوريد والتركيب، ونخدم دمشق وريفها وباقي المحافظات السورية. أرسل صورة المكان والقياسات عبر واتساب لنعطيك عرض السعر.'],
    },
    en: {
      h: 'Aluminum and glass for your project in Damascus',
      ps: ['Whether your project is a villa, apartment, shop or office, you can order aluminum windows and doors, a curtain wall glass facade, cast aluminum or glass railings, shower cabins, pergolas and shades, mirrors, stained glass, glass partitions and doors, shopfronts, cladding, aluminum kitchens or maintenance from our Mazzeh branch.', 'We handle design, supply and installation, and serve Damascus, its countryside and the other Syrian governorates. Send a photo of the place and the sizes on WhatsApp and we will give you a quote.'],
    },
  },
  uae: {
    ar: {
      h: 'ألمنيوم وزجاج لمشروعك في الإمارات',
      ps: ['من فرعنا في الشارقة نخدم دبي والإمارات كلها: شبابيك وأبواب ألمنيوم، أنظمة سحّاب وفولدينغ، واجهات كيرتن وول، درابزين وأدراج زجاجية، كبائن شاور، بيرغولا ومظلات، مجالس زجاج وقباب، قواطع زجاج، واجهات محلات، كلادينغ، مطابخ ألمنيوم وصيانة.', 'أرسل لنا صورة المكان والقياسات عبر واتساب ونرد عليك بعرض السعر.'],
    },
    en: {
      h: 'Aluminum and glass for your project in the UAE',
      ps: ['From our Sharjah branch (also serving Dubai) we serve all of the UAE: aluminum windows and doors, sliding and folding systems, curtain wall facades, cast aluminum and glass railings, shower cabins, pergolas and shades, glass majlis and domes, glass partitions, shopfronts, cladding, aluminum kitchens and maintenance.', 'Send us a photo of the place and the sizes on WhatsApp and we will reply with a quote.'],
    },
  },
};
