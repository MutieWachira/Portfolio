import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import { projectDetails } from "@/data/project-details";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.title.toLowerCase(),
  }));
}

export default async function ProjectPage({
  params,
}: ProjectPageProps) {
  const { slug } = await params;

  const project = projects.find(
    (item) => item.title.toLowerCase() === slug,
  );

  const details = projectDetails.find(
    (item) => item.slug === slug,
  );

  if (!project || !details) {
    notFound();
  }

  return (
    <main className="min-h-screen px-5 py-12 sm:px-8 sm:py-16 lg:px-12">
      <div className="mx-auto max-w-5xl">
        <Link
          href="/home#projects"
          className="group inline-flex items-center gap-2 text-sm font-semibold text-muted transition-colors hover:text-primary"
        >
          <span className="transition-transform group-hover:-translate-x-1">←</span>
          Back to projects
        </Link>

        <header className="mt-9">
          <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-primary sm:text-sm">
            <span className="h-px w-7 bg-primary" />
            {project.category}
          </p>

          <div className="mt-4 flex flex-wrap items-end justify-between gap-5">
            <h1 className="text-5xl font-semibold tracking-[-0.055em] text-foreground sm:text-7xl">
              {project.title}
            </h1>
            <span className="rounded-full border border-border bg-surface px-4 py-2 text-xs font-semibold text-muted">
              {project.status}
            </span>
          </div>

          <p className="mt-6 max-w-3xl text-base leading-8 text-muted sm:text-lg">
            {details.overview}
          </p>

          <div className="relative mt-10 aspect-[1.8/1] overflow-hidden rounded-[1.75rem] border border-border bg-surface-secondary sm:aspect-[2.25/1]">
            <Image
              src={project.image}
              alt={`Illustrated preview of ${project.title}`}
              width={1200}
              height={720}
              priority
              sizes="(max-width: 1024px) 100vw, 960px"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {project.technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-full border border-border bg-surface px-4 py-2 text-xs font-semibold text-foreground"
              >
                {technology}
              </span>
            ))}
          </div>

          <div className="mt-7 flex flex-wrap gap-3 border-b border-border pb-12">
            {project.githubUrl && (
                <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-primary hover:text-primary"
                >
                View source code ↗
                </a>
            )}

            {project.liveUrl && (
                <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-hover"
                >
                Visit live application ↗
                </a>
            )}
          </div>
        </header>

        <div className="grid gap-5 py-12 sm:py-14 md:grid-cols-2">
          <section className="rounded-[1.5rem] border border-border bg-surface p-7 sm:p-8">
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-primary">01 / Context</p>
            <h2 className="mt-4 text-2xl font-semibold tracking-tight text-foreground">
              The problem
            </h2>

            <p className="mt-5 max-w-3xl text-sm leading-8 text-muted">
              {details.problem}
            </p>
          </section>

          <section className="rounded-[1.5rem] border border-border bg-surface p-7 sm:p-8">
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-primary">02 / Approach</p>
            <h2 className="mt-4 text-2xl font-semibold tracking-tight text-foreground">
              The solution
            </h2>

            <p className="mt-5 max-w-3xl text-sm leading-8 text-muted">
              {details.solution}
            </p>
          </section>

          <section className="rounded-[1.5rem] border border-border bg-surface p-7 sm:p-8">
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-primary">03 / Stack</p>
            <h2 className="mt-4 text-2xl font-semibold tracking-tight text-foreground">
              Architecture and technologies
            </h2>

            <ul className="mt-6 space-y-3">
              {details.architecture.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 rounded-xl bg-surface-secondary/70 p-4 text-sm leading-6 text-muted"
                >
                  <span aria-hidden="true" className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section className="rounded-[1.5rem] border border-border bg-surface p-7 sm:p-8">
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-primary">04 / In practice</p>
            <h2 className="mt-4 text-2xl font-semibold tracking-tight text-foreground">
              Key features
            </h2>

            <ul className="mt-6 space-y-4">
              {details.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-3 text-sm leading-7 text-muted"
                >
                  <span
                    aria-hidden="true"
                    className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary"
                  />
                  {feature}
                </li>
              ))}
            </ul>
          </section>

          <section className="rounded-[1.5rem] border border-border bg-surface p-7 sm:p-8">
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-primary">05 / Learnings</p>
            <h2 className="mt-4 text-2xl font-semibold tracking-tight text-foreground">
              Technical challenges
            </h2>

            <ul className="mt-6 space-y-4">
              {details.challenges.map((challenge) => (
                <li
                  key={challenge}
                  className="rounded-xl bg-surface-secondary/70 p-5 text-sm leading-7 text-muted"
                >
                  {challenge}
                </li>
              ))}
            </ul>
          </section>
        </div>

        <div className="border-t border-border py-10">
          <Link
            href="/home#projects"
            className="inline-flex rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-hover"
          >
            Explore other projects
          </Link>
        </div>
      </div>
    </main>
  );
}