import type { Metadata } from "next";

export const SITE_URL = "https://amoud-co.ir";
export const SITE_NAME = "آمود گستر آتیه";

export const ORG = {
  legalName: "شرکت آمود گستر آتیه",
  altNames: ["آمودگسترآتیه", "آمود گستر", "Amoud Gostar Atieh", "Amoud"],
  founded: "2001", // ۱۳۸۰
  phone: "+982144711222",
  phoneDisplay: "۰۲۱-۴۴۷۱۱۲۲۲",
  mobile: "+989123505524",
  email: "AmudGostar.Co@Gmail.com",
  street: "شهرک گلستان، بلوار امیرکبیر، بلوار هاشم‌زاده، رز ۲",
  city: "تهران",
  region: "تهران",
  country: "IR",
  geo: { lat: 35.7219, lng: 51.1889 }, // Shahrak-e Golestan, Tehran
};

/**
 * Target keyword set. Persian searchers overwhelmingly type "تاسیسات"
 * without the hamze, so both spellings are carried deliberately.
 */
export const KEYWORDS = [
  "پیمانکاری",
  "شرکت پیمانکاری",
  "پیمانکار",
  "پیمانکار ساختمان",
  "پیمانکار تاسیسات",
  "پیمانکار برق",
  "پیمانکار مکانیک",
  "مشارکت در ساخت",
  "ساختمان سازی",
  "ساخت و ساز",
  "سازنده",
  "سازنده ساختمان",
  "انبوه سازی",
  "برج سازی",
  "تاسیسات الکتریکال",
  "تأسیسات الکتریکال",
  "تاسیسات مکانیکال",
  "تأسیسات مکانیکال",
  "تاسیسات ساختمان",
  "اجرای تاسیسات",
  "موتورخانه",
  "اجرای موتورخانه",
  "تاسیسات برق",
  "تابلو برق",
  "اطفای حریق",
  "آمود گستر آتیه",
  "آمودگسترآتیه",
  "شرکت آمود",
];

type PageSeo = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  image?: string;
};

/** Builds a page's Metadata with canonical + OpenGraph + Twitter wired up. */
export function pageMetadata({
  title,
  description,
  path,
  keywords,
  image = "/brand/logo.png",
}: PageSeo): Metadata {
  const url = `${SITE_URL}${path}`;
  // Child titles omit the brand (the root layout's template appends it), but
  // OpenGraph titles are used verbatim, so add it back there.
  const socialTitle = title.includes(SITE_NAME)
    ? title
    : `${title} | ${SITE_NAME}`;
  return {
    title,
    description,
    keywords: keywords ?? KEYWORDS,
    alternates: { canonical: url },
    openGraph: {
      title: socialTitle,
      description,
      url,
      siteName: SITE_NAME,
      locale: "fa_IR",
      type: "website",
      images: [{ url: image, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      images: [image],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, "max-image-preview": "large" },
    },
  };
}
