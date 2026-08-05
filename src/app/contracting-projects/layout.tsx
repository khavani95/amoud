import type { ReactNode } from "react";
import { pageMetadata } from "@/lib/seo";
import { BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata = pageMetadata({
  title: "پروژه‌های پیمانکاری تاسیسات الکتریکال و مکانیکال",
  description:
    "سوابق پیمانکاری آمود گستر آتیه در اجرای تاسیسات برق و مکانیک، موتورخانه و تابلو برق پروژه‌های مسکونی، بیمارستانی، اداری و تجاری.",
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
