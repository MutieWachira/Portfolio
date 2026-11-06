"use client";

import { useState } from "react";
import Link from "next/link";
import ThemeToggle from "./theme-toggle";

const navigationLinks = [
  { label: "Home", href: "/home#home" },
  { label: "About", href: "/home#about" },
  { label: "Skills", href: "/home#skills" },
  { label: "Projects", href: "/home#projects" },
  { label: "Experience", href: "/home#experience" },
  { label: "Contact", href: "/home#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/90 backdrop-blur-xl">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex min-h-[4.5rem] max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12"
      >
        <Link
          href="/home#home"
          className="group inline-flex items-center gap-2.5 text-base font-bold tracking-tight text-foreground"
          onClick={() => setMenuOpen(false)}
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-xs font-black text-primary-foreground transition-transform group-hover:rotate-[-6deg]">
            P.
          </span>
          <span>
            Portfolio<span className="text-primary">.</span>
          </span>
        </Link>

        <div className="hidden items-center gap-1 rounded-full border border-border bg-surface/75 p-1 md:flex">
          {navigationLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full px-3.5 py-2 text-xs font-semibold text-muted transition-colors hover:bg-surface-secondary hover:text-foreground lg:px-4 lg:text-sm"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle />
          <Link
            href="/home#contact"
            className="group inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-hover focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
          >
            Let&apos;s talk
            <span
              aria-hidden="true"
              className="transition-transform group-hover:translate-x-0.5"
            >
              ↗
            </span>
          </Link>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((open) => !open)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface text-foreground transition hover:bg-surface-secondary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              className="h-5 w-5"
            >
              {menuOpen ? (
                <path d="m6 6 12 12M18 6 6 18" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div
          id="mobile-navigation"
          className="border-t border-border bg-background px-5 py-5 shadow-xl shadow-foreground/5 md:hidden"
        >
          <div className="mx-auto flex max-w-7xl flex-col gap-1">
            {navigationLinks.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-between rounded-xl px-4 py-3.5 text-sm font-semibold text-foreground transition-colors hover:bg-surface-secondary"
              >
                <span>{link.label}</span>
                <span className="text-xs font-medium text-muted">
                  0{index + 1}
                </span>
              </Link>
            ))}
            <Link
              href="/home#contact"
              onClick={() => setMenuOpen(false)}
              className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-hover focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
            >
              Let&apos;s talk <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
