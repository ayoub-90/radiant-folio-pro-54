import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { createRootRouteWithContext, useRouter, Link, Outlet, HeadContent, Scripts, createFileRoute, lazyRouteComponent, createRouter } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
import { useState, useEffect, useCallback, useMemo, createContext, useContext } from "react";
import { Sun, Moon } from "lucide-react";
const appCss = "/assets/styles-BwGSEV0B.css";
function reportLovableError(error, context = {}) {
  if (typeof window === "undefined") return;
  window.__lovableEvents?.captureException?.(
    error,
    {
      source: "react_error_boundary",
      route: window.location.pathname,
      ...context
    },
    {
      mechanism: "react_error_boundary",
      handled: false,
      severity: "error"
    }
  );
}
const Ctx$1 = createContext(null);
function apply(theme) {
  if (typeof document === "undefined") return;
  const root = document.documentElement;
  root.classList.toggle("dark", theme === "dark");
  root.style.colorScheme = theme;
}
function ThemeProvider({ children }) {
  const [theme, setThemeState] = useState("light");
  useEffect(() => {
    const stored = typeof window !== "undefined" && localStorage.getItem("theme") || null;
    const initial = stored === "dark" || stored === "light" ? stored : "light";
    setThemeState(initial);
    apply(initial);
  }, []);
  const setTheme = useCallback((t) => {
    setThemeState(t);
    apply(t);
    if (typeof window !== "undefined") localStorage.setItem("theme", t);
  }, []);
  const toggle = useCallback(() => {
    setTheme(theme === "dark" ? "light" : "dark");
  }, [theme, setTheme]);
  const value = useMemo(() => ({ theme, setTheme, toggle }), [theme, setTheme, toggle]);
  return /* @__PURE__ */ jsx(Ctx$1.Provider, { value, children });
}
function useTheme() {
  const ctx = useContext(Ctx$1);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
}
const fr = {
  // Hero
  "I turn raw data into decisions that matter.": "Je transforme les données brutes en décisions qui comptent.",
  "I turn raw": "Je transforme les",
  "data": "données",
  "into decisions that": "brutes en décisions qui",
  "matter.": "comptent.",
  "Portfolio · 2026": "Portfolio · 2026",
  "Data Scientist & Analyst · Machine Learning · BI & Visualization · Casablanca, Morocco": "Data Scientist & Analyste · Machine Learning · BI & Visualisation · Casablanca, Maroc",
  "Data Scientist & Analyst": "Data Scientist & Analyste",
  "Machine Learning": "Machine Learning",
  "BI & Visualization": "BI & Visualisation",
  "Casablanca, Morocco": "Casablanca, Maroc",
  "Explore My Work": "Voir mes projets",
  "Hire Me on Upwork": "Recrutez-moi sur Upwork",
  "Download Resume": "Télécharger le CV",
  "Scroll ↓": "Défiler ↓",
  "9 chapters": "9 chapitres",
  "Chapters": "Chapitres",
  // Chapter kickers / numbers labels
  "Chapter One": "Chapitre Un",
  "Chapter Two": "Chapitre Deux",
  "Chapter Three": "Chapitre Trois",
  "Chapter Four": "Chapitre Quatre",
  "Chapter Five": "Chapitre Cinq",
  "Chapter Six": "Chapitre Six",
  "Chapter Seven": "Chapitre Sept",
  "Chapter Eight": "Chapitre Huit",
  // Story
  "Who I Am": "Qui je suis",
  "I'm Ayoub — a Big Data & AI engineer turned Data Scientist and Analyst. I graduated from ISGA Rabat with a degree in Big Data & Artificial Intelligence, and I've spent the last 3 years turning messy data into systems that think, dashboards that speak, and models that predict.": "Je suis Ayoub — ingénieur Big Data & IA devenu Data Scientist et Analyste. Diplômé de l'ISGA Rabat en Big Data & Intelligence Artificielle, j'ai passé les 3 dernières années à transformer des données désordonnées en systèmes qui pensent, en tableaux de bord qui parlent et en modèles qui prédisent.",
  "At OCP Group — one of Africa's largest industrial companies — I ran exploratory data analysis, supported business teams with reporting, and validated data quality at scale. At ISICOD, I built recommendation systems from scratch, trained LSTM models that improved forecast accuracy by 12%, and implemented NLP semantic search pipelines with +30% ETL performance gains.": "Au sein du Groupe OCP — l'une des plus grandes entreprises industrielles d'Afrique — j'ai mené des analyses exploratoires, appuyé les équipes métiers via du reporting et validé la qualité des données à grande échelle. Chez ISICOD, j'ai conçu des systèmes de recommandation de zéro, entraîné des modèles LSTM améliorant la précision de prévision de 12 %, et implémenté des pipelines NLP de recherche sémantique avec +30 % de performance ETL.",
  "I work across the full data stack: from raw CSVs to cloud-native pipelines, from Star Schema design to real-time streaming with Kafka, from interactive Power BI dashboards to production ML models. Remote-ready. Detail-obsessed. Impact-driven.": "Je couvre toute la stack data : du CSV brut aux pipelines cloud-natifs, de la modélisation en étoile au streaming temps réel avec Kafka, des tableaux de bord Power BI interactifs aux modèles ML en production. Prêt pour le télétravail. Obsédé du détail. Orienté impact.",
  "I'm Ayoub, a Big Data & AI Engineer with a Data Science and Analytics edge. I hold an engineering degree in Big Data & AI from ISGA Rabat, and over the past few years I've built systems that turn raw, messy data into clear decisions from real-time pipelines to predictive models to dashboards executives actually read.\n\n At OCP Group, one of Africa's largest industrial companies, I worked with real-time IoT data, driving reporting and quality processes at scale. At ISICOD, I designed hybrid recommendation systems, trained LSTM models that lifted forecast accuracy by 12%, and shipped an LLM-powered semantic search engine that cut ETL processing time by 30%.\n\nI move fluidly across the full data stack Kafka streaming, Medallion architectures, Star Schema design, cloud pipelines (AWS, Databricks, Azure), and BI storytelling in Power BI and Tableau. I care about rigor as much as impact: clean architecture, reproducible pipelines, and dashboards that tell a story at a glance.\n\nRemote-ready. Detail-obsessed. Built to ship.": "Je suis Ayoub, ingénieur Big Data & IA avec une expertise en Data Science et Analytics. Je suis diplômé en Big Data & IA de l'ISGA Rabat et, ces dernières années, j'ai construit des systèmes qui transforment des données brutes et désordonnées en décisions claires — des pipelines temps réel aux modèles prédictifs et aux tableaux de bord que les dirigeants lisent vraiment.\n\nChez OCP Group, l'une des plus grandes entreprises industrielles d'Afrique, j'ai travaillé avec des données IoT temps réel, en pilotant les reportings et la qualité à grande échelle. Chez ISICOD, j'ai conçu des systèmes de recommandation hybrides, entraîné des modèles LSTM qui ont amélioré la précision des prévisions de 12 % et déployé un moteur de recherche sémantique basé sur un LLM qui a réduit le temps de traitement ETL de 30 %.\n\nJe navigue avec aisance sur l'ensemble de la stack data — streaming Kafka, architectures Medallion, modélisation en Star Schema, pipelines cloud (AWS, Databricks, Azure) et storytelling BI dans Power BI et Tableau. Je suis aussi rigoureux qu'orienté impact : architectures propres, pipelines reproductibles et tableaux de bord qui racontent une histoire en un coup d'œil.\n\nPrêt pour le télétravail. Obsédé par le détail. Conçu pour livrer.",
  "Data Science & ML": "Data Science & ML",
  "Analytics & BI": "Analytique & BI",
  "Data Engineering": "Ingénierie Data",
  "Cloud & Tools": "Cloud & Outils",
  // Timeline
  "Experience Timeline": "Chronologie d'expérience",
  "Data Scientist Intern": "Stagiaire Data Scientist",
  "Data Analyst Intern": "Stagiaire Data Analyst",
  "Rabat": "Rabat",
  "Khouribga": "Khouribga",
  "February 2025 – July 2025": "Février 2025 – Juillet 2025",
  "June 2024 – August 2024": "Juin 2024 – Août 2024",
  "Built a hybrid recommendation system (SVD + TF-IDF) in Python": "Construit un système de recommandation hybride (SVD + TF-IDF) en Python",
  "Developed LSTM forecasting models → +12% accuracy improvement": "Développé des modèles LSTM de prévision → +12 % de précision",
  "Implemented NLP semantic search using LLMs and embeddings": "Implémenté une recherche sémantique NLP via LLMs et embeddings",
  "Optimized ETL pipelines → +30% performance gain": "Optimisé les pipelines ETL → +30 % de performance",
  "Conducted exploratory data analysis on large industrial datasets": "Mené des analyses exploratoires sur de larges jeux de données industriels",
  "Produced regular business reports for operational and management teams": "Produit des rapports métiers réguliers pour les équipes opérationnelles et de management",
  "Validated and monitored data quality and integration pipelines": "Validé et supervisé la qualité des données et les pipelines d'intégration",
  // Projects
  "Fourteen projects. Real data. Real impact.": "Quatorze projets. Données réelles. Impact réel.",
  "All": "Tous",
  "Business Intelligence": "Business Intelligence",
  "Real-Time & Streaming": "Temps Réel & Streaming",
  "Statistical Analysis": "Analyse Statistique",
  "View Details": "Voir les détails",
  "CLOSE ✕": "FERMER ✕",
  "Tech Stack": "Stack Technique",
  "Duration": "Durée",
  "View on GitHub": "Voir sur GitHub",
  // Numbers
  "Numbers that speak.": "Des chiffres qui parlent.",
  "Projects Delivered": "Projets livrés",
  "Industry Internships": "Stages en entreprise",
  "Countries Analyzed": "Pays analysés",
  "Accident Records Processed": "Enregistrements d'accidents traités",
  "Patient Records Analyzed": "Dossiers patients analysés",
  "Global Sales Transactions Modeled": "Transactions de vente modélisées",
  "Pizza Sales Rows Cleaned": "Lignes de ventes pizza nettoyées",
  "LSTM Forecast Accuracy Gain": "Gain de précision LSTM",
  "ETL Pipeline Performance Gain": "Gain de performance ETL",
  "Statistical Tests in Power BI": "Tests statistiques dans Power BI",
  "Countries in Cloud Data Platform": "Pays sur la plateforme cloud",
  "Cloud Architectures Designed": "Architectures cloud conçues",
  // Education
  "Certifications & Education": "Certifications & Formation",
  "🎓 Education": "🎓 Formation",
  "Engineer's Degree — Big Data & Artificial Intelligence": "Diplôme d'ingénieur — Big Data & Intelligence Artificielle",
  "ISGA Rabat · 2022 – 2025": "ISGA Rabat · 2022 – 2025",
  "✓ Certified": "✓ Certifié",
  "⏳ In Progress": "⏳ En cours",
  "Bootcamp Data Analyst": "Bootcamp Data Analyst",
  "Bootcamp Data Science": "Bootcamp Data Science",
  "AWS Cloud Practitioner Essentials": "AWS Cloud Practitioner Essentials",
  "AWS Certified Machine Learning – Specialty": "AWS Certified Machine Learning – Specialty",
  // TechRadar
  "Tools & Stack": "Outils & Stack",
  "Expert": "Expert",
  "Proficient": "Avancé",
  "Working Knowledge": "Connaissances opérationnelles",
  "Familiar": "Notions",
  // Languages
  "Languages & Soft Skills": "Langues & Soft Skills",
  "Arabic": "Arabe",
  "French": "Français",
  "English": "Anglais",
  "Native": "Langue maternelle",
  "B2 Intermediate": "B2 Intermédiaire",
  "Professional": "Professionnel",
  "Rigorous & Detail-Oriented": "Rigoureux & Orienté détail",
  "I document every transformation, every DAX measure, every architectural choice.": "Je documente chaque transformation, chaque mesure DAX, chaque choix d'architecture.",
  "Team Collaborator": "Esprit d'équipe",
  "7+ projects delivered in squads using GitHub, Trello, Jira, Confluence, and Agile workflows.": "7+ projets livrés en équipe avec GitHub, Trello, Jira, Confluence et workflows Agile.",
  "Remote-Ready": "Prêt pour le télétravail",
  "Built for async work, structured communication, and clear written documentation.": "Conçu pour le travail asynchrone, la communication structurée et une documentation écrite claire.",
  // Contact
  "Let's build something that actually works.": "Construisons quelque chose qui fonctionne vraiment.",
  "Open to freelance projects, full-time roles, and data consulting missions. Remote-first.": "Ouvert aux projets freelance, postes à temps plein et missions de conseil data. Télétravail prioritaire.",
  "Available now.": "Disponible immédiatement.",
  "Email": "Email",
  "Upwork": "Upwork",
  "View profile": "Voir le profil",
  "LinkedIn": "LinkedIn",
  "Phone": "Téléphone",
  "Resume": "CV",
  "Download PDF": "Télécharger le PDF",
  "▸ Send a message": "▸ Envoyer un message",
  "Name": "Nom",
  "Message": "Message",
  "Send Message →": "Envoyer le message →",
  "✓ Opened in your mail client": "✓ Ouvert dans votre client mail",
  "Name required": "Nom requis",
  "Invalid email": "Email invalide",
  "Tell me a bit more": "Dites-m'en un peu plus",
  "© 2026 Ayoub Elharem · Casablanca, Morocco · Built with intent.": "© 2026 Ayoub Elharem · Casablanca, Maroc · Conçu avec intention.",
  // Controls
  "Light mode": "Mode clair",
  "Dark mode": "Mode sombre",
  "Switch language": "Changer de langue"
};
const Ctx = createContext(null);
function LangProvider({ children }) {
  const [lang, setLangState] = useState("en");
  useEffect(() => {
    const stored = typeof window !== "undefined" && localStorage.getItem("lang") || null;
    if (stored === "en" || stored === "fr") setLangState(stored);
  }, []);
  useEffect(() => {
    if (typeof document !== "undefined") document.documentElement.lang = lang;
  }, [lang]);
  const setLang = useCallback((l) => {
    setLangState(l);
    if (typeof window !== "undefined") localStorage.setItem("lang", l);
  }, []);
  const t = useCallback(
    (en) => {
      if (lang === "en") return en;
      return fr[en] ?? en;
    },
    [lang]
  );
  const value = useMemo(() => ({ lang, setLang, t }), [lang, setLang, t]);
  return /* @__PURE__ */ jsx(Ctx.Provider, { value, children });
}
function useLang() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useLang must be used within LangProvider");
  return ctx;
}
function useT() {
  return useLang().t;
}
function Controls() {
  const { theme, toggle } = useTheme();
  const { lang, setLang, t } = useLang();
  return /* @__PURE__ */ jsxs("div", { className: "fixed right-4 top-4 z-[120] flex items-center gap-2 md:right-6 md:top-6", children: [
    /* @__PURE__ */ jsxs(
      "div",
      {
        className: "font-mono flex items-center overflow-hidden rounded-full border text-[10px] uppercase tracking-[0.2em] backdrop-blur",
        style: {
          borderColor: "var(--border)",
          backgroundColor: "color-mix(in oklab, var(--surface) 75%, transparent)"
        },
        role: "group",
        "aria-label": t("Switch language"),
        children: [
          /* @__PURE__ */ jsx(
            "button",
            {
              type: "button",
              onClick: () => setLang("en"),
              "aria-pressed": lang === "en",
              className: `px-3 py-2 transition-colors ${lang === "en" ? "bg-indigo text-white" : "text-foreground/70 hover:text-indigo"}`,
              children: "EN"
            }
          ),
          /* @__PURE__ */ jsx(
            "button",
            {
              type: "button",
              onClick: () => setLang("fr"),
              "aria-pressed": lang === "fr",
              className: `px-3 py-2 transition-colors ${lang === "fr" ? "bg-indigo text-white" : "text-foreground/70 hover:text-indigo"}`,
              children: "FR"
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsx(
      "button",
      {
        type: "button",
        onClick: toggle,
        "aria-label": theme === "dark" ? t("Light mode") : t("Dark mode"),
        className: "flex h-9 w-9 items-center justify-center rounded-full border text-foreground transition-colors hover:border-indigo hover:text-indigo",
        style: {
          borderColor: "var(--border)",
          backgroundColor: "color-mix(in oklab, var(--surface) 75%, transparent)"
        },
        children: theme === "dark" ? /* @__PURE__ */ jsx(Sun, { className: "h-4 w-4" }) : /* @__PURE__ */ jsx(Moon, { className: "h-4 w-4" })
      }
    )
  ] });
}
function NotFoundComponent() {
  return /* @__PURE__ */ jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-7xl font-bold text-foreground", children: "404" }),
    /* @__PURE__ */ jsx("h2", { className: "mt-4 text-xl font-semibold text-foreground", children: "Page not found" }),
    /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "The page you're looking for doesn't exist or has been moved." }),
    /* @__PURE__ */ jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsx(
      Link,
      {
        to: "/",
        className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
        children: "Go home"
      }
    ) })
  ] }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router2 = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return /* @__PURE__ */ jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-xl font-semibold tracking-tight text-foreground", children: "This page didn't load" }),
    /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Something went wrong on our end. You can try refreshing or head back home." }),
    /* @__PURE__ */ jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-2", children: [
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => {
            router2.invalidate();
            reset();
          },
          className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsx(
        "a",
        {
          href: "/",
          className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
          children: "Go home"
        }
      )
    ] })
  ] }) });
}
const Route$1 = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "author", content: "Ayoub Elharem" },
      { name: "theme-color", content: "#F5F2EC" }
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "preconnect", href: "https://api.fontshare.com" },
      {
        rel: "stylesheet",
        href: "https://api.fontshare.com/v2/css?f[]=clash-display@600,700&f[]=cabinet-grotesk@500,700&display=swap"
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,500;0,600;1,400&family=JetBrains+Mono:wght@400;500;600&display=swap"
      }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsx("head", { children: /* @__PURE__ */ jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$1.useRouteContext();
  return /* @__PURE__ */ jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsx(ThemeProvider, { children: /* @__PURE__ */ jsxs(LangProvider, { children: [
    /* @__PURE__ */ jsx(Controls, {}),
    /* @__PURE__ */ jsx(Outlet, {})
  ] }) }) });
}
const $$splitComponentImporter = () => import("./index-D8UJyevP.js");
const Route = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: "Ayoub Elharem | Data Scientist & Analyst — Casablanca"
    }, {
      name: "description",
      content: "Junior Data Scientist & Analyst in Casablanca. Machine Learning, BI dashboards (Power BI, Tableau), data engineering on Azure, and production ML pipelines."
    }, {
      property: "og:title",
      content: "Ayoub Elharem | Data Scientist & Analyst"
    }, {
      property: "og:description",
      content: "14 projects. Real data. Real impact. Machine Learning · BI · Cloud · Streaming. Remote-ready, available now."
    }, {
      property: "og:type",
      content: "website"
    }, {
      property: "og:url",
      content: "/"
    }, {
      name: "twitter:card",
      content: "summary_large_image"
    }],
    links: [{
      rel: "canonical",
      href: "/"
    }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Person",
        name: "Ayoub Elharem",
        jobTitle: "Data Scientist & Analyst",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Casablanca",
          addressCountry: "MA"
        },
        email: "elharemayoub1@gmail.com",
        telephone: "+212661731716",
        sameAs: ["https://www.linkedin.com/in/ayoub-elharem"],
        alumniOf: "ISGA Rabat",
        knowsAbout: ["Data Science", "Machine Learning", "Business Intelligence", "Power BI", "Python", "Data Engineering"]
      })
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const IndexRoute = Route.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$1
});
const rootRouteChildren = {
  IndexRoute
};
const routeTree = Route$1._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router2 = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  useT as a,
  router as r,
  useLang as u
};
