export type SkillGroup = {
  title: string;
  description: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend Development",
    description: "Building responsive and interactive user interfaces.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
    ],
  },
  {
    title: "Backend Development",
    description: "Developing application logic, APIs, and server-side systems.",
    skills: [
      "Python",
      "FastAPI",
      "REST APIs",
      "SQLAlchemy",
      "Node.js",
      "Prisma",
    ],
  },
  {
    title: "Databases",
    description: "Working with relational databases and data management.",
    skills: [
      "PostgreSQL",
      "SQL",
      "Database Design",
      "Database Migrations",
    ],
  },
  {
    title: "AI & Machine Learning",
    description: "Exploring machine learning models and intelligent applications.",
    skills: [
      "PyTorch",
      "Scikit-learn",
      "Natural Language Processing",
      "Model Training",
      "Vosk",
    ],
  },
  {
    title: "Tools & Development",
    description: "Tools and environments used throughout the development process.",
    skills: [
      "Git",
      "GitHub",
      "Docker",
      "Linux",
      "npm",
      "VS Code",
    ],
  },
];