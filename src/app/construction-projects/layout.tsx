import type { ReactNode } from "react";
import { pageMetadata } from "@/lib/seo";
import { BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata = pageMetadata({
  title: "پروژه‌های ساخت‌وساز و مشارکت در ساخت",
  description:
    "نمونه کارهای ساختمان‌سازی و مشارکت در ساخت شرکت آمود گستر آتیه؛ پروژه‌های مسکونی و تجاری اجراشده به‌عنوان سازنده و پیمانکار ساختمان.",
  path: "/construction-projects",
});

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "پروژه‌های ساخت‌وساز", path: "/construction-projects" }]} />
      {children}
    </>
  );
}
