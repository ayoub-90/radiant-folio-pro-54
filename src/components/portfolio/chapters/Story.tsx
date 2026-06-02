import { motion } from "framer-motion";
import { ChapterHeading } from "../ChapterHeading";
import { skillClusters } from "@/data/skills";
import { useT } from "@/lib/i18n";

const PARAGRAPH_KEYS = [
  "I'm Ayoub — a Big Data & AI engineer turned Data Scientist and Analyst. I graduated from ISGA Rabat with a degree in Big Data & Artificial Intelligence, and I've spent the last 3 years turning messy data into systems that think, dashboards that speak, and models that predict.",
  "At OCP Group — one of Africa's largest industrial companies — I ran exploratory data analysis, supported business teams with reporting, and validated data quality at scale. At ISICOD, I built recommendation systems from scratch, trained LSTM models that improved forecast accuracy by 12%, and implemented NLP semantic search pipelines with +30% ETL performance gains.",
  "I work across the full data stack: from raw CSVs to cloud-native pipelines, from Star Schema design to real-time streaming with Kafka, from interactive Power BI dashboards to production ML models. Remote-ready. Detail-obsessed. Impact-driven.",
];

function Monogram() {
  return (
    <svg viewBox="0 0 400 400" className="h-full w-full" aria-hidden>
      <defs>
        <linearGradient id="hexGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="var(--indigo)" stopOpacity="0.9" />
          <stop offset="100%" stopColor="var(--coral)" stopOpacity="0.6" />
        </linearGradient>
      </defs>
      {[60, 100, 140, 180].map((r, i) => (
        <polygon
          key={i}
          points={Array.from({ length: 6 })
            .map((_, k) => {
              const a = (Math.PI / 3) * k - Math.PI / 2;
              return `${200 + r * Math.cos(a)},${200 + r * Math.sin(a)}`;
            })
            .join(" ")}
          fill="none"
          stroke="url(#hexGrad)"
          strokeWidth={i === 0 ? 1.5 : 0.6}
          opacity={1 - i * 0.2}
        />
      ))}
      {Array.from({ length: 18 }).map((_, k) => {
        const a = (Math.PI * 2 * k) / 18;
        const r = 100 + (k % 3) * 40;
        const cx = 200 + r * Math.cos(a);
        const cy = 200 + r * Math.sin(a);
        return <circle key={k} cx={cx} cy={cy} r={k % 4 === 0 ? 4 : 2} fill={k % 4 === 0 ? "var(--coral)" : "var(--indigo)"} />;
      })}
      <text
        x="200"
        y="218"
        textAnchor="middle"
        fontFamily="Clash Display, Syne, sans-serif"
        fontWeight="700"
        fontSize="72"
        fill="currentColor"
        className="text-foreground"
      >
        AE
      </text>
    </svg>
  );
}

export function Story() {
  const t = useT();
  return (
    <section id="story" aria-labelledby="story-heading" className="px-6 py-24 md:px-16 md:py-32 lg:px-24">
      <ChapterHeading number="01" kicker={t("Chapter One")} title={t("Who I Am")} />

      <div className="flex flex-col gap-12 md:flex-row md:items-start md:gap-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative aspect-square w-full max-w-[320px] shrink-0 text-foreground md:max-w-[380px]"
        >
          <div className="absolute inset-0 rounded-full bg-indigo/10 blur-3xl" />
          <div className="relative">
            <Monogram />
          </div>
        </motion.div>

        <div className="space-y-8">
          {PARAGRAPH_KEYS.map((p, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, delay: i * 0.15 }}
              className="text-lg leading-relaxed text-foreground md:text-xl"
            >
              {t(p)}
            </motion.p>
          ))}
        </div>
      </div>

      <div className="mt-20 grid gap-8 md:grid-cols-2">
        {skillClusters.map((cluster, ci) => (
          <motion.div
            key={cluster.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: ci * 0.1 }}
            className="rounded-xl bg-surface p-6 shadow-soft"
          >
            <div className="font-sub mb-4 flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-coral">
              <span className="h-px w-6 bg-coral" />
              {String(ci + 1).padStart(2, "0")} · {t(cluster.name)}
            </div>
            <div className="flex flex-wrap gap-2">
              {cluster.skills.map((s) => (
                <span
                  key={s}
                  className="font-mono cursor-default rounded-full border border-indigo/40 px-3 py-1.5 text-xs text-indigo transition-all hover:-translate-y-0.5 hover:border-indigo hover:shadow-soft"
                  style={{ backgroundColor: "var(--pill-bg)" }}
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
