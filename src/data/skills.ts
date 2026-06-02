export interface SkillCluster {
  name: string;
  skills: string[];
}

export const skillClusters: SkillCluster[] = [
  {
    name: "Data Science & ML",
    skills: ["Python", "Scikit-learn", "TensorFlow", "LSTM", "CNN", "NLP", "LangChain", "OpenAI API", "RandomForest"],
  },
  {
    name: "Analytics & BI",
    skills: ["Power BI", "Tableau", "Looker Studio", "DAX", "Power Query", "KPI Design", "Figma"],
  },
  {
    name: "Data Engineering",
    skills: ["SQL", "MySQL", "PostgreSQL", "ETL", "SSIS", "Spark", "Hadoop", "MongoDB", "Airflow", "Kafka", "Docker"],
  },
  {
    name: "Cloud & Tools",
    skills: ["Azure", "ADF", "Synapse", "SSAS", "AWS", "Git", "REST APIs", "Gradio", "LangSmith", "Supabase", "Databricks"],
  },
];

export interface RadarZone {
  level: "Expert" | "Proficient" | "Working Knowledge" | "Familiar";
  skills: string[];
}

export const radarZones: RadarZone[] = [
  { level: "Expert", skills: ["Python", "SQL", "Power BI", "Tableau", "Pandas", "Scikit-learn"] },
  { level: "Proficient", skills: ["TensorFlow", "PostgreSQL", "DAX", "Power Query", "LangChain", "Docker", "Airflow"] },
  { level: "Working Knowledge", skills: ["Azure ADF", "Synapse", "SSAS", "Kafka", "Spark", "Hadoop", "Looker", "Gradio"] },
  { level: "Familiar", skills: ["AWS", "Databricks", "Supabase", "Redis", "MongoDB"] },
];

export const tickerSkills = [
  "Python", "SQL", "Power BI", "Tableau", "TensorFlow", "Scikit-learn", "Spark",
  "Azure", "AWS", "PostgreSQL", "LangChain", "Kafka", "Airflow", "Docker",
  "DAX", "Power Query", "Looker Studio",
];
