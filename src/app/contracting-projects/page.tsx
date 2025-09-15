"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

interface Project {
  id: number;
  title: string;
  shortDesc: string;
  fullDesc: string;
  images: string[] | null;
}

export default function ContractingProjects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [fullscreenProject, setFullscreenProject] = useState<{
    project: Project;
    startIndex: number;
  } | null>(null);

  useEffect(() => {
    async function fetchProjects() {
      try {
        const res = await fetch("/api/projects");
        const data = await res.json();
        setProjects(data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    }
    fetchProjects();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">پروژه‌های ساختمانی</h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition"
          >
            <h2 className="text-xl font-bold mb-2">{project.title}</h2>
            <p className="text-gray-600 mb-4">{project.shortDesc}</p>

            <div className="rounded-xl shadow-md mb-4">
              {Array.isArray(project.images) && project.images.length > 0 ? (
                <Swiper
                  modules={[Navigation, Pagination]}
                  navigation
                  pagination={{ clickable: true }}
                  className="rounded-xl"
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
              ) : (
                <div className="w-full aspect-[16/9] flex items-center justify-center bg-gray-100 rounded-xl text-gray-500">
                  تصویری موجود نیست
                </div>
              )}
            </div>

            <p className="text-gray-700">{project.fullDesc}</p>
          </div>
        ))}
      </div>

      {/* Fullscreen gallery */}
      {fullscreenProject && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex flex-col z-50">
          <button
            className="absolute top-4 right-4 text-white text-3xl"
            onClick={() => setFullscreenProject(null)}
          >
            ✕
          </button>

          <div className="flex-1 flex items-center justify-center">
            {Array.isArray(fullscreenProject.project.images) &&
            fullscreenProject.project.images.length > 0 ? (
              <Swiper
                modules={[Navigation, Pagination]}
                navigation
                pagination={{ clickable: true }}
                initialSlide={fullscreenProject.startIndex}
                className="w-full h-full"
              >
                {fullscreenProject.project.images.map((src, i) => (
                  <SwiperSlide key={i}>
                    <div className="w-full h-full flex items-center justify-center">
                      <Image
                        src={src}
                        alt={fullscreenProject.project.title}
                        width={1920}
                        height={1080}
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            ) : (
              <div className="text-white text-xl">تصویری موجود نیست</div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
