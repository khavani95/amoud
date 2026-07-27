"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import ProjectAccordion from "@/components/ProjectAccordion";
import { Phone } from "lucide-react";

const contacts = [
  { name: "مهندس خوانی", phone: "09123505524", href: "tel:+989123505524" },
  { name: "مهندس مؤمن", phone: "09125458578", href: "tel:+989125458578" },
];

export default function Sale() {
  return (
    <div className="flex min-h-screen flex-col bg-[var(--bg)]">
      <Navbar />
      <main className="flex-grow">
        <section className="relative pt-36 pb-14 bg-grid border-b border-[var(--line)]">
          <div className="amoud-container text-center">
            <Reveal>
              <span className="eyebrow justify-center mb-5">فروش و مشاوره</span>
              <h1 className="text-4xl sm:text-5xl font-black text-[var(--ink)]">
                واحد <span className="text-gradient-gold">فروش</span>
              </h1>
              <p className="mx-auto mt-5 max-w-2xl leading-8 text-[var(--ink-muted)]">
                جهت کسب اطلاعات بیشتر و اطلاع از شرایط فروش، با شماره‌های زیر
                تماس حاصل فرمایید.
              </p>
            </Reveal>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              {contacts.map((c, i) => (
                <Reveal key={c.phone} delay={i * 90}>
                  <a
                    href={c.href}
                    className="card flex items-center gap-4 px-7 py-5"
                  >
                    <span className="flex h-12 w-12 items-center justify-center rounded-full border border-[var(--line)] bg-[var(--gold-glow)] text-[var(--gold)]">
                      <Phone className="h-5 w-5" />
                    </span>
                    <span className="text-right">
                      <span className="block text-sm text-[var(--ink-muted)]">
                        {c.name}
                      </span>
                      <span
                        className="block text-lg font-bold text-[var(--ink)]"
                        dir="ltr"
                      >
                        {c.phone}
                      </span>
                    </span>
                  </a>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="amoud-container max-w-4xl py-14">
          <Reveal className="mb-8 text-center">
            <h2 className="text-2xl font-bold text-[var(--ink)]">
              واحدهای موجود
            </h2>
          </Reveal>
          <ProjectAccordion endpoint="/api/sale" />
        </section>
      </main>
      <Footer />
    </div>
  );
}
