import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="border-t border-border bg-surface-secondary/55 px-5 py-24 sm:px-8 lg:px-12 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-primary sm:text-sm">
              <span className="h-px w-7 bg-primary" />
              Selected work
            </p>
            <h2
              id="projects-heading"
              className="mt-5 text-4xl font-semibold leading-[1.08] tracking-tight text-foreground sm:text-5xl lg:text-6xl"
            >
              Ideas, made
              <span className="text-primary"> tangible.</span>
            </h2>
            <p className="mt-6 max-w-xl text-base leading-8 text-muted">
              A selection of projects demonstrating my experience with
              application development, backend systems, databases, and
              artificial intelligence.
            </p>
          </div>
          <span className="mb-1 w-fit rounded-full border border-border bg-surface px-4 py-2.5 text-xs font-semibold text-muted">
            {String(projects.length).padStart(2, "0")} projects
          </span>
        </div>

        <div className="mt-12 grid gap-6 lg:mt-16 lg:grid-cols-2 lg:gap-7">
          {projects.map((project, index) => (
            <article
              key={project.number}
              className={`group overflow-hidden rounded-[1.75rem] border border-border bg-surface transition-all duration-300 hover:-translate-y-1 hover:border-primary/35 ${
                index === 0 ? "lg:col-span-2" : ""
              }`}
            >
              <Link
                href={`/projects/${project.title.toLowerCase()}`}
                aria-label={`View ${project.title} project details`}
                className={`relative block overflow-hidden bg-surface-secondary ${
                  index === 0
                    ? "aspect-[1.75/1] sm:aspect-[2.4/1] lg:aspect-[2.65/1]"
                    : "aspect-[1.75/1]"
                }`}
              >
                <Image
                  src={project.image}
                  alt={`Illustrated artwork for the ${project.title} project`}
                  width={1200}
                  height={720}
                  sizes={
                    index === 0
                      ? "(max-width: 1024px) 100vw, 85vw"
                      : "(max-width: 1024px) 100vw, 42vw"
                  }
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025]"
                />
                <span className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-black/20 text-white backdrop-blur-md transition group-hover:border-[#c9ef5b] group-hover:bg-[#c9ef5b] group-hover:text-[#17231d]">
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                  >
                    <path d="M7 17 17 7M7 7h10v10" />
                  </svg>
                </span>
              </Link>

              <div className="p-6 sm:p-8 lg:p-9">
                <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-[0.17em] text-primary">
                      {project.category}
                    </p>
                    <h3 className="mt-2 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                      <Link
                        href={`/projects/${project.title.toLowerCase()}`}
                        className="transition-colors hover:text-primary"
                      >
                        {project.title}
                      </Link>
                    </h3>
                  </div>
                  <span className="w-fit rounded-full border border-border px-3 py-1.5 text-[11px] font-semibold text-muted">
                    {project.status}
                  </span>
                </div>

                <p className="mt-4 max-w-3xl text-sm leading-7 text-muted sm:text-base">
                  {project.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full bg-surface-secondary px-3 py-1.5 text-[11px] font-semibold text-foreground/75"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                <div className="mt-7 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-5">
                  <Link
                    href={`/projects/${project.title.toLowerCase()}`}
                    className="group/link inline-flex items-center gap-2 text-sm font-bold text-foreground transition-colors hover:text-primary"
                  >
                    Discover the project
                    <span
                      aria-hidden="true"
                      className="transition-transform group-hover/link:translate-x-1"
                    >
                      →
                    </span>
                  </Link>
                  <div className="flex gap-4">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-semibold text-muted transition-colors hover:text-primary"
                      >
                        GitHub ↗
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-semibold text-muted transition-colors hover:text-primary"
                      >
                        Live demo ↗
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
