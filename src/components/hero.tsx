import Image from "next/image";
import { profile } from "@/data/profile";

export default function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="hero-stage relative isolate overflow-hidden bg-[#12251d] text-white"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-48 -top-56 -z-10 h-[38rem] w-[38rem] rounded-full bg-[#c9ef5b]/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-72 left-1/4 -z-10 h-[34rem] w-[34rem] rounded-full bg-[#3c8061]/20 blur-3xl"
      />

      <div className="mx-auto grid min-h-[min(830px,calc(100svh-4.5rem))] w-full max-w-7xl items-center gap-14 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:px-12 lg:py-28">
        <div className="hero-copy relative z-10 max-w-2xl">
          <div className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/[0.06] px-4 py-2.5">
            <span
              aria-hidden="true"
              className="relative flex h-2.5 w-2.5 rounded-full bg-[#c9ef5b]"
            >
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#c9ef5b] opacity-40" />
            </span>
            <span className="text-sm font-medium tracking-wide text-white/75">
              {profile.title} <span className="mx-1.5 text-white/30">/</span>{" "}
              {profile.location}
            </span>
          </div>

          <h1
            id="hero-heading"
            className="text-[clamp(3.2rem,7.2vw,6.6rem)] font-semibold leading-[0.98] tracking-[-0.065em] text-white"
          >
            I build
            <span className="block">useful things</span>
            <span className="block text-[#c9ef5b]">for the web.</span>
          </h1>

          <p className="mt-8 max-w-xl text-base leading-8 text-white/65 sm:text-lg">
            {profile.introduction}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="group inline-flex min-h-12 items-center justify-center gap-2.5 rounded-full bg-[#c9ef5b] px-6 py-3 text-sm font-bold text-[#17231d] shadow-[0_8px_24px_-10px_rgba(201,239,91,0.65)] transition duration-200 hover:-translate-y-0.5 hover:bg-[#daf58d] hover:shadow-[0_12px_30px_-10px_rgba(201,239,91,0.75)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c9ef5b]"
            >
              Explore my work
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                aria-hidden="true"
              >
                <path d="M5 12h14m-6-6 6 6-6 6" />
              </svg>
            </a>

            <a
              href="#contact"
              className="group inline-flex min-h-12 items-center justify-center gap-2.5 rounded-full border border-white/20 bg-white/[0.06] px-6 py-3 text-sm font-semibold text-white/90 backdrop-blur-sm transition duration-200 hover:-translate-y-0.5 hover:border-white/35 hover:bg-white/[0.11] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c9ef5b]"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4 text-[#c9ef5b]"
                aria-hidden="true"
              >
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="m3 7 9 6 9-6" />
              </svg>
              Get in touch
            </a>

            <a
              href="/documents/Resume2.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2.5 text-xs font-semibold text-white/65 transition duration-200 hover:border-white/25 hover:bg-white/[0.08] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c9ef5b]"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4 text-[#c9ef5b]/80 transition-colors group-hover:text-[#c9ef5b]"
                aria-hidden="true"
              >
                <path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9Z" />
                <path d="M14 3v6h6m-10 4h4m-4 4h4" />
              </svg>
              View CV
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-3.5 w-3.5 opacity-60 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                aria-hidden="true"
              >
                <path d="M7 17 17 7M7 7h10v10" />
              </svg>
            </a>

            <a
              href="/documents/Resume2.pdf"
              download="Christopher-Wachira-CV.pdf"
              className="group inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2.5 text-xs font-semibold text-white/65 transition duration-200 hover:border-white/25 hover:bg-white/[0.08] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c9ef5b]"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4 text-[#c9ef5b]/80 transition-colors group-hover:text-[#c9ef5b]"
                aria-hidden="true"
              >
                <path d="M12 3v12m0 0 4-4m-4 4-4-4" />
                <path d="M5 16v4h14v-4" />
              </svg>
              Download CV
            </a>
          </div>

          <div className="mt-12 flex flex-wrap gap-x-7 gap-y-3 border-t border-white/15 pt-6">
            {profile.interests.slice(0, 3).map((interest) => (
              <span
                key={interest}
                className="flex items-center gap-2 text-xs font-medium text-white/55 sm:text-sm"
              >
                <span aria-hidden="true" className="text-[#c9ef5b]">
                  +
                </span>
                {interest}
              </span>
            ))}
          </div>
        </div>

        <div className="hero-art relative mx-auto w-full max-w-[490px]">
          <div
            aria-hidden="true"
            className="absolute -inset-8 rounded-[3rem] bg-[#c9ef5b]/15 blur-3xl"
          />
          <div className="relative aspect-[0.86] overflow-hidden rounded-[2rem] border border-white/20 bg-[#1d3329] p-2 shadow-2xl shadow-black/30 sm:rounded-[2.5rem] sm:p-3">
            <Image
              src={profile.image}
              alt={`${profile.name}, ${profile.title}`}
              fill
              priority
              className="rounded-[1.65rem] object-cover object-center sm:rounded-[2.15rem]"
              sizes="(max-width: 1024px) 90vw, 40vw"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-2 rounded-[1.65rem] bg-gradient-to-t from-[#101d17]/80 via-transparent to-[#101d17]/10 sm:rounded-[2.15rem]"
            />
            <div className="absolute bottom-7 left-7 right-7 flex items-end justify-between gap-4 sm:bottom-9 sm:left-9 sm:right-9">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/65">
                  Hello, I&apos;m
                </p>
                <p className="mt-1.5 text-xl font-semibold tracking-tight text-white sm:text-2xl">
                  {profile.name}
                </p>
              </div>
              <span
                aria-hidden="true"
                className="mb-1 h-3 w-3 shrink-0 rounded-full bg-[#c9ef5b] shadow-[0_0_18px_#c9ef5b]"
              />
            </div>
          </div>
          <div className="absolute -right-2 top-7 rounded-2xl border border-white/10 bg-[#c9ef5b] px-4 py-3 text-[#17231d] shadow-xl shadow-black/20 sm:-right-5 sm:top-10 sm:px-5">
            <p className="text-[10px] font-bold uppercase tracking-[0.16em] opacity-65">
              Open to
            </p>
            <p className="mt-1 text-sm font-bold">New opportunities</p>
          </div>
        </div>
      </div>

      <div className="mx-auto flex max-w-7xl items-center justify-between border-t border-white/10 px-5 py-5 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/40 sm:px-8 lg:px-12">
        <span>Selected work &amp; experience</span>
        <a
          href="#about"
          className="inline-flex items-center gap-2 transition hover:text-[#c9ef5b]"
        >
          Scroll to explore <span aria-hidden="true">↓</span>
        </a>
      </div>
    </section>
  );
}
