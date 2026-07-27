"use client";
import { useState } from "react";
import type { FeaturedProject } from "@/data/company";

/**
 * Featured project card: a 1.6fr/1fr photo grid (1 main + 2 small) above the
 * text block, per the handoff. Missing photos — the client has not supplied
 * images for 7 of the 8 projects — render as labelled placeholders.
 */
export default function ProjectCard({ project }: { project: FeaturedProject }) {
  const [failed, setFailed] = useState<Record<number, boolean>>({});
  const slots = [0, 1, 2];

  return (
    <article className="card flex flex-col overflow-hidden">
      <div
        className="grid h-[235px] flex-none gap-[3px] bg-[var(--navy-deep)]"
        style={{
          gridTemplateColumns: "1.6fr 1fr",
          gridTemplateRows: "1fr 1fr",
        }}
      >
        {slots.map((i) => {
          const src = project.images[i];
          const show = src && !failed[i];
          return (
            <div
              key={i}
              className="relative overflow-hidden"
              style={i === 0 ? { gridRow: "1 / span 2" } : undefined}
            >
              {show ? (
                <img
                  src={src}
                  alt={project.title}
                  onError={() => setFailed((f) => ({ ...f, [i]: true }))}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              ) : (
                <Placeholder main={i === 0} />
              )}
            </div>
          );
        })}
      </div>

      <div className="flex flex-1 flex-col gap-2 p-5">
        <div className="flex items-center gap-2.5">
          <span className="bullet-sm" />
          <h3 className="text-base font-extrabold text-white">
            {project.title}
          </h3>
        </div>
        <p className="text-[12.5px] leading-[1.9] text-[var(--text-secondary)]">
          {project.desc}
        </p>
        <div className="mt-auto pt-2 text-[11.5px] font-bold text-[var(--copper)]">
          {project.client}
        </div>
      </div>
    </article>
  );
}

function Placeholder({ main }: { main: boolean }) {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-[var(--navy-deep)]">
      <img
        src="/brand/logo.png"
        alt=""
        aria-hidden="true"
        className={`logo-white opacity-20 ${main ? "h-10" : "h-6"} w-auto`}
      />
      {main && (
        <span className="px-4 text-center text-[11px] text-[var(--text-muted)]">
          تصویر به‌زودی
        </span>
      )}
    </div>
  );
}
