"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Phone } from "lucide-react";

const leadingLinks = [{ href: "/", label: "خانه" }];

const projectLinks = [
  { href: "/construction-projects", label: "پروژه‌های ساخت‌وساز" },
  { href: "/contracting-projects", label: "پروژه‌های پیمانکاری" },
];

const trailingLinks = [
  { href: "/blog", label: "مقالات" },
  { href: "/about", label: "درباره ما" },
  { href: "/sale", label: "واحد فروش" },
  { href: "/contact", label: "تماس با ما" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setIsOpen(false), [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);
  const projectsActive = projectLinks.some((l) => isActive(l.href));

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#0a0a0c]/85 backdrop-blur-xl border-b border-[var(--line)] py-2"
          : "bg-transparent py-4"
      }`}
    >
      {/* Three tracks: in RTL the first column sits right, the last sits left —
          so the CTA is on the right, the menu centred, the logo on the left. */}
      <div className="amoud-container grid grid-cols-[auto_1fr_auto] items-center gap-4">
        {/* CTA + mobile toggle (right) */}
        <div className="flex items-center gap-3">
          <a
            href="tel:+982144711222"
            className="hidden lg:inline-flex btn btn-gold !py-2.5 !px-5 !text-sm"
          >
            <Phone className="w-4 h-4" />
            مشاوره رایگان
          </a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="منو"
            aria-expanded={isOpen}
            className="lg:hidden text-[var(--ink)] p-2"
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Menu (centre) */}
        <ul className="hidden lg:flex items-center justify-center gap-1">
          {leadingLinks.map((l) => (
            <NavItem key={l.href} {...l} active={isActive(l.href)} />
          ))}

          <li className="relative group">
            <button
              className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                projectsActive
                  ? "text-[var(--gold)]"
                  : "text-[var(--ink-soft)] hover:text-[var(--ink)]"
              }`}
            >
              پروژه‌ها
              <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
            </button>
            <div className="absolute top-full right-1/2 translate-x-1/2 pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
              <ul className="min-w-[230px] rounded-2xl border border-[var(--line)] bg-[#101014]/95 backdrop-blur-xl p-2 shadow-2xl">
                {projectLinks.map((p) => (
                  <li key={p.href}>
                    <Link
                      href={p.href}
                      className={`block px-4 py-3 rounded-xl text-sm transition-colors ${
                        isActive(p.href)
                          ? "bg-[var(--gold-glow)] text-[var(--gold)]"
                          : "text-[var(--ink-soft)] hover:bg-white/5 hover:text-[var(--ink)]"
                      }`}
                    >
                      {p.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </li>

          {trailingLinks.map((l) => (
            <NavItem key={l.href} {...l} active={isActive(l.href)} />
          ))}
        </ul>

        {/* Logo (left) */}
        <Link href="/" className="flex items-center gap-3 group justify-self-end">
          <span className="hidden xl:block text-sm font-bold text-[var(--ink-soft)]">
            آمود گستر آتیه
          </span>
          <img
            src="/brand/logo.png"
            alt="آمود گستر آتیه"
            className="logo-invert h-12 md:h-14 w-auto transition-transform duration-500 group-hover:scale-105"
          />
        </Link>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ${
          isOpen ? "max-h-[560px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="amoud-container pt-4 pb-6">
          <ul className="flex flex-col gap-1 rounded-2xl border border-[var(--line)] bg-[#101014]/95 backdrop-blur-xl p-3">
            {[...leadingLinks, ...projectLinks, ...trailingLinks].map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className={`block px-4 py-3 rounded-xl text-[15px] font-medium transition-colors ${
                    isActive(l.href)
                      ? "bg-[var(--gold-glow)] text-[var(--gold)]"
                      : "text-[var(--ink-soft)] hover:bg-white/5"
                  }`}
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <a href="tel:+982144711222" className="btn btn-gold w-full">
                <Phone className="w-4 h-4" />
                مشاوره رایگان
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

function NavItem({
  href,
  label,
  active,
}: {
  href: string;
  label: string;
  active: boolean;
}) {
  return (
    <li>
      <Link
        href={href}
        className={`relative px-4 py-2 rounded-full text-sm font-medium transition-colors ${
          active
            ? "text-[var(--gold)]"
            : "text-[var(--ink-soft)] hover:text-[var(--ink)]"
        }`}
      >
        {label}
        {active && (
          <span className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[var(--gold)]" />
        )}
      </Link>
    </li>
  );
}
