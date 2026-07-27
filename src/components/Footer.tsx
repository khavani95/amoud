"use client";
import Link from "next/link";
import { company, contact } from "@/data/company";

/**
 * Per the handoff: a copper 2px top rule, then three parts —
 * phone (white) / company name (muted) / site (copper).
 */
export default function Footer() {
  return (
    <footer className="mt-20 border-t-2 border-[var(--copper)] bg-[var(--navy)]">
      <div className="amoud-container py-10">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <img
                src="/brand/logo.png"
                alt={company.nameFa}
                className="logo-white h-12 w-auto"
              />
              <div className="leading-tight">
                <div className="text-[15px] font-extrabold text-white">
                  {company.nameFa}
                </div>
                <div className="text-[11px] tracking-[1px] text-[var(--text-muted)]">
                  {company.nameEn}
                </div>
              </div>
            </div>
            <p className="mt-5 max-w-xs text-[13.5px] leading-8 text-[var(--text-muted)]">
              {company.tagline} — از سال ۱۳۸۰
            </p>
          </div>

          {/* Sitemap */}
          <div>
            <h4 className="mb-4 flex items-center gap-3 text-[15px] font-extrabold text-white">
              <span className="bullet-sm" />
              دسترسی سریع
            </h4>
            <ul className="grid grid-cols-2 gap-y-3 text-[13.5px]">
              {[
                { href: "/home", label: "خانه" },
                { href: "/about", label: "درباره ما" },
                { href: "/services", label: "خدمات" },
                { href: "/projects", label: "پروژه‌های شاخص" },
                { href: "/sale", label: "واحد فروش" },
                { href: "/contact", label: "تماس با ما" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="link-copper">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 flex items-center gap-3 text-[15px] font-extrabold text-white">
              <span className="bullet-sm" />
              تماس با ما
            </h4>
            <ul className="space-y-3 text-[13.5px] leading-7 text-[var(--text-secondary)]">
              <li>
                {contact.office.label}:{" "}
                <a href={contact.office.href} className="link-copper">
                  {contact.office.value}
                </a>
              </li>
              <li>
                {contact.ceo.label}:{" "}
                <a href={contact.ceo.href} className="link-copper">
                  {contact.ceo.value}
                </a>
              </li>
              <li className="text-[var(--text-muted)]">{contact.address}</li>
              <li>
                <a
                  href={`mailto:${contact.email}`}
                  className="link-copper"
                  dir="ltr"
                >
                  {contact.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom rule: phone / name / site */}
      <div className="border-t border-[var(--border-soft)]">
        <div className="amoud-container flex flex-col items-center justify-between gap-2 py-4 text-[12.5px] sm:flex-row">
          <a
            href={contact.office.href}
            className="font-semibold text-white"
          >
            {contact.office.value}
          </a>
          <span className="text-[var(--text-muted)]">{company.nameFa}</span>
          <span className="font-semibold text-[var(--copper)]">
            {contact.site}
          </span>
        </div>
      </div>
    </footer>
  );
}
