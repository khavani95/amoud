"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Reveal from "./Reveal";

interface Project {
  id: number;
  title: string;
  shortDesc: string;
  link: string;
  images: string | string[];
}

const FALLBACK: Project[] = [
  {
    id: 1,
    title: "برج‌های مسکونی یاس همت",
    shortDesc: "پروژهٔ شاخص مسکونی",
    link: "/contracting-projects#project-1",
    images: "/projects/Yas-Residential-Towers.webp",
  },
  {
    id: 2,
    title: "شهرک ۲۸۰۰ واحدی آسمان البرز",
    shortDesc: "اجرای تأسیسات الکتریکال و مکانیکال بلوک‌های M، C و B",
    link: "/contracting-projects#project-2",
    images: "/projects/Aseman-alborz.jpg",
  },
];

export default function FeaturedProjects() {
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

  const list = (projects.length ? projects : FALLBACK).slice(0, 4);
  const imgOf = (p: Project) =>
    Array.isArray(p.images) ? p.images[0] : p.images.split(",")[0].trim();

  return (
    <div className="grid gap-6 md:grid-cols-2">
      {list.map((p, i) => (
        <Reveal as="article" key={p.id ?? i} delay={i * 90}>
          <Link
            href={p.link || "#"}
            className="group relative block overflow-hidden rounded-3xl border border-[var(--line)] aspect-[16/11]"
          >
            <img
              src={imgOf(p)}
              alt={p.title}
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
            <div className="absolute inset-0 border border-transparent group-hover:border-[var(--gold)]/40 rounded-3xl transition-colors duration-500" />
            <div className="absolute bottom-0 inset-x-0 p-7">
              <div className="text-xs font-bold uppercase tracking-widest text-[var(--gold)] mb-2">
                پروژهٔ پیمانکاری
              </div>
              <h3 className="text-xl font-bold text-white">{p.title}</h3>
              <p className="mt-1 text-sm text-white/70 line-clamp-2">
                {p.shortDesc}
              </p>
              <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[var(--gold)] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
                مشاهدهٔ جزئیات
                <ArrowLeft className="w-4 h-4" />
              </span>
            </div>
          </Link>
        </Reveal>
      ))}
    </div>
  );
}
