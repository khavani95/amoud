import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Vazirmatn } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import PageTransition from "@/components/PageTransition"; // 👈 اضافه شد
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/thumbs";

const vazir = Vazirmatn({
  subsets: ["arabic"],
  weight: ["400", "500", "700"],
  variable: "--font-vazir",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://amoud-co.ir"),
  title: {
    default: "آمود گستر آتیه | ساخت‌وساز، پیمانکاری و تأسیسات",
    template: "%s | آمود گستر آتیه",
  },
  description:
    "مشارکت و اجرای پروژه‌های مسکونی، تجاری، اداری و بیمارستانی با تمرکز تخصصی بر تأسیسات برق و مکانیک — از سال ۱۳۸۰.",
  keywords: [
    "آمود گستر آتیه",
    "پیمانکاری ساختمان",
    "تأسیسات الکتریکال",
    "تأسیسات مکانیکال",
    "مشارکت در ساخت",
  ],
  icons: {
    icon: "/logo192.webp",
    shortcut: "/logo192.webp",
    apple: "/logo192.webp",
  },
  openGraph: {
    title: "آمود گستر آتیه | ساخت‌وساز، پیمانکاری و تأسیسات",
    description:
      "مشارکت و اجرای پروژه‌های مسکونی، تجاری، اداری و بیمارستانی با تمرکز تخصصی بر تأسیسات برق و مکانیک — از سال ۱۳۸۰.",
    url: "https://amoud-co.ir",
    siteName: "آمود گستر آتیه",
    images: [
      {
        url: "/logo192.webp",
        width: 600,
        height: 600,
        alt: "لوگو آمود",
      },
    ],
    locale: "fa_IR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fa" dir="rtl" className={vazir.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/webp" sizes="32x32" href="/favicon-32x32.webp" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.webp" />
      </head>
      <body className="font-vazir bg-[#0a0a0c]">
        <PageTransition>{children}</PageTransition>
        <SpeedInsights />
        
      </body>
    </html>
  );
}
