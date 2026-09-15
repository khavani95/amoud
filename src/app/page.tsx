import HomeView from "@/components/HomeView";
import SplashOverlay from "@/components/SplashOverlay";
import LatestArticles from "@/components/LatestArticles";
import { OrganizationJsonLd } from "@/components/JsonLd";
import FaqJsonLd from "@/components/FaqJsonLd";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "آمود گستر آتیه | مجری تخصصی تاسیسات الکتریکال و مکانیکال",
  description:
    "شرکت آمود گستر آتیه؛ مجری تخصصی تاسیسات الکتریکال و مکانیکال از سال ۱۳۸۰. اجرای تاسیسات پروژه‌های مسکونی، اداری، تجاری، بیمارستانی و برج‌های بلندمرتبه — بیش از ۲۵ پروژه و ۶۰۰ هزار مترمربع زیربنا. ☎ ۰۲۱-۴۴۷۱۱۲۲۲",
  path: "/",
});

export default function Page() {
  return (
    <>
      <OrganizationJsonLd />
      <FaqJsonLd />
      {/* Content renders server-side; the splash is a client overlay on top,
          so crawlers always receive the full homepage HTML. */}
      <HomeView latestArticles={<LatestArticles />} />
      <SplashOverlay />
    </>
  );
}
