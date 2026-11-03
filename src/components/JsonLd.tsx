import { ORG, SITE_NAME, SITE_URL } from "@/lib/seo";

function Ld({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      // Schema payloads are static, author-controlled objects.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

const address = {
  "@type": "PostalAddress",
  streetAddress: ORG.street,
  addressLocality: ORG.city,
  addressRegion: ORG.region,
  addressCountry: ORG.country,
};

/** Organization + LocalBusiness + WebSite. Render once, on the home page. */
export function OrganizationJsonLd() {
  return (
    <>
      <Ld
        data={{
          "@context": "https://schema.org",
          "@type": ["GeneralContractor", "LocalBusiness", "Organization"],
          "@id": `${SITE_URL}/#organization`,
          name: ORG.legalName,
          alternateName: ORG.altNames,
          url: SITE_URL,
          logo: `${SITE_URL}/brand/logo.png`,
          image: `${SITE_URL}/brand/logo.png`,
          description:
            "شرکت آمود گستر آتیه؛ مجری تخصصی تاسیسات الکتریکال و مکانیکال از سال ۱۳۸۰. اجرای تاسیسات پروژه‌های مسکونی، اداری، تجاری، بیمارستانی و برج‌های بلندمرتبه — بیش از ۲۵ پروژه و ۶۰۰ هزار مترمربع زیربنا.",
          foundingDate: ORG.founded,
          telephone: ORG.phone,
          email: ORG.email,
          address,
          geo: {
            "@type": "GeoCoordinates",
            latitude: ORG.geo.lat,
            longitude: ORG.geo.lng,
          },
          hasMap: `https://www.google.com/maps?q=${ORG.geo.lat},${ORG.geo.lng}`,
          areaServed: { "@type": "Country", name: "ایران" },
          knowsAbout: [
            "تاسیسات الکتریکال",
            "تاسیسات مکانیکال",
            "موتورخانه",
            "پمپ خانه",
            "پیمانکاری تاسیسات",
            "نظارت و مدیریت پروژه",
          ],
          contactPoint: [
            {
              "@type": "ContactPoint",
              telephone: ORG.phone,
              contactType: "customer service",
              areaServed: "IR",
              availableLanguage: ["fa"],
            },
            {
              "@type": "ContactPoint",
              telephone: ORG.mobile,
              contactType: "sales",
              areaServed: "IR",
              availableLanguage: ["fa"],
            },
          ],
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "خدمات آمود گستر آتیه",
            itemListElement: [
              "اجرای تاسیسات الکتریکال",
              "اجرای تاسیسات مکانیکال و موتورخانه",
              "اجرای دستمزدی تاسیسات",
              "مشاوره و نظارت پروژه",
              "مدیریت ادعای پیمانکاران",
            ].map((name) => ({
              "@type": "Offer",
              itemOffered: { "@type": "Service", name },
            })),
          },
        }}
      />
      <Ld
        data={{
          "@context": "https://schema.org",
          "@type": "WebSite",
          "@id": `${SITE_URL}/#website`,
          url: SITE_URL,
          name: SITE_NAME,
          inLanguage: "fa-IR",
          publisher: { "@id": `${SITE_URL}/#organization` },
        }}
      />
    </>
  );
}

/** Breadcrumbs for inner pages. */
export function BreadcrumbJsonLd({
  items,
}: {
  items: { name: string; path: string }[];
}) {
  return (
    <Ld
      data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { name: "خانه", path: "/" },
          ...items,
        ].map((it, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: it.name,
          item: `${SITE_URL}${it.path}`,
        })),
      }}
    />
  );
}

/** Service schema for a capability page/section. */
export function ServiceJsonLd({
  name,
  description,
  path,
}: {
  name: string;
  description: string;
  path: string;
}) {
  return (
    <Ld
      data={{
        "@context": "https://schema.org",
        "@type": "Service",
        name,
        description,
        serviceType: name,
        provider: { "@id": `${SITE_URL}/#organization` },
        areaServed: { "@type": "Country", name: "ایران" },
        url: `${SITE_URL}${path}`,
      }}
    />
  );
}
