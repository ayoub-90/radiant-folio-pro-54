import { tickerSkills } from "@/data/skills";

export function Ticker() {
  const items = [...tickerSkills, ...tickerSkills];
  return (
    <div
      className="relative w-full overflow-hidden border-y py-4"
      style={{ backgroundColor: "var(--ticker-bg)", borderColor: "var(--border)" }}
    >
      <div className="ticker-track flex w-max gap-10 whitespace-nowrap">
        {items.map((s, i) => (
          <span
            key={i}
            className="font-mono text-xs uppercase tracking-[0.22em] text-foreground/70"
          >
            <span className="text-indigo">·</span>
            <span className="ml-4">{s}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
