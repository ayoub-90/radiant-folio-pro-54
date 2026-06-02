import { motion } from "framer-motion";

interface Props {
  number: string;
  kicker: string;
  title: string;
}

export function ChapterHeading({ number, kicker, title }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="mb-12 flex items-end justify-between gap-8 border-b pb-6 md:mb-20"
      style={{ borderColor: "var(--border)" }}
    >
      <div>
        <div className="font-sub text-xs uppercase tracking-[0.3em] text-coral">
          {number} — {kicker}
        </div>
        <h2 className="font-display mt-4 text-3xl font-bold leading-[1.02] tracking-tight text-foreground md:text-5xl lg:text-6xl">
          {title}
        </h2>
      </div>
    </motion.div>
  );
}
