"use client";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { ChevronDown, X, Expand } from "lucide-react";

export interface Project {
  id: number;
  title: string;
  shortDesc: string;
  fullDesc: string;
  images: string[];
}

/* Some rows in the source spreadsheets point at images that are not present in
   /public/projects. Track the failures so those slides fall back to a branded
   placeholder instead of a broken-image icon. */
function useBrokenImages() {
  const [broken, setBroken] = useState<Record<string, boolean>>({});
  const markBroken = (src: string) =>
    setBroken((b) => (b[src] ? b : { ...b, [src]: true }));
  return { broken, markBroken };
}

function ImagePlaceholder({ title }: { title: string }) {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-[#0d0d10] text-center">
      <img src="/logo.webp" alt="" className="logo-invert h-14 w-auto opacity-40" />
      <span className="px-6 text-sm text-[var(--ink-muted)]">{title}</span>
    </div>
  );
}

export default function ProjectAccordion({ endpoint }: { endpoint: string }) {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const { broken, markBroken } = useBrokenImages();
  const [activeProject, setActiveProject] = useState<number | null>(null);
  const [fullscreen, setFullscreen] = useState<{
    project: Project;
    startIndex: number;
  } | null>(null);

  useEffect(() => {
    let alive = true;
    (async () => {
      try {
        const res = await fetch(endpoint);
        const data = await res.json();
        if (alive) setProjects(Array.isArray(data) ? data : []);
      } catch (err) {
        console.error("Error fetching projects:", err);
      } finally {
        if (alive) setLoading(false);
      }
    })();
    return () => {
      alive = false;
    };
  }, [endpoint]);

  // Open from #project-N on load
  useEffect(() => {
    const match = window.location.hash.match(/project-(\d+)/);
    if (match) setActiveProject(parseInt(match[1], 10));
  }, []);

  // Scroll the opened item into view
  useEffect(() => {
    if (activeProject === null) return;
    requestAnimationFrame(() => {
      document
        .getElementById(`project-${activeProject}`)
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }, [activeProject]);

  // Esc closes the lightbox
  useEffect(() => {
    if (!fullscreen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setFullscreen(null);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [fullscreen]);

  const toggle = (id: number) => {
    setActiveProject((prev) => {
      const next = prev === id ? null : id;
      if (next === null)
        history.replaceState(null, "", window.location.pathname);
      else history.replaceState(null, "", `#project-${id}`);
      return next;
    });
  };

  if (loading) {
    return (
      <div className="space-y-4">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="h-24 animate-pulse rounded-2xl border border-[var(--line)] bg-[var(--surface)]"
          />
        ))}
      </div>
    );
  }

  if (!projects.length) {
    return (
      <p className="py-12 text-center text-[var(--ink-muted)]">
        در حال حاضر پروژه‌ای برای نمایش وجود ندارد.
      </p>
    );
  }

  return (
    <>
      <div className="space-y-4">
        {projects.map((project, i) => {
          const open = activeProject === project.id;
          return (
            <motion.div
              key={project.id}
              id={`project-${project.id}`}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: Math.min(i * 0.05, 0.3) }}
              className={`overflow-hidden rounded-2xl border transition-colors duration-300 ${
                open
                  ? "border-[var(--gold)]/40 bg-[var(--surface-2)]"
                  : "border-[var(--line)] bg-[var(--surface)] hover:border-[var(--line-strong)]"
              }`}
            >
              <button
                onClick={() => toggle(project.id)}
                aria-expanded={open}
                className="flex w-full items-center justify-between gap-4 px-6 py-6 text-right transition-colors hover:bg-white/[0.03]"
              >
                <div className="flex items-start gap-4">
                  <span className="display-en mt-0.5 text-sm font-bold text-[var(--gold)]/70">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h2 className="text-lg font-bold text-[var(--ink)]">
                      {project.title}
                    </h2>
                    {project.shortDesc && (
                      <p className="mt-1 text-sm text-[var(--ink-muted)]">
                        {project.shortDesc}
                      </p>
                    )}
                  </div>
                </div>
                <motion.span
                  animate={{ rotate: open ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className={`shrink-0 rounded-full border p-2 transition-colors ${
                    open
                      ? "border-[var(--gold)]/40 text-[var(--gold)]"
                      : "border-[var(--line)] text-[var(--ink-muted)]"
                  }`}
                >
                  <ChevronDown className="h-4 w-4" />
                </motion.span>
              </button>

              <AnimatePresence initial={false}>
                {open && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-7">
                      {project.fullDesc && (
                        <p className="mb-6 leading-8 text-[var(--ink-soft)]">
                          {project.fullDesc}
                        </p>
                      )}
                      {!!project.images?.length && (
                        <Swiper
                          modules={[Autoplay, Pagination, Navigation]}
                          autoplay={{ delay: 4000, disableOnInteraction: true }}
                          pagination={{ clickable: true }}
                          navigation
                          loop={project.images.length > 1}
                          spaceBetween={12}
                          slidesPerView={1}
                          className="overflow-hidden rounded-2xl border border-[var(--line)]"
                        >
                          {project.images.map((src, idx) => (
                            <SwiperSlide key={idx}>
                              <button
                                onClick={() =>
                                  setFullscreen({ project, startIndex: idx })
                                }
                                className="group relative flex aspect-[16/9] w-full items-center justify-center overflow-hidden bg-[#0d0d10]"
                              >
                                {broken[src] ? (
                                  <ImagePlaceholder title={project.title} />
                                ) : (
                                  <>
                                    <Image
                                      src={src}
                                      alt={project.title}
                                      width={1280}
                                      height={720}
                                      onError={() => markBroken(src)}
                                      className="h-full w-full object-contain transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <span className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full bg-black/60 px-3 py-1.5 text-xs text-white opacity-0 backdrop-blur transition-opacity group-hover:opacity-100">
                                      <Expand className="h-3.5 w-3.5" />
                                      بزرگ‌نمایی
                                    </span>
                                  </>
                                )}
                              </button>
                            </SwiperSlide>
                          ))}
                        </Swiper>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {fullscreen && (
          <motion.div
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/95 p-4 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setFullscreen(null)}
          >
            <button
              onClick={() => setFullscreen(null)}
              aria-label="بستن"
              className="absolute top-6 right-6 z-10 rounded-full border border-white/20 p-3 text-white transition-colors hover:border-[var(--gold)] hover:text-[var(--gold)]"
            >
              <X className="h-5 w-5" />
            </button>
            <div
              className="w-full max-w-5xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Swiper
                modules={[Navigation, Pagination]}
                navigation
                pagination={{ clickable: true }}
                loop={fullscreen.project.images.length > 1}
                spaceBetween={12}
                slidesPerView={1}
                initialSlide={fullscreen.startIndex ?? 0}
                className="rounded-2xl"
              >
                {fullscreen.project.images.map((src, idx) => (
                  <SwiperSlide key={idx}>
                    <div className="flex aspect-[16/9] w-full items-center justify-center overflow-hidden rounded-2xl bg-[#0d0d10]">
                      {broken[src] ? (
                        <ImagePlaceholder title={fullscreen.project.title} />
                      ) : (
                        <Image
                          src={src}
                          alt={fullscreen.project.title}
                          width={1600}
                          height={900}
                          onError={() => markBroken(src)}
                          className="h-full w-full object-contain"
                        />
                      )}
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              <p className="mt-4 text-center text-sm text-white/70">
                {fullscreen.project.title}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
