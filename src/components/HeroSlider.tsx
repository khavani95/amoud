"use client";
import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowDown } from "lucide-react";

interface Project {
  id: number;
  title: string;
  shortDesc: string;
  link: string;
  images: string; // comma-joined; first used
}

const FALLBACK: Project[] = [
  {
    id: 1,
    title: "برج‌های مسکونی یاس همت",
    shortDesc: "پروژه شاخص مسکونی",
    link: "/contracting-projects#project-1",
    images: "/projects/Yas-Residential-Towers.webp",
  },
  {
    id: 2,
    title: "شهرک ۲۸۰۰ واحدی آسمان البرز",
    shortDesc: "اجرای تأسیسات الکتریکال و مکانیکال",
    link: "/contracting-projects#project-2",
    images: "/projects/Aseman-alborz.jpg",
  },
];

export default function HeroSlider() {
  const [index, setIndex] = useState(0);
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    let alive = true;
    (async () => {
      try {
        const res = await fetch("/api/heroslider");
        const data: Project[] = await res.json();
        if (alive && Array.isArray(data) && data.length) setProjects(data);
        else if (alive) setProjects(FALLBACK);
      } catch {
        if (alive) setProjects(FALLBACK);
      }
    })();
    return () => {
      alive = false;
    };
  }, []);

  const list = projects.length ? projects : FALLBACK;

  useEffect(() => {
    if (list.length < 2) return;
    const t = setInterval(
      () => setIndex((p) => (p + 1) % list.length),
      6000
    );
    return () => clearInterval(t);
  }, [list.length]);

  const imgOf = useCallback((p: Project) => {
    if (!p?.images) return "";
    return typeof p.images === "string"
      ? p.images.split(",")[0].trim()
      : (p.images as unknown as string[])[0];
  }, []);

  const active = list[index];

  return (
    <section className="relative min-h-[100svh] w-full overflow-hidden bg-[var(--bg)]">
      {/* Background slides */}
      <div className="absolute inset-0">
        {list.map((p, i) => (
          <img
            key={p.id ?? i}
            src={imgOf(p)}
            alt={p.title}
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-[1600ms] ease-out ${
              i === index
                ? "opacity-100 scale-105"
                : "opacity-0 scale-100"
            }`}
          />
        ))}
        {/* Cinematic overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg)] via-[var(--bg)]/70 to-[var(--bg)]/40" />
        <div className="absolute inset-0 bg-gradient-to-l from-[var(--bg)]/90 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-grid opacity-40" />
      </div>

      {/* Content */}
      <div className="relative z-10 amoud-container flex min-h-[100svh] flex-col justify-center pt-28 pb-20">
        <div className="max-w-3xl">
          <span
            className="eyebrow mb-6 opacity-0 animate-[fadeUp_.7s_ease_forwards]"
            style={{ animationDelay: "0.1s" }}
          >
            آمود گستر آتیه · از سال ۱۳۸۰
          </span>

          <h1
            className="text-4xl sm:text-6xl lg:text-7xl font-black leading-[1.15] text-[var(--ink)] opacity-0 animate-[fadeUp_.7s_ease_forwards]"
            style={{ animationDelay: "0.25s" }}
          >
            ساختِ آینده،
            <br />
            بر پایهٔ{" "}
            <span className="text-gradient-gold">اعتماد و تخصص</span>
          </h1>

          <p
            className="mt-6 max-w-xl text-base sm:text-lg leading-8 text-[var(--ink-soft)] opacity-0 animate-[fadeUp_.7s_ease_forwards]"
            style={{ animationDelay: "0.4s" }}
          >
            مشارکت و اجرای پروژه‌های مسکونی، تجاری، اداری و بیمارستانی با تمرکز
            تخصصی بر تأسیسات برق و مکانیک — بیش از دو دهه تجربه در ساخت.
          </p>

          <div
            className="mt-9 flex flex-wrap items-center gap-4 opacity-0 animate-[fadeUp_.7s_ease_forwards]"
            style={{ animationDelay: "0.55s" }}
          >
            <Link href="/contracting-projects" className="btn btn-gold">
              مشاهدهٔ پروژه‌ها
              <ArrowLeft className="w-4 h-4" />
            </Link>
            <Link href="/contact" className="btn btn-ghost">
              تماس با ما
            </Link>
          </div>
        </div>

        {/* Active project label + dots */}
        <div className="mt-16 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <Link
            href={active?.link || "#"}
            className="group max-w-md"
            key={active?.id}
          >
            <div className="text-xs font-bold uppercase tracking-widest text-[var(--gold)] mb-2">
              پروژهٔ شاخص
            </div>
            <div className="text-lg font-bold text-[var(--ink)] group-hover:text-[var(--gold)] transition-colors">
              {active?.title}
            </div>
            <div className="text-sm text-[var(--ink-muted)]">
              {active?.shortDesc}
            </div>
          </Link>

          <div className="flex items-center gap-3">
            {list.map((_, i) => (
              <button
                key={i}
                aria-label={`اسلاید ${i + 1}`}
                onClick={() => setIndex(i)}
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  i === index
                    ? "w-10 bg-[var(--gold)]"
                    : "w-4 bg-white/25 hover:bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 hidden sm:flex flex-col items-center gap-2 text-[var(--ink-muted)]">
        <span className="text-[11px] tracking-widest">اسکرول کنید</span>
        <ArrowDown className="w-4 h-4 animate-bounce" />
      </div>

      <style jsx>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(24px);
          }
          to {
            opacity: 1;
            transform: none;
          }
        }
      `}</style>
    </section>
  );
}
