import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { motion, useScroll, useTransform, AnimatePresence, useMotionValue, useSpring } from "framer-motion";
import { useRef, useEffect, useState, useMemo } from "react";
import { u as useLang, a as useT } from "./router-Bc4fwkYA.js";
import { z } from "zod";
import "@tanstack/react-query";
import "@tanstack/react-router";
import "lucide-react";
function DataGraphCanvas() {
  const ref = useRef(null);
  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let raf = 0;
    let w = 0;
    let h = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let nodes = [];
    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const density = Math.min(80, Math.max(30, Math.floor(w * h / 22e3)));
      nodes = Array.from({ length: density }).map(() => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        r: Math.random() * 1.6 + 0.6
      }));
    };
    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];
        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d2 = dx * dx + dy * dy;
          const max = 150;
          if (d2 < max * max) {
            const alpha = (1 - Math.sqrt(d2) / max) * 0.22;
            ctx.strokeStyle = `rgba(45, 43, 255, ${alpha})`;
            ctx.lineWidth = 0.6;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        ctx.fillStyle = i % 5 === 0 ? "rgba(255, 92, 53, 0.85)" : "rgba(45, 43, 255, 0.7)";
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fill();
        if (!reduce) {
          n.x += n.vx;
          n.y += n.vy;
          if (n.x < 0 || n.x > w) n.vx *= -1;
          if (n.y < 0 || n.y > h) n.vy *= -1;
        }
      }
      raf = requestAnimationFrame(draw);
    };
    resize();
    draw();
    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);
  return /* @__PURE__ */ jsx(
    "canvas",
    {
      ref,
      "aria-hidden": true,
      className: "absolute inset-0 h-full w-full",
      style: { maskImage: "radial-gradient(ellipse at center, black 40%, transparent 90%)" }
    }
  );
}
const skillClusters = [
  {
    name: "Data Science & ML",
    skills: ["Python", "Scikit-learn", "TensorFlow", "LSTM", "CNN", "NLP", "LangChain", "OpenAI API", "RandomForest"]
  },
  {
    name: "Analytics & BI",
    skills: ["Power BI", "Tableau", "Looker Studio", "DAX", "Power Query", "KPI Design", "Figma"]
  },
  {
    name: "Data Engineering",
    skills: ["SQL", "MySQL", "PostgreSQL", "ETL", "SSIS", "Spark", "Hadoop", "MongoDB", "Airflow", "Kafka", "Docker"]
  },
  {
    name: "Cloud & Tools",
    skills: ["Azure", "ADF", "Synapse", "SSAS", "AWS", "Git", "REST APIs", "Gradio", "LangSmith", "Supabase", "Databricks"]
  }
];
const radarZones = [
  { level: "Expert", skills: ["Python", "SQL", "Power BI", "Tableau", "Pandas", "Scikit-learn"] },
  { level: "Proficient", skills: ["TensorFlow", "PostgreSQL", "DAX", "Power Query", "LangChain", "Docker", "Airflow"] },
  { level: "Working Knowledge", skills: ["Azure ADF", "Synapse", "SSAS", "Kafka", "Spark", "Hadoop", "Looker", "Gradio"] },
  { level: "Familiar", skills: ["AWS", "Databricks", "Supabase", "Redis", "MongoDB"] }
];
const tickerSkills = [
  "Python",
  "SQL",
  "Power BI",
  "Tableau",
  "TensorFlow",
  "Scikit-learn",
  "Spark",
  "Azure",
  "AWS",
  "PostgreSQL",
  "LangChain",
  "Kafka",
  "Airflow",
  "Docker",
  "DAX",
  "Power Query",
  "Looker Studio"
];
function Ticker() {
  const items = [...tickerSkills, ...tickerSkills];
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: "relative w-full overflow-hidden border-y py-4",
      style: { backgroundColor: "var(--ticker-bg)", borderColor: "var(--border)" },
      children: /* @__PURE__ */ jsx("div", { className: "ticker-track flex w-max gap-10 whitespace-nowrap", children: items.map((s, i) => /* @__PURE__ */ jsxs(
        "span",
        {
          className: "font-mono text-xs uppercase tracking-[0.22em] text-foreground/70",
          children: [
            /* @__PURE__ */ jsx("span", { className: "text-indigo", children: "·" }),
            /* @__PURE__ */ jsx("span", { className: "ml-4", children: s })
          ]
        },
        i
      )) })
    }
  );
}
const UPWORK_URL = "https://www.upwork.com/freelancers/~01bb635a3151f3cae0?mp_source=share";
const RESUME_URL = "/ayoub-elharem-resume.pdf";
const GITHUB_BOOK_REPO = "#";
const GITHUB_HYBRID_REPO = "#";
const LINKEDIN_URL = "https://www.linkedin.com/in/ayoub-elharem";
const projects = [
  {
    id: 1,
    title: "Global Development Dashboard",
    categories: ["Business Intelligence"],
    impact: "Tracking GDP, CO₂, and population across 180+ countries for a simulated global NGO.",
    details: "Built a 4-page interactive Power BI report for a global development initiative (World Progress 2030). Extracted and integrated live data from two REST APIs (World Bank + REST Countries), designed a Star Schema (FactIndicateurs, DimPays, DimDate, DimRégion), and implemented 15+ DAX measures. Dashboard covers: global trends, regional comparison, country-level profiles, and GDP–CO₂ correlation analysis. Delivered with full team documentation.",
    tech: ["Power BI", "Power Query", "DAX", "REST APIs", "JSON", "Git", "Trello"],
    duration: "5 days · Nov 2025"
  },
  {
    id: 2,
    title: "Cardiovascular Health Risk Dashboard",
    categories: ["Business Intelligence"],
    impact: "Turning 10,000+ patient records into a clinical risk monitoring tool.",
    details: "Designed and built an interactive Tableau dashboard for a clinic monitoring cardiovascular risk factors. Created calculated fields: age in years, age segments, HighBP indicator (ap_hi ≥ 140 or ap_lo ≥ 90), and a composite RiskScore (cholesterol + glucose + BP flag). Visualized patient distribution, gender breakdown, lifestyle habits (smoking, alcohol, physical activity) with Area Charts, Donut Charts, Histograms, and Bar Charts.",
    tech: ["Tableau Desktop", "Calculated Fields", "Dashboard Containers", "Git"],
    duration: "5 days · Nov 2025"
  },
  {
    id: 3,
    title: "Retail 360 — Sales & Marketing Dashboard",
    categories: ["Business Intelligence"],
    impact: "Transforming dirty retail data into a clean, dual-perspective BI report.",
    details: "Led full data cleaning of a messy retail dataset (missing values, duplicates, type errors) using Power Query. Built a Star Schema model and DAX measures for two business lenses — Sales Director (MoM/YoY revenue growth, online vs in-store split, average basket) and Marketing Director (customer retention, new vs recurring, promo impact). Delivered 2-page Power BI report with collaborative GitHub documentation.",
    tech: ["Power BI", "Power Query", "DAX", "Python", "Git", "Trello"],
    duration: "5 days · Nov 2025"
  },
  {
    id: 4,
    title: "Olympic Performance & Socio-Economic Analysis",
    categories: ["Business Intelligence", "Data Engineering"],
    impact: "Correlating 120 years of Olympic medals with GDP, population, and literacy.",
    details: "Built a full pipeline from CSV files and World Bank API. Cleaned and harmonized athlete events data (120+ years), joined with socio-economic indicators in MySQL, and computed derived KPIs: medals per capita, medals per GDP, weighted performance scores. Deployed an interactive Tableau Public dashboard with cross-country and cross-era comparisons.",
    tech: ["Python", "Pandas", "MySQL", "Tableau Public", "World Bank API", "Git"],
    duration: "6 days · Dec 2025"
  },
  {
    id: 5,
    title: "Global Maritime Logistics — PostgreSQL Database",
    categories: ["Data Engineering"],
    impact: "Designing an enterprise-grade unified relational database for a global shipping network.",
    details: "Designed and implemented a full relational database for a maritime logistics company managing ships, ports, containers, routes, and cargo. Created MCD, MRD, and MLD normalized to 3NF. Implemented in PostgreSQL with PL/pgSQL triggers enforcing temporal integrity (arrival ≥ departure), container state conflicts (cannot be simultaneously in a port and on a ship), full status historization, indexing strategy, and role-based security management.",
    tech: ["PostgreSQL", "PL/pgSQL", "DbSchema", "Git", "Trello"],
    duration: "9 days · Dec 2025"
  },
  {
    id: 6,
    title: "World Happiness Report — Storytelling Dashboard",
    categories: ["Business Intelligence"],
    impact: "Transforming global happiness data into a cinematic data story.",
    details: "Designed a single-page Power BI dashboard turning the World Happiness Report dataset into a visual narrative. Created: choropleth world map, animated bar chart (Top 10 happiest countries per year), scatter plot (happiness vs GDP with bubble size = life expectancy), treemap (factor contribution per country), waterfall chart, and KPI cards. Built Figma prototype before development. Implemented slicers, bookmarks, and navigation buttons.",
    tech: ["Power BI", "DAX", "Figma", "Bookmarks & Navigation"],
    duration: "Dec 2025"
  },
  {
    id: 7,
    title: "Chicago & Philadelphia Transit Analytics",
    categories: ["Business Intelligence", "Statistical Analysis"],
    impact: "Combining real-time transit APIs with 5-year ridership history to optimize urban transport.",
    details: "Individual project combining ETL (RDF → CSV via Python), real-time API data (CTA Bus Tracker + SEPTA TransitView), and historical Excel boarding data. Built Star Schema model in Power BI, created advanced DAX measures (MoM ridership growth, volatility via standard deviation, day-type % above target). Integrated Python directly in Power BI for 4 statistical tests: Shapiro-Wilk normality, Student t-test, ANOVA (weekday/Saturday/Sunday), Pearson/Spearman correlation. Delivered a 3-page dashboard: Overview, Service Quality, and Predictive Results including an ML ridership forecast model.",
    tech: ["Power BI", "Python (scipy, statsmodels, sklearn)", "REST APIs", "DAX", "Git", "Jira", "Confluence"],
    duration: "5 days · Feb 2026"
  },
  {
    id: 8,
    title: "ElectroTrend — Azure Cloud Data Platform",
    categories: ["Data Engineering"],
    impact: "Building a full enterprise analytics platform on Azure for 11,500 global Apple product sales transactions.",
    details: "Designed and implemented an end-to-end cloud analytics architecture for a global electronics distributor covering 47 countries, 43 products, and 3 years of sales data. Full pipeline: CSV ingested to Azure Blob Storage → Azure Data Factory orchestration → SSIS ETL (cleaning, normalization, staging to SQL Server) → Azure Synapse Analytics Data Warehouse (Star Schema: Fact_Sales, Dim_Date, Dim_Product, Dim_Geography, Dim_Channel, DimCustomerSegment) → SSAS Tabular model with 7 measures → Power BI executive dashboard. Delivered written analysis of 3 alternative cloud architectures (Azure / GCP / AWS).",
    tech: ["Azure Blob", "ADF", "SSIS", "Azure Synapse", "SSAS", "Power BI", "SQL Server", "Git", "Jira"],
    duration: "9 days · Mar 2025"
  },
  {
    id: 9,
    title: "US Road Accidents — Advanced Statistical Analysis",
    categories: ["Statistical Analysis"],
    impact: "Extracting 30+ insights from 7.7 million accident records across 49 US states.",
    details: "Team project applying advanced statistical methods on the US-Accidents dataset (3GB, Feb 2016 – Mar 2023). Pipeline: EDA → descriptive statistics → hypothesis testing → ANOVA → correlation analysis → regression → time series → PCA/MANOVA. Produced 30+ documented interpretations, clear visualizations (matplotlib/seaborn/plotly), a professional PDF report, and Canva slides designed for non-technical audiences and LinkedIn sharing.",
    tech: ["Python", "Pandas", "NumPy", "SciPy", "Statsmodels", "Matplotlib", "Seaborn", "Plotly", "Git", "Confluence", "Canva"],
    duration: "12 days · Jan 2026"
  },
  {
    id: 10,
    title: "System Performance Monitoring — Real-Time Dashboard",
    categories: ["Real-Time & Streaming"],
    impact: "Building a live system monitoring dashboard with Kafka streaming and Looker Studio.",
    details: "Built a real-time performance monitoring system that collects CPU, RAM, Disk, Network, and Temperature metrics via Python (psutil), streams data to Google Sheets via OAuth2, and visualizes live + historical metrics in Looker Studio (time series, scorecards, gauges, area charts). Implemented custom calculated fields for CPU load classification (NORMAL / MEDIUM / HIGH). Bonus: deployed an Apache Kafka pipeline with 3 parallel producer scripts and one consumer writing real-time to a second Google Sheet dashboard page.",
    tech: ["Python", "psutil", "Google Sheets API", "Looker Studio", "Apache Kafka", "Git"],
    duration: "5 days"
  },
  {
    id: 11,
    title: "Pizza Sales Analytics Dashboard",
    categories: ["Business Intelligence"],
    impact: "Piloting a pizzeria chain's operations with a full Star Schema model and drill-through dashboards.",
    details: "Individual project on 84,600 sales rows. Full pipeline: Power Query cleaning → Star Schema modeling → DAX measures (Total Sales, YoY Growth, Running Totals, Attrition Rate, Average Unit Price, Top 5 / Bottom 5 products, % contribution by category). Delivered a multi-page interactive Power BI dashboard with slicers, drill-through navigation, and bookmarks for executive-level decision making.",
    tech: ["Power BI", "Power Query", "DAX", "Star Schema"],
    duration: "4 days · Mar 2026"
  },
  {
    id: 12,
    title: "Morocco Real Estate Intelligence Platform",
    categories: ["Real-Time & Streaming", "Machine Learning"],
    impact: "A fully automated ML pipeline scraping, predicting, and visualizing the Moroccan real estate market every 15 minutes.",
    details: "End-to-end data platform built with micro-batch architecture. Selenium scrapers (stateful, Dockerized) collect listings from Avito and Mubawab every 15 minutes. Data is cleaned and enriched (prix_m2, equipment score) via Pandas. A RandomForestRegressor predicts listing prices and tracks model performance (R², RMSE, MAE) in a dedicated metrics table. Results stored in PostgreSQL (Star Schema: fact_annonces + dim_localisation, dim_type_bien, dim_source). Orchestrated via Airflow DAG. Power BI connects via pre-joined BI view for zero-latency reporting.",
    tech: ["Python", "Selenium", "Docker", "Airflow", "PostgreSQL", "RandomForest", "Power BI", "Git", "Confluence"],
    duration: "Ongoing project"
  },
  {
    id: 13,
    title: "Semantic Book Recommender with LLMs",
    categories: ["Machine Learning"],
    impact: "An LLM-powered book recommendation engine using semantic search, emotion detection, and zero-shot classification.",
    details: 'Built an intelligent book recommendation system where users describe their mood in natural language (e.g., "a book about revenge and redemption") and receive semantically matched results. Full ML pipeline: text cleaning → TF-IDF + OpenAI embeddings → Chroma vector database → zero-shot fiction/non-fiction classification (94% accuracy) → sentiment/emotion analysis (F1: 0.89) → Gradio web interface. Achieved 87% user satisfaction on relevance scoring and sub-2s query response time.',
    tech: ["Python", "LangChain", "OpenAI API", "Chroma", "Transformers", "Gradio", "LangSmith", "Git"],
    link: { label: "View on GitHub", url: GITHUB_BOOK_REPO }
  },
  {
    id: 14,
    title: "Hybrid Recommendation System (SVD + TF-IDF)",
    categories: ["Machine Learning"],
    impact: "A production-grade hybrid recommender combining collaborative and content-based filtering with full evaluation metrics.",
    details: "Built at ISICOD internship. Combines SVD collaborative filtering (matrix factorization) with TF-IDF content-based filtering via adjustable weighted scoring. Evaluated on 7 metrics: Precision@k, Recall@k, F1@k, NDCG@k, Hit Ratio, MRR, MAP at k=5/10/20. Optimal content weight of 0.3 outperforms pure CF (Precision@10: 0.2847 vs 0.2634) and pure CB. Includes diversity metrics (category coverage: 83.4%), baseline comparison, SHAP-like interpretability, and ROC analysis.",
    tech: ["Python", "Scikit-learn", "SVD", "TF-IDF", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Jupyter"],
    link: { label: "View on GitHub", url: GITHUB_HYBRID_REPO }
  }
];
const projectCategories = [
  "All",
  "Business Intelligence",
  "Data Engineering",
  "Machine Learning",
  "Real-Time & Streaming",
  "Statistical Analysis"
];
function Hero() {
  const { t } = useLang();
  return /* @__PURE__ */ jsxs(
    "section",
    {
      id: "hero",
      "aria-labelledby": "hero-heading",
      className: "relative flex min-h-screen flex-col",
      children: [
        /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 -z-0 overflow-hidden", children: [
          /* @__PURE__ */ jsx(
            "div",
            {
              "aria-hidden": true,
              className: "animate-aurora absolute -left-32 -top-24 h-[560px] w-[560px] rounded-full opacity-45 blur-3xl",
              style: { background: "radial-gradient(circle, var(--indigo) 0%, transparent 65%)" }
            }
          ),
          /* @__PURE__ */ jsx(
            "div",
            {
              "aria-hidden": true,
              className: "animate-aurora absolute -right-32 top-1/4 h-[520px] w-[520px] rounded-full opacity-30 blur-3xl",
              style: {
                background: "radial-gradient(circle, var(--coral) 0%, transparent 65%)",
                animationDelay: "-6s"
              }
            }
          ),
          /* @__PURE__ */ jsx(DataGraphCanvas, {}),
          /* @__PURE__ */ jsx(
            "svg",
            {
              className: "absolute inset-0 h-full w-full opacity-[0.18]",
              xmlns: "http://www.w3.org/2000/svg",
              "aria-hidden": true,
              children: /* @__PURE__ */ jsxs("g", { style: { color: "var(--indigo)" }, children: [
                /* @__PURE__ */ jsx("circle", { cx: "18%", cy: "28%", r: "2", fill: "currentColor" }),
                /* @__PURE__ */ jsx("circle", { cx: "42%", cy: "18%", r: "1.4", fill: "currentColor" }),
                /* @__PURE__ */ jsx("circle", { cx: "72%", cy: "34%", r: "2.2", fill: "currentColor" }),
                /* @__PURE__ */ jsx("circle", { cx: "88%", cy: "62%", r: "1.6", fill: "currentColor" }),
                /* @__PURE__ */ jsx("circle", { cx: "30%", cy: "72%", r: "1.8", fill: "currentColor" }),
                /* @__PURE__ */ jsx("line", { x1: "18%", y1: "28%", x2: "42%", y2: "18%", stroke: "currentColor", strokeWidth: "0.6" }),
                /* @__PURE__ */ jsx("line", { x1: "42%", y1: "18%", x2: "72%", y2: "34%", stroke: "currentColor", strokeWidth: "0.6" }),
                /* @__PURE__ */ jsx("line", { x1: "72%", y1: "34%", x2: "88%", y2: "62%", stroke: "currentColor", strokeWidth: "0.6" }),
                /* @__PURE__ */ jsx("line", { x1: "30%", y1: "72%", x2: "72%", y2: "34%", stroke: "currentColor", strokeWidth: "0.6" })
              ] })
            }
          ),
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-background/30 via-background/55 to-background" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "relative z-10 flex flex-1 flex-col justify-center px-6 pt-32 md:px-16 lg:px-24", children: [
          /* @__PURE__ */ jsxs(
            motion.div,
            {
              initial: { opacity: 0, x: -12 },
              animate: { opacity: 1, x: 0 },
              transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
              className: "font-mono mb-10 flex items-center gap-4 text-[11px] uppercase tracking-[0.32em] text-indigo",
              children: [
                /* @__PURE__ */ jsx("span", { className: "h-px w-12 bg-indigo" }),
                /* @__PURE__ */ jsx("span", { children: t("Portfolio · 2026") })
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            motion.h1,
            {
              id: "hero-heading",
              initial: { opacity: 0, y: 24 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.1 },
              className: "font-display max-w-5xl text-[clamp(2.75rem,8.4vw,7rem)] font-bold leading-[0.95] tracking-tight text-foreground",
              children: [
                t("I turn raw"),
                " ",
                /* @__PURE__ */ jsx("span", { className: "text-indigo", children: t("data") }),
                " ",
                t("into decisions that"),
                " ",
                /* @__PURE__ */ jsxs("span", { className: "relative inline-block", children: [
                  t("matter."),
                  /* @__PURE__ */ jsx(
                    motion.span,
                    {
                      "aria-hidden": true,
                      initial: { scaleX: 0 },
                      animate: { scaleX: 1 },
                      transition: { duration: 0.9, ease: [0.65, 0, 0.35, 1], delay: 0.9 },
                      className: "absolute -bottom-1 left-0 h-[6px] w-full origin-left rounded-full bg-coral md:-bottom-2 md:h-[8px]"
                    }
                  )
                ] })
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            motion.p,
            {
              initial: { opacity: 0, y: 12 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.7, delay: 0.45 },
              className: "font-sub mt-10 max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg",
              children: [
                /* @__PURE__ */ jsx("span", { children: t("Data Scientist & Analyst") }),
                /* @__PURE__ */ jsx("span", { className: "mx-3 text-indigo/40", children: "•" }),
                /* @__PURE__ */ jsx("span", { children: t("Machine Learning") }),
                /* @__PURE__ */ jsx("span", { className: "mx-3 text-indigo/40", children: "•" }),
                /* @__PURE__ */ jsx("span", { children: t("BI & Visualization") }),
                /* @__PURE__ */ jsx("span", { className: "mx-3 text-indigo/40", children: "•" }),
                /* @__PURE__ */ jsx("span", { className: "text-foreground", children: t("Casablanca, Morocco") })
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 12 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.7, delay: 0.65 },
              className: "mt-12 flex flex-wrap items-center gap-4",
              children: [
                /* @__PURE__ */ jsxs(
                  "a",
                  {
                    href: "#work",
                    className: "group font-mono relative inline-flex items-center gap-3 overflow-hidden bg-indigo px-7 py-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-white shadow-lift transition-transform hover:-translate-y-0.5",
                    children: [
                      /* @__PURE__ */ jsx(
                        "span",
                        {
                          "aria-hidden": true,
                          className: "absolute inset-0 translate-y-full bg-coral transition-transform duration-300 ease-out group-hover:translate-y-0"
                        }
                      ),
                      /* @__PURE__ */ jsx("span", { className: "relative", children: t("Explore My Work") }),
                      /* @__PURE__ */ jsx("span", { className: "relative transition-transform group-hover:translate-y-0.5", children: "↓" })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxs(
                  "a",
                  {
                    href: UPWORK_URL,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "group font-mono inline-flex items-center gap-3 border-2 border-coral px-7 py-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-coral transition-colors hover:bg-coral hover:text-white",
                    children: [
                      /* @__PURE__ */ jsx("span", { children: t("Hire Me on Upwork") }),
                      /* @__PURE__ */ jsx("span", { className: "transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5", children: "↗" })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxs(
                  "a",
                  {
                    href: RESUME_URL,
                    download: "Ayoub-Elharem-Resume.pdf",
                    className: "group font-mono inline-flex items-center gap-3 px-3 py-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-indigo transition-colors",
                    children: [
                      /* @__PURE__ */ jsx("span", { className: "border-b border-transparent pb-1 group-hover:border-indigo", children: t("Download Resume") }),
                      /* @__PURE__ */ jsx("span", { children: "↓" })
                    ]
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            motion.div,
            {
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              transition: { duration: 1, delay: 1 },
              className: "font-mono absolute bottom-32 right-6 hidden text-right md:right-16 md:block lg:right-24",
              children: [
                /* @__PURE__ */ jsx("div", { className: "text-[10px] font-bold uppercase tracking-[0.32em] text-foreground", children: t("Scroll ↓") }),
                /* @__PURE__ */ jsx("div", { className: "mt-4 font-display text-4xl font-bold leading-none text-indigo", children: "9" }),
                /* @__PURE__ */ jsx("div", { className: "mt-1 text-[10px] uppercase tracking-[0.28em] text-muted-foreground", children: t("Chapters") })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsx("div", { className: "relative z-10 mt-20 md:mt-28", children: /* @__PURE__ */ jsx(Ticker, {}) })
      ]
    }
  );
}
function ChapterHeading({ number, kicker, title }) {
  return /* @__PURE__ */ jsx(
    motion.div,
    {
      initial: { opacity: 0, y: 24 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true, margin: "-80px" },
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
      className: "mb-12 flex items-end justify-between gap-8 border-b pb-6 md:mb-20",
      style: { borderColor: "var(--border)" },
      children: /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs("div", { className: "font-sub text-xs uppercase tracking-[0.3em] text-coral", children: [
          number,
          " — ",
          kicker
        ] }),
        /* @__PURE__ */ jsx("h2", { className: "font-display mt-4 text-3xl font-bold leading-[1.02] tracking-tight text-foreground md:text-5xl lg:text-6xl", children: title })
      ] })
    }
  );
}
const PARAGRAPH_KEYS = [
  "I'm Ayoub, a Big Data & AI Engineer with a Data Science and Analytics edge. I hold an engineering degree in Big Data & AI from ISGA Rabat, and over the past few years I've built systems that turn raw, messy data into clear decisions from real-time pipelines to predictive models to dashboards executives actually read.\n\n At OCP Group, one of Africa's largest industrial companies, I worked with real-time IoT data, driving reporting and quality processes at scale. At ISICOD, I designed hybrid recommendation systems, trained LSTM models that lifted forecast accuracy by 12%, and shipped an LLM-powered semantic search engine that cut ETL processing time by 30%.\n\nI move fluidly across the full data stack Kafka streaming, Medallion architectures, Star Schema design, cloud pipelines (AWS, Databricks, Azure), and BI storytelling in Power BI and Tableau. I care about rigor as much as impact: clean architecture, reproducible pipelines, and dashboards that tell a story at a glance.\n\nRemote-ready. Detail-obsessed. Built to ship."
];
function Monogram() {
  return /* @__PURE__ */ jsxs("div", { className: "relative aspect-square h-full w-full", children: [
    /* @__PURE__ */ jsxs("svg", { viewBox: "0 0 400 400", className: "h-full w-full", "aria-hidden": true, children: [
      /* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsxs("linearGradient", { id: "hexGrad", x1: "0", y1: "0", x2: "1", y2: "1", children: [
        /* @__PURE__ */ jsx("stop", { offset: "0%", stopColor: "var(--indigo)", stopOpacity: "0.9" }),
        /* @__PURE__ */ jsx("stop", { offset: "100%", stopColor: "var(--coral)", stopOpacity: "0.6" })
      ] }) }),
      [60, 100, 140, 180].map((r, i) => /* @__PURE__ */ jsx(
        "polygon",
        {
          points: Array.from({ length: 6 }).map((_, k) => {
            const a = Math.PI / 3 * k - Math.PI / 2;
            return `${200 + r * Math.cos(a)},${200 + r * Math.sin(a)}`;
          }).join(" "),
          fill: "none",
          stroke: "url(#hexGrad)",
          strokeWidth: i === 0 ? 1.5 : 0.6,
          opacity: 1 - i * 0.2
        },
        i
      )),
      Array.from({ length: 18 }).map((_, k) => {
        const a = Math.PI * 2 * k / 18;
        const r = 100 + k % 3 * 40;
        const cx = 200 + r * Math.cos(a);
        const cy = 200 + r * Math.sin(a);
        return /* @__PURE__ */ jsx("circle", { cx, cy, r: k % 4 === 0 ? 4 : 2, fill: k % 4 === 0 ? "var(--coral)" : "var(--indigo)" }, k);
      })
    ] }),
    /* @__PURE__ */ jsx(
      "img",
      {
        src: "/me.png",
        alt: "",
        className: "absolute inset-0 m-auto h-[72%] w-[72%] rounded-full object-cover"
      }
    )
  ] });
}
function Story() {
  const t = useT();
  return /* @__PURE__ */ jsxs("section", { id: "story", "aria-labelledby": "story-heading", className: "px-6 py-24 md:px-16 md:py-32 lg:px-24", children: [
    /* @__PURE__ */ jsx(ChapterHeading, { number: "01", kicker: t("Chapter One"), title: t("Who I Am") }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-12 md:flex-row md:items-start md:gap-16", children: [
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, scale: 0.92 },
          whileInView: { opacity: 1, scale: 1 },
          viewport: { once: true, margin: "-80px" },
          transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
          className: "relative aspect-square w-full max-w-[320px] shrink-0 text-foreground md:max-w-[380px]",
          children: [
            /* @__PURE__ */ jsx("div", { className: "absolute inset-0 rounded-full bg-indigo/10 blur-3xl" }),
            /* @__PURE__ */ jsx("div", { className: "relative", children: /* @__PURE__ */ jsx(Monogram, {}) })
          ]
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "space-y-8", children: PARAGRAPH_KEYS.map((p, i) => /* @__PURE__ */ jsx(
        motion.p,
        {
          initial: { opacity: 0, y: 16 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: "-60px" },
          transition: { duration: 0.8, delay: i * 0.15 },
          className: "whitespace-pre-line text-lg leading-relaxed text-foreground md:text-xl",
          children: t(p)
        },
        i
      )) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "mt-20 grid gap-8 md:grid-cols-2", children: skillClusters.map((cluster, ci) => /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-50px" },
        transition: { duration: 0.6, delay: ci * 0.1 },
        className: "rounded-xl bg-surface p-6 shadow-soft",
        children: [
          /* @__PURE__ */ jsxs("div", { className: "font-sub mb-4 flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-coral", children: [
            /* @__PURE__ */ jsx("span", { className: "h-px w-6 bg-coral" }),
            String(ci + 1).padStart(2, "0"),
            " · ",
            t(cluster.name)
          ] }),
          /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2", children: cluster.skills.map((s) => /* @__PURE__ */ jsx(
            "span",
            {
              className: "font-mono cursor-default rounded-full border border-indigo/40 px-3 py-1.5 text-xs text-indigo transition-all hover:-translate-y-0.5 hover:border-indigo hover:shadow-soft",
              style: { backgroundColor: "var(--pill-bg)" },
              children: s
            },
            s
          )) })
        ]
      },
      cluster.name
    )) })
  ] });
}
const experience = [
  {
    role: "Data Scientist Intern",
    company: "ISICOD",
    location: "Rabat",
    period: "February 2025 – July 2025",
    highlights: [
      "Built a hybrid recommendation system (SVD + TF-IDF) in Python",
      "Developed LSTM forecasting models → +12% accuracy improvement",
      "Implemented NLP semantic search using LLMs and embeddings",
      "Optimized ETL pipelines → +30% performance gain"
    ],
    tech: ["Python", "Scikit-learn", "TensorFlow", "NLP", "SQL", "LangChain"]
  },
  {
    role: "Data Analyst Intern",
    company: "OCP Group",
    location: "Khouribga",
    period: "June 2024 – August 2024",
    highlights: [
      "Conducted exploratory data analysis on large industrial datasets",
      "Produced regular business reports for operational and management teams",
      "Validated and monitored data quality and integration pipelines"
    ],
    tech: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "EDA"]
  }
];
function Timeline() {
  const t = useT();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 70%", "end 30%"]
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  return /* @__PURE__ */ jsxs(
    "section",
    {
      id: "experience",
      "aria-labelledby": "experience-heading",
      className: "px-6 py-24 md:px-16 md:py-32 lg:px-24",
      style: { backgroundColor: "var(--alt-bg)" },
      children: [
        /* @__PURE__ */ jsx(ChapterHeading, { number: "02", kicker: t("Chapter Two"), title: t("Experience Timeline") }),
        /* @__PURE__ */ jsxs("div", { ref, className: "relative mx-auto max-w-4xl", children: [
          /* @__PURE__ */ jsx("div", { className: "absolute left-4 top-0 h-full w-px bg-indigo/15 md:left-1/2 md:-translate-x-1/2" }),
          /* @__PURE__ */ jsx(
            motion.div,
            {
              style: { height: lineHeight },
              className: "absolute left-4 top-0 w-[2px] bg-gradient-to-b from-indigo to-coral md:left-1/2 md:-translate-x-1/2"
            }
          ),
          /* @__PURE__ */ jsx("div", { className: "space-y-20", children: experience.map((node, i) => {
            const isLeft = i % 2 === 0;
            return /* @__PURE__ */ jsxs(
              motion.div,
              {
                initial: { opacity: 0, y: 30 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: true, margin: "-100px" },
                transition: { duration: 0.7 },
                className: "relative pl-14 md:pl-0",
                children: [
                  /* @__PURE__ */ jsx("div", { className: "absolute left-4 top-2 -translate-x-1/2 md:left-1/2", children: /* @__PURE__ */ jsx(
                    "div",
                    {
                      className: "relative h-4 w-4 rounded-full border-2 border-indigo pulse-glow",
                      style: { backgroundColor: "var(--surface)" }
                    }
                  ) }),
                  /* @__PURE__ */ jsxs("div", { className: `md:grid md:grid-cols-2 md:gap-12`, children: [
                    /* @__PURE__ */ jsxs("div", { className: `${isLeft ? "md:pr-12 md:text-right" : "md:order-2 md:pl-12"}`, children: [
                      /* @__PURE__ */ jsx("div", { className: "font-sub text-[10px] uppercase tracking-[0.3em] text-coral", children: t(node.period) }),
                      /* @__PURE__ */ jsx("h3", { className: "font-display mt-2 text-2xl font-bold text-foreground md:text-3xl", children: t(node.role) }),
                      /* @__PURE__ */ jsxs("div", { className: "font-mono mt-1 text-sm text-indigo", children: [
                        node.company,
                        " · ",
                        t(node.location)
                      ] })
                    ] }),
                    /* @__PURE__ */ jsx("div", { className: `mt-4 md:mt-0 ${isLeft ? "" : "md:order-1 md:pr-12 md:text-right"}`, children: /* @__PURE__ */ jsxs("div", { className: `rounded-xl border-l-4 border-coral bg-surface p-5 shadow-soft`, children: [
                      /* @__PURE__ */ jsx("ul", { className: "space-y-2", children: node.highlights.map((h, k) => /* @__PURE__ */ jsxs(
                        "li",
                        {
                          className: "text-sm leading-relaxed text-foreground/85 md:text-base",
                          children: [
                            /* @__PURE__ */ jsx("span", { className: "text-indigo", children: "▸" }),
                            " ",
                            t(h)
                          ]
                        },
                        k
                      )) }),
                      /* @__PURE__ */ jsx("div", { className: `mt-4 flex flex-wrap gap-2 ${isLeft ? "" : "md:justify-end"}`, children: node.tech.map((tech) => /* @__PURE__ */ jsx(
                        "span",
                        {
                          className: "font-mono rounded-sm px-2 py-1 text-[10px] uppercase tracking-wider",
                          style: { backgroundColor: "var(--chip-bg)", color: "var(--indigo)" },
                          children: tech
                        },
                        tech
                      )) })
                    ] }) })
                  ] })
                ]
              },
              node.company
            );
          }) })
        ] })
      ]
    }
  );
}
function Projects() {
  const t = useT();
  const [filter, setFilter] = useState("All");
  const [active, setActive] = useState(null);
  const filtered = useMemo(
    () => filter === "All" ? projects : projects.filter((p) => p.categories.includes(filter)),
    [filter]
  );
  return /* @__PURE__ */ jsxs("section", { id: "work", "aria-labelledby": "work-heading", className: "px-6 py-24 md:px-16 md:py-32 lg:px-24", children: [
    /* @__PURE__ */ jsx(
      ChapterHeading,
      {
        number: "03",
        kicker: t("Chapter Three"),
        title: t("Fourteen projects. Real data. Real impact.")
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "mb-12 flex flex-wrap gap-2", children: projectCategories.map((cat) => {
      const isActive = filter === cat;
      return /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => setFilter(cat),
          className: `font-sub rounded-sm border px-4 py-2 text-[11px] uppercase tracking-[0.18em] transition-all ${isActive ? "border-indigo bg-indigo text-white" : "border-indigo/30 bg-transparent text-indigo hover:border-indigo hover:bg-indigo/5"}`,
          children: t(cat)
        },
        cat
      );
    }) }),
    /* @__PURE__ */ jsx(motion.div, { layout: true, className: "grid gap-6 md:grid-cols-2 lg:grid-cols-3", children: /* @__PURE__ */ jsx(AnimatePresence, { mode: "popLayout", children: filtered.map((p) => /* @__PURE__ */ jsxs(
      motion.article,
      {
        layout: true,
        initial: { opacity: 0, y: 16 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, scale: 0.95 },
        transition: { duration: 0.4 },
        className: "group relative flex flex-col rounded-xl border-l-4 border-transparent bg-surface p-6 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:border-indigo hover:shadow-lift",
        children: [
          /* @__PURE__ */ jsxs(
            "div",
            {
              className: "relative mb-6 aspect-[16/9] overflow-hidden rounded-md",
              style: { background: "linear-gradient(135deg, var(--chip-bg) 0%, var(--chip-bg-warm) 100%)" },
              children: [
                /* @__PURE__ */ jsx("div", { className: "absolute inset-0 opacity-70", children: /* @__PURE__ */ jsxs("svg", { viewBox: "0 0 160 90", className: "h-full w-full", "aria-hidden": true, children: [
                  /* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsxs("linearGradient", { id: `g${p.id}`, x1: "0", y1: "0", x2: "1", y2: "1", children: [
                    /* @__PURE__ */ jsx("stop", { offset: "0%", stopColor: "var(--indigo)", stopOpacity: "0.85" }),
                    /* @__PURE__ */ jsx("stop", { offset: "100%", stopColor: "var(--coral)", stopOpacity: "0.55" })
                  ] }) }),
                  /* @__PURE__ */ jsx(
                    "polyline",
                    {
                      points: Array.from({ length: 12 }).map((_, i) => `${i * 14 + 5},${45 + Math.sin(i + p.id) * 25}`).join(" "),
                      fill: "none",
                      stroke: `url(#g${p.id})`,
                      strokeWidth: "1.5"
                    }
                  ),
                  Array.from({ length: 12 }).map((_, i) => /* @__PURE__ */ jsx(
                    "circle",
                    {
                      cx: i * 14 + 5,
                      cy: 45 + Math.sin(i + p.id) * 25,
                      r: "1.4",
                      fill: "var(--indigo)"
                    },
                    i
                  ))
                ] }) }),
                /* @__PURE__ */ jsxs("div", { className: "font-mono absolute bottom-3 left-3 text-[10px] uppercase tracking-[0.25em] text-indigo", children: [
                  "P",
                  String(p.id).padStart(2, "0")
                ] })
              ]
            }
          ),
          /* @__PURE__ */ jsx("div", { className: "font-sub mb-3 flex flex-wrap gap-2 text-[10px] uppercase tracking-[0.2em] text-coral", children: p.categories.map((c) => /* @__PURE__ */ jsx("span", { children: t(c) }, c)) }),
          /* @__PURE__ */ jsx("h3", { className: "font-display text-xl font-bold leading-tight text-foreground", children: t(p.title) }),
          /* @__PURE__ */ jsx("p", { className: "mt-3 text-sm leading-relaxed text-muted-foreground", children: t(p.impact) }),
          /* @__PURE__ */ jsxs("div", { className: "mt-4 flex flex-wrap gap-1.5", children: [
            p.tech.slice(0, 5).map((tech) => /* @__PURE__ */ jsx(
              "span",
              {
                className: "font-mono rounded-sm px-2 py-0.5 text-[10px]",
                style: { backgroundColor: "var(--chip-bg)", color: "var(--indigo)" },
                children: tech
              },
              tech
            )),
            p.tech.length > 5 && /* @__PURE__ */ jsxs("span", { className: "font-mono px-2 py-0.5 text-[10px] text-muted-foreground", children: [
              "+",
              p.tech.length - 5
            ] })
          ] }),
          /* @__PURE__ */ jsxs(
            "button",
            {
              onClick: () => setActive(p),
              className: "font-mono mt-6 inline-flex items-center gap-2 self-start text-[11px] uppercase tracking-[0.2em] text-indigo transition-all hover:gap-3 hover:text-coral",
              children: [
                t("View Details"),
                " ",
                /* @__PURE__ */ jsx("span", { children: "→" })
              ]
            }
          )
        ]
      },
      p.id
    )) }) }),
    /* @__PURE__ */ jsx(ProjectModal, { project: active, onClose: () => setActive(null) })
  ] });
}
function ProjectModal({ project, onClose }) {
  const t = useT();
  return /* @__PURE__ */ jsx(AnimatePresence, { children: project && /* @__PURE__ */ jsx(
    motion.div,
    {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      className: "fixed inset-0 z-[200] flex items-center justify-center bg-foreground/40 p-4 backdrop-blur-md",
      onClick: onClose,
      children: /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { scale: 0.95, y: 20 },
          animate: { scale: 1, y: 0 },
          exit: { scale: 0.95, y: 20 },
          transition: { duration: 0.3 },
          onClick: (e) => e.stopPropagation(),
          className: "relative max-h-[85vh] w-full max-w-3xl overflow-y-auto rounded-xl border-l-4 border-indigo bg-surface p-8 shadow-lift md:p-12",
          children: [
            /* @__PURE__ */ jsx(
              "button",
              {
                onClick: onClose,
                "aria-label": "Close",
                className: "font-mono absolute right-4 top-4 rounded-sm border border-indigo/30 px-3 py-1 text-xs text-indigo transition-colors hover:border-coral hover:text-coral",
                children: t("CLOSE ✕")
              }
            ),
            /* @__PURE__ */ jsx("div", { className: "font-sub mb-3 flex flex-wrap gap-2 text-[10px] uppercase tracking-[0.25em] text-coral", children: project.categories.map((c) => /* @__PURE__ */ jsx("span", { children: t(c) }, c)) }),
            /* @__PURE__ */ jsx("h3", { className: "font-display text-2xl font-bold text-foreground md:text-4xl", children: t(project.title) }),
            /* @__PURE__ */ jsx("p", { className: "mt-4 text-base leading-relaxed text-indigo", children: t(project.impact) }),
            /* @__PURE__ */ jsx("p", { className: "mt-6 text-sm leading-relaxed text-muted-foreground md:text-base", children: t(project.details) }),
            /* @__PURE__ */ jsxs("div", { className: "mt-8", children: [
              /* @__PURE__ */ jsx("div", { className: "font-sub mb-3 text-[10px] uppercase tracking-[0.25em] text-muted-foreground", children: t("Tech Stack") }),
              /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2", children: project.tech.map((tech) => /* @__PURE__ */ jsx(
                "span",
                {
                  className: "font-mono rounded-sm px-3 py-1 text-xs",
                  style: { backgroundColor: "var(--chip-bg)", color: "var(--indigo)" },
                  children: tech
                },
                tech
              )) })
            ] }),
            project.duration && /* @__PURE__ */ jsxs("div", { className: "font-mono mt-6 text-xs uppercase tracking-[0.2em] text-muted-foreground", children: [
              t("Duration"),
              " · ",
              project.duration
            ] }),
            project.link && /* @__PURE__ */ jsxs(
              "a",
              {
                href: project.link.url,
                target: "_blank",
                rel: "noopener noreferrer",
                className: "btn-editorial mt-8",
                children: [
                  t(project.link.label),
                  " ↗"
                ]
              }
            )
          ]
        }
      )
    }
  ) });
}
const certs = [
  { name: "Bootcamp Data Analyst", org: "Simplon Maghreb", status: "done" },
  { name: "AWS Cloud Practitioner Essentials", org: "Amazon Web Services", status: "progress" },
  { name: "AWS Certified Machine Learning – Specialty", org: "Amazon Web Services", status: "progress" }
];
function Education() {
  const t = useT();
  return /* @__PURE__ */ jsxs(
    "section",
    {
      id: "education",
      "aria-labelledby": "education-heading",
      className: "px-6 py-24 md:px-16 md:py-32 lg:px-24",
      children: [
        /* @__PURE__ */ jsx(ChapterHeading, { number: "05", kicker: t("Chapter Five"), title: t("Certifications & Education") }),
        /* @__PURE__ */ jsxs("div", { className: "grid gap-10 lg:grid-cols-2", children: [
          /* @__PURE__ */ jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: { duration: 0.7 },
              className: "rounded-xl border-l-4 border-coral bg-surface p-8 shadow-soft",
              children: [
                /* @__PURE__ */ jsx("div", { className: "font-sub mb-4 text-[10px] uppercase tracking-[0.3em] text-coral", children: t("🎓 Education") }),
                /* @__PURE__ */ jsx("h3", { className: "font-display text-2xl font-bold text-foreground md:text-3xl", children: t("Engineer's Degree — Big Data & Artificial Intelligence") }),
                /* @__PURE__ */ jsx("div", { className: "font-mono mt-3 text-sm text-indigo", children: t("ISGA Rabat · 2022 – 2025") }),
                /* @__PURE__ */ jsx("div", { className: "mt-6 flex flex-wrap gap-2", children: ["Machine Learning", "Deep Learning", "NLP", "Data Warehouse", "ETL", "Hadoop", "Spark"].map((s) => /* @__PURE__ */ jsx(
                  "span",
                  {
                    className: "font-mono rounded-sm px-3 py-1 text-xs",
                    style: { backgroundColor: "var(--chip-bg)", color: "var(--indigo)" },
                    children: s
                  },
                  s
                )) })
              ]
            }
          ),
          /* @__PURE__ */ jsx("div", { className: "space-y-4", children: certs.map((c, i) => /* @__PURE__ */ jsx(
            motion.div,
            {
              initial: { opacity: 0, x: 20 },
              whileInView: { opacity: 1, x: 0 },
              viewport: { once: true },
              transition: { duration: 0.6, delay: i * 0.08 },
              className: `relative rounded-xl border-l-4 bg-surface p-6 shadow-soft transition-all hover:-translate-y-0.5 ${c.status === "done" ? "border-indigo" : "border-coral"}`,
              children: /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between gap-4", children: [
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx(
                    "div",
                    {
                      className: "font-sub text-[10px] uppercase tracking-[0.3em]",
                      style: { color: c.status === "done" ? "var(--indigo)" : "var(--coral)" },
                      children: c.status === "done" ? t("✓ Certified") : t("⏳ In Progress")
                    }
                  ),
                  /* @__PURE__ */ jsx("h4", { className: "font-display mt-2 text-lg font-bold text-foreground", children: t(c.name) }),
                  /* @__PURE__ */ jsx("div", { className: "font-mono mt-1 text-xs text-muted-foreground", children: c.org })
                ] }),
                /* @__PURE__ */ jsx(
                  "div",
                  {
                    className: `flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 font-mono text-xs ${c.status === "done" ? "border-indigo bg-indigo/5 text-indigo" : "border-coral bg-coral/5 text-coral"}`,
                    children: c.status === "done" ? "✓" : "··"
                  }
                )
              ] })
            },
            c.name
          )) })
        ] })
      ]
    }
  );
}
function TechRadar() {
  const t = useT();
  return /* @__PURE__ */ jsxs(
    "section",
    {
      id: "stack",
      "aria-labelledby": "stack-heading",
      className: "bg-surface px-6 py-24 md:px-16 md:py-32 lg:px-24",
      children: [
        /* @__PURE__ */ jsx(ChapterHeading, { number: "06", kicker: t("Chapter Six"), title: t("Tools & Stack") }),
        /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-5xl space-y-10", children: radarZones.map((zone, zi) => /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 16 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true, margin: "-80px" },
            transition: { duration: 0.5, delay: zi * 0.08 },
            className: "border-b border-border/60 pb-8 last:border-b-0",
            children: [
              /* @__PURE__ */ jsx(
                "div",
                {
                  className: "font-sub mb-4 text-[11px] uppercase tracking-[0.3em]",
                  style: { color: zi < 2 ? "var(--indigo)" : "var(--coral)" },
                  children: t(zone.level)
                }
              ),
              /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-x-6 gap-y-3", children: zone.skills.map((s) => /* @__PURE__ */ jsx(
                "span",
                {
                  className: "font-sub text-base text-foreground md:text-lg",
                  children: s
                },
                s
              )) })
            ]
          },
          zone.level
        )) })
      ]
    }
  );
}
const languages = [
  { flag: "🇲🇦", name: "Arabic", level: "Native" },
  { flag: "🇫🇷", name: "French", level: "B2 Intermediate" },
  { flag: "🇬🇧", name: "English", level: "Professional" }
];
const softSkills = [
  {
    icon: "🔍",
    title: "Rigorous & Detail-Oriented",
    quote: "I document every transformation, every DAX measure, every architectural choice."
  },
  {
    icon: "🤝",
    title: "Team Collaborator",
    quote: "7+ projects delivered in squads using GitHub, Trello, Jira, Confluence, and Agile workflows."
  },
  {
    icon: "📡",
    title: "Remote-Ready",
    quote: "Built for async work, structured communication, and clear written documentation."
  }
];
function Languages() {
  const t = useT();
  return /* @__PURE__ */ jsxs(
    "section",
    {
      id: "languages",
      "aria-labelledby": "languages-heading",
      className: "px-6 py-24 md:px-16 md:py-32 lg:px-24",
      children: [
        /* @__PURE__ */ jsx(ChapterHeading, { number: "07", kicker: t("Chapter Seven"), title: t("Languages & Soft Skills") }),
        /* @__PURE__ */ jsx("div", { className: "mb-16 flex flex-wrap gap-3", children: languages.map((l, i) => /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0, scale: 0.9 },
            whileInView: { opacity: 1, scale: 1 },
            viewport: { once: true },
            transition: { duration: 0.5, delay: i * 0.1 },
            className: "flex items-center gap-3 rounded-full bg-surface px-5 py-3 shadow-soft",
            children: [
              /* @__PURE__ */ jsx("span", { className: "text-2xl", children: l.flag }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("div", { className: "font-display text-base font-bold text-foreground", children: t(l.name) }),
                /* @__PURE__ */ jsx("div", { className: "font-sub text-[10px] uppercase tracking-[0.2em] text-indigo", children: t(l.level) })
              ] })
            ]
          },
          l.name
        )) }),
        /* @__PURE__ */ jsx("div", { className: "grid gap-6 md:grid-cols-3", children: softSkills.map((s, i) => /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { duration: 0.6, delay: i * 0.1 },
            className: "rounded-xl border-l-4 border-indigo bg-surface p-6 shadow-soft transition-all hover:-translate-y-1 hover:shadow-lift",
            children: [
              /* @__PURE__ */ jsx("div", { className: "text-3xl", children: s.icon }),
              /* @__PURE__ */ jsx("h3", { className: "font-display mt-4 text-lg font-bold text-foreground", children: t(s.title) }),
              /* @__PURE__ */ jsx("p", { className: "mt-3 text-sm leading-relaxed text-muted-foreground", children: t(s.quote) })
            ]
          },
          s.title
        )) })
      ]
    }
  );
}
const EMAIL = "elharemayoub1@gmail.com";
const PHONE = "+212 661 731 716";
const GOOGLE_APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxLQ1uVjPFHasCUhveD1qXRt2iEaLHVkNJnMeITaA71GSeKJ0ovFm8s3QUMDFUcPDrh/exec";
const contacts = [
  { icon: "📧", label: "Email", value: EMAIL, href: `mailto:${EMAIL}`, translate: false },
  { icon: "💼", label: "Upwork", value: "View profile", href: UPWORK_URL, external: true, translate: true },
  { icon: "🔗", label: "LinkedIn", value: "ayoub-elharem", href: LINKEDIN_URL, external: true, translate: false },
  { icon: "📱", label: "Phone", value: PHONE, href: `tel:${PHONE.replace(/\s/g, "")}`, translate: false },
  { icon: "📄", label: "Resume", value: "Download PDF", href: RESUME_URL, download: true, translate: true }
];
function Contact() {
  const t = useT();
  const schema = z.object({
    name: z.string().trim().min(1, t("Name required")).max(100),
    email: z.string().trim().email(t("Invalid email")).max(255),
    message: z.string().trim().min(5, t("Tell me a bit more")).max(2e3)
  });
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);
  const submit = async (e) => {
    e.preventDefault();
    const res = schema.safeParse(form);
    if (!res.success) {
      const errs = {};
      for (const i of res.error.issues) errs[i.path[0]] = i.message;
      setErrors(errs);
      return;
    }
    setErrors({});
    setSent(false);
    try {
      await fetch(GOOGLE_APPS_SCRIPT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body: new URLSearchParams({
          name: form.name,
          email: form.email,
          message: form.message
        }).toString(),
        mode: "no-cors"
      });
      setSent(true);
      setForm({ name: "", email: "", message: "" });
    } catch {
      alert("Unable to send your message right now. Please try again later.");
    }
  };
  return /* @__PURE__ */ jsxs(
    "section",
    {
      id: "contact",
      "aria-labelledby": "contact-heading",
      className: "dark-section relative overflow-hidden px-6 py-32 md:px-16 lg:px-24",
      children: [
        /* @__PURE__ */ jsxs("div", { "aria-hidden": true, className: "pointer-events-none absolute inset-0 -z-10", children: [
          /* @__PURE__ */ jsx(
            "div",
            {
              className: "animate-aurora absolute -left-32 top-1/4 h-[520px] w-[520px] rounded-full opacity-40 blur-3xl",
              style: { background: "radial-gradient(circle, var(--indigo), transparent 70%)" }
            }
          ),
          /* @__PURE__ */ jsx(
            "div",
            {
              className: "animate-aurora absolute -right-32 bottom-0 h-[520px] w-[520px] rounded-full opacity-35 blur-3xl",
              style: {
                background: "radial-gradient(circle, var(--coral), transparent 70%)",
                animationDelay: "-6s"
              }
            }
          )
        ] }),
        /* @__PURE__ */ jsx(ChapterHeading, { number: "08", kicker: t("Chapter Eight"), title: t("Let's build something that actually works.") }),
        /* @__PURE__ */ jsxs(
          motion.p,
          {
            initial: { opacity: 0, y: 16 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { duration: 0.7 },
            className: "mb-16 max-w-3xl text-lg leading-relaxed text-foreground/85 md:text-xl",
            children: [
              t("Open to freelance projects, full-time roles, and data consulting missions. Remote-first."),
              " ",
              /* @__PURE__ */ jsx("span", { className: "text-indigo font-semibold", children: t("Available now.") })
            ]
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "grid gap-10 lg:grid-cols-[1fr_1.2fr]", children: [
          /* @__PURE__ */ jsx("div", { className: "space-y-3", children: contacts.map((c, i) => /* @__PURE__ */ jsxs(
            motion.a,
            {
              href: c.href,
              target: c.external ? "_blank" : void 0,
              rel: c.external ? "noopener noreferrer" : void 0,
              download: c.download ? "Ayoub-Elharem-Resume.pdf" : void 0,
              initial: { opacity: 0, x: -20 },
              whileInView: { opacity: 1, x: 0 },
              viewport: { once: true },
              transition: { duration: 0.5, delay: i * 0.06 },
              className: "group flex items-center gap-5 rounded-md border bg-surface p-5 transition-all hover:border-indigo hover:bg-surface-elevated hover:glow-teal",
              style: { borderColor: "var(--border)" },
              children: [
                /* @__PURE__ */ jsx("span", { className: "text-2xl", children: c.icon }),
                /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
                  /* @__PURE__ */ jsx("div", { className: "font-sub text-[10px] uppercase tracking-[0.3em] text-coral", children: t(c.label) }),
                  /* @__PURE__ */ jsx("div", { className: "font-display mt-1 text-base text-foreground", children: c.translate ? t(c.value) : c.value })
                ] }),
                /* @__PURE__ */ jsx("span", { className: "font-mono text-indigo opacity-0 transition-opacity group-hover:opacity-100", children: "→" })
              ]
            },
            c.label
          )) }),
          /* @__PURE__ */ jsxs(
            motion.form,
            {
              onSubmit: submit,
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: { duration: 0.7 },
              className: "rounded-md border bg-surface p-8",
              style: { borderColor: "var(--border)" },
              children: [
                /* @__PURE__ */ jsx("div", { className: "font-sub mb-6 text-[10px] uppercase tracking-[0.3em] text-indigo", children: t("▸ Send a message") }),
                /* @__PURE__ */ jsxs("div", { className: "space-y-5", children: [
                  /* @__PURE__ */ jsx(
                    Field,
                    {
                      label: t("Name"),
                      value: form.name,
                      onChange: (v) => setForm({ ...form, name: v }),
                      error: errors.name
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    Field,
                    {
                      label: t("Email"),
                      type: "email",
                      value: form.email,
                      onChange: (v) => setForm({ ...form, email: v }),
                      error: errors.email
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    Field,
                    {
                      label: t("Message"),
                      textarea: true,
                      value: form.message,
                      onChange: (v) => setForm({ ...form, message: v }),
                      error: errors.message
                    }
                  ),
                  /* @__PURE__ */ jsx("button", { type: "submit", className: "btn-editorial w-full justify-center", children: sent ? t("✓ Message sent") : t("Send Message →") })
                ] })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsx(
          "div",
          {
            className: "font-mono mt-24 border-t pt-8 text-center text-[10px] uppercase tracking-[0.3em] text-muted-foreground",
            style: { borderColor: "var(--border)" },
            children: t("© 2026 Ayoub Elharem · Casablanca, Morocco · Built with intent.")
          }
        )
      ]
    }
  );
}
function Field({
  label,
  value,
  onChange,
  type = "text",
  textarea,
  error
}) {
  const cls = "w-full rounded-sm border bg-background/60 px-4 py-3 font-sans text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-indigo focus:outline-none focus:ring-1 focus:ring-indigo";
  return /* @__PURE__ */ jsxs("label", { className: "block", children: [
    /* @__PURE__ */ jsx("span", { className: "font-sub mb-2 block text-[10px] uppercase tracking-[0.3em] text-muted-foreground", children: label }),
    textarea ? /* @__PURE__ */ jsx(
      "textarea",
      {
        value,
        onChange: (e) => onChange(e.target.value),
        rows: 5,
        className: cls,
        style: { borderColor: "var(--input)" },
        maxLength: 2e3
      }
    ) : /* @__PURE__ */ jsx(
      "input",
      {
        type,
        value,
        onChange: (e) => onChange(e.target.value),
        className: cls,
        style: { borderColor: "var(--input)" },
        maxLength: 255
      }
    ),
    error && /* @__PURE__ */ jsx("span", { className: "font-mono mt-1 block text-[10px] text-destructive", children: error })
  ] });
}
function Cursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const [variant, setVariant] = useState("default");
  const [enabled, setEnabled] = useState(false);
  const ringX = useSpring(x, { stiffness: 180, damping: 22, mass: 0.5 });
  const ringY = useSpring(y, { stiffness: 180, damping: 22, mass: 0.5 });
  const dotX = useSpring(x, { stiffness: 600, damping: 30 });
  const dotY = useSpring(y, { stiffness: 600, damping: 30 });
  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    if (!mq.matches) return;
    setEnabled(true);
    document.body.classList.add("has-custom-cursor");
    const move = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const t = e.target;
      if (t && t.closest('a, button, [data-cursor="link"], input, textarea')) {
        setVariant("link");
      } else {
        setVariant("default");
      }
    };
    window.addEventListener("mousemove", move);
    return () => {
      window.removeEventListener("mousemove", move);
      document.body.classList.remove("has-custom-cursor");
    };
  }, [x, y]);
  if (!enabled) return null;
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      motion.div,
      {
        "aria-hidden": true,
        className: "pointer-events-none fixed left-0 top-0 z-[9999] h-2 w-2 rounded-full",
        style: {
          x: dotX,
          y: dotY,
          translateX: "-50%",
          translateY: "-50%",
          backgroundColor: variant === "link" ? "var(--coral)" : "var(--indigo)"
        }
      }
    ),
    /* @__PURE__ */ jsx(
      motion.div,
      {
        "aria-hidden": true,
        className: "pointer-events-none fixed left-0 top-0 z-[9998] rounded-full border-2",
        style: {
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
          width: variant === "link" ? 44 : 30,
          height: variant === "link" ? 44 : 30,
          borderColor: variant === "link" ? "var(--indigo)" : "var(--coral)",
          opacity: 0.85
        }
      }
    )
  ] });
}
function GrainOverlay() {
  return null;
}
function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 24, mass: 0.3 });
  return /* @__PURE__ */ jsx(
    motion.div,
    {
      "aria-hidden": true,
      style: { scaleX, transformOrigin: "0% 50%" },
      className: "pointer-events-none fixed left-0 top-0 z-[200] h-[2px] w-full bg-indigo"
    }
  );
}
function WavyDivider({ color = "indigo" }) {
  const stroke = color === "indigo" ? "var(--indigo)" : "var(--coral)";
  return /* @__PURE__ */ jsx("div", { "aria-hidden": true, className: "relative mx-auto w-full max-w-6xl px-6 md:px-16 lg:px-24", children: /* @__PURE__ */ jsx("svg", { viewBox: "0 0 1200 28", className: "h-7 w-full", preserveAspectRatio: "none", children: /* @__PURE__ */ jsx(
    "path",
    {
      d: "M0,14 Q60,2 120,14 T240,14 T360,14 T480,14 T600,14 T720,14 T840,14 T960,14 T1080,14 T1200,14",
      fill: "none",
      stroke,
      strokeWidth: "1.25",
      strokeLinecap: "round",
      opacity: "0.55"
    }
  ) }) });
}
function Index() {
  return /* @__PURE__ */ jsxs("main", { className: "relative min-h-screen bg-background text-foreground", children: [
    /* @__PURE__ */ jsx(ScrollProgress, {}),
    /* @__PURE__ */ jsx(Cursor, {}),
    /* @__PURE__ */ jsx(GrainOverlay, {}),
    /* @__PURE__ */ jsx(Hero, {}),
    /* @__PURE__ */ jsx(Story, {}),
    /* @__PURE__ */ jsx(WavyDivider, { color: "coral" }),
    /* @__PURE__ */ jsx(Timeline, {}),
    /* @__PURE__ */ jsx(WavyDivider, { color: "indigo" }),
    /* @__PURE__ */ jsx(Projects, {}),
    /* @__PURE__ */ jsx(WavyDivider, { color: "coral" }),
    /* @__PURE__ */ jsx(Education, {}),
    /* @__PURE__ */ jsx(WavyDivider, { color: "coral" }),
    /* @__PURE__ */ jsx(TechRadar, {}),
    /* @__PURE__ */ jsx(WavyDivider, { color: "indigo" }),
    /* @__PURE__ */ jsx(Languages, {}),
    /* @__PURE__ */ jsx(Contact, {})
  ] });
}
export {
  Index as component
};
