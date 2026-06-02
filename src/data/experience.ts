export interface ExperienceNode {
  role: string;
  company: string;
  location: string;
  period: string;
  highlights: string[];
  tech: string[];
}

export const experience: ExperienceNode[] = [
  {
    role: "Data Scientist Intern",
    company: "ISICOD",
    location: "Rabat",
    period: "February 2025 – July 2025",
    highlights: [
      "Built a hybrid recommendation system (SVD + TF-IDF) in Python",
      "Developed LSTM forecasting models → +12% accuracy improvement",
      "Implemented NLP semantic search using LLMs and embeddings",
      "Optimized ETL pipelines → +30% performance gain",
    ],
    tech: ["Python", "Scikit-learn", "TensorFlow", "NLP", "SQL", "LangChain"],
  },
  {
    role: "Data Analyst Intern",
    company: "OCP Group",
    location: "Khouribga",
    period: "June 2024 – August 2024",
    highlights: [
      "Conducted exploratory data analysis on large industrial datasets",
      "Produced regular business reports for operational and management teams",
      "Validated and monitored data quality and integration pipelines",
    ],
    tech: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "EDA"],
  },
];
