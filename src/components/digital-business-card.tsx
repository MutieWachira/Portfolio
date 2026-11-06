"use client";

import Image from "next/image";
import Link from "next/link";
import { QRCodeSVG } from "qrcode.react";
import { useState, useSyncExternalStore } from "react";

import { profile } from "@/data/profile";
import { generateVCard } from "@/lib/vcard";

function subscribeToLocation() {
  return () => {};
}

function getPortfolioOrigin() {
  return window.location.origin;
}

function getServerPortfolioOrigin() {
  return "";
}

export default function DigitalBusinessCard() {
  const portfolioUrl = useSyncExternalStore(
    subscribeToLocation,
    getPortfolioOrigin,
    getServerPortfolioOrigin,
  );
  const [shareMessage, setShareMessage] = useState("");

  async function handleShare() {
    if (!portfolioUrl) return;

    try {
      if (navigator.share) {
        await navigator.share({
          title: `${profile.name} | Digital Business Card`,
          text: `${profile.name} — ${profile.title}`,
          url: portfolioUrl,
        });
      } else {
        await navigator.clipboard.writeText(portfolioUrl);
        setShareMessage("Card link copied to clipboard.");
      }
    } catch (error) {
      if (error instanceof Error && error.name !== "AbortError") {
        setShareMessage(
          "Unable to share automatically. Please copy the page URL.",
        );
      }
    }
  }

  function handleSaveContact() {
    if (!portfolioUrl) return;

    const vCard = generateVCard(portfolioUrl);
    const blob = new Blob([vCard], {
      type: "text/vcard;charset=utf-8",
    });

    const downloadUrl = URL.createObjectURL(blob);
    const link = document.createElement("a");

    link.href = downloadUrl;
    link.download = "christopher-wachira.vcf";

    document.body.appendChild(link);
    link.click();
    link.remove();

    URL.revokeObjectURL(downloadUrl);
  }

  return (
    <main className="relative isolate min-h-[75vh] overflow-hidden px-5 py-14 sm:px-8 sm:py-20">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-36 top-24 -z-10 h-80 w-80 rounded-full bg-primary/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-36 bottom-16 -z-10 h-96 w-96 rounded-full bg-[#c9ef5b]/10 blur-3xl"
      />

      <div className="mx-auto w-full max-w-6xl">
        <div className="mb-10 flex flex-col gap-5 sm:mb-12 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-surface/80 px-3.5 py-2 text-[11px] font-bold uppercase tracking-[0.16em] text-primary shadow-sm">
              <span
                aria-hidden="true"
                className="h-1.5 w-1.5 rounded-full bg-primary"
              />
              Digital business card
            </p>
            <h1 className="text-4xl font-semibold leading-[1.08] tracking-[-0.055em] text-foreground sm:text-5xl lg:text-6xl">
              Let&apos;s make
              <br className="hidden sm:block" /> something{" "}
              <span className="text-primary">meaningful.</span>
            </h1>
            <p className="mt-5 max-w-xl text-sm leading-7 text-muted sm:text-base">
              One simple place to connect, learn about my work, and keep my
              contact details close.
            </p>
          </div>
          <Link
            href="/home"
            className="group inline-flex w-fit items-center gap-2 rounded-full border border-border bg-surface px-5 py-3 text-sm font-semibold text-foreground shadow-sm transition duration-200 hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
          >
            Explore portfolio
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
              <path d="M7 17 17 7M7 7h10v10" />
            </svg>
          </Link>
        </div>

        <div className="grid items-stretch gap-5 lg:grid-cols-[minmax(0,1.55fr)_minmax(280px,0.75fr)] lg:gap-6">
          <section
            aria-labelledby="profile-name"
            className="overflow-hidden rounded-[1.75rem] border border-border bg-surface shadow-[0_24px_80px_-36px_rgba(16,46,36,0.38)]"
          >
            <div className="relative isolate min-h-40 overflow-hidden bg-[#12352b] px-6 py-6 sm:min-h-48 sm:px-9 sm:py-8">
              <div
                aria-hidden="true"
                className="absolute inset-0 -z-10 opacity-60 [background-image:radial-gradient(circle_at_78%_22%,rgba(201,239,91,0.28),transparent_24%),radial-gradient(circle_at_22%_110%,rgba(255,255,255,0.13),transparent_42%)]"
              />
              <div
                aria-hidden="true"
                className="absolute -right-12 -top-32 -z-10 h-72 w-72 rounded-full border border-white/10"
              />
              <div
                aria-hidden="true"
                className="absolute -right-2 -top-20 -z-10 h-52 w-52 rounded-full border border-white/10"
              />

              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/55">
                    Personal profile
                  </p>
                  
                </div>
                <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-2 text-xs font-medium text-white/90 backdrop-blur">
                  <span
                    aria-hidden="true"
                    className="h-1.5 w-1.5 rounded-full bg-[#c9ef5b] shadow-[0_0_10px_rgba(201,239,91,0.8)]"
                  />
                  Open to opportunities
                </div>
              </div>
              <div
                aria-hidden="true"
                className="absolute bottom-0 right-10 h-1 w-24 rounded-t-full bg-[#c9ef5b]/80 sm:right-16 sm:w-32"
              />
            </div>

            <div className="px-6 pb-7 sm:px-9 sm:pb-9">
              <div className="-mt-12 flex flex-col gap-5 sm:-mt-10 sm:flex-row sm:items-end sm:gap-6">
                <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-[1.4rem] border-[5px] border-surface bg-surface-secondary shadow-lg sm:h-28 sm:w-28">
                  <Image
                    src={profile.image}
                    alt={`${profile.name} profile photo`}
                    fill
                    priority
                    sizes="(max-width: 640px) 96px, 112px"
                    className="object-cover"
                  />
                </div>
                <div className="min-w-0 pb-1">
                  <h2
                    id="profile-name"
                    className="text-2xl font-semibold leading-tight tracking-[-0.04em] text-foreground sm:text-[2rem]"
                  >
                    {profile.name}
                  </h2>
                  <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1.5 text-sm text-muted">
                    <span className="font-medium text-primary">
                      {profile.title}
                    </span>
                    <span
                      aria-hidden="true"
                      className="hidden h-1 w-1 rounded-full bg-border sm:block"
                    />
                    <span className="inline-flex items-center gap-1.5">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4"
                        aria-hidden="true"
                      >
                        <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
                        <circle cx="12" cy="10" r="2.5" />
                      </svg>
                      {profile.location}
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-7 grid gap-4 sm:mt-8 sm:grid-cols-[1.15fr_0.85fr]">
                <p className="text-sm font-medium leading-6 text-foreground sm:col-span-2 sm:text-[15px]">
                  {profile.headline}
                </p>
                <section className="rounded-2xl border border-border bg-background/70 p-5 sm:p-6">
                  <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-primary">
                    About me
                  </p>
                  <p className="mt-3 text-sm leading-7 text-muted">
                    {profile.introduction}
                  </p>
                </section>

                <section className="rounded-2xl border border-border bg-surface-secondary/60 p-5 sm:p-6">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5"
                        aria-hidden="true"
                      >
                        <path d="m2 10 10-5 10 5-10 5-10-5Z" />
                        <path d="M6 12v5c3.5 2.7 8.5 2.7 12 0v-5m4-2v6" />
                      </svg>
                    </span>
                    <div className="min-w-0">
                      <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-muted">
                        Education
                      </p>
                      <p className="mt-1 text-sm font-semibold leading-5 text-foreground">
                        {profile.education.qualification}
                      </p>
                    </div>
                  </div>
                  <p className="mt-4 border-t border-border/80 pt-3 text-sm text-muted">
                    {profile.education.institution}
                  </p>
                </section>
              </div>

              <section className="mt-5" aria-labelledby="interests-heading">
                <h3
                  id="interests-heading"
                  className="text-[11px] font-bold uppercase tracking-[0.15em] text-muted"
                >
                  Areas of interest
                </h3>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {profile.interests.map((interest) => (
                    <li
                      key={interest}
                      className="rounded-full border border-border bg-surface px-3.5 py-2 text-xs font-medium text-foreground shadow-sm transition-colors hover:border-primary/40 hover:bg-surface-secondary"
                    >
                      {interest}
                    </li>
                  ))}
                </ul>
              </section>

              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                <a
                  href={`mailto:${profile.email}`}
                  className="group flex min-w-0 items-center gap-3.5 rounded-2xl border border-border bg-background/70 p-4 transition duration-200 hover:-translate-y-0.5 hover:border-primary/40 hover:bg-surface hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                      aria-hidden="true"
                    >
                      <rect x="3" y="5" width="18" height="14" rx="2" />
                      <path d="m3 7 9 6 9-6" />
                    </svg>
                  </span>
                  <span className="min-w-0">
                    <span className="block text-[11px] font-medium uppercase tracking-[0.12em] text-muted">
                      Email me
                    </span>
                    <span className="mt-1 block break-all text-xs font-semibold leading-5 text-foreground">
                      {profile.email}
                    </span>
                  </span>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="ml-auto h-4 w-4 shrink-0 text-muted transition-transform group-hover:translate-x-0.5 group-hover:text-primary"
                    aria-hidden="true"
                  >
                    <path d="M7 17 17 7M7 7h10v10" />
                  </svg>
                </a>

                <a
                  href={profile.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex min-w-0 items-center gap-3.5 rounded-2xl border border-border bg-background/70 p-4 transition duration-200 hover:-translate-y-0.5 hover:border-primary/40 hover:bg-surface hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-5 w-5"
                      aria-hidden="true"
                    >
                      <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.56.1.76-.24.76-.54v-2.1c-3.1.67-3.75-1.32-3.75-1.32-.5-1.28-1.23-1.62-1.23-1.62-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15 1 .1.76 2.5 3.4 1.8.1-.72.39-1.2.7-1.48-2.47-.28-5.07-1.23-5.07-5.49 0-1.21.43-2.2 1.15-2.97-.12-.28-.5-1.4.11-2.92 0 0 .94-.3 3.05 1.13a10.6 10.6 0 0 1 5.55 0c2.11-1.43 3.04-1.13 3.04-1.13.61 1.52.23 2.64.12 2.92.71.77 1.14 1.76 1.14 2.97 0 4.27-2.6 5.2-5.08 5.48.4.35.75 1.02.75 2.06v3.06c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z" />
                    </svg>
                  </span>
                  <span className="min-w-0">
                    <span className="block text-[11px] font-medium uppercase tracking-[0.12em] text-muted">
                      Find me on
                    </span>
                    <span className="mt-1 block text-sm font-semibold text-foreground">
                      GitHub
                    </span>
                  </span>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="ml-auto h-4 w-4 shrink-0 text-muted transition-transform group-hover:translate-x-0.5 group-hover:text-primary"
                    aria-hidden="true"
                  >
                    <path d="M7 17 17 7M7 7h10v10" />
                  </svg>
                </a>
              </div>

              <div className="mt-6 flex flex-col gap-3 border-t border-border pt-6 sm:flex-row">
                <button
                  type="button"
                  onClick={handleSaveContact}
                  disabled={!portfolioUrl}
                  className="group inline-flex min-h-12 flex-1 items-center justify-center gap-2.5 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition duration-200 hover:-translate-y-0.5 hover:bg-primary-hover hover:shadow-md disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-[18px] w-[18px] transition-transform group-hover:translate-y-0.5"
                    aria-hidden="true"
                  >
                    <path d="M12 3v12m0 0 4-4m-4 4-4-4" />
                    <path d="M5 16v4h14v-4" />
                  </svg>
                  Save contact
                </button>
                <button
                  type="button"
                  onClick={handleShare}
                  disabled={!portfolioUrl}
                  className="inline-flex min-h-12 flex-1 items-center justify-center gap-2.5 rounded-full border border-border bg-surface px-5 py-3 text-sm font-semibold text-foreground transition duration-200 hover:-translate-y-0.5 hover:border-primary/40 hover:bg-surface-secondary disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-[18px] w-[18px]"
                    aria-hidden="true"
                  >
                    <circle cx="18" cy="5" r="3" />
                    <circle cx="6" cy="12" r="3" />
                    <circle cx="18" cy="19" r="3" />
                    <path d="m8.6 10.6 6.8-4.2m-6.8 7 6.8 4.2" />
                  </svg>
                  Share card
                </button>
              </div>

              {shareMessage && (
                <p
                  role="status"
                  className="mt-4 rounded-xl bg-surface-secondary px-4 py-3 text-center text-sm text-muted"
                >
                  {shareMessage}
                </p>
              )}
            </div>
          </section>

          <aside className="flex flex-col overflow-hidden rounded-[1.75rem] border border-border bg-surface shadow-[0_24px_80px_-36px_rgba(16,46,36,0.3)]">
            <div className="relative isolate overflow-hidden bg-[#12352b] px-6 py-6 text-white sm:px-7">
              <div
                aria-hidden="true"
                className="absolute -right-10 -top-16 -z-10 h-40 w-40 rounded-full border border-white/10"
              />
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-white/55">
                    Quick connect
                  </p>
                  <h2 className="mt-2 text-lg font-semibold tracking-tight">
                    Take me with you.
                  </h2>
                </div>
                <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 bg-white/10 text-[#c9ef5b]">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                    aria-hidden="true"
                  >
                    <rect x="3" y="3" width="7" height="7" rx="1" />
                    <rect x="14" y="3" width="7" height="7" rx="1" />
                    <rect x="3" y="14" width="7" height="7" rx="1" />
                    <path d="M14 14h3v3h-3zm4 4h3v3h-3zm3-4v1m-7 6h1" />
                  </svg>
                </span>
              </div>
              <p className="mt-3 max-w-xs text-sm leading-6 text-white/65">
                Scan the code with your phone camera to open this card anywhere.
              </p>
            </div>

            <div className="flex flex-1 flex-col items-center px-6 py-7 text-center sm:px-7">
              <div className="flex min-h-[208px] w-full max-w-[240px] items-center justify-center rounded-[1.4rem] border border-border bg-white p-3 shadow-sm">
                {portfolioUrl ? (
                  <QRCodeSVG
                    value={portfolioUrl}
                    size={184}
                    level="H"
                    includeMargin
                    title="QR code linking to the digital business card"
                  />
                ) : (
                  <span className="text-sm text-gray-500">
                    Preparing QR code...
                  </span>
                )}
              </div>

              <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-surface-secondary px-3.5 py-2 text-xs font-medium text-muted">
                <span
                  aria-hidden="true"
                  className="h-1.5 w-1.5 rounded-full bg-primary"
                />
                Ready to scan
              </div>
              <p className="mt-3 max-w-full truncate text-xs text-muted">
                {portfolioUrl || "Preparing your card URL..."}
              </p>

              <div className="mt-6 w-full border-t border-border pt-5">
                <Link
                  href="/home"
                  className="group inline-flex items-center justify-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary-hover"
                >
                  Explore the full portfolio
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
                </Link>
              </div>
            </div>
          </aside>
        </div>

        <div className="mt-8 flex flex-col items-center justify-center gap-2 text-center sm:flex-row sm:gap-3">
          <span className="text-xs font-medium text-muted">
            Thanks for stopping by
          </span>
          <span
            aria-hidden="true"
            className="hidden h-1 w-1 rounded-full bg-border sm:block"
          />
          <span className="text-xs text-muted">
            Built to make good introductions a little easier.
          </span>
        </div>
      </div>
    </main>
  );
}
