/**
 * Company content transcribed from the approved résumé PDF (رزومه، ۱۴۰۵).
 * This is the single source of truth for company facts on the site —
 * figures, client names and scopes come straight from that document.
 */

export const company = {
  nameFa: "شرکت آمود گستر آتیه",
  nameEn: "AMOUD GOSTAR ATIEH Co",
  tagline: "مجری تخصصی تاسیسات الکتریکال و مکانیکال",
  heroLead:
    "اجرای تاسیسات پروژه‌های مسکونی، اداری، تجاری، بیمارستانی و برج‌های بلندمرتبه — از سال ۱۳۸۰",
  intro:
    "آمود گستر آتیه از سال ۱۳۸۰ به‌عنوان مجری تخصصی اجرای تاسیسات الکتریکال و مکانیکال فعالیت می‌کند. حضور مستمر در پروژه‌های شاخص مسکونی، اداری، تجاری و بیمارستانی و همکاری بلندمدت با کارفرمایان معتبر، نشان‌دهنده اعتماد ساخته‌شده در بیش از دو دهه فعالیت است.",
  vision:
    "تبدیل‌شدن به برند نام‌آشنا در صنعت ساختمان، که تنها اسم این گروه برای تضمین کیفیت تاسیسات ساختمان کافی باشد.",
  values:
    "فراموش‌نشدن ارزش‌ها و اصول مهندسی ساخت در هر شرایطی.",
  mission:
    "تلاش برای بالابردن کیفیت و راحتی زندگی افراد از طریق اجرای اصولی و باکیفیت قلب ساختمان‌ها در تمام مناطق.",
};

export const contact = {
  officeLabel: "دفتر مرکزی",
  office: "۰۲۱-۴۴۷۱۱۲۲۲",
  officeHref: "tel:+982144711222",
  ceoLabel: "مدیرعامل (خوانی)",
  ceo: "۰۹۱۲۳۵۰۵۵۲۴",
  ceoHref: "tel:+989123505524",
  address:
    "تهران، شهرک گلستان، بلوار امیرکبیر، بلوار هاشم‌زاده، رز ۲، پلاک ۲۵، واحد ۲",
  site: "www.Amoud-co.ir",
  email: "AmudGostar.Co@Gmail.com",
};

export const stats = [
  { value: "۱۳۸۰", label: "آغاز فعالیت" },
  { value: "+۲۵", label: "پروژه" },
  { value: "+۶۰۰٬۰۰۰", label: "مترمربع زیربنا" },
];

/** The two service lines from the résumé. */
export const services = [
  {
    slug: "moshavere",
    title: "مشاوره",
    desc: "شرکت مشاور آمود گستر آتیه با بیش از ۲۰ سال سابقه در پروژه‌های بزرگ مسکونی و تجاری شهر تهران، خدمات طراحی، نظارت، مشاوره مدیر پروژه، مدیریت ادعای پیمانکاران و مشاوره در خرید و تدارکات را برای کارفرمایان و سازندگان ارائه می‌دهد.",
    pointsTitle: "اهداف",
    points: [
      "کاهش ریسک‌ها و افزایش بهره‌وری",
      "تحویل پروژه‌ها در زمان و بودجه مشخص",
      "استقرار نظارتی مقیم",
    ],
  },
  {
    slug: "ejra",
    title: "اجرا",
    desc: "اجرای تاسیسات پروژه‌های مسکونی، تجاری و صنعتی، همراه با تامین متریال مورد نیاز پروژه یا به‌صورت دستمزدی، از دیگر خدماتی است که آمود گستر آتیه به کارفرمایان بخش دولتی و خصوصی ارائه می‌دهد.",
    pointsTitle: "شرح خدمات",
    points: [
      "نظارت بر تمام مراحل ساخت، برنامه‌ریزی زمان‌بندی و هماهنگی تیم‌ها",
      "انتخاب پیمانکاران فرعی و کارگران، تقسیم وظایف و نظارت بر عملکرد",
      "اطمینان از رعایت استانداردهای ساخت و کیفیت نهایی",
      "تهیه گزارش‌های روزانه، هفتگی و نهایی پروژه",
      "ارتباط مستقیم با مهندس ناظر، معماری و سایر متخصصان پروژه",
      "رفع مسائل فنی و عملیاتی که در طول پروژه رخ می‌دهد",
      "بررسی نهایی، رفع نواقص و تحویل ساختمان به کارفرما",
    ],
  },
];

