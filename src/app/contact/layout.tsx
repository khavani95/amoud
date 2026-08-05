import type { ReactNode } from "react";
import { pageMetadata } from "@/lib/seo";
import { BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata = pageMetadata({
  title: "تماس با ما — مشاوره پیمانکاری و مشارکت در ساخت",
  description:
    "راه‌های ارتباط با شرکت پیمانکاری آمود گستر آتیه: تلفن ۰۲۱-۴۴۷۱۱۲۲۲، موبایل ۰۹۱۲۳۵۰۵۵۲۴ و نشانی دفتر مرکزی در تهران، شهرک گلستان.",
  path: "/contact",
});

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "تماس با ما", path: "/contact" }]} />
      {children}
    </>
  );
}
