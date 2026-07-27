"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import SectionHead from "@/components/SectionHead";
import PageHeader from "@/components/PageHeader";
import ProjectCard from "@/components/ProjectCard";
import { featuredProjects, otherProjects } from "@/data/company";

export default function Projects() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-grow">
        <PageHeader
          title="پروژه‌ها"
          subtitle="بیش از ۲۵ پروژه و ۳۰۰ هزار مترمربع زیربنا در پروژه‌های مسکونی، اداری، تجاری و بیمارستانی."
        />

        {/* Featured */}
        <section className="amoud-container py-14">
          <SectionHead title="پروژه‌های شاخص" index="۰۴" />
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {featuredProjects.map((p, i) => (
              <Reveal key={p.id} delay={Math.min(i * 60, 300)}>
                <ProjectCard project={p} />
              </Reveal>
            ))}
          </div>
        </section>

        {/* Other records */}
        <section className="amoud-container pb-16">
          <SectionHead title="سایر سوابق اجرایی" index="۰۵" />
          <div className="mt-6">
            {otherProjects.map((p, i) => (
              <Reveal key={p.title} delay={Math.min(i * 30, 240)}>
                <div className="flex flex-col gap-1 border-b border-[var(--border-soft)] py-3.5 sm:flex-row sm:items-baseline sm:gap-4">
                  <div className="w-7 shrink-0 text-[13.5px] font-extrabold text-[var(--copper)]">
                    {toFa(i + 1)}
                  </div>
                  <div className="flex-1 text-[14px] font-semibold text-white">
                    {p.title}
                  </div>
                  <div className="text-[12.5px] text-[var(--text-muted)]">
                    {p.client}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

const faDigits = "۰۱۲۳۴۵۶۷۸۹";
function toFa(n: number) {
  return String(n).replace(/\d/g, (d) => faDigits[Number(d)]);
}
