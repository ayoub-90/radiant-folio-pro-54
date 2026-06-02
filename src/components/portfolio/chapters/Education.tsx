import { motion } from "framer-motion";
import { ChapterHeading } from "../ChapterHeading";

const certs = [
  { name: "Bootcamp Data Analyst", org: "Simplon Maghreb", status: "done" as const },
  { name: "Bootcamp Data Science", org: "Simplon Maghreb", status: "done" as const },
  { name: "AWS Cloud Practitioner Essentials", org: "Amazon Web Services", status: "progress" as const },
  { name: "AWS Certified Machine Learning – Specialty", org: "Amazon Web Services", status: "progress" as const },
];

export function Education() {
  return (
    <section
      id="education"
      aria-labelledby="education-heading"
      className="px-6 py-24 md:px-16 md:py-32 lg:px-24"
    >
      <ChapterHeading number="05" kicker="Chapter Five" title="Certifications & Education" />

      <div className="grid gap-10 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="rounded-xl border-l-4 border-coral bg-surface p-8 shadow-soft"
        >
          <div className="font-sub mb-4 text-[10px] uppercase tracking-[0.3em] text-coral">
            🎓 Education
          </div>
          <h3 className="font-display text-2xl font-bold text-foreground md:text-3xl">
            Engineer's Degree — Big Data & Artificial Intelligence
          </h3>
          <div className="font-mono mt-3 text-sm text-indigo">ISGA Rabat · 2022 – 2025</div>
          <div className="mt-6 flex flex-wrap gap-2">
            {["Machine Learning", "Deep Learning", "NLP", "Data Warehouse", "ETL", "Hadoop", "Spark"].map((s) => (
              <span
                key={s}
                className="font-mono rounded-sm px-3 py-1 text-xs"
                style={{ backgroundColor: "#EEF0FF", color: "var(--indigo)" }}
              >
                {s}
              </span>
            ))}
          </div>
        </motion.div>

        <div className="space-y-4">
          {certs.map((c, i) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className={`relative rounded-xl border-l-4 bg-surface p-6 shadow-soft transition-all hover:-translate-y-0.5 ${
                c.status === "done" ? "border-indigo" : "border-coral"
              }`}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div
                    className="font-sub text-[10px] uppercase tracking-[0.3em]"
                    style={{ color: c.status === "done" ? "var(--indigo)" : "var(--coral)" }}
                  >
                    {c.status === "done" ? "✓ Certified" : "⏳ In Progress"}
                  </div>
                  <h4 className="font-display mt-2 text-lg font-bold text-foreground">{c.name}</h4>
                  <div className="font-mono mt-1 text-xs text-muted-foreground">{c.org}</div>
                </div>
                <div
                  className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 font-mono text-xs ${
                    c.status === "done"
                      ? "border-indigo bg-indigo/5 text-indigo"
                      : "border-coral bg-coral/5 text-coral"
                  }`}
                >
                  {c.status === "done" ? "✓" : "··"}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
