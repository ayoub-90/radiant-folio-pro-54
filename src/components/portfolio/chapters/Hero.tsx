import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { DataGraphCanvas } from "../DataGraphCanvas";
import { Ticker } from "../Ticker";
import { UPWORK_URL, RESUME_URL } from "@/data/projects";

const HEADLINE = "I turn raw data into decisions that matter.";

export function Hero() {
  const [typed, setTyped] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setTyped(HEADLINE);
      setDone(true);
      return;
    }
    let i = 0;
    const id = setInterval(() => {
      i++;
      setTyped(HEADLINE.slice(0, i));
      if (i >= HEADLINE.length) {
        clearInterval(id);
        setDone(true);
      }
    }, 38);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="relative flex min-h-screen flex-col"
    >
      {/* Light watercolor + node graph behind */}
      <div className="absolute inset-0 -z-0 overflow-hidden">
        <div
          aria-hidden
          className="animate-aurora absolute -left-32 top-10 h-[520px] w-[520px] rounded-full opacity-40 blur-3xl"
          style={{ background: "radial-gradient(circle, #2D2BFF 0%, transparent 65%)" }}
        />
        <div
          aria-hidden
          className="animate-aurora absolute -right-24 top-1/3 h-[480px] w-[480px] rounded-full opacity-35 blur-3xl"
          style={{ background: "radial-gradient(circle, #FF5C35 0%, transparent 65%)", animationDelay: "-6s" }}
        />
        <div
          aria-hidden
          className="animate-aurora absolute left-1/3 bottom-0 h-[420px] w-[420px] rounded-full opacity-30 blur-3xl"
          style={{ background: "radial-gradient(circle, #8B9BFF 0%, transparent 65%)", animationDelay: "-12s" }}
        />
        <DataGraphCanvas />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/55 to-background" />
      </div>

      <div className="relative z-10 flex flex-1 flex-col justify-center px-6 pt-32 md:px-16 lg:px-24">
        <div className="font-mono mb-8 flex items-center gap-3 text-xs uppercase tracking-[0.35em] text-muted-foreground">
          <span className="h-px w-12 bg-indigo" />
          <span>Portfolio · 2026</span>
        </div>

        <h1
          id="hero-heading"
          className="font-display max-w-5xl text-[clamp(2.75rem,8vw,7rem)] font-bold leading-[1.02] tracking-tight text-foreground"
        >
          <span className="text-indigo">{typed}</span>
          <span
            className={`ml-1 inline-block h-[0.85em] w-[3px] translate-y-[0.1em] bg-indigo ${done ? "animate-pulse" : ""}`}
            aria-hidden
          />
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: done ? 1 : 0, y: done ? 0 : 10 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-sub mt-8 max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg"
        >
          Data Scientist &amp; Analyst · Machine Learning · BI &amp; Visualization · Casablanca, Morocco
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: done ? 1 : 0, y: done ? 0 : 10 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-12 flex flex-wrap items-center gap-4"
        >
          <a href="#work" className="btn-editorial">
            Explore My Work
            <span>↓</span>
          </a>
          <a
            href={UPWORK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-editorial-outline"
          >
            Hire Me on Upwork
            <span>↗</span>
          </a>
          <a
            href={RESUME_URL}
            download="Ayoub-Elharem-Resume.pdf"
            className="btn-editorial-outline"
            style={{ color: "var(--indigo)", borderColor: "var(--indigo)" }}
          >
            Download Resume
            <span>↓</span>
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: done ? 1 : 0 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="font-mono absolute bottom-32 right-6 hidden text-right text-[10px] uppercase tracking-[0.3em] text-muted-foreground md:right-16 md:block lg:right-24"
        >
          <div className="text-indigo">Scroll ↓</div>
          <div className="mt-2">9 chapters</div>
        </motion.div>
      </div>

      <div className="relative z-10 mt-20 md:mt-28">
        <Ticker />
      </div>
    </section>
  );
}
