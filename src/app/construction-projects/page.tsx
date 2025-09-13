"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Thumbs, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/thumbs";
import "swiper/css/navigation";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { Swiper as SwiperClass } from "swiper"; // 👈 تایپ Swiper

/*
  پروژه‌ها — لطفاً این آرایه را هر وقت خواستید با محتوا و تصاویر واقعی‌تان بروزرسانی کنید.
  من هیچ‌یک از آیتم‌ها یا توضیحات را حذف نکردم — دقیقاً همان‌چیزی که فرستادید نگه داشته شده.
*/
const projects = [
  {
    id: 1,
    title: "پروژه مسکونی تهران",
    shortDesc: "ساختمان ۱۰ طبقه مسکونی در شمال تهران",
    fullDesc: "این پروژه شامل ۱۰ طبقه مسکونی، پارکینگ، لابی و امکانات رفاهی کامل است...",
    images: ["/projects/tehran1.jpg", "/projects/tehran2.jpg", "/projects/tehran3.jpg"],
  },
  {
    id: 2,
    title: "پروژه مسکونی تهران",
    shortDesc: "ساختمان ۱۰ طبقه مسکونی در شمال تهران",
    fullDesc: "این پروژه شامل ۱۰ طبقه مسکونی، پارکینگ، لابی و امکانات رفاهی کامل است...",
    images: ["/projects/tehran1.jpg", "/projects/tehran2.jpg", "/projects/tehran3.jpg"],
  },
  {
    id: 3,
    title: "پروژه مسکونی تهران",
    shortDesc: "ساختمان ۱۰ طبقه مسکونی در شمال تهران",
    fullDesc: "این پروژه شامل ۱۰ طبقه مسکونی، پارکینگ، لابی و امکانات رفاهی کامل است...",
    images: ["/projects/tehran1.jpg", "/projects/tehran2.jpg", "/projects/tehran3.jpg"],
  },
];

export default function ConstructionProjects() {
  const [activeProject, setActiveProject] = useState<number | null>(null);

  // 👇 به جای any از SwiperClass | null استفاده می‌کنیم
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null);

  // برای modal: نگه داشتن پروژه‌ای که full-screen باز شده و index تصویر شروع
  const [fullscreenProject, setFullscreenProject] = useState<
    { project: typeof projects[0]; startIndex: number } | null
  >(null);
  const [fullscreenThumbs, setFullscreenThumbs] = useState<SwiperClass | null>(null);

  // باز و بسته کردن پروژه + ست کردن hash در URL
  const toggleProject = (id: number) => {
    setActiveProject((prev) => (prev === id ? null : id));
    if (activeProject === id) {
      history.replaceState(null, "", window.location.pathname);
    } else {
      window.location.hash = `project-${id}`;
    }
  };

  // وقتی صفحه لود شد، hash موجود رو بخونه و تب مربوطه رو باز کنه
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const match = hash.match(/project-(\d+)/);
      if (match) {
        const projectId = parseInt(match[1], 10);
        setActiveProject(projectId);
      }
    }
  }, []);

  // بستن modal با کلید ESC
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setFullscreenProject(null);
    }
    if (fullscreenProject) {
      window.addEventListener("keydown", onKey);
      return () => window.removeEventListener("keydown", onKey);
    }
  }, [fullscreenProject]);

