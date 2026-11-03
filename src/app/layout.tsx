import type { Metadata } from "next";
import "./globals.css";
import { Vazirmatn } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import PageTransition from "@/components/PageTransition";
import { KEYWORDS, OG_IMAGE, SITE_NAME, SITE_URL } from "@/lib/seo";
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
  "آمود گستر آتیه | مجری تخصصی تاسیسات الکتریکال و مکانیکال";
const DEFAULT_DESC =
  "شرکت آمود گستر آتیه؛ مجری تخصصی تاسیسات الکتریکال و مکانیکال از سال ۱۳۸۰. اجرای تاسیسات پروژه‌های مسکونی، اداری، تجاری، بیمارستانی و برج‌های بلندمرتبه — بیش از ۲۵ پروژه و ۶۰۰ هزار مترمربع زیربنا.";

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
      { url: OG_IMAGE, width: 1200, height: 630, alt: SITE_NAME },
    ],
    locale: "fa_IR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESC,
    images: [OG_IMAGE],
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
    yandex: process.env.NEXT_PUBLIC_YANDEX_VERIFICATION,
    other: Object.fromEntries(
      Object.entries({
        "msvalidate.01": process.env.NEXT_PUBLIC_BING_VERIFICATION,
        enamad: process.env.NEXT_PUBLIC_ENAMAD_VERIFICATION,
      }).filter((e): e is [string, string] => Boolean(e[1]))
    ),
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
      <head>
        {/* Scroll-reveal content stays readable when JS is off or blocked. */}
        <noscript>
          <style>{`.reveal{opacity:1!important;transform:none!important}`}</style>
        </noscript>
      </head>
      <body className="font-vazir bg-[#0a0a0c]">
        <PageTransition>{children}</PageTransition>
        <SpeedInsights />
      </body>
    </html>
  );
}
