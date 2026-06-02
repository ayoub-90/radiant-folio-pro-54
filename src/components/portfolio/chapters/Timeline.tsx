import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ChapterHeading } from "../ChapterHeading";
import { experience } from "@/data/experience";

export function Timeline() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 70%", "end 30%"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="px-6 py-24 md:px-16 md:py-32 lg:px-24"
      style={{ backgroundColor: "#FAF8F3" }}
    >
      <ChapterHeading number="02" kicker="Chapter Two" title="Experience Timeline" />

      <div ref={ref} className="relative mx-auto max-w-4xl">
        {/* base line */}
        <div className="absolute left-4 top-0 h-full w-px bg-indigo/15 md:left-1/2 md:-translate-x-1/2" />
        {/* progress line */}
        <motion.div
          style={{ height: lineHeight }}
          className="absolute left-4 top-0 w-[2px] bg-gradient-to-b from-indigo to-coral md:left-1/2 md:-translate-x-1/2"
        />

        <div className="space-y-20">
          {experience.map((node, i) => {
            const isLeft = i % 2 === 0;
            return (
              <motion.div
                key={node.company}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7 }}
                className="relative pl-14 md:pl-0"
              >
                {/* node dot */}
                <div className="absolute left-4 top-2 -translate-x-1/2 md:left-1/2">
                  <div className="relative h-4 w-4 rounded-full border-2 border-indigo bg-white pulse-glow" />
                </div>

                <div className={`md:grid md:grid-cols-2 md:gap-12`}>
                  <div className={`${isLeft ? "md:pr-12 md:text-right" : "md:order-2 md:pl-12"}`}>
                    <div className="font-sub text-[10px] uppercase tracking-[0.3em] text-coral">
                      {node.period}
                    </div>
                    <h3 className="font-display mt-2 text-2xl font-bold text-foreground md:text-3xl">
                      {node.role}
                    </h3>
                    <div className="font-mono mt-1 text-sm text-indigo">
                      {node.company} · {node.location}
                    </div>
                  </div>
                  <div className={`mt-4 md:mt-0 ${isLeft ? "" : "md:order-1 md:pr-12 md:text-right"}`}>
                    <div className={`rounded-xl border-l-4 border-coral bg-surface p-5 shadow-soft`}>
                      <ul className="space-y-2">
                        {node.highlights.map((h, k) => (
                          <li
                            key={k}
                            className="text-sm leading-relaxed text-foreground/85 md:text-base"
                          >
                            <span className="text-indigo">▸</span> {h}
                          </li>
                        ))}
                      </ul>
                      <div className={`mt-4 flex flex-wrap gap-2 ${isLeft ? "" : "md:justify-end"}`}>
                        {node.tech.map((t) => (
                          <span
                            key={t}
                            className="font-mono rounded-sm px-2 py-1 text-[10px] uppercase tracking-wider"
                            style={{ backgroundColor: "#EEF0FF", color: "var(--indigo)" }}
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
