import { motion } from "framer-motion";
import { ChapterHeading } from "../ChapterHeading";
import { useT } from "@/lib/i18n";

const languages = [
  { flag: "🇲🇦", name: "Arabic", level: "Native" },
  { flag: "🇫🇷", name: "French", level: "B2 Intermediate" },
  { flag: "🇬🇧", name: "English", level: "Professional" },
];

const softSkills = [
  {
    icon: "🔍",
    title: "Rigorous & Detail-Oriented",
    quote: "I document every transformation, every DAX measure, every architectural choice.",
  },
  {
    icon: "🤝",
    title: "Team Collaborator",
    quote: "7+ projects delivered in squads using GitHub, Trello, Jira, Confluence, and Agile workflows.",
  },
  {
    icon: "📡",
    title: "Remote-Ready",
    quote: "Built for async work, structured communication, and clear written documentation.",
  },
];

export function Languages() {
  const t = useT();
  return (
    <section
      id="languages"
      aria-labelledby="languages-heading"
      className="px-6 py-24 md:px-16 md:py-32 lg:px-24"
    >
      <ChapterHeading number="07" kicker={t("Chapter Seven")} title={t("Languages & Soft Skills")} />

      <div className="mb-16 flex flex-wrap gap-3">
        {languages.map((l, i) => (
          <motion.div
            key={l.name}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="flex items-center gap-3 rounded-full bg-surface px-5 py-3 shadow-soft"
          >
            <span className="text-2xl">{l.flag}</span>
            <div>
              <div className="font-display text-base font-bold text-foreground">{t(l.name)}</div>
              <div className="font-sub text-[10px] uppercase tracking-[0.2em] text-indigo">
                {t(l.level)}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {softSkills.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="rounded-xl border-l-4 border-indigo bg-surface p-6 shadow-soft transition-all hover:-translate-y-1 hover:shadow-lift"
          >
            <div className="text-3xl">{s.icon}</div>
            <h3 className="font-display mt-4 text-lg font-bold text-foreground">{t(s.title)}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{t(s.quote)}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
