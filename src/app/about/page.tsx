"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import SectionHead from "@/components/SectionHead";
import PageHeader from "@/components/PageHeader";
import { company, stats, goals } from "@/data/company";

export default function About() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-grow">
        <PageHeader title="درباره ما" subtitle={company.tagline} />

        <section className="amoud-container py-14">
          <SectionHead title="معرفی شرکت" index="۰۱" />

          {/* About + stats */}
          <Reveal delay={70}>
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
              <div className="mt-8 grid grid-cols-2 gap-6 border-t border-white/15 pt-6 lg:grid-cols-4">
                {stats.map((s) => (
                  <div key={s.label}>
                    <div className="text-[26px] font-black text-white">
                      {s.value}
                    </div>
                    <div className="mt-1 text-[12.5px] text-[var(--text-muted)]">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Goals & vision */}
          <Reveal delay={120}>
            <div className="card mt-6 p-8 sm:p-10">
              <div className="flex items-center gap-3">
                <span className="bullet" />
                <span className="text-[17px] font-extrabold text-white">
                  اهداف و چشم‌انداز
                </span>
              </div>
              <div className="mt-6 grid gap-6 sm:grid-cols-2 sm:gap-x-10">
                {goals.map((g) => (
                  <div key={g.no} className="flex items-baseline gap-3">
                    <span className="text-[15px] font-black text-[var(--copper)]">
                      {g.no}
                    </span>
                    <div>
                      <div className="text-[15.5px] font-bold text-white">
                        {g.title}
                      </div>
                      <p className="mt-1 text-[13px] leading-[1.9] text-[#a9b6c9]">
                        {g.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </section>
      </main>
      <Footer />
    </div>
  );
}
