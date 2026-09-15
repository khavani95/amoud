"use client";
import Link from "next/link";
import { Target, Eye, Gem, ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import { company, stats, services } from "@/data/company";

const pillars = [
  { icon: Eye, title: "چشم‌انداز", desc: company.vision },
  { icon: Gem, title: "ارزش‌های محوری", desc: company.values },
  { icon: Target, title: "مأموریت", desc: company.mission },
];

export default function About() {
  return (
    <div className="flex min-h-screen flex-col bg-[var(--bg)]">
      <Navbar />
      <main className="flex-grow">
        {/* Header */}
        <section className="relative border-b border-[var(--line)] bg-grid pb-16 pt-36">
          <div className="amoud-container text-center">
            <Reveal>
              <span className="eyebrow justify-center mb-5">
                {company.nameFa}
              </span>
              <h1 className="text-4xl font-black text-[var(--ink)] sm:text-5xl">
                دربارهٔ <span className="text-gradient-gold">ما</span>
              </h1>
              <p className="mx-auto mt-5 max-w-2xl leading-8 text-[var(--ink-muted)]">
                {company.tagline} — از سال ۱۳۸۰
              </p>
            </Reveal>
          </div>
        </section>

        {/* Intro */}
        <section className="amoud-container py-16">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <Reveal>
              <div className="aspect-[4/3] overflow-hidden rounded-3xl border border-[var(--line)]">
                <img
                  src="/projects/Aseman-alborz.jpg"
                  alt="پروژه‌های آمود گستر آتیه"
                  className="h-full w-full object-cover"
                />
              </div>
            </Reveal>
            <Reveal delay={120}>
              <h2 className="text-2xl font-black text-[var(--ink)] sm:text-3xl">
                معرفی شرکت
              </h2>
              <p className="mt-5 leading-9 text-[var(--ink-soft)]">
                {company.intro}
              </p>
              <div className="mt-8 grid grid-cols-3 gap-4 border-t border-[var(--line)] pt-7">
                {stats.map((s) => (
                  <div key={s.label}>
                    <div className="display-en text-2xl font-black text-gradient-gold sm:text-3xl">
                      {s.value}
                    </div>
                    <div className="mt-1 text-xs text-[var(--ink-muted)]">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Vision / values / mission */}
          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {pillars.map((p, i) => (
              <Reveal key={p.title} delay={i * 90}>
                <div className="card h-full rounded-3xl p-8">
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

          {/* Services summary */}
          <div className="mt-16 grid gap-6 lg:grid-cols-2">
            {services.map((s, i) => (
              <Reveal key={s.slug} delay={i * 90}>
                <div className="card h-full rounded-3xl p-8">
                  <h3 className="text-xl font-bold text-[var(--gold)]">
                    {s.title}
                  </h3>
                  <p className="mt-4 leading-8 text-[var(--ink-soft)]">
                    {s.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-14 text-center">
            <Link href="/contracting-projects" className="btn btn-gold">
              مشاهدهٔ پروژه‌ها
              <ArrowLeft className="h-4 w-4" />
            </Link>
          </Reveal>
        </section>
      </main>
      <Footer />
    </div>
  );
}
