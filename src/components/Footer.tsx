"use client";
import Link from "next/link";
import { MapPin, Phone, Mail, Smartphone, ArrowUp } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative mt-24 border-t border-[var(--line)] bg-[#08080a]">
      <div className="gold-rule opacity-60" />
      <div className="amoud-container py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <img
                src="/brand/logo.png"
                alt="آمود گستر آتیه"
                className="logo-invert h-14 w-auto"
              />
              <div className="text-base font-bold text-[var(--ink)]">
                آمود گستر آتیه
              </div>
            </div>
            <p className="text-sm leading-7 text-[var(--ink-muted)] max-w-xs">
              مشارکت و اجرای پروژه‌های مسکونی، تجاری، اداری و بیمارستانی؛
              متخصص تأسیسات برق و مکانیک از سال ۱۳۸۰.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-sm font-bold text-[var(--ink)] mb-5">
              دسترسی سریع
            </h4>
            <ul className="space-y-3 text-sm">
              {[
                { href: "/", label: "خانه" },
                { href: "/about", label: "درباره ما" },
                { href: "/blog", label: "مقالات" },
                { href: "/sale", label: "واحد فروش" },
                { href: "/contact", label: "تماس با ما" },
              ].map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-[var(--ink-muted)] hover:text-[var(--gold)] transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Projects */}
          <div>
            <h4 className="text-sm font-bold text-[var(--ink)] mb-5">پروژه‌ها</h4>
            <ul className="space-y-3 text-sm">
              {[
                {
                  href: "/construction-projects",
                  label: "پروژه‌های ساخت‌وساز",
                },
                {
                  href: "/contracting-projects",
                  label: "پروژه‌های پیمانکاری",
                },
              ].map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-[var(--ink-muted)] hover:text-[var(--gold)] transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-bold text-[var(--ink)] mb-5">
              ارتباط با ما
            </h4>
            <ul className="space-y-4 text-sm text-[var(--ink-muted)]">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[var(--gold)] mt-1 shrink-0" />
                <span className="leading-6">
                  تهران، شهرک گلستان، بلوار امیرکبیر، بلوار هاشم‌زاده، رز ۲
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[var(--gold)] shrink-0" />
                <a href="tel:+982144711222" dir="ltr">
                  021-44711222
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Smartphone className="w-4 h-4 text-[var(--gold)] shrink-0" />
                <a href="tel:+989123505524" dir="ltr">
                  +98 912 350 5524
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[var(--gold)] shrink-0" />
                <a href="mailto:AmudGostar.Co@Gmail.com" dir="ltr">
                  AmudGostar.Co@Gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[var(--line)]">
        <div className="amoud-container py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[var(--ink-muted)]">
            © {new Date().getFullYear()} آمود گستر آتیه — تمامی حقوق محفوظ است.
          </p>
          <button
            onClick={() =>
              window.scrollTo({ top: 0, behavior: "smooth" })
            }
            className="inline-flex items-center gap-2 text-xs text-[var(--ink-muted)] hover:text-[var(--gold)] transition-colors"
          >
            بازگشت به بالا
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
