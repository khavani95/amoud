import type { ReactNode } from "react";
import { pageMetadata } from "@/lib/seo";
import { BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata = pageMetadata({
  title: "واحد فروش — خرید و مشارکت در ساخت",
  description:
    "واحد فروش آمود گستر آتیه؛ اطلاع از شرایط فروش واحدهای مسکونی و مشارکت در ساخت. برای مشاوره با ۰۹۱۲۳۵۰۵۵۲۴ تماس بگیرید.",
  path: "/sale",
});

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "واحد فروش", path: "/sale" }]} />
      {children}
    </>
  );
}
