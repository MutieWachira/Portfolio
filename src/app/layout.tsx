import type { Metadata } from "next";
import ThemeProvider from "@/components/theme-provider";
import Navbar from "@/components/navbar";
import "./globals.css";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Portfolio | Full-Stack Software Developer",
  description:
    "Portfolio showcasing software development projects, technical skills, professional experience, and interests in artificial intelligence.",
  applicationName: "Developer Portfolio",
  openGraph: {
    title: "Portfolio | Full-Stack Software Developer",
    description:
      "Explore software projects, technical skills, and professional experience.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="data-theme"
          defaultTheme="system"
          enableSystem
          storageKey="portfolio-theme"
        >
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}