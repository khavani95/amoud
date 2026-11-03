# راه‌اندازی سئو — کارهایی که به حساب مالک سایت نیاز دارد

دامنه اصلی (canonical) سایت **`https://www.amoud-co.ir`** است؛ نسخه بدون www
با 308 به آن منتقل می‌شود. در همه سرویس‌ها همین آدرس را وارد کنید.

## ۱. Google Search Console (اولویت اول)

بهترین روش، property از نوع **Domain** است؛ هر دو نسخه www و بدون www و
http/https را یک‌جا پوشش می‌دهد.

۱. به <https://search.google.com/search-console> بروید ← **Add property** ←
   ستون چپ **Domain** ← عبارت `amoud-co.ir` را وارد کنید.
۲. گوگل یک رکورد TXT مثل `google-site-verification=AbC123...` می‌دهد.
۳. DNS دامنه روی ورسل است: یا رکورد را در Vercel ← Domains ← amoud-co.ir ←
   DNS Records با نوع `TXT`، نام `@` اضافه کنید، یا مقدار را برای توسعه‌دهنده
   بفرستید تا از طریق API اضافه شود.
۴. چند دقیقه بعد در Search Console روی **Verify** بزنید.
۵. از منوی **Sitemaps** این آدرس را ثبت کنید:

   ```
   https://www.amoud-co.ir/sitemap.xml
   ```

۶. با **URL Inspection** آدرس صفحه اصلی و چند صفحه مهم
   (`/contracting-projects`، `/blog`) را بررسی و «Request indexing» بزنید.

> روش جایگزین (URL prefix + HTML tag): مقدار `content` را در متغیر محیطی
> `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` روی ورسل بگذارید و دوباره دیپلوی کنید.

## ۲. Bing Webmaster Tools (برای ChatGPT و Copilot)

جستجوی ChatGPT و Copilot عمدتاً از ایندکس Bing استفاده می‌کنند، پس ثبت در
Bing برای دیده‌شدن در هوش مصنوعی‌ها مهم است.

۱. به <https://www.bing.com/webmasters> بروید و با حساب گوگل وارد شوید.
۲. گزینه **Import from Google Search Console** را بزنید — سایت و sitemap
   خودکار منتقل و تأیید می‌شوند (ابتدا مرحله ۱ را کامل کنید).
۳. در غیر این صورت روش meta tag را انتخاب کنید و مقدار `content` را در
   `NEXT_PUBLIC_BING_VERIFICATION` روی ورسل بگذارید.

## ۳. Yandex Webmaster (اختیاری)

در <https://webmaster.yandex.com> سایت را اضافه کنید، روش meta tag را بزنید و
مقدار را در `NEXT_PUBLIC_YANDEX_VERIFICATION` بگذارید.

## ۴. IndexNow — اطلاع فوری تغییرات

پس از هر انتشار مقاله یا تغییر مهم، این دستور را اجرا کنید تا Bing، Yandex و
سایر موتورهای عضو IndexNow ظرف چند دقیقه صفحات را دوباره بخزند:

```bash
node scripts/indexnow.mjs              # همه آدرس‌های sitemap
node scripts/indexnow.mjs /blog/slug   # فقط صفحات مشخص
```

فایل کلید در `public/c4444e1bec2dc7f2496af49b5c8d701f.txt` است؛ حذفش نکنید.

## ۵. حضور روی نقشه‌ها

**Google Business Profile برای کسب‌وکارهای ایرانی پذیرفته نمی‌شود** (پیام
تحریم گوگل). به‌جای آن:

۱. **نشان** (<https://neshan.org>) و **بلد** (<https://balad.ir>): کسب‌وکار را
   با اطلاعات زیر ثبت کنید — جستجوی محلی کاربران ایرانی عمدتاً از این دو است.
۲. **Google Maps ← Add a missing place**: مکان را بدون پروفایل تجاری روی نقشه
   گوگل پیشنهاد دهید.
۳. پس از ثبت، لینک صفحه کسب‌وکار در نشان و بلد را در `sameAs` اسکیمای
   Organization (`src/components/JsonLd.tsx`) اضافه کنید.

اطلاعات باید **دقیقاً** مطابق سایت باشد:

   | فیلد | مقدار |
   |---|---|
   | نام | شرکت آمود گستر آتیه |
   | دسته | پیمانکار ساختمان / تاسیسات |
   | تلفن | ۰۲۱-۴۴۷۱۱۲۲۲ |
   | آدرس | تهران، شهرک گلستان، بلوار امیرکبیر، بلوار هاشم‌زاده، رز ۲، پلاک ۲۵، واحد ۲ |
   | مختصات | 35.747316, 51.236273 |
   | وب‌سایت | https://www.amoud-co.ir |

## ۶. مختصات دفتر

مختصات دقیق دفتر (`35.747316, 51.236273`) در `ORG.geo` در `src/lib/seo.ts`
ثبت شده و در اسکیمای LocalBusiness و نقشه صفحه تماس استفاده می‌شود. اگر دفتر
جابه‌جا شد، فقط همین مقدار را عوض کنید.

## ۷. مواردی که در کد انجام شده‌اند

- `robots.txt` با اجازه صریح به خزنده‌های موتورهای جستجو و هوش مصنوعی
  (GPTBot، OAI-SearchBot، ClaudeBot، PerplexityBot، Google-Extended و …)
- `llms.txt` (خلاصه سایت برای هوش مصنوعی) و `llms-full.txt` (متن کامل
  مقالات و پرسش‌های متداول) — خودکار از داده‌های سایت ساخته می‌شوند
- `sitemap.xml` شامل همه صفحات و مقالات
- canonical، OpenGraph و Twitter card برای همه صفحات، روی دامنه www
- اسکیمای Organization / LocalBusiness / GeneralContractor، WebSite،
  BreadcrumbList، FAQPage و BlogPosting
- تگ‌های تأیید گوگل، Bing و Yandex از طریق متغیرهای محیطی
- کلید و اسکریپت IndexNow
- عکس OG اختصاصی ۱۲۰۰×۶۳۰ در `public/brand/og-cover.png`

## بازسازی عکس OG

اگر متن بنر تغییر کرد، فایل `scripts/og-cover.html` را ویرایش و دستور زیر
را اجرا کنید (به Playwright و فونت Vazirmatn نیاز دارد):

```bash
node scripts/generate-og.mjs
```
