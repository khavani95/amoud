"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import { company } from "@/data/company";

const links = [
  { href: "/home", label: "خانه" },
  { href: "/about", label: "درباره ما" },
  { href: "/services", label: "خدمات" },
];

const projectLinks = [
  { href: "/projects", label: "پروژه‌های شاخص" },
  { href: "/construction-projects", label: "پروژه‌های ساخت‌وساز" },
  { href: "/contracting-projects", label: "پروژه‌های پیمانکاری" },
];

const tailLinks = [
  { href: "/sale", label: "واحد فروش" },
  { href: "/contact", label: "تماس با ما" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setIsOpen(false), [pathname]);

  const isActive = (href: string) => pathname === href;
  const projectsActive = projectLinks.some((l) => isActive(l.href));

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-[var(--navy)]/95 backdrop-blur-md border-b border-[var(--border-soft)]"
          : "bg-transparent"
      }`}
    >
      <div className="amoud-container flex items-center justify-between h-[76px]">
        {/* Brand — right in RTL */}
        <Link href="/home" className="order-2 flex items-center gap-4">
          <img
            src="/brand/logo.png"
            alt={company.nameFa}
            className="logo-white h-11 w-auto"
          />
          <span className="hidden sm:block leading-tight">
            <span className="block text-[15px] font-extrabold text-white">
              {company.nameFa}
            </span>
            <span className="block text-[11px] tracking-[1px] text-[var(--text-muted)]">
              {company.nameEn}
            </span>
          </span>
        </Link>

        {/* Desktop nav */}
        <ul className="order-1 hidden lg:flex items-center gap-7">
          {links.map((l) => (
            <NavItem key={l.href} {...l} active={isActive(l.href)} />
          ))}

          <li className="relative group">
            <button
              className={`flex items-center gap-1.5 py-2 text-sm font-medium transition-colors ${
                projectsActive
                  ? "text-[var(--copper)]"
                  : "text-[var(--text-body)] hover:text-[var(--copper)]"
              }`}
            >
              پروژه‌ها
              <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
            </button>
            <div className="invisible absolute right-0 top-full pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100">
              <ul className="min-w-[240px] border border-[var(--border-card)] bg-[var(--navy-raised)] py-1">
                {projectLinks.map((p) => (
                  <li key={p.href}>
                    <Link
                      href={p.href}
                      className={`block px-5 py-3 text-sm transition-colors ${
                        isActive(p.href)
                          ? "text-[var(--copper)]"
                          : "text-[var(--text-body)] hover:bg-white/5 hover:text-[var(--copper)]"
                      }`}
                    >
                      {p.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </li>

          {tailLinks.map((l) => (
            <NavItem key={l.href} {...l} active={isActive(l.href)} />
          ))}
        </ul>

        {/* CTA + burger */}
        <div className="order-3 flex items-center gap-3">
          <Link href="/contact" className="hidden lg:inline-flex btn btn-copper">
            تماس با ما
          </Link>
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="منو"
            aria-expanded={isOpen}
            className="lg:hidden p-2 text-white"
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile sheet */}
      <div
        className={`lg:hidden overflow-hidden border-t border-[var(--border-soft)] bg-[var(--navy)] transition-all duration-300 ${
          isOpen ? "max-h-[640px]" : "max-h-0 border-t-0"
        }`}
      >
        <ul className="amoud-container flex flex-col py-3">
          {[...links, ...projectLinks, ...tailLinks].map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className={`flex min-h-[44px] items-center border-b border-[var(--border-soft)] text-[15px] transition-colors ${
                  isActive(l.href)
                    ? "text-[var(--copper)]"
                    : "text-[var(--text-body)]"
                }`}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
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
        className={`py-2 text-sm font-medium transition-colors ${
          active
            ? "text-[var(--copper)]"
            : "text-[var(--text-body)] hover:text-[var(--copper)]"
        }`}
      >
        {label}
      </Link>
    </li>
  );
}
