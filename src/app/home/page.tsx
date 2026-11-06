import type { Metadata } from "next";
import About from "@/components/about";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
import Skills from "@/components/skills";

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
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
    </main>
  );
}
