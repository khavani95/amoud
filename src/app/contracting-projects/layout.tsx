import type { ReactNode } from "react";
import { pageMetadata } from "@/lib/seo";
import { BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata = pageMetadata({
  title: "پروژه‌های پیمانکاری تاسیسات الکتریکال و مکانیکال",
  description:
    "سوابق پیمانکاری آمود گستر آتیه؛ ۷ پروژه شاخص و سایر سوابق اجرایی در تاسیسات الکتریکال و مکانیکال، موتورخانه و پمپ‌خانه — بیش از ۶۰۰ هزار مترمربع زیربنا.",
  path: "/contracting-projects",
});

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "پروژه‌های پیمانکاری", path: "/contracting-projects" }]} />
      {children}
    </>
  );
}
