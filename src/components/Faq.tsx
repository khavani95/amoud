"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Reveal from "./Reveal";
import { faqs } from "@/data/faq";


export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="amoud-container py-16">
      <Reveal className="mx-auto mb-12 max-w-2xl text-center">
        <span className="eyebrow justify-center mb-4">سوالات متداول</span>
        <h2 className="text-3xl font-black text-[var(--ink)] sm:text-4xl">
          پرسش‌های <span className="text-gradient-gold">پرتکرار</span>
        </h2>
      </Reveal>

      <div className="mx-auto max-w-3xl space-y-4">
        {faqs.map((f, i) => (
          <Reveal key={f.q} delay={i * 60}>
            <div
              className={`overflow-hidden rounded-2xl border transition-colors ${
                open === i
                  ? "border-[var(--gold)]/40 bg-[var(--surface-2)]"
                  : "border-[var(--line)] bg-[var(--surface)]"
              }`}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-right"
              >
                <h3 className="text-base font-bold text-[var(--ink)]">{f.q}</h3>
                <ChevronDown
                  className={`h-5 w-5 shrink-0 text-[var(--gold)] transition-transform ${
                    open === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`grid transition-all duration-300 ${
                  open === i ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="px-6 pb-6 leading-8 text-[var(--ink-muted)]">
                    {f.a}
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
