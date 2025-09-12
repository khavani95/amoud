import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Vazirmatn } from "next/font/google";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const vazir = Vazirmatn({
  subsets: ["arabic"],
  weight: ["400", "500", "700"], // می‌تونی وزن‌های دیگه هم اضافه کنی
  variable: "--font-vazir",
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Amoud co",
  description: "شرکت آمودگسترآتیه",
  icons: {
    icon: "/logo.png", // favicon
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "Amoud co",
    description: "شرکت آمودگسترآتیه",
    url: "https://amoud-henna.vercel.app", // لینک سایتت
    siteName: "Amoud Co",
    images: [
      {
        url: "/logo.png", // اینجا لوگوت به صورت thumbnail نشون داده میشه
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
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
     <html lang="fa" dir="rtl" className={vazir.variable}>
      <body className="font-vazir bg-gray-50">{children}</body>
    </html>
  );
}
