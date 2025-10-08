document.addEventListener("DOMContentLoaded", () => {
  // --- DATABASE: Single Source of Truth for Flexibility ---
  const database = {
    structure: {
      scientific_committee: {
        title: "المكتبة الأكاديمية للهندسة",
        icon: "fas fa-university text-purple-500",
        color: "purple",
        description:
          " قسم يضم مصادر تعليمية متنوعة مثل الكورسات، قنوات يوتيوب، المواقع والمنصات، تغطي اغلب تخصصات ومستويات كلية الهندسة لدعم  الطالب أكاديميًا",
        subsections: [
          "المستوى الأول",
          "المستوى الثاني",
          "المستوى الثالث",
          "المستوى الرابع",
          " بوتات  اللجان العلمية",
        ],
      },
      technical: {
        title: "مجمع التقنية",
        icon: "fas fa-code text-blue-500",
        color: "blue",
        description:
          "  المجمع التقني منصة تعليمية مرجعية لطلاب الهندسة وتقنية المعلومات، تجمع أفضل الموارد لتطوير المهارات البرمجية والأكاديمية، وتقدّم محتوى متدرج يشجع على التعلم المستمر.",
        subsections: ["رباط التقنية","أدوات البرمجة والتعلم", "مواقع ومنصات تعليمية"],
      },
      academic: {
        title: "سوق العمل والجاهزية المهنية",
        icon: "fas fa-briefcase text-purple-500",
        color: "green",
        description:
          "قسم يهيئ المهندس (بغض النظر عن تخصصه) لاكتساب الأدوات والمفاهيم الأساسية المشتركة بين جميع فروع الهندسة التقنية والبرمجية والشبكية، مع التركيز على التفكير المنطقي، وأدوات العمل الجماعي الحديثة.",
        subsections: [
        "الأدوات العقلية والمفاهيم الأساسية",
        "الأدوات المشتركة لجميع المهندسين",
        "أدوات التواصل والتعاون المهني",
        ],
      },
    },
    channels: [
      {
        id: 1,
        name: "قناة المهندس نذير الجنيد",
        subsection: "المستوى الأول",
        description:
          "قناة تعليمية تقدم شروحات مبسطة في التفاضل والتكامل والجبر الخطي، موجهة للطلاب لتسهيل الفهم وبناء أساس رياضي قوي.",
        platforms: {
          youtube:
            "https://youtube.com/channel/UCLOUNBHtQbq5MmQzQhnmVdw?si=wx9f-KwZ3FcOoMvO",
          telegram: "https://t.me/maturyi",
        },
        rating: 4.7,
        logo: "fa-solid fa-square-root-variable", // رمز يدل على الرياضيات والتحليل
      },
      {
        id: 2,
        name: "كورس تعلم الخوارزميات الانسيابية",
        subsection: "المستوى الأول",
        description:
          "يتناول هذا الكورس أهمية اكتساب مهارة حل المشكلات وفهم الخوارزميات والمخططات الانسيابية قبل البدء في تعلم أي لغة برمجة",
        platforms: {
          youtube:
            "https://www.youtube.com/watch?v=kDgWi44YP7Y&list=PLF448MKsUhzf-6KMrICcuTZ9EsZTHN4f8",
        },
        rating: 5,
        logo: "fa-solid fa-diagram-project", // لأن المخططات الانسيابية تمثل flow diagrams
      },
      {
        id: 3,
        name: "كورس اللغة العربية",
        subsection: "المستوى الأول",
        description:
          "مصادر لتعلم اللغة العربية تركّز على قواعد النحو وعلامات الترقيم، لتطوير مهارات الكتابة والفهم اللغوي",
        platforms: {
          youtube:
            "https://youtube.com/playlist?list=PLiHRnPC3do8VFtupgw83CyTBlg_e95UTl&si=j2vPPCWFVR27XR_x",
        },
        rating: 4.6,
        logo: "fa-solid fa-language", // الأنسب لدورات اللغات والكتابة
      },
      {
        id: 4,
        name: "كورس الجبر الخطي",
        subsection: "المستوى الأول",
        description:
          "كورس تعليمي في الجبر الخطي يتناول المفاهيم الأساسية مثل المصفوفات، المحددات، الفضاءات والمتجهات، التحويلات الخطية، والقيم الذاتية.",
        platforms: {
          youtube:
            "https://youtube.com/playlist?list=PLiHRnPC3do8VFtupgw83CyTBlg_e95UTl&si=j2vPPCWFVR27XR_x",
        },
        rating: 4.6,
        logo: "fa-solid fa-table-cells", // يرمز إلى المصفوفات في الجبر الخطي
      },
      {
        id: 5,
        name: "كورس تعلم الجافا",
        subsection: "المستوى الأول",
        description:
          "واحدة من أشهر القنوات العربية لتعليم أساسيات الجافا بالعربي.",
        platforms: {
          youtube:
            "https://youtube.com/playlist?list=PLCInYL3l2AajYlZGzU_LVrHdoouf8W6ZN&si=sAnRbFIfK77MRwZm",
          telegram: "#",
        },
        rating: 4.9,
        logo: "fa-brands fa-java", // شعار الجافا الأصلي
      },
      {
        id: 6,
        name: "كورس تعلم الرياضيات المتقطعة",
        subsection: "المستوى الأول",
        description: "كورس عربي في شرح كافة مواضيع الرياضيات المتقطعة.",
        platforms: {
          youtube:
            "https://youtube.com/playlist?list=PLxIvc-MGOs6gZlMVYOOEtUHJmfUquCjwz&si=0ojNMPe0kWP9nhgS",
        },
        rating: 4.7,
        logo: "fa-solid fa-shapes", // يمثل التجريد والبُنى المنفصلة في الرياضيات المتقطعة
      },
      {
        id: 7,
        name: "كورس تعلم أساسيات ++C",
        subsection: "المستوى الأول",
        description:
          "واحدة من أشهر القنوات العربية لتعليم أساسيات ++C بالعربي.",
        platforms: {
          youtube:
            "https://youtube.com/playlist?list=PLDoPjvoNmBAwy-rS6WKudwVeb_x63EzgS&si=aeTJURKX-NT2jBRb",
        },
        rating: 4.9,
        logo: "fa-solid fa-c", // أيقونة مباشرة ترمز لـ C أو ++C
      },
      {
        id: 8,
        name: "كورس تعلم أساسيات البايثون",
        subsection: "المستوى الأول",
        description:
          "واحدة من أشهر القنوات العربية لتعليم أساسيات البايثون بالعربي.",
        platforms: {
          youtube:
            "https://youtube.com/playlist?list=PLoP3S2S1qTfCUdNazAZY1LFALcUr0Vbs9&si=MmA2ITmD2-FNendb",
        },
        rating: 4.9,
        logo: "fa-brands fa-python", // الأيقونة الرسمية للبايثون
      },
      {
        id: 9,
        name: "كورس تعلم الفيزياء العامة 101",
        subsection: "المستوى الأول",
        description:
          "كورس تعلم الفيزياء العامة في الجامعة 101 بأسلوب بسيط وواضح مع تمارين مرفقة.",
        platforms: {
          youtube:
            "https://youtube.com/playlist?list=PLZ0T_ivlaIL_v8r6BcgY7K4gJn9Zo9K9c&si=Lazq3ygEQZxOdvyq",
        },
        rating: 4.9,
        logo: "fa-solid fa-atom", // الفيزياء والذرة والعلوم الطبيعية
      },
      {
        id: 10,
        name: "تفاضل وتكامل",
        subsection: "المستوى الأول",
        description:
          "تصفح رابط القناة التالي للتنقل بين محتوى القناة في تعلم التفاضل والتكامل.",
        platforms: {
          youtube: "https://youtube.com/@ustathsagban?si=z2civ_ackyP_RziO",
        },
        rating: 4.6,
        logo: "fa-solid fa-square-root-alt", // رمزية واضحة للتفاضل والتكامل
      },
      {
        id: 11,
        name: "كورس تعلم الرسم الهندسي",
        subsection: "المستوى الأول",
        description: "كورس في تعلم أساسيات الرسم الهندسي من البداية للاحتراف.",
        platforms: {
          youtube:
            "https://youtube.com/playlist?list=PLNL0hQ3P-fZacQLXhyCvRpLJdptgCICmA&si=kLDb9tEEooD7_-IH",
        },
        rating: 4.6,
        logo: "fa-solid fa-drafting-compass", // الأداة التقليدية للرسم الهندسي
      },
      {
        id: 12,
        name: "كورس تعلم هياكل البيانات بالجافا",
        subsection: "المستوى الثاني",
        description:
          "كورس تعليمي يشرح مفاهيم هياكل البيانات بلغة الجافا البرمجية.",
        platforms: {
          youtube:
            "https://youtube.com/playlist?list=PL1DUmTEdeA6K2yGIRxMvK9nTfRIiWXAWV&si=gFhdoXl5HDQmYqBK",
        },
        rating: 4.7,
        logo: "fa-solid fa-network-wired", // يرمز للربط والعلاقات داخل هياكل البيانات
      },

      {
        id: 13,
        name: "كورس تعلم هياكل البيانات والخوارزميات بالبايثون ",
        subsection: "المستوى الثاني",
        description:
          "كورس تعليمي يشرح مفاهيم هياكل البيانات بلغة البايثون البرمجية ",
        platforms: {
          youtube:
            "https://youtube.com/playlist?list=PLGbzY-VLUfcp6UEVB2vJpoCiRJyZsbgX4&si=8vEFmnN31VW4M-ia",
        },
        rating: 4.7,
        logo: "fa-brands fa-python",
      },
      {
        id: 14,
        name: "كورس تعلم هياكل البيانات والخوارزميات ++c",
        subsection: "المستوى الثاني",
        description:
          "كورس تعليمي يشرح مفاهيم هياكل البيانات بلغة ++c البرمجية ",
        platforms: {
          youtube:
            "https://youtube.com/playlist?list=PLsGJzJ8SQXTcsXRVviurGei0lf_t_I4D8&si=k5hSImMjjndmiWoZ",
        },
        rating: 4.7,
        logo: "fa-solid fa-code",
      },
      {
        id: 15,
        name: "التصميم الرقمي والمنطقي ",
        subsection: "المستوى الثاني",
        description:
          " كورس تعليمي في تعلم مقرر التصميم الرقمي والمنطقي باسلوب واضح جدا وسهل ومبسط",
        platforms: {
          youtube:
            "https://youtube.com/playlist?list=PLWCXN2IFIem2O63z0JfhQLycUUtO-EPzg&si=-veaoMD6r7MZ1vZT",
        },
        rating: 4.7,
        logo: "fa-solid fa-microchip",
      },
      {
        id: 16,
        name: "نظم قواعد البيانات ",
        subsection: "المستوى الثاني",
        description:
          "كورس تعليمي في تعلم اساسيات نظم قواعد البيانات الجانب النظري ",
        platforms: {
          youtube:
            "https://youtube.com/playlist?list=PL37D52B7714788190&si=ZqT7xjHBaIWv3ZMY",
        },
        rating: 4.7,
        logo: "fa-solid fa-database",
      },
      {
        id: 17,
        name: " نظم قواعد البيانات SQL عملي ",
        subsection: "المستوى الثاني",
        description:
          "كورس تعليمي في تعلم اساسيات نظم قواعد البيانات ولغة SQL الجانب العملي  ",
        platforms: {
          youtube:
            "https://youtube.com/playlist?list=PLTChhmU8tbQzrdP79gFX6h4TXu-gOUDvp&si=SmJI-zru5PWWmMCH",
        },
        rating: 4.7,
        logo: "fa-solid fa-table",
      },
      {
        id: 18,
        name: " تراسل البيانات والشبكات ",
        subsection: "المستوى الثاني",
        description:
          "كورس تعليمي في شرح وتوضيح المفاهيم العامة والاساسية في مقرر تراسل البيانات والشبكات للدكتور القدير مجيب الحكيمي",
        platforms: {
          youtube:
            "https://youtube.com/playlist?list=PLxlHMgsTyaF0VVSiuqrr2xgZS-C0k1Vuk&si=CFnp4wdHy59iMZqN",
        },
        rating: 4.7,
        logo: "fa-solid fa-network-wired",
      },
      {
        id: 19,
        name: "تحليل وتصميم النظم ",
        subsection: "المستوى الثاني",
        description:
          "كورس تعليمي في تعلم مقرر تحليل وتصميم النظم بكافة مفاهيمه من الاساس الئ المتقدم ",
        platforms: {
          youtube:
            "https://youtube.com/playlist?list=PLhiFu-f80eo9hJvZOkqVItWHVA4ucXSxb&si=Vqr5zqLkltVWIjBX",
        },
        rating: 4.7,
        logo: "fa-solid fa-diagram-project",
      },
      {
        id: 20,
        name: " كورس لمفرر هندسة المتطلبات ",
        subsection: "المستوى الثاني",
        description:
          " محاضرات باللغة العربية تشرح أساسيات هندسة المتطلبات كما وردت في كتاب Klaus Pohl، وتشمل أنواع المتطلبات، دور أصحاب المصلحة، والأنشطة الأساسية في هندسة البرمجيات. موجهة لطلبة هندسة البرمجيات.",
        platforms: {
          youtube:
            "https://www.youtube.com/watch?v=XDey5x06ECI&list=PLquXYvvn8Qk-vWE-6e8w8YKz-qv7gRFxG&pp=0gcJCaIEOCosWNin",
        },
        rating: 4.7,
        logo: "fa-solid fa-list-check",
      },

      {
        id: 21,
        name: "دوبــاكــود | DopaCode",
        subsection: "رباط التقنية",
        description:
          " نوفر مصادر تعليمية مجانية، شروحات مبسطة، تحديات برمجية، وأفكار تقنية حديثة لتطوير مهاراتك في لغات البرمجة، تطوير التطبيقات، والذكاء الاصطناعي. ",
        platforms: { telegram: "https://t.me/DopaCode" },
        rating: 4.6,
        logo: "fa-solid fa-laptop-code",
      },
      {
        id: 22,
        name: "محمود نصر الدين",
        subsection: "رباط التقنية",
        description: "محتوى عن التقنية والإنتاجية وأشياء أخرى ",
        platforms: { telegram: "https://t.me/Mahmoud_Nasredeen" },
        rating: 4.6,
        logo: "fa-solid fa-lightbulb",
      },
      {
        id: 24,
        name: "عاصم آل ناجي",
        subsection: "رباط التقنية",
        description: "ثقافة برمجية بحته ، ومصادر تعليمية باللغة العربية.",
        platforms: { telegram: "https://t.me/AsemNajee" },
        rating: 4.6,
        logo: "fa-solid fa-book-open",
      },
      {
        id: 25,
        name: "مُدَوَّنَة يُوسُف",
        subsection: "رباط التقنية",
        description:
          "قناة أشارك فيها أمور تقنية ومواد نافعة على الإنترنت وتحديثات مشاريعي وكتاباتي وأشياء أخرى.",
        platforms: { telegram: "https://t.me/ysh_alsager" },
        rating: 4.6,
        logo: "fa-solid fa-blog",
      },
      {
        id: 26,
        name: "الزَّنَاد",
        subsection: "رباط التقنية",
        description:
          "الزَّنَاد هي قناة تقنية عربية، تهدف إلى إثراء المحتوى العربي في مجالات التقنية المتقدمة، مع التركيز على تمكين المستخدم العربي بالأدوات والمعرفة اللازمة في العصر الرقمي. تتميز القناة بتقديم محتوى فريد وعميق، يمزج الرؤى التقنية المتقدمة بالتطبيقات العملية.",
        platforms: { telegram: "https://t.me/al_zanad" },
        rating: 4.6,
        logo: "fa-solid fa-microchip",
      },

      {
        id: 27,
        name: " كورس لمقرر اتصالات البيانات ",
        subsection: "المستوى الثاني",
        description:
          "شرح باللغة العربية لمفاهيم الاتصالات اللاسلكية ضمن مقرر اتصالات البيانات، بالاعتماد على كتاب Wireless Communications and Networks (الطبعة الثانية) لـ William Stallings. ",
        platforms: {
          youtube:
            "https://youtube.com/playlist?list=PLCaBbsduBn6322MqBlM-VNnsTn2IdAem2&si=czmhD2num7UStmLi",
        },
        rating: 4.7,
        logo: "fa-solid fa-satellite-dish",
      },
      {
        id: 28,
        name: " كورس لمقرر مبادئ الامن السيبراني",
        subsection: "المستوى الثاني",
        description:
          "تقدم هذه الدورة الجامعية مقدمة شاملة لمبادئ الأمن السيبراني، مع التركيز على حماية المعلومات، إدارة المخاطر، والتعرف على الهجمات السيبرانية الشائعة وطرق الوقاية منها. مصممة للطلاب والمبتدئين الراغبين في بناء أساس قوي في مجال الأمن السيبراني.",
        platforms: {
          youtube: "https://youtu.be/3iAX1qTMnak?si=f3C8J3EC0ykBUkJy",
        },
        rating: 4.7,
        logo: "fa-solid fa-shield-halved",
      },
      {
        id: 29,
        name: " كورس لمقرر الكترونيات ",
        subsection: "المستوى الثاني",
        description:
          "قائمة تشغيل تعليمية شاملة موجهة للمبتدئين، تشرح مفاهيم الإلكترونيات بأسلوب مبسط وعملي. تبدأ من الصفر وتغطي أساسيات الكهرباء والمكونات الإلكترونية،  ",
        platforms: {
          youtube:
            "https://youtube.com/playlist?list=PLkXK5Ys6YkPJeYfEHo8Rei1dToH6hB5e1&si=U6Hl84JwzyKxezAe",
        },
        rating: 4,
        logo: "fa-solid fa-bolt",
      },
      {
        id: 30,
        name: "كورس لمقرر  هندسة البرمجيات  ",
        subsection: "المستوى الثالث",
        description:
          " الكورس يشرح مراحل بناء البرمجيات من التخطيط حتى التقييم، ويغطي تحليل المتطلبات، التصميم، التنفيذ، الاختبار، النشر، الصيانة، وتقييم الأداء، مع التعريف بمفهوم هندسة البرمجيات والـ Software Architecture",
        platforms: {
          youtube:
            "https://www.youtube.com/playlist?list=PLePWW30iFqTDqvRJOYEZvaj4NZE5rf65x",
        },
        rating: 4.7,
        logo: "fa-solid fa-gears",
      },
      {
        id: 31,
        name: "كورس لمقرر تطوير تطبيقات الويب << php >>",
        subsection: "المستوى الثالث",
        description:
          " كورس مكثف باللغة العربية يقدمه المهندس يحيى العربي ، يغطي أساسيات لغة PHP بشكل عملي ومنظم خلال 6 ساعات فقط ",
        platforms: {
          youtube:
            "https://www.youtube.com/watch?v=qmvjwRbtNww&t=1036s&pp=ygUOINiq2LnZhNmFIHBocCA%3D",
        },
        rating: 4.7,
        logo: "fa-brands fa-php",
      },
      {
        id: 32,
        name: "كورس اساسيات #C << البرمجة المرئية >>",
        subsection: "المستوى الثالث",
        description:
          "   فيديو تعليمي شامل لتعلم أساسيات لغة C# من البداية حتى البرمجة الكائنية، يشمل المتغيرات، الشروط، الحلقات، المصفوفات، الدوال، والتعامل مع الملفات، بأسلوب مبسط ومناسب للمبتدئين.",
        platforms: {
          youtube:
            "https://www.youtube.com/watch?v=qmvjwRbtNww&t=1036s&pp=ygUOINiq2LnZhNmFIHBocCA%3D",
        },
        rating: 4.7,
        logo: "fa-solid fa-hashtag",
      },
      {
        id: 33,
        name: " كورس لمقرر البرمجة المرئية",
        subsection: "المستوى الثالث",
        description:
          "  شرح عملي لمفهوم الواجهات في C#، وكيفية استخدامها لتحديد العقود بين الكلاسات، مع أمثلة على التنفيذ والتعددية الشكلية (Polymorphism). مناسب لفهم أساسيات التصميم المرن في التطبيقات",
        platforms: {
          youtube:
            "https://www.youtube.com/watch?v=rMqao1u-eSI&list=PLH4Lyg7lw4ATodHM3W5YKrpCtsubK4mZ4",
          },
        rating: 4.7,
        logo: "fa-solid fa-window-restore",
      },
      {
        id: 34,
        name: "جميع بوتات مستوئ اول 2026",
        subsection: " بوتات  اللجان العلمية",
        description:
          "    بوتات اللجان العلمية في المستوى الأول لعام 2026 توفر مصادر تعليمية منظمة لكل قسم أكاديمي، لمساعدة الطلاب الجدد على فهم المواد الأساسية والتفاعل مع الأنشطة بسهولة",
        platforms: {
          bot:
            "https://t.me/TeleSpace_0Bot?start=710fd6ce-cc59-4ad8-9c2d-ecfddf1c2be9",
 },
        rating: 4.7,
        logo: "fa-solid fa-1",
      },
      {
        id: 35,
        name: "جميع بوتات مستوئ ثاني 2026",
        subsection: " بوتات  اللجان العلمية",
        description:
          "    بوتات المستوى الثاني تقدم محتوى جاهز من اللجان العلمية لدعم مواد التخصص التمهيدي وتنظيم الدراسة.",
        platforms: {
         bot:
            "https://t.me/TeleSpace_0Bot?start=5c7f35e6-8619-4c89-9db7-89b4b6103875",

          },
        rating: 4.7,
        logo: "fa-solid fa-2",
      },
      {
        id: 36,
        name: "جميع بوتات مستوئ  ثالث 2026",
        subsection: " بوتات  اللجان العلمية",
        description:
          "   بوتات المستوى الثالث تقدم محتوى جاهز من اللجان العلمية لدعم مواد التخصص التمهيدي وتنظيم الدراسة.",
        platforms: {
          bot:
            "https://t.me/TeleSpace_0Bot?start=e731c31f-d58f-458a-9b9a-11884047b439",
        },
        rating: 4.7,
        logo: "fa-solid fa-3",
      },

  {
    id: 37,
    name: "freeCodeCamp",
    subsection: "مواقع ومنصات تعليمية",
    description: "موقع يقدم دورات مجانية مع مشاريع عملية منظمة خطوة بخطوة لبناء مهارات البرمجة من الصفر حتى المستوى المتقدم.",
    platforms: {
      web: "https://www.freecodecamp.org"
    },
    rating: 4.8,
    logo: "fa-solid fa-graduation-cap"
  },
  {
    id: 38,
    name: "W3Schools",
    subsection: "مواقع ومنصات تعليمية",
    description: "موقع يقدم دروسًا سهلة ومباشرة في لغات الويب الأساسية، مع محرر تجريبي لتطبيق المفاهيم بشكل فوري.",
    platforms: {
      web: "https://www.w3schools.com"
    },
    rating: 4.5,
    logo: "fa-brands fa-html5"
  },
  {
    id: 39,
    name: "Stack Overflow",
    subsection: "مواقع ومنصات تعليمية",
    description: "منتدى برمجي ضخم لحل المشاكل، طرح الأسئلة، ومشاركة الحلول مع مجتمع عالمي من المبرمجين.",
    platforms: {
      web: "https://stackoverflow.com"
    },
    rating: 4.9,
    logo: "fa-brands fa-stack-overflow"
  },
  {
    id: 40,
    name: "LeetCode",
    subsection: "مواقع ومنصات تعليمية",
    description: "منصة تحديات برمجية تعزز مهارات الخوارزميات وحل المشكلات بمستويات مختلفة معدة لاختبارات البرمجة.",
    platforms: {
      web: "https://leetcode.com"
    },
    rating: 4.7,
    logo: "fa-solid fa-code"
  },
  {
    id: 41,
    name: "HackerRank",
    subsection: "مواقع ومنصات تعليمية",
    description: "منصة لتمارين ومسابقات برمجية متنوعة تساعد في تحسين التفكير التحليلي وتطوير مهارات الكود.",
    platforms: {
      web: "https://www.hackerrank.com"
    },
    rating: 4.6,
    logo: "fa-solid fa-bolt"
  },
  {
    id: 42,
    name: "MDN Web Docs",
    subsection: "مواقع ومنصات تعليمية",
    description: "مصدر رسمي وشامل لتوثيق تكنولوجيات الويب من HTML إلى JavaScript وCSS، مع أمثلة تعليمية.",
    platforms: {
      web: "https://developer.mozilla.org"
    },
    rating: 4.8,
    logo: "fa-brands fa-firefox-browser"
  },
  {
    id: 43,
    name: "Coursera",
    subsection: "مواقع ومنصات تعليمية",
    description: "منصة دورات تعليمية من جامعات عالمية تقدم محتوى برمجي وعلوم حاسوب مع شهادات معتمدة.",
    platforms: {
      web: "https://www.coursera.org"
    },
    rating: 4.7,
    logo: "fa-brands fa-coursera"
  },
  {
    id: 44,
    name: "edX",
    subsection: "مواقع ومنصات تعليمية",
    description: "منصة تعليمية تضم محتوى أكاديمي من جامعات مرموقة، تقدم دورات برمجة وعلوم حاسوب مجانية ومدفوعة.",
    platforms: {
      web: "https://www.edx.org"
    },
    rating: 4.6,
    logo: "fa-solid fa-school"
  },
  {
    id: 45,
    name: "GitHub",
    subsection: "مواقع ومنصات تعليمية",
    description: "منصة لاستضافة المشاريع البرمجية المفتوحة المصدر، تساعد على التعلم من خلال قراءة الأكواد والمشاركة في المشاريع.",
    platforms: {
      web: "https://github.com"
    },
    rating: 4.9,
    logo: "fa-brands fa-github"
  },
  {
    id: 46,
    name: "Reddit - r/learnprogramming",
    subsection: "مواقع ومنصات تعليمية",
    description: "منتدى تفاعلي يقدم دعم ونصائح للمتعلمين الجدد، حيث يمكن طرح الأسئلة والحصول على مساعدة من المجتمع.",
    platforms: {
      web: "https://www.reddit.com/r/learnprogramming"
    },
    rating: 4.4,
    logo: "fa-brands fa-reddit"
  },
  
  {
    id: 47,
    name: "GitHub Copilot",
    subsection: "أدوات البرمجة والتعلم",
    description: "مساعد ذكي لإكمال الكود واقتراح حلول برمجية تسهل عملية التعلم وكتابة الأكواد بسرعة ودقة.",
    platforms: {
      toolai: "https://copilot.github.com"
    },
    rating: 4.8,
    logo: "fa-solid fa-robot"
  },
  {
    id: 48,
    name: "Kite",
    subsection: "أدوات البرمجة والتعلم",
    description: "أداة تقدم اقتراحات ذكية أثناء كتابة الكود مع شروحات تساعد في فهم المفاهيم البرمجية.",
    platforms: {
      toolai: "https://www.kite.com"
    },
    rating: 4.6,
    logo: "fa-solid fa-lightbulb"
  },
  {
    id: 49,
    name: "Replit AI",
    subsection: "أدوات البرمجة والتعلم",
    description: "بيئة تطوير متكاملة عبر الإنترنت مع دعم ذكاء اصطناعي لتسهيل بناء المشاريع وتصحيح الأكواد.",
    platforms: {
      toolai: "https://replit.com"
    },
    rating: 4.7,
    logo: "fa-solid fa-laptop-code"
  },
  {
    id: 50,
    name: "DeepCode",
    subsection: "أدوات البرمجة والتعلم",
    description: "محلل أكواد ذكي يكشف الأخطاء ويقترح تحسينات لرفع جودة البرامج المكتوبة.",
    platforms: {
      toolai: "https://www.deepcode.ai"
    },
    rating: 4.5,
    logo: "fa-solid fa-search"
  },
  {
    id: 51,
    name: "Codex by OpenAI",
    subsection: "أدوات البرمجة والتعلم",
    description: "مولد أكواد متقدم يساعد في توليد حلول برمجية مع شروحات مفيدة للطلاب.",
    platforms: {
      toolai: "https://openai.com/blog/openai-codex"
    },
    rating: 4.7,
    logo: "fa-solid fa-code"
  },
  {
    id: 52,
    name: "Quizlet with AI",
    subsection: "أدوات البرمجة والتعلم",
    description: "أداة لإنشاء بطاقات تعليمية ذكية تساعد في مراجعة واستذكار المفاهيم التقنية بسهولة.",
    platforms: {
      toolai: "https://quizlet.com"
    },
    rating: 4.4,
    logo: "fa-solid fa-chalkboard"
  },
  {
    id: 53,
    name: "Socratic by Google",
    subsection: "أدوات البرمجة والتعلم",
    description: "أداة تساعد في حل مسائل البرمجة الأكاديمية مع توفير شروحات دقيقة مبسطة.",
    platforms: {
      toolai: "https://socratic.org"
    },
    rating: 4.3,
    logo: "fa-solid fa-question"
  },
  {
    id: 54,
    name: "Notion AI",
    subsection: "أدوات البرمجة والتعلم",
    description: "منصة لتنظيم الملاحظات وإدارة المشاريع مع دعم ذكاء اصطناعي لإعداد ملخصات دراسية فعالة.",
    platforms: {
      toolai: "https://www.notion.so"
    },
    rating: 4.6,
    logo: "fa-solid fa-book-open"
  },
  {
    id: 55,
    name: "Otter.ai",
    subsection: "أدوات البرمجة والتعلم",
    description: "أداة تحويل المحاضرات الصوتية إلى نصوص مكتوبة لتسهيل المراجعة والتعلم.",
    platforms: {
      toolai: "https://otter.ai"
    },
    rating: 4.5,
    logo: "fa-solid fa-microphone"
  },
  {
    id: 56,
    name: "Grammarly AI",
    subsection: "أدوات البرمجة والتعلم",
    description: "أداة لتحسين الكتابة الأكاديمية والتقنية، تساعد في صياغة محتوى واضح وخالي من الأخطاء.",
    platforms: {
      toolai: "https://grammarly.com"
    },
    rating: 4.7,
    logo: "fa-solid fa-pen"
  },
  
  {
    id: 57,
    name: "Git & GitHub",
    subsection: "الأدوات المشتركة لجميع المهندسين",
    description: "Git هو نظام التحكم في الإصدارات وGitHub منصة استضافته؛ أساسيات لا غنى عنها للتعاون وتتبع التغييرات. كورس الزيرو ويب سكول يقدم شرحًا عميقًا، وGit Immersion يوفر تطبيقًا عمليًا فوريًا.",
    platforms: {
      youtube: "https://www.youtube.com/playlist?list=PLDoPjvgpZ8nDk3D6h1q4wXyOQ0dI_YlK8",
      web: "http://git-immersion.com/"
    },
    rating: 5.0,
    logo: "fa-brands fa-github"
  },
  {
    id: 58,
    name: "Linux & PowerShell",
    subsection: "الأدوات المشتركة لجميع المهندسين",
    description: "هذه الأدوات هي العمود الفقري للتحكم في الأنظمة والخوادم. كورس عبد الله عيد يؤسس لقواعد سطر أوامر Linux، و موقع Linuxize هو مرجع ممتاز ومجاني للأوامر والتطبيقات العملية.",
    platforms: {
      youtube: "https://www.youtube.com/@AbdullahEid/playlists",
      web: "https://linuxize.com/post/linux-command-line-tutorial/"
    },
    rating: 4.8,
    logo: "fa-brands fa-linux"
  },
  {
    id: 59,
    name: "VS Code و JetBrains",
    subsection: "الأدوات المشتركة لجميع المهندسين",
    description: "VS Code هو محرر الأكواد الأكثر شيوعًا ومرونة. كورس أحمد عكاشة يشرح تخصيص المحرر واستخدام إضافاته لزيادة الإنتاجية. بينما يمثل VS Code Docs المرجع الرسمي الشامل لكل الميزات والـ Debugging.",
    platforms: {
      youtube: "https://www.youtube.com/@AhmedOkasha/playlists",
      web: "https://code.visualstudio.com/docs"
    },
    rating: 4.9,
    logo: "fa-solid fa-code"
  },
  {
    id: 60,
    name: "Postman و APIs",
    subsection: "الأدوات المشتركة لجميع المهندسين",
    description: "الـ APIs هي الطريقة التي تتحدث بها التطبيقات، وPostman هو الأداة المعيارية لاختبار هذه الواجهات. كورس حسونة أكاديمي يقدم مدخلاً مبسطاً للمفهوم، وPostman Learning Center يوفر دليلاً متكاملاً لاختبار الـ APIs وبناء الـ Collections.",
    platforms: {
      youtube: "https://www.youtube.com/@HsoubAcademy/videos",
      web: "https://learning.postman.com/"
    },
    rating: 4.7,
    logo: "fa-solid fa-exchange-alt"
  },
  {
    id: 61,
    name: "SQL و قواعد البيانات",
    subsection: "الأدوات المشتركة لجميع المهندسين",
    description: "SQL هي لغة الاستعلام القياسية للبيانات. كورس الزيرو ويب سكول في SQL و MySQL يقدم شرحاً شاملاً. والموقع العالمي W3Schools يوفر تمارين تفاعلية سريعة لاختبار استعلامات SQL الأساسية والمتقدمة.",
    platforms: {
      youtube: "https://www.youtube.com/@ElzeroWebSchool/playlists",
      web: "https://www.w3schools.com/sql/"
    },
    rating: 4.9,
    logo: "fa-solid fa-database"
  },
  {
    id: 62,
    name: "Notion لإدارة المشاريع",
    subsection: "الأدوات المشتركة لجميع المهندسين",
    description: "أدوات متكاملة لتنظيم المهام وسير العمل، وأبرزها Notion لمرونته. شرح أيمن الصفدي يوضح كيفية بناء أنظمة متكاملة، بينما تقدم Notion Guides الرسمية شروحات مفصلة حول القوالب وكيفية استخدام الميزات المتقدمة.",
    platforms: {
      youtube: "https://www.youtube.com/@Ayman_Safadi/videos",
      web: "https://www.notion.so/help/guides"
    },
    rating: 4.6,
    logo: "fa-solid fa-list-check"
  },
  {
    id: 63,
    name: "Docker و VMs",
    subsection: "الأدوات المشتركة لجميع المهندسين",
    description: "Docker (الحاويات) هي التقنية الحديثة لضمان عمل تطبيقك في أي بيئة. كورس EGAcademy يوفر مدخلاً عملياً لفهم الحاويات والصور، أما Docker Docs الرسمي فهو أفضل نقطة انطلاق عالمية للبدء في تطبيق التقنية على مشاريعك.",
    platforms: {
      youtube: "https://www.youtube.com/@EGAcademy/playlists",
      web: "https://docs.docker.com/get-started/"
    },
    rating: 4.7,
    logo: "fa-brands fa-docker"
  },
  {
    id: 64,
    name: "Networking Basics",
    subsection: "الأدوات المشتركة لجميع المهندسين",
    description: "فهم أساسيات الشبكات ضروري لكل مختص تقني. كورس محمود فؤاد CCNA يعطي أساسًا نظريًا وعمليًا قويًا. ودورات Cisco Networking Academy المجانية توفر محتوى عالمي الجودة وممنهج في هذا المجال.",
    platforms: {
      youtube: "https://www.youtube.com/@MahmoudFouad-IT/playlists",
      web: "https://skillsforall.com/course/networking-basics"
    },
    rating: 4.8,
    logo: "fa-solid fa-network-wired"
  },
  
  {
    id: 65,
    name: "Problem Solving و التفكير التحليلي",
    subsection: "الأدوات العقلية والمفاهيم الأساسية",
    description: "تعلم مهارات التفكير التحليلي وحل المشكلات البرمجية. الدورة العربية على يوتيوب تقدم أساسيات التفكير المنطقي والتحليل، وموقع CS Circles يقدم تمارين تفاعلية لتطوير التفكير البرمجي.",
    platforms: {
      youtube: "https://www.youtube.com/playlist?list=PL88kafUXXgBaAgb0h3-ZMvzxb5J2qFrut",
      web: "https://cs-circles.cs.cmu.edu/"
    },
    rating: 4.7,
    logo: "fa-solid fa-brain"
  },
  {
    id: 66,
    name: "خوارزميات و Data Structures أساسية",
    subsection: "الأدوات العقلية والمفاهيم الأساسية",
    description: "دورة عربية على يوتيوب تشرح الخوارزميات وهياكل البيانات الأساسية والمتقدمة، وموقع Udemy يقدم كورسات مجانية لتعلم Data Structures باللغة العربية.",
    platforms: {
      youtube: "https://www.youtube.com/playlist?list=PL88kafUXXgBaAgb0h3-ZMvzxb5J2qFrut",
      web: "https://www.udemy.com/ar/topic/data-structures/free/"
    },
    rating: 4.8,
    logo: "fa-solid fa-code-branch"
  },
  {
    id: 67,
    name: "نظم التشغيل و Architecture Basics",
    subsection: "الأدوات العقلية والمفاهيم الأساسية",
    description: "شرح مفصل لمفاهيم نظم التشغيل باللغة العربية على يوتيوب، مع كتاب مجاني 'Operating Systems: Three Easy Pieces' لتعلم الأساسيات والنظرية.",
    platforms: {
      youtube: "https://www.youtube.com/watch?v=va2GOlPFKv0",
      web: "http://pages.cs.wisc.edu/~remzi/OSTEP/"
    },
    rating: 4.6,
    logo: "fa-solid fa-desktop"
  },
  {
    id: 68,
    name: "أساسيات الرياضيات المنطقية والإحصاء",
    subsection: "الأدوات العقلية والمفاهيم الأساسية",
    description: "دورة عربية على يوتيوب لتعلم أساسيات الرياضيات المنطقية والإحصاء، وموقع Khan Academy يقدم محتوى تفاعلي مجاني في الإحصاء والاحتمالات.",
    platforms: {
      youtube: "https://www.youtube.com/watch?v=PB9qL1UaTIE",
      web: "https://www.khanacademy.org/math/statistics-probability"
    },
    rating: 4.7,
    logo: "fa-solid fa-square-root-variable"
  },
  {
    id: 69,
    name: "مهارات البحث والتحقق من المصادر",
    subsection: "الأدوات العقلية والمفاهيم الأساسية",
    description: "تعلم تقنيات البحث والتحقق من المعلومات عبر دورة عربية على يوتيوب، واستخدام محرك البحث الأكاديمي Google Scholar للوصول للأبحاث العلمية.",
    platforms: {
      youtube: "https://www.youtube.com/watch?v=PB9qL1UaTIE",
      web: "https://scholar.google.com/"
    },
    rating: 4.6,
    logo: "fa-solid fa-magnifying-glass"
  },
  {
    id: 70,
    name: "تعلم كيفية التعلم (Meta-Learning)",
    subsection: "الأدوات العقلية والمفاهيم الأساسية",
    description: "دورة عربية على يوتيوب تشرح استراتيجيات تعلم المهارات بسرعة، ودورة عالمية شهيرة على Coursera 'Learning How to Learn' لتطوير استراتيجيات التعلم.",
    platforms: {
      youtube: "https://www.youtube.com/watch?v=PB9qL1UaTIE",
      web: "https://www.coursera.org/learn/learning-how-to-learn"
    },
    rating: 4.9,
    logo: "fa-solid fa-lightbulb"
  },
  {
    id: 71,
    name: "التحليل المنهجي وحل المشكلات التقنية",
    subsection: "الأدوات العقلية والمفاهيم الأساسية",
    description: "دورة عربية على يوتيوب لتقنيات التحليل وحل المشكلات البرمجية، وموقع Project Euler يقدم مسائل برمجية ورياضية لتطوير التفكير التحليلي وحل المشكلات.",
    platforms: {
      youtube: "https://www.youtube.com/watch?v=PB9qL1UaTIE",
      web: "https://projecteuler.net/"
    },
    rating: 4.8,
    logo: "fa-solid fa-diagram-project"
  },
  
  {
    id: 72,
    name: "Slack و Microsoft Teams للتواصل الجماعي",
    subsection: "أدوات التواصل والتعاون المهني",
    description: "تعلم استخدام Slack وMicrosoft Teams لإدارة الفرق والتواصل الجماعي بشكل احترافي.",
    platforms: {
      youtube: "https://www.youtube.com/watch?v=CUt0Y_toBIA | https://www.youtube.com/watch?v=9Qz6aZr7tSU",
      web: "https://slack.com/ | https://www.microsoft.com/en/microsoft-teams/group-chat-software"
    },
    rating: 4.7,
    logo: "fa-brands fa-slack"
  },
  {
    id: 73,
    name: "Zoom و Google Meet للاجتماعات التقنية",
    subsection: "أدوات التواصل والتعاون المهني",
    description: "تعلم إدارة الاجتماعات الافتراضية باستخدام Zoom وGoogle Meet.",
    platforms: {
      youtube: "https://www.youtube.com/watch?v=7n1CgiRGh6M | https://www.m3aarf.com/certificate/14884/Google-Meet-%D9%85%D9%86-%D8%A7%D9%84%D8%B5%D9%81%D8%B1-video",
      web: "https://zoom.us/ | https://meet.google.com/"
    },
    rating: 4.8,
    logo: "fa-solid fa-video"
  },
  {
    id: 74,
    name: "Jira و GitHub Projects لإدارة فرق التطوير",
    subsection: "أدوات التواصل والتعاون المهني",
    description: "تعلم استخدام Jira وGitHub Projects لإدارة فرق التطوير ومتابعة المهام والمشاريع.",
    platforms: {
      youtube: "https://www.youtube.com/watch?v=cHHL-znh2Po | https://www.youtube.com/watch?v=FueXoIewxg0",
      web: "https://www.atlassian.com/software/jira | https://github.com/features/project-management"
    },
    rating: 4.8,
    logo: "fa-brands fa-github"
  },
  {
    id: 75,
    name: "Discord و Telegram Communities لبناء علاقات تقنية",
    subsection: "أدوات التواصل والتعاون المهني",
    description: "تعلم استخدام Discord وTelegram لبناء مجتمعات تقنية والتواصل مع المطورين والمهندسين.",
    platforms: {
      youtube: "https://www.youtube.com/watch?v=-mzadJreN08",
      web: "https://discord.com/ | https://telegram.org/"
    },
    rating: 4.7,
    logo: "fa-brands fa-discord"
  },
  {
    id: 76,
    name: "Email Etiquette و التواصل الاحترافي",
    subsection: "أدوات التواصل والتعاون المهني",
    description: "تعلم آداب كتابة البريد الإلكتروني والتواصل الاحترافي في بيئة العمل.",
    platforms: {
      youtube: "https://www.youtube.com/watch?v=sR_K3fJyCO4 | https://www.udemy.com/course/arabic-email-etiquette/?srsltid=AfmBOoqEK9APtEheiYza6sL86Py0s1aVoflWpvkqFZ8BxES51onFQQAH",
      web: "https://www.gmail.com/ | https://outlook.live.com/"
    },
    rating: 4.8,
    logo: "fa-solid fa-envelope"
  },
  {
    id: 77,
    name: "توثيق المشاريع والعروض التقنية باستخدام Notion و Google Docs",
    subsection: "أدوات التواصل والتعاون المهني",
    description: "تعلم استخدام Notion وGoogle Docs لتوثيق المشاريع التقنية وإنشاء العروض بطريقة منظمة واحترافية.",
    platforms: {
      youtube: "https://www.youtube.com/watch?v=H1A7KZH2lpI | https://www.youtube.com/watch?v=8_dqId-6qGQ | https://www.youtube.com/watch?v=Zu-LY7vLdM8",
      web: "https://www.notion.so/ | https://docs.google.com/"
    },
    rating: 4.8,
    logo: "fa-solid fa-file-lines"
  },





    ],
  };

  const cardBorderColors = {
    purple: "border-purple-500",
    blue: "border-blue-500",
    green: "border-green-500",
    pink: "border-pink-500",
    red: "border-red-500",
    indigo: "border-indigo-500",
  };
  let appState = {
    currentView: "home",
    currentSectionId: null,
    currentSubsectionName: null,
  };

  const mainContent = document.getElementById("main-content");
  const mainNav = document.getElementById("main-nav");
  const modal = document.getElementById("modal");
  const modalContent = document.getElementById("modal-content");
  const openSidebarBtn = document.getElementById("open-sidebar");
  const closeSidebarBtn = document.getElementById("close-sidebar");
  const sidebar = document.getElementById("sidebar");
  const darkModeToggle = document.getElementById("dark-mode-toggle");
  const contactModal = document.getElementById("contact-modal");
  const contactModalClose = document.getElementById("contact-modal-close");
  const contactUsBtn = document.getElementById("contact-us-btn");
  const contactForm = document.getElementById("contact-form");
  const telegramGate = document.getElementById("telegram-gate");
  const confirmJoinBtn = document.getElementById("confirm-join-btn");
  const platformContainer = document.getElementById("platform-container");
  const footerDevLink = document.getElementById("footer-dev-link");

  function renderStars(rating) {
    let stars = "";
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) stars += '<i class="fas fa-star text-amber-400"></i>';
      else if (i - 0.5 <= rating)
        stars += '<i class="fas fa-star-half-alt text-amber-400"></i>';
      else stars += '<i class="far fa-star text-slate-300"></i>';
    }
    return `<div class="flex items-center gap-1">${stars} <span class="text-sm font-bold text-slate-600 dark:text-slate-300">${rating}</span></div>`;
  }

  function createChannelCard(channel, sectionId) {
    const sectionInfo = database.structure[sectionId];
    const borderColorClass =
      cardBorderColors[sectionInfo.color] || "border-slate-300";
    return `<div class="channel-card rounded-xl shadow-sm overflow-hidden cursor-pointer flex flex-col border-t-4 ${borderColorClass}" data-id="${
      channel.id
    }" data-section-id="${sectionId}">
            <div class="p-5 flex-grow"><div class="flex items-center gap-4 mb-3"><div class="w-14 h-14 bg-slate-100 dark:bg-slate-700 rounded-full flex items-center justify-center text-slate-500 text-3xl"><i class="${
              channel.logo
            }"></i></div><div><h3 class="font-extrabold text-lg">${
      channel.name
    }</h3>${renderStars(
      channel.rating
    )}</div></div><p class="text-sm text-slate-600 dark:text-slate-400 mb-4 h-10 overflow-hidden">${
      channel.description
    }</p></div>
            <div class="bg-slate-50 dark:bg-slate-800/50 p-3 flex justify-end gap-3 border-t dark:border-slate-700">
${
  channel.platforms.web
    ? `<a href="${channel.platforms.web}" target="_blank" class="text-green-500 hover:text-green-400 text-2xl transition-colors">
         <i class="fas fa-globe mr-2"></i>
       </a>`
    : ""
}
${
  channel.platforms.toolai
    ? `<a href="${channel.platforms.toolai}" target="_blank" class="text-indigo-500 hover:text-indigo-400 text-2xl transition-colors">
         <i class="fas fa-brain mr-2"></i>
       </a>`
    : ""
}
${
  channel.platforms.bot
    ? `<a href="${channel.platforms.bot}" target="_blank" class="text-purple-500 hover:text-purple-400 text-2xl transition-colors">
         <i class="fas fa-robot mr-2"></i>
       </a>`
    : ""
}

            ${
              channel.platforms.youtube
                ? `<a href="${channel.platforms.youtube}" target="_blank" class="text-red-600 hover:text-red-500 text-2xl transition-colors"><i class="fab fa-youtube"></i></a>`
                : ""
            }${
      channel.platforms.telegram
        ? `<a href="${channel.platforms.telegram}" target="_blank" class="text-sky-500 hover:text-sky-400 text-2xl transition-colors"><i class="fab fa-telegram"></i></a>`
        : ""
    }
</div>
        </div>`;
  }

  function renderHomepage() {
    let html = `<h1 class="text-4xl font-extrabold mb-8">استكشف الأقسام الرئيسية</h1>
                                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">`;

    for (const sectionId in database.structure) {
      const section = database.structure[sectionId];
      const borderColorClass =
        cardBorderColors[section.color] || "border-slate-300";
      html += `
                <div class="main-section-card rounded-xl p-6 cursor-pointer flex flex-col items-center text-center border-t-4 ${borderColorClass}" data-section="${sectionId}">
                    <div class="w-20 h-20 rounded-full bg-slate-100 dark:bg-slate-700 flex items-center justify-center mb-4 text-4xl">
                        <i class="${section.icon}"></i>
                    </div>
                    <h2 class="text-2xl font-extrabold mb-2">${section.title}</h2>
                    <p class="text-slate-500 dark:text-slate-400 flex-grow">${section.description}</p>
                </div>
            `;
    }
    html += `</div>`;
    mainContent.innerHTML = html;
  }

  function renderSubSectionsPage(sectionId) {
    const section = database.structure[sectionId];
    let html = `
            <div class="flex items-center mb-8">
                <button class="back-btn text-2xl text-slate-500 hover:text-cyan-600 dark:text-slate-400 dark:hover:text-cyan-500 transition-colors ml-4" data-target="home">&larr;</button>
                <h2 class="text-3xl font-extrabold flex items-center gap-3"><i class="${section.icon}"></i> ${section.title}</h2>
            </div>
            <h3 class="text-xl font-bold mb-4 text-slate-600 dark:text-slate-300">اختر قسماً فرعياً</h3>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">`;

    section.subsections.forEach((subsectionName) => {
      const channelsCount = database.channels.filter(
        (c) => c.subsection === subsectionName
      ).length;
      const borderColorClass =
        cardBorderColors[section.color] || "border-slate-300";
      html += `
                <div class="subsection-card rounded-xl p-6 cursor-pointer text-center border-t-4 ${borderColorClass}" data-section-id="${sectionId}" data-subsection="${subsectionName}">
                    <h3 class="text-xl font-extrabold mb-2">${subsectionName}</h3>
                    <p class="text-slate-500 dark:text-slate-400 font-semibold">${channelsCount}  مصدر</p>
                </div>`;
    });
    html += `</div>`;
    mainContent.innerHTML = html;
  }

  function renderChannelsPage(sectionId, subsectionName) {
    const section = database.structure[sectionId];
    const channels = database.channels.filter(
      (c) => c.subsection === subsectionName
    );
    let html = `
             <div class="flex items-center mb-8">
                <button class="back-btn text-2xl text-slate-500 hover:text-cyan-600 dark:text-slate-400 dark:hover:text-cyan-500 transition-colors ml-4" data-target="sub_sections" data-section-id="${sectionId}">&larr;</button>
                <div>
                    <h2 class="text-3xl font-extrabold flex items-center gap-3"><i class="${
                      section.icon
                    }"></i> ${section.title}</h2>
                    <h3 class="text-xl font-bold text-cyan-600 dark:text-cyan-400 mt-1">${subsectionName}</h3>
                </div>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6">
                ${
                  channels.length > 0
                    ? channels
                        .map((c) => createChannelCard(c, sectionId))
                        .join("")
                    : '<p class="text-slate-500 dark:text-slate-400 col-span-full">لا توجد قنوات في هذا القسم حالياً.</p>'
                }
            </div>`;
    mainContent.innerHTML = html;
  }

  function renderAboutDeveloperPage() {
    const html = `
        <div id="aiman" class="bg-white dark:bg-slate-800/50 rounded-2xl shadow-lg p-6 sm:p-10 animate-fade-in-up">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                <div class="md:col-span-1 flex justify-center">
                    <div class="relative">
                        <img class="w-40 h-40 rounded-full shadow-2xl border-4 border-cyan-500 object-cover" src="image_ME.png" alt="صورة المطور ايمن المليكي">
                        <span class="absolute bottom-2 -right-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full border-2 border-white dark:border-slate-800 animate-pulse">
                            متاح للعمل
                        </span>
                    </div>
                </div>

                <div class="md:col-span-2 text-center md:text-right">
                    <h1 class="text-4xl font-extrabold text-slate-800 dark:text-white">ايمن المليكي</h1>
                    <p class="text-lg font-semibold text-cyan-600 dark:text-cyan-400 mt-1 mb-4">مطور واجهات ويب | Web Developer</p>
                    <p class="text">
                        مطور متخصص في بناء واجهات مستخدم تفاعلية وجذابة باستخدام أحدث التقنيات. أهدف إلى تحويل الأفكار المعقدة إلى تجارب رقمية بسيطة وسهلة الاستخدام، مع التركيز على الأداء العالي والتوافق مع جميع الأجهزة.
                    </p>
                </div>
            </div>

            <div class="mt-10 pt-8 border-t border-slate-200 dark:border-slate-700 text-center">
    <h2 class="text-2xl font-bold mb-6 text-slate-700 dark:text-slate-200">تواصل معي واشترك في قناتي</h2>
    <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
        <a href="https://t.me/DopaCode" target="_blank" 
           class="w-full sm:w-auto bg-white text-sky-500 font-bold py-3 px-8 rounded-lg hover:bg-slate-100 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-3">
            <img src="favicon.ico" alt="Telegram" class="w-8 h-8">
            <span>انضم لقناتي</span>
 

                    </a>
                    <a href="https://wa.me/967778554145?text=السلام_عليكم" target="_blank" class="w-full sm:w-auto bg-slate-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-slate-700 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-3">
                        <i class="fab fa-whatsapp fa-2x"></i>
                        <span> تواصل معي </span>
                    </a>
                </div>
            </div>
        </div>
        `;
    mainContent.innerHTML = html;
  }

  function switchView(view, data = {}) {
    appState.currentView = view;
    appState.currentSectionId = data.sectionId || null;
    appState.currentSubsectionName = data.subsectionName || null;

    mainNav.querySelectorAll(".nav-link").forEach((link) => {
      link.classList.remove("active");
    });

    let activeLink;
    if (view === "home")
      activeLink = mainNav.querySelector('.nav-link[data-section="home"]');
    else if (view === "about_developer")
      activeLink = mainNav.querySelector(
        '.nav-link[data-section="about_developer"]'
      );
    else if (view === "sub_sections" || view === "channels")
      activeLink = mainNav.querySelector(
        `.nav-link[data-section="${data.sectionId}"]`
      );

    if (activeLink) activeLink.classList.add("active");

    if (view === "home") renderHomepage();
    else if (view === "sub_sections") renderSubSectionsPage(data.sectionId);
    else if (view === "channels")
      renderChannelsPage(data.sectionId, data.subsectionName);
    else if (view === "about_developer") renderAboutDeveloperPage();
  }

  function openModal(modalElement) {
    if (!modalElement) return;
    modalElement.classList.remove("opacity-0", "pointer-events-none");
    const content = modalElement.querySelector(".modal-content");
    if (content) content.classList.remove("opacity-0", "scale-95");
  }

  function closeModal(modalElement) {
    if (!modalElement) return;
    modalElement.classList.add("opacity-0", "pointer-events-none");
    const content = modalElement.querySelector(".modal-content");
    if (content) content.classList.add("opacity-0", "scale-95");
  }

  function openChannelModal(channelId) {
    const channel = database.channels.find((c) => c.id == channelId);
    if (!channel) return;
    modalContent.innerHTML = `<div class="p-5 border-b dark:border-slate-700 flex justify-between items-start"><div><h3 class="text-2xl font-extrabold">${
      channel.name
    }</h3>${renderStars(
      channel.rating
    )}</div><button id="modal-close" class="text-2xl text-slate-400 hover:text-slate-600 dark:hover:text-slate-200">&times;</button></div><div class="p-6 flex-1 overflow-y-auto"><p class="leading-relaxed mb-4">${
      channel.description
    }</p><h4 class="font-bold mb-2">القسم الفرعي:</h4><p class="text-sm font-semibold text-cyan-800 bg-cyan-100 dark:text-cyan-200 dark:bg-cyan-900/50 px-3 py-1 rounded-full inline-block mb-4">${
      channel.subsection
    }</p><h4 class="font-bold mb-2">روابط مباشرة:</h4><div class="flex gap-4">
${
  channel.platforms.web
    ? `<a href="${channel.platforms.web}" target="_blank" class="flex-1 text-center bg-green-500 text-white font-bold py-3 rounded-lg hover:bg-green-600 transition-colors">
         <i class="fas fa-globe mr-2"></i> موقع
       </a>`
    : ""
}
${
  channel.platforms.toolai
    ? `<a href="${channel.platforms.toolai}" target="_blank" class="flex-1 text-center bg-indigo-500 text-white font-bold py-3 rounded-lg hover:bg-indigo-600 transition-colors">
         <i class="fas fa-brain mr-2"></i> Ai
       </a>`
    : ""
}
${
  channel.platforms.bot
    ? `<a href="${channel.platforms.bot}" target="_blank" class="flex-1 text-center bg-purple-500 text-white font-bold py-3 rounded-lg hover:bg-purple-600 transition-colors">
         <i class="fas fa-robot mr-2"></i> بوت
       </a>`
    : ""
}

    ${
      channel.platforms.youtube
        ? `<a href="${channel.platforms.youtube}" target="_blank" class="flex-1 text-center bg-red-600 text-white font-bold py-3 rounded-lg hover:bg-red-700 transition-colors"><i class="fab fa-youtube mr-2"></i> يوتيوب</a>`
        : ""
    }${
      channel.platforms.telegram
        ? `<a href="${channel.platforms.telegram}" target="_blank" class="flex-1 text-center bg-sky-500 text-white font-bold py-3 rounded-lg hover:bg-sky-600 transition-colors"><i class="fab fa-telegram mr-2"></i> تليجرام</a>`
        : ""
    }
    </div></div>`;
    openModal(modal);
    const modalCloseBtn = document.getElementById("modal-close");
    if (modalCloseBtn)
      modalCloseBtn.addEventListener("click", () => closeModal(modal));
  }

  mainNav.addEventListener("click", (e) => {
    const navLink = e.target.closest(".nav-link");
    if (navLink) {
      e.preventDefault();
      const section = navLink.dataset.section;
      if (section === "home") switchView("home");
      else if (section === "about_developer") switchView("about_developer");
      else
        switchView("sub_sections", {
          sectionId: section,
        });
    }
  });

  mainContent.addEventListener("click", (e) => {
    const sectionCard = e.target.closest(".main-section-card");
    if (sectionCard)
      return switchView("sub_sections", {
        sectionId: sectionCard.dataset.section,
      });

    const subsectionCard = e.target.closest(".subsection-card");
    if (subsectionCard)
      return switchView("channels", {
        sectionId: subsectionCard.dataset.sectionId,
        subsectionName: subsectionCard.dataset.subsection,
      });

    const card = e.target.closest(".channel-card");
    if (card) return openChannelModal(card.dataset.id);

    const backBtn = e.target.closest(".back-btn");
    if (backBtn) {
      const targetView = backBtn.dataset.target;
      if (targetView === "home") switchView("home");
      else if (targetView === "sub_sections")
        switchView("sub_sections", {
          sectionId: backBtn.dataset.sectionId,
        });
    }
  });

  if (footerDevLink)
    footerDevLink.addEventListener("click", (e) => {
      e.preventDefault();
      switchView("about_developer");
    });

  if (modal)
    modal.addEventListener("click", (e) => {
      if (e.target === modal) closeModal(modal);
    });
  if (contactModal)
    contactModal.addEventListener("click", (e) => {
      if (e.target === contactModal) closeModal(contactModal);
    });

  if (openSidebarBtn)
    openSidebarBtn.addEventListener("click", () =>
      sidebar.classList.add("open")
    );
  if (closeSidebarBtn)
    closeSidebarBtn.addEventListener("click", () =>
      sidebar.classList.remove("open")
    );

  // ✅ التعديل هنا: إغلاق السايدبار عند الضغط على أي رابط داخله
  if (sidebar) {
    sidebar.querySelectorAll(".nav-link").forEach((link) => {
      link.addEventListener("click", () => {
        sidebar.classList.remove("open");
      });
    });
  }

  if (darkModeToggle)
    darkModeToggle.addEventListener("click", () => {
      document.documentElement.classList.toggle("dark");
      localStorage.setItem(
        "darkMode",
        document.documentElement.classList.contains("dark")
      );
      darkModeToggle.innerHTML = `<i class="fas ${
        document.documentElement.classList.contains("dark")
          ? "fa-sun"
          : "fa-moon"
      }"></i>`;
    });

  if (contactUsBtn)
    contactUsBtn.addEventListener("click", (e) => {
      e.preventDefault();
      openModal(contactModal);
    });
  if (contactModalClose)
    contactModalClose.addEventListener("click", () => closeModal(contactModal));

  if (contactForm)
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const name = document.getElementById("channel_name").value;
      const link = document.getElementById("channel_link").value;
      const reason = document.getElementById("channel_reason").value;

      // الرسالة المرسلة إلى التليجرام
      const text = `📩 اقتراح قناة جديدة:\n\n📛 الاسم: ${name}\n🔗 الرابط: ${link}\n📝 السبب: ${reason}`;

      // بيانات البوت
      const TOKEN = "8488290384:AAFD7vuf3b0tsk3PFEwK0aFJ4o_uYiztiLk";
      const CHAT_ID = "7259686151";
      const URL = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

      // إرسال البيانات إلى التليجرام
      fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text: text,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          alert("✅ تم إرسال الاقتراح بنجاح إلى التليجرام");
          closeModal(contactModal);
          contactForm.reset();
        })
        .catch((err) => {
          console.error("❌ خطأ:", err);
          alert("حدث خطأ أثناء الإرسال، حاول مرة أخرى");
        });
    });

  if (confirmJoinBtn)
    confirmJoinBtn.addEventListener("click", () => {
      localStorage.setItem("hasJoinedTelegram", "true");
      telegramGate.classList.add("opacity-0", "pointer-events-none");
      platformContainer.classList.add("opacity-100");
    });

  function init() {
    if (localStorage.getItem("darkMode") === "true") {
      document.documentElement.classList.add("dark");
      if (darkModeToggle)
        darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    }

    if (telegramGate) {
      if (localStorage.getItem("hasJoinedTelegram") === "true") {
        telegramGate.classList.add("hidden");
        platformContainer.classList.add("opacity-100");
      } else {
        telegramGate
          .querySelector("div")
          .classList.add("opacity-100", "scale-100");
      }
    } else {
      platformContainer.classList.add("opacity-100");
    }

    switchView("home");
  }

  init();
});