/**
 * Secondary offering: the company does take on مشارکت در ساخت, but the
 * current focus is contracting, so it is presented below the two main
 * service lines rather than alongside them.
 */
export const secondaryService = {
  title: "ساختمان‌سازی و مشارکت در ساخت",
  desc: "آمود گستر آتیه در کنار اجرای تاسیسات، به‌عنوان مجری ساختمان‌های مسکونی، اداری و تجاری نیز فعال است؛ از طراحی و ساخت مجموعه‌های آمود ۱ تا ۶ در تهران و شمال کشور تا مشارکت در ساخت. تمرکز فعلی مجموعه بر پیمانکاری است، اما برای بررسی پیشنهاد مشارکت می‌توانید با ما تماس بگیرید.",
  href: "/blog/mosharekat-dar-sakht-rahnama",
  linkLabel: "راهنمای مشارکت در ساخت",
};

export interface FeaturedProject {
  id: string;
  title: string;
  desc: string;
  client: string;
  area?: string;
  images: string[];
  /** Slug of the matching blog write-up, when one exists. */
  article?: string;
}

export const featuredProjects: FeaturedProject[] = [
  {
    id: "ofogh-ekbatan",
    title: "مجتمع ۱۴۰۰ واحدی افق اکباتان",
    desc: "اجرای تاسیسات الکتریکال و مکانیکال بلوک‌های مسکونی C و D با متراژ بیش از ۳۲٬۰۰۰ مترمربع.",
    client: "شرکت سامان محیط (بنیاد مسکن انقلاب اسلامی)",
    area: "+۳۲٬۰۰۰ مترمربع",
    images: ["/projects/ofogh-ekbatan-maskoni.png"],
    article: "projeh-ofogh-ekbatan",
  },
  {
    id: "hemmat-yas",
    title: "برج‌های دوقلوی همت یاس ۲",
    desc: "اجرای تاسیسات الکتریکال برج‌های مسکونی همت یاس ۲ با متراژ بیش از ۶۰٬۰۰۰ مترمربع.",
    client: "شرکت ژالکه",
    area: "+۶۰٬۰۰۰ مترمربع",
    images: [
      "/projects/hemmat-yas.jpg",
      "/projects/Yas-Residential-Towers.webp",
    ],
    article: "borj-haye-yas-hemmat",
  },
  {
    id: "ofogh-tejari",
    title: "مجتمع تجاری افق اکباتان",
    desc: "اجرای تاسیسات الکتریکال، مکانیکال و موتورخانه بلوک‌های تجاری با متراژ بیش از ۱۶٬۰۰۰ مترمربع.",
    client: "شرکت سامان محیط (بنیاد مسکن انقلاب اسلامی)",
    area: "+۱۶٬۰۰۰ مترمربع",
    images: ["/projects/ofogh-ekbatan-tejari.png"],
  },
  {
    id: "negin-sahel",
    title: "برج‌های دوقلوی نگین ساحل",
    desc: "طراحی و اجرای تاسیسات الکتریکال، مکانیکال و موتورخانه‌های برج‌های مسکونی نگین ساحل با متراژ بیش از ۵۰٬۰۰۰ مترمربع.",
    client: "تعاونی مسکن درجه‌داران بازنشسته نیروهای مسلح",
    area: "+۵۰٬۰۰۰ مترمربع",
    images: [
      "/brand/negin-night.jpg",
      "/brand/negin-close.jpg",
      "/brand/negin-day.jpg",
    ],
    article: "borj-haye-negin-sahel",
  },
  {
    id: "aseman-alborz",
    title: "مجتمع ۲۸۰۰ واحدی آسمان البرز",
    desc: "اجرای تاسیسات الکتریکال و مکانیکال بلوک‌های تیپ B، C و M با متراژ بیش از ۵۵٬۰۰۰ مترمربع.",
    client:
      "شرکت تولیدی خانه گستر / شرکت سرمایه‌گذاری توسعه نوین پایدار",
    area: "+۵۵٬۰۰۰ مترمربع",
    images: [
      "/projects/Aseman-alborz.jpg",
      "/projects/aseman-alborz-2.jpg",
    ],
    article: "projeh-aseman-alborz",
  },
  {
    id: "muze-javaherat",
    title: "موزه جواهرات ملی بانک مرکزی ایران",
    desc: "اجرای تاسیسات الکتریکال بلوک B و C باغ‌موزه جواهرات ملی بانک مرکزی ایران با متراژ بیش از ۵۰٬۰۰۰ مترمربع.",
    client: "شرکت ژالکه",
    area: "+۵۰٬۰۰۰ مترمربع",
    images: ["/projects/muze-javaherat.png"],
    article: "muze-javaherat-melli",
  },
  {
    id: "jam-khalij-fars",
    title: "مجتمع اداری و تجاری جام خلیج فارس",
    desc: "اجرای موتورخانه‌ها و پمپ‌خانه‌های مرکزی و ارتباطی مجتمع اداری و تجاری جام خلیج فارس با متراژ بیش از ۱۱۰٬۰۰۰ مترمربع.",
    client: "شرکت روف تراس",
    area: "+۱۱۰٬۰۰۰ مترمربع",
    images: ["/projects/jam-khalij-fars.jpg"],
    article: "jam-khalij-fars",
  },
  {
    id: "sarvenaz",
    title: "مجتمع مسکونی سروناز",
    desc: "اجرای تاسیسات الکتریکال و مکانیکال بلوک‌های C2a، C2b، تیپ A و تیپ B مجتمع مسکونی سروناز شامل ۱۲ بلوک با متراژ ۱۲۰٬۰۰۰ مترمربع.",
    client: "تعاونی مسکن اسکان گستر امید (امید دژبان)",
    area: "۱۲۰٬۰۰۰ مترمربع",
    images: ["/projects/sarvenaz.jpg"],
    article: "mojtame-sarvenaz",
  },
  {
    id: "amoud-6",
    title: "شهرک ویلایی آمود ۶",
    desc: "طراحی و اجرای شهرک ویلایی آمود ۶، واقع در منطقه کته‌پشت شهرستان آمل.",
    client: "بخش خصوصی",
    images: [],
  },
];

