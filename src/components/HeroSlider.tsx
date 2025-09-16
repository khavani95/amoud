"use client";
import { useState, useEffect } from "react";

// تعریف تایپ برای پروژه‌ها
interface Project {
  id: number;
  title: string;
  shortDesc: string;
  link: string;
  images: string; // اگر بعدا چندتا عکس باشه، اینو بذار string[]
}

export default function HeroSlider() {
  const [index, setIndex] = useState(0);
  const [projects, setProjects] = useState<Project[]>([]);

  // گرفتن پروژه‌ها از API
  useEffect(() => {
    async function fetchProjects() {
      try {
        const res = await fetch("/api/heroslider");
        const data: Project[] = await res.json();
        setProjects(data);
      } catch (err) {
        console.error("Error fetching projects:", err);
      }
    }
    fetchProjects();
  }, []);

  // اتوپلی
  useEffect(() => {
    if (projects.length === 0) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % projects.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [projects]); // اینجا projects رو dependency گذاشتیم

  if (projects.length === 0) {
    return (
      <div className="w-full aspect-[16/9] flex items-center justify-center bg-gray-200 text-gray-600">
        در حال بارگذاری...
      </div>
    );
  }

  return (
    <a
      href={projects[index].link}
      className="relative block w-full aspect-[16/9] overflow-hidden group"
    >
      {/* تصاویر با موشن */}
      <div className="w-full aspect-[16/9] relative">
        {projects.map((project, i) => (
          <img
            key={i}
            src={project.images}
            alt={project.title}
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-in-out ${
              i === index ? "opacity-100 scale-105" : "opacity-0 scale-100"
            }`}
          />
        ))}
      </div>

      {/* لایه گرادینت پایین */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black/80 to-transparent" />

      {/* توضیحات پروژه */}
      <div className="absolute bottom-10 right-6 text-white max-w-md text-right">
        <h2 className="text-3xl font-bold">{projects[index].title}</h2>
        <p className="mt-1 text-base">{projects[index].shortDesc}</p>
      </div>

      {/* شمارنده */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {projects.map((_, i) => (
          <span
            key={i}
            className={`w-3 h-3 rounded-full cursor-pointer transition-all ${
              i === index ? "bg-white scale-110" : "bg-white/50"
            }`}
            onClick={(e) => {
              e.preventDefault();
              setIndex(i);
            }}
          />
        ))}
      </div>

      {/* متن جزئیات (hover) */}
      <div className="absolute bottom-4 left-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-white bg-black/50 px-3 py-1 rounded-lg text-sm">
        برای جزئیات بیشتر کلیک کنید
      </div>

      {/* دکمه قبلی */}
      <button
        type="button"
        onClick={(e) => {
          e.preventDefault();
          setIndex((index - 1 + projects.length) % projects.length);
        }}
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white text-4xl px-4 py-2 rounded-full"
      >
        ‹
      </button>

      {/* دکمه بعدی */}
      <button
        type="button"
        onClick={(e) => {
          e.preventDefault();
          setIndex((index + 1) % projects.length);
        }}
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white text-4xl px-4 py-2 rounded-full"
      >
        ›
      </button>
    </a>
  );
}
