"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import Link from "next/link";
import { Target, Eye, Leaf, ArrowLeft } from "lucide-react";

const pillars = [
  {
    icon: Target,
    title: "مأموریت ما",
    desc: "ارائهٔ خدمات پیمانکاری و ساختمانی در بالاترین سطح استانداردهای بین‌المللی، همراه با نوآوری و رعایت اصول پایداری.",
  },
  {
    icon: Eye,
    title: "چشم‌انداز ما",
    desc: "تبدیل‌شدن به یکی از برترین شرکت‌های پیمانکاری و ساختمانی منطقه و ارائهٔ الگویی از تعهد، تخصص و نوآوری.",
  },
  {
    icon: Leaf,
    title: "توسعهٔ پایدار",
    desc: "پایبندی به اصول پایداری و توسعهٔ سبز در تمام مراحل طراحی و اجرای پروژه‌ها.",
  },
];

export default function About() {
  return (
    <div className="flex min-h-screen flex-col bg-[var(--bg)]">
      <Navbar />
      <main className="flex-grow">
        {/* Header */}
        <section className="relative pt-36 pb-16 bg-grid border-b border-[var(--line)]">
          <div className="amoud-container text-center">
            <Reveal>
              <span className="eyebrow justify-center mb-5">
                آمود گستر آتیه
              </span>
              <h1 className="text-4xl sm:text-5xl font-black text-[var(--ink)]">
                دربارهٔ <span className="text-gradient-gold">ما</span>
              </h1>
              <p className="mx-auto mt-5 max-w-2xl leading-8 text-[var(--ink-muted)]">
                تخصص، تعهد و نوآوری در صنعت ساختمان از سال ۱۳۸۰
              </p>
            </Reveal>
          </div>
        </section>

        {/* Body */}
        <section className="amoud-container py-16">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <Reveal>
              <div className="overflow-hidden rounded-3xl border border-[var(--line)] aspect-[4/3]">
                <img
                  src="/projects/Aseman-alborz.jpg"
                  alt="پروژه‌های آمود"
                  className="h-full w-full object-cover"
                />
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="space-y-5 leading-8 text-[var(--ink-soft)]">
                <p>
                  شرکت{" "}
                  <span className="font-bold text-[var(--gold)]">
                    آمودگسترآتیه
                  </span>{" "}
                  با سال‌ها تجربه در زمینهٔ اجرای پروژه‌های ساختمانی، تأسیسات
                  الکتریکال و مکانیکال، و پیمانکاری در پروژه‌های بزرگ ملی و
                  منطقه‌ای فعالیت می‌کند. این شرکت با بهره‌گیری از نیروهای متخصص
                  و فناوری‌های روز، همواره در تلاش است بهترین کیفیت و بالاترین
                  استانداردها را ارائه دهد.
                </p>
                <p className="text-[var(--ink-muted)]">
                  رزومهٔ کاری آمودگسترآتیه شامل اجرای پروژه‌های مسکونی، برج‌های
                  اداری، پروژه‌های صنعتی و تأسیسات زیربنایی است. ما با تمرکز بر
                  مدیریت زمان، کیفیت و هزینه، توانسته‌ایم اعتماد کارفرمایان بزرگ و
                  معتبر کشور را جلب کنیم.
                </p>
              </div>
            </Reveal>
          </div>

          {/* Pillars */}
          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {pillars.map((p, i) => (
              <Reveal key={p.title} delay={i * 90}>
                <div className="card h-full p-8">
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-[var(--line)] bg-[var(--gold-glow)] text-[var(--gold)]">
                    <p.icon className="h-7 w-7" strokeWidth={1.6} />
                  </div>
                  <h3 className="text-lg font-bold text-[var(--ink)]">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[var(--ink-muted)]">
                    {p.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-14 text-center">
            <Link href="/contracting-projects" className="btn btn-gold">
              مشاهدهٔ پروژه‌ها
              <ArrowLeft className="w-4 h-4" />
            </Link>
          </Reveal>
        </section>
      </main>
      <Footer />
    </div>
  );
}
