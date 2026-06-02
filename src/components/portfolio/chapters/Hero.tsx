import { motion } from "framer-motion";
import { DataGraphCanvas } from "../DataGraphCanvas";
import { Ticker } from "../Ticker";
import { UPWORK_URL, RESUME_URL } from "@/data/projects";
import { useLang } from "@/lib/i18n";

export function Hero() {
  const { t } = useLang();

  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="relative flex min-h-screen flex-col"
    >
      {/* Ambient background */}
      <div className="absolute inset-0 -z-0 overflow-hidden">
        <div
          aria-hidden
          className="animate-aurora absolute -left-32 -top-24 h-[560px] w-[560px] rounded-full opacity-45 blur-3xl"
          style={{ background: "radial-gradient(circle, var(--indigo) 0%, transparent 65%)" }}
        />
        <div
          aria-hidden
          className="animate-aurora absolute -right-32 top-1/4 h-[520px] w-[520px] rounded-full opacity-30 blur-3xl"
          style={{
            background: "radial-gradient(circle, var(--coral) 0%, transparent 65%)",
            animationDelay: "-6s",
          }}
        />
        <DataGraphCanvas />

        {/* Subtle node network overlay */}
        <svg
          className="absolute inset-0 h-full w-full opacity-[0.18]"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden
        >
          <g style={{ color: "var(--indigo)" }}>
            <circle cx="18%" cy="28%" r="2" fill="currentColor" />
            <circle cx="42%" cy="18%" r="1.4" fill="currentColor" />
            <circle cx="72%" cy="34%" r="2.2" fill="currentColor" />
            <circle cx="88%" cy="62%" r="1.6" fill="currentColor" />
            <circle cx="30%" cy="72%" r="1.8" fill="currentColor" />
            <line x1="18%" y1="28%" x2="42%" y2="18%" stroke="currentColor" strokeWidth="0.6" />
            <line x1="42%" y1="18%" x2="72%" y2="34%" stroke="currentColor" strokeWidth="0.6" />
            <line x1="72%" y1="34%" x2="88%" y2="62%" stroke="currentColor" strokeWidth="0.6" />
            <line x1="30%" y1="72%" x2="72%" y2="34%" stroke="currentColor" strokeWidth="0.6" />
          </g>
        </svg>

        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/55 to-background" />
      </div>

      <div className="relative z-10 flex flex-1 flex-col justify-center px-6 pt-32 md:px-16 lg:px-24">
        {/* Kicker */}
        <motion.div
          initial={{ opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="font-mono mb-10 flex items-center gap-4 text-[11px] uppercase tracking-[0.32em] text-indigo"
        >
          <span className="h-px w-12 bg-indigo" />
          <span>{t("Portfolio · 2026")}</span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          id="hero-heading"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          className="font-display max-w-5xl text-[clamp(2.75rem,8.4vw,7rem)] font-bold leading-[0.95] tracking-tight text-foreground"
        >
          {t("I turn raw")}{" "}
          <span className="text-indigo">{t("data")}</span>{" "}
          {t("into decisions that")}{" "}
          <span className="relative inline-block">
            {t("matter.")}
            <motion.span
              aria-hidden
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.9, ease: [0.65, 0, 0.35, 1], delay: 0.9 }}
              className="absolute -bottom-1 left-0 h-[6px] w-full origin-left rounded-full bg-coral md:-bottom-2 md:h-[8px]"
            />
          </span>
        </motion.h1>

        {/* Subhead */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="font-sub mt-10 max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg"
        >
          <span>{t("Data Scientist & Analyst")}</span>
          <span className="mx-3 text-indigo/40">•</span>
          <span>{t("Machine Learning")}</span>
          <span className="mx-3 text-indigo/40">•</span>
          <span>{t("BI & Visualization")}</span>
          <span className="mx-3 text-indigo/40">•</span>
          <span className="text-foreground">{t("Casablanca, Morocco")}</span>
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.65 }}
          className="mt-12 flex flex-wrap items-center gap-4"
        >
          <a
            href="#work"
            className="group font-mono relative inline-flex items-center gap-3 overflow-hidden bg-indigo px-7 py-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-white shadow-lift transition-transform hover:-translate-y-0.5"
          >
            <span
              aria-hidden
              className="absolute inset-0 translate-y-full bg-coral transition-transform duration-300 ease-out group-hover:translate-y-0"
            />
            <span className="relative">{t("Explore My Work")}</span>
            <span className="relative transition-transform group-hover:translate-y-0.5">↓</span>
          </a>

          <a
            href={UPWORK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group font-mono inline-flex items-center gap-3 border-2 border-coral px-7 py-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-coral transition-colors hover:bg-coral hover:text-white"
          >
            <span>{t("Hire Me on Upwork")}</span>
            <span className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5">↗</span>
          </a>

          <a
            href={RESUME_URL}
            download="Ayoub-Elharem-Resume.pdf"
            className="group font-mono inline-flex items-center gap-3 px-3 py-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-indigo transition-colors"
          >
            <span className="border-b border-transparent pb-1 group-hover:border-indigo">
              {t("Download Resume")}
            </span>
            <span>↓</span>
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="font-mono absolute bottom-32 right-6 hidden text-right md:right-16 md:block lg:right-24"
        >
          <div className="text-[10px] font-bold uppercase tracking-[0.32em] text-foreground">
            {t("Scroll ↓")}
          </div>
          <div className="mt-4 font-display text-4xl font-bold leading-none text-indigo">9</div>
          <div className="mt-1 text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
            {t("Chapters")}
          </div>
        </motion.div>
      </div>

      <div className="relative z-10 mt-20 md:mt-28">
        <Ticker />
      </div>
    </section>
  );
}
