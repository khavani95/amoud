"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

// تعریف تایپ برای پروژه‌ها
interface Project {
  id: number;
  title: string;
  shortDesc: string;
  fullDesc: string;
  images: string[];
}

export default function ConstrunctionProjects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [activeProject, setActiveProject] = useState<number | null>(null);
  const [fullscreenProject, setFullscreenProject] = useState<{
    project: Project;
    startIndex: number;
  } | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);

  // گرفتن پروژه‌ها از API
  useEffect(() => {
    async function fetchProjects() {
      try {
        const res = await fetch("/api/construnction-projects");
        const data: Project[] = await res.json();
        setProjects(data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    }
    fetchProjects();
  }, []);

  const toggleProject = (id: number) => {
    setActiveProject((prev) => (prev === id ? null : id));
    if (activeProject === id) {
      history.replaceState(null, "", window.location.pathname);
    } else {
      window.location.hash = `project-${id}`;
    }
  };

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

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setFullscreenProject(null);
    }
    if (fullscreenProject) {
      window.addEventListener("keydown", onKey);
      return () => window.removeEventListener("keydown", onKey);
    }
  }, [fullscreenProject]);

  useEffect(() => {
    if (activeProject !== null && containerRef.current) {
      requestAnimationFrame(() => {
        const el = document.getElementById(`project-${activeProject}`);
        if (el) {
          const isMobile = window.innerWidth <= 768;
          el.scrollIntoView({
            behavior: "smooth",
            block: isMobile ? "start" : "nearest",
            inline: "nearest",
          });
          if (containerRef.current) {
            containerRef.current.scrollTop =
              el.offsetTop - containerRef.current.offsetTop;
          }
        }
      });
    }
  }, [activeProject]);

  return (
    <div className="flex flex-col min-h-screen font-vazirmatn">
      <Navbar />

      <main className="flex-grow pt-20 bg-gradient-to-b from-gray-50 to-gray-100">
        <div
          ref={containerRef}
          className="container mx-auto px-6 py-12 max-w-4xl"
        >
          <h1 className="text-4xl font-bold text-gray-800 text-center mb-4">
            پروژه‌های ساختمانی
          </h1>
          <p className="text-lg text-gray-500 text-center mb-12">
            لیست پروژه‌های مشارکت در ساخت و خرید و مشارکت
          </p>

          <div className="space-y-6">
            {projects.map((project) => (
              <motion.div
                key={project.id}
                id={`project-${project.id}`}
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
                    <h2 className="text-xl font-semibold text-gray-800">
                      {project.title}
                    </h2>
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
                      <Swiper
                        modules={[Autoplay, Pagination, Navigation]}
                        autoplay={{ delay: 3000 }}
                        pagination={{ clickable: true }}
                        navigation={true}
                        loop
                        spaceBetween={10}
                        slidesPerView={1}
                        className="rounded-xl shadow-md mb-4"
                      >
                        {project.images.map((src, i) => (
                          <SwiperSlide key={i}>
                            <div
                              className="w-full aspect-[16/9] flex items-center justify-center bg-gray-100 rounded-xl overflow-hidden cursor-pointer"
                              onClick={() =>
                                setFullscreenProject({ project, startIndex: i })
                              }
                            >
                              <Image
                                src={src}
                                alt={project.title}
                                width={1280}
                                height={720}
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
                modules={[Navigation, Pagination]}
                navigation
                pagination={{ clickable: true }}
                loop
                spaceBetween={10}
                slidesPerView={1}
                className="rounded-xl shadow-lg mb-4"
                initialSlide={fullscreenProject.startIndex ?? 0}
              >
                {fullscreenProject.project.images.map((src, i) => (
                  <SwiperSlide key={i}>
                    <div className="w-full aspect-[16/9] flex items-center justify-center bg-gray-900 rounded-xl overflow-hidden">
                      <Image
                        src={src}
                        alt={fullscreenProject.project.title}
                        width={1280}
                        height={720}
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
