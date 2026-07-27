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
        <PageHeader title="پروژه‌های ساخت‌وساز" subtitle="فهرست پروژه‌های مشارکت در ساخت، خرید و مشارکت." />
        <section className="amoud-container max-w-4xl py-14">
          <SectionHead title="پروژه‌های ساخت‌وساز" index="۰۸" />
          <div className="mt-8">
            <ProjectAccordion endpoint="/api/construction-projects" />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
