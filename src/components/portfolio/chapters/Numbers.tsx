import { ChapterHeading } from "../ChapterHeading";
import { stats } from "@/data/stats";
import { useCountUp } from "@/hooks/useCountUp";
import { useT } from "@/lib/i18n";

function formatVal(v: number, target: number) {
  if (target >= 1000000) return (v / 1000000).toFixed(1) + "M";
  if (target >= 1000) return Math.round(v).toLocaleString();
  if (!Number.isInteger(target)) return v.toFixed(1);
  return Math.round(v).toString();
}

function StatItem({ stat }: { stat: typeof stats[number] }) {
  const t = useT();
  const { ref, value } = useCountUp(stat.value);
  return (
    <div className="border-l-2 border-indigo/30 pl-5 py-2">
      <div className="font-sub text-[10px] uppercase tracking-[0.3em] text-coral">
        {t(stat.label)}
      </div>
      <div className="font-display mt-3 text-5xl font-bold leading-none text-indigo md:text-6xl lg:text-7xl">
        {stat.prefix ?? ""}
        <span ref={ref}>{formatVal(value, stat.value)}</span>
        {stat.suffix ?? ""}
      </div>
    </div>
  );
}

export function Numbers() {
  const t = useT();
  return (
    <section
      id="numbers"
      aria-labelledby="numbers-heading"
      className="px-6 py-24 md:px-16 md:py-32 lg:px-24"
      style={{ backgroundColor: "var(--warm-bg)" }}
    >
      <ChapterHeading number="04" kicker={t("Chapter Four")} title={t("Numbers that speak.")} />
      <div className="grid grid-cols-1 gap-x-6 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
        {stats.map((s) => (
          <StatItem key={s.label} stat={s} />
        ))}
      </div>
    </section>
  );
}
