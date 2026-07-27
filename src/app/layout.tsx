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
    default: "آمود گستر آتیه | مجری تخصصی تاسیسات الکتریکال و مکانیکال",
    template: "%s | آمود گستر آتیه",
  },
  description:
    "شرکت آمود گستر آتیه از سال ۱۳۸۰ مجری اجرای دستمزدی عملیات تاسیسات الکتریکال و مکانیکال پروژه‌های مسکونی، اداری، تجاری، بیمارستانی و برج‌های بلندمرتبه است.",
  keywords: [
    "آمود گستر آتیه",
    "اجرای دستمزدی تاسیسات",
    "پیمانکاری تاسیسات",
    "تأسیسات الکتریکال",
    "تأسیسات مکانیکال",
    "مشارکت در ساخت",
  ],
  icons: {
    icon: "/brand/logo.png",
    shortcut: "/brand/logo.png",
    apple: "/brand/logo.png",
  },
  openGraph: {
    title: "آمود گستر آتیه | مجری تخصصی تاسیسات الکتریکال و مکانیکال",
    description:
      "شرکت آمود گستر آتیه از سال ۱۳۸۰ مجری اجرای دستمزدی عملیات تاسیسات الکتریکال و مکانیکال پروژه‌های مسکونی، اداری، تجاری، بیمارستانی و برج‌های بلندمرتبه است.",
    url: "https://amoud-co.ir",
    siteName: "آمود گستر آتیه",
    images: [
      {
        url: "/brand/logo.png",
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
      <body className="font-vazir">
        <PageTransition>{children}</PageTransition>
        <SpeedInsights />
        
      </body>
    </html>
  );
}
