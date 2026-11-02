"use client";
import Link from "next/link";
import { ArrowLeft, Phone } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import FeaturedProjects from "@/components/FeaturedProjects";
import { featuredProjects, otherProjects, contact } from "@/data/company";

export default function ContractingProjects() {
  return (
    <div className="flex min-h-screen flex-col bg-[var(--bg)]">
      <Navbar />
      <main className="flex-grow">
        <section className="relative border-b border-[var(--line)] bg-grid pb-14 pt-36">
          <div className="amoud-container text-center">
            <Reveal>
              <span className="eyebrow justify-center mb-5">نمونه کارها</span>
              <h1 className="text-4xl font-black text-[var(--ink)] sm:text-5xl">
                پروژه‌های <span className="text-gradient-gold">پیمانکاری</span>
              </h1>
              <p className="mx-auto mt-5 max-w-2xl leading-8 text-[var(--ink-muted)]">
                اجرای تاسیسات الکتریکال و مکانیکال پروژه‌های مسکونی، اداری،
                تجاری، بیمارستانی و برج‌های بلندمرتبه — بیش از ۲۵ پروژه و ۶۰۰
                هزار مترمربع زیربنا.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="amoud-container py-16">
          <Reveal className="mb-12">
            <h2 className="text-2xl font-black text-[var(--ink)] sm:text-3xl">
              پروژه‌های شاخص
            </h2>
          </Reveal>
          <FeaturedProjects projects={featuredProjects} />
        </section>

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

        <section className="amoud-container pb-20">
          <Reveal>
            <div className="flex flex-col items-center gap-5 rounded-3xl border border-[var(--gold)]/25 bg-gradient-to-br from-[#16130c] via-[var(--surface)] to-[#0d0d10] p-10 text-center">
              <h2 className="text-2xl font-black text-[var(--ink)] sm:text-3xl">
                پروژه‌ای برای اجرا دارید؟
              </h2>
              <p className="max-w-xl leading-8 text-[var(--ink-soft)]">
                برای دریافت پیشنهاد اجرای تاسیسات، دستمزدی یا با تامین متریال،
                با ما در ارتباط باشید.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href={contact.officeHref} className="btn btn-gold">
                  <Phone className="h-4 w-4" />
                  {contact.office}
                </a>
                <Link href="/construction-projects" className="btn btn-ghost">
                  پروژه‌های ساخت‌وساز
                  <ArrowLeft className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </Reveal>
        </section>
      </main>
      <Footer />
    </div>
  );
}
