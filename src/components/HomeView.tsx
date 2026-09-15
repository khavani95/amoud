"use client";
import Link from "next/link";
import {
  Zap,
  Wrench,
  ClipboardCheck,
  HardHat,
  Target,
  Eye,
  Gem,
  ArrowLeft,
  Phone,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSlider from "@/components/HeroSlider";
import FeaturedProjects from "@/components/FeaturedProjects";
import Reveal from "@/components/Reveal";
import Faq from "@/components/Faq";
import {
  company,
  contact,
  stats,
  services,
  otherProjects,
} from "@/data/company";

const serviceIcons = [ClipboardCheck, HardHat];

const principles = [
  { icon: Eye, title: "چشم‌انداز", text: company.vision },
  { icon: Gem, title: "ارزش‌های محوری", text: company.values },
  { icon: Target, title: "مأموریت", text: company.mission },
];

export default function HomeView({
  latestArticles,
}: {
  latestArticles?: React.ReactNode;
}) {
  return (
    <main className="bg-[var(--bg)]">
      <Navbar />
      <HeroSlider />

      {/* Capability strip */}
      <section className="marquee border-y border-[var(--line)] bg-[#0c0c10] py-5">
        <div className="marquee-track">
          {[0, 1].map((r) => (
            <div
              key={r}
              aria-hidden={r === 1}
              className="flex items-center"
              dir="rtl"
            >
              {[
                "تاسیسات الکتریکال",
                "تاسیسات مکانیکال",
                "موتورخانه",
                "مسکونی",
                "اداری",
                "تجاری",
                "بیمارستانی",
                "برج‌های بلندمرتبه",
              ].map((t) => (
                <span
                  key={t}
                  className="flex items-center gap-5 px-8 text-lg font-bold text-[var(--ink-muted)] whitespace-nowrap"
                >
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--gold)]" />
                  {t}
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="amoud-container py-16">
        <div className="grid gap-6 sm:grid-cols-3">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 80}>
              <div className="card rounded-3xl p-8 text-center">
                <div className="display-en text-4xl font-black text-gradient-gold sm:text-5xl">
                  {s.value}
                </div>
                <div className="mt-3 text-sm text-[var(--ink-muted)]">
                  {s.label}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* About */}
      <section className="amoud-container py-16">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <div className="relative">
              <div className="aspect-[4/5] overflow-hidden rounded-3xl border border-[var(--line)]">
                <img
                  src="/brand/negin-night.jpg"
                  alt="برج‌های نگین ساحل — پروژه آمود گستر آتیه"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="card absolute -bottom-6 -left-2 w-44 rounded-2xl p-6 text-center backdrop-blur sm:left-6">
                <div className="display-en text-3xl font-black text-gradient-gold">
                  ۱۳۸۰
                </div>
                <div className="mt-1 text-xs text-[var(--ink-muted)]">
                  آغاز فعالیت
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <span className="eyebrow mb-5">معرفی شرکت</span>
            <h2 className="text-3xl font-black leading-snug text-[var(--ink)] sm:text-4xl">
              دو دهه تجربه در{" "}
              <span className="text-gradient-gold">قلب ساختمان‌ها</span>
            </h2>
            <p className="mt-6 leading-9 text-[var(--ink-soft)]">
              {company.intro}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/about" className="btn btn-gold">
                بیشتر بدانید
                <ArrowLeft className="h-4 w-4" />
              </Link>
              <Link href="/contact" className="btn btn-ghost">
                تماس با ما
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Services */}
      <section className="amoud-container py-16">
        <Reveal className="mx-auto mb-14 max-w-2xl text-center">
          <span className="eyebrow justify-center mb-4">خدمات ما</span>
          <h2 className="text-3xl font-black text-[var(--ink)] sm:text-4xl">
            مشاوره و <span className="text-gradient-gold">اجرا</span>
          </h2>
          <p className="mt-4 leading-8 text-[var(--ink-muted)]">
            از طراحی، نظارت و مدیریت پروژه تا اجرای کامل تاسیسات الکتریکال و
            مکانیکال — با تامین متریال یا به‌صورت دستمزدی.
          </p>
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-2">
          {services.map((s, i) => {
            const Icon = serviceIcons[i] ?? Zap;
            return (
              <Reveal key={s.slug} delay={i * 90}>
                <div className="card group flex h-full flex-col rounded-3xl p-8 sm:p-10">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-[var(--line)] bg-[var(--gold-glow)] text-[var(--gold)] transition-transform duration-500 group-hover:scale-110">
                    <Icon className="h-7 w-7" strokeWidth={1.6} />
                  </div>
                  <h3 className="text-xl font-bold text-[var(--ink)]">
                    {s.title}
                  </h3>
                  <p className="mt-4 leading-8 text-[var(--ink-soft)]">
                    {s.desc}
                  </p>
                  <div className="mt-7 border-t border-[var(--line)] pt-6">
                    <div className="mb-4 text-sm font-bold text-[var(--gold)]">
                      {s.pointsTitle}
                    </div>
                    <ul className="space-y-3">
                      {s.points.map((pt) => (
                        <li
                          key={pt}
                          className="flex gap-3 text-sm leading-7 text-[var(--ink-muted)]"
                        >
                          <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--gold)]" />
                          {pt}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* Featured projects */}
      <section className="amoud-container py-16">
        <Reveal className="mx-auto mb-12 max-w-2xl text-center">
          <span className="eyebrow justify-center mb-4">نمونه کارها</span>
          <h2 className="text-3xl font-black text-[var(--ink)] sm:text-4xl">
            پروژه‌های <span className="text-gradient-gold">شاخص</span>
          </h2>
        </Reveal>
        <FeaturedProjects />
      </section>

      {/* Other records */}
      <section className="amoud-container pb-16">
        <Reveal className="mb-8">
          <h2 className="text-2xl font-black text-[var(--ink)]">
            سایر سوابق اجرایی
          </h2>
        </Reveal>
        <div className="overflow-hidden rounded-3xl border border-[var(--line)]">
          {otherProjects.map((p, i) => (
            <Reveal key={p.title} delay={Math.min(i * 50, 250)}>
              <div
                className={`flex flex-col gap-2 p-6 sm:flex-row sm:items-center sm:justify-between ${
                  i ? "border-t border-[var(--line)]" : ""
                }`}
              >
                <div className="flex gap-4">
                  <span className="display-en text-sm font-bold text-[var(--gold)]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[15px] font-semibold leading-7 text-[var(--ink)]">
                    {p.title}
                  </span>
                </div>
                {p.client && (
                  <span className="shrink-0 text-sm text-[var(--ink-muted)] sm:text-left">
                    {p.client}
                  </span>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Vision / values / mission */}
      <section className="relative mt-8 border-y border-[var(--line)] bg-[#0c0c10] bg-grid py-16">
        <div className="amoud-container">
          <Reveal className="mx-auto mb-14 max-w-2xl text-center">
            <span className="eyebrow justify-center mb-4">چرا آمود؟</span>
            <h2 className="text-3xl font-black text-[var(--ink)] sm:text-4xl">
              چشم‌انداز و <span className="text-gradient-gold">ارزش‌ها</span>
            </h2>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-3">
            {principles.map((v, i) => (
              <Reveal key={v.title} delay={i * 80}>
                <div className="h-full rounded-3xl border border-[var(--line)] bg-[var(--surface)]/60 p-8 text-center">
                  <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full border border-[var(--gold)]/30 text-[var(--gold)]">
                    <v.icon className="h-7 w-7" strokeWidth={1.6} />
                  </div>
                  <h3 className="text-base font-bold text-[var(--ink)]">
                    {v.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[var(--ink-muted)]">
                    {v.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {latestArticles}

      <Faq />

      {/* CTA */}
      <section className="amoud-container py-20">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] border border-[var(--gold)]/25 bg-gradient-to-br from-[#16130c] via-[var(--surface)] to-[#0d0d10] p-10 text-center sm:p-16">
            <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-[var(--gold-glow)] blur-3xl" />
            <div className="relative">
              <h2 className="text-3xl font-black text-[var(--ink)] sm:text-5xl">
                پروژه‌ای در{" "}
                <span className="text-gradient-gold">دست دارید؟</span>
              </h2>
              <p className="mx-auto mt-5 max-w-xl leading-8 text-[var(--ink-soft)]">
                برای مشاوره، بررسی پروژه و دریافت پیشنهاد اجرای تاسیسات با
                کارشناسان ما در ارتباط باشید.
              </p>
              <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
                <a href={contact.officeHref} className="btn btn-gold">
                  <Phone className="h-4 w-4" />
                  {contact.office}
                </a>
                <Link href="/contact" className="btn btn-ghost">
                  راه‌های ارتباطی
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <Footer />
    </main>
  );
}
