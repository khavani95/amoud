"use client";
import { Phone, Smartphone, MapPin, Mail, Globe } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import SectionHead from "@/components/SectionHead";
import PageHeader from "@/components/PageHeader";
import { contact } from "@/data/company";

const items = [
  {
    icon: Phone,
    label: contact.office.label,
    value: contact.office.value,
    href: contact.office.href,
  },
  {
    icon: Smartphone,
    label: contact.ceo.label,
    value: contact.ceo.value,
    href: contact.ceo.href,
  },
  {
    icon: Mail,
    label: "ایمیل",
    value: contact.email,
    href: `mailto:${contact.email}`,
    ltr: true,
  },
  {
    icon: Globe,
    label: "وب‌سایت",
    value: contact.site,
    href: "https://www.amoud-co.ir",
    ltr: true,
  },
];

export default function Contact() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-grow">
        <PageHeader
          title="تماس با ما"
          subtitle="برای مشاوره و بررسی همکاری در پروژه‌ها با ما در ارتباط باشید."
        />

        <section className="amoud-container py-14">
          <SectionHead title="راه‌های ارتباطی" index="۰۶" />

          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {items.map((it, i) => (
              <Reveal key={it.label} delay={i * 70}>
                <a href={it.href} className="card flex items-center gap-5 p-6">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center border border-[var(--border-strong)] text-[var(--copper)]">
                    <it.icon className="h-5 w-5" strokeWidth={1.7} />
                  </span>
                  <span>
                    <span className="block text-[12.5px] text-[var(--text-muted)]">
                      {it.label}
                    </span>
                    <span
                      className="mt-0.5 block text-[16px] font-bold text-white"
                      dir={it.ltr ? "ltr" : "rtl"}
                    >
                      {it.value}
                    </span>
                  </span>
                </a>
              </Reveal>
            ))}
          </div>

          {/* Address */}
          <Reveal delay={140}>
            <div className="mt-5 flex items-start gap-5 border border-[var(--border-card)] bg-[rgba(255,255,255,.06)] p-6">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center border border-[var(--border-strong)] text-[var(--copper)]">
                <MapPin className="h-5 w-5" strokeWidth={1.7} />
              </span>
              <span>
                <span className="block text-[12.5px] text-[var(--text-muted)]">
                  نشانی دفتر مرکزی
                </span>
                <span className="mt-1 block text-[15px] leading-[2] text-white">
                  {contact.address}
                </span>
              </span>
            </div>
          </Reveal>

          <Reveal delay={180}>
            <div className="mt-5 border border-[var(--border-card)]">
              <iframe
                title="نقشه دفتر آمود گستر آتیه"
                src="https://www.google.com/maps?q=Tehran%20Shahrak%20Golestan&output=embed"
                className="h-[340px] w-full grayscale contrast-125"
                loading="lazy"
              />
            </div>
          </Reveal>
        </section>
      </main>
      <Footer />
    </div>
  );
}
