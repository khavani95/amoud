"use client";
import { Phone } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import PageHeader from "@/components/PageHeader";
import SectionHead from "@/components/SectionHead";
import ProjectAccordion from "@/components/ProjectAccordion";

const contacts = [
  { name: "مهندس خوانی", phone: "۰۹۱۲۳۵۰۵۵۲۴", href: "tel:+989123505524" },
  { name: "مهندس مؤمن", phone: "۰۹۱۲۵۴۵۸۵۷۸", href: "tel:+989125458578" },
];

export default function Sale() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-grow">
        <PageHeader
          title="واحد فروش"
          subtitle="جهت کسب اطلاعات بیشتر و اطلاع از شرایط فروش، با شماره‌های زیر تماس حاصل فرمایید."
        />

        <section className="amoud-container py-14">
          <div className="grid gap-5 sm:grid-cols-2">
            {contacts.map((c, i) => (
              <Reveal key={c.href} delay={i * 80}>
                <a href={c.href} className="card flex items-center gap-5 p-6">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center border border-[var(--border-strong)] text-[var(--copper)]">
                    <Phone className="h-5 w-5" strokeWidth={1.7} />
                  </span>
                  <span>
                    <span className="block text-[12.5px] text-[var(--text-muted)]">
                      {c.name}
                    </span>
                    <span className="mt-0.5 block text-[16px] font-bold text-white">
                      {c.phone}
                    </span>
                  </span>
                </a>
              </Reveal>
            ))}
          </div>

          <div className="mt-12">
            <SectionHead title="واحدهای موجود" />
            <div className="mt-8 max-w-4xl">
              <ProjectAccordion endpoint="/api/sale" />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
