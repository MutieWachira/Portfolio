export type ProjectDetail = {
  slug: string;
  overview: string;
  problem: string;
  solution: string;
  architecture: string[];
  features: string[];
  challenges: string[];
};

export const projectDetails: ProjectDetail[] = [
  {
    slug: "agricore",
    overview:
      "AgriCore is a farm management platform designed to help farmers organize and manage important farm operations from one application.",

    problem:
      "Managing farm activities, inventory, livestock, fields, and finances across separate records can make it difficult to maintain an organized overview of farm operations.",

    solution:
      "The application brings these management activities into a centralized platform with a structured backend, database, and web interface.",

    architecture: [
      "Next.js and TypeScript frontend",
      "FastAPI backend",
      "PostgreSQL database",
      "SQLAlchemy and Alembic for database management",
      "Docker-based local database environment",
    ],

    features: [
      "Authentication and role-based authorization",
      "Farm and field management",
      "Inventory and stock transaction tracking",
      "Livestock management",
      "Financial transaction tracking",
      "Farm layout visualization",
      "Irrigation record management in development",
    ],

    challenges: [
      "Designing access control around individual farms",
      "Maintaining data consistency during inventory transactions",
      "Managing database schema changes through migrations",
      "Building a maintainable frontend and backend architecture",
    ],
  },

  {
    slug: "sherlskyy",
    overview:
      "Sherlskyy is an experimental offline-first assistant project focused on understanding speech recognition, language models, and machine learning fundamentals.",

    problem:
      "Building an intelligent assistant requires understanding several connected areas, including speech processing, text representation, model training, and text generation.",

    solution:
      "The project explores these components through Python-based experiments, custom tokenization, local model training, and automated tests.",

    architecture: [
      "Python application",
      "PyTorch machine learning models",
      "Custom tokenizer",
      "Vosk speech recognition experiments",
      "Local model training and checkpoint management",
    ],

    features: [
      "Offline speech recognition experiments",
      "Custom text tokenization",
      "Training a small language model",
      "Model checkpoint saving and loading",
      "Automated tests for model components",
    ],

    challenges: [
      "Preparing training data for language models",
      "Understanding tokenization and context windows",
      "Training models within CPU and memory limitations",
      "Evaluating generated text and model performance",
    ],
  },

  {
    slug: "jerseyshop",
    overview:
      "JerseyShop is an e-commerce application focused on football jersey products, customer accounts, product customization, and payment integration.",

    problem:
      "Football jersey shopping can involve several product choices, including sizes, versions, and personalization options.",

    solution:
      "The application explores an online shopping experience with structured product information, customer and administrator roles, and customization options.",

    architecture: [
      "Next.js frontend",
      "TypeScript",
      "Tailwind CSS",
      "PostgreSQL database",
      "Prisma ORM",
      "NextAuth authentication",
      "M-Pesa payment integration",
    ],

    features: [
      "Customer and administrator roles",
      "Football jersey product options",
      "Sizes from XS to XXL",
      "Fan and player versions",
      "Custom names and numbers",
      "Custom badge options",
      "M-Pesa payment integration",
    ],

    challenges: [
      "Structuring product customization options",
      "Managing user roles and authentication",
      "Designing relational product data",
      "Integrating payment workflows",
    ],
  },
];