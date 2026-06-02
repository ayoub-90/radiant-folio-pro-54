import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChapterHeading } from "../ChapterHeading";
import { projects, projectCategories, type Project, type ProjectCategory } from "@/data/projects";
import { useT } from "@/lib/i18n";

export function Projects() {
  const t = useT();
  const [filter, setFilter] = useState<"All" | ProjectCategory>("All");
  const [active, setActive] = useState<Project | null>(null);

  const filtered = useMemo(
    () => (filter === "All" ? projects : projects.filter((p) => p.categories.includes(filter))),
    [filter],
  );

  return (
    <section id="work" aria-labelledby="work-heading" className="px-6 py-24 md:px-16 md:py-32 lg:px-24">
      <ChapterHeading
        number="03"
        kicker={t("Chapter Three")}
        title={t("Fourteen projects. Real data. Real impact.")}
      />

      <div className="mb-12 flex flex-wrap gap-2">
        {projectCategories.map((cat) => {
          const isActive = filter === cat;
          return (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`font-sub rounded-sm border px-4 py-2 text-[11px] uppercase tracking-[0.18em] transition-all ${
                isActive
                  ? "border-indigo bg-indigo text-white"
                  : "border-indigo/30 bg-transparent text-indigo hover:border-indigo hover:bg-indigo/5"
              }`}
            >
              {t(cat)}
            </button>
          );
        })}
      </div>

      <motion.div layout className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filtered.map((p) => (
            <motion.article
              key={p.id}
              layout
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              className="group relative flex flex-col rounded-xl border-l-4 border-transparent bg-surface p-6 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:border-indigo hover:shadow-lift"
            >
              <div
                className="relative mb-6 aspect-[16/9] overflow-hidden rounded-md"
                style={{ background: "linear-gradient(135deg, var(--chip-bg) 0%, var(--chip-bg-warm) 100%)" }}
              >
                <div className="absolute inset-0 opacity-70">
                  <svg viewBox="0 0 160 90" className="h-full w-full" aria-hidden>
                    <defs>
                      <linearGradient id={`g${p.id}`} x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="var(--indigo)" stopOpacity="0.85" />
                        <stop offset="100%" stopColor="var(--coral)" stopOpacity="0.55" />
                      </linearGradient>
                    </defs>
                    <polyline
                      points={Array.from({ length: 12 })
                        .map((_, i) => `${i * 14 + 5},${45 + Math.sin(i + p.id) * 25}`)
                        .join(" ")}
                      fill="none"
                      stroke={`url(#g${p.id})`}
                      strokeWidth="1.5"
                    />
                    {Array.from({ length: 12 }).map((_, i) => (
                      <circle
                        key={i}
                        cx={i * 14 + 5}
                        cy={45 + Math.sin(i + p.id) * 25}
                        r="1.4"
                        fill="var(--indigo)"
                      />
                    ))}
                  </svg>
                </div>
                <div className="font-mono absolute bottom-3 left-3 text-[10px] uppercase tracking-[0.25em] text-indigo">
                  P{String(p.id).padStart(2, "0")}
                </div>
              </div>

              <div className="font-sub mb-3 flex flex-wrap gap-2 text-[10px] uppercase tracking-[0.2em] text-coral">
                {p.categories.map((c) => (
                  <span key={c}>{t(c)}</span>
                ))}
              </div>
              <h3 className="font-display text-xl font-bold leading-tight text-foreground">
                {t(p.title)}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{t(p.impact)}</p>

              <div className="mt-4 flex flex-wrap gap-1.5">
                {p.tech.slice(0, 5).map((tech) => (
                  <span
                    key={tech}
                    className="font-mono rounded-sm px-2 py-0.5 text-[10px]"
                    style={{ backgroundColor: "var(--chip-bg)", color: "var(--indigo)" }}
                  >
                    {tech}
                  </span>
                ))}
                {p.tech.length > 5 && (
                  <span className="font-mono px-2 py-0.5 text-[10px] text-muted-foreground">
                    +{p.tech.length - 5}
                  </span>
                )}
              </div>

              <button
                onClick={() => setActive(p)}
                className="font-mono mt-6 inline-flex items-center gap-2 self-start text-[11px] uppercase tracking-[0.2em] text-indigo transition-all hover:gap-3 hover:text-coral"
              >
                {t("View Details")} <span>→</span>
              </button>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>

      <ProjectModal project={active} onClose={() => setActive(null)} />
    </section>
  );
}

function ProjectModal({ project, onClose }: { project: Project | null; onClose: () => void }) {
  const t = useT();
  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[200] flex items-center justify-center bg-foreground/40 p-4 backdrop-blur-md"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.95, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.95, y: 20 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-h-[85vh] w-full max-w-3xl overflow-y-auto rounded-xl border-l-4 border-indigo bg-surface p-8 shadow-lift md:p-12"
          >
            <button
              onClick={onClose}
              aria-label="Close"
              className="font-mono absolute right-4 top-4 rounded-sm border border-indigo/30 px-3 py-1 text-xs text-indigo transition-colors hover:border-coral hover:text-coral"
            >
              {t("CLOSE ✕")}
            </button>
            <div className="font-sub mb-3 flex flex-wrap gap-2 text-[10px] uppercase tracking-[0.25em] text-coral">
              {project.categories.map((c) => (
                <span key={c}>{t(c)}</span>
              ))}
            </div>
            <h3 className="font-display text-2xl font-bold text-foreground md:text-4xl">
              {t(project.title)}
            </h3>
            <p className="mt-4 text-base leading-relaxed text-indigo">{t(project.impact)}</p>
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground md:text-base">
              {t(project.details)}
            </p>
            <div className="mt-8">
              <div className="font-sub mb-3 text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                {t("Tech Stack")}
              </div>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="font-mono rounded-sm px-3 py-1 text-xs"
                    style={{ backgroundColor: "var(--chip-bg)", color: "var(--indigo)" }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            {project.duration && (
              <div className="font-mono mt-6 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                {t("Duration")} · {project.duration}
              </div>
            )}
            {project.link && (
              <a
                href={project.link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-editorial mt-8"
              >
                {t(project.link.label)} ↗
              </a>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
