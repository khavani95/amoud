"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import SectionHead from "@/components/SectionHead";
import ProjectAccordion from "@/components/ProjectAccordion";

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-grow">
        <PageHeader title="پروژه‌های پیمانکاری" subtitle="فهرست پروژه‌های مسکونی، بیمارستانی، اداری و تجاری اجراشده." />
        <section className="amoud-container max-w-4xl py-14">
          <SectionHead title="پروژه‌های پیمانکاری" index="۰۷" />
          <div className="mt-8">
            <ProjectAccordion endpoint="/api/contracting-projects" />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
