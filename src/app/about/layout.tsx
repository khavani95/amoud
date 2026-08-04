import type { ReactNode } from "react";
import { pageMetadata } from "@/lib/seo";
import { BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata = pageMetadata({
  title: "درباره ما — پیمانکار ساختمان و مجری تاسیسات",
  description:
    "درباره شرکت آمود گستر آتیه؛ پیمانکار ساختمان و مجری تاسیسات الکتریکال و مکانیکال از سال ۱۳۸۰ با سابقه اجرای پروژه‌های مسکونی، اداری، تجاری و بیمارستانی.",
  path: "/about",
});

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "درباره ما", path: "/about" }]} />
      {children}
    </>
  );
}
