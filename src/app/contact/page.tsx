"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import { MapPin, Phone, Smartphone, Mail } from "lucide-react";

const items = [
  {
    icon: Phone,
    title: "تلفن ثابت",
    value: "021-44711222",
    href: "tel:+982144711222",
  },
  {
    icon: Smartphone,
    title: "موبایل",
    value: "+98 912 350 5524",
    href: "tel:+989123505524",
  },
  {
    icon: Mail,
    title: "ایمیل",
    value: "AmudGostar.Co@Gmail.com",
    href: "mailto:AmudGostar.Co@Gmail.com",
  },
  {
    icon: MapPin,
    title: "نشانی",
    value: "تهران، شهرک گلستان، بلوار امیرکبیر، بلوار هاشم‌زاده، رز ۲",
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
                      dir={it.icon === MapPin ? "rtl" : "ltr"}
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
                src="https://www.google.com/maps?q=Tehran%20Shahrak%20Golestan&output=embed"
                className="w-full h-[360px] grayscale contrast-125 opacity-90"
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