export interface OtherProject {
  title: string;
  client?: string;
}

export const otherProjects: OtherProject[] = [
  {
    title: "پروژه بیمارستان امام علی (ع) شهر کرج",
    client: "شرکت زیباسازه توس گام",
  },
  {
    title:
      "جمع‌آوری آب‌های سطحی، فاضلاب، آب‌رسانی و روشنایی محوطه پروژه ۱۴۰۰ واحدی افق اکباتان",
    client: "شرکت سامان محیط",
  },
  {
    title:
      "تهیه و ساخت فاز ۲ نوسازی چراغ‌های شهری سازمان زیباسازی شهرداری تهران",
  },
  { title: "پروژه ۸۰۰ واحدی راسپینا — برج‌های C و D" },
  {
    title: "ساختمان اداری مپنا (مکو) — ۱۶٬۰۰۰ مترمربع",
    client: "شرکت فریاب جنوب",
  },
  {
    title: "پروژه مسکونی ارغوان — ۷ بلوک، مجموعاً ۱۲۸ واحد",
    client: "تعاونی مسکن طلوع فجر",
  },
  {
    title:
      "طراحی و ساخت ساختمان مسکونی آمود ۵ — شهرک سروآزاد، منطقه ۲۲ تهران",
  },
  {
    title: "طراحی و ساخت ساختمان مسکونی آمود ۴ — خیابان شاهین، منطقه ۵ تهران",
  },
  { title: "طراحی و ساخت ویلای آمود ۳ — حربده، شهرستان محمودآباد" },
  {
    title: "طراحی و ساخت ساختمان مسکونی آمود ۲ — شهرک گلستان، منطقه ۲۲ تهران",
  },
  {
    title: "طراحی و ساخت ساختمان مسکونی آمود ۱ — شهرک گلستان، منطقه ۲۲ تهران",
  },
];
