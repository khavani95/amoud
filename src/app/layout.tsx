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
  title: "Amoud",
  description: "شرکت آمودگسترآتیه",
  icons: {
    icon: "/logo192.png",
    shortcut: "/logo192.png",
    apple: "/logo192.png",
  },
  openGraph: {
    title: "Amoud",
    description: "شرکت آمودگسترآتیه",
    url: "https://amoud-henna.vercel.app",
    siteName: "Amoud",
    images: [
      {
        url: "/logo192.png",
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
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      </head>
      <body className="font-vazir bg-gray-50">
        <PageTransition>{children}</PageTransition>
        <SpeedInsights />
        
      </body>
    </html>
  );
}
