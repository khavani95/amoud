"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/thumbs";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

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
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

  // برای modal
  const [fullscreenImage, setFullscreenImage] = useState<string | null>(null);

  const toggleProject = (id: number) => {
    setActiveProject((prev) => (prev === id ? null : id));
  };

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

          <div className="space-y-6">
            {projects.map((project) => (
              <motion.div
                key={project.id}
                className="border rounded-xl shadow-lg bg-white overflow-hidden hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
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

                      {/* اسلایدر اصلی */}
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
                              onClick={() => setFullscreenImage(src)}
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
                        modules={[Thumbs]}
                        onSwiper={setThumbsSwiper}
                        spaceBetween={10}
                        slidesPerView={4}
                        watchSlidesProgress
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

      {/* Modal تمام صفحه */}
      <AnimatePresence>
        {fullscreenImage && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* دکمه بستن */}
            <button
              onClick={() => setFullscreenImage(null)}
              className="absolute top-6 right-6 text-white text-3xl font-bold hover:text-red-400"
            >
              ✕
            </button>

            <motion.img
              src={fullscreenImage}
              alt="Fullscreen"
              className="max-w-[90%] max-h-[90%] object-contain rounded-lg shadow-lg"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
