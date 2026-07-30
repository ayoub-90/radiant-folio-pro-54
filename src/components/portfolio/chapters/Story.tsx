import { motion } from "framer-motion";
import { ChapterHeading } from "../ChapterHeading";
import { skillClusters } from "@/data/skills";
import { useT } from "@/lib/i18n";

const PARAGRAPH_KEYS = [
  "I'm Ayoub, a Big Data & AI Engineer with a Data Science and Analytics edge. I hold an engineering degree in Big Data & AI from ISGA Rabat, and over the past few years I've built systems that turn raw, messy data into clear decisions from real-time pipelines to predictive models to dashboards executives actually read.\n\n At OCP Group, one of Africa's largest industrial companies, I worked with real-time IoT data, driving reporting and quality processes at scale. At ISICOD, I designed hybrid recommendation systems, trained LSTM models that lifted forecast accuracy by 12%, and shipped an LLM-powered semantic search engine that cut ETL processing time by 30%.\n\nI move fluidly across the full data stack Kafka streaming, Medallion architectures, Star Schema design, cloud pipelines (AWS, Databricks, Azure), and BI storytelling in Power BI and Tableau. I care about rigor as much as impact: clean architecture, reproducible pipelines, and dashboards that tell a story at a glance.\n\nRemote-ready. Detail-obsessed. Built to ship.",
];

function Monogram() {
  return (
    <div className="relative aspect-square h-full w-full">
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
      </svg>

      <img
        src="/me.png"
        alt=""
        className="absolute inset-0 m-auto h-[72%] w-[72%] rounded-full object-cover"
      />
    </div>
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
              className="whitespace-pre-line text-lg leading-relaxed text-foreground md:text-xl"
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
