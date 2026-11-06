export type Experience = {
  period: string;
  role: string;
  organization: string;
  type: "Professional Experience" | "Education";
  description: string;
  responsibilities: string[];
  technologies: string[];
};

export const experiences: Experience[] = [
  {
    period: "2026",
    role: "ICT Support Attachment",
    organization: "Ministry of Lands",
    type: "Professional Experience",
    description:
      "Providing technical support to users and assisting with day-to-day ICT operations in an organizational environment.",
    responsibilities: [
      "Supporting users with hardware and software-related issues",
      "Installing and configuring operating systems and office applications",
      "Assisting with LAN connectivity, shared folders, and printer troubleshooting",
      "Helping maintain reliable access to workplace IT resources",
    ],
    technologies: [
      "Windows",
      "Linux",
      "Microsoft Office",
      "Networking",
      "Hardware Support",
    ],
  },
  {
    period: "2026",
    role: "Bachelor of Business Information Technology",
    organization: "KCA University",
    type: "Education",
    description:
      "Academic background combining business knowledge, information systems, and practical software development.",
    responsibilities: [
      "Studied information technology and business information systems",
      "Developed software development and database management skills",
      "Applied technical knowledge through practical projects",
    ],
    technologies: [
      "Programming",
      "Database Management",
      "Information Systems",
      "Software Development",
    ],
  },
  {
    period: "2023",
    role: "Diploma in Business Information Technology",
    organization: "Strathmore University",
    type: "Education",
    description:
      "Academic background combining business knowledge, information systems, and practical software development.",
    responsibilities: [
      "Studied information technology and business information systems",
      "Developed software development and database management skills",
      "Applied technical knowledge through practical projects",
    ],
    technologies: [
      "Programming",
      "Database Management",
      "Information Systems",
      "Software Development",
    ],
  },
];