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
  title: "Amoud App",
  description: "Project with Vazirmatn font",
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
