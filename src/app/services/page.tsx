"use client";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import SectionHead from "@/components/SectionHead";
import PageHeader from "@/components/PageHeader";
import { services } from "@/data/company";

export default function Services() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-grow">
        <PageHeader
          title="خدمات ما"
          subtitle="اجرای دستمزدی عملیات تاسیسات الکتریکال و مکانیکال در پروژه‌های مسکونی، اداری، تجاری، بیمارستانی و برج‌های بلندمرتبه."
        />

        <section className="amoud-container py-14">
          <SectionHead title="حوزه‌های تخصصی" index="۰۲" />
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            {services.map((s, i) => (
              <Reveal key={s.slug} delay={i * 90}>
                <div className="card flex h-full flex-col gap-4 p-8 sm:p-10">
                  <div className="flex items-center gap-3">
                    <span className="bullet" />
                    <h2 className="text-[17px] font-extrabold text-[var(--copper)]">
                      {s.title}
                    </h2>
                  </div>
                  <p className="text-[15px] leading-[2.1] text-[var(--text-body)]">
                    {s.desc}
                  </p>
                  <div className="mt-auto flex flex-wrap gap-2.5 pt-3">
                    {s.chips.map((c) => (
                      <span key={c} className="chip">
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-10 flex flex-wrap justify-center gap-3">
            <Link href="/projects" className="btn btn-copper">
              نمونه پروژه‌ها
              <ArrowLeft className="h-4 w-4" />
            </Link>
            <Link href="/contact" className="btn btn-ghost">
              درخواست همکاری
            </Link>
          </Reveal>
        </section>
      </main>
      <Footer />
    </div>
  );
}
