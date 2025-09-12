"use client";
import { useState, useEffect } from "react";

const projects = [
  {
    title: "برج‌های مسکونی همت ۲",
    desc: "پروژه تاسیسات الکتریکال در بلوار طبیعت",
    img: "/projects/Yas-Residential-Towers.webp",
    link: "/contracting-projects#project-1/",
  },
  {
    title: "پروژه ۲۸۰۰ واحدی آسمان البرز",
    desc: "بلوک‌های تیپ M و C",
    img: "/projects/Aseman-alborz.jpg",
    link: "/contracting-projects#project-2/",
  },
];

export default function HeroSlider() {
  const [index, setIndex] = useState(0);

  // اتوپلی اسلایدر
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % projects.length);
    }, 5000); // هر ۵ ثانیه
    return () => clearInterval(interval);
  }, []);

  return (
    <a
      href={projects[index].link}
      className="relative block w-full h-[500px] overflow-hidden"
    >
      {/* عکس */}
      <img
        src={projects[index].img}
        alt={projects[index].title}
        className="w-full h-full object-cover"
      />

      {/* متن پایین عکس */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent text-white px-6 py-4">
        <h2 className="text-2xl font-bold">{projects[index].title}</h2>
        <p className="mt-1 text-sm">{projects[index].desc}</p>
      </div>

      {/* دکمه‌ها */}
      <button
        type="button"
        onClick={(e) => {
          e.preventDefault(); // جلوگیری از کلیک روی لینک
          setIndex((index - 1 + projects.length) % projects.length);
        }}
        className="absolute top-1/2 right-4 -translate-y-1/2 text-white text-3xl drop-shadow-lg"
      >
        ‹
      </button>
      <button
        type="button"
        onClick={(e) => {
          e.preventDefault();
          setIndex((index + 1) % projects.length);
        }}
        className="absolute top-1/2 left-4 -translate-y-1/2 text-white text-3xl drop-shadow-lg"
      >
        ›
      </button>
    </a>
  );
}
