import type { Metadata } from "next";
import DigitalBusinessCard from "@/components/digital-business-card";

export const metadata: Metadata = {
  title: "Digital Business Card | Christopher Mutie Wachira",
  description:
    "Connect with Christopher Mutie Wachira, Software Developer. View professional contact information and GitHub profile.",
  openGraph: {
    title: "Digital Business Card | Christopher Mutie Wachira",
    description:
      "Connect with Christopher Mutie Wachira, Software Developer.",
    type: "website",
  },
};

export default function HomePage() {
  return <DigitalBusinessCard />;
}
