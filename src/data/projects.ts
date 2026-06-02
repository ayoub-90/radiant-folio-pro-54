export const UPWORK_URL =
  "https://www.upwork.com/freelancers/~01bb635a3151f3cae0?mp_source=share";
export const RESUME_URL = "/ayoub-elharem-resume.pdf";
export const GITHUB_BOOK_REPO = "#"; // TODO
export const GITHUB_HYBRID_REPO = "#"; // TODO
export const LINKEDIN_URL = "https://www.linkedin.com/in/ayoub-elharem";

export type ProjectCategory =
  | "Business Intelligence"
  | "Data Engineering"
  | "Machine Learning"
  | "Real-Time & Streaming"
  | "Statistical Analysis";

export interface Project {
  id: number;
  title: string;
  categories: ProjectCategory[];
  impact: string;
  details: string;
  tech: string[];
  duration?: string;
  link?: { label: string; url: string };
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Global Development Dashboard",
    categories: ["Business Intelligence"],
    impact: "Tracking GDP, CO₂, and population across 180+ countries for a simulated global NGO.",
    details:
      "Built a 4-page interactive Power BI report for a global development initiative (World Progress 2030). Extracted and integrated live data from two REST APIs (World Bank + REST Countries), designed a Star Schema (FactIndicateurs, DimPays, DimDate, DimRégion), and implemented 15+ DAX measures. Dashboard covers: global trends, regional comparison, country-level profiles, and GDP–CO₂ correlation analysis. Delivered with full team documentation.",
    tech: ["Power BI", "Power Query", "DAX", "REST APIs", "JSON", "Git", "Trello"],
    duration: "5 days · Nov 2025",
  },
  {
    id: 2,
    title: "Cardiovascular Health Risk Dashboard",
    categories: ["Business Intelligence"],
    impact: "Turning 10,000+ patient records into a clinical risk monitoring tool.",
    details:
      "Designed and built an interactive Tableau dashboard for a clinic monitoring cardiovascular risk factors. Created calculated fields: age in years, age segments, HighBP indicator (ap_hi ≥ 140 or ap_lo ≥ 90), and a composite RiskScore (cholesterol + glucose + BP flag). Visualized patient distribution, gender breakdown, lifestyle habits (smoking, alcohol, physical activity) with Area Charts, Donut Charts, Histograms, and Bar Charts.",
    tech: ["Tableau Desktop", "Calculated Fields", "Dashboard Containers", "Git"],
    duration: "5 days · Nov 2025",
  },
  {
    id: 3,
    title: "Retail 360 — Sales & Marketing Dashboard",
    categories: ["Business Intelligence"],
    impact: "Transforming dirty retail data into a clean, dual-perspective BI report.",
    details:
      "Led full data cleaning of a messy retail dataset (missing values, duplicates, type errors) using Power Query. Built a Star Schema model and DAX measures for two business lenses — Sales Director (MoM/YoY revenue growth, online vs in-store split, average basket) and Marketing Director (customer retention, new vs recurring, promo impact). Delivered 2-page Power BI report with collaborative GitHub documentation.",
    tech: ["Power BI", "Power Query", "DAX", "Python", "Git", "Trello"],
    duration: "5 days · Nov 2025",
  },
  {
    id: 4,
    title: "Olympic Performance & Socio-Economic Analysis",
    categories: ["Business Intelligence", "Data Engineering"],
    impact: "Correlating 120 years of Olympic medals with GDP, population, and literacy.",
    details:
      "Built a full pipeline from CSV files and World Bank API. Cleaned and harmonized athlete events data (120+ years), joined with socio-economic indicators in MySQL, and computed derived KPIs: medals per capita, medals per GDP, weighted performance scores. Deployed an interactive Tableau Public dashboard with cross-country and cross-era comparisons.",
    tech: ["Python", "Pandas", "MySQL", "Tableau Public", "World Bank API", "Git"],
    duration: "6 days · Dec 2025",
  },
  {
    id: 5,
    title: "Global Maritime Logistics — PostgreSQL Database",
    categories: ["Data Engineering"],
    impact: "Designing an enterprise-grade unified relational database for a global shipping network.",
    details:
      "Designed and implemented a full relational database for a maritime logistics company managing ships, ports, containers, routes, and cargo. Created MCD, MRD, and MLD normalized to 3NF. Implemented in PostgreSQL with PL/pgSQL triggers enforcing temporal integrity (arrival ≥ departure), container state conflicts (cannot be simultaneously in a port and on a ship), full status historization, indexing strategy, and role-based security management.",
    tech: ["PostgreSQL", "PL/pgSQL", "DbSchema", "Git", "Trello"],
    duration: "9 days · Dec 2025",
  },
  {
    id: 6,
    title: "World Happiness Report — Storytelling Dashboard",
    categories: ["Business Intelligence"],
    impact: "Transforming global happiness data into a cinematic data story.",
    details:
      "Designed a single-page Power BI dashboard turning the World Happiness Report dataset into a visual narrative. Created: choropleth world map, animated bar chart (Top 10 happiest countries per year), scatter plot (happiness vs GDP with bubble size = life expectancy), treemap (factor contribution per country), waterfall chart, and KPI cards. Built Figma prototype before development. Implemented slicers, bookmarks, and navigation buttons.",
    tech: ["Power BI", "DAX", "Figma", "Bookmarks & Navigation"],
    duration: "Dec 2025",
  },
  {
    id: 7,
    title: "Chicago & Philadelphia Transit Analytics",
    categories: ["Business Intelligence", "Statistical Analysis"],
    impact: "Combining real-time transit APIs with 5-year ridership history to optimize urban transport.",
    details:
      "Individual project combining ETL (RDF → CSV via Python), real-time API data (CTA Bus Tracker + SEPTA TransitView), and historical Excel boarding data. Built Star Schema model in Power BI, created advanced DAX measures (MoM ridership growth, volatility via standard deviation, day-type % above target). Integrated Python directly in Power BI for 4 statistical tests: Shapiro-Wilk normality, Student t-test, ANOVA (weekday/Saturday/Sunday), Pearson/Spearman correlation. Delivered a 3-page dashboard: Overview, Service Quality, and Predictive Results including an ML ridership forecast model.",
    tech: ["Power BI", "Python (scipy, statsmodels, sklearn)", "REST APIs", "DAX", "Git", "Jira", "Confluence"],
    duration: "5 days · Feb 2026",
  },
  {
    id: 8,
    title: "ElectroTrend — Azure Cloud Data Platform",
    categories: ["Data Engineering"],
    impact: "Building a full enterprise analytics platform on Azure for 11,500 global Apple product sales transactions.",
    details:
      "Designed and implemented an end-to-end cloud analytics architecture for a global electronics distributor covering 47 countries, 43 products, and 3 years of sales data. Full pipeline: CSV ingested to Azure Blob Storage → Azure Data Factory orchestration → SSIS ETL (cleaning, normalization, staging to SQL Server) → Azure Synapse Analytics Data Warehouse (Star Schema: Fact_Sales, Dim_Date, Dim_Product, Dim_Geography, Dim_Channel, DimCustomerSegment) → SSAS Tabular model with 7 measures → Power BI executive dashboard. Delivered written analysis of 3 alternative cloud architectures (Azure / GCP / AWS).",
    tech: ["Azure Blob", "ADF", "SSIS", "Azure Synapse", "SSAS", "Power BI", "SQL Server", "Git", "Jira"],
    duration: "9 days · Mar 2025",
  },
  {
    id: 9,
    title: "US Road Accidents — Advanced Statistical Analysis",
    categories: ["Statistical Analysis"],
    impact: "Extracting 30+ insights from 7.7 million accident records across 49 US states.",
    details:
      "Team project applying advanced statistical methods on the US-Accidents dataset (3GB, Feb 2016 – Mar 2023). Pipeline: EDA → descriptive statistics → hypothesis testing → ANOVA → correlation analysis → regression → time series → PCA/MANOVA. Produced 30+ documented interpretations, clear visualizations (matplotlib/seaborn/plotly), a professional PDF report, and Canva slides designed for non-technical audiences and LinkedIn sharing.",
    tech: ["Python", "Pandas", "NumPy", "SciPy", "Statsmodels", "Matplotlib", "Seaborn", "Plotly", "Git", "Confluence", "Canva"],
    duration: "12 days · Jan 2026",
  },
  {
    id: 10,
    title: "System Performance Monitoring — Real-Time Dashboard",
    categories: ["Real-Time & Streaming"],
    impact: "Building a live system monitoring dashboard with Kafka streaming and Looker Studio.",
    details:
      "Built a real-time performance monitoring system that collects CPU, RAM, Disk, Network, and Temperature metrics via Python (psutil), streams data to Google Sheets via OAuth2, and visualizes live + historical metrics in Looker Studio (time series, scorecards, gauges, area charts). Implemented custom calculated fields for CPU load classification (NORMAL / MEDIUM / HIGH). Bonus: deployed an Apache Kafka pipeline with 3 parallel producer scripts and one consumer writing real-time to a second Google Sheet dashboard page.",
    tech: ["Python", "psutil", "Google Sheets API", "Looker Studio", "Apache Kafka", "Git"],
    duration: "5 days",
  },
  {
    id: 11,
    title: "Pizza Sales Analytics Dashboard",
    categories: ["Business Intelligence"],
    impact: "Piloting a pizzeria chain's operations with a full Star Schema model and drill-through dashboards.",
    details:
      "Individual project on 84,600 sales rows. Full pipeline: Power Query cleaning → Star Schema modeling → DAX measures (Total Sales, YoY Growth, Running Totals, Attrition Rate, Average Unit Price, Top 5 / Bottom 5 products, % contribution by category). Delivered a multi-page interactive Power BI dashboard with slicers, drill-through navigation, and bookmarks for executive-level decision making.",
    tech: ["Power BI", "Power Query", "DAX", "Star Schema"],
    duration: "4 days · Mar 2026",
  },
  {
    id: 12,
    title: "Morocco Real Estate Intelligence Platform",
    categories: ["Real-Time & Streaming", "Machine Learning"],
    impact: "A fully automated ML pipeline scraping, predicting, and visualizing the Moroccan real estate market every 15 minutes.",
    details:
      "End-to-end data platform built with micro-batch architecture. Selenium scrapers (stateful, Dockerized) collect listings from Avito and Mubawab every 15 minutes. Data is cleaned and enriched (prix_m2, equipment score) via Pandas. A RandomForestRegressor predicts listing prices and tracks model performance (R², RMSE, MAE) in a dedicated metrics table. Results stored in PostgreSQL (Star Schema: fact_annonces + dim_localisation, dim_type_bien, dim_source). Orchestrated via Airflow DAG. Power BI connects via pre-joined BI view for zero-latency reporting.",
    tech: ["Python", "Selenium", "Docker", "Airflow", "PostgreSQL", "RandomForest", "Power BI", "Git", "Confluence"],
    duration: "Ongoing project",
  },
  {
    id: 13,
    title: "Semantic Book Recommender with LLMs",
    categories: ["Machine Learning"],
    impact: "An LLM-powered book recommendation engine using semantic search, emotion detection, and zero-shot classification.",
    details:
      "Built an intelligent book recommendation system where users describe their mood in natural language (e.g., \"a book about revenge and redemption\") and receive semantically matched results. Full ML pipeline: text cleaning → TF-IDF + OpenAI embeddings → Chroma vector database → zero-shot fiction/non-fiction classification (94% accuracy) → sentiment/emotion analysis (F1: 0.89) → Gradio web interface. Achieved 87% user satisfaction on relevance scoring and sub-2s query response time.",
    tech: ["Python", "LangChain", "OpenAI API", "Chroma", "Transformers", "Gradio", "LangSmith", "Git"],
    link: { label: "View on GitHub", url: GITHUB_BOOK_REPO },
  },
  {
    id: 14,
    title: "Hybrid Recommendation System (SVD + TF-IDF)",
    categories: ["Machine Learning"],
    impact: "A production-grade hybrid recommender combining collaborative and content-based filtering with full evaluation metrics.",
    details:
      "Built at ISICOD internship. Combines SVD collaborative filtering (matrix factorization) with TF-IDF content-based filtering via adjustable weighted scoring. Evaluated on 7 metrics: Precision@k, Recall@k, F1@k, NDCG@k, Hit Ratio, MRR, MAP at k=5/10/20. Optimal content weight of 0.3 outperforms pure CF (Precision@10: 0.2847 vs 0.2634) and pure CB. Includes diversity metrics (category coverage: 83.4%), baseline comparison, SHAP-like interpretability, and ROC analysis.",
    tech: ["Python", "Scikit-learn", "SVD", "TF-IDF", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Jupyter"],
    link: { label: "View on GitHub", url: GITHUB_HYBRID_REPO },
  },
];

export const projectCategories: (ProjectCategory | "All")[] = [
  "All",
  "Business Intelligence",
  "Data Engineering",
  "Machine Learning",
  "Real-Time & Streaming",
  "Statistical Analysis",
];
