"use client";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import SectionHead from "@/components/SectionHead";
import ProjectCard from "@/components/ProjectCard";
import {
  company,
  contact,
  stats,
  services,
  featuredProjects,
} from "@/data/company";

export default function HomePage() {
  return (
    <main>
      <Navbar />

      {/* ---------- Hero (catalogue cover) ---------- */}
      <section className="relative min-h-[100svh] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/brand/negin-night.jpg"
            alt="برج‌های نگین ساحل"
            className="h-full w-full object-cover object-top"
          />
          {/* Exact gradient from the handoff */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, #16273f 0%, rgba(22,39,63,0) 18%, rgba(22,39,63,0) 42%, rgba(22,39,63,.72) 70%, #16273f 96%)",
            }}
          />
        </div>

        <div className="relative z-10 flex min-h-[100svh] flex-col justify-end">
          <div className="amoud-container pb-14">
            <div className="flex flex-col gap-4">
              <div className="h-1 w-[60px] bg-[var(--copper)]" />
              <h1 className="max-w-4xl text-[30px] font-black leading-[1.4] text-white sm:text-[38px] lg:text-[46px]">
                {company.tagline}
              </h1>
              <p className="max-w-2xl text-[15px] leading-[2.1] text-[var(--text-secondary)] sm:text-[16.5px]">
                {company.intro}
              </p>

              <div className="mt-3 flex flex-wrap gap-3">
                <Link href="/projects" className="btn btn-solid">
                  پروژه‌های شاخص
                  <ArrowLeft className="h-4 w-4" />
                </Link>
                <Link href="/services" className="btn btn-ghost">
                  خدمات ما
                </Link>
              </div>

              <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-white/20 pt-5 text-[13.5px]">
                <div className="text-[var(--text-muted)]">
                  {contact.office.value} | {contact.ceo.value}
                </div>
                <div className="font-semibold text-[var(--copper)]">
                  {contact.site}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Stats bar ---------- */}
      <section className="border-y border-[var(--border-soft)] bg-[var(--navy-raised)]">
        <div className="amoud-container grid grid-cols-2 gap-8 py-9 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 70}>
              <div>
                <div className="text-[26px] font-black text-white">
                  {s.value}
                </div>
                <div className="mt-1 text-[12.5px] text-[var(--text-muted)]">
                  {s.label}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------- About ---------- */}
      <section className="amoud-container py-16">
        <SectionHead title="معرفی شرکت" index="۰۱" />
        <Reveal delay={80}>
          <div className="card mt-8 p-8 sm:p-10">
            <div className="flex items-center gap-3">
              <span className="bullet" />
              <span className="text-[17px] font-extrabold text-[var(--copper)]">
                درباره ما
              </span>
            </div>
            <p className="mt-4 text-[15.5px] leading-[2.2] text-[var(--text-body)]">
              {company.about}
            </p>
            <div className="mt-7 flex flex-wrap gap-4 border-t border-white/15 pt-6">
              <Link href="/about" className="btn btn-copper">
                درباره ما
                <ArrowLeft className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ---------- Services ---------- */}
      <section className="amoud-container py-16">
        <SectionHead title="خدمات ما" index="۰۲" />
        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={i * 90}>
              <div className="card flex h-full flex-col gap-4 p-8 sm:p-10">
                <div className="flex items-center gap-3">
                  <span className="bullet" />
                  <span className="text-[17px] font-extrabold text-[var(--copper)]">
                    {s.title}
                  </span>
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
      </section>

      {/* ---------- Featured projects (first 4) ---------- */}
      <section className="amoud-container py-16">
        <SectionHead title="پروژه‌های شاخص" index="۰۳" />
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {featuredProjects.slice(0, 4).map((p, i) => (
            <Reveal key={p.id} delay={i * 80}>
              <ProjectCard project={p} />
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-10 text-center">
          <Link href="/projects" className="btn btn-copper">
            همه پروژه‌ها
            <ArrowLeft className="h-4 w-4" />
          </Link>
        </Reveal>
      </section>

      {/* ---------- Contact ---------- */}
      <section className="amoud-container pb-4 pt-8">
        <Reveal>
          <div className="flex flex-col justify-between gap-6 border border-[var(--border-card)] bg-[rgba(255,255,255,.06)] p-8 sm:flex-row sm:items-center sm:p-10">
            <div className="flex flex-col gap-2">
              <div className="text-[15px] font-extrabold text-[var(--copper)]">
                تماس با ما
              </div>
              <div className="text-[13.5px] leading-[2] text-[var(--text-secondary)]">
                {contact.office.label}: {contact.office.value} |{" "}
                {contact.ceo.label}: {contact.ceo.value}
                <br />
                {contact.address}
              </div>
            </div>
            <div className="text-[13px] leading-[2] text-[var(--text-muted)] sm:text-left">
              {contact.site}
              <br />
              {contact.email}
            </div>
          </div>
        </Reveal>
      </section>

      <Footer />
    </main>
  );
}
