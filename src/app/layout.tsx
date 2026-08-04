import type { Metadata } from "next";
import "./globals.css";
import { Vazirmatn } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import PageTransition from "@/components/PageTransition";
import { KEYWORDS, SITE_NAME, SITE_URL } from "@/lib/seo";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/thumbs";

const vazir = Vazirmatn({
  subsets: ["arabic"],
  weight: ["400", "500", "700", "800", "900"],
  variable: "--font-vazir",
  display: "swap",
});

const DEFAULT_TITLE =
  "آمود گستر آتیه | پیمانکاری ساختمان و تاسیسات الکتریکال و مکانیکال";
const DEFAULT_DESC =
  "شرکت آمود گستر آتیه؛ پیمانکار و سازنده ساختمان از سال ۱۳۸۰. مشارکت در ساخت، ساختمان‌سازی و اجرای تاسیسات الکتریکال و مکانیکال، موتورخانه و تابلو برق.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: DEFAULT_TITLE, template: `%s | ${SITE_NAME}` },
  description: DEFAULT_DESC,
  keywords: KEYWORDS,
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  manifest: "/manifest.json",
  alternates: { canonical: SITE_URL },
  formatDetection: { telephone: true, address: true, email: true },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.webp", type: "image/webp", sizes: "32x32" },
      { url: "/brand/logo.png", type: "image/png", sizes: "512x512" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.webp",
  },
  openGraph: {
    title: DEFAULT_TITLE,
    description: DEFAULT_DESC,
    url: SITE_URL,
    siteName: SITE_NAME,
    images: [
      { url: "/brand/logo.png", width: 1200, height: 630, alt: SITE_NAME },
    ],
    locale: "fa_IR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESC,
    images: ["/brand/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport = {
  themeColor: "#0a0a0c",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fa" dir="rtl" className={vazir.variable}>
      <body className="font-vazir bg-[#0a0a0c]">
        <PageTransition>{children}</PageTransition>
        <SpeedInsights />
      </body>
    </html>
  );
}
