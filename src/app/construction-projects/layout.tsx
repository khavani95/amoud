import type { ReactNode } from "react";
import { pageMetadata } from "@/lib/seo";
import { BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata = pageMetadata({
  title: "پروژه‌های ساخت‌وساز — سری آمود، طراحی و ساخت",
  description:
    "پروژه‌های ساخت‌وساز آمود گستر آتیه؛ سری آمود ۱ تا ۶ — ساختمان‌های مسکونی و ویلایی طراحی و ساخت مجموعه در تهران، آمل و محمودآباد، به‌همراه مشارکت در ساخت.",
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
