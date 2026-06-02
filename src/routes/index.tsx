import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/portfolio/chapters/Hero";
import { Story } from "@/components/portfolio/chapters/Story";
import { Timeline } from "@/components/portfolio/chapters/Timeline";
import { Projects } from "@/components/portfolio/chapters/Projects";
import { Numbers } from "@/components/portfolio/chapters/Numbers";
import { Education } from "@/components/portfolio/chapters/Education";
import { TechRadar } from "@/components/portfolio/chapters/TechRadar";
import { Languages } from "@/components/portfolio/chapters/Languages";
import { Contact } from "@/components/portfolio/chapters/Contact";
import { Cursor } from "@/components/portfolio/Cursor";
import { GrainOverlay } from "@/components/portfolio/GrainOverlay";
import { ScrollProgress } from "@/components/portfolio/ScrollProgress";
import { WavyDivider } from "@/components/portfolio/WavyDivider";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ayoub Elharem | Data Scientist & Analyst — Casablanca" },
      {
        name: "description",
        content:
          "Junior Data Scientist & Analyst in Casablanca. Machine Learning, BI dashboards (Power BI, Tableau), data engineering on Azure, and production ML pipelines.",
      },
      { property: "og:title", content: "Ayoub Elharem | Data Scientist & Analyst" },
      {
        property: "og:description",
        content:
          "14 projects. Real data. Real impact. Machine Learning · BI · Cloud · Streaming. Remote-ready, available now.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Ayoub Elharem",
          jobTitle: "Data Scientist & Analyst",
          address: { "@type": "PostalAddress", addressLocality: "Casablanca", addressCountry: "MA" },
          email: "elharemayoub1@gmail.com",
          telephone: "+212661731716",
          sameAs: ["https://www.linkedin.com/in/ayoub-elharem"],
          alumniOf: "ISGA Rabat",
          knowsAbout: [
            "Data Science",
            "Machine Learning",
            "Business Intelligence",
            "Power BI",
            "Python",
            "Data Engineering",
          ],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative min-h-screen bg-background text-foreground">
      <ScrollProgress />
      <Cursor />
      <GrainOverlay />
      <Hero />
      <Story />
      <WavyDivider color="coral" />
      <Timeline />
      <WavyDivider color="indigo" />
      <Projects />
      <WavyDivider color="coral" />
      <Numbers />
      <WavyDivider color="indigo" />
      <Education />
      <WavyDivider color="coral" />
      <TechRadar />
      <WavyDivider color="indigo" />
      <Languages />
      <Contact />
    </main>
  );
}
