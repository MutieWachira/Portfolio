import Link from "next/link";
import { contactInfo, socialLinks } from "@/data/contact";

const footerLinks = [
  { label: "Home", href: "/home#home" },
  { label: "Projects", href: "/home#projects" },
  { label: "Contact", href: "/home#contact" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-[#12251d] px-5 py-14 text-white sm:px-8 lg:px-12 lg:py-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 md:grid-cols-[1.4fr_0.7fr_0.9fr]">
          {/* Brand */}
          <div>
            <Link
              href="/home#home"
              className="inline-flex items-center gap-2.5 text-xl font-bold tracking-tight text-white"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#c9ef5b] text-xs font-black text-[#17231d]">
                P.
              </span>
              Portfolio<span className="text-[#c9ef5b]">.</span>
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-7 text-white/55">
              Building practical digital solutions through software
              development, continuous learning, and technology.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-[0.16em] text-white/85">
              Quick links
            </h2>

            <nav
              aria-label="Footer navigation"
              className="mt-5 flex flex-col items-start gap-3"
            >
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-white/55 transition-colors hover:text-[#c9ef5b]"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact and social links */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-[0.16em] text-white/85">
              Connect with me
            </h2>

            <a
              href={`mailto:${contactInfo.email}`}
              className="mt-5 inline-block break-all text-sm font-medium text-[#c9ef5b] hover:underline"
            >
              {contactInfo.email}
            </a>

            <div className="mt-5 flex flex-wrap gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-white/55 transition-colors hover:text-[#c9ef5b]"
                >
                  {link.name} ↗
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-border pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-white/40">
            © {currentYear} Portfolio. All rights reserved.
          </p>

          <Link
            href="/home#home"
            className="w-fit text-xs font-medium text-white/50 transition-colors hover:text-[#c9ef5b]"
          >
            Back to top ↑
          </Link>
        </div>
      </div>
    </footer>
  );
}