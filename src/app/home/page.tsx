import type { Metadata } from "next";
import Contact from "@/components/contact";
import Hero from "@/components/hero";
import Projects from "@/components/projects";


export const metadata: Metadata = {
  title: "Portfolio | Full-Stack Software Developer",
  description:
    "Portfolio showcasing software development projects, technical skills, professional experience, and interests in artificial intelligence.",
  openGraph: {
    title: "Portfolio | Full-Stack Software Developer",
    description:
      "Explore software projects, technical skills, and professional experience.",
    type: "website",
  },
};

export default function PortfolioHomePage() {
  return (
    <main>
      <Hero />
      <Projects />
      <Contact />
    </main>
  );
}
