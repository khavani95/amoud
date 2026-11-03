"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import { MapPin, Phone, Smartphone, Mail, Globe } from "lucide-react";
import { contact } from "@/data/company";
import { ORG } from "@/lib/seo";

const items = [
  {
    icon: Phone,
    title: contact.officeLabel,
    value: contact.office,
    href: contact.officeHref,
  },
  {
    icon: Smartphone,
    title: contact.ceoLabel,
    value: contact.ceo,
    href: contact.ceoHref,
  },
  {
    icon: Mail,
    title: "ایمیل",
    value: contact.email,
    href: `mailto:${contact.email}`,
    ltr: true,
  },
  {
    icon: Globe,
    title: "وب‌سایت",
    value: contact.site,
    href: "https://www.amoud-co.ir",
    ltr: true,
  },
  {
    icon: MapPin,
    title: "نشانی دفتر مرکزی",
    value: contact.address,
    href: null,
  },
];

export default function Contact() {
  return (
    <div className="flex min-h-screen flex-col bg-[var(--bg)]">
      <Navbar />
      <main className="flex-grow">
        <section className="relative pt-36 pb-16 bg-grid border-b border-[var(--line)]">
          <div className="amoud-container text-center">
            <Reveal>
              <span className="eyebrow justify-center mb-5">در تماس باشید</span>
              <h1 className="text-4xl sm:text-5xl font-black text-[var(--ink)]">
                تماس با <span className="text-gradient-gold">ما</span>
              </h1>
              <p className="mx-auto mt-5 max-w-2xl leading-8 text-[var(--ink-muted)]">
                برای مشاوره و ارتباط با کارشناسان ما از راه‌های زیر استفاده کنید.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="amoud-container py-16">
          <div className="grid gap-6 sm:grid-cols-2">
            {items.map((it, i) => {
              const Inner = (
                <div className="card h-full p-8 flex items-start gap-5">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-[var(--line)] bg-[var(--gold-glow)] text-[var(--gold)]">
                    <it.icon className="h-6 w-6" strokeWidth={1.6} />
                  </div>
                  <div>
                    <div className="text-sm text-[var(--ink-muted)]">
                      {it.title}
                    </div>
                    <div
                      className="mt-1 text-lg font-bold text-[var(--ink)]"
                      dir={it.ltr ? "ltr" : "rtl"}
                    >
                      {it.value}
                    </div>
                  </div>
                </div>
              );
              return (
                <Reveal key={it.title} delay={i * 80}>
                  {it.href ? (
                    <a href={it.href} className="block">
                      {Inner}
                    </a>
                  ) : (
                    Inner
                  )}
                </Reveal>
              );
            })}
          </div>

          <Reveal delay={120} className="mt-8">
            <div className="overflow-hidden rounded-3xl border border-[var(--line)]">
              <iframe
                title="نقشهٔ آمود گستر آتیه"
                src={`https://www.google.com/maps?q=${ORG.geo.lat},${ORG.geo.lng}&z=17&output=embed`}
                className="w-full h-[360px] grayscale contrast-125 opacity-90"
                loading="lazy"
              />
            </div>
            <a
              href={`https://www.google.com/maps/dir/?api=1&destination=${ORG.geo.lat},${ORG.geo.lng}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost mt-4"
            >
              <MapPin className="h-4 w-4" />
              مسیریابی در گوگل مپ
            </a>
          </Reveal>
        </section>
      </main>
      <Footer />
    </div>
  );
}
