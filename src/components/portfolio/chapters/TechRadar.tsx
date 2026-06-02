import { motion } from "framer-motion";
import { ChapterHeading } from "../ChapterHeading";
import { radarZones } from "@/data/skills";
import { useT } from "@/lib/i18n";

export function TechRadar() {
  const t = useT();
  return (
    <section
      id="stack"
      aria-labelledby="stack-heading"
      className="bg-surface px-6 py-24 md:px-16 md:py-32 lg:px-24"
    >
      <ChapterHeading number="06" kicker={t("Chapter Six")} title={t("Tools & Stack")} />

      <div className="mx-auto max-w-5xl space-y-10">
        {radarZones.map((zone, zi) => (
          <motion.div
            key={zone.level}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: zi * 0.08 }}
            className="border-b border-border/60 pb-8 last:border-b-0"
          >
            <div
              className="font-sub mb-4 text-[11px] uppercase tracking-[0.3em]"
              style={{ color: zi < 2 ? "var(--indigo)" : "var(--coral)" }}
            >
              {t(zone.level)}
            </div>
            <div className="flex flex-wrap gap-x-6 gap-y-3">
              {zone.skills.map((s) => (
                <span
                  key={s}
                  className="font-sub text-base text-foreground md:text-lg"
                >
                  {s}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
