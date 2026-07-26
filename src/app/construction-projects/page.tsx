"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import ProjectAccordion from "@/components/ProjectAccordion";

export default function ConstructionProjects() {
  return (
    <div className="flex min-h-screen flex-col bg-[var(--bg)]">
      <Navbar />
      <main className="flex-grow">
        <section className="relative pt-36 pb-14 bg-grid border-b border-[var(--line)]">
          <div className="amoud-container text-center">
            <Reveal>
              <span className="eyebrow justify-center mb-5">نمونه کارها</span>
              <h1 className="text-4xl sm:text-5xl font-black text-[var(--ink)]">
                پروژه‌های <span className="text-gradient-gold">ساخت‌وساز</span>
              </h1>
              <p className="mx-auto mt-5 max-w-2xl leading-8 text-[var(--ink-muted)]">
                فهرست پروژه‌های مشارکت در ساخت، خرید و مشارکت
              </p>
            </Reveal>
          </div>
        </section>

        <section className="amoud-container max-w-4xl py-14">
          <ProjectAccordion endpoint="/api/construction-projects" />
        </section>
      </main>
      <Footer />
    </div>
  );
}
