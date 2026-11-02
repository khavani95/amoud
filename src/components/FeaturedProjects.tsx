"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Reveal from "./Reveal";
import { featuredProjects, type FeaturedProject } from "@/data/company";

/** Defaults to the contracting portfolio; pass `projects` for another set. */
export default function FeaturedProjects({
  projects = featuredProjects,
  label,
}: {
  projects?: FeaturedProject[];
  label?: string;
}) {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {projects.map((p, i) => (
        <Reveal key={p.id} delay={Math.min(i * 60, 300)}>
          <Card project={p} label={label} />
        </Reveal>
      ))}
    </div>
  );
}

function Card({
  project,
  label,
}: {
  project: FeaturedProject;
  label?: string;
}) {
  const [failed, setFailed] = useState(false);
  const cover = project.images[0];
  const showImage = cover && !failed;
  const badge = project.area ?? label;

  const body = (
    <>
      {showImage ? (
        <div className="relative aspect-[16/10] overflow-hidden bg-[#0d0d10]">
          <img
            src={cover}
            alt={project.title}
            loading="lazy"
            onError={() => setFailed(true)}
            className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
          {badge && (
            <span className="absolute top-4 right-4 rounded-full bg-black/70 px-3 py-1 text-xs font-bold text-[var(--gold)] backdrop-blur">
              {badge}
            </span>
          )}
        </div>
      ) : (
        /* No photograph yet — a slim branded header instead of an empty well. */
        <div className="flex items-center justify-between gap-4 border-b border-[var(--line)] bg-[#0d0d10] px-6 py-4">
          <img
            src="/brand/logo.png"
            alt=""
            aria-hidden="true"
            className="logo-invert h-8 w-auto opacity-25"
          />
          {badge && (
            <span className="rounded-full border border-[var(--gold)]/30 px-3 py-1 text-xs font-bold text-[var(--gold)]">
              {badge}
            </span>
          )}
        </div>
      )}

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-bold text-[var(--ink)] transition-colors group-hover:text-[var(--gold)]">
          {project.title}
        </h3>
        <p className="mt-3 text-sm leading-7 text-[var(--ink-muted)]">
          {project.desc}
        </p>
        <div className="mt-auto pt-5">
          <div className="text-xs text-[var(--ink-muted)]">کارفرما</div>
          <div className="mt-1 text-sm font-semibold text-[var(--gold)]">
            {project.client}
          </div>
        </div>
        {project.article && (
          <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[var(--gold)]">
            مشاهدهٔ جزئیات
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          </span>
        )}
      </div>
    </>
  );

  const shell = "card group flex h-full flex-col overflow-hidden rounded-3xl";

  return project.article ? (
    <Link href={`/blog/${project.article}`} className={shell}>
      {body}
    </Link>
  ) : (
    <div className={shell}>{body}</div>
  );
}