return (
    <div className="flex flex-col min-h-screen font-vazirmatn">
      <Navbar />

      <main className="flex-grow pt-20 bg-gradient-to-b from-gray-50 to-gray-100">
        <div className="container mx-auto px-6 py-12 max-w-4xl">
          <h1 className="text-4xl font-bold text-gray-800 text-center mb-4">
            پروژه‌های ساخت‌وساز
          </h1>
          <p className="text-lg text-gray-500 text-center mb-12">
            لیست پروژه‌های ساختمانی مسکونی (خرید یا مشارکت در ساخت)
          </p>

          {/* لیست پروژه‌ها */}
          <div className="space-y-6">
            {projects.map((project) => (
              <motion.div
                key={project.id}
                id={`project-${project.id}`} // اضافه شدن id برای لینک‌دهی مستقیم
                className="border rounded-xl shadow-lg bg-white overflow-hidden hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                {/* کارت اصلی */}
                <button
                  onClick={() => toggleProject(project.id)}
                  className="w-full text-right px-6 py-5 flex justify-between items-center hover:bg-gray-50 transition-colors"
                >
                  <div>
                    <h2 className="text-xl font-semibold text-gray-800">{project.title}</h2>
                    <p className="text-gray-600">{project.shortDesc}</p>
                  </div>
                  <motion.span
                    animate={{ rotate: activeProject === project.id ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-gray-500 text-xl"
                  >
                    ▼
                  </motion.span>
                </button>

                {/* جزئیات بازشو با انیمیشن */}
                <AnimatePresence>
                  {activeProject === project.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                      className="px-6 pb-6"
                    >
                      <p className="text-gray-700 mb-6">{project.fullDesc}</p>

                      {/* اسلایدر تصاویر با Thumbnail */}
                      <Swiper
                        modules={[Autoplay, Pagination, Thumbs]}
                        autoplay={{ delay: 3000 }}
                        pagination={{ clickable: true }}
                        loop
                        spaceBetween={10}
                        slidesPerView={1}
                        className="rounded-xl shadow-md mb-4"
                        thumbs={{ swiper: thumbsSwiper }}
                      >
                        {project.images.map((src, i) => (
                          <SwiperSlide key={i}>
                            <div
                              className="w-full aspect-[16/9] flex items-center justify-center bg-gray-100 rounded-xl overflow-hidden cursor-pointer"
                              onClick={() =>
                                setFullscreenProject({ project, startIndex: i })
                              }
                            >
                              <img
                                src={src}
                                alt={project.title}
                                className="w-full h-full object-contain"
                              />
                            </div>
                          </SwiperSlide>
                        ))}
                      </Swiper>

                      {/* Thumbnail Slider */}
                      <Swiper
                        modules={[Thumbs, Autoplay]}
                        onSwiper={setThumbsSwiper}
                        spaceBetween={10}
                        slidesPerView={4}
                        watchSlidesProgress
                        loop
                        autoplay={{ delay: 3000, disableOnInteraction: false }}
                        className="cursor-pointer"
                      >
                        {project.images.map((src, i) => (
                          <SwiperSlide key={i}>
                            <div className="w-full aspect-square flex items-center justify-center bg-gray-100 rounded-lg overflow-hidden">
                              <img
                                src={src}
                                alt={`${project.title} thumbnail`}
                                className="w-full h-full object-contain"
                              />
                            </div>
                          </SwiperSlide>
                        ))}
                      </Swiper>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      <Footer />

      {/* Modal تمام صفحه با اسلایدر کامل */}
      <AnimatePresence>
        {fullscreenProject && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-95 flex flex-col items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setFullscreenProject(null)}
          >
            <button
              onClick={() => setFullscreenProject(null)}
              className="absolute top-6 right-6 text-white text-3xl font-bold hover:text-red-400 z-60"
            >
              ✕
            </button>

            <div
              className="w-full max-w-5xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Swiper
                modules={[Navigation, Pagination, Thumbs]}
                navigation
                pagination={{ clickable: true }}
                loop
                spaceBetween={10}
                slidesPerView={1}
                className="rounded-xl shadow-lg mb-4"
                thumbs={{ swiper: fullscreenThumbs }}
                initialSlide={fullscreenProject.startIndex ?? 0}
              >
                {fullscreenProject.project.images.map((src: string, i: number) => (
                  <SwiperSlide key={i}>
                    <div className="w-full aspect-[16/9] flex items-center justify-center bg-gray-900 rounded-xl overflow-hidden">
                      <img
                        src={src}
                        alt={fullscreenProject.project.title}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              <Swiper
                modules={[Thumbs]}
                onSwiper={setFullscreenThumbs}
                spaceBetween={10}
                slidesPerView={6}
                watchSlidesProgress
                loop
                className="cursor-pointer"
              >
                {fullscreenProject.project.images.map((src: string, i: number) => (
                  <SwiperSlide key={i}>
                    <div className="w-full aspect-square flex items-center justify-center bg-gray-800 rounded-lg overflow-hidden">
                      <img
                        src={src}
                        alt={`${fullscreenProject.project.title} thumbnail`}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

