"use client";
import Link from "next/link";
import { ArrowLeft, Phone } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import FeaturedProjects from "@/components/FeaturedProjects";
import {
  constructionProjects,
  secondaryService,
  contact,
} from "@/data/company";

export default function ConstructionProjects() {
  return (
    <div className="flex min-h-screen flex-col bg-[var(--bg)]">
      <Navbar />
      <main className="flex-grow">
        <section className="relative border-b border-[var(--line)] bg-grid pb-14 pt-36">
          <div className="amoud-container text-center">
            <Reveal>
              <span className="eyebrow justify-center mb-5">طراحی و ساخت</span>
              <h1 className="text-4xl font-black text-[var(--ink)] sm:text-5xl">
                پروژه‌های <span className="text-gradient-gold">ساخت‌وساز</span>
              </h1>
              <p className="mx-auto mt-5 max-w-2xl leading-8 text-[var(--ink-muted)]">
                آمود گستر آتیه به‌عنوان مجری ساختمان‌های مسکونی، اداری و تجاری
                نیز فعال است؛ سری آمود ۱ تا ۶ پروژه‌های طراحی و ساخت خود مجموعه
                در تهران و شمال کشور است.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="amoud-container py-16">
          <Reveal className="mb-12">
            <h2 className="text-2xl font-black text-[var(--ink)] sm:text-3xl">
              سری آمود — طراحی و ساخت
            </h2>
          </Reveal>
          <FeaturedProjects projects={constructionProjects} />
        </section>

        <section className="amoud-container pb-20">
          <Reveal>
            <div className="flex flex-col items-center gap-5 rounded-3xl border border-[var(--gold)]/25 bg-gradient-to-br from-[#16130c] via-[var(--surface)] to-[#0d0d10] p-10 text-center">
              <h2 className="text-2xl font-black text-[var(--ink)] sm:text-3xl">
                {secondaryService.title}
              </h2>
              <p className="max-w-2xl leading-8 text-[var(--ink-soft)]">
                {secondaryService.desc}
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href={contact.officeHref} className="btn btn-gold">
                  <Phone className="h-4 w-4" />
                  {contact.office}
                </a>
                <Link href={secondaryService.href} className="btn btn-ghost">
                  {secondaryService.linkLabel}
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
