"use client";
import Link from "next/link";
import {
  Building2,
  Zap,
  Wrench,
  Store,
  Cross,
  Handshake,
  ShieldCheck,
  Users,
  Award,
  Clock,
  ArrowLeft,
  Phone,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSlider from "@/components/HeroSlider";
import FeaturedProjects from "@/components/FeaturedProjects";
import Reveal from "@/components/Reveal";

const stats = [
  { value: "۱۳۸۰", label: "سال تأسیس" },
  { value: "+۲۰", label: "سال تجربه" },
  { value: "+۲۸۰۰", label: "واحد مسکونی" },
  { value: "۴", label: "حوزهٔ تخصصی" },
];

const services = [
  {
    icon: Building2,
    title: "ساخت‌وساز مسکونی",
    desc: "طراحی و اجرای مجتمع‌ها و برج‌های مسکونی با بالاترین استانداردهای ساخت.",
  },
  {
    icon: Zap,
    title: "تأسیسات الکتریکال",
    desc: "اجرای تخصصی تأسیسات برق ساختمان‌ها و پروژه‌های کلان با تیم مجرب.",
  },
  {
    icon: Wrench,
    title: "تأسیسات مکانیکال",
    desc: "طراحی و اجرای سیستم‌های مکانیکی، تهویه و آبرسانی به‌صورت اصولی.",
  },
  {
    icon: Store,
    title: "پروژه‌های تجاری و اداری",
    desc: "احداث مجموعه‌های تجاری و اداری متناسب با نیاز کارفرمایان.",
  },
  {
    icon: Cross,
    title: "پروژه‌های بیمارستانی",
    desc: "اجرای پروژه‌های درمانی و بیمارستانی با رعایت الزامات تخصصی.",
  },
  {
    icon: Handshake,
    title: "مشارکت در ساخت",
    desc: "همکاری و مشارکت در ساخت پروژه‌های متنوع با تعهد و شفافیت کامل.",
  },
];

const values = [
  {
    icon: Award,
    title: "تجربهٔ اثبات‌شده",
    desc: "بیش از دو دهه سابقهٔ اجرای موفق پروژه‌های متنوع.",
  },
  {
    icon: Users,
    title: "تیم متخصص",
    desc: "بهره‌گیری از نیروهای مجرب در حوزهٔ عمران و تأسیسات.",
  },
  {
    icon: ShieldCheck,
    title: "کیفیت و استاندارد",
    desc: "پایبندی به بالاترین استانداردهای کیفی در تمام مراحل.",
  },
  {
    icon: Clock,
    title: "تحویل به‌موقع",
    desc: "مدیریت دقیق زمان و هزینه برای تحویل به‌هنگام پروژه‌ها.",
  },
];

export default function HomePage() {
  return (
    <main className="bg-[var(--bg)]">
      <Navbar />
      <HeroSlider />

      {/* Marquee strip */}
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
                "مسکونی",
                "تجاری",
                "اداری",
                "بیمارستانی",
                "تأسیسات برق",
                "تأسیسات مکانیک",
                "مشارکت در ساخت",
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
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 80}>
              <div className="card p-8 text-center">
                <div className="display-en text-4xl sm:text-5xl font-black text-gradient-gold">
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
              <div className="overflow-hidden rounded-3xl border border-[var(--line)] aspect-[4/5]">
                <img
                  src="/projects/Yas-Residential-Towers.webp"
                  alt="پروژه‌های آمود"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-2 sm:left-6 card p-6 w-44 text-center backdrop-blur">
                <div className="display-en text-3xl font-black text-gradient-gold">
                  ۱۳۸۰
                </div>
                <div className="text-xs text-[var(--ink-muted)] mt-1">
                  آغاز فعالیت
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <span className="eyebrow mb-5">دربارهٔ آمود</span>
            <h2 className="text-3xl sm:text-4xl font-black leading-snug text-[var(--ink)]">
              مجموعه‌ای با کارنامه‌ای از{" "}
              <span className="text-gradient-gold">اعتماد و کیفیت</span>
            </h2>
            <p className="mt-6 leading-8 text-[var(--ink-soft)]">
              مجموعهٔ آمودگسترآتیه با هدف مشارکت و همکاری در ساخت مجموعه‌های
              مسکونی، تجاری، اداری و بیمارستانی تأسیس شد و از سال ۱۳۸۰ تاکنون
              افتخار همکاری در پروژه‌های متنوع را در کارنامه دارد.
            </p>
            <p className="mt-4 leading-8 text-[var(--ink-muted)]">
              تمرکز تخصصی بر تأسیسات برق و مکانیک، توانمندی بالایی در اجرای
              پروژه‌های کلان ایجاد کرده است.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/about" className="btn btn-gold">
                بیشتر بدانید
                <ArrowLeft className="w-4 h-4" />
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
        <Reveal className="text-center max-w-2xl mx-auto mb-14">
          <span className="eyebrow justify-center mb-4">خدمات ما</span>
          <h2 className="text-3xl sm:text-4xl font-black text-[var(--ink)]">
            حوزه‌های <span className="text-gradient-gold">تخصصی</span> فعالیت
          </h2>
          <p className="mt-4 text-[var(--ink-muted)] leading-8">
            از ساخت‌وساز تا اجرای تأسیسات تخصصی؛ در تمام مراحل پروژه در کنار شما
            هستیم.
          </p>
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 70}>
              <div className="card group p-8 h-full">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-[var(--line)] bg-[var(--gold-glow)] text-[var(--gold)] transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                  <s.icon className="h-7 w-7" strokeWidth={1.6} />
                </div>
                <h3 className="text-lg font-bold text-[var(--ink)]">
                  {s.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[var(--ink-muted)]">
                  {s.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Featured projects */}
      <section className="amoud-container py-16">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <Reveal>
            <span className="eyebrow mb-4">نمونه کارها</span>
            <h2 className="text-3xl sm:text-4xl font-black text-[var(--ink)]">
              پروژه‌های <span className="text-gradient-gold">شاخص</span>
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <Link
              href="/contracting-projects"
              className="btn btn-ghost !py-2.5"
            >
              همهٔ پروژه‌ها
              <ArrowLeft className="w-4 h-4" />
            </Link>
          </Reveal>
        </div>
        <FeaturedProjects />
      </section>

      {/* Values / why us */}
      <section className="relative py-16 mt-8 border-y border-[var(--line)] bg-[#0c0c10] bg-grid">
        <div className="amoud-container">
          <Reveal className="text-center max-w-2xl mx-auto mb-14">
            <span className="eyebrow justify-center mb-4">چرا آمود؟</span>
            <h2 className="text-3xl sm:text-4xl font-black text-[var(--ink)]">
              دلایل <span className="text-gradient-gold">اعتماد</span> به ما
            </h2>
          </Reveal>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 80}>
                <div className="h-full rounded-3xl border border-[var(--line)] bg-[var(--surface)]/60 p-8 text-center">
                  <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full border border-[var(--gold)]/30 text-[var(--gold)]">
                    <v.icon className="h-7 w-7" strokeWidth={1.6} />
                  </div>
                  <h3 className="text-base font-bold text-[var(--ink)]">
                    {v.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[var(--ink-muted)]">
                    {v.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="amoud-container py-20">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] border border-[var(--gold)]/25 bg-gradient-to-br from-[#16130c] via-[var(--surface)] to-[#0d0d10] p-10 sm:p-16 text-center">
            <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-[var(--gold-glow)] blur-3xl" />
            <div className="relative">
              <h2 className="text-3xl sm:text-5xl font-black text-[var(--ink)]">
                آمادهٔ شروع{" "}
                <span className="text-gradient-gold">همکاری</span> هستید؟
              </h2>
              <p className="mx-auto mt-5 max-w-xl leading-8 text-[var(--ink-soft)]">
                برای مشاوره، اطلاع از شرایط فروش و بررسی پروژه‌ها با کارشناسان ما
                در ارتباط باشید.
              </p>
              <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
                <a href="tel:+989123505524" className="btn btn-gold">
                  <Phone className="w-4 h-4" />
                  تماس با واحد فروش
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
