import HomeView from "@/components/HomeView";
import SplashOverlay from "@/components/SplashOverlay";
import { OrganizationJsonLd } from "@/components/JsonLd";
import FaqJsonLd from "@/components/FaqJsonLd";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "آمود گستر آتیه | پیمانکاری ساختمان و تاسیسات الکتریکال و مکانیکال",
  description:
    "شرکت آمود گستر آتیه؛ پیمانکار و سازنده ساختمان از سال ۱۳۸۰. مشارکت در ساخت، ساختمان‌سازی و اجرای تاسیسات الکتریکال و مکانیکال، موتورخانه، تابلو برق و اطفای حریق در پروژه‌های مسکونی، تجاری، اداری و بیمارستانی. ☎ ۰۲۱-۴۴۷۱۱۲۲۲",
  path: "/",
});

export default function Page() {
  return (
    <>
      <OrganizationJsonLd />
      <FaqJsonLd />
      {/* Content renders server-side; the splash is a client overlay on top,
          so crawlers always receive the full homepage HTML. */}
      <HomeView />
      <SplashOverlay />
    </>
  );
}
