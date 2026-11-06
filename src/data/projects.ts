export type Project = {
  number: string;
  title: string;
  category: string;
  image: string;
  description: string;
  technologies: string[];
  status: string;
  highlights: string[];
  githubUrl?: string;
  liveUrl?: string;
};

export const projects: Project[] = [
  {
    number: "01",
    title: "AgriCore",
    category: "Farm Management System",
    image: "/images/agricore-preview.svg",
    description:
      "A full-stack farm management platform designed to help farmers manage farm operations, inventory, livestock, finances, and field activities.",
    technologies: [
      "Next.js",
      "TypeScript",
      "FastAPI",
      "Python",
      "PostgreSQL",
      "Docker",
    ],
    status: "In Development",
    highlights: [
      "Role-based authentication and farm access control",
      "Farm, field, and activity management",
      "Inventory, livestock, and financial tracking",
    ],
    githubUrl: "https://github.com/MutieWachira/farm-management-system",
    liveUrl: "https://farm-management-system-swart-six.vercel.app/login",
  },
  {
    number: "02",
    title: "Sherlskyy",
    category: "Offline AI Assistant",
    image: "/images/sherlskyy-preview.svg",
    description:
      "An experimental offline-first voice assistant project focused on speech recognition, text generation, and understanding the fundamentals of machine learning.",
    technologies: [
      "Python",
      "PyTorch",
      "Vosk",
      "Machine Learning",
      "Natural Language Processing",
    ],
    status: "In Development",
    highlights: [
      "Offline speech recognition experiments",
      "Custom tokenizer and language-model training",
      "Model evaluation and automated testing",
    ],
    githubUrl: undefined,
    liveUrl: undefined,
  },
  {
    number: "03",
    title: "JerseyShop",
    category: "E-commerce Application",
    image: "/images/jerseyshop-preview.svg",
    description:
      "A football jersey shopping application exploring product customization, customer accounts, administration, and online payment integration.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Prisma",
      "PostgreSQL",
      "M-Pesa",
    ],
    status: "Development Project",
    highlights: [
      "Customer and administrator roles",
      "Jersey sizes and fan/player versions",
      "Custom names, numbers, and badge options",
    ],
    githubUrl: "https://github.com/MutieWachira/jerseyShop",
    liveUrl: "https://jersey-shop-six.vercel.app/",
  },
];